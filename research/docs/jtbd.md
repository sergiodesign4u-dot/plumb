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

## The matrix

Importance does not exist as a ready number anywhere in the research, so **every cell below is inferred** and names the signal it stands on. Two markers are used and they mean different things: `-` means this is structurally not that persona's job, `[?]` means there is no signal to judge it by.

| Job | P1 reader (primary) | P2 analyst | Signal the score stands on |
| --- | --- | --- | --- |
| **Main**, judge a number before standing behind it | **3** | `[?]` | P1: their arrival trigger is exposure, and the whole benchmark dimension plus the riskiest assumption sit on this job. P2: the research says nothing about how an analyst judges somebody else's number |
| **R1**, who is answerable | **3** | 1 | P1: attribution scores 3 or below in all five benchmark products, and the market's own model of doubt carries an assignee. P2: they usually **are** the answerable person |
| **R2**, answer once | `-` | **3** | P2: interruption frequency from the brief `[?]`, plus the structural fact that the last mile is delegated |
| **R3**, the correction travels | 2 | **3** | P1 receives the change, P2 sends it. Signal: the state "definition changed after this was saved" is in MVP scope |
| **R4**, the old number does not travel as new | **3** `[?]` | 1 | The retention mechanic and benchmark criterion 8, no false calm. But **the job itself is a hypothesis**, so its importance is inferred from a mechanism we invented |
| **R5**, the definition stops living in a head | `-` | **3** | The metric as a first-class object is a real product shape in the market, and this is our activation |

Emotional and social jobs are not scored here. Their importance would be a guess placed on top of a `[?]`, which is not an estimate.

| Job | FUNCTION, from the inventory | COMPETITORS |
| --- | --- | --- |
| Main | The number card carrying provenance, freshness, state and a name on the claim | **Not closed.** Provenance exists everywhere and is a destination in all of it (`competitors.md`) |
| R1 | Attribution on the claim: who declared it and when | **Not closed.** PowerMetrics names a person only when certification is removed |
| R2 | Registry with definition and owner, one permanent URL, readable with no account | **Partly.** The write-once half is closed by dbt, Atlan and Secoda. The keeps-answering-to-a-reader half is not |
| R3 | The state "definition changed after this was saved" | **Partly** `[?]`. dbt has health states, but nothing in the set carries the semantics of "changed since you saved it" |
| R4 | One permanent URL plus that same state met on re-reading | **Not closed.** Nothing in the set attaches to a saved reading |
| R5 | Registry with definition and owner | **Closed by the market.** This is exactly what Atlan, dbt and PowerMetrics sell |

**One hole visible only from this table.** R3's function exists in the pull direction only: the card will say the definition changed when somebody opens it. There is nothing to push, because notification routing is deliberately out of MVP (`CLAUDE.md`). Half of that job is therefore unserved by design, and it is the same root that made retention the weakest stage in the funnel.

---

## Conclusion 1: the MVP core, derived from the matrix

**Two jobs qualify honestly, not three, and the third is not padded with invented importance.**

1. **The main job.** P1 importance 3, not closed by the market. The cell that justifies it: provenance is a destination in all fifteen products, so the need to tell whether a number can be trusted **where it is read** is served by nobody.
2. **R1, who is answerable.** P1 importance 3, not closed by the market. The cell that justifies it: attribution scores 3 or below across all five benchmark products while several score 5 on freshness, so the market has proved the habit of showing age and has not proved the habit of showing who is accountable.

**A third, conditional: R4.** It qualifies on both columns, but its own importance is `[?]` because the job itself is a hypothesis: there is no evidence that anyone reopens a saved link. It is recorded as conditional, and the condition is explicit. If follow-up research or the first cohort shows that saved numbers are not revisited, R4 leaves the core and the retention mechanic leaves with it.

**Why the rest are outside the core.**

- **R2** matters to the secondary persona and is **discharged by the main job succeeding**, so it does not need its own place in the core.
- **R3** scores only 2 for the primary persona and is the sending side of the same event as R4.
- **R5 is closed by the market.** The product needs it, since with no registry there is nothing to read, but the core is what we have to win on, not what we have to have. That distinction is kept explicit because 03a uses it to order screens.

---

## Conclusion 2: orphan features, a separate cross-check

Different input from the matrix, as required: the inventory is the Solutions block in `lean-ux-canvas.md` plus the rough MVP scope in `CLAUDE.md`. No feature outside that inventory is invented here.

| Feature in the inventory | Maps to |
| --- | --- |
| One data source connection | The main job, as a **precondition**: without a source there is no number with an age |
| Metric registry with definition and owner | R5, R2 |
| Number card with provenance | Main |
| Freshness and breakage states | Main, R3, R4 |
| Search and jump to a metric by name | R2, R5. This is the analyst's route; the reader arrives by link |
| Named states instead of one alarm | Main |
| Attribution on every definition | R1 |

**There is not one orphan in the mandated inventory.** That is a clean result and it says something: the scope set at stage 01 was assembled around work people do rather than around ideas.

**Two orphans do exist just outside it, and they are reported separately because this cross-check was not mandated.** `aarrr.md` carries two product decisions that map to no job at all: a reader inviting another reader in one action, and the public page rendering the real card component. Both serve a business outcome, readers per seat and an acquisition channel, rather than a person's progress. That is not a reason to cut them. It is a reason to name them for what they are, growth mechanics with no job underneath. If they start demanding screens at 03a on equal footing with jobs, this line is the only thing that will hold the priority.

---

## What this file hands forward

- **The main job** is read by CJM step 1, which takes the focus of one primary persona times one main job, and by 03a steps 1 to 5, where a screen without a job is an orphan.
- **Related jobs** are read by 03b, which asks which job each node serves, and by 04 step 1, which puts a job on every screen.
- **The matrix and the MVP core** are added to this file at step 4 and read by `CLAUDE.md` afterwards.
