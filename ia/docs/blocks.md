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
| **T6. Public landing** | 6.1, 6.2, 6.3 | 3 | 0 | **Yes, for 6.1 only.** 6.2 and 6.3 collected in the ПОТІМ round |
| T5. Account settings | 5.1, 5.2 | 2 | 0 | Deferred, **collected in the ПОТІМ round** |
| T7. Content, legal, support | 6.4 to 6.7 | 4 | 0 | Deferred, **collected in the ПОТІМ round** |
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

### Addendum, found while collecting T2 and belonging here

**dbt puts a share control on the resource details page itself:** *"In the upper right corner of the resource details page, you can [...] Click the Share icon to copy the page's link to your clipboard"* (`docs.getdbt.com/docs/explore/explore-projects`, opened 2026-08-12). **TAKE, as confirmation rather than as a new block.** Copying a permanent link from the object being read is the right primitive for node 2.8, and it is now evidenced in the category rather than only reasoned from the backlog. The difference stays where it was: their link carries a page, ours carries the moment the number was read.

---

## T2. Listing with search

**Nodes:** 4.1 the metric registry, 4.2 empty with no metrics yet, 4.3 the search-result state, and 3.1 sources. Four nodes, all MVP, **all of them the analyst's**. The reader never sees a listing, by the rule in `CLAUDE.md`: a list with search is the rejected "catalog and search" pattern, and the moment it becomes the reader's entry point the chosen pattern has been changed without saying so.

### Sources

| # | Source | Kind | Opened |
| --- | --- | --- | --- |
| D3 | dbt Catalog, `docs.getdbt.com/docs/explore/explore-projects`. Screen: `research/screens/ui-dbt-catalog-docs.png` | Domain, documentation substitute | 2026-08-12, this session |
| D4 | Secoda search, `docs.secoda.co/features/search`. Screen: `research/screens/ui-secoda-search-docs.png` | Domain, documentation substitute | 2026-08-12, this session |
| R4 | TravelPerk invoices, `refero.design/pages/53698c28-13ea-4d0b-aa52-e0d558c40d3c` | Craft, outside the category | 2026-08-12 |
| R5 | n8n users, `refero.design/pages/add935ed-8659-4352-9056-04aeba163b33` | Craft, outside the category | 2026-08-12 |
| R6 | Exactly.ai, no results, `refero.design/pages/40c167a2-1c0a-4337-94fd-bac77dc3c341` | Craft, for node 4.3 | 2026-08-12 |

### Blocks

| Source | Block | Decision | Traces to | Scope | Barrier it works on |
| --- | --- | --- | --- | --- | --- |
| D3 | **Search across resource names, column names, descriptions, warehouse relations and code** | TAKE, narrowed to name and definition text | R2 answer once, R5 | MVP | Phase D: the same question is known to reach the analyst repeatedly (S8). Search that reaches **into the definition text** is how a standing answer gets found instead of retyped. Column names and code are not ours to search, we hold metadata only |
| D3 | **Sidebar with Resources, File Tree and Database tabs** | DO NOT TAKE | Nothing | Out | Three browse structures imply a taxonomy. We have one object type and a flat list, and the global nav has two items by decision. Inventing tabs here would be inventing a taxonomy to fill them |
| D3 | **Health signal to the right of the resource name, under a Health column** | DO DIFFERENTLY | Main job, node 0.4 | MVP | **The position is right and the payload is wrong.** We keep a state at the right of the row and replace the aggregate with the compact form from node 0.4: the state name and the age, in words |
| D3 | **Soft access controls: all matching resources shown, with clear indicators for items you have no access to** | **TAKE, and it settles an open question** | R1, node 2.9 | MVP | Phase B: the number arrives with no route back (S5). Showing that a thing exists and is not yours to see beats hiding it, because a person who cannot see the row cannot even ask about it. This is a live precedent for the open question of what may be shown to somebody with no access |
| D3 | **Notice in a search result that a resource contains the searched column** | DO NOT TAKE | Nothing | Out | We expose no columns. Metadata only |
| D3 | **"Latest updates": recent job runs, changed properties, lineage and issues** | DO NOT TAKE | Would trace to R3, and fails on form | ПОТІМ at best | Design principle 2. A change is a fact about the metric and belongs on the metric. **As a feed it becomes an activity stream, and an activity stream of state changes is the incident tool by another name** |
| D3 | **Model versions in the list and in the title: prerelease, latest, old** | DO NOT TAKE | Nothing in MVP | ПОТІМ | Version history deeper than the previous definition is out of scope by the brief. A version label in the list would promise a history we do not keep |
| D4 | **Search opens on popular resources plus personal recent searches** | DO DIFFERENTLY | R2, R5 | MVP | Our pre-query state is the list itself. A registry small enough to read is better than a ranked selection of it, and the analyst arriving at the registry usually knows the name they want |
| D4 | **Popularity ranking: views over the last 90 days, boosted further by views in Tableau and Looker** | **DO NOT TAKE, and this is the sharpest refusal in T2** | Would trace to nothing | Out | Phase G (S9): a figure keeps being used long after it stopped being computed. **Popularity is a proxy for authority, and this product exists because proxies for authority break.** Ranking by how often a metric is looked at makes the most-quoted metric the easiest to find and the least examined, which is the failure we are selling against |
| D4 | **Sort by relevance, popularity, last modified, date created** | TAKE one, refuse two | R2 | MVP for name, ПОТІМ for freshness | Sort by name is the default because the analyst is looking for a specific metric. Sort by freshness is a real second case and waits. Popularity and personal-usage relevance are refused for the reason above |
| D4 | **Ask AI inside the search panel** | DO NOT TAKE | Would trace to the main job, and was already rejected | Out | "Conversational answer" is one of the four patterns rejected with grounds in `ux-patterns.md` at stage 01. Recorded here because a competitor has since put it in the search box, which is where this decision will be questioned again |
| D4 | **Saved views of common searches** | DO NOT TAKE | Nothing | ПОТІМ | No job underneath it at this size of registry |
| D4 | **Search reachable by typing `/` from any screen** | TAKE | R2 | MVP | The base layer already made search a persistent affordance rather than a navigation item. This is the cheapest way to honour that |
| R4 | **Page title plus a one-line subtitle** | TAKE the title, the subtitle ПОТІМ | R5 | MVP | A registry needs to say what it is. A subtitle with a documentation link is for a product that already has documentation |
| R4 | **Search field whose placeholder names what is searched** ("Search for a document ID") | TAKE | R2 | MVP | Phase D (S8). A placeholder that names the field removes the guess about whether searching the definition text works at all |
| R4 | **Three filter dropdowns: status, payment profile, time frame** | DO NOT TAKE in MVP | Nothing yet | ПОТІМ | Facets by source, owner and freshness are already recorded as a ПОТІМ candidate. Adding them now would be inventing filters for a registry whose size we do not know |
| R4 | **Sortable table, six columns, sort arrow on the first** | TAKE, reduced to three columns | Main job, R1, R5 | MVP | Name, state with age, owner. Three fields, because every extra column is one more thing to fit at 360, and the row exists to get somebody to the card |
| R4 | **The empty state rendered inside the table, with the header row still visible** | **TAKE, and it is the best block in this type** | R5, nodes 4.2 and 4.3 | MVP | An empty list that keeps its columns shows what the list would hold. An empty state that replaces the whole table teaches nothing and reads as a broken page |
| R4 | **Result count line under the table** ("1 to 0 of 0 results") | TAKE | R2 | MVP | Cheap honesty, and the zero case is exactly the one that needs saying out loud |
| R5 | **Count beside the title** ("3 users") | TAKE | R5 | MVP | The registry saying how many metrics it holds is the closest thing an analyst has to a sense of whether the work is done |
| R5 | **A temporal column in the row** ("Last Active") | TAKE, as the age of the number | Main job, node 0.4 | MVP | Confirms from outside the category that a time belongs in the row, not only on the detail page |
| R5 | **Row overflow menu with three actions** | DO NOT TAKE in MVP | R5 | ПОТІМ | In MVP a row does one thing: it opens the metric. Row actions arrive when there is more than one thing to do |
| R5 | **A global setting toggled from inside the list page** (enforce 2FA) | DO NOT TAKE | Nothing | Out | A settings control on a listing mixes two jobs on one page. Ours lives in the account corner, which is already marked jobless |
| R5 | **Upgrade notice bar above the table** | DO NOT TAKE in MVP | Nothing | ПОТІМ | Plan and seats are cluster 5 and entirely ПОТІМ |
| R6 | **"No results found", a line of advice, and one Reset all action** | TAKE the structure | R2, node 4.3 | MVP | **The single reset action is what stops 4.3 being a dead end**, and a dead end in the analyst's own registry is the cheapest kind to avoid |
| R6 | **Centred illustration above the message** | DO NOT TAKE at this stage | Nothing structural | ПОТІМ, stage 06 | Illustration is a visual-stage decision. Recorded so it is not silently dropped, and so the block is not drawn as a hole in a black and white wireframe |

### Our composition

**One template serves both listings**, which is the reuse decision this stage is meant to apply rather than rediscover: 4.1 the metric registry and 3.1 sources differ in their three columns and in nothing else.

1. **Title with a count**
2. **Search field**, placeholder naming that it searches names and definition text
3. **The table**: name, state with age, owner. For 3.1: name, reachability, last successful run
4. **Result count line**
5. **The primary action**: define a metric, or connect a source

**4.2, no metrics yet:** the same page with the count at zero, **the table header retained**, one sentence saying nothing is defined yet, and one route to defining the first.

**4.3, no match:** the same page, the query still in the field, one sentence, and one reset action. Never a dead end.

### Corrected at node 4.1, because the order above was listed rather than reasoned

**The primary action moves to third at 360**, and the five items above are the desktop order. At 360 an action below a list of unbounded length is unreachable without scrolling to the end of the customer's registry. Nothing is hidden and nothing is added; this is the ordering rule of the detail layer applied to a list that was written down before it was placed on a phone.

**Two row variants, decided at 4.1 and recorded here rather than added quietly at the node.**

| Variant | Traces to | Why it is a variant and not a new block |
| --- | --- | --- |
| **The row shows the matching fragment of the definition when the match was in the definition text and not in the name** | R2, phase D (S8) | Search reaching into the definition is the mechanism that closes R2, and a match the analyst cannot see makes the result look wrong. D3's "resource contains the searched column" notice is refused because we expose no columns; **our own object is the definition text, and that we do expose** |
| **In the no-match state the primary action carries the query** ("Define *pipeline coverage*") | R5, node 4.3 | The action is already on the page. Searching for a metric that does not exist is the strongest available signal that it should, so the no-match becomes the activation moment rather than an apology |

### Corrected again at node 3.1, where the template was reused for the first time

**The search field does not survive the reuse.** A US B2B company of 50 to 300 people has one to three warehouse connections, so search over 3.1 is dead weight, and a field that returns everything it is given teaches that search in this product is pointless. **This is agreement with node 0.1 rather than a deviation:** search was always a persistent affordance over the registry, and sources were never in its scope.

**The three columns written above for 3.1 collapse into two.** "Reachability" and "last successful run" are the same fact in both directions once node 0.4 is applied: a connection with nothing wrong carries the time it last answered, not a badge, and a connection that is down reads "Source is down since 07:40", which already carries a time. The line above was written by analogy with 4.1 and is corrected here.

| Block added | Traces to | Why it is taken |
| --- | --- | --- |
| **"Metrics on it": how many metrics stop answering if this connection does** | The inbound barrier, phase D. Main job at one remove | The freed third column at 3.1. When a source is down, the difference between answering one person and answering five before they ask is knowing which metrics are affected. **A count, not a score**, so design principle 2 is intact: no aggregate, nothing to interpret. It also carries the removal rule, since a connection with metrics on it cannot be removed |

**Checked against rule 3.** D3 leads with a lineage graph and three browse trees; D4 leads with popularity; R4 leads with three filters; R5 leads with an upgrade bar and a security toggle. **Nothing above matches any of them.** What is ours is the refusal of ranking and the narrowing to three columns, and both come from the product's own argument rather than from a page.

**One competitor mechanism recorded as a live risk rather than a footnote.** Both domain sources rank or surface by popularity, and both count views made outside the tool. If our registry ever needs ordering beyond alphabetical, that is the moment to reread this row, because popularity is the ordering everyone reaches for and it is the one this product cannot use.

---

## T3. Form and editor

**Nodes:** 3.2 connect a source, 3.3 testing the connection, 3.4 connection failed, 4.4 define a metric, 4.5 the definition runs, 4.6 the definition does not run, 4.7 editing a definition with the previous version retained. Seven nodes, all MVP, all the analyst's.

**This is the type where the reader's product is actually made.** Everything the card shows was typed here by somebody else, which is why a form that loses a definition or hides an owner field costs more here than it looks.

### Sources

| # | Source | Kind | Opened |
| --- | --- | --- | --- |
| D5 | PowerMetrics, creating Snowflake metrics, `support.powermetrics.app/hc/en-us/articles/37726229398679`. Screen: `research/screens/ui-powermetrics-connect-snowflake.png` | Domain, documentation substitute. **The closest thing in this bank to our own two forms** | 2026-08-12, this session |
| D6 | Secoda search and Select Star lineage, already in `competitors.md` | Domain, for the constraint that permissions reach into what a viewer sees | Recorded 2026-08-11 |
| R7 | Retool database resource, `refero.design/pages/6407c865-23f5-46d8-964b-42439b934e61` | Craft, outside the category | 2026-08-12 |
| R8 | Fingerprint integration, `refero.design/pages/93ec6279-9290-43b2-b878-356a7193d778` | Craft, for nodes 3.3 and 3.4 | 2026-08-12 |
| R9 | Mercury onboarding, `refero.design/pages/d8607eb8-6ac8-4208-ae94-92ad7aca2ebd` | Craft, for inline validation | 2026-08-12 |

### The single most important finding in this type

**In D5, nobody ever writes what the metric means.** The whole creation flow is: choose a table or view, apply filters, choose a measure column, choose dimensions. Step by step, and there is no field anywhere in it for a sentence in words. The definition in that product is a **configuration**, and the closest thing to prose is the description whose absence dbt separately counts as a health problem.

**That is the gap this product exists in, evidenced at the level of a form rather than argued.** Our 4.4 makes the definition in words the first field and the owner a required one, and the binding to a source comes after both.

### The open question this type closed

Node 0.4 handed forward "what does expected hourly say when no cadence is known". **D5 answers it from the domain side:** freshness is not something a warehouse announces. PowerMetrics gets it either from a webhook the customer calls when their data updates, or from a cache expiry TTL the customer picks, and the documentation says *"Automatically clearing the cache with a webhook is strongly recommended"*. **So cadence is configured, not discovered**, and the expected-cadence field the base layer already put in node 3.2 is now a requirement rather than an assumption. The other half of the question, how old is old, stays open.

### Blocks

| Source | Block | Decision | Traces to | Scope | Barrier it works on |
| --- | --- | --- | --- | --- | --- |
| D5 | **Service picker before the form: a "Where is your data?" page with tiles, a "Search by service" field and tags** | TAKE, reduced to a short list | R5, node 3.2 | MVP | With three warehouse types in the MVP, a search field over three tiles is furniture. The picker stays, the search waits until the list is long enough to need it |
| D5 | **A mode choice: query directly, or import** | DO NOT TAKE | Nothing | Out | We have one mode. **Metadata only means the number is queried at read time**, so a choice here would offer something the product does not do |
| D5 | **Credentials, in order: user name, private key file, passphrase, account identifier, database, schema, warehouse, role, display name** | TAKE, and keep the order | R5, main job as a precondition | MVP | Nine fields is what a warehouse connection costs, and pretending otherwise would produce a form that cannot connect. The display name last is right: it is the only field about us rather than about them |
| D5 | **Prerequisites stated before the form: what to have ready, and the IP addresses to allowlist** | **TAKE** | R5 | MVP | A connection form that fails on a network policy the person has not set is a dead end with no route out, and the route is on their side of the wall. R7 puts the same content in a panel beside the form |
| D5 | **First day of week and time zone must match the warehouse, or weekly figures are wrong** | TAKE as a constraint, not as a field | Main job, R4 | MVP | This is a silent-wrong-number generator, which is the exact failure this product sells against. It belongs in the connection as a stated assumption rather than as a setting somebody has to find |
| D5 | **Webhook URL with a copy button, or a cache expiry TTL** | **DO DIFFERENTLY, and it becomes our cadence field** | Main job, node 0.4, node 2.3 | MVP | We hold no cache, so there is nothing to expire. What we need from the same place is the **expected cadence**, so that "as of 14:05" has something to be measured against |
| D5 | **"Share account connection with editor users" toggle** | DO NOT TAKE in MVP | Nothing yet | ПОТІМ | Sharing a connection is a workspace question, and cluster 5 is entirely ПОТІМ |
| D5 | **A "Connection successful" window** | TAKE, as a state rather than a window | R5, node 3.3 | MVP | The success of a connection is worth saying once, in place. A modal that must be dismissed adds a step to the one flow that already has nine fields |
| D5 | **Metric creation: table or view, then source filters, then measure column, then dimensions** | DO DIFFERENTLY | R5, R3, node 4.4 | MVP | **This is the row the whole type turns on.** Their order is table first and meaning never. Ours is meaning first: the definition in words, the owner, then the binding to a source |
| D5 | **Member filters and condition filters, up to ten conditions per dimension** | DO NOT TAKE | Would trace to nothing | Out | Filters build a query. We are not a query builder, and building one would put us back in the BI category the product is defined against |
| D5 | **Per-dimension checkboxes for "as a filter" and "as a segment", plus Deselect all** | DO NOT TAKE | Nothing | Out | Segmentation is exploration. Design principle 3 |
| D5 | **The stated constraint that measure and dimensions must come from one table or view** | TAKE, as a validated condition | R5, node 4.6 | MVP | A constraint the person cannot see until it fails is a bad error. If ours has an equivalent, it is checked when the definition runs and named in 4.6 |
| D6 | **Permissions reaching into what a viewer may see** (Secoda restricts the lineage graph by access) | TAKE as a limit on what 4.4 can promise | R1, node 2.9 | MVP | Recorded at stage 01 and still binding: whatever the analyst writes here, the reader may be shown less. The definition form should not imply that everything typed into it travels |
| R7 | **Three-part layout: environment list, the form, and an allowlisting panel beside it** | TAKE the pairing of form and side panel | R5 | MVP | The information the person needs from **their** side sits next to the field it unblocks. At 360 the panel stacks above the fields it explains, not below |
| R7 | **"Test connection" as a secondary action beside "Save changes"** | **TAKE, and this is the best block in the type** | R5, nodes 3.3 and 3.4 | MVP | Testing before saving is how a person finds out that credentials are wrong **while they still have the form open**. Save-then-discover is the version that produces a broken source in a list |
| R7 | **Key and value pairs for extra connection options with an "Add new" link** | DO NOT TAKE in MVP | Nothing yet | ПОТІМ | An open-ended options grid is for a product supporting many drivers. Three warehouse types do not need one yet |
| R7 | **Delete, in red, at the bottom left, away from the primary actions** | TAKE | R5 | MVP | Destructive and primary actions at opposite ends is the cheapest safety this form can have |
| R8 | **Validation errors as a full-width banner at the top of the form, not as a toast** | **TAKE** | R5, nodes 3.4 and 4.6 | MVP | Node 0.3 already ruled that what belongs to the thing on screen stays inline. A credential failure that vanishes on a timer leaves somebody looking at nine filled fields and no reason |
| R8 | **An info banner stating a consequence** ("changing these details will require a reconnect") | TAKE | R3, node 4.7 | MVP | Node 4.7 needs exactly this shape: **editing a definition changes what cards already sent will say**, and that consequence has to be visible before saving, not after |
| R8 | **Inline help links beside the labels** ("Where can I find this?", "How do I generate this?") | TAKE | R5 | MVP | Nine credential fields with no route to where each value lives is the version of this form that gets abandoned. Cheap, and it is content rather than structure |
| R8 | **The whole thing as a modal over a dimmed page** | DO NOT TAKE | Nothing | Out | A nine-field form in a modal at 360 is a scroll inside a scroll. Ours is a page, which is what the node map already says |
| R9 | **Inline error under the specific field, with the message naming the problem** ("Phone number is too short") | TAKE | R5, node 4.6 | MVP | The banner says the submission failed, the inline message says which field. Both, and they are not alternatives |
| R9 | **Progress indicator across a multi-step flow** | DO NOT TAKE | Nothing | Out | Our forms are one step each. A progress bar over one step is decoration claiming to be information |
| R9 | **Single centred column, wide gutters, every field full width** | TAKE | R5 | MVP | It is the layout that survives 360 without being redesigned, which is the stance this stage runs on |

### Our composition

**3.2, connect a source.** 1) Which warehouse, a short list. 2) What you will need, including the addresses to allowlist, beside the fields or above them at 360. 3) The credential fields in D5's order. 4) **Expected cadence**, ours rather than theirs. 5) Test connection, then save. 6) Delete, apart from both.

**4.4, define a metric.** 1) Name. 2) **The definition in words**, the first and largest field. 3) The owner, required. 4) The binding to a source. 5) Run it, then save.

**4.7, editing.** The same form, plus the previous version retained and visible, plus the consequence banner from R8 stating that cards already sent will change. Saving is what puts node 2.5 on those cards, and the person doing it should know that before they do it.

**3.3 and 4.5, running:** progress in place, naming what is being tried, no modal. **3.4 and 4.6, failed:** the banner at the top saying the attempt failed, the inline message on the field that caused it, and **the form still filled in**.

**Checked against rule 3.** D5 opens on a table picker and never asks what the metric means. R7 has no meaning field at all because a database resource has no meaning. R8 is a modal. R9 is a multi-step KYC flow. **The definition in words as the first field appears in none of them**, and it is the whole point of ours.

### One taken row re-read at node 3.2, and it produced no field

**"First day of week and time zone must match the warehouse."** Taken above as a constraint because a silent wrong number is the failure this product sells against. **Read against our own architecture at 3.2, most of it does not apply:** PowerMetrics needs those settings because it **builds** queries, and we do not. The analyst pastes a query that already exists and we show the one value it returns, so **we never aggregate, and there is no week for us to start.**

**What survives lands at 4.4 rather than 3.2.** A definition can still be wrong about its own week, and that is a sentence in the analyst's words, not a setting on a connection. **So the connection form gains no field**, and a settings pair added here would be two more ways to produce a wrong number.

**A second thing 3.2 sends back to this bank.** The credential row above lists nine fields in one order. **It is one block per warehouse type, not one block:** Snowflake, BigQuery and Postgres do not share a credential shape, and the order in each comes from that warehouse's own documentation, because that is the order the person is copying from.

---

## T4. The gate

**Nodes:** 1.1 sign in through SSO, 1.2 the identity provider is answering, 1.3 authentication failed. Three nodes, all MVP.

**The first type in this bank whose domain half is public.** Competitor sign-in pages need no account to look at, so both domain sources below were opened live rather than read about, and **the "where we are better" column is a real comparison here** instead of a barrier.

**Sign in is a gate, not a place.** That line is already in the traceability matrix as the reason 1.1 carries no X against any job while not being an orphan, and it is the standard every block below is judged against.

### Sources

| # | Source | Kind | Opened |
| --- | --- | --- | --- |
| D7 | dbt Cloud sign-in, `cloud.getdbt.com/login` (redirects to `auth.cloud.getdbt.com`). Screen: `research/screens/ui-dbt-login.png` | **Domain, live page, HARD competitor** | 2026-08-12, this session |
| D8 | Cube Cloud sign-in, `cubecloud.dev/auth`. Screen: `research/screens/ui-cube-login.png` | **Domain, live page, SOFT competitor** | 2026-08-12, this session |
| R10 | Sketch SSO shortname, `refero.design/pages/af3d65d1-4b70-4fb8-af79-cd2b30acf69c` | Craft, an SSO-only gate with an error state | 2026-08-12 |
| R11 | Riverside SSO, `refero.design/pages/3775da7a-b67a-4c79-818f-b78dcffd8005` | Craft, SSO with an unrecognised-email error | 2026-08-12 |
| R12 | Loom sign-in, `refero.design/pages/1d97431a-469e-46df-a25b-3ccbb31d09b5` | Craft, the maximal version of this page | 2026-08-12 |

### What the live pages actually show, since this is the part usually taken from memory

**dbt Cloud, in order:** heading "Sign in", the line "Login to dbt Cloud.", a contextual notice for people arriving from the dbt extension, email, password with a show-and-hide control, "Reset password", "Continue", a legal line reading *"By signing in, you agree to dbt Cloud's Terms of Service unless a prior agreement is in effect"*, and a route to create a company account. **There is no SSO control on this page at all.**

**Cube Cloud, in order:** a language selector, "Welcome back!", a sign-up link, email, password, "Forgot password?", "Sign in", then "Sign In with GitHub", "Sign In with Google", and last a "single sign-on" link that reveals a field and a "Log in via SSO" button.

**The comparison, stated plainly.** Both of these sell into US B2B, where `research.md` records that SSO is asked about on the first call. **In one the SSO route is fifth, and in the other it is not on the page.** Ours is the only route, and the page has no password field to fail on.

### Blocks

| Source | Block | Decision | Traces to | Scope | Where we are better, and why |
| --- | --- | --- | --- | --- | --- |
| D7, D8 | **Email and password fields** | **DO NOT TAKE, at all** | Nothing | Out | The tech hypothesis already commits to OIDC and SAML through a provider. A password field we do not use is an attack surface, a support queue and a reset flow, and every one of those is a node this stage would have to write |
| D7 | **"Reset password" link** | DO NOT TAKE | Nothing | Out | Falls with the field above. **This is the clearest saving in the type:** no password means no reset, no expiry, no rotation, and three fewer nodes than a conventional gate |
| D8 | **GitHub and Google buttons above the SSO link** | DO NOT TAKE | Nothing | Out | A personal account signing into a company workspace is the thing SSO exists to prevent. Our secondary persona is an employee whose company has an identity provider |
| D7, D8 | **SSO placed last, or not placed at all** | **DO DIFFERENTLY, and it is the whole point of 1.1** | P2, precondition of R5 and R2 | MVP | Both competitors treat the enterprise route as the exception. For a product whose buyer imposes SSO before the security review, the exception route is the main one |
| D7 | **A contextual notice above the fields, explaining why an account may already exist** | TAKE the slot | P2 | MVP | A gate has exactly one moment to explain an unexpected situation, and it is before the action rather than after it fails |
| D7 | **A legal line under the action** ("by signing in, you agree to the Terms, unless a prior agreement is in effect") | TAKE | Legal, and node 0.2 | MVP | The clause about a prior agreement is worth copying: in US B2B at this size the contract is usually signed before anybody logs in, and boilerplate that ignores that is wrong on its face |
| D7, D8 | **A route to create an account, on the sign-in page** | DO NOT TAKE in MVP | Nothing | ПОТІМ | Self-serve sign-up is an acquisition mechanism and cluster 6 is entirely ПОТІМ. Recorded rather than dropped: when it arrives, it arrives here |
| D8 | **Language selector** | DO NOT TAKE | Nothing | Out | One language, English. The project boundary settles this and no node multiplies by language |
| R10 | **An SSO-only page with one field and one action** | TAKE as the shape | P2 | MVP | Confirms from outside the category that a gate with a single route is a normal page rather than a stripped one |
| R10 | **A workspace shortname as the field** | DO NOT TAKE | Nothing | Out | A shortname is something a person has to be told and then remember. Their work email routes them without asking them to know anything |
| R11 | **Work email as the field, and the error when it is not recognised for SSO** | **TAKE, both** | P2, node 1.3 | MVP | This is the real failure of an SSO gate: not a wrong password but an address that belongs to no configured workspace. **Naming that specific case is what stops 1.3 being a generic "something went wrong"** |
| R11 | **"Back to log in" as a route out of the error** | TAKE | P2, node 1.3 | MVP | The flow critique already required that authentication failure has a route out. This is what it is |
| R12 | **Five provider buttons, a divider, an email field and a disabled Continue** | DO NOT TAKE | Nothing | Out | The maximal version of this page, kept in the bank as the ceiling we are not building towards. Every provider added here is another way for the wrong identity to enter a company workspace |
| R12 | **The primary action disabled until the field is valid** | DO DIFFERENTLY | P2 | MVP | A disabled button with no stated reason is a dead end that looks like a bug. Ours stays enabled and answers on submit, which is also what makes 1.3 reachable |

### Our composition

1. **Product name**, small, because a gate is not a landing page
2. **Heading**, one line
3. **Work email**, one field
4. **Continue with SSO**, one action
5. **A contextual notice slot**, used only when there is something true to say
6. **The legal line**, with the prior-agreement clause
7. **Footer** (node 0.2)

**1.2, the identity provider is answering:** progress in place, saying whose answer is being waited for, and no cancel that strands somebody between two systems.

**1.3, failed:** the reason named, and **the case that matters named separately**, which is an address belonging to no configured workspace. One route back.

**Checked against rule 3.** D7 has no SSO at all, D8 buries it fifth, R10 asks for a shortname, R12 offers five providers. **A single-route SSO gate with a work email and no password appears in none of the four**, and what makes it ours is a decision about who signs in rather than a preference about layout.

---

## T8. System pages

**Nodes:** 7.1 the 404, 7.2 the 500, 7.3 maintenance, 7.4 the cookie notice. Four nodes, **two of them MVP**.

**7.1 matters more here than in most products, and the reason is structural.** The reader's only entrance is a link. A broken or expired link is therefore **their first contact with us**, not a rare edge case, and a 404 that behaves like a wall means the product failed at the front door for the persona it is built around.

### Sources

| # | Source | Kind | Opened |
| --- | --- | --- | --- |
| D9 | dbt docs 404, `docs.getdbt.com/this-page-does-not-exist-plumb-check`, HTTP 404 | **Domain, live page, and a negative reference** | 2026-08-12, this session |
| D10 | Cube 404, `cube.dev/this-page-does-not-exist-plumb-check`, HTTP 404. Screen: `research/screens/ui-cube-404.png` | Domain, live page | 2026-08-12, this session |
| D11 | Secoda in-app not-found, `app.secoda.co/login` | Domain, live, found while collecting T4 | 2026-08-12, this session |
| D12 | dbt Labs consent banner, `getdbt.com`, OneTrust. Screen: `research/screens/ui-dbt-cookie-consent.png` | Domain, live, for node 7.4 | 2026-08-12, this session |
| R13 | Zapier 404, `refero.design/pages/c5fa8f08-6426-46c4-9f5d-3edc5426b61b` | Craft, outside the category | 2026-08-12 |
| R14 | Jitter 404, `refero.design/pages/95546f77-bd73-4c15-b11b-2543a92dba6c` | Craft, the minimal version | 2026-08-12 |
| R15 | TidyCal 404, `refero.design/pages/61185171-55c4-448c-a52c-ade498783a5d` | Craft, a 404 **inside** a signed-in shell | 2026-08-12 |

### The negative reference, quoted in full because it is the whole argument

**dbt's documentation 404 says, in its entirety:** "Page Not Found", "We could not find what you were looking for.", and then *"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."*

**There is no route onward at all.** The page tells the visitor to go and fix somebody else's website. For a product whose reader **arrives by a link somebody else sent them**, that exact sentence would be the product failing at its own front door: it hands the problem back to the one person who cannot solve it and has no account to solve it with.

### Blocks

| Source | Block | Decision | Traces to | Scope | Where we are better, and why |
| --- | --- | --- | --- | --- | --- |
| D9 | **"Contact the owner of the site that linked you"** | **DO NOT TAKE** | Would trace to nothing | MVP | Our reader **is** the person who was linked. Telling them to go back to the sender is telling them to do the thing this product exists to remove |
| D9 | **A 404 with no onward route of any kind** | DO NOT TAKE | Nothing | MVP | The flow critique already ruled that a dead end with no route out is a defect. This is one, live, in a HARD competitor |
| D10 | **The full marketing header and the whole sitemap footer on the error page** | DO NOT TAKE in this form | Nothing | MVP | Twenty-five links is not a route, it is a shrug. And on a phone the answer is below a full-height header the person did not ask for |
| D10 | **"Page Not Found" marked up as an H2, with no H1 anywhere on the page** | **DO NOT TAKE, and name it** | SEO structure, decided at this stage | MVP | Every page we write carries one H1. A structural defect this cheap to avoid is worth recording, since SEO structure is this stage's job rather than production's |
| D10 | **"Go to Homepage" as a single named action** | TAKE the pattern, **not the destination** | Both personas, node 7.1 | MVP | The analyst's home is the registry. **The reader has no home at all**, by decision, so "go to homepage" is not available to us for the persona that meets this page most |
| D11 | **Not-found rendered as a state inside the app shell, not a separate page** ("The resource can't be found. Secoda may be out of sync with the source or the resource may not exist in this workspace") | **TAKE the shape for the signed-in half** | P2, node 7.1 | MVP | It names **two different causes** and does not pretend to know which. That is honest, and it is the same discipline node 0.4 applies to states on a number |
| D11, R15 | **Keeping the shell and the navigation around the error for a signed-in person** | TAKE | P2 | MVP | An analyst who mistypes a URL should not lose their navigation. This splits 7.1 into two renderings of one node, which is a real finding rather than a preference |
| D12 | **A consent banner with "Accept All Cookies" and "Personalize My Choices", plus a vendor list with search and filters** | **DO NOT TAKE the shape** | Legal, node 7.4 | ПОТІМ, and see the discrepancy below | This is what a consent platform looks like at scale. On the number card it would be **a modal about tracking sitting on top of a page that promises we store nothing about the reader**, which is the worst possible first contact |
| D12, D10, D14 | **The split itself: dbt runs a full consent platform, Secoda shows a plain "We use cookies" banner, Cube shows a US visitor nothing at all** | Record, decide at step 7 | Legal | ПОТІМ | Three live US B2B data companies, and **two of the three show a banner**. Corrected after collecting T6, where the third data point turned up. The label on 7.4 stays ПОТІМ, and the evidence now says a banner is the majority behaviour rather than an even split |
| R13 | **Message, one line of explanation, one clearly named recovery action** | TAKE | Both, nodes 7.1 and 7.2 | MVP | Three blocks is the whole page. Everything beyond them is decoration on an error |
| R13 | **"Back to Safety" as the button label** | DO NOT TAKE the wording | Node 7.1 | MVP | A friendly label that does not say where it goes. Ours names the destination, because a reader with no account needs to know what they are about to get |
| R14 | **An emoji and a help chat in the corner** | DO NOT TAKE | Nothing | Out | Support chat is not in the MVP, and an emoji is the visual stage's decision, not this one |
| R14 | **The whole page as one centred column with nothing else on it** | TAKE | Node 7.1 | MVP | This is the layout that works at 360 without being redesigned, which is the stance |
| R15 | **A 404 inside the signed-in shell, with the sidebar intact and a home button** | TAKE for the analyst rendering | P2 | MVP | Confirms D11 from outside the category |

### Our composition

**7.1, the 404, and it renders two ways from one node.**

*For the reader, signed out:* 1) what was expected at this address, in words. 2) **The two honest causes named**, that the link may have expired or the metric may have been removed, without claiming to know which. 3) The one thing they can actually do, which is ask the person who sent it, **with the difference from dbt being that we say who that is if we know**. 4) Footer.

*For the analyst, signed in:* the same message inside the shell, navigation intact, and a route to the registry.

**7.2, the 500:** what broke, **what is safe to assume about the number they were looking at** (nothing, because we did not get it), and a retry. The middle block is ours and appears in none of the sources, and it follows from the product: an error page in a trust product has to say whether anything it showed can still be believed.

**7.3, maintenance:** ПОТІМ. Duration if known.

**7.4, the cookie notice:** ПОТІМ, with the discrepancy carried openly into step 7.

**Checked against rule 3.** D9 has no route at all, D10 has twenty-five, R13 has one that does not say where it goes, R14 has a chat widget. **Naming two possible causes without choosing between them appears in none of them**, and it is the same rule the state vocabulary already runs on.

---

## T6. The public landing

**Node:** 6.1, the product page. One node, labelled ПОТІМ, **in this round for one reason**: it is the only subject the SEO layer of this stage has. Nothing in the MVP subset is indexed, because the card is public but noindex and everything else is private or transactional.

**It is also the node that shares a canonical component with T1.** The growth mechanic recorded in `CLAUDE.md` is that the public page **renders the real card component**, not a picture of it. That single decision is what separates our hero block from every source below.

### Sources

| # | Source | Kind | Opened |
| --- | --- | --- | --- |
| D13 | dbt Labs, `getdbt.com` | **Domain, live, HARD competitor** | 2026-08-12, this session |
| D14 | Secoda, `secoda.co` | **Domain, live, HARD competitor** | 2026-08-12, this session |
| R16 | Exa product page, `refero.design/pages/f0347b6b-8e02-48f9-ac4c-d7e6d79651b8` | Craft, for the live demo frame | 2026-08-12 |
| R17 | 1Password Enterprise, `refero.design/pages/976c2a5e-47d2-481c-b71f-fc140dc415d1` | Craft, for the enterprise trust shape | 2026-08-12 |
| R18 | Cal.com landing, `refero.design/pages/f76f52ca-8b08-450b-ac05-4d781ecdd084` | Craft, outside the category | 2026-08-12 |

### The structural SEO layer, measured rather than assumed

This is the layer this stage owns, so it was read off the live pages instead of guessed.

| | dbt Labs (D13) | Secoda (D14) |
| --- | --- | --- |
| H1 | One, a two-line brand statement | One, "The AI platform for data and analytics" |
| Title | "Deliver trusted data with dbt \| dbt Labs" | "Secoda - The AI platform for data and analytics" |
| Meta description | Present, generic | Present, specific and readable |
| Canonical | Not found on the page | Present |
| Open Graph | Partial | title, description, image, type |
| **Structured data** | **None. Zero `ld+json` blocks** | **One block, and its type is `CreativeWork`** |

**Both competitors ship effectively no product structured data.** One has none at all; the other has a single generic block of the type a site builder emits by default. **That is a cheap, real advantage available in the structural layer**, and it is the kind of thing that is invisible from a screenshot and only shows up because the page was opened.

### Blocks

| Source | Block | Decision | Traces to | Scope | Where we are better, and why |
| --- | --- | --- | --- | --- | --- |
| D13, D14 | **Hero: headline, subline, two calls to action** | TAKE the slot | Acquisition | ПОТІМ | Standard and correct. What goes in it is where we differ |
| D13, D14, R16 | **A product screenshot or a framed demo image beside the headline** | **DO DIFFERENTLY, and this is the row the type turns on** | The growth mechanic in `CLAUDE.md` | ПОТІМ | **Ours is the real card component with a real metric in it, live.** A product whose claim is that a number carries its provenance can prove that claim in its own hero instead of illustrating it. R16 gets closest with a large centred demo frame, and it is still an image |
| D13 | **A merger and corporate-news banner above the hero** | DO NOT TAKE | Nothing | Out | The first block on the page is about the company rather than the reader's problem |
| D14 | **"As seen on TV" as the first section after the hero** | DO NOT TAKE | Nothing | Out | Borrowed authority is the opposite of what this product sells. We are asking people to stop trusting numbers because of where they appeared |
| D13, D14, R17 | **Customer logo wall** | TAKE, ПОТІМ, and only when true | Acquisition | ПОТІМ | Honest and standard. It is empty until there are customers, and an invented one on a trust product would be the worst possible lie |
| D13 | **Benefit triad: quality and trust, efficiency and cost, better AI** | TAKE the shape, one claim | Acquisition | ПОТІМ | Three claims where one would do. Ours is the strategic dimension: whether a number can be judged where it is read |
| D14 | **"Powered by your metadata control plane"** | DO NOT TAKE the register | Acquisition | ПОТІМ | Written for a data lead. **Our page has to be readable by the person who never pays**, since the primary persona is the one who arrives at a card |
| R17, R18 | **FAQ accordion near the bottom** | TAKE | Acquisition, and **SEO: `FAQPage` structured data** | ПОТІМ | The one block on this page with a structural SEO payload, and neither competitor ships it |
| R17, R18 | **Testimonial carousel** | DO NOT TAKE in this form | Acquisition | ПОТІМ | A carousel hides most of its content from a phone and from a crawler. If quotes are worth showing, they are worth showing stacked |
| R16 | **A pricing panel inside the landing page** | DO NOT TAKE | Nothing | ПОТІМ | Pricing is node 6.3 and has its own URL, which is also the version that can rank for its own query |
| D13, D14, R17 | **Multi-column footer with the whole sitemap** | TAKE, as node 0.2 already defines it | Node 0.2 | MVP for the footer itself | Already specified. The landing does not get its own footer |
| D13 | **No structured data at all** | **DO NOT TAKE** | SEO structure, decided at this stage | ПОТІМ | `SoftwareApplication` plus `Organization` on the product page, and `FAQPage` on the FAQ block. Cheap, and it is the layer this stage exists to decide |
| D14 | **Canonical and full Open Graph** | TAKE | SEO structure | ПОТІМ | The better of the two on this row, and worth copying rather than improving on |

### Our composition

1. **Hero**: one claim, and **the live card component beside it**, rendering a real metric with its state, its definition and its attribution
2. **The problem in one block**: two people, two numbers, half an hour
3. **What the product is**: the definition, the states, the attribution, the link. Four things, each one sentence
4. **Who it is for**, naming the reader first and the analyst second
5. **Trust**: metadata only, no copy of customer rows, with a route to node 6.2
6. **FAQ**, carrying `FAQPage`
7. **One call to action**
8. **Footer** (node 0.2)

**Checked against rule 3.** D13 opens on corporate news, D14 opens on borrowed authority, R16 puts pricing inside the page, R17 and R18 lead with logos and testimonials. **A hero whose product image is the running product appears in none of them.**

---

## T6 extended, for 6.2 and 6.3, collected in the ПОТІМ round

The T6 sources above were opened for the landing. **6.2 and 6.3 are the same type and different pages**, so they got their own live pass rather than being written by analogy with a landing page.

### Sources

| # | Source | Kind | Opened |
| --- | --- | --- | --- |
| D15 | Secoda pricing, `secoda.co/pricing`. Screen: `research/screens/ui-secoda-pricing.png` | **Domain, live, HARD competitor** | 2026-08-12, this session |
| D16 | dbt pricing, `getdbt.com/pricing`. Screen: `research/screens/ui-dbt-pricing.png` | **Domain, live, HARD competitor** | 2026-08-12, this session |
| D17 | dbt Labs Trust Center, `trust.getdbt.com`. Screen: `research/screens/ui-dbt-trust-center.png` | **Domain, live** | 2026-08-12, this session |
| D18 | Secoda Trust Center, `trust.secoda.co`. Screen: `research/screens/ui-secoda-trust-gated.png` | **Domain, live** | 2026-08-12, this session |
| R19 | OpenAI pricing, `refero.design/pages/48b87627-bbe6-415d-b314-632c38e40d95` | Craft, five cards plus comparison table plus FAQ | 2026-08-12 |
| R20 | RevenueCat pricing, `refero.design/pages/0dd86030-0bac-4ee0-8823-9999de49a774` | Craft, four tiers with stated limits | 2026-08-12 |
| R21 | Linear security, `refero.design/pages/7035f422-d579-42e5-8eec-9b853f53cf9a` | Craft, a claim-led security page | 2026-08-12 |
| R22 | Mural trust, `refero.design/pages/0e08ea58-ec47-49f3-81e4-d8b08968399a` | Craft, compliance grid plus a policy links row | 2026-08-12 |

### What the live pages actually show

**Secoda pricing (D15): three tiers, and not one price anywhere on the page.** Core, Premium, Enterprise, each with "Learn more" rather than a number. Then a comparison matrix in six groups, an FAQ of eleven questions, one `ld+json` block whose type is `CreativeWork`. **Viewers are Unlimited on all three tiers**, which confirms the line already in `research.md`.

**dbt pricing (D16): four tiers with prices in the open.** Free, $100 per user per month, Custom, Custom. The meta description carries the price. Twelve FAQ questions across two groups, "dbt FAQs" and "Billing and security FAQs", and **zero `ld+json` blocks on the page.**

**The metering is the finding, not the prices.** dbt sells "3,000 successful models built per month", "5,000 queried metrics per month", "20,000 queried metrics per month". **A queried metric per month is a billable unit in this market**, and our business hypothesis is seats with no cap on metric count. This is the closest thing in the research to a competitor charging for the thing we intend to give away, and it belongs in front of question 2 in `research.md` rather than being discovered after pricing is set.

**The two trust centres are opposites, and that is the whole of node 6.2.** dbt's (D17) is open: 9 documents, 15 FAQs, 7 badges, dated security announcements, three named subprocessors, a vulnerability report route, and *"Everything you need to complete your security review is here"*. **Secoda's (D18) is a lead form.** First name, last name, email, company, reason, "Request access". **No H1, and no public content at all.**

### Blocks

| Source | Block | Decision | Traces to | Scope | Where we are better, and why |
| --- | --- | --- | --- | --- | --- |
| D15 | **A pricing page with no prices** | **DO NOT TAKE** | Acquisition | ПОТІМ | Three tiers and three "Learn more" links is a page that answers no question it was opened to answer. **For a product selling defensibility, a price you have to ask for is off-brand in a way that is hard to argue out of** |
| D16 | **Prices stated, including in the meta description** | **TAKE** | Acquisition, SEO | ПОТІМ | The better of the two on this row and worth copying outright |
| D16 | **Metered units: models built and metrics queried per month** | **DO NOT TAKE, and record it as a live risk** | The business hypothesis in `CLAUDE.md` | Out | Charging per read is charging for the growth mechanic. Recorded because a competitor already meters exactly the unit we intend to leave free, and if our hypothesis falls, this row is where it falls |
| D15, D16 | **Comparison matrix by feature group** | TAKE, reduced | Acquisition | ПОТІМ | Secoda's runs six groups and dozens of rows for three tiers. Ours has two roles and one axis that matters: **what a reader can do without paying** |
| D15, D16, R19 | **FAQ accordion at the bottom** | **TAKE, with `FAQPage` schema** | SEO structure | ПОТІМ | **Both competitors run an FAQ and neither ships `FAQPage`.** One has a generic `CreativeWork`, the other has nothing. Same cheap advantage as on the landing, on the page where billing questions are actually asked |
| D16 | **"Does dbt store my data?" as a billing and security FAQ question** | **TAKE the question** | The main job, node 6.2 | ПОТІМ | It is the question our whole architecture answers, and a competitor's own page proves buyers ask it here. **Ours answers it in one sentence and links to 6.2** |
| R19, R20 | **Plan limits stated on the card** | TAKE the shape, refuse the unit | Acquisition | ПОТІМ | A card should say what is bounded. Ours bounds seats, and says out loud that metrics and readers are not bounded |
| R19 | **Logo wall on the pricing page** | DO NOT TAKE until true | Acquisition | ПОТІМ | Same rule as the landing. An invented logo on a trust product is the worst available lie |
| D17 | **An open trust centre: badges, a summary, FAQs, subprocessors, a vulnerability route** | **TAKE the content set** | The buyer, SOC 2 | ПОТІМ | The buyer has no product surface, so this page is the whole of their experience of us |
| D17 | **Documents behind "Get Access"** | TAKE, **narrowly** | Legal | ПОТІМ | A gate belongs only in front of documents that need an NDA. **Everything that can be said in public is said in public** |
| D18 | **The entire trust surface behind a lead form** | **DO NOT TAKE, and this is the sharpest refusal in the type** | The buyer | Out | A page that asks a security reviewer for their name before telling them anything has converted a trust surface into a lead capture. **We are selling the claim that you can check a thing without asking permission**, and doing this would contradict the product on the product's own subject |
| D17 | **Dated security announcements about our own systems** | TAKE, and note the distinction | The buyer | ПОТІМ | Design principle 2 forbids an incident workflow **around a number**. An advisory feed about our own infrastructure is a different object with a different reader, and refusing it would be applying a rule outside its scope |
| D17 | **The trust centre on a third-party subdomain** | **DO DIFFERENTLY** | SEO structure | ПОТІМ | dbt's is `trust.getdbt.com`, powered by a vendor. Ours is a page on our own domain, because this stage owns the structural SEO layer and a subdomain we do not control cannot carry it |
| R21 | **A security page led by a claim rather than by badges** | **TAKE** | The buyer, and the main job | ПОТІМ | **SOC 2 is a later goal, so we have no badge to lead with.** What we have is an architecture claim that is true today: no copy of customer rows. A claim beats a badge we do not hold |
| R22 | **Compliance grid plus a row of policy links** | TAKE | Node 0.2, nodes 6.5 and 6.6 | ПОТІМ | It is the join between 6.2 and the legal pages, and it is what a reviewer opens next |

---

## T5. Account settings, collected in the ПОТІМ round

**Nodes:** 5.1 workspace and people, 5.2 plan and seats. Two nodes, both ПОТІМ, **both marked "no job" in the traceability matrix.**

**The domain half is behind a login and stays there.** Neither competitor exposes a settings screen without an account, and this stage does not log in. **So the comparison column holds a barrier**, and the craft half carries the type.

| # | Source | Kind | Opened |
| --- | --- | --- | --- |
| R23 | Butter team members, `refero.design/pages/383056d3-e4ee-4c33-9bc5-b71cf51357a5` | Craft, with the last-admin error | 2026-08-12 |
| R24 | Fernand team, `refero.design/pages/1049cb47-7138-4273-8c1c-e08386e1c142` | Craft, members table with roles and 2FA | 2026-08-12 |
| R25 | Supercut team, `refero.design/pages/f8bad021-2eca-4b02-a4d3-296cfd762b3a` | Craft, seats shown beside members | 2026-08-12 |
| R26 | Fingerprint invite, `refero.design/pages/2d463e06-3b8c-4c82-a943-0a8fa4db58a0` | Craft, invite as a dialog | 2026-08-12 |
| D19 | Secoda pricing (D15), the security and workspace management rows | Domain, for what a workspace has to hold | 2026-08-12, this session |

| Source | Block | Decision | Traces to | Scope | Barrier or comparison |
| --- | --- | --- | --- | --- | --- |
| R23, R24, R25 | **Settings sidebar plus a main panel** | **TAKE as one shell for both nodes** | Tenancy | ПОТІМ | This is the reuse decision for cluster 5: one private multi-section shell, two sections, not two pages built twice |
| R24, R25 | **Members table: person, role, status** | TAKE | Tenancy | ПОТІМ | Barrier rather than comparison: we cannot see a competitor's version without an account |
| R25 | **Seats shown beside members** | **TAKE, and it is the join to 5.2** | The business hypothesis | ПОТІМ | Our model charges for analysts and not for readers, so **the seat count has to be visible where people are added**, or the price is discovered at the invoice |
| R26, R24 | **Invite by email with a role chosen in the same row** | TAKE | Tenancy | ПОТІМ | Two fields, one action |
| R26 | **Advanced per-permission options inside the invite dialog** | DO NOT TAKE | Nothing | Out | Row level permissions are out of scope by the brief, and a permission matrix here would promise them |
| R23 | **The error "you cannot remove the last admin"** | **TAKE, as a rule rather than a toast** | Tenancy | ПОТІМ | A workspace with no administrator is unrecoverable. Node 0.3 already rules that what belongs to the thing on screen stays on screen, so this is inline and blocking, not a toast |
| R24 | **A 2FA status column** | DO NOT TAKE | Nothing | Out | We do not hold the identity. **SSO means 2FA is the provider's business**, and reporting a status we do not own would be a claim we cannot stand behind |
| D19 | **Roles: viewer, editor, admin, with viewers unlimited** | TAKE the shape | The business hypothesis | ПОТІМ | Our version is narrower: **there is no reader role at all**, because a reader has no account. The roles here are the ones that write |

**Composition, one shell and two sections.** Sidebar with two items. **People:** invite row, members table, the last-admin rule. **Plan and seats:** seats used and available, what a seat costs, what is not charged for, invoice route.

**Rule 3 check.** Every craft source shows an app whose settings live in a modal or a three-column shell with many sections. **Ours has two sections and no modal**, and the thing none of them has is a stated non-charge: the row saying readers are free is ours because our pricing hypothesis is ours.

---

## T7. Content, legal and support, collected in the ПОТІМ round

**Nodes:** 6.4 documentation, 6.5 privacy policy, 6.6 terms of service, 6.7 support and contact. Four nodes, all ПОТІМ. **This type gets a template map rather than a composition**, which is the reuse decision the pipeline names for legal pages.

| # | Source | Kind | Opened |
| --- | --- | --- | --- |
| D20 | dbt's privacy link, `getdbt.com/cloud/privacy-policy`, **which redirects to** `fivetran.com/legal/privacy`. Screen: `research/screens/ui-fivetran-legal-privacy.png` | **Domain, live** | 2026-08-12, this session |
| D21 | dbt documentation, `docs.getdbt.com`, already used for T1 and T2 | Domain | 2026-08-12, this session |
| R27 | Square general terms, `refero.design/pages/44b45474-5df8-4f6d-875f-843c37110225` | Craft, terms with a related-links rail | 2026-08-12 |
| R28 | Dock legal, `refero.design/pages/b4957573-0fee-4037-ac9f-c46505ad0f78` | Craft, tabs across the legal documents | 2026-08-12 |
| R29 | Bezi terms, `refero.design/pages/28c07018-8f6d-4391-bd21-e4bd0b7c1073` | Craft, title plus an update date | 2026-08-12 |

| Source | Block | Decision | Traces to | Scope | Comparison |
| --- | --- | --- | --- | --- | --- |
| D20 | **A legal hub with a rail: terms grouped, privacy grouped, then each document** | **TAKE, and it is the template map** | Legal | ПОТІМ | Four pages, one shell, one rail. The alternative is four pages that do not know about each other |
| D20, R29 | **"Last Updated" directly under the title** | **TAKE** | Legal, and design principle 5 | ПОТІМ | **Principle 5 says every claim carries a name and a time.** A legal page with no date is the same defect as a number with no timestamp, on a page whose entire content is claims |
| D20 | **H2s written as questions** ("What personal data does Fivetran collect and why?") | TAKE | Legal, SEO | ПОТІМ | It is how the reader asks it and how a search does, and it costs nothing |
| D20 | **The product's own privacy link leaving the product's own domain** | **DO NOT TAKE, and it is recorded as a finding rather than a criticism** | SEO structure, node 0.2 | Out | After the merger, dbt's footer privacy link lands on `fivetran.com`. **A legal surface that is not on your own domain is one you do not control the wording, the canonical or the date of**, and for us the privacy page is a selling argument rather than boilerplate |
| D20 | **Cookie List as a separate document in the rail** | TAKE the slot, decide at step 7 | Node 7.4 | ПОТІМ | The cookie discrepancy is already recorded in the map and step 7 owns it. This is where the document would live |
| D21 | **Documentation as a separate subdomain with its own navigation** | DO NOT TAKE in MVP or the first ПОТІМ round | Both personas | ПОТІМ | A documentation site is its own information architecture. **Ours is one page answering how a definition is written and how a card is read**, and it grows into a site when there is something to document |
| R27, R28 | **Cross-navigation between legal documents, as a rail or as tabs** | TAKE, as a rail | Legal | ПОТІМ | Four documents, and a reviewer opens two of them in the same minute |
| R28 | **A "Get started" call to action inside a legal page** | DO NOT TAKE | Nothing | Out | A legal document with a conversion button reads as an ad, on the one page where a person is looking for the absence of tricks |
| R27 | **Two-column: text plus a related-links sidebar** | TAKE at width, stack at 360 | Legal | ПОТІМ | Same rule as everywhere else in this stage |

**The template map, four pages on one shell:** title, last-updated date, the rail of sibling documents, one readable column of prose, footer. **6.7 is the exception:** it holds a route to a person rather than a document, and it carries no rail.

---

## What this bank does not cover, said plainly

**Both deferred types were collected in the ПОТІМ round** and are recorded above: T5 (5.1, 5.2) with a barrier in place of its domain half, and T7 (6.4 to 6.7) with a template map rather than a composition.

**The domain half was documentation rather than product for three types.** T1, T2 and T3 hold 21 of the 30 MVP nodes, and for all three the product surface is behind a login that we do not pass. Documentation describes an interface and shows selected screenshots of it, which is not the same as using it. **Everything in those three types about density, behaviour under a narrow viewport, and what a screen feels like in the hand remains unknown**, and stage 04 should treat the compositions above as structure rather than as evidence about experience.

**Three types had a genuinely public domain half:** T4, T8 and T6, where the competitor page was opened live in this session. Those are also the three where the comparison column says "where we are better" rather than naming a barrier, and the difference in confidence between the two halves of this bank is worth carrying forward rather than smoothing over.
