const DEFAULT_API_VERSION = 'v25.0'
const DATE_PRESET = 'last_30d'

const METRICS = {
  subscription: {
    label: 'Custo por Assinatura',
    actionTypes: [
      'subscribe',
      'omni_subscribe',
      'offsite_conversion.fb_pixel_subscribe',
      'onsite_conversion.subscribe',
    ],
  },
  message: {
    label: 'Custo por Mensagem Iniciada',
    actionTypes: [
      'onsite_conversion.messaging_conversation_started_7d',
      'messaging_conversation_started_7d',
      'onsite_conversion.total_messaging_connection',
      'onsite_conversion.messaging_first_reply',
    ],
  },
  lead: {
    label: 'Custo por Lead',
    actionTypes: [
      'lead',
      'onsite_conversion.lead_grouped',
      'offsite_conversion.fb_pixel_lead',
      'leadgen_grouped',
      'omni_lead',
    ],
  },
}

function json(payload, status = 200, cacheControl = 'no-store') {
  return Response.json(payload, {
    status,
    headers: { 'Cache-Control': cacheControl },
  })
}

function positiveNumber(value) {
  const number = Number(value)
  return Number.isFinite(number) && number > 0 ? number : null
}

function firstAction(items, actionTypes) {
  if (!Array.isArray(items)) return null
  for (const actionType of actionTypes) {
    const item = items.find(entry => entry?.action_type === actionType)
    const value = positiveNumber(item?.value)
    if (value !== null) return { actionType, value }
  }
  return null
}

function buildMetric(row, definition) {
  const cost = firstAction(row.cost_per_action_type, definition.actionTypes)
  const count = firstAction(row.actions, definition.actionTypes)

  return {
    label: definition.label,
    cost: cost?.value ?? null,
    count: count?.value ?? null,
    actionType: cost?.actionType ?? count?.actionType ?? null,
  }
}

export async function GET(request) {
  const accessToken = process.env.META_ACCESS_TOKEN?.trim()
  const rawAccountId = process.env.META_AD_ACCOUNT_ID?.trim()

  if (!accessToken || !rawAccountId) {
    return json({
      configured: false,
      code: 'META_NOT_CONFIGURED',
      message: 'A conta de anúncios da Meta ainda não foi configurada para esta proposta.',
    }, 503)
  }

  const accountId = rawAccountId.replace(/^act_/, '')
  const apiVersion = process.env.META_API_VERSION?.trim() || DEFAULT_API_VERSION
  const params = new URLSearchParams({
    access_token: accessToken,
    fields: 'spend,actions,cost_per_action_type,date_start,date_stop',
    level: 'account',
    date_preset: DATE_PRESET,
    action_report_time: 'conversion',
    limit: '1',
  })

  try {
    const metaResponse = await fetch(
      `https://graph.facebook.com/${apiVersion}/act_${accountId}/insights?${params}`,
      { headers: { Accept: 'application/json' }, signal: request.signal },
    )
    const metaPayload = await metaResponse.json()

    if (!metaResponse.ok || metaPayload.error) {
      const message = metaPayload.error?.message || `Meta Insights respondeu com status ${metaResponse.status}`
      console.error('[meta-projection] Meta Insights error:', message)
      return json({ configured: true, code: 'META_API_ERROR', message }, 502)
    }

    const row = metaPayload.data?.[0]
    if (!row) {
      return json({
        configured: true,
        source: 'Meta Ads',
        period: { preset: DATE_PRESET, start: null, end: null },
        averageCost: null,
        metrics: Object.fromEntries(
          Object.entries(METRICS).map(([key, definition]) => [key, {
            label: definition.label,
            cost: null,
            count: null,
            actionType: null,
          }]),
        ),
        updatedAt: new Date().toISOString(),
      }, 200, 'public, s-maxage=900, stale-while-revalidate=3600')
    }

    const metrics = Object.fromEntries(
      Object.entries(METRICS).map(([key, definition]) => [key, buildMetric(row, definition)]),
    )
    const availableCosts = Object.values(metrics)
      .map(metric => metric.cost)
      .filter(cost => typeof cost === 'number')
    const averageCost = availableCosts.length
      ? availableCosts.reduce((sum, cost) => sum + cost, 0) / availableCosts.length
      : null

    return json({
      configured: true,
      source: 'Meta Ads',
      period: { preset: DATE_PRESET, start: row.date_start ?? null, end: row.date_stop ?? null },
      averageCost,
      metrics,
      updatedAt: new Date().toISOString(),
    }, 200, 'public, s-maxage=900, stale-while-revalidate=3600')
  } catch (error) {
    if (error?.name === 'AbortError') {
      return json({ configured: true, code: 'REQUEST_ABORTED', message: 'Consulta cancelada.' }, 499)
    }
    console.error('[meta-projection] Unexpected error:', error)
    return json({
      configured: true,
      code: 'META_REQUEST_FAILED',
      message: 'Não foi possível consultar as métricas da Meta agora.',
    }, 502)
  }
}
