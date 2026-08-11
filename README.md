# Plumb

**Live: https://sergiodesign4u-dot.github.io/plumb/**

- Foundation Research: https://sergiodesign4u-dot.github.io/plumb/research/research.html
- Personas: https://sergiodesign4u-dot.github.io/plumb/research/personas.html
- JTBD: https://sergiodesign4u-dot.github.io/plumb/research/jtbd.html

Metric trust tool for B2B teams. One place holds the canonical definition of every metric, and the provenance, freshness and breakage of a number are shown right where the number is read.

This repository holds the whole design pipeline for the product, not just the research phase: every stage adds its documents and its own page you can open in a browser.

**Where things live**

- `CLAUDE.md` - project rules, brief and boundary. Loaded in every session.
- `docs/decisions.md` - decision log. What was done, why, what was rejected and on what grounds.
- `AGENTS.md` - entry point for the external read-only auditor.
- `_nav.js` - the single navigation registry of the project. Every page renders its sidebar from it.
- `_nav.css` - the look of that sidebar, in one place.
- `research/_page.css` - the shared look of the three research pages, extracted at stage 02 so that three pages do not carry three editions of the same stylesheet.
- `research/` - everything we know about the market and the people. Shared by stages 01, 02 and CJM.
- `.nojekyll` - required. GitHub Pages runs Jekyll by default and Jekyll skips paths starting with an underscore, which is where the whole navigation lives.

## People

Index only. The conclusions live in the files and on the pages, and a second edition of the same text would diverge from the first.

- `research/docs/personas.md` - the Observations inventory of what the research says about people and what it does not, two behavioural personas with a source on every line, the primary mark and what it does, and fourteen holes each with an addressee.
- `research/docs/jtbd.md` - one main job and five related in "when / I want / so that" form, emotional and social jobs, the matrix of jobs against personas and functions, the MVP core, the orphan cross-check, and the two-instrument critique with its residual risks.
- Pages: [Personas](https://sergiodesign4u-dot.github.io/plumb/research/personas.html) and [JTBD](https://sergiodesign4u-dot.github.io/plumb/research/jtbd.html).

`personas.md` has one writer after stage 02: the CJM step that mines real feedback. Every other stage reads it and returns a contradiction as a finding rather than editing it or re-describing the persona somewhere else.

## Status

| Stage | Status |
| --- | --- |
| Foundation Research | Done. Fifteen competitors, benchmark on trust at the point of reading, canvas, funnel, chosen pattern, critique in two instruments, page published |
| User Research (Personas + JTBD) | Done. Two behavioural personas with the reader as primary, one main job and five related, matrix, MVP core of two jobs, critique in two instruments, both pages published |
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
