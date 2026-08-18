# 2.7 Where this number came from

**Page:** Where this number came from · **Type:** section · **Node:** 2.7 · **Scope:** MVP · **Group:** pages

**The depth half of design principle 4.** One line of provenance is visible immediately on the card; the rest opens on one action. This node is the rest, and its whole discipline is knowing where to stop.

---

## URL and breadcrumbs

- **No URL of its own, and one addressable anchor.** It is a section of node 2.1, opened in place at `#source` on the card's own address, so a person who opens the depth and then sends the link sends the card rather than a second page
- **Breadcrumbs:** none
- **Indexation:** inherits `noindex` from 2.1

## Purpose and jobs

**Purpose.** Let a reader who has decided to look closer see what produced this number, in words, without entering a tool.

**Jobs served.** The **main job**, at depth. Phase T3 of `cjm-to-be.md`. It closes nothing on its own: a reader who never opens it has still had the main job answered on arrival, which is what zero taps means.

**One hop, and the definition of a hop is the whole node.** A hop is **from the number to the thing that produced it**. It is not from the number to everything that produced that thing. Where the boundary sits is decided below rather than left to whoever draws the wireframe.

## Where this sits and how it is reached

- **Not a page.** A section of node 2.1, opened from block 6 of the card
- **Addressable:** `/m/<stable-id>#source`, or with the sent-link parameters preserved. **The back button works and the state can be linked to directly**
- **Not a modal.** Design principle 4 forbids a modal as the only route to the source, and the reason is practical rather than stylistic: a modal has no URL, so it cannot be sent, cannot be returned to and disappears on a refresh
- **On a phone it expands in place, below the card.** On a wide canvas it may open beside the card. That is the only difference width buys, and it is already stated at node 2.1

**One H2 appears when this opens, and node 2.1 has been amended to say so.** The card in its default state carries one H1 and no H2. This section genuinely is a section, so it takes one. Two documents disagreeing about heading structure is exactly the kind of hole this stage repairs upwards rather than patching later.

## Content blocks, mobile-first priority

| # | Block | Content | Note |
| --- | --- | --- | --- |
| 1 | **The trigger line**, always visible on the card | Source system and last run, one line | This is block 6 of node 2.1, and it is the part that satisfies "explanation in place" |
| 2 | **Heading**, one H2 | "Where this number came from" | Appears only when open |
| 3 | **Label and value rows** | Six rows, listed below | Form taken from R2 in the block bank, which collapses to one column at 360 |
| 4 | **Close**, returning to the card | | The URL returns with it |

**Composition source.** T1 in `ia/docs/blocks.md`, the R2 row: grouped sections with two-column label and value rows, taken for exactly this node. Nothing here is outside the bank.

### The six rows, and why each one earns its place

| Row | Example | Why it is here |
| --- | --- | --- |
| **Source** | Snowflake, `ANALYTICS.PROD` | Which system answered. A reader who cannot name the system cannot ask a specific question |
| **Table or view** | `FACT_SESSIONS` | The most specific thing a reader can quote back to an analyst. **See the permission note below** |
| **Last successful run** | 14:05 today | The freshness of the data, as distinct from the freshness of our reading of it |
| **Expected cadence** | Hourly | Configured on the connection at node 3.2, not discovered. Without it, "as of 14:05" has nothing to be measured against |
| **The definition this ran against** | The text, its version, who declared it and when | **The row that makes the state at 2.5 meaningful.** The card shows the current definition; this row shows the one this reading used |
| **Queried at** | When you opened this page | **We hold no copy.** This row is the one place the product's central constraint becomes visible to the reader, and it is a claim we can actually make |

**"Queried at" is not a technical detail.** Every competitor in this research either caches, imports or refreshes on a schedule. This row says the number in front of you was asked for a moment ago, and it is the difference between reading a number and reading a record of a number.

## What this node deliberately does not show

Each refusal has a source, because each one is something a competitor does.

| Not shown | Who does it | Why not |
| --- | --- | --- |
| **Upstream models and their upstream models** | Select Star has four lineage modes; Secoda has a graph with impact analysis | **This is the second hop and beyond.** A reader about to be quoted needs to know whether this number is defensible, not to audit a pipeline. Beyond one hop the audience is the analyst, and the analyst has the warehouse |
| **A dependency graph** | All three catalogs | "Lineage graph" is one of the four UX patterns **rejected with grounds at stage 01**. Design principle 4 names it directly: a dependency tree as the opening state is forbidden. And the full lineage tree was **cut as an orphan at CJM**, having a priority label and no parent |
| **Column-level lineage** | dbt, behind an Enterprise tier | Its price tells you what it costs to build and who it is for. Not our reader |
| **The SQL** | Cube, and every semantic layer | The definition in words is the object here. SQL beside it invites the reader to check the wrong artefact, and most of them cannot read it |
| **A history of past values** | PowerMetrics stores days of history | We store no copies. Without a copy we cannot show what a value was a month ago, which `CLAUDE.md` already records as the honest cost of metadata only |

**The pattern in that table is worth naming.** Everything refused here is something a data catalog does well, for a data person, in a place they went to on purpose. We are not building a smaller catalog. We are answering one question in the place the number is being read.

## Components and variants

| Component | Variant | Note |
| --- | --- | --- |
| Label and value rows | Two columns at width, one column at 360 | Not defined anywhere else yet; **this node defines it**, and node 3.1 will reuse it for a source's detail |
| Button | Secondary, one: close | |

## States

| State | What is shown |
| --- | --- |
| **Open, ordinary** | All six rows |
| **Open while the source is down** (from 2.4) | **All six rows still, and this is the state where they matter most.** The value is missing; the definition, the owner, the last successful run and what it ran against are all still true |
| **Open on a bare URL** (no sent-link parameters) | **Six rows, the same six.** "The definition this ran against" is the current one and says so, because there is no earlier reading to compare with. **Corrected at stage 04 step 6:** this row said five rows and then described six, dropping none, and no row can be defended as absent on a bare address. The count was the error, not the description |
| **Open with restricted visibility** | The table or view row is withheld with a stated reason, not silently dropped. Everything else stays |
| Loading | Not a state. The six rows are metadata we already hold, so they render with the card. **Only the value is ever queried at read time** |

**The permission note, and it is the same open question as node 2.10.** Secoda restricts what a viewer sees inside lineage by their access, and that is recorded in `competitors.md` as a live constraint. **Our default is to show the table or view name**, because a reader who cannot name it cannot ask a specific question, and asking a specific person a specific question is job R1 in full. A workspace that restricts it gets the fourth state above. **Whether that default survives contact with a real data lead is open research**, exactly as at 2.10.

## Filters and facets

None.

## Primary call to action

None. The action here is closing and going back to the number, which is where the reader was going anyway.

## Emotional support

**Nothing from the emotional and social table lands on this node.** All four mechanisms sit on the card, the send action, the definition editor and the registry. Recorded so the check is visible.

## Responsive

**360:** the trigger line is one line and must stay one line; the six rows stack to a single column with the label above the value. **The section opens below the card and does not push the value off screen**, which means the card scrolls up rather than the section overlaying it.

**Wide:** rows become two columns, and the section may sit beside the card so the number stays visible while its provenance is read. **That is the argument for the side placement:** on a wide canvas the reader can hold both at once, which is the closest this product gets to the thing a dashboard does well.

---

## SEO block

**Part of node 2.1 and therefore `noindex`.** No canonical, no structured data, no SEO text.

**One thing this node does owe the URL layer:** the open state is addressable, so it must be a real URL change rather than a script-only state. A crawler will not index it, but **a person will paste it**, and a link to a provenance view that opens the card closed is a broken promise made by our own product.
