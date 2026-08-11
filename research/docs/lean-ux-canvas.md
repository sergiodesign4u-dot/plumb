# Lean UX Canvas v2

Jeff Gothelf's canvas, filled on 2026-08-11 from `CLAUDE.md`, `research/docs/competitors.md` and `research/docs/benchmark.md`. Eight blocks, in his order.

One warning that applies to the whole sheet. Everything here about the market is sourced from a page opened in the browser on 2026-08-11 and cited. Nothing here about **our own** users is measured: not one analyst and not one business reader has been interviewed. Every target in block 2 is therefore a hypothesis and is labelled as one, and every claim about our users' behaviour either names the outside evidence it leans on or carries `[?]`.

---

## 1. Business problem

**The problem in the market.** Two people bring different figures for the same metric to the same meeting, and the half hour that follows is spent working out whose figure is right rather than deciding anything. The expensive version is quieter: nobody argues, and a decision gets made on a number nobody owns.

That much the category already says out loud, in its own words: dbt frames it as "inconsistent metrics, slow queries, and scattered tools can quickly erode trust" (`getdbt.com/product/semantic-layer`), PowerMetrics as "When metrics are inconsistent, definitions conflict, and teams can't agree on numbers, AI makes it worse, not better" (`powermetrics.app`), Sifflet promises to "catch data issues before they reach the business" (`siffletdata.com`). All three in `competitors.md`. The problem is not the hypothesis. Our answer to it is.

**The business problem for us specifically.** The definition is already owned: by dbt, Looker's LookML, Atlan's metrics layer. What nobody owns is the last mile. Every product in the set governs the definition inside a producer tool and then hands the number to a reading surface built by somebody else (`competitors.md`, common pattern 2). The number arrives in front of the person who will act on it stripped of everything that would let them judge it, and the products that do carry state make it a destination: a lineage graph, a catalog page, an incident. Somebody has to decide to go there, and to decide that they must already suspect something (`competitors.md`, "What this changes in our gaps").

So the business problem is: **prove there is a business in owning the moment of reading, not the definition.** If there is not, Plumb is a feature of dbt.

**Two facts that set the timing.** The category leader in observability moved up and out: `montecarlodata.com` now redirects to `montecarlo.ai` and leads with "Trust your agents in production", so trust in a number read by a *person* is less defended than it was a year ago. And ten of ten products opened lead with AI, always with the answering system as the subject of the sentence, never the figure being read (`competitors.md`, patterns 1 and 3).

---

## 2. Business outcomes

What has to become true for this to be a business, and how we would know. No baselines exist: we have no customer, no analytics and no category norm to borrow, because seven of the ten competitors publish no pricing numbers at all (`competitors.md`, pattern 3). Every current value below is `[?]` by construction, and every target is a hypothesis until a real cohort moves it.

| # | Outcome | How it is measured | Target | Status |
| --- | --- | --- | --- | --- |
| 1 | The registry gets filled | Metrics carrying both a definition and a named owner, per team, in the first 7 days | 10 metrics [hypothesis] | Baseline `[?]` |
| 2 | Readers actually arrive | Distinct business readers who open at least one metric card per paid analyst seat, day 30 | 8 readers per paid seat [hypothesis] | Baseline `[?]` |
| 3 | Reading becomes a habit, not a rescue | Share of those readers who return in a week they were not sent a link | 40% [hypothesis] | Baseline `[?]` |
| 4 | The reconciliation tax drops | Self-reported "why is this number different" interruptions per analyst per week, asked before and after | Halved [hypothesis] | Baseline `[?]`, and self-report is a weak instrument, named as such |
| 5 | It monetises the way the model says | Paying teams, seats billed to analysts only, readers free | First 10 paying teams [hypothesis] | Open, see open question 1 in `competitors.md` |
| 6 | The purchasing gate stays reachable | SOC 2 Type II named as a later goal with a trust surface present in the IA from the start (`CLAUDE.md`) | Not MVP, not forgotten | Deliberate |

Outcome 2 is the one that carries the model. Seats are charged to analysts and readers are free or near free (`CLAUDE.md`), which means every unpaid reader is the growth mechanism rather than a cost. It also means outcome 2 failing does not just slow us down, it removes the reason the pricing is shaped that way.

---

## 3. Users

Three parties, and one of them deliberately gets no product surface.

**1. Analyst or data lead. Primary user, and the payer.** 28 to 40, company of 50 to 300, data team of 1 to 5 (`CLAUDE.md`). Interrupted several times a week by "why is this number different", and every answer costs manual digging. Wants to stop being a human API to their own data, and wants the reputation of being the person whose numbers are trusted.

**2. Business consumer of the number. Second side, unpaid, and the one the market underserves.** PM, marketer, finance, 25 to 45. Takes a number from a dashboard into a decision or a deck with no way to check whether it still holds. Wants not to be caught out in front of leadership.

This persona is not our invention: Secoda names Data Consumers, Business Operations and Product Managers on its own site, Sifflet names Data Users (`competitors.md`). What we claim is not that they exist but that they are served badly, and there is a concrete reason: Secoda's permissions reach into lineage, so "Editors and Viewers only see lineage for resources they have access to" (`docs.secoda.co/features/data-lineage`), and dbt keeps its four health states inside a catalog a non-analyst has no reason to open.

**3. Head of data or COO. Buyer, not user.** Signs, asks about SOC 2 and SSO, never opens the product daily. Kept outside the product surface on purpose: three personas competing for 15 to 30 screens means none of them gets drawn properly (`CLAUDE.md`).

**Not a user, and it is a live question, not an omission.** An AI agent reading our numbers. The entire competitor set is moving that way in 2026 and we are staying human-facing for the MVP, which is a deliberate choice recorded as open question 3 in `competitors.md`, not an oversight.

---

## 4. User outcomes and benefits

What each side is hiring the product to do, in JTBD phrasing.

**Analyst**

- When I am asked for the third time this week why two dashboards disagree, I want to answer once and have the answer stay answered, so I can stop paying the same cost repeatedly.
- When I change a definition, I want everyone who ever read that number to see that it changed and when, so I do not have to remember who to tell.
- When somebody quotes my number in a meeting, I want the provenance to be visible without me being in the room, so my reputation does not depend on my availability.
- When a source breaks, I want the number to say so on its face, so a broken figure does not travel quietly.

**Business consumer**

- When I am about to paste a number into a deck, I want to know in a few seconds whether it still holds, so I am not caught out in front of leadership.
- When a number looks wrong, I want to see who defined it and when, so I know who to ask instead of guessing or asking in a general channel.
- When something is broken, I want to be told what kind of broken it is, so I can judge whether it matters for my decision instead of discarding the whole thing.
- When I read on a phone five minutes before a meeting, I want the trust signal to survive that width, so the check happens at the only moment I actually have.

The last one is the outcome no competitor in the set serves. Every product opened assumes a desktop working session (`competitors.md`, gaps).

**Buyer**

- When I approve a tool that touches company data, I want to see that it stores metadata and not our rows, so the security review is short.

---

## 5. Solutions (MVP scope)

The scope from `CLAUDE.md`, with the mechanisms the benchmark earned. This is the rough MVP, narrowed to three core jobs at stage 02.

**In**

1. One data source connection.
2. Metric registry: every metric has a canonical definition and a named owner.
3. Number card with provenance: the value, its age, its source, and the definition, in the same place.
4. Freshness and breakage as **named states**, not one alarm: "as of", "source is down", "definition changed after this was saved". Taken from GitHub Status, where five named component states and four named incident stages replace a binary up or down (`benchmark.md`, mechanism 1). The mechanism underneath is ambiguity aversion: a named trouble stays usable, an unnamed one gets discounted entirely.
5. Provenance in one action, on the claim itself. Taken from Wikipedia, where a superscript marker opens the source without moving you off the page (`benchmark.md`, mechanism 2). Applied as a marker on the number and on the definition, opening the source inline rather than routing to a lineage screen. This is also where design principle 4 does its work: one line visible, depth on request.
6. Freshness as relative age with the expectation next to it: "as of 14:05, 20 minutes ago, expected hourly". Taken from FlightAware, which prints scheduled against actual rather than reconciling them for you (`benchmark.md`, mechanism 3).
7. Attribution on the claim: who declared this definition and when it last changed, always visible. This is the one nobody in the benchmark scores above 3 on (`benchmark.md`, "the pattern across all five"), and the one PowerMetrics only does as an exception case, showing who removed a certification (`support.powermetrics.app`).
8. Search and jump to a metric by name.

**Out**

Dashboard building, SQL editor, row-level permissions, notification routing, comments and discussion, version history deeper than the previous definition (`CLAUDE.md`). Each is either a separate large product or only makes sense once trust already works.

**Deliberately not built, and this one is a decision rather than a cut.** A trust score, or any single aggregate figure of the "99.42% over the past 90 days" shape. It reads as "this number is 99.4% correct", which nobody can defend, and it lets the reader skip the only question that matters at the moment of reading (`benchmark.md`, "one mechanism that will not work for us").

**Not an incident.** Sifflet's doubt has a status, an assignee, a severity and a workflow (`docs.siffletdata.com/docs/incidents`). Ours is an annotation on a number: no assignee, nothing to close. That single difference decides a large part of the IA (`competitors.md`).

---

## 6. Hypotheses

Format: we believe [business outcome] will be achieved if [user] attains [benefit] with [feature].

**H1.** We believe **readers arriving (outcome 2)** will be achieved if the **business consumer** attains **the ability to settle "does this still hold" without asking a human** with **a number card carrying freshness, source state and definition on the same line as the value**.

**H2.** We believe **the registry getting filled (outcome 1)** will be achieved if the **analyst** attains **a permanent answer to a repeated question** with **a registry where a definition is written once, owned by name, and linkable**.

**H3.** We believe **the reconciliation tax dropping (outcome 4)** will be achieved if the **analyst** attains **a link they can send instead of an explanation they have to compose** with **a shareable metric card that carries the whole answer**.

**H4.** We believe **habit rather than rescue (outcome 3)** will be achieved if the **business consumer** attains **a named reason instead of a missing number on bad days** with **three distinct states, stale, source down, definition changed, each with its own treatment**. Evidence that the states themselves work: dbt already runs four (Healthy, Caution, Degraded, Unknown) with detail on hover (`docs.getdbt.com/docs/explore/explore-projects`). Evidence for the gap: they live in a catalog a non-analyst never opens.

**H5.** We believe **trust transferring to the product itself** will be achieved if **both sides** attain **a name and a date on every definition, always visible** with **attribution rendered on the claim rather than in a history tab**. Evidence: not one of the five best-in-class products scores above 3 on attribution, while several score 5 on freshness (`benchmark.md`).

**H6.** We believe **the monetisation shape (outcome 5)** will be achieved if the **analyst** attains **no penalty for filling the registry** with **seats billed to analysts and readers free**. Evidence that there is no norm to inherit, only a choice: Secoda gives unlimited viewers on all three tiers, Cube charges $20 per viewer per month, Looker makes Viewer a separate license type, PowerMetrics caps metrics at 50 and 200 (`competitors.md`, difference 1 and 3). This hypothesis is entangled with open questions 1 and 2 in `competitors.md` and cannot be closed by design work alone.

---

## 7. Riskiest assumption

> **A business consumer will read the number in Plumb, before they use it, instead of using the figure they already have in the dashboard, the Slack message or the deck.**

Everything else in the product is downstream of this. The registry, the states, the attribution, the free reader seat, the entire pricing shape all pay off only if a reader arrives at the moment they are about to act. If they do not arrive, Plumb collapses into a documentation tool for the analyst, sold one seat at a time, competing on the definition against dbt, Looker and Atlan, which is exactly the fight the positioning was built to avoid.

It is a value risk, not a feasibility risk. Rendering a card next to a number is not hard. Getting a person under time pressure to check something they did not doubt is the hard part, and the whole product is a bet on it.

**Why the other candidates are not the riskiest.**

- *"Analysts will fill the registry."* Real risk, but survivable and observable early: filling is the analyst's own job, they get the interruption relief directly, and if it stalls we can seed the registry for them. It also fails loudly, unlike H1, which can fail while every dashboard in the account looks fine.
- *"Teams will pay for this."* Downstream of H1, not parallel to it. If readers arrive and behaviour changes, the pricing question becomes a negotiation about shape. If they do not, price is irrelevant.
- *"A metadata-only architecture is enough."* Feasibility with a known honest cost already named in `CLAUDE.md`: without a copy we cannot show what a value was a month ago. That is a constraint we accepted, not an assumption we are testing.

There is also a quieter reason to suspect this one is the risky one. Not a single product in the fifteen we opened treats the reading surface as its own product; they all delegate the last mile (`competitors.md`, pattern 2). Either they all missed it, or the last mile is hard to take. The canvas assumes the first. The test below exists because the second is entirely possible.

---

## 8. First test

**Smallest thing that tests H1, and it builds nothing.**

Take three target companies. In each, one analyst picks the five metrics they get asked about most. For each metric they write the definition, the owner and the source once. We render each as a static page by hand at its own URL: the value, "as of" in relative time with the expected cadence, the source in one line, the definition with the name and date of whoever declared it, and a named state if there is one that day. Values are refreshed manually by the analyst, daily. No connection, no registry, no login, no product.

For two weeks, the analyst answers every "why is this number different" with that link and nothing else, no explanation in the thread. That single constraint is what makes the test a test.

**What is counted.**

1. Does the asker open the link. This is compliance, and it is the weakest of the four.
2. Does the same reader return to that URL in a week without being sent it. This is the real signal, because it is the only one that measures reading rather than obedience.
3. Do follow-up questions in the thread drop after the link is opened.
4. At least one instance of a reader **not** using a number, or changing what they were about to send, because the card told them not to.

**Kill condition, written before the test rather than after.** If readers open the link but signal 4 never occurs in two weeks across three companies, H1 is not confirmed, whatever the open rate says. A card that gets looked at and changes nothing is a documentation page, and we would rather learn that for the price of two weeks of manual work than after building a registry.

**Cost and blocker.** Cost is analyst time plus manual page updates. The blocker is access: we do not currently have three analysts at target companies, and neither open question 1 nor 2 in `competitors.md` can be answered until we do. Recruiting is therefore the first task, not the test.

**One thing this test cannot answer.** Whether the mobile reading path works, which is the platform bet in `CLAUDE.md` and one of the two gaps nobody in the category serves. Static pages will be opened on whatever device the reader happens to hold, and that is a sample, not an instrument. The measured 360 px method from `benchmark.md` stays the instrument for the layout question, and it belongs to the wireframe and UI stages, not to this test.

---

## What this sheet hands forward

- **The riskiest assumption (block 7)** is read by stage 02 when personas and jobs are cut, by CJM step 9, and by stage 07 step 6, which has to name the one screen that puts the assumption on trial.
- **User outcomes (block 4)** feed the key task at step 7 of this stage, where the UX pattern is chosen.
- **Business outcomes (block 2)** are the input to AARRR at step 6: outcome 1 is activation, outcome 2 is referral in disguise, outcome 3 is retention.
- **The trust score refusal and the "not an incident" line (block 5)** belong in `docs/decisions.md`, since both are decisions that shape the IA and neither is derivable from the code.
