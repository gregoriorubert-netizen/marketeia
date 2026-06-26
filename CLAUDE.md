# CLAUDE.md — marketeia

Instruções para o Claude Code neste repositório.

## Fonte da verdade

O guia completo da marca, regras inegociáveis e fluxo de produção estão em **`@AGENTS.md`**. Lê esse arquivo primeiro — ele é a fonte única de verdade. Este CLAUDE.md só adiciona o que é específico do Claude Code.

Para profundidade, vá direto aos canônicos:
- Negócio/estratégia → `PDR-Marketeia.md`
- Design (paleta, tipo, motion, anti-genérico) → `design_system/DESIGN.md` (+ `tokens.css` / `tokens.json`)
- Voz/copy → `copy/COPY-Marketeia.md`

## As 6 regras que não se quebram (resumo de AGENTS.md)

1. Nome é `marketeia` minúsculo, `ia` destacado só por cor.
2. Zero roxo. Paleta RADAR: petróleo + vermillion + sinal (teal) + creme.
3. Um vermillion por dobra.
4. Mostra, não promete (todo claim com prova ao lado).
5. Três fontes sempre: Archivo + Inter Tight + JetBrains Mono.
6. Tagline `SINAL VS RUÍDO`; foto de PME real, nunca stock sorrindo.

## Notas específicas do Claude Code

- **Render de posts:** os templates em `_idv_build/*.html` geram PNG @2x via Chrome headless. No Windows use `_idv_build/render.ps1`. Em macOS/Linux chame o Chrome direto (comando em `@AGENTS.md`).
- **Tokens, nunca hardcode:** ao escrever CSS/HTML, use `var(--token)` de `design_system/tokens.css`. Os valores de cor estão lá e no DESIGN.md §Appendix.
- **Antes de editar o DS:** `design_system/DESIGN.md` é auto-exportado do `showcase.html` — não edite o DESIGN.md à mão; edite o `showcase.html` e re-exporte.
- **Assets:** `_idv_build/covers/` é a biblioteca de imagens que os templates referenciam. PNGs de render/prova soltos não são versionados (ver `.gitignore`).
- **Git:** nunca commit/push sem ordem explícita. Sempre mostre o diff antes de commitar.
