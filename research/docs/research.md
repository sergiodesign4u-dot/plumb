# Research

Foundation research for Plumb, assembled 2026-08-11. Single source of truth for every stage that follows. The level files behind it stay where they are and keep the full detail: `competitors.md`, `benchmark.md`, `lean-ux-canvas.md`, `aarrr.md`, `ux-patterns.md`.

Rules that hold throughout. Every fact about the market comes from a page opened in a browser on 2026-08-11 and names its source. Anything from a search summary or from model memory is marked `[?]` and is not treated as a fact. Nothing here about our own users is observed: no analyst and no business reader has been interviewed, so every claim about their behaviour is either inference from artefacts, marked as such, or `[?]`.

---

## 1. Introduction

**Goal.** Remove the daily friction of reconciliation, when two people arrive at a meeting with different numbers for the same thing and spend half an hour working out whose number is right. The expensive version is quieter: nobody argues, and a decision gets made on a number nobody owns.

**Problem.** The definition is already owned by producer tools: dbt, Looker's LookML, Atlan's metrics layer. What nobody owns is the last mile. The number arrives in front of the person who will act on it stripped of everything that would let them judge it.

**Approach.** Seven levels, from the concrete to the synthesis: fifteen competitors in three groups, then a benchmark of one chosen dimension against five products from other categories entirely, then strategy on one sheet, then the funnel, then a deliberate choice of UX pattern, then this file. Playwright first for every page, documentation used where the product sits behind a login, and no accounts created anywhere.

### Five findings

**1. Provenance exists in every product and lives nowhere near the reader.** Lineage, catalog and incident are all destinations. To travel to one you must already suspect something, and the person we care about does not suspect anything yet. The strength of this is worth stating exactly: it is **shown** for the five products whose documentation we opened, PowerMetrics, Select Star, Secoda, dbt and Sifflet, and **inferred** for the other ten from their positioning, since none of the fifteen shows a product surface without an account (`competitors.md`).

**2. Attribution on the claim is unoccupied, and this was confirmed from two independent corpora.** In the category, certification is a badge and the name appears only in the exception case: PowerMetrics shows who removed a certification and when (`support.powermetrics.app`, article 37726220561559). Outside the category, across five best-in-class products chosen for exactly this dimension, not one scores above 3 on attribution while several score 5 on freshness (`benchmark.md`).

**3. The category changed its subject in 2026 and vacated our ground while doing it.** Fourteen of the fifteen pages opened put AI or agents in the headline or subheading, always with the answering system as the subject of the sentence, never the figure being read. `montecarlodata.com` now redirects to `montecarlo.ai` and the observability leader sells "Trust your agents in production". Trust in a number read by a person is less defended than it was a year ago.

**4. Nobody serves the moment that matters, and the failure is measurable rather than aesthetic.** Not one of the fifteen pages opened positions itself on reading away from a desk: no phone, no meeting, no minutes before one. How those interfaces behave at a narrow viewport is a separate question and stays `[?]`, since none of them can be reached without an account. In the benchmark, run at a verified 360 px viewport, the only product that overflowed was Yahoo Finance, `clientWidth` 360 against `scrollWidth` 364, which is also the product with the best freshness line in the set. Good trust design does not automatically survive the width where the check actually happens.

**5. There is no pricing norm for readers, only a choice.** Secoda gives unlimited viewers on all three tiers, Cube charges $20 per viewer per month, Looker makes Viewer a separate license type, PowerMetrics caps metrics at 50 and 200. Our model is therefore a decision we own and must defend, not one we inherit.

### What the research confirmed, narrowed and changed in the brief

**Confirmed.** The problem is real and the market says it out loud in its own words: dbt writes "inconsistent metrics, slow queries, and scattered tools can quickly erode trust", PowerMetrics leads with "When metrics are inconsistent, definitions conflict, and teams can't agree on numbers", then says AI makes that worse rather than better. The positioning line in `CLAUDE.md`, that Plumb is not built to visualise data but to make a number defensible, survives contact with fifteen products.

**Narrowed, and this is the most useful outcome of opening the documentation.** Two of the four gaps we thought we had are partly occupied. Doubt as a vocabulary already exists: dbt runs four health states, Healthy, Caution, Degraded and Unknown, with detail on hover. Ownership on the claim already exists as an exception: PowerMetrics names who removed a certification. Our version of both is **placement**, not invention. Saying that plainly is worth more than an unchecked claim of novelty, because the design work is now aimed at the right thing.

**Changed.** Four things the brief did not have. First, mobile-first stopped being a preference and became the measured gap. Second, permissions reach into provenance: Secoda states that "Editors and Viewers only see lineage for resources they have access to", which touches the free-reader model directly and is now open question 7. Third, column-level lineage sits behind Enterprise at dbt, which says what deep lineage costs and supports keeping it as depth-on-request rather than as the opening state. Fourth, two decisions the brief could not have anticipated: **our doubt is not an incident** (it has no assignee and nothing to close, unlike Sifflet's), and **we build no trust score** (an aggregate of the "99.42% over 90 days" shape is indefensible for a metric and lets the reader skip the only question that matters).

---

## 2. Strategy

The one-sheet version is `lean-ux-canvas.md`. This is the same strategy with the reasoning attached.

**Business problem.** Prove there is a business in owning the moment of reading, not the definition. If there is not, Plumb is a feature of dbt.

**Audience.** Three parties, one deliberately without a product surface.

- **Analyst or data lead.** Primary user and the payer. 28 to 40, company of 50 to 300, data team of 1 to 5. Interrupted several times a week by "why is this number different", and every answer costs manual digging.
- **Business consumer of the number.** PM, marketer, finance, 25 to 45. Unpaid, and the one the market underserves. Not our invention as a persona: Secoda names Data Consumers, Business Operations and Product Managers on its own site, Sifflet names Data Users. What we claim is that they are served badly, and there is a documented reason, since permissions and catalog placement both cut them out.
- **Head of data or COO.** Buyer, not user. Asks about SOC 2 and SSO, never opens the product daily. Kept off the product surface so that three personas do not compete for 15 to 30 screens.

All three descriptions come from the brief in `CLAUDE.md`, not from observation. The ages, the team sizes, the interruption frequency and the buyer's behaviour are assumptions we wrote down before the research, and they stay `[?]` until stage 02 interviews people. They are here because the product was designed against them, not because they were verified.

**Jobs, in the reader's and the analyst's own terms.** Full list in `lean-ux-canvas.md` block 4. The two that decide the product:

- Reader: when I am about to paste a number into a deck, I want to know in a few seconds whether it still holds, so I am not caught out in front of leadership.
- Analyst: when I am asked for the third time this week why two dashboards disagree, I want to answer once and have the answer stay answered.

**Business model.** Seat-based, analyst seats paid, readers free or near free, no cap on metric count. The reasoning is mechanical rather than generous: the value of Plumb grows with the number of people who see a number with its provenance, so charging per reader taxes our own growth mechanism, and charging per metric taxes activation, which is the behaviour we most need.

**Riskiest assumption.**

> A business consumer will read the number in Plumb, before they use it, instead of using the figure they already have in the dashboard, the Slack message or the deck.

It is a value risk, not a feasibility risk. Rendering a card next to a number is not hard; getting a person under time pressure to check something they did not doubt is the whole bet. Everything downstream, the registry, the states, the attribution, the free reader seat and the pricing shape, pays off only if the reader arrives at the moment they are about to act.

The quiet argument that it really is the risky one: not a single product in the fifteen treats the reading surface as its own product. Either all of them missed it, or the last mile is hard to take.

**First test.** Three companies, five metrics each, static pages made by hand, no build. For two weeks the analyst answers every "why is this number different" with the link and nothing else. Four signals are counted, and the one that decides it is not the open rate but whether any reader **stopped using a number** because the card told them not to. Kill condition written in advance: if that never happens in two weeks across three companies, the assumption is not confirmed whatever the open rate says. Full protocol in `lean-ux-canvas.md` block 8.

---

## 3. AARRR

Full stage-by-stage reasoning in `aarrr.md`. Two structural facts first, because they shape everything in the table.

**The funnel has two bodies and one wallet.** The analyst pays and never spreads; the reader spreads and never pays. Any metric that averages them looks healthiest exactly when the readers stop coming.

**The activation node is defined on the reader, not on the connection.**

> **Activation: the first time a metric card is opened by somebody other than the person who wrote its definition.**
>
> Read by stage 03a step 4, which has to make this node visible in the flow of the main job. Connecting a source, writing a definition and naming an owner are setup, not activation.

That definition is deliberate instrument design: the activation event and the event predicted by the riskiest assumption are the same event, so the funnel cannot read green while the strategy is wrong.

| Stage | Whose funnel | The one metric | Target [all hypotheses] | The one product decision |
| --- | --- | --- | --- | --- |
| Acquisition | Analyst | Qualified workspaces per week | 5 per week by month 3 | The public page renders the real card component, not a picture of it |
| **Activation** | **Reader** | **Workspaces where a second person opens a card within 7 days** | **50%** | **A card is readable through its link with no account** |
| Retention | Reader | 4-week reader return | 35% | One permanent URL per metric, and it is what copy gives you |
| Revenue | Analyst | Activated workspaces buying a seat within 30 days | 20% | No metric limits and no reader seat; only analyst write access is billable |
| Referral | Reader | Distinct readers per paid analyst seat, day 30 | 8 | A reader invites a reader in one action, bounded by email domain |

Four of those five targets come from nowhere and are placeholders to be replaced by the first cohort. Only the 30-day window has an external anchor, the PowerMetrics 30-day trial. A stated number can be shown wrong; an unstated one cannot, which is the whole reason they are written down.

Every baseline is `[?]`: no product, no cohort, and nothing to borrow from a category where seven of the ten HARD and SOFT products publish no seat price.

**Two conclusions that cost us something.** Retention is the weakest stage and our own scope cut made it so: notification routing is out of MVP, so nothing reaches out and the stage rests entirely on a permanent URL plus a card that has something new to say when reopened. And referral grows readers, not logos: metrics are internal, cards travel inside a company, so the loop raises readers per seat and produces almost no new accounts. New accounts have to be earned in acquisition.

**One requirement this funnel puts on the IA, and it needs a reader.** The retention metric can only tell "came back alone" from "was sent the link again" if the share event is recorded next to the open event. That is an event-model requirement, not a screen: stage 03a step 4 has to carry it into the flow of the main job, otherwise the metric silently measures the analyst instead of the reader (`aarrr.md`, Retention).

**One consequence for the next stage.** Four of the five product decisions land on the same object. The card must work with no account, keep one permanent address, carry no upgrade wall and serve as the public demo. The reading surface is not one screen among fifteen, it is the load-bearing object of the IA.

---

## 4. Competitors

Fifteen products in three groups, all opened 2026-08-11, public and pre-login pages only. Full facts and sources in `competitors.md`.

### The matrix, five most relevant

| | PowerMetrics | Secoda | Atlan | dbt Semantic Layer | Sifflet |
| --- | --- | --- | --- | --- | --- |
| **Audience** | Growing companies, non-technical users plus data teams | Whole data org including Data Consumers, Business Ops, PMs | Enterprise data teams and stakeholders | Data teams, business users as consumers | Data engineers, leaders, users, governance |
| **Built on** | The metric as a first-class object | The asset catalog | The enterprise metadata graph | The dbt model | The pipeline and its incidents |
| **Key mechanism** | Metric Catalog with defined and certified metrics | Search plus lineage plus governance in one UI | Metrics layer as the KPI definition standard | Definitions compiled once, served everywhere | Catch the issue before the business sees it, explain why |
| **Where trust is shown** | On the metric, as certification | In the catalog, next to the asset | In the governance layer | In the API contract | In the incident |
| **Monetisation** | Public: $24 and $35 per month annually, extra users $288 and $420 per year, capped at 50 and 200 metrics | Tiers with no public numbers, viewers unlimited | Contact sales only | Free developer tier, $100 per seat per month | No public numbers, free entry offered |

### Three common patterns

1. **Trust is sold as a property of the answering system, not of the number.** Fourteen of the fifteen pages opened put AI or agents in the headline or subheading. The subject of the sentence is always the system that answers. The one exception, Atlan, is an artefact of the page we opened, a product sub-page rather than the homepage, so its top-level positioning is `[?]`.
2. **Definition governance lives in a producer tool and the last mile is delegated.** LookML, dbt, the semantic layer and the catalog own the definition, then hand the number to a surface owned by somebody else. No product here treats the reading surface as its own product.
3. **Pricing is mostly opaque.** Seven of the ten HARD and SOFT products publish no seat price; only PowerMetrics, Cube and dbt do. Looker publishes consumption overage rates but no edition price. Contact-sales is the default, not the exception.

### Three differences

1. **Reader pricing splits the market.** Unlimited viewers (Secoda) against $20 per viewer per month (Cube) against a separate Viewer license (Looker). No norm to inherit.
2. **The object of the product decides the interface.** A metric as object gives metric cards. An asset catalog gives tables and graphs. An incident gives an alert feed. Same job, three completely different screens.
3. **The pricing lever differs.** Metric count caps (PowerMetrics), pure seats (dbt at $100), consumption (Looker token overage from 2026-10-01 at $3 and $20 per 1M tokens).

### Gaps

| Gap | Evidence | Source |
| --- | --- | --- |
| Provenance at the point of reading, on a phone | None of the fifteen positions itself on reading away from a desk; provenance is a destination in all five whose product surface we could see | `competitors.md`, positioning across fifteen, surfaces for five |
| Doubt addressed to a business reader | Sifflet explains why, but routes the incident to people who own pipelines; dbt's four states live in a catalog a non-analyst never opens | `docs.siffletdata.com/docs/incidents`, `docs.getdbt.com/docs/explore/explore-projects` |
| Ownership visible on the claim, always on | Certification is a badge; the name appears only when it is removed | `support.powermetrics.app`, article 37726220561559 |
| Trust for a human reader, as a defended position | The category leader moved to agent trust and left it | `montecarlo.ai` |

### Two constraints learned, and one limit of this round

Permissions reach into provenance: Secoda restricts the lineage graph to what a viewer may access, so an unpaid reader can be shown less than we assumed. Column-level lineage is Enterprise-only at dbt, which says what depth costs to build and what it is worth.

The limit: **none of the fifteen shows its real product surface without an account.** That gap is closed for five of them through public documentation, which carries real interface screenshots. It stays open for the other ten, and stays partly open even for the five, because documentation describes an interface rather than letting you walk through it. Claims about visual density and behaviour at narrow width remain `[?]`. Refero was checked on 2026-08-11 and does not index this category, so that route is closed and recorded so nobody spends the search twice.

---

## 5. Benchmark

**The dimension: trust without leaving the place of reading.** Can a person tell how far a number can be trusted, right where they read it, without going anywhere to find out. Chosen over two alternatives, speed from doubt to answer and legibility of provenance for a non-specialist, both of which competitors already serve reasonably well.

Five products from other categories, scored on eight criteria, all opened 2026-08-11. Narrow-width results measured, not estimated: viewport set so `document.documentElement.clientWidth` reads exactly 360, overflow read as `scrollWidth > clientWidth`.

| Criterion | Wikipedia | Yahoo Finance | GitHub Status | FlightAware | NWS forecast |
| --- | --- | --- | --- | --- | --- |
| 1 Freshness adjacency | 2 | 5 | 5 | 5 | 2 |
| 2 State vocabulary | 4 | 3 | 5 | 4 | 3 |
| 3 Provenance in one action | 5 | 2 | 4 | 3 | 3 |
| 4 Uncertainty explicit | 3 | 3 | 4 | 4 | 5 |
| 5 Attribution on the claim | 2 | 3 | 3 | 2 | 3 |
| 6 Layperson legibility | 4 | 4 | 5 | 5 | 4 |
| 7 Survives 360 (measured) | 5 | 2 | 5 | 5 | 5 |
| 8 No false calm | 5 | 4 | 5 | 4 | 3 |
| **Total** | **30** | **26** | **36** | **32** | **28** |

**The pattern across all five.** Nobody scores above 3 on attribution. Every one of these products tells you how old a value is, several tell you how uncertain it is, and not one tells you who is answerable for it. The same hole the competitor set has, found from a completely different direction.

### Top three mechanisms into the MVP

1. **A named state vocabulary instead of one alarm.** From GitHub Status: five named component states and four named incident stages, each stamped, replacing a binary up or down. A stale number, a broken source and a changed definition become three states with three treatments, never one red badge. Mechanism: ambiguity aversion, since people discount an unknown risk far more heavily than a known one.
2. **Evidence on the claim, one action away.** From Wikipedia: a superscript marker opens the source without moving you off the page, and missing evidence is stated in place. Applied as a provenance marker on the number and on the definition, opening inline rather than routing to a lineage screen. Mechanism: cost of verification, since the visible availability of the check raises trust even for the majority who never use it.
3. **Expectation and reality side by side, with age in relative time.** From FlightAware: "Landed 13 minutes ago" plus scheduled against actual printed together. Applied to the freshness line: "as of 14:05, 20 minutes ago, expected hourly". Mechanism: comparison without arithmetic.

One honest note on the three mechanism names. Ambiguity aversion, cost of verification and comparison without arithmetic are framing borrowed from general behavioural literature, not claims verified against a source opened in this session. The observed part is what the products do, which is screenshotted and cited. The named mechanism is our explanation of why it works, and it is `[?]` in the same sense any explanation is.

### One mechanism that will not work for us

**An aggregate uptime figure, as in "99.42% over the past 90 days".** It works for GitHub because a service is either callable or not. A metric is not like that. The same shape would read as "this number is 99.4% correct", which nobody can defend, and it would let the reader skip the only question that matters at the moment of reading. We build no trust score.

---

## 6. Patterns

**The key task**, derived from the goal and audience in `CLAUDE.md` and the user outcomes in the canvas: decide, in seconds and in the place where the number is being read, whether this number can be put in front of somebody else.

**Entry-point behaviour: the number is read away from the system that produced it.** This is an assumption taken from the brief and from the shape of the market, not an observation, `[?]` until stage 02 asks a reader directly, and it is the weakest link in the chain below. It decides the location of the product before any other question is asked. If the reader is inside the producing tool, a catalog, a graph or a board are all legitimate answers. If the reader is outside, all three lose by default, because each requires leaving what you are doing and arriving with a question already formed.

Five patterns were compared, taxonomy by **where trust information lives**: on the object, in a directory, in the structure behind it, in a dedicated surface of its own, in an answer you ask for. Full comparison in `ux-patterns.md`.

> ### Chosen: evidence on the claim
>
> Trust information is attached to the object being read and travels with it. One line of provenance immediately, depth on request. Stage 03a step 2 checks screen structure against this line.

**Three reasons.** It is the only locus that survives the entry-point behaviour, and it serves the reader's job verbatim. It is the open gap, confirmed from two independent corpora, competitors and benchmark. And it is the only one of the five still legible at 360 px in five minutes, which is also what four of the five AARRR product decisions already assume.

**Alternative, and the condition under which it wins.** The status board form: named states in a grid, no search, no navigation, GitHub Status as reference and the top scorer in the benchmark. It wins if the reader's need turns out to be portfolio-shaped rather than single-number shaped, for example the same twelve numbers every Monday for a business review. The signal to watch, named in advance so this stays a decision and not a mood: readers opening three or more distinct cards in one session, repeatedly, on a schedule.

**A different fork, not to be confused with that one.** If the riskiest assumption fails outright and readers never arrive, the fallback is not the board, it is catalog and search with the analyst as the only user. That is a strategic downgrade onto Secoda's and Atlan's ground, and it should be accepted only after the kill condition has actually fired.

**What does not fit: the conversational answer**, and this is the crowded position, not an empty one. Four grounds. It moves the problem up a level, since the reader now has to trust the answering system in order to check the number. It cannot obey design principle 1, because a chat reply is bare by construction. It is where almost every competitor already stands, so it is the one place where being right buys the least. And it fights our own metadata-only architecture by inviting questions about rows we deliberately do not hold. The distinction that must not be lost: rejecting the agent as our interface says nothing about the agent as a reader of our surface, which is a separate open question.

**One live counter-reference, kept on purpose.** Resend puts its freshness marker in a small update timestamp footer (`refero.design/pages/9d0debce-382e-442d-91a2-31a623730246`, checked 2026-08-11). That is the pattern design principle 1 forbids, in a shipped product, which makes it more useful than an invented bad example. Reader named: stage 06 step 1, as an anti-reference when the visual language is searched.

**None of the four rejected patterns is discarded whole.** Catalog and search stays as the analyst's side, the registry list and jump-by-name. The lineage graph stays as depth on request, behind the one-line provenance. The dedicated doubt surface gives up its best asset, the named state vocabulary, which moves onto the card. That is the argument that the choice is about locus rather than taste.

---

## 7. Conclusions

### Gaps and their sources

| # | Gap | What it rests on | Source |
| --- | --- | --- | --- |
| 1 | Provenance is a destination, so it reaches only readers who already suspect | Shown in the five documented product surfaces, inferred for the other ten from positioning | `competitors.md`, documentation section |
| 2 | Doubt never reaches a business reader | Sifflet routes incidents to pipeline owners; dbt's four states live in a catalog | `docs.siffletdata.com/docs/incidents`, `docs.getdbt.com/docs/explore/explore-projects` |
| 3 | Attribution on the claim is absent, always-on | Nobody above 3 of 5 in the benchmark; PowerMetrics names the person only on removal | `benchmark.md`, `support.powermetrics.app` |
| 4 | Narrow width is unserved, and good trust design does not survive it by default | Yahoo Finance overflows at a measured 360 while scoring 5 on freshness | `benchmark.md`, `bench-yahoo-finance-360.png` |
| 5 | Trust for a human reader is momentarily undefended | The observability leader moved to agent trust | `montecarlo.ai`, `competitors.md` |
| 6 | No reader-pricing norm exists to inherit | Unlimited viewers, $20 per viewer, separate Viewer license, metric caps, all in one market | `competitors.md`, difference 1 |

### Six hypotheses

Format: if / then / because [data].

**H1 (this is the riskiest assumption from section 2).** If a business reader meets freshness, source state and definition on the same line as the value, then they will check before acting rather than after being contradicted, **because** every existing route to provenance is a destination that requires prior suspicion, across all fifteen products (`competitors.md`).

**H2.** If the three states are named and treated distinctly, stale, source down, definition changed, then a number on a bad day stays usable instead of being discarded whole, **because** the four-state vocabulary already works where it is deployed and simply never reaches a non-analyst (`docs.getdbt.com/docs/explore/explore-projects`).

**H3.** If every definition carries a name and a date, always visible, then trust transfers from the individual analyst to the product, **because** not one of five best-in-class products scores above 3 on attribution while several score 5 on freshness, so the market has proved the adjacency habit but not the accountability one (`benchmark.md`).

**H4.** If the card is readable with no account at one permanent URL, then readers per paid analyst seat rises to the level the pricing depends on, **because** there is no reader-pricing norm to violate, and the one competitor whose viewer experience is documented cuts it down: Secoda restricts the lineage graph to what a viewer may access (`competitors.md`, difference 1; `docs.secoda.co/features/data-lineage`). What Cube and Looker show their paid viewers is `[?]`.

**H5.** If we never cap metric count, then registry filling is not penalised at the exact moment it is most fragile, **because** the one competitor with public pricing caps at 50 and 200 metrics, placing the cap directly on the behaviour that is our activation (`powermetrics.app/pricing`).

**H6.** If the trust signal survives a measured 360 px, then the check happens in the five minutes before a meeting rather than not at all, **because** the one benchmark product that overflowed at 360 is one of the three that score 5 on freshness adjacency, which shows the two qualities are independent and must be verified separately (`benchmark.md`).

### Open questions

| # | Question | Addressee | What changes in the product | Status |
| --- | --- | --- | --- | --- |
| 1 | Do readers pay? | Me as product owner, no stakeholder exists yet | The business model line in `CLAUDE.md`, whether a shared read-only link is in MVP at all, whether the reading surface must work with no account | Open |
| 2 | Does charging by metric count actually punish filling the registry? | Analysts at three target companies, none interviewed | The pricing lever and the activation metric in AARRR. If a cap does not hurt adoption, the seats-not-metrics argument loses its ground | Open |
| 3 | Is an AI agent a second reader of our number, and does it read the same surface? | A data lead in a target company, plus me for the scope call | Whether provenance needs a machine-readable surface in MVP. If yes, the MVP grows an API and the IA grows a branch | Open |
| 4 | Does the reader check before acting, or only after being contradicted? | Business consumers at three target companies | Everything. This is H1, and the first test in `lean-ux-canvas.md` block 8 exists to answer it | Open |
| 5 | Is the reader's need single-number or portfolio-shaped? | Business consumers at three target companies | The chosen pattern. Portfolio-shaped means the status board becomes the product and the card becomes its detail view | Open |
| 6 | Does an account-free card survive a US B2B security review? | Head of data or COO as buyer, at one target company | Whether the no-account read stays in MVP, and how early SOC 2 Type II work has to start | Open |
| 7 | What can a free reader be shown when the source's own permissions restrict it? | Me as owner for the scope call, plus a data lead for the reality | How deep depth-on-request can go for an unpaid reader, which is the implementation of design principle 4 | Open |
| 8 | How often does the reader's need actually arrive: weekly, monthly, or only when contradicted? | Business consumers at three target companies | The retention instrument. A monthly need makes a 4-week return rate noise rather than a signal, and it feeds question 5 on whether the chosen pattern or its alternative is right | Open |

Questions 1 to 3 came out of the competitor round, 4 to 8 out of the strategy, funnel and pattern work. Question 8 stays open after the follow-up research at step 6, recorded in section 8 below. Question 8 was promoted out of the stage unknowns in `aarrr.md` during the step 9 critique, because unlike the other eight unknowns there it has an addressee. Stage 02 step 1 reads this table as its list of candidate holes about people, and steps 5 and 6 take the most dangerous of them into critique and targeted follow-up research.

---

## 8. Follow-up research after personas

Added 2026-08-11 at stage 02 step 6. Targeted collection against the most dangerous question from the personas critique, not a second research round. The rest of this file is untouched.

**The question.** What surface do these people read numbers in today, and does a business reader arrive at a number through a link somebody sent, or by opening a dashboard themselves? It is the footing of the entry-point behaviour, of the first-screen decision and of the pattern choice.

**What was found, with dates on the material rather than only on the visit.**

- **dbt Community Forum**, thread "What does 'self-serve' in analytics mean to you?" (`discourse.getdbt.com/t/712`, opened 2026-08-11, posts dated 2019-11 to 2019-12). A practitioner: "If there is a question you are getting asked frequently and you find yourself pulling the same data for multiple users, then it almost always is a good use of your time to set that up as a dashboard". Another, on the reader: "most 'business users' like product managers have a lot on their plate already, and beyond understanding / reporting on their domain, it's unlikely most of them will be able to dedicate the time necessary to deeply explore their data or make sense of it".
- **Hacker News**, comment on "Notes on the Perfidy of Dashboards" (`news.ycombinator.com/item?id=28329709`, dated 2021-08-27): "The main problem is that it's not easy to drill down into a metric in most BI tools because the connection between the dashboard and the source data is usually missing".

**What that changes.** Two claims that had rested on our own brief now have a source outside it: the analyst is repeatedly asked the same question, and the business reader does not invest time in digging. One thing is new rather than confirmed: the field's default answer to the repeated question is **to build a dashboard**, so that is what our registry is hired against, not a competitor product. And the missing link between a number and its source is described from outside the vendor category, which is the first non-vendor voice we have on the central gap.

**What it does not change.** The question itself is **not** answered. Nothing found says whether a business reader arrives by a link or opens a dashboard themselves, so the first-screen decision still rests on an assumption, and it stays hole 6 in `personas.md`.

**Routes that failed, recorded so nobody spends them twice.** Reddit search returns HTTP 403 without an account, so r/analytics and r/dataengineering are closed to this pipeline. The Metabase community forum was searched on five behavioural queries and carries technical support threads, not consumption behaviour. A general web search on the behavioural phrasing returned unrelated SaaS listings.

**Age caveat, which qualifies everything above.** The two usable sources are from 2019 and 2021. They support the shape of the problem rather than its present intensity, and this market has visibly moved since: fourteen of the fifteen pages opened in this round lead with AI.

---
