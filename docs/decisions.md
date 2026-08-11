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

## Stage 02+ CJM, 2026-08-11

**Focus: the reader times the main job, and the data lead's map was deliberately not built.** One persona times one job, because a map for everyone dissolves into an average. The data lead's path diverges fundamentally rather than in detail: different actions, a different entry channel, different barriers. That earns a separate map with its own repeat of steps 3 to 9, and it does not exist yet. Two consequences are already visible: the priority of "search and jump to a metric by name" cannot be settled without it, and the analyst-side success signal for attribution has nowhere to live.

**Mining mode: Deep.** Chosen because the repository held no voice-of-customer at all: all 26 screens from stage 01 are vendor pages, and `research.md` carried two lines of practitioner speech. A Lite pass would have re-projected vendor marketing plus our own brief onto a time axis and returned the three load-bearing unknowns undefined. Deep bought the attempt, not the finding, and where a route returned nothing the phase kept its gap.

**The emotional curve was abandoned rather than drawn.** The As-Is map ended with barriers at four phases and no measured emotion at any of them. The single plotted point, a negative of intensity 3, was withdrawn at the critique when its sources turned out to report waiting rather than how waiting feels. The page shows a phase strip with evidence strength instead of a curve, and says why. Recorded because a later stage will otherwise read the missing curve as an oversight and try to supply one.

**The lineage tree was cut as an orphan.** It stood in the backlog under a "later" label with its parent given as "analyst depth", which is neither a barrier nor a job. "Later" is a priority for work that has a parent, never a shelf for an orphan, and a label travelling into the IA stage reads as a decision. If it has a parent, that parent is on the data lead's unbuilt map.

**The MVP label was split into path and core.** Four rows carried an MVP label under a rule they failed, since the reader's To-Be path does not break without mobile legibility, relative age, attribution or the definition snapshot. Rather than move them quietly, the label now distinguishes **MVP-path**, the path breaks without it, from **MVP-core**, inherited and surviving while the path would still run. This is what keeps a scope from growing under one word.

**The first test needs four capabilities of eleven.** Hand-made static pages have no live source and no second definition, so the test of the riskiest assumption needs the card at a permanent URL, the named states, the visible definition with the source on request, and sending it as a link. Recorded as a build-order fact for 03a, not as a scope change.

## Stage 03a IA base, 2026-08-11

**Why the clusters came out this way, and what grouping was rejected.** Screens are grouped by the intent of the person, and the obvious alternative was rejected explicitly: grouping by object (metrics, sources, people, account) is how every competitor's menu is built and it puts the reader inside a tool they have no reason to enter. The clusters are therefore verbs, not nouns, and the reader's two clusters exist without the analyst's three ever being visible to them.

**The primary persona has no global navigation, and this is the largest single decision of the stage.** The reader arrives by a link, holds no account, and the strongest measurement in the research says a destination they are expected to travel to is entered once or twice a year. Global navigation belongs to the secondary persona. The consequence is written into `CLAUDE.md` as a rule because it is exactly what a later stage repairs by reflex, adding a header and a menu and turning the card into a page of a site.

**What was flattened for three taps, and the price.** The reader's path was flattened to zero taps by making the card the landing screen. The price is that **a reader can reach only the metric somebody sent them a link to**: no browsing, no second metric, no way back to a first. The fix would be to give them the registry, which cancels the chosen UX pattern, so the cost is accepted deliberately. Its consequence is the one true dead end in the flows.

**How the orphans were resolved.** Two screens have no job and both stay with empty rows in the matrix, marked: workspace administration serves tenancy, and plan and seats hangs off a business model hypothesis that is still open. A tick added to tidy the table would be the defect this stage exists to catch. One MVP screen, sign-in, carries no closing mark at all and is a precondition of three jobs; it is named because **sign-in is a gate, not a place**, and it is the screen most likely to grow surface later.

**Two verdict divergences with the second instrument, both resolved against it, and one of them cost us.** Codex declined to call either red node a defect, since both were recorded as deliberate. We disagreed: naming a price is not paying the smallest one, and a dead end drawn where none exists misleads exactly as much as one hidden. Repairing the first divergence then created the worst defect of the stage, a route that claimed the main job could close without the number ever being shown, which the second critique caught. Recorded because it is evidence for both halves of the practice: the second instrument is worth having, and so is disagreeing with it.

**One entity fork settled by drawing the route rather than by argument.** Whether a reading is a stored object or a moment encoded in the link was left open in the inventory. The flow showed there is no third option: if the link does not carry the moment, the state degrades to "the definition changed at some point", which asks the reader to remember when they took the number. The moment travels in the link and nothing about the reader is stored.

---

## Stage 03b IA detail, 2026-08-12

**Where page composition comes from, and why the bank was worth a step of its own.** Composition is data, not opinion: every block traces to a job, a barrier or an SEO requirement, and it comes from `ia/docs/blocks.md`, built by page type from two sources answering two different questions. Competitors give domain truth, a craft reference outside the category gives craft truth. **The uncomfortable result is recorded rather than smoothed:** none of the fifteen competitors shows a product surface without an account, so for the three types holding 21 of the MVP nodes the domain half is public documentation, and everything about density and behaviour in the hand stays unknown. Only T4, T8 and T6 had a live public page, and only there does the "where we are better" column mean what it says.

**The decisions that shaped the product rather than the documents.** The registry never queries the customer's warehouse, because a page whose cost scales with the registry punishes the exact behaviour activation is defined as, and it would fight a pricing hypothesis with no cap on metric count. Popularity ranking is refused outright, in a market where both domain sources rank by it, because popularity is a proxy for authority and proxies for authority are what this product exists to replace. A metric becomes executable through one pasted query rather than a builder or an editor, because the secondary persona already has the SQL and the problem is that the meaning lives in somebody's head. And a deleted metric leaves a tombstone of three fields, because the reader's first contact with us is a link that may be dead.

**Two open questions were closed and one hole was opened.** The cookie discrepancy the base layer carried turned out to be a product decision: the card sets nothing on the reader's device, so a consent dialog never appears on the page that promises we store nothing about them. That forced a correction rather than a refinement, since "we cannot count anything" was too broad: nothing that identifies a reader is stored, an anonymous counter on the metric is what makes activation observable at all, and no count is ever rendered. **The hole opened at node 3.2:** expected cadence is a claim rather than a measurement, nothing verifies it against what the source does, and a card can therefore say "expected hourly" in good faith about a source that answers daily.

**What the audit changed, and it is the argument for auditing before drawing.** The MVP footer could not render its own composition inside the MVP: its minimal variant is the only global surface the reader ever sees and all three of its targets were deferred. Repairing that moved the product page, the privacy policy and the terms of service into MVP, and moved "not readable without an account" out, because restriction is a workspace policy and in MVP every card is readable. **The MVP grew in the public surface rather than in the product.** The second pass then found what the first repair broke, and produced the rule that replaced nine separate annotations: a navigational element renders only the targets that exist in the current scope.

**The finding that says most about the practice.** Node 3.1 quoted node 0.4 as canonical while rewording it, saying "Last answered" and "Source is down since" where the canon says "As of" and "Source is down. Last run". **The drift node 0.4 exists to prevent was committed by the node that cites it**, and it was caught by the second instrument rather than by the author, on a stage where thirty specifications cannot be held in one head.
