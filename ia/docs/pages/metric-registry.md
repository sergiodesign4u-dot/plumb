# 4.1 The metric registry, with its two other states

**Page:** Metric registry · **Type:** page · **Node:** 4.1 · **Scope:** MVP · **Group:** pages

**States in the same pass:** 4.2 no metrics yet, 4.3 search results including the no-match case.

**The listing template is born here.** Node 3.1, sources, is the same page with three different columns and a different primary action. That reuse was decided in the block bank rather than discovered now, and this node is where the template is actually written down.

---

## Purpose and jobs

**Purpose.** Let the analyst find a metric that already exists, and see at a glance what already answers without them.

**Jobs served.**

| Job | How this page closes it |
| --- | --- |
| **R2.** Answer the same question once rather than every time | Search that reaches into the definition text, so a standing answer is found instead of retyped |
| **R5.** The definition stops living in a head | The count beside the title, and the list itself |
| **Main job, indirectly** | The row is a route to the card. The registry is a finder, not a reader's surface |

**Who this is for, and the rule it is bound by.** The analyst, and only the analyst. `CLAUDE.md`: the registry never appears in the reader's navigation, because a list with search is the rejected "catalog and search" pattern, and the moment it becomes the reader's entry point the chosen pattern has been changed without saying so.

**Depth in taps.** One from sign-in, since this is the analyst's landing surface. Two to a card.

## URL and breadcrumbs

- **URL:** `/metrics`. The root of its own cluster, so no breadcrumb above it
- **4.3:** `/metrics?q=<query>`. **The query lives in the URL on purpose:** a search result is then an address rather than a transient state, which costs nothing and makes the state reproducible when somebody reports it
- **Indexation:** `noindex`. Behind sign-in, and the content is the customer's

## Content blocks, mobile-first priority

| # | Block | Note |
| --- | --- | --- |
| 1 | **Title with a count** | "Metrics, 12". The count is the block that carries R5 |
| 2 | **Search field** | Placeholder names what is searched: names and definition text |
| 3 | **The primary action**: define a metric | **Third at 360.** See the note below |
| 4 | **The list**: name, state with age, owner | Three columns at width, three lines per row at 360 |
| 5 | **Result count line** | "12 of 12" and, in 4.3, the honest zero |

### The order deviates from the bank, and the bank is corrected rather than ignored

The bank's composition for type T2 lists the primary action fifth. **At 360 an action below a list of unbounded length is unreachable without scrolling to the end of the customer's registry**, so it moves to third. Nothing is hidden and nothing is added: the bank's order was written listing blocks, and this node is the first place the order was reasoned from the phone. `ia/docs/blocks.md` carries the correction.

### Three columns, and the fourth is refused by name

**Name, state with age, owner.** Every extra column is one more thing to fit at 360, and the row exists for one purpose: to get somebody to the card.

| Refused column | Why |
| --- | --- |
| **Popularity, views, most used** | **The sharpest refusal in this type.** Both domain sources rank by it. Popularity is a proxy for authority, and this product exists because proxies for authority break. Ranking by how often a metric is looked at makes the most quoted metric the easiest to find and the least examined, which is phase G of the As-Is map, a figure that keeps being used long after it stopped being computed |
| **Certification badge** | A verdict with no author. The owner column is the same information with a person attached |
| **Version label** | It would promise a history we do not keep. One previous definition is the whole of it |
| **Source** | It belongs to node 2.7 and to node 3.1. Putting it here would make the row a summary of the card, and then the card is optional |

### The state in the row does not come from the warehouse, and this is the decision this node turns on

The card queries the source at read time. **The registry does not, and must not.**

| Why | Consequence |
| --- | --- |
| A registry that queries every source on load fires one warehouse query per row, which makes the analyst's own page the slowest thing in the product | The list renders from our own store, so there is no per-row spinner and no loading state for the table |
| That cost grows with the number of metrics defined, which is exactly the behaviour activation depends on | **It would also fight the pricing hypothesis**, which puts no cap on metric count. A page whose cost scales with the registry punishes filling the registry |

**So the row shows the state as it was at the last successful run, and the column says so.** The compact form from node 0.4 is unchanged, the same words with fewer of them, and the column heading is what stops it being read as a live reading.

**The honest cost, stated rather than buried.** The registry can be out of date about a source that went down five minutes ago. What mitigates it is the shape of the product rather than a patch: **opening the card queries live, so the truth is always one tap away**, and the time in the row says when it was last established.

**One line so this does not look like it contradicts node 4.7.** A last-run timestamp on the metric is not a reading log. There is no who, no count and no history: one field, overwritten. That is why the registry can show a time and node 4.7 still names no number when a definition changes.

## Search

| Question | Answer |
| --- | --- |
| What does it reach | **Name and definition text.** dbt searches column names, warehouse relations and code as well, and those are not ours to search: we hold metadata only |
| Where is it | Persistent affordance in the global bar, node 0.1, reachable by typing `/` from any analyst screen. **It is not a navigation item and has no page of its own** |
| What does Enter do | Jumps to the card when there is exactly one match, otherwise renders 4.3 |
| What is the pre-query state | **The list itself.** Secoda opens search on popular resources and personal recent searches; a registry small enough to read is better than a ranked selection of it, and the analyst usually knows the name they want |
| Offline | Search reports that it cannot reach the registry rather than returning an empty result. From node 0.1 |

### The row variant this node adds, named out loud

**When the match was in the definition text and not in the name, the row shows the matching fragment under the name.** Otherwise it does not.

**Why it is not decoration.** Search that reaches into the definition is the mechanism that closes R2, and a match the analyst cannot see makes the result look wrong. This is a variant of block 4, not a new block, and it is recorded in the bank rather than added quietly here.

## Sorting, filters and facets

**Sort:** by name, A to Z, and that is the only sort in MVP. **Sort by freshness is a real second case and waits.** Popularity and personal relevance are refused above.

**Filters and facets: none in MVP.** Facets by source, owner and freshness are recorded as ПОТІМ candidates. Adding them now would mean inventing filters for a registry whose size we do not know, and "none" is written here rather than left blank because that is the rule for this section.

**No access indicator in MVP, and the precedent it comes from lands elsewhere.** dbt shows every matching resource and marks the ones you may not open, which the bank took as a live precedent. **It applies to node 2.9, the reader with no account, not here:** row level permissions are out of scope by the brief, so every metric in a workspace is visible to every analyst in it and there is nothing to indicate.

## Components and variants

| Component | Variant | Note |
| --- | --- | --- |
| **Listing table** | **Canonical, defined here.** Three columns, sortable first column, header retained when empty | Node 3.1 uses this component with different columns. Changing it means walking both nodes |
| **Listing row** | Default, and the definition-fragment variant above | At 360 it is not a table row. See responsive |
| State, compact | From node 0.4. The state name and the age, no explanation | The full form lives on the card |
| Search field | Single line, placeholder naming what is searched | |
| Count line | Under the list | The zero case is the one that needs saying out loud |
| Button | Primary: define a metric | One per page |
| Empty block | Inside the list, header or labels retained | Shared by 4.2 and 4.3 |

## States

| Node | State | What happens |
| --- | --- | --- |
| **4.1** | The list | Rows sorted by name. **No loading state for the table**, for the reason above. Arriving here from 4.5, a definition that has just run, is a navigation into a rendered list and not a state of this node |
| **4.2** | **No metrics yet** | The count at zero, the structure of the list retained, one sentence, one route |
| **4.3** | **Search results** | The query still in the field, the matches, the count line. And the no-match case below |
| | Offline or degraded | The page renders and search says it cannot reach the registry. Node 0.1 |

### 4.2 is not an edge case, it is the first screen of every workspace

The map routes 3.3, testing a connection, straight into 4.2. **So the empty registry is what every analyst sees immediately after connecting their first source**, which makes it the one screen in cluster 4 that has to teach something.

**What it does:** keeps the structure of the list visible so it shows what the list would hold, says in one sentence that nothing is defined yet, and offers exactly one route, the same primary action the full page carries.

**What it refuses:** a multi step onboarding checklist. There is no second step to check off, cluster 5 is entirely ПОТІМ, and a checklist with one item is a progress bar over a single button.

### 4.3, and the no-match case is where a dead end would be cheapest to leave

**The structure comes from the bank:** a line saying there is no match, a line of advice, and one reset action, which is what stops this being a dead end.

**And one thing more, which is a variant rather than a new block.** The primary action is already on the page, so in the no-match state **it carries the query**: searching for a metric that does not exist is the strongest available signal that it should. A no-match in the analyst's own registry becomes the activation moment instead of an apology.

**The count line says zero out loud.** "0 of 12" is cheap honesty, and it is the case that most needs saying.

## Primary call to action

**Define a metric.** One, and it is the same button in all three states, prefilled in 4.3.

## Emotional support

**P2, emotional.** Stop being the bottleneck, and feel the work outlives my presence → **the registry shows what already answers without them** → block 1, the count beside the title.

**The count is doing more work than it looks.** It is the only place in the product where the analyst sees the accumulated result of writing definitions down, and it is the closest thing they have to a sense of whether the work is done. The mechanism is a number in a title, which is why it is cheap enough to be worth naming.

**Nothing from the reader's half of that table lands here.** The reader never sees this page.

## Responsive

**360: the list is not a table.** Each row is three lines, name, state with age, owner, and the header row is gone because there is nothing to align. **No horizontal scroll, ever:** a table that scrolls sideways at 360 hides the state column, which is the column the row exists to carry.

**That breaks the best block in the type, so it is re-implemented rather than dropped.** The bank's strongest T2 row is the empty state rendered inside the table with the header still visible, because an empty list that keeps its columns shows what the list would hold. At 360 there is no header, so **4.2 shows one ghost row with the field labels in place**. Same mechanism, different mechanics.

**Wide:** three columns, the sort arrow on the first, the primary action to the right of the title. The column widths are set by the state column, which is the longest and the one that must never wrap to three lines.

---

## SEO block

**`noindex`, no schema, no SEO text.** Behind sign-in, and the rows are the customer's metrics. Section 11 is one line here by design.
