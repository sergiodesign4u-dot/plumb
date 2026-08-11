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

---

## The personas

**Two behavioural groups, and a third does not come out of the data.** The split is behavioural, not demographic: different entry trigger, different jobs, different pains. Nothing in the research separates a PM reader from a finance reader, so they stay one group; if the follow-up research or CJM finds a real split, it comes back into this file.

Personas are named by behaviour rather than given invented human names. A name would add specificity we have not earned.

### P1. The reader who is about to be quoted &nbsp;&nbsp; PRIMARY

**Context.** PM, marketer or finance, 25 to 45, non-technical. Arrives **from exposure**, not from curiosity: a deck due, a meeting within the hour, a decision with their name on it (`CLAUDE.md`, `[?]`). How often this happens and what surface they read in are both unknown, holes 3 and 6. *Answers: the flow does not start at a home page or a search box, it starts at one number opened from a link.*

**Jobs.** Canonical wording, identical to `jtbd.md`, no second edition of any job exists.

- **Main job.** When I have to put a number in front of other people, I want to know how far it can be trusted, so that I am not defending something I cannot back up.
- **R1.** When a number does not match what I expected, I want to find out who is answerable for it, so that I can ask a specific person instead of putting doubt into a channel.
- **R4.** When I come back to a number I saved earlier, I want to know whether anything about it changed since, so that an old figure does not travel as a current one. Marked a hypothesis in `jtbd.md`: nothing shows that anyone reopens a saved link.

**Pains.** The number arrives stripped of everything that would let them judge it. Provenance is a destination that has to be chosen, and choosing it requires already suspecting something (`competitors.md`, shown for the five documented surfaces). The state vocabulary exists in the market and sits where they have no reason to go (`docs.getdbt.com/docs/explore/explore-projects`). Where access is given, the free role sees least: in Looker, Viewer gets folders, boards, dashboards and Looks only (`competitors.md`). *Answers: what the product removes, and how we will see that it did.*

**Choice triggers.** They do not choose the product, they choose whether to trust this number. Convincing: a name and a date on the claim, an age in relative time, a named state instead of a red dash (`benchmark.md`, criteria 5 and 8, where no product scores above 3 on attribution). Repelling: a bare figure, a trust score that cannot be interrogated, a login wall. *Answers: what the card must carry as proof, and what it must never do.*

**Demographic facts, each with its consequence.** Non-technical → a lineage graph is not readable to them, so depth on request must be legible without knowledge of the stack. Unpaid → they cannot be asked to create an account, which is where the activation product decision comes from (`aarrr.md`).

**Mood quote.** `[?]`. No verbatim user quote exists anywhere in the research and none will be synthesised. Queued for the follow-up research at step 6, because stage 05 needs a real voice to set tone against.

### P2. The data lead who is asked &nbsp;&nbsp; secondary

**Context.** 28 to 40, data team of 1 to 5 inside a company of 50 to 300. Arrives **on somebody else's trigger**: an inbound "why is this number different", several times a week (`CLAUDE.md`, `[?]`, hole 11). *Answers: their flow starts from an interruption, so the entry screen is search and jump to a metric, not a dashboard.*

**Jobs.** Canonical wording, identical to `jtbd.md`.

- **R2.** When the same question about a number reaches me again, I want to answer it once and have the answer keep answering, so that I stop being the only route to it. This is the analyst's job of main-job weight; `jtbd.md` records why it is not a second main job.
- **R3.** When I change what a number means, I want the people who already used it to find out, so that my correction reaches the decisions it affects.
- **R5.** When I bring a new metric under control, I want to state once what it means and who owns it, so that the definition stops living in somebody's head.

**Pains.** Manual digging per question. Being a human API to their own data. A reputation that depends on their availability (`CLAUDE.md`, `[?]`). From the market: definition governance lives in producer tools, certification is a badge, and a name appears only when the badge is **removed** (`support.powermetrics.app`, article 37726220561559).

**Choice triggers.** Whether the product can be evaluated without talking to sales: seven of the ten HARD and SOFT products cannot, and only PowerMetrics, Cube and dbt publish a seat price (`competitors.md`). Whether it demands access to rows, where metadata-only is our argument (`CLAUDE.md`). *Answers: what the public surface and the first run must prove before anyone talks to us.*

**Demographic facts, each with its consequence.** Team of 1 to 5 → there is no rota and every question lands on the same person → the product has to answer **in their absence**. Company of 50 to 300 → no data steward role exists → ownership is one name, not a workflow.

**Mood quote.** `[?]`, same reason.

### Not a persona: the buyer

Head of data or COO. Deliberately given no product surface (`CLAUDE.md`). They still impose constraints: a trust surface in the IA, SOC 2 Type II, SSO, and the metadata-only claim, plus open question 6 about whether an account-free card survives a security review.

Recorded as a **constraint rather than a persona**, and that is not a formality. A third persona would collect its own jobs at step 3, its own screens at 03a and its own share of MVP scope, and five stages later nobody would remember it was never meant to have any.

### Primary: the reader, and what the mark does

**Criterion of primacy used here:** primary is the one whose needs are **not** met by designing for the other. Criterion and evidence are two different things, so the evidence follows separately.

**Evidence, and it is asymmetric.** Designing for the analyst produces a catalog. Catalogs already exist in all fifteen competitor products, and the reader does not go to them: provenance is a destination requiring prior suspicion (`competitors.md`). Designing for the reader produces a card, and the analyst is still served, because the registry, search and jump by name stay in MVP scope as the analyst's side of the same product (`ux-patterns.md`, what survives of the rejected catalog pattern). Three more things point the same way: the riskiest assumption is about the reader (`lean-ux-canvas.md` block 7), the activation node is defined on the reader, and four of the five funnel product decisions land on the reader's card (`aarrr.md`).

**The price of this choice, stated plainly:** the interface is built around the person who never pays.

**What the mark DOES, not what it means.** This paragraph is the operative one and later stages read it:

- **A conflict of decisions is resolved in favour of the reader.** They carry the higher risk and have fewer levers: they cannot change the definition, cannot see the pipeline, and often cannot log in.
- **Secondary scenarios must work, but the interface is not built around them.** The analyst's registry has to be good; it does not get to decide the shape of the card.
- **03a step 2** marks which screens the reader needs and which only the analyst does. **04** draws states for the reader's role first. **07** must carry the card into the representative sample.
- Without this line, a screen pulled in two directions gets resolved by taste rather than by data.

**One caveat on the choice itself.** The research gives a clear leader on gap and on risk, and does not give one on revenue. The reader is primary as a design decision, not as a proven fact, so it goes first into the critique at step 5 and it is what the follow-up research at step 6 should try hardest to break.

### Hypotheses in this file, in the form "we assume X, we will verify through Y"

| Assumption | How it gets closed |
| --- | --- |
| The reader arrives from exposure rather than curiosity | The first test in `lean-ux-canvas.md` block 8: whether the link is opened **before** the number is used |
| The analyst is interrupted several times a week | Self-report from three analysts before and after, with the weakness of self-report stated at the same time |
| The reader and the analyst are two groups rather than one | Whether the same people both write definitions and read other people's. If they are the same people, there is one persona and this file is wrong at the top |
| The reader is the right primary | Step 5 critique first, then follow-up research aimed at breaking it, not at confirming it |
