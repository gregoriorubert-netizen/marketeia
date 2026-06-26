# DESIGN.md - Marketeia

**Version:** Sinal Aberto v1
**Generated:** 2026-06-10
**Source:** `design_system/showcase.html`

Este arquivo é auto-exportado do showcase. Nunca editar à mão.
Pra atualizar, edite o `showcase.html` e re-exporte.

Companion files:
- `design_system/showcase.html` - fonte visual da verdade
- `design_system/tokens.css` - CSS custom properties importáveis
- `design_system/tokens.json` - import de Figma Variables

---

## 1. Foundation Principles

1. **Sinal sobre ruído** - Vermillion só aparece onde há sinal: um CTA, um dado que muda decisão, um alerta. O resto fica em petróleo e creme.
2. **Petróleo é a sala, vermillion é o botão** - A base é funda e calma pra carregar autoridade. A ação é quente e única. Os dois nunca disputam a mesma dobra.
3. **Transparência é layout** - Sem caixa-preta: número grande, dado visível, hierarquia honesta. O Painel é a prova, o site é a promessa.
4. **Três vozes de tipo** - Archivo pra manchete, Inter Tight pra operação, JetBrains Mono pra evidência, métrica e label de sistema.
5. **Cantos 4/8/14/20, material fosco** - Radius nunca é acidental. Profundidade vem de sombra tintada de petróleo, nunca de brilho ou vidro pesado.
6. **Zero cara de IA genérica** - Sem glow roxo, sem spark flutuante, sem mosaico de cards uniformes, sem sorriso de banco de imagem com laptop.

## 2. System Modules

- **Palette:** RADAR: dark e light, tokens semânticos
- **Typography:** 3 papéis, escala fluida, ritmo travado
- **Spacing:** base 4px, 8 paradas, respiro generoso
- **Components:** botões, forms, estados completos, preview do Painel
- **Elevation:** sombras tintadas de petróleo, sem stock
- **Narrative:** cada decisão visual rastreia o conceito de sinal

## 3. Color Palette

| Nome | Hex (dark) | Hex (light) | Token |
|---|---|---|---|
| Vermillion | #E8401F | #D03A1B | `--color-primary` |
| Vermillion Bright (hover) | #FF5C36 | #E8401F | `--color-primary-bright` |
| Petróleo | #11393B | #11393B | `--color-petrol` |
| Petróleo Ink (bg) | #0A1F21 | - | `--color-bg` (dark) |
| Sinal | #6FB5AC | #1E6B63 | `--color-secondary` |
| Creme | #F2EDE3 | #F2EDE3 | `--color-cream` |
| Creme Surface | #ECE7DA | #ECE7DA | `--color-neutral-100` |
| Âmbar | #E9A23B | #E9A23B | `--color-warning` |
| Verde Confirma | #57B97E | #57B97E | `--color-success` |
| Rose Recupera | #E0455C | #E0455C | `--color-error` |
| Texto sobre vermillion | #FFF7EF | #FFF7EF | `--color-text-on-primary` |

Light mode é reconstruído pra contraste, não invertido: bg vira creme #F4F1E8, texto vira petróleo-ink #122B2D, vermillion escurece pra #D03A1B e Sinal escurece pra #1E6B63.

## 4. Color Heuristics

- **Vermillion:** um CTA por seção, o dado decisivo, o pulso da marca.
- **Petróleo:** fundos, bands institucionais, superfícies do Painel.
- **Sinal:** links, dataviz secundária, estados informativos.
- **Creme:** texto sobre dark, light mode, respiro entre bands.
- **Âmbar e Rose:** só estados (atenção e recuperação). Nunca decoração.
- **Neutro:** a maior parte da UI. Cor tem que merecer atenção.

## 5. Typography Roles

- **Display:** Archivo (800 nas manchetes, 700 e 600 de apoio). H1/H2, declarações. Tracking -0.02em, line-height 0.98.
- **UI:** Inter Tight (300-700). Corpo, botões, labels, long-form. Line-height 1.6.
- **Mono:** JetBrains Mono (300-500). Eyebrows, métricas, evidência, labels de sistema. 11px uppercase com tracking .12em no meta.

Regra do wordmark: o nome é sempre **marketeia** em lowercase com o sufixo "ia" na cor de accent. Nunca caixa alta no nome, nunca "Markete AI", nunca "marketeAI".

## 6. Type Scale

| Papel | Spec |
|---|---|
| Hero | clamp(54px, 8vw, 112px) |
| H2 | clamp(38px, 4.8vw, 68px) |
| H3 | clamp(24px, 2.8vw, 38px) |
| Body | 15-17px, line-height 1.6 |
| Small | 13-14px |
| Meta | 11px mono, .12em uppercase |

## 7. Components

### Botões
- **Primary:** bg `--color-primary`, texto `--color-text-on-primary`, peso 700, radius 8px, altura 44px. Hover: bg `--color-primary-bright` + translateY(-2px). Um primary por seção.
- **Secondary:** bg glass sutil, borda `--border-default`. Hover: borda strong + lift.
- **Tertiary:** transparente, sem borda, cor `--color-text-secondary`.
- **Disabled:** opacity .5, cursor not-allowed, sem hover.
- Todos: focus-visible com outline 2px `--color-primary` offset 3px; active translateY(-1px) scale(.99).

### Forms
- Inputs e selects: altura 44px, radius 8px, bg glass, borda `--border-default`.
- Estado de erro: borda mesclada com `--color-error`, mensagem pequena em Rose explicando o que falhou e como corrigir.

### Estados obrigatórios
- **Loading:** skeleton com a forma do conteúdo final (shimmer 1.7s). Spinner é banido.
- **Empty:** ícone + o que falta + um próximo passo claro.
- **Error:** ícone + o que falhou + como recuperar. Sem banner vermelho vago.
- **Disabled:** opacity .5 + aria-disabled.

### Painel Marketeia (produto)
O Painel usa os mesmos tokens deste DS: cards de métrica com label mono 10px + valor em Archivo, bar-charts com gradiente Sinal sobre Vermillion, listas de assets com superfícies elevated.

## 8. Motion System

- **Micro-interação:** lift translateY(-2px) + sombra, 200ms `--ease-out`. Só em elementos interativos.
- **Scroll reveal:** opacity 0 a 1 + translateY(16px a 0), 560ms, stagger 80-120ms, via IntersectionObserver na classe `.reveal`.
- **Hero text:** fade-up palavra por palavra, 60ms de stagger. Uma vez por página, só no H1.
- **WebGL:** flag DESLIGADA neste projeto. Se ligar um dia, só no hero, com fallback e reduced-motion.
- Durações: fast 150ms, base 200ms, medium 400ms, slow 600ms. Easing padrão cubic-bezier(0.2, 0.8, 0.2, 1).

## 9. Motion Anti-Patterns

- Nunca transition-all
- Nunca animar width ou height
- Nunca parallax pesado
- Nunca loop infinito sem pausa
- Nunca WebGL fora do hero

## 10. Icon System

- **Biblioteca:** Lucide, única no sistema. Stroke 1.75px em todos os tamanhos, currentColor, sem exceção.
- **Tamanhos:** sm 16px, md 20px, lg 24px, xl 32px.
- **Set base:** ArrowRight, TrendingUp, BarChart3, Target, Zap, MessageCircle, Search, Check, X, Menu, Copy, Upload, Download, ExternalLink, Image, Settings, Sparkles, FileText.
- Proibido: misturar bibliotecas, misturar filled com outline, emoji como ícone.
- O M-pulso da marca é símbolo próprio (`assets/logo/marketeia-icon.svg`), não faz parte do set de UI.

## 11. Asset Direction

### Photography
PME real em operação: dono de negócio brasileiro no ambiente dele (balcão, clínica, oficina). Luz natural, meio da ação, zero pose de banco de imagem.

### Illustration
Diagramas de funil e sinal: estrutura em stroke único, funis, pulsos, fluxos de campanha. Esquemático, técnico, sem mascote.

### AI generated image
Só quando a cena carrega petróleo, vermillion e creme, e nunca com texto fake de UI. Prompts na seção 14.

### Pattern / texture
A linha de pulso do M vira grafismo de seção. Substrato sutil, nunca papel de parede.

## 12. Placeholder Image Categories

### Dono de negócio real
- **Onde usa:** hero da LP e seção de diagnóstico.
- **Termos:** `brazilian small business owner, shop owner portrait candid, clinic reception real, entrepreneur working brazil`
- **Mood:** real, no ambiente, luz natural, postura digna. Rejeitar: escritório corporate, fundo branco, sorriso de stock.

### Operação e atendimento
- **Onde usa:** seções de metodologia e do funil de WhatsApp.
- **Termos:** `whatsapp business conversation, customer service small business, store counter service, phone checkout brazil`
- **Mood:** mãos, telas, balcão, movimento real. Rejeitar: mockup genérico, mão de modelo com luz de estúdio.

### Dado em tela
- **Onde usa:** blocos do Painel e prova de transparência.
- **Termos:** `analytics dashboard dark screen, marketing data laptop, charts on screen closeup`
- **Mood:** tela com dado plausível, ângulo de quem trabalha. Rejeitar: dashboard fake colorido demais, azul corporativo de stock.

### Textura quente abstrata
- **Onde usa:** divisores de seção e fundos de stories.
- **Termos:** `dark teal texture, warm paper texture, abstract gradient deep green, grain texture minimal`
- **Mood:** petróleo profundo, grão sutil, calor de creme. Rejeitar: roxo, neon azul, bokeh genérico.

## 13. Quality Standards

- **Accessibility:** contraste AA, foco visível, navegação por teclado, reduced motion. Texto 4.5:1, UI 3:1, toque 44px.
- **Responsive:** mobile-first (o dono de PME decide no celular). Breakpoints 375, 768, 1024, 1280.
- **Microcopy:** ação específica, erro útil, recuperação clara. Banidos: alavancar, desbloquear, próximo nível.
- **States:** loading, empty, error, success, disabled. Skeleton no lugar de spinner.
- **Performance:** 1MB por página, 180KB de hero, 80KB de JS. LCP < 2.5s, CLS < 0.1, INP < 200ms.
- **SEO:** title, description, OG, schema, sitemap, robots. OG 1200x630, description 150-160 chars, Schema.org ProfessionalService.

## 14. AI Image Prompts

### Global direction
Toda imagem respeita a paleta RADAR: petróleo profundo, vermillion como único calor, creme como luz. Fotografia é documental e natural, nunca stock corporate. Nenhuma imagem leva texto fake de UI, glow roxo ou spark flutuante genérico. O pulso do M é o único grafismo de marca permitido dentro de imagem.

### Hero da LP - "Pulso sobre petróleo"
```text
Cinematic abstract scene of a deep petrol-green dark room filled with soft volumetric haze. A single thin glowing vermillion red-orange pulse line crosses the frame horizontally like a heartbeat signal, casting subtle warm light on matte surfaces. Faint warm cream light enters from one side. Minimal, premium, quiet tension between deep teal darkness and one precise line of energy. Photographic depth, subtle film grain, generous negative space on the left for typography. No text, no UI elements, no purple, no lens flare, no people, no neon city.
```
Ferramentas: nano-banana-2 ou FLUX-2 pra precisão de linha; Midjourney pra variação de atmosfera.

### Seção diagnóstico - "A leitura do sinal"
```text
Documentary top-down photograph of a Brazilian small business owner's desk during a strategy review: hands pointing at a phone showing a simple dark analytics screen, paper notes with handwritten numbers, coffee cup, warm natural window light. Palette leans deep teal shadows and warm cream highlights, one small red-orange accent object on the desk. Honest, grounded, mid-action. Shallow depth of field, 35mm feel, subtle grain. No faces, no corporate office, no staged smile, no fake charts with rainbow colors, no logos.
```
Ferramentas: nano-banana-2 pro realismo de mãos e telas; FLUX-2 como alternativa.

### Aula e webinar - "Sala de sinal"
```text
Wide 16:9 minimal backdrop in deep petrol green, almost black at the edges, with a faint repeating pulse-line pattern etched in slightly lighter teal across the lower third. One vermillion red-orange pulse stroke runs through the pattern as the focal accent. Soft warm cream vignette in the center where a speaker or title will sit. Matte, premium, flat depth, extremely subtle grain. Large clean negative space in the center. No text, no people, no purple, no glossy 3D shapes, no particles.
```
Ferramentas: nano-banana-2 pra controle do padrão; upscale 4x pra uso em vídeo.

### Fundo de stories - "Textura de pulso vertical"
```text
Vertical 9:16 abstract background: deep petrol green field with fine warm grain, a single thin vermillion pulse line traveling vertically along the right edge like a live signal. Top two thirds almost empty for typography, bottom third slightly lighter with a soft cream glow rising. Matte print-like finish, flat and quiet, premium restraint. No text, no icons, no purple, no gradients with more than two colors, no light leaks.
```
Ferramentas: nano-banana-2 ou geração local z-image-turbo pra volume de variações.

## 15. Brand Narrative Applied

- **Sinal:** vermillion aparece uma vez por dobra: no CTA, no número decisivo ou no pulso. Se aparece duas vezes, uma está errada.
- **Transparência:** número grande, em mono, sempre visível. Dado nunca fica escondido atrás de clique ou tooltip.
- **Descolado corporate:** o microcopy fala como o Greg fala. O layout obedece grid como consultoria. A tensão entre os dois é a marca.
- **Verbo:** CTA usa a língua da marca: "Marketeia aí", "Pede o diagnóstico", "Vê o sinal". Nunca "Saiba mais" sozinho.
- **Anti-agência:** foto real de PME, zero sorriso de stock. Promessa só aparece com prova do lado (número, print, Painel).
- **Produto-first:** o Painel Marketeia usa os mesmos tokens deste DS. Site e produto falam a mesma língua visual.

## 16. Heuristics of Use

### Quando vermillion vs sinal?
Vermillion é a ação mais importante da seção (um CTA por seção). Sinal é apoio: link, dado secundário, estado informativo. Nunca os dois competindo na mesma dobra.

### Quando banda escura vs clara?
Banda em petróleo pra declarações de peso (hero, manifesto, prova, CTA final). Banda em creme pra conteúdo informacional. Alternar pra criar ritmo de leitura.

### Quando usar o pulso gráfico?
Como divisor de seção, sublinhado de dado importante ou textura de fundo em área vazia. Nunca mais de um pulso visível por viewport.

### Quando mono?
Métrica, label de sistema, eyebrow, evidência (CPL, CTR, datas). Se o conteúdo é prova ou dado, é mono. Se é argumento, é UI.

### Quando card vs banda inteira?
Card pra unidade limitada (depoimento, recurso do Painel, plano). Banda inteira pra composição de peso (hero, manifesto, oferta). Não empilhar mais de duas grades de cards seguidas.

### Quando animar?
Quando o estado muda: hover, load, scroll reveal, validação. Conteúdo estático fica estático. Animação decorativa é dívida.

## 17. Anti-Generic Guardrails

- **Cores:** nunca vermillion em massa de texto ou fundo de seção inteira. Nunca paleta Tailwind default.
- **Cores:** nada de roxo, em nenhuma circunstância. É a cor da categoria "IA genérica".
- **Tipografia:** nunca uma fonte só. Display + UI + mono, com os papéis deste DS.
- **Sombras:** nunca shadow-md cru. Sombra é tintada de petróleo, em camadas.
- **Fundos:** alternar bands com ritmo. Nunca empilhar paredão branco ou dark infinito.
- **Motion:** nunca transition-all. Só transform e opacity. Reduced motion respeitado.
- **Estados:** todo clicável tem hover, focus-visible e active. Sem exceção.
- **Layout:** nem tudo centralizado. Variar composição entre seções, usar o grid.
- **AI tells:** sem glow roxo, sem mosaico de cards uniformes, sem alturas de seção idênticas, sem gente de stock sorrindo com laptop.
- **Marca:** o nome é sempre marketeia em lowercase com "ia" no accent. Nunca caixa alta no nome, nunca "Markete AI", nunca "marketeAI".
- **Marca:** o spark só existe integrado ao M do ícone. Spark flutuante solto é proibido.
- **Copy:** banidos alavancar, desbloquear, revolucione, próximo nível. Promessa exige prova ao lado.

## 18. System Context

- **BRAND.md:** voz, identidade, regras de logo e do nome. Fecha junto com a Etapa 2 final.
- **DESIGN.md:** este sistema exportado: tokens, UI, motion e regras de implementação.
- **Asset index:** logos (`assets/logo/`), fotos, imagens geradas, templates sociais e exports.
- **Painel Marketeia:** onde o sistema vira produto vivo na mão do cliente. Usa os mesmos tokens.

---

## Appendix - Token Reference

Todos os valores acima resolvem pra CSS custom properties em `tokens.css`.
Use `var(--token)` no código. Nunca hardcode.

### Color
- `--color-primary`: #E8401F dark / #D03A1B light (Vermillion)
- `--color-primary-bright`: #FF5C36 / #E8401F
- `--color-secondary`: #6FB5AC / #1E6B63 (Sinal)
- `--color-petrol`: #11393B
- `--color-cream`: #F2EDE3
- `--color-bg`: #0A1F21 / #F4F1E8
- `--surface-primary`: #0E282B / #ECE7DA
- `--surface-secondary`: #143639 / #E0DACA
- `--surface-elevated`: #102E31 / #F0EBDF
- `--color-text`: #F2EDE3 / #122B2D
- `--color-text-on-primary`: #FFF7EF
- `--color-success`: #57B97E · `--color-warning`: #E9A23B · `--color-error`: #E0455C

### Spacing
- `--space-1` 4px · `--space-2` 8px · `--space-3` 12px · `--space-4` 16px
- `--space-5` 24px · `--space-6` 32px · `--space-7` 48px · `--space-8` 64px

### Radius
- `--radius-sm` 4px · `--radius-md` 8px · `--radius-lg` 14px · `--radius-xl` 20px

### Typography
- `--font-display`: 'Archivo' · `--font-ui`: 'Inter Tight' · `--font-mono`: 'JetBrains Mono'
- `--text-hero`: clamp(54px, 8vw, 112px) · `--text-h2`: clamp(38px, 4.8vw, 68px) · `--text-h3`: clamp(24px, 2.8vw, 38px)
- `--leading-tight` 0.98 · `--leading-normal` 1.6 · `--tracking-tight` -0.02em · `--tracking-wide` 0.12em

### Motion
- `--duration-fast` 150ms · `--duration-base` 200ms · `--duration-medium` 400ms · `--duration-slow` 600ms
- `--ease-out`: cubic-bezier(0.2, 0.8, 0.2, 1)

### Icons
- `--icon-stroke` 1.75 · `--icon-sm` 16px · `--icon-md` 20px · `--icon-lg` 24px · `--icon-xl` 32px
