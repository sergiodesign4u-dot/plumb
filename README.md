# Plumb

**Live: https://sergiodesign4u-dot.github.io/plumb/** &nbsp; Stage 01: https://sergiodesign4u-dot.github.io/plumb/research/research.html

Metric trust tool for B2B teams. One place holds the canonical definition of every metric, and the provenance, freshness and breakage of a number are shown right where the number is read.

This repository holds the whole design pipeline for the product, not just the research phase: every stage adds its documents and its own page you can open in a browser.

**Where things live**

- `CLAUDE.md` - project rules, brief and boundary. Loaded in every session.
- `docs/decisions.md` - decision log. What was done, why, what was rejected and on what grounds.
- `AGENTS.md` - entry point for the external read-only auditor.
- `_nav.js` - the single navigation registry of the project. Every page renders its sidebar from it.
- `_nav.css` - the look of that sidebar, in one place.
- `research/` - everything we know about the market and the people. Shared by stages 01, 02 and CJM.
- `.nojekyll` - required. GitHub Pages runs Jekyll by default and Jekyll skips paths starting with an underscore, which is where the whole navigation lives.

## Status

| Stage | Status |
| --- | --- |
| Foundation Research | Done. Fifteen competitors, benchmark on trust at the point of reading, canvas, funnel, chosen pattern, critique in two instruments, page published |
| User Research (Personas + JTBD) | Not started |
| CJM (As-Is + To-Be) | Not started |
| Information Architecture (Base + Detail) | Not started |
| Wireframes | Not started |
| Voice | Not started |
| Concept | Not started |
| UI + Visual | Not started |
| Tokens + Components | Not started |
| Design System | Not started |
| Responsive | Not started |
| Animation | Not started |
| Rollout | Not started |
| Handoff | Not started |
