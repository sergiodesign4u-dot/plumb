# Jobs to be Done

Built 2026-08-11 from `personas.md` and `research.md`. Format throughout: **when [situation], I want [motivation], so that [outcome]**.

Two rules this file is held to. **A job is not a feature:** no function name appears in a formulation, and no formulation locks a single mechanism. The test applied to each one is whether a completely different product could be hired for the same job. **The wording here is canonical:** `personas.md` carries the same strings, not a paraphrase, so no job exists in two editions.

Support is marked on every job, because most of what we know about these people is our own brief rather than evidence. **Market** means an artefact opened 2026-08-11 and cited. **Brief** means `CLAUDE.md`, which is our assumption, and it carries `[?]`.

---

## Main job

> **When I have to put a number in front of other people, I want to know how far it can be trusted, so that I am not defending something I cannot back up.**

**Persona:** P1, the reader. **Support:** market.

**Where it comes from.** The gap that provenance is a destination which has to be chosen, and choosing it requires already suspecting something (`competitors.md`, shown for the five documented product surfaces). Benchmark criteria 5 and 8, where no product of five scores above 3 on attribution and the strongest failure is a stale value that looks exactly like a fresh one (`benchmark.md`). The riskiest assumption in `lean-ux-canvas.md` block 7 is this job failing to be hired.

**Solution-agnostic check.** No mechanism is named. A certification badge, a status board, a conversation with the analyst, a mail digest or our card could each be hired for it. Our card is an answer to the job, not part of its statement.

### Why there is one main job and not two

The analyst has a job of the same weight: answer once and have the answer keep answering. Two main jobs usually mean two products, so the test was run explicitly rather than assumed away.

**The test: does serving one discharge the other?** It does. If a reader can judge a number without asking anyone, the analyst stops being the only route to the answer by construction. These are the same event seen from two sides, not two events, so the analyst's job sits in related jobs as R2 rather than as a second main job.

This is a decision, not a fact. If it is wrong, the consequence is large and lands early: CJM takes the focus of one persona times one main job, and 03a builds navigation for it.

---

## Related jobs

Adjacent work in the same context, not steps toward the main job. Steps of a journey have an owner in this pipeline already: the phases of `cjm-to-be.md` at stage 02+, which runs next, so no step is left without one.

### R1. Who is answerable

> **When a number does not match what I expected, I want to find out who is answerable for it, so that I can ask a specific person instead of putting doubt into a channel.**

**Persona:** P1. **Support:** market. Attribution scores 3 or below in all five benchmark products while several score 5 on freshness (`benchmark.md`). PowerMetrics names a person only when certification is **removed** (`support.powermetrics.app`, article 37726220561559). And the market's own model of doubt has a human owner: a Sifflet incident carries an assignee (`docs.siffletdata.com/docs/incidents`).

**Solution-agnostic check.** An org chart, a wiki page, a Slack channel topic or a name on the card could all be hired.

### R2. Answer once

> **When the same question about a number reaches me again, I want to answer it once and have the answer keep answering, so that I stop being the only route to it.**

**Persona:** P2. **Support:** brief `[?]` for the frequency, market for the shape. Definition governance lives in a producer tool and the last mile is delegated to a surface owned by somebody else (`competitors.md`, pattern 2), which is the structural reason the analyst keeps being asked.

**Solution-agnostic check.** A wiki, a pinned Slack message, dbt docs or a metric card could all be hired. This is also the job most easily faked by a document nobody reads, which is why the funnel measures it on the reader's side rather than on the analyst's.

### R3. The correction travels

> **When I change what a number means, I want the people who already used it to find out, so that my correction reaches the decisions it affects.**

**Persona:** P2. **Support:** brief `[?]` for the behaviour, product scope for the mechanism. The state "definition changed after this was saved" is in MVP scope (`CLAUDE.md`) and the analyst outcome it serves is stated in `lean-ux-canvas.md` block 4.

**Solution-agnostic check.** An email, a changelog, a Slack post or a state on the card could all be hired.

### R4. The old number does not travel as new

> **When I come back to a number I saved earlier, I want to know whether anything about it changed since, so that an old figure does not travel as a current one.**

**Persona:** P1. **Support:** hypothesis, see the section below. The mechanism is in `aarrr.md` Retention and the quality it protects is benchmark criterion 8, no false calm (`benchmark.md`), but the behaviour itself is unevidenced.

**Kept deliberately, despite being the closest of the five to the main job.** The whole retention mechanic stands on it, and the funnel already named retention the weakest stage. Dropping this job would leave that stage with no work underneath it at all, which is worse than carrying a job that has to be marked as a hypothesis.

### R5. The definition stops living in a head

> **When I bring a new metric under control, I want to state once what it means and who owns it, so that the definition stops living in somebody's head.**

**Persona:** P2. **Support:** market. The metric as a first-class object with defined and certified metrics is a real product shape (`competitors.md`, PowerMetrics), and Atlan sells the metrics layer as "a single source of truth for all KPI definitions".

**Solution-agnostic check.** A spreadsheet, a Notion page, dbt model documentation or a registry could all be hired. This is the job our activation depends on being done, which is exactly why the pricing refuses to tax it.

### The two pairs

R3 and R4 are the same event from two sides, as the main job and R2 are: the analyst propagates a change, the reader meets it on re-reading. Both are kept because the personas differ and the progress differs. Naming the pairing here stops a later stage from treating one as a duplicate and deleting it.

---

## Emotional and social jobs

All four come from the brief and **none of them is evidenced**: no interview has happened, so each carries `[?]`. They are here because stage 05 sets tone against them and stage 06 derives visual attributes from persona anxieties, not because they were observed.

| Type | Persona | Job | Support |
| --- | --- | --- | --- |
| Emotional | P1 | Stop feeling exposed when presenting a number I did not compute myself | Brief `[?]` |
| Emotional | P2 | Stop being the bottleneck, and feel that the work outlives my presence | Brief `[?]` |
| Social | P1 | Be seen as somebody who checks rather than somebody who forwards | Hypothesis, see below |
| Social | P2 | Be the person whose numbers are trusted | Brief `[?]`, and this is the one line stated verbatim in `CLAUDE.md` |

---

## Hypotheses: jobs with no support outside our own reasoning

These two are visible rather than hidden, and each names how it gets closed. A job kept here does not enter the MVP core at step 4 on its own strength.

| Job | Why it is a hypothesis | How it gets closed |
| --- | --- | --- |
| **R4**, the old number does not travel as new | There is no evidence that anyone ever reopens a saved link. `aarrr.md` names this as unknown in as many words | Instrumented in the first cohort: does a reader open the same URL in a week they were not sent it. Question 3 in the personas holes table asks the same thing from the other side |
| **Social job of the reader**, being seen as somebody who checks | There is no evidence that checking is socially visible at all. If nobody sees the check, the job does not exist and the motivation for it is ours, not theirs | Follow-up research at step 6: public forum and review mining for how people talk about being wrong with a number in front of others |

---

## What this file hands forward

- **The main job** is read by CJM step 1, which takes the focus of one primary persona times one main job, and by 03a steps 1 to 5, where a screen without a job is an orphan.
- **Related jobs** are read by 03b, which asks which job each node serves, and by 04 step 1, which puts a job on every screen.
- **The matrix and the MVP core** are added to this file at step 4 and read by `CLAUDE.md` afterwards.
