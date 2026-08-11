# Decision log

What was done, why it was done this way, what was rejected and on what grounds. One entry per decision, dated, newest on top.

This file is never loaded into a session automatically and it is not meant to be. It is opened on demand, when the grounds for an earlier decision need to be recalled. That is exactly why it exists separately: `CLAUDE.md` holds rules that must hold next time, this file holds the history that would otherwise creep into it and eat its budget.

---

## 2026-08-11. Critique of the research, two instruments, full log

Codex ran first and blind, read-only (`codex exec --sandbox read-only`, since the plugin default would have given it write access), over `research/docs` with `AGENTS.md` and `CLAUDE.md` as context. It never saw my table. My own pass ran in parallel on the one class it cannot do, conclusions without grounds, which needs the product rather than the text. Merged afterwards.

**Dedup criterion:** two rows counted as one finding when they point at the same sentence in the same file and name the same defect. That merged four Codex rows into two, since he filed the desktop-session claim and the behavioural-mechanism claim twice each, once as "fact without a source" and once as "contradiction between files". They are one repair each.

**Result: 16 confirmed, 1 withdrawn at verification.** Codex found 8 that I had missed, I found 5 that he could not see, 3 were found by both.

| # | Class | Where | Finding | Found by | Outcome |
| --- | --- | --- | --- | --- | --- |
| 1 | fact without source | `research.md:47`, `lean-ux-canvas.md:44` | Analyst interruption frequency stated as fact about our users | Codex | Fixed: one line saying all persona detail comes from the brief and is `[?]` until stage 02 |
| 2 | fact without source | `research.md:49`, `lean-ux-canvas.md:50` | Buyer behaviour stated as fact | Codex | Fixed by the same line |
| 3 | fact without source, contradiction | `competitors.md:159` against `:229`, plus `research.md:25`, `lean-ux-canvas.md:74`, `ux-patterns.md:27` | "Every product assumes a desktop working session" against our own "behaviour under a narrow viewport remains `[?]`" | both | Fixed in all four: the claim is now about positioning, which the pages can prove, and narrow-width behaviour stays `[?]` |
| 4 | fact without source, contradiction | `benchmark.md:64,66,68` against `research.md:169` | Three behavioural mechanisms stated bare in the level file while the synthesis marks them `[?]` | both | Fixed: the honest note now lives in `benchmark.md` too. Step 8 caught the class and repaired only the synthesis |
| 5 | fact without source | `aarrr.md:23` | Claim about what enterprise contact-sales keywords cost | Codex | Fixed: cost claim dropped, the decision kept and re-argued from what we do know |
| 6 | fact without source | `aarrr.md:121` | "US B2B asks about SSO in the first call" sourced to our own brief | Codex | Fixed: marked `[?]`, decision kept |
| 7 | contradiction | `lean-ux-canvas.md:170` against `research.md:78-80` | The canvas handed AARRR "outcome 1, registry gets filled, is activation" while AARRR defines activation on the reader and explicitly excludes registry filling | Codex | Fixed: the mapping is now stated as not one to one, activation sits on outcome 2 |
| 8 | contradiction | `lean-ux-canvas.md:31` against `research.md:89` | Retention target 40% against 35%, two different definitions under one name | Codex | Fixed: one instrument, the 4-week return at 35%, owned by `aarrr.md` |
| 9 | orphan | `competitors.md:227` | The Resend counter-reference had no reader | both | Fixed: named as an anti-reference for stage 06 step 1, recorded in `research.md` section 6 |
| 10 | orphan | `aarrr.md:107` | The requirement to record the share event next to the open event reached nobody | Codex | Fixed: named as an event-model requirement for stage 03a step 4, in `research.md` section 3 |
| 11 | orphan | `aarrr.md:31-35, 99-103, 158-162` | Nine stage unknowns with no addressee and no place in the open questions table | Codex | Fixed: the rule is now stated in `aarrr.md`, and the one with an addressee was promoted to open question 8 |
| 12 | conclusion without grounds | `research.md:19, 130, 207` | "Provenance is a destination in all fifteen" has product-surface evidence for five | Claude | Fixed: shown for five, inferred for ten, said in both places |
| 13 | conclusion without grounds | `research.md:181` | The entry-point behaviour carries `[?]` in `ux-patterns.md` and lost it in the synthesis, while the whole pattern choice rests on it | Claude | Fixed: marker restored and named as the weakest link in the chain |
| 14 | conclusion without grounds | `research.md`, H4 | "the alternatives all reduce what a reader may see" rests on one data point | Claude | Fixed: scoped to Secoda, Cube and Looker marked `[?]` |
| 15 | conclusion without grounds | `research.md`, H6 | Yahoo Finance called "the one with the best freshness line" while three products score 5 | Claude | Fixed: "one of the three" |
| 16 | conclusion without grounds | `aarrr.md`, metric summary | Five targets labelled hypotheses, none naming where it came from | Claude | Fixed: four are named as placeholders, only the 30-day window has an external anchor |
| 17 | fact without source | `aarrr.md:29` | "The head of data appears at the seat purchase, not before" filed as an unsourced fact | Codex | **Withdrawn at verification:** the line is item 3 under a **Hypotheses** heading. Codex read the line without its heading |

**Two things fixed while verifying, outside both tables.** The PowerMetrics and Hex quotations carried em dashes from the source pages, which the project forbids in output files, and the synthesis had silently replaced one with a comma inside quotation marks, that is, misquoted it. Both are now quoted up to the dash instead of through it. Second, Codex counted 25 screenshots where there are 26; it changes no finding and is recorded so the number is not trusted later.

**What the second instrument bought, stated so it can be judged next time.** Eight findings my own pass missed, six of them in the class step 8 had already audited. The common cause in all six: I treated `CLAUDE.md` as a source. The brief is not a source, it is our own assumption, and every claim about people or the market that leans only on it walked through my filter as a fact. Codex has no such loyalty because he does not know what we decided in the chat. The reverse holds too: not one of my five class-4 findings appeared in his table, because each needs the chain from decision back to the fact that holds it, and that is not visible in the text.

---

## 2026-08-11. Doubt is an annotation, not an incident, and there is no trust score

Two product decisions that shape the IA more than their size suggests. Both are now folded into design principle 2 in `CLAUDE.md`, which is where the forbidding lives; the grounds are here.

**Doubt is not an incident.** Sifflet models it as one: an incident carries Status (Open, In Progress, Closed), Severity inherited from the triggering monitors, an Assignee, a timeline of first and last failure, and an AI-written Root Cause Analysis (`docs.siffletdata.com/docs/incidents`). That apparatus exists because somebody is on duty and the object has a lifecycle to manage. Our doubt has neither. It is a property of a number at the moment it is read: nobody is assigned to it, nothing gets closed, and it disappears when the underlying condition does. Carrying the incident model would mean building status transitions, assignment and resolution screens that nobody in our audience is on duty to use.

Rejected alternative: model doubt as an incident anyway, to leave room for an on-call workflow later. Rejected because notification routing is out of MVP, and an incident with nobody to route it to is a screen with no reader.

**No trust score.** An aggregate figure of the "99.42% over the past 90 days" shape works for GitHub Status because a service is either callable or not, so an average over time is a real property of it (`bench-github-status.png`). A metric is not like that. A single number of the same shape reads as "this number is 99.4% correct", a claim nobody can defend, and it invites the reader to skip the only question that matters at the moment of reading: is this particular figure, right now, something I can put in front of my boss.

Rejected alternative: a composite health badge as a shorthand for busy readers. Rejected because the shorthand is exactly the false calm the product exists to remove, and criterion 8 of the benchmark ("no false calm") is the one we scored competitors on.

---

## 2026-08-11. Five UX patterns considered, evidence on the claim chosen

Full comparison in `research/docs/ux-patterns.md`. Recorded here because the four rejections carry more information than the choice, and none of them is a permanent no.

The key task was stated first, since the pattern answers it: decide, in seconds and in the place where the number is being read, whether this number can be put in front of somebody else.

The taxonomy was by **where trust information lives**, not by what the screen looks like, because that is the axis the task turns on. Five loci: on the object, in a directory, in the structure behind it, in a dedicated surface of its own, in an answer you ask for. One merge was declared rather than hidden: the incident feed and the status board are one pattern here, because their locus is identical even though the screens differ.

**Chosen: evidence on the claim.** Three grounds. It is the only locus that survives the entry-point behaviour, that a number is read away from the system that produced it. It is the open gap, confirmed from two independent corpora, the fifteen competitors and the five benchmark products. And it is the only one of the five still legible at a measured 360 px, which four of the five AARRR product decisions already assume.

**Rejected, with what survives of each:**

- **Catalog and search.** A destination, and the reader does not travel to destinations before they suspect. For an unpaid reader it is also the emptiest version of itself, since permissions cut the directory down (`docs.secoda.co/features/data-lineage`). Survives as the analyst's own side: the registry list and jump-by-name are in MVP scope. Correct pattern, wrong audience for this task.
- **Lineage graph.** Requires a mental model of the stack, degrades as it grows, and its own vendors document the degradation (Select Star shows only columns that have lineage, and documents no depth control). Not a proposition at 360 px, and forbidden as an opening state by design principle 4. Survives as depth on request, behind the one-line provenance.
- **Dedicated doubt surface, feed or board.** A reader who is not on the channel cannot tell an incident that exists from one that does not. Survives through its best asset, the named state vocabulary from GitHub Status, which moves onto the card instead of into a separate surface.
- **Conversational answer.** Rejected on four grounds even though ten of the ten HARD and SOFT competitors stand there: it moves the trust question up a level instead of answering it, a chat reply cannot obey design principle 1 because it is bare by construction, it is the most crowded position in the category, and it fights our metadata-only architecture by inviting questions about rows we do not hold. The distinction kept explicitly: rejecting the agent as our interface says nothing about the agent as a reader of our surface, which is still open question 3.

**The alternative that is not a rejection.** The status board wins if the reader's need turns out to be portfolio-shaped rather than single-number shaped. The signal was named in advance so this stays a decision and not a mood: readers opening three or more distinct cards per session, repeatedly, on a schedule. Separately, if the riskiest assumption fails outright, the fallback is catalog and search with the analyst as the only user, which is a strategic downgrade onto Secoda's and Atlan's ground and should be accepted only after the kill condition has fired.

---

## 2026-08-11. Why this benchmark dimension, and why these five products

The dimension chosen was **trust without leaving the place of reading**, over two alternatives that were also on the table:

- *Speed from doubt to answer.* Rejected because competitors already serve it reasonably: Sifflet writes an AI root cause analysis, dbt surfaces health on hover. Improving a served dimension buys less than owning an unserved one.
- *Legibility of provenance for a non-specialist.* Rejected for the same reason and one more: it is a quality of an execution, not a place to stand. It survives as benchmark criterion 6 rather than as the dimension.

The five benchmark products are deliberately **not** the ASPIRATIONAL competitors from step 3. Those are leaders of our own category; a benchmark that stays inside the category can only find the category's own ceiling. Wikipedia, Yahoo Finance, GitHub Status, FlightAware and the National Weather Service were chosen because this exact dimension is the core of what each does, in five unrelated domains: an encyclopedia, a quote, a service status, a flight, a forecast.

The finding that justified the whole exercise: nobody scores above 3 of 5 on attribution on the claim, while several score 5 on freshness. The same hole the competitor round found, reached from a completely different direction.

One screen collected in this round was deleted rather than kept: `bench-stripe-status.png`. Stripe's status page is the same genre as GitHub's, the benchmark deliberately holds five products, and an unconsumed screenshot in `research/screens/` reads as evidence without being any.

---

## 2026-08-11. Why these fifteen competitors, in three groups

Full facts in `research/docs/competitors.md`. The grouping is the decision, the names follow from it.

**HARD** is the same product for the same audience: Atlan, Secoda, Select Star, PowerMetrics, dbt Semantic Layer. Chosen because each one owns the object we intend to own, the metric definition, and because between them they cover the three shapes that object takes: a governance layer, an asset catalog and a first-class metric.

**SOFT** is a different product solving the same job: Looker, Omni, Cube, Monte Carlo, Sifflet. The first three answer "we have different numbers" with a semantic model, the last two answer "is this number broken" with observability. Both routes reach our job from outside our category, which is what makes them soft rather than absent.

**ASPIRATIONAL** is a category benchmark for craft, not for positioning: Datadog, Grafana, Snowflake Horizon, Databricks Unity Catalog, Hex. Datadog and Grafana for dense state at any width, the two warehouse catalogs because governance moving into the platform is the pressure our landscape is under, Hex for explaining how a result was produced.

**What was checked and found closed.** Refero was searched on 2026-08-11 for lineage graphs, metric detail pages and warehouse consoles: it indexes consumer and developer SaaS and not one product from this set. The route that worked instead was public documentation, which carries real interface screenshots without an account. Recorded so nobody spends that search twice.

**The honest limit of the round.** None of the fifteen shows its product surface without an account. Documentation closed that gap for five of them and left it open for ten, and even for the five it describes an interface rather than letting anyone walk through it. Every claim about visual density and narrow-width behaviour in this set stays `[?]`.
