# UX patterns

Five principally different patterns considered for one task, one chosen deliberately, four rejected on the record. Written on 2026-08-11 from `CLAUDE.md`, `research/docs/competitors.md`, `research/docs/benchmark.md` and `research/docs/lean-ux-canvas.md`.

## The key task

Derived from the goal and audience in `CLAUDE.md` and from the User outcomes block in `lean-ux-canvas.md`, in one sentence:

> **Decide, in seconds and in the place where the number is being read, whether this number can be put in front of somebody else.**

Three words in that sentence do the work. **In seconds**, because the reading happens under time pressure and the alternative is to skip the check. **In the place where it is read**, because the number has already left the system that produced it. **In front of somebody else**, because the stake is not correctness in the abstract, it is exposure: a deck, a meeting, a decision with a name on it.

---

## Part 1. Behavioural patterns of the audience

Five behaviours the design has to survive. Honesty first: **not one of these was observed by us.** No analyst and no business reader has been interviewed. Each is marked with what it actually rests on, either evidence from the competitor and benchmark research or an assumption inherited from the brief, and the assumptions stay `[?]` until the first test in `lean-ux-canvas.md` block 8 runs.

**B1. The number is read away from the system that produced it.** It arrives in a deck, a Slack message, a screenshot or a spreadsheet cell, stripped of everything around it. Rests on: the brief (`CLAUDE.md`, second side: "takes a number from a dashboard into a decision or a deck"), plus the structure of the market, where every product governs the definition in a producer tool and hands the number to a surface owned by somebody else (`competitors.md`, pattern 2). Direct observation of our users: `[?]`.

**B2. Checking happens only after suspicion, and suspicion arrives late.** Nobody opens a lineage graph on a good day. Rests on: the shape of every competitor's provenance surface. Lineage, catalog and incident are all destinations, and to travel to one you must already doubt (`competitors.md`, "What this changes in our gaps"). This is inference from artefacts, not from people, `[?]`.

**B3. Doubt is resolved socially, not technically.** The reader asks a person, usually the analyst, usually in a channel. The analyst then digs manually. Rests on: the brief's description of the analyst being interrupted several times a week (`CLAUDE.md`), and on the fact that Sifflet models doubt as an incident with an assignee, that is, as something a named human owns (`docs.siffletdata.com/docs/incidents`). `[?]` for frequency and for who gets asked.

**B4. The reader has no vocabulary for what is wrong, only for whether to use it.** A stale number, a broken source and a changed definition are three different situations, and to a business reader today they all present as "the dashboard looks weird". Rests on: dbt already runs four named health states, Healthy, Caution, Degraded and Unknown, but keeps them in a catalog a non-analyst has no reason to open (`docs.getdbt.com/docs/explore/explore-projects`). So the vocabulary exists in the market and does not reach this person.

**B5. The reading happens at the worst possible width.** Five minutes before a meeting, on a phone, in a corridor. Rests on: the platform decision in `CLAUDE.md` and the gap found in the research, where every product opened assumes a desktop working session (`competitors.md`, gaps). Frequency `[?]`.

### The most critical: B1, and it is the entry point

**B1 is the entry point because it decides the location of the product before any other question is asked.** If the number is read inside the tool that produced it, then a catalog, a graph or a status board are all legitimate answers: the reader is already in the building, and the design question is only how to route them. If the number is read outside, all three lose by default, because each requires the reader to leave what they are doing, travel to a destination and arrive with a question already formed. B2 explains why they will not travel, but B1 is what makes travelling necessary in the first place.

It also sets the two constraints that follow the product everywhere: whatever we build has to be **portable** (it survives being pasted into a place we do not control) and **immediate** (it says its piece before the reader decides). Design principles 1 and 4 in `CLAUDE.md` are the codified form of exactly this pair, and it is why they were written as a pair.

---

## Part 2. Five patterns

The taxonomy is by **where trust information lives**, because that is the axis the key task turns on. Five loci: on the object, in a directory, in the structure behind it, in a dedicated surface of its own, in an answer you ask for.

One merge is declared rather than hidden. Pattern 4 covers two forms, the incident feed and the status board, which are visibly different on screen (one is chronological with a workflow, the other is a current-state grid). They are one pattern here because their locus is identical: trust lives in a surface of its own, separate from the number, with its own lifecycle. Splitting them would have produced six patterns and two entries making the same argument.

### Pattern 1. Evidence on the claim

**How it works.** The trust information is attached to the object being read and travels with it. The value carries its age, its source and its definition in the same visual unit. One line of provenance is visible immediately; the full structure opens on request and only on request.

**Where it is used.** Wikipedia, where a superscript marker next to a sentence opens its source without moving you off the page, and where missing evidence is stated in place as `[citation needed]` (`bench-wikipedia-citations.png`). Yahoo Finance, where the quote reads "313.33 +0.92 (+0.29%) At close: August 7 at 4:00:01 PM EDT" and after hours gets its own value with its own timestamp (`bench-yahoo-finance-quote.png`). FlightAware, which prints "Landed 13 minutes ago" and puts scheduled against actual side by side (`bench-flightaware-live.png`). Inside our own category the nearest thing is the PowerMetrics metric banner, which carries the connected service, the days of stored history and the last refresh time (`support.powermetrics.app`, article 37726220561559).

**When it fits.** When the unit of consumption is a single object rather than a collection, when the reader is not a specialist, and when the check has to happen inside the act of reading rather than after it.

**When it breaks.** When there are many objects and the reader needs comparison rather than judgement: fifty annotated cards is not an overview, it is fifty cards. It also breaks when the annotation grows past a line or two, which is the failure Yahoo Finance shows in a different form, its warning strip sitting above the quote rather than on it, so a reader who starts at the number never meets it (`benchmark.md`).

### Pattern 2. Catalog and search

**How it works.** Everything is an asset in a searchable directory. The reader forms a query, lands on an asset page, and reads tabs of metadata: definition, owner, freshness, usage, quality.

**Where it is used.** Secoda ("Find data in seconds", plus lineage, governance, quality scoring, documentation), Select Star, Atlan's metrics layer, and the dbt Catalog, which shows health signals in search results, on resource detail pages and in a sidebar Health column (`competitors.md`, HARD group).

**When it fits.** When the user has an inventory problem: many assets, unclear ownership, discovery as the main job. It is the correct pattern for the analyst's own side of our product, and we will use it there.

**When it breaks.** When the user does not know the name of what they are looking for, does not know that this directory exists, and has no reason to open it. Against B2 it fails at the first step: a catalog is a destination, and a destination collects only readers who already suspect. There is also a documented permission problem for our second side, since Secoda restricts the graph to what a viewer may access (`docs.secoda.co/features/data-lineage`), so the unpaid reader gets the emptiest version of the directory.

### Pattern 3. Lineage graph

**How it works.** The dependency structure is the interface. Nodes and edges, upstream and downstream, click to refocus, expand to column level. Trust is inferred by the reader from the shape of what feeds what.

**Where it is used.** Select Star, with four modes, Upstream, Downstream, Downstream Dashboards and Explore for column level (`docs.selectstar.com/features/lineage`). Secoda, with per-node Impact Analysis and export (`docs.secoda.co/features/data-lineage`). Databricks Unity Catalog, selling "End-to-end automated column-level lineage". dbt, where right-clicking a node refocuses the graph three ways.

**When it fits.** For impact analysis by somebody who owns the pipeline: what breaks if I change this, where did this column come from. It is genuinely the best tool for that job and we are not competing with it.

**When it breaks.** As an opening state for a non-specialist. It demands a mental model of the stack to read at all, it degrades as it grows, and its own vendors document the degradation: Select Star states plainly that "Not all columns are shown in the lineage graph", only those that have lineage, and documents no depth control or size limit (`[?]`). At 360 px it is not a serious proposition. `CLAUDE.md` design principle 4 forbids it as an opening state in so many words.

### Pattern 4. A dedicated doubt surface: incident feed or status board

**How it works.** Trust becomes its own object with its own lifecycle, held somewhere other than the number. In the feed form it is chronological and has a workflow: status, severity, assignee, resolution. In the board form it is a current-state grid: every component in a row with a named state and a summary line at the top.

**Where it is used.** Feed: Sifflet, where an incident carries Status, Severity, Assignee, a timeline of first and last failure, and an AI-written Root Cause Analysis (`docs.siffletdata.com/docs/incidents`), and Monte Carlo, now positioned on agent trust. Board: GitHub Status, the highest scorer in our benchmark at 36, with five named component states, four named incident stages each stamped in UTC, and per-component uptime over 90 days (`bench-github-status.png`).

**When it fits.** When somebody is on duty. The feed is right when there is an owner whose job is to respond, and the board is right when the user's job is to survey a portfolio in one glance and they will visit on purpose, repeatedly.

**When it breaks.** For a reader who is not on the channel, an incident that exists is indistinguishable from an incident that does not: the number in their deck looks the same either way. The board form breaks differently and more subtly, by inviting an aggregate. GitHub can publish "99.42% over the past 90 days" because a service is either callable or not; the same shape over a metric reads as "this number is 99.4% correct", a claim nobody can defend, and it lets the reader skip the only question that matters at the moment of reading (`benchmark.md`, "one mechanism that will not work for us"). There is also a structural mismatch we already recorded: our doubt has no assignee and nothing to close, so the incident's whole apparatus is machinery we would carry without using (`competitors.md`).

### Pattern 5. Conversational answer

**How it works.** The reader asks in natural language whether the number is right, and a system answers. Provenance is something the answer mentions, if it mentions it.

**Where it is used.** Everywhere in this market in 2026. Secoda sells "a 24/7 AI data analyst", Looker sells Conversational Analytics Agents on a semantic model that eliminates "agent hallucinations", Cube sells "AI answers your team and your customers can trust", Omni turns data into "a source of truth for AI", Hex frames trust as grounding in a context engine (`competitors.md`). Ten of ten products opened lead with AI.

**When it fits.** When the question space is open and unpredictable, and when the asker can evaluate the answer they get. Exploratory analysis by a competent analyst is the honest home of this pattern.

**When it breaks.** When the question is precisely "can I trust this". The answer arrives as prose with no age, no source and no name on it, so the reader is now trusting a second thing in order to check the first, and the original problem has moved up one level rather than being solved. It is also the most crowded position in the category, which means it is the one place where being right buys the least differentiation.

---

## Part 3. The choice

> ### Chosen: Pattern 1, evidence on the claim.
>
> The trust information lives on the object being read, travels with it, states one line immediately and opens depth only on request. Stage 03a step 2 checks the screen structure against this line.

**Reason 1. It is the only locus that survives B1, and B1 is the entry point.** The user outcome it serves is verbatim from the canvas: "When I am about to paste a number into a deck, I want to know in a few seconds whether it still holds, so I am not caught out in front of leadership" (`lean-ux-canvas.md`, block 4). Patterns 2, 3 and 4 all require the reader to leave what they are doing and arrive somewhere with a question already formed. B2 says they will not, and no amount of craft inside those patterns fixes a locus problem.

**Reason 2. It is the open gap, confirmed from two independent directions.** From the competitor side: every product in the set makes provenance a destination, and no product treats the reading surface as its own product (`competitors.md`, pattern 2 and gaps). From the benchmark side, run against five products in unrelated categories: not one scores above 3 on attribution on the claim, while several score 5 on freshness (`benchmark.md`, "the pattern across all five"). Two different corpora, the same hole. That is the most defensible thing available for us to own.

**Reason 3. It is the only one of the five that is still legible at 360 px and in five minutes, and it is what the rest of the plan already assumes.** The pair of design principles that makes mobile-first survivable is exactly this pattern's mechanics: state shown at the value, depth on request, so the state does not eat the screen (`CLAUDE.md`, principles 1 and 4). Four of the five product decisions in `aarrr.md` land on this same object, the card: readable without an account, one permanent URL, no upgrade wall on the reading path, and the public demo is the same component. The pattern is not an aesthetic preference at this point, it is the load-bearing element the funnel was built on.

### The alternative, and the condition under which it wins

**The status board form of pattern 4.** Named states in a grid, one summary line above them, no search and no navigation, GitHub Status as the reference implementation and the highest score in our benchmark.

**It wins if the reader's real need turns out to be portfolio-shaped rather than single-number shaped.** Concretely: if research at stage 02 or the first test shows that readers arrive with a recurring set (the same twelve numbers every Monday for a business review) rather than with one number under time pressure, then annotating twelve cards is worse than one board, and pattern 1 becomes the detail view underneath it rather than the product.

The signal to watch for, so this is a decision and not a mood: readers opening three or more distinct cards in one session, repeatedly, on a schedule. One or two cards ad hoc means the key task was stated correctly.

**A different fork, recorded here so it is not confused with the one above.** If the riskiest assumption fails outright and readers never arrive at all (`lean-ux-canvas.md`, block 7), the fallback is not the status board, it is pattern 2, catalog and search, with the analyst as the only user. That is a strategic downgrade, not a pattern swap: it puts us on Secoda's and Atlan's ground, competing on the definition, which is the fight the positioning exists to avoid. It should be accepted only after the kill condition in block 8 has actually fired.

### The pattern that does not fit: Pattern 5, conversational answer

Not because it is bad, and not because it is hard. Because it is structurally wrong for this exact task, in four ways:

1. **It moves the problem instead of solving it.** The reader asked whether they can trust a number and receives prose they have no way to check. The trust question is now about the answering system, one level up and harder to inspect than the number was.
2. **It cannot obey design principle 1.** "A number is never shown bare, freshness and source state sit beside the value where it is read" (`CLAUDE.md`). A chat reply is bare by construction: the value arrives inside a sentence, and any attempt to attach state to it rebuilds the card inside the chat bubble, at which point the chat is packaging, not the pattern.
3. **It is the most crowded spot in the category.** Ten of ten competitors lead with it, several of them with far more model budget than we will have. Standing there means being compared on answer quality, a dimension where we would be last, instead of on trust at the point of reading, where the field is empty.
4. **It fights our own architecture.** Plumb stores metadata and pulls values at read time; it never holds customer rows (`CLAUDE.md`). A conversational surface invites arbitrary questions about data we deliberately do not have.

**One distinction that must not be lost.** Rejecting the agent as *our interface* says nothing about the agent as a *reader of our surface*. That is open question 3 in `competitors.md`, it is still open, and it is a question about machine-readable provenance, not about a chat box.

### Why the other three were rejected, in one line each

| Pattern | Rejected because | Kept for |
| --- | --- | --- |
| 2. Catalog and search | A destination, and B2 says the reader does not travel. For the unpaid reader it is also the emptiest version of itself, because permissions cut the directory down (Secoda) | The analyst's own side: the registry list, search and jump to a metric by name are in MVP scope. Correct pattern, wrong audience for the key task |
| 3. Lineage graph | Requires a mental model of the stack, degrades as it grows, and is not a proposition at 360 px. Forbidden as an opening state by design principle 4 | Depth on request. It is what opens behind the one-line provenance, for the person who wants it |
| 4. Dedicated doubt surface | The reader is not on the channel, so an incident that exists and one that does not look identical from the deck. Our doubt has no assignee and nothing to close | Its vocabulary, which is the best thing in the benchmark: named states with distinct treatments, imported onto the card rather than into a separate surface (`benchmark.md`, mechanism 1) |

None of the four is discarded whole. Three of them survive as material inside the chosen one, which is the argument that the choice is a locus decision rather than a taste decision.
