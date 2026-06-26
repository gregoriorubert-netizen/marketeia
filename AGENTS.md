# AGENTS.md — marketeia

Guia para qualquer assistente de IA (Cursor, Claude Code, Copilot, etc.) trabalhando neste repositório. Lê isto antes de gerar qualquer texto, layout ou imagem para a marca.

Este arquivo é o **índice + as regras inegociáveis + o fluxo de produção**. A fonte profunda de cada assunto vive nos arquivos canônicos (apontados abaixo) — não duplique conteúdo, vá na fonte.

---

## O que é a marketeia

Serviço completo de marketing digital com IA embutida: tráfego pago parametrizado, conteúdo intencional, CRM próprio com agente de IA e um **Painel** em tempo real para o cliente. Marca generalista, ofertas nichadas. Sócios: **Caio** (marca, design, web, produto/IA) e **Greg** (tráfego, metodologia, comercial).

A tese em uma linha: **a gente vende resultado com transparência radical**. A marca **mostra, não promete** — toda afirmação grande vem ancorada num número, print ou demo do Painel.

Contexto completo de negócio: **`PDR-Marketeia.md`**.

---

## Regras inegociáveis (nunca quebrar)

1. **O nome é `marketeia`** — uma palavra, tudo minúsculo, o sufixo **`ia`** destacado **apenas por cor** (vermillion). Nunca "Markete AI", nunca "marketeAI", nunca caixa-alta no nome, nunca "IA" maiúsculo dentro do nome.
2. **Zero roxo. Em nenhuma circunstância.** Roxo é a cor da categoria "IA genérica" e é proibido aqui. A paleta é RADAR: petróleo + vermillion + sinal (teal) + creme.
3. **Um vermillion por dobra.** Vermillion é o sinal: aparece uma vez por seção — no CTA, no dado decisivo ou no pulso. Se aparece duas vezes, uma está errada. O resto é petróleo e creme.
4. **Mostra, não promete.** Nada de "resultados incríveis" ou "triplicamos suas vendas". Mostra o número, o print, o Painel. Quando bater a dúvida "isso é promessa ou prova?", reescreve até virar prova.
5. **Três vozes de tipo, sempre.** Archivo (manchete/display) + Inter Tight (UI/corpo) + JetBrains Mono (eyebrow, métrica, label de sistema). Nunca uma fonte só.
6. **Tagline:** `SINAL VS RUÍDO`. **Eyebrow** sempre em mono com um dot. **Sem sorriso de banco de imagem** com laptop — foto é de PME real em operação.

---

## Mapa do repositório

| Pasta / arquivo | O que é | Use como |
|---|---|---|
| `PDR-Marketeia.md` | Documento de produto/negócio (tese, metas, arquitetura) | Contexto estratégico |
| `design_system/DESIGN.md` | **Fonte da verdade visual** (paleta, tipo, motion, anti-genérico) | Toda decisão de design |
| `design_system/tokens.css` | CSS custom properties — importar e usar `var(--token)` | Implementação web |
| `design_system/tokens.json` | Variáveis para importar no Figma | Setup de Figma |
| `design_system/showcase.html` | DS renderizado (abrir no browser = referência visual viva) | Ver o sistema aplicado |
| `copy/COPY-Marketeia.md` | **Fonte da verdade de voz** (tom, 7 regras, exemplos faz/não-faz) | Todo texto |
| `copy/LP-Marketeia-v1.md` | Copy da landing page v1 | Referência de long-form |
| `lp/index.html` | Build da landing page | Referência de DS aplicado em web |
| `_idv_build/` | **Sistema de produção de posts** (templates HTML + pipeline + assets) | Produzir conteúdo social |
| `_idv_build/covers/` | Biblioteca de assets de marca (fotos, clay, texturas, logos, ícones) | Imagens que os templates referenciam |
| `assets/logo/` | Logos oficiais em SVG (`marketeia-icon.svg` + lockup horizontal) | Logo da marca |
| `assets/social/` | PFPs, posts em alta resolução e elementos gráficos prontos | Assets sociais publicáveis |

> **Nota de assets:** o logo/ícone-pulso oficial vive em `assets/logo/` (SVG). Os PNGs finais dos 12 posts vivem no Figma (não neste repo); `_idv_build/covers/` traz a matéria-prima usada nos templates.

---

## Voz (resumo — fonte: `copy/COPY-Marketeia.md`)

Fala como o Greg num áudio de WhatsApp, entrega como consultoria que cobra caro. **Energia de rua, profundidade de método.**

- Frase curta. Uma ideia por vez.
- Português de gente, não corporatês. Banido: alavancar, solução, ecossistema, jornada, desbloquear, próximo nível, revolucione.
- Mostra o número, não o adjetivo.
- Anti-agência sem virar choro: aponta e resolve, não reclama.
- Diagnóstico, não promessa. A marca nunca jura resultado — ela lê o sinal e mostra o gargalo.
- CTA usa a língua da marca ("Pede o diagnóstico", "Vê o sinal"), nunca "Saiba mais" sozinho.

---

## Sistema visual (resumo — fonte: `design_system/DESIGN.md`)

**Paleta RADAR** (sempre via token, nunca hardcode):

| Papel | Token | Dark | Light |
|---|---|---|---|
| Vermillion (ação/sinal) | `--color-primary` | `#E8401F` | `#D03A1B` |
| Petróleo (base) | `--color-petrol` / `--color-bg` | `#11393B` / `#0A1F21` | `#F4F1E8` |
| Sinal / teal (apoio) | `--color-secondary` | `#6FB5AC` | `#1E6B63` |
| Creme (luz/texto) | `--color-cream` | `#F2EDE3` | — |

**Tipo:** Archivo 800 (display) · Inter Tight (UI) · JetBrains Mono (mono/evidência). Radius 4/8/14/20. Sombra é tintada de petróleo, nunca `shadow-md` cru. Motion: só `transform` e `opacity`, nunca `transition-all`, reduced-motion respeitado.

**Anti-genérico (os "AI tells" proibidos):** sem glow roxo, sem spark flutuante solto, sem mosaico de cards uniformes, sem alturas de seção idênticas, sem gente de stock sorrindo com laptop. Detalhe completo em DESIGN.md §17.

---

## Como produzir um post social (4 templates travados)

Cada post mapeia para um destes. Tudo 4:5, **1080×1350**.

1. **Foto full-bleed** — foto graded full-bleed + overlay vertical escuro (transparente→petróleo embaixo) + eyebrow/handle no topo + bloco inferior-esquerdo (pulso, manchete com acento teal, sub, **CTA vermillion preenchido**) + rodapé (divisória + wordmark + tagline).
2. **Sem imagem, centralizado** — fundo creme ou escuro + dois blobs de gradiente em cantos opostos + tudo centralizado (eyebrow sem handle, manchete, grafismo de pulso, sub, CTA, wordmark) + sem tagline/divisória.
3. **Cover-box** — caixa de imagem arredondada no topo + pulso grosso full-width como base + manchete + sub + CTA bordered + rodapé completo.
4. **Imagem conceitual/clay full-bleed** — imagem clay gerada como fundo + overlay + eyebrow + pulso pequeno + manchete indentada com **1ª palavra-chave em vermillion** + sub + CTA bordered + rodapé.

**Regras de tipografia para IG (mínimos, travados):**
- Eyebrow: JetBrains Mono **Bold, mínimo 18px**.
- Texto de apoio/parágrafo: **mínimo 28px** (quantidade média/alta de texto) até **32px** (pouco texto). Fonte escala inversa à quantidade de texto.
- CTA: **Bold, mínimo 24px**. Manchetes grandes (60px+).
- Ícones/logos decorativos = nós **livres** (fora do auto-layout), com leve rotação + sombra para profundidade. Nunca aninhar ícone decorativo em coluna auto-layout.

**Pipeline de render:** os templates são HTML/CSS usando os tokens do DS. Renderiza para PNG @2x via Chrome headless:

```bash
# macOS / Linux
chrome --headless=new --disable-gpu --force-device-scale-factor=2 \
  --window-size=1080,1350 --screenshot=out.png _idv_build/post.html
```

No Windows há um wrapper pronto: `_idv_build/render.ps1` (`.\render.ps1 -Html post.html -Out out.png`). Mockups de UI (ex.: barra de busca do Google) constroem-se em HTML/CSS e renderizam — **nunca** gerar UI por IA (borra texto/interface).

---

## Checklist final (antes de entregar qualquer peça)

- [ ] Nome escrito `marketeia`, `ia` só destacado por cor?
- [ ] Zero roxo? Paleta dentro do RADAR?
- [ ] No máximo um vermillion por dobra/seção?
- [ ] Toda afirmação grande tem prova (número/print) do lado?
- [ ] Três papéis de fonte presentes (não uma só)?
- [ ] Copy passa nas 7 regras de voz (curta, sem corporatês, mostra número)?
- [ ] Em post: tipografia acima dos mínimos de IG (eyebrow 18 Bold, apoio 28+, CTA 24 Bold)?
- [ ] Sombra tintada de petróleo, motion só transform/opacity?
