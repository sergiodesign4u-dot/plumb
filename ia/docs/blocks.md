# Block bank by page type

Stage 03b, step 4. **This file exists to stop the composition of a page being invented.** Every other artefact in this pipeline has a rule of origin: a research fact carries a cited source, a CJM emotion carries mining evidence or a `[?]`, a To-Be feature traces to a barrier. The list of blocks on a page had none, and a model asked for a page composition with no source returns the median of everything it has seen: hero, filter, cards, pagination. That median is the "simple" wireframe, and it only becomes visible at stage 04, when the structure has already been rolled out.

**Read by:** step 5 (the reference page), step 6 (every page node), and stage 04, which renders these blocks rather than inventing them.

---

## The two sources, and where one of them is missing

| Source | The question it answers | How it is collected |
| --- | --- | --- |
| **Competitors** (`research/docs/competitors.md`) | What actually holds a person **inside our category** | Playwright on public and pre-login pages |
| **Refero** (MCP) | How a page **of this type** is built in best-in-class work **outside our category** | `refero_search_screens`, then `refero_get_screen` |

**Refero was checked before any collection and works.** It also confirms what stage 01 recorded: this competitor set is not indexed there, so every Refero search here is by page type and job, never by industry. That is not a workaround, it is the point of the second source.

**The domain half is unobtainable for three types, and they carry the MVP.** None of the fifteen competitors shows the product surface without an account, and we do not log in. For **T1 (the card), T2 (listings) and T3 (forms)**, which hold 21 of the 30 MVP nodes, there is no competitor page of that type to open.

**The named substitute, so nothing is silently taken from the model's head:** public documentation of the real product, which carries interface descriptions and embedded screenshots without an account, plus barriers from `cjm-as-is.md` and jobs from `jtbd.md`. Every documentation source below was **opened in this session** and is dated. This is second-hand next to using the product, and it is marked as such wherever the documentation describes rather than shows.

**One column changes meaning for those three types.** "Where we are better" cannot be a comparison when there is nobody to compare against on the same surface. For T1, T2 and T3 it holds **the barrier the block works on** instead. For T4, T6 and T8 the competitor page is public and the column is a real comparison.

## The four rules this bank is filled by

1. **No block without tracing.** A block in the TAKE column points to a job in `jtbd.md`, a barrier in `cjm-as-is.md`, or an SEO requirement. Nothing to trace to means DO NOT TAKE, with the reason written.
2. **The "where we are better" column is filled, not skipped.** Empty on every row would mean we collected somebody else's median, and that would be said out loud.
3. **A reference is an input, not an output.** No screen is carried over whole. A composition that matches one source one for one is a copy, not agreement.
4. **A scope label on every block.** A block can be right and still not be in the MVP.

---

## Type estimate, agreed at the gate

Nodes are grouped by page type, not one by one. States and dialogs inherit the type of their parent, which is what keeps 41 nodes at eight types instead of forty.

| Type | Nodes | Total | MVP | In this round |
| --- | --- | --- | --- | --- |
| **T1. Object detail, the read surface** | 2.1 to 2.10 | 10 | 10 | Yes |
| **T2. Listing with search** | 3.1, 4.1, 4.2, 4.3 | 4 | 4 | Yes |
| **T3. Form and editor** | 3.2 to 3.4, 4.4 to 4.7 | 7 | 7 | Yes |
| **T4. Gate (SSO)** | 1.1 to 1.3 | 3 | 3 | Yes |
| **T8. System page** | 7.1 to 7.4 | 4 | 2 | Yes |
| **T6. Public landing** | 6.1, 6.2, 6.3 | 3 | 0 | **Yes, for 6.1 only** |
| T5. Account settings | 5.1, 5.2 | 2 | 0 | Deferred |
| T7. Content, legal, support | 6.4 to 6.7 | 4 | 0 | Deferred |
| T0. Global frame | 0.1 to 0.4 | 4 | 4 | Done at steps 2 and 3 |
| | | **41** | **30** | |

**Why an all-ПОТІМ type is in the round anyway.** In the MVP subset there is **not one indexed page**: the card is public but noindex by the decision at node 0.2, and the registry, sources, sign-in and system pages are all noindex. The SEO layer belongs to this stage, and with T6 left out it would have no subject at all. **6.1 is taken in as the SEO reference**, and it shares the canonical card component with T1, so the two are cheaper together than apart.

**Deferred, collected here so they are not lost:** T5 (2 nodes) and T7 (4 nodes). Both are entirely ПОТІМ and neither blocks anything in the MVP round.

---

## T1. Object detail, the read surface

**Nodes:** 2.1 the card, 2.2 to 2.6 and 2.9 to 2.10 its states, 2.7 the source layer, 2.8 send. Ten nodes, all MVP. This is the type the product has to win on and the only one the primary persona ever sees.

### Sources

| # | Source | Kind | Opened |
| --- | --- | --- | --- |
| D1 | PowerMetrics metric overview, `support.powermetrics.app/hc/en-us/articles/37726220561559`. Screen: `research/screens/ui-powermetrics-metric-overview.png` | Domain, documentation substitute | 2026-08-12, this session |
| D2 | dbt Catalog data health signals, `docs.getdbt.com/docs/explore/data-health-signals`. Screen: `research/screens/ui-dbt-data-health-signals.png` | Domain, documentation substitute | 2026-08-12, this session |
| R1 | Zendesk Status, `refero.design/pages/7957c520-682f-4b22-ba1d-d86b77ed661c` | Craft, outside the category | 2026-08-12 |
| R2 | Enode asset detail, `refero.design/pages/c0dab7d7-c912-49c0-afa0-afa018efb5b9` | Craft, outside the category | 2026-08-12 |
| R3 | Resend metrics, `refero.design/pages/9d0debce-382e-442d-91a2-31a623730246` | Craft, **counter-reference** | 2026-08-12 |

**A note on R3.** It is in the bank as a negative, and stage 01 already flagged it. Its freshness marker is a page footer line, quoted from Refero's own record: *"Data is updated every 15 minutes. Last updated 10:35 PM."* And the metric's explanation sits behind an info icon that opens a tooltip. Those are design principles 1 and 3 broken in one screen, in a well-made product, which is what makes it worth keeping.

**A note on what the craft sweep did not find.** `refero_get_similar_screens` on R2 returned settings pages and member tables, not detail surfaces. There is no better structural match in the index than the three above, and no fourth craft source is claimed.

### Blocks

| Source | Block | Decision | Traces to | Scope | Barrier it works on |
| --- | --- | --- | --- | --- | --- |
| D1 | **Banner: object name plus the connected service** | TAKE, reduced | Main job. The reader has to know what they are looking at | MVP | Phase B: the number arrives with no route back to its source (S5) |
| D1 | **Days of stored history plus the time data was last refreshed, beside the name** | TAKE, and it becomes the state line | Main job, design principle 1 | MVP | Phase B. **D1 states the limit itself:** *"Refresh information doesn't display for data warehouse, semantic layer, or dbt Semantic Layer metrics."* The freshness marker is absent for exactly the source type we are built on |
| D1 | **Blue check mark for a certified metric** | DO NOT TAKE | Nothing. A badge is a verdict with no author and no date | MVP | Design principle 5 forbids it: every claim carries a name and a time. We show who declared the definition and when, which is the same information with an owner attached |
| D1 | **Error overlay on the service icon when there are issues** | DO DIFFERENTLY | Main job, node 2.4 | MVP | An overlay on an icon is not readable at 360 and carries no reason. Ours is the named state in words from node 0.4 |
| D1 | **Date range, filter and aggregation controls, second block on the page** | DO NOT TAKE | Nothing for the reader. It is an analyst's exploration surface | ПОТІМ if ever | Design principle 3. Controls in the second block make the page a small dashboard, and the reader is not exploring, they are about to be quoted |
| D1 | **Metric views: four micro views, one main view, two half views** | DO NOT TAKE | Nothing | ПОТІМ | Seven visualisations and no definition is the shape principle 3 forbids. One chart at most, and it illustrates the definition |
| D1 | **"About" as a tab that hides and shows, holding the metric's details** | **DO DIFFERENTLY, and this is the decisive row** | Main job, R1, design principle 3 | MVP | The definition is the main object of the screen, so it cannot be a tab. In D1 it is toggled and the page opens on charts. **This is the single biggest structural difference between their metric page and our card** |
| D1 | **Share, granting view or edit access** | TAKE, reduced to one action | R2 answer once, node 2.8 | MVP | Phase G: a figure travels on and cannot be found again (S9). D1 also records that *"Recipients will see the original, default version"*, so personalisation does not travel. Ours carries the moment of reading in the link instead |
| D1 | **Duplicate, Star, Add to dashboard, Tags, Goals, Reset all views, Delete** | DO NOT TAKE | Nothing for the reader. Seven of the eleven menu items serve an author | ПОТІМ | The reader has no account and no menu. A card with an eleven-item overflow menu is an analyst's page wearing a reader's clothes |
| D2 | **One health signal per resource, in a Health column on the detail page** | DO NOT TAKE | Nothing. It is the aggregate node 0.4 already refused | MVP | **D2 gives the mechanics that prove the refusal.** Caution fires if any one of these is true: not built in 30 days, tests not configured, tests warn, an upstream source is stale, **or the description is missing**. A stale source and a missing sentence of prose produce the same yellow, and the reader cannot tell which they are looking at |
| D2 | **Detail available by hovering or clicking the signal** | DO DIFFERENTLY | Design principles 1 and 4 | MVP | A state that needs an interaction to be read does not exist on a phone. Ours is in words, on arrival, and only the depth opens on action |
| D2 | **"Missing a description" counted as a health problem** | TAKE, as evidence rather than a block | Main job, R5 | MVP | Independent confirmation that the definition belongs to trust rather than to documentation. Their model penalises its absence and still keeps it off the front of the page |
| D2 | **Data health tiles, embeddable by iFrame into a BI dashboard** | **DO NOT TAKE, and record why it matters** | Would trace to the main job | ПОТІМ | This is the one competitor motion **towards the place of reading**, which is our whole strategic dimension. What travels is the aggregate signal, not the definition, the attribution or a route to a person. Named here so nobody discovers it at stage 07 |
| R1 | **Full-width summary box stating the condition in a sentence, with the last-update time aligned right** | TAKE | Main job, design principle 1, node 2.3 | MVP | The plain-language summary before any detail is exactly the shape our state line needs |
| R1 | **Per-row status text plus a coloured dot** | TAKE the text, REFUSE the dot as the carrier | Design principle 2, node 0.4 | MVP | Colour is redundant reinforcement, never the encoding. R1 gets this right: *"No active incidents"* is written out beside the dot |
| R1 | **Ninety-day incident timeline with "90 days ago" and "Today" labels** | DO NOT TAKE | Nothing in MVP | ПОТІМ | We store no copy of values, so we have no ninety days to draw. Version history deeper than the previous definition is out of scope, and this block would quietly reintroduce it |
| R1 | **Recently resolved incidents, at the bottom** | DO NOT TAKE | Nothing | Out | A resolved-incident list is the incident workflow design principle 2 forbids. Our state ends when the fact ends, with nothing to close |
| R1 | **Subscribe to updates** | DO NOT TAKE | Nothing | Out | Notification routing is out of MVP scope by the brief, and a subscription needs a reader we store, which the reader deliberately is not |
| R2 | **Object name as the page title, above everything** | TAKE | Main job | MVP | Confirms the same first block as D1 from a different category |
| R2 | **Grouped sections with two-column label and value rows** | TAKE for the provenance layer, node 2.7 | Main job, design principle 4 | MVP | Phase B (S5). A label and value grid is the cheapest readable form for source, last run and what it ran against, and it collapses to one column at 360 |
| R2 | **Last seen timestamp with a clock icon, inside the information section** | DO DIFFERENTLY | Design principle 1 | MVP | R2 has the right field in the wrong place: mid-page, in a metadata grid. Ours sits beside the value, because the freshness of a number is not metadata about it |
| R2 | **Toggles and per-row Edit links** | DO NOT TAKE | Nothing on the reader's surface | MVP for the editor (T3), not here | The reader changes nothing. Editing lives in cluster 4 |
| R3 | **Small uppercase label plus an info icon opening a tooltip with the metric's definition** | **DO NOT TAKE** | Would trace to the main job, and fails | MVP | Design principle 3 explicitly. A definition behind a tooltip does not exist on touch, and the screen then opens on a chart |
| R3 | **Large primary value at the top left of the card** | TAKE | Main job | MVP | The one block R3 places correctly, and it is where our value goes too |
| R3 | **Chart with a threshold guideline** | DO NOT TAKE in MVP | Would trace to nothing yet | ПОТІМ | A chart is allowed only as an illustration under the definition. A threshold line is a judgement about the number, which is a claim needing an owner |
| R3 | **Page footer metadata line: update cadence plus last updated** | **DO NOT TAKE** | Design principle 1 forbids it by name | MVP | *"Forbids: a large figure with no timestamp, freshness pushed into a footer or a tooltip."* This is the literal instance. The cadence itself we keep, moved up beside the value |

### Our composition, and it matches no single source

Order reasoned from 360, top to bottom.

1. **Metric name**, H1
2. **The value**, or the named absence of one
3. **The state line**: as of, relative age, expected cadence, or the named trouble in words (vocabulary from node 0.4)
4. **The definition in words**, visible, never collapsed
5. **Attribution**: who declared this definition and when
6. **Where this number came from**: one line present, the label and value grid opens on one action (node 2.7)
7. **Send this number** (node 2.8)
8. **Footer** (node 0.2)

**Checked against rule 3, that a reference is an input.** D1 puts controls second and the definition in a hidden tab; R1 has states and no definition; R2 has provenance rows and no primary value; R3 puts freshness last. **Nothing above appears in this order in any source.** Block 3 before block 4 is ours, and it follows from design principle 1 rather than from anybody's page.

**Two things every source in this bank has in common, and they are the gap.** Not one of the five puts a definition in words on the reading surface, and not one puts a person's name on the claim. That is the same gap `competitors.md` reached from the other direction, now confirmed at the level of page composition.
