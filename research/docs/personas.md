# Personas

Stage 02 of the pipeline. Built on `research.md` and the level files beside it, not on imagination. Personas follow the Observations section below.

**Writer rule for later stages.** After this stage the only writer of this file is CJM step 4, which may correct a line together with the source that disproved it. Stages 03a, 03b, 05, 06 and 07 read it as read-only: a contradiction is named out loud and returned into the persona as a finding, never fixed silently and never re-described in another file.

---

## Observations

What the research actually says about people, assembled 2026-08-11.

**The one thing to read before everything else: there is no primary data about our users.** Not one interview. Every statement below has one of exactly two origins, and they are not equivalent.

- **Brief.** Written before the research, in `CLAUDE.md`. This is our own assumption about people, not a source. Marked `[?]`.
- **Market artefacts.** Competitor pages and public documentation opened 2026-08-11 and cited in `competitors.md`. These prove what **vendors believe** about these people and how they sell to them. They do not prove what a person does.

Where a slice has neither, it says so.

### 1. Who they are and what situation they arrive from

- **The analyst arrives on somebody else's trigger, not their own task.** They are interrupted several times a week with "why is this number different", and every answer costs manual digging (`CLAUDE.md`, `[?]`). This matters for design: the entry point of their flow is an inbound question, not a dashboard they opened on purpose.
- **The reader arrives from exposure.** They are one step away from putting a number into a deck, a decision or a meeting (`CLAUDE.md`, `[?]`). The trigger is the approaching audience, not curiosity.
- **Company shape:** 50 to 300 people, data team of 1 to 5 (`CLAUDE.md`).
- **Both roles exist as served personas, and that is market-confirmed rather than assumed by us.** Secoda names Data Consumers, Business Operations and Product Managers; Sifflet names Data Users; Monte Carlo lists Data Engineers, Data Analysts, Data Governance and CDAOs; Secoda also names Data Leads (`competitors.md`). What is confirmed is that these roles are addressed. How they behave is not.
- **The condition that runs under both: the number is read away from the system that produced it** (`ux-patterns.md`, B1). This rests on the brief plus the structure of the market, where every product governs the definition in a producer tool and hands the number to a surface owned by somebody else. Direct observation `[?]`, and this is the load-bearing assumption of the whole product.

### 2. What drives them

- **Analyst:** stop being a human API to their own data, plus the reputation of being the person whose numbers are trusted (`CLAUDE.md`, `[?]`).
- **Reader:** not being caught out in front of leadership (`CLAUDE.md`, `[?]`).
- **Buyer:** a short security review, which is why metadata-only is a sales argument rather than an excuse (`CLAUDE.md`).
- **How the market frames the same demand:** Secoda sells "trusted answers fast and at scale", Sifflet sells "so the data behind every decision is one you can trust" (`competitors.md`). This is evidence about **how these people are sold to**, and it must not be read as evidence of what motivates them.

### 3. What they fear and what stops them

The thinnest slice. Almost all of it is the brief.

- **What stops the reader is not unwillingness, it is placement.** Checking is a destination that has to be chosen, and to choose it you must already suspect something (`competitors.md`, shown for the five documented product surfaces, inferred for the other ten).
- **One fear is visible in somebody else's product decision:** Secoda restricts the lineage graph to what a viewer may access, so "Editors and Viewers only see lineage for resources they have access to" (`docs.secoda.co/features/data-lineage`). A vendor built against that fear, which is weak evidence that it exists and strong evidence that it is expected.
- **Buyer:** SOC 2 Type II as the purchasing gate at this company size, SSO asked in the first call (`CLAUDE.md`, `[?]`, and this is open question 6).
- **Reader and analyst fears themselves** (public contradiction, being the bottleneck) come from the brief only, `[?]`.

### 4. How they choose and whom they trust

The best-supported slice, because the evidence here is market fact rather than our own writing.

- **Pricing opacity decides who can evaluate alone.** Seven of the ten HARD and SOFT products publish no seat price, so an analyst cannot self-serve an evaluation of them. Only PowerMetrics, Cube and dbt can be evaluated without talking to sales (`competitors.md`).
- **Trust today attaches to a person, not to a system.** Sifflet models doubt as an incident with an assignee, a severity and a timeline (`docs.siffletdata.com/docs/incidents`): in the market's own design, doubt has a human owner.
- **The existing trust signal in the category is a badge.** A certified metric in PowerMetrics carries a blue check mark next to its name (`support.powermetrics.app`, article 37726220561559).

### 5. Where they break today

- **The number arrives stripped.** Provenance is a lineage graph, a catalog page or an incident, and each is somewhere else (`competitors.md`).
- **A state vocabulary exists and does not reach the reader.** dbt runs four health states, Healthy, Caution, Degraded and Unknown, inside a catalog a non-analyst has no reason to open (`docs.getdbt.com/docs/explore/explore-projects`).
- **A name appears only in the exception case.** PowerMetrics shows who removed a certification and when, not who stands behind the definition every day (`support.powermetrics.app`).
- **The free role sees the least.** In Looker, Viewer gets folders, boards, dashboards and Looks only (`competitors.md`).
- **Today's alternatives for a doubting reader are three:** ask the analyst in a channel, open the dashboard again, or use the number as it stands. Which of the three actually happens is `[?]`.

### What we do not know about people

The first five rows already have an addressee: they come from the open questions table in `research.md`. Rows 6 to 12 were produced by this inventory.

| # | Hole | Addressee | Origin |
| --- | --- | --- | --- |
| 1 | Does the reader check before acting, or only after being contradicted? | Business consumers at three target companies | `research.md` OQ4, this is H1 |
| 2 | Is the need single-number or portfolio-shaped? | Business consumers at three target companies | `research.md` OQ5, decides the chosen pattern |
| 3 | How often does the need actually arrive? | Business consumers at three target companies | `research.md` OQ8, decides the retention instrument |
| 4 | Does an account-free card survive a US B2B security review? | Head of data or COO | `research.md` OQ6 |
| 5 | Does a metric-count cap actually suppress registry filling? | Analysts at three target companies | `research.md` OQ2, half a people question |
| 6 | **What surface do they actually read numbers in today?** Looker, Metabase, Sheets, Slack, a deck | Both sides | New. Without it B1 is belief rather than fact, and the pattern choice stands on B1 |
| 7 | Who does the reader ask today, and do they ask at all? | Both sides | New |
| 8 | Does the reader know a definition exists at all? | Business consumers | New |
| 9 | What does a wrong number cost in practice? We have no failure story from a real company | Both sides | New. The entire motivation model rests on our assumption about exposure |
| 10 | Does the title "data lead" exist at 50 to 300 people, or is it a founder or an engineering manager? | Analysts at target companies | New. Hits the primary persona directly |
| 11 | How often is the analyst actually interrupted? | Analysts at target companies | `CLAUDE.md`, `[?]` |
| 12 | Is the analyst the buyer or the influencer? | Head of data | New |

**Three open questions in `research.md` are not about people and stay unresolved there:** whether readers pay (OQ1), whether an AI agent is a second reader of our surface (OQ3), and what a free reader may be shown when the source's own permissions restrict it (OQ7). Those are decisions about model, scope and architecture, and this stage does not close them.

### Honest coverage of the five slices

Slice 4, how they choose, is the best supported: it rests on market fact. Slice 3, what they fear, is the weakest: almost all of it is the brief. Slice 1 has confirmation that the roles **exist and are addressed**, none that they behave as described.

The consequence for what follows: the personas in this file are **behavioural hypotheses with a named source**, not portraits. Any line without a source carries `[?]` rather than a plausible invention, and `[?]` can only be removed by new data.
