# marketeia

Repositório de marca e produção de conteúdo da **marketeia** — serviço de marketing digital com IA embutida (JV Caio + Greg).

Aqui vive o sistema: identidade visual, design system, voz, copy e o pipeline de produção dos posts. É a fonte de verdade compartilhada entre os sócios e está pronto para ser usado com IDEs assistidas por IA (Cursor, Claude Code, Copilot).

## Por onde começar

1. **`AGENTS.md`** — leia primeiro. Regras inegociáveis da marca + fluxo de produção. Vale tanto para humano quanto para IA. (`CLAUDE.md` é a versão para o Claude Code, aponta para o mesmo conteúdo.)
2. **`PDR-Marketeia.md`** — o que é o negócio, tese, metas, arquitetura.
3. **`design_system/DESIGN.md`** — a fonte da verdade visual. Abra `design_system/showcase.html` no browser para ver o sistema aplicado.
4. **`copy/COPY-Marketeia.md`** — tom de voz e as 7 regras de copy.

## Estrutura

```
marketeia/
├── AGENTS.md / CLAUDE.md      # guia da marca para IA (e humanos)
├── PDR-Marketeia.md           # documento de produto/negócio
├── design_system/             # DS: DESIGN.md + tokens (css/json) + showcase
├── copy/                      # voz da marca + copy da landing
├── assets/                    # logos (SVG) + social (PFPs, posts hi-res, elementos)
├── lp/                        # build da landing page
└── _idv_build/                # produção de posts: templates HTML + render.ps1 + covers/ (assets)
```

## Produzir um post

Os 4 templates travados e os mínimos de tipografia estão em `AGENTS.md`. Em resumo: os templates são HTML/CSS (usando os tokens do DS) renderizados para PNG @2x via Chrome headless.

```powershell
# Windows
cd _idv_build
.\render.ps1 -Html post.html -Out out.png
```

```bash
# macOS / Linux
chrome --headless=new --disable-gpu --force-device-scale-factor=2 \
  --window-size=1080,1350 --screenshot=out.png _idv_build/post.html
```

## Convenções

- **Tokens, nunca hardcode.** Cor, espaço e tipo saem de `design_system/tokens.css` via `var(--token)`.
- **`DESIGN.md` é gerado** a partir de `showcase.html` — não edite à mão.
- **PNGs de render/prova não são versionados** (regeneráveis a partir dos templates). A pasta `covers/` traz a biblioteca de assets de marca que os templates referenciam. Os PNGs finais dos 12 posts vivem no Figma.

---

Repositório privado. Marca © marketeia (Caio Liutti + Greg).
