# IA base: entities and the concept sitemap

Stage 03a of the pipeline. Built from `research/docs/personas.md`, `jtbd.md`, `cjm-as-is.md` and `cjm-to-be.md`. **Nothing here is researched anew:** this stage structures what the earlier ones collected.

**The rule this file is held to: every screen serves a job.** A screen that serves none is marked `[ORPHAN]` rather than left as a quiet node. A screen that is a step of the main path is not an orphan: it traces to a phase of `cjm-to-be.md` plus the main job, because by our own definition the steps of a journey do not become separate jobs.

**Project boundary, from `CLAUDE.md`:** one language, English. No fork is taken at step 2.

---

## Entities

Objects first, screens second. Screens only show objects, and objects grow out of jobs.

| # | Entity | What it is made of | The job that produces it |
| --- | --- | --- | --- |
| E1 | **Metric** | Name, a pointer to the current definition, a binding to a source, a permanent URL | R5 produces it as an object, the main job reads it |
| E2 | **Definition version** | The text in words, who declared it, when it was declared, a pointer to the previous one | R5 to write it once, R1 for the name and date on the claim, R3 for the correction travelling, R4 for having something to compare against |
| E3 | **Source connection** | Warehouse type, reachability, time of the last successful run, expected cadence | The main job **as a precondition**: with no source a number has no age and no state. The wording is inherited from `jtbd.md`, which already calls this a precondition rather than a job of its own |
| E4 | **Owner of the claim** | Name, role, a route for reaching them `[?]` | R1. **The `[?]` is load-bearing:** asking a specific person requires a route, the reader has no account, and whether we may show a contact at all is unknown |
| E5 | **Analyst account** | Name, email, SSO identity, workspace | R5 and R2: writing and owning definitions requires signing in |
| E6 | **Reading**, resolved at step 4 | Not an object. The moment of reading travels **encoded in the link**, and nothing about the reader is stored | R4 |

**E6 deserved its own paragraph, because it was the first real fork in this IA, and step 4 settled it.** The backlog requires a definition snapshot at read time, without which the state "definition changed after this was saved" has nothing to compare against. But T1 gave us **one permanent URL per metric**, not per reading. So either the snapshot is encoded in the link itself and there is no entity, or a reading is a stored object, and then we are storing something about a reader who has no account.

**Resolved in flow 3: the moment is carried in the link, and a reading is not an object.** The flow showed there is no third option. If the link does not carry the moment it was read, the state degrades to "the definition changed at some point", which asks the reader to remember when they took the number, and that is the very thing they came to us to avoid. Encoding it keeps the permanent URL per metric and adds no record about an accountless reader.

### Under question, because no job sits under them

- **Workspace.** It lives in the `aarrr.md` metrics and is needed for tenancy and billing, and it closes no job. It is here rather than in the main list for exactly that reason.
- **The link as an object.** The success signal for sending a metric as a link counts links that went outside, but that is either a property of the metric or an analytics event, not an object a person handles. `[?]` until step 2.

### Deliberately not entities, each with its reason

- **A state is not an entity, and this is the most important line in the inventory.** "As of", "source is down" and "definition changed after this was saved" are **computed** from E3 and E2 and store nothing. Design principle 2 forbids them becoming an object with a lifecycle: ours is an annotation on a number, with no assignee, no severity and nothing to close. The moment a state gets its own entity it gets a list, a status and a queue, and we have built an incident tool.
- **The registry is not an entity**, it is a view over E1. There is one object there, the metric.
- **The reader has no user object at all.** The primary persona has no account by decision, so nothing in the product represents them. This is a consequence rather than an omission, and it lands in step 2: **no "my profile", no "my saved", no "my settings" for the person the interface is built around.**

### Relations

A metric has one current definition version and a pointer to the previous one; nothing deeper is stored, because version history deeper than the previous definition is out of scope. A metric points to one source connection. A definition version points to one owner. A reading, if it turns out to be an object, points to a metric and a version. An analyst account belongs to a workspace.

---

## Concept sitemap

**Language fork, checked before the first node.** `CLAUDE.md` records one language, English, so no node multiplies by language and no fork is taken. Recorded here so that 03b does not ask again.

Screens are grouped by the intent of the person, not by sections of a site. Depth is deliberately absent: levels are assigned at step 3, so that there is something to count taps on.

### A. Read a number and work out whether I can stand behind it &nbsp; primary

| Screen | Job | Scope |
| --- | --- | --- |
| **A1. The number card.** The value, the definition in words, the three named states, age with the expectation beside it, and the name and date on the claim. Permanent URL, no account | Main, R1, R4 | **MVP** |
| **A2. Where this number came from.** The source, when its query last ran, what it ran against. Opens on one action from A1 | Main | **MVP** |

### B. Hand the number on &nbsp; primary

| Screen | Job | Scope |
| --- | --- | --- |
| **B1. Send this number.** The permanent link in one action | **R2** for the analyst, who sends the answer instead of re-explaining it, and the **main job as a precondition**: without it the reader's path never starts. Corrected at the critique, where this tag and the matrix disagreed | **MVP** |

### C. Bring a metric under control &nbsp; secondary

| Screen | Job | Scope |
| --- | --- | --- |
| **C1. Connect a source** | Main as a precondition, R5 | **MVP** |
| **C2. Define a metric.** Definition text, owner, binding to a source | R5, R3 | **MVP** |
| **C3. Metric registry.** The list, with search and jump by name | R2, R5 | **MVP** |

**Search gets no screen of its own.** It is a component on C3 and in the analyst's global navigation, not a place. Backlog item 11 therefore has a home, and no screen was invented to fill a row in the matrix.

### D. Sign in and be accountable &nbsp; secondary

| Screen | Job | Scope |
| --- | --- | --- |
| **D1. Sign in through SSO** | Precondition of R5 and R2 | **MVP** |
| **D2. Workspace and people** | `[ORPHAN]`, tenancy rather than anybody's job | ПОТІМ |
| **D3. Plan and seats** | `[ORPHAN]`, the business model rather than anybody's job | ПОТІМ |

### E. The public surface &nbsp; none of the personas

Four screens, and **all four are jobless by construction**: the product page where the real card component renders, the trust page (SOC 2, SSO, metadata only), pricing, and documentation. All **ПОТІМ**.

`CLAUDE.md` already says the two growth mechanics carry no job, and that the buyer is deliberately given no product surface while still imposing a trust surface on the IA. This cluster therefore **stands apart and does not enter the traceability matrix on equal footing** with the rest. Otherwise four marketing pages would read as work somebody is doing.

### What was deliberately not added

- **There is no "what changed in the definition" screen, and that is not an omission.** T5 considered a diff of the two definitions and **rejected it**, on the grounds that it answers a question the reader did not ask. The previous definition lives as a line inside the changed state on A1. Adding the screen here would have silently cancelled our own step 7 decision.
- **There are no states in this map at all.** They arrive as nodes in the flows at step 4.

### Check against the chosen UX pattern

The pattern is **evidence on the claim**: trust information lives on the object being read and travels with it, one line immediately, depth on request. **The map implements it.** A1 carries the evidence, A2 is the depth, and there is no dedicated doubt surface, because that pattern was rejected at stage 01.

**Exactly one thing can work against the pattern, and it is named rather than left to be discovered: C3.** A registry with search is the rejected "catalog and search" pattern in its pure form. It stays, because it is the analyst's instrument, and the guard is a single rule: **C3 must never appear in the reader's navigation.** The moment the registry becomes the reader's entry point, we have changed the pattern without saying so. This is carried into the navigation model at step 3 as a rule.

### Second slice, against the entity inventory

Every entity has at least one screen where it is seen or acted on. Metric on A1, C2 and C3. Definition version visible on A1, written on C2. Source connection visible on A2, managed on C1. Owner visible on A1, set on C2. Analyst account on D1 and D2. Workspace on D2. The link on B1. **No entity is unused and no screen is missing.**

**E6, the reading, is covered by the state on A1**, and that gives the first argument in the fork left open at step 1. If the snapshot is encoded in the link, no separate object and no separate screen are needed at all. If a reading is stored, an object about an accountless reader appears. **The map leans towards encoding it in the link**, and the flows at step 4 settle it.

**Thirteen screens, seven of them MVP.** (Corrected at step 5 while the estimate was being counted: the first pass said eight.) That is below the 15 to 30 boundary in `CLAUDE.md`, and there is nothing further to cut without losing work somebody does.

---

## Navigation

### The finding that shapes this whole section

**The primary persona has no global navigation, and that is the design rather than a gap.** The reader arrives by a link, holds no account, and the strongest measurement in this research says a destination they are expected to travel to is entered once or twice a year (`CLAUDE.md`, rule 5). So the reader's navigation is the card itself and the two actions on it. Global navigation in this product belongs to the **secondary** persona.

Written down because it is the kind of thing a later stage silently repairs by adding a header with a logo and a menu, which would turn the card into a page of a site the reader has no reason to be on.

### Global navigation, for the analyst

| Item | Cluster it enters | The job behind it |
| --- | --- | --- |
| **Metrics** | C3, the registry | R2, answer once; R5, the definition stops living in a head |
| **Sources** | C1 | The main job as a precondition: with no source there is no age and no state |
| Account corner | D1, D2, D3 | **None.** Tenancy and billing, and it is marked jobless rather than dressed up |

**Two items, not the three to five the guideline suggests, and the range was not padded.** There are two analyst intents in this product, bringing metrics under control and keeping a source connected. A third item would have to be invented from other people's menus, which is exactly what this stage forbids. **Search is global but is not an item:** it is a persistent affordance over C3, present on every analyst screen.

### Levels, assigned before any tap is counted

**The reader.** Level 1 is A1, reached from outside by a link. Level 2 is A2 and B1, both opened from A1. There is no level 3.

**The analyst.** Sign-in (D1) is a gate before level 1, not a level. Level 1 is C3 and C1. Level 2 is C2, A1 opened from the registry, and B1. Level 3 is A2, D2 and D3.

**First run and returning run land in different places, and the critique found that neither artefact said so.** On the first run for a workspace, sign-in leads to connecting a source, because a registry with no source behind it can hold nothing. On every run after that, sign-in lands on the registry. The concept map drew one order and the flow drew the other, and both were right about a case neither named.

### Depth in taps

| Persona | Job | Taps |
| --- | --- | --- |
| **Reader, primary** | **Main job**, knowing how far the number can be trusted | **0.** Arrival is the answer: the definition, the states, the age and the attribution are all on A1 |
| Reader, primary | R1, who is answerable | **0.** The name and date are on the claim, not behind an action |
| Reader, primary | Depth, where the number came from | 1 |
| Analyst, secondary | R5, define a metric and its owner | 2 after sign-in: Metrics, then new metric |
| Analyst, secondary | R2, answer once by sending the answer | 3 after sign-in: Metrics, open the card, send |

Everything is within three, and the primary path is at zero, which is the entire point of the product.

### What was flattened, and what it cost

The instruction is to name the price, not to defend the depth.

- **The reader's path was flattened to nothing by making A1 the landing screen.** The price is real and it is paid by the reader: **they can only reach a metric somebody sent them a link to.** There is no browsing, no second metric, no way back to a first one. Giving them the registry would fix that and would cancel the chosen UX pattern, so the cost is accepted deliberately.
- **C2 hangs off the registry rather than under a source.** The price is that a metric can be defined before its source binding is proven, so a failure that could have been prevented structurally becomes an error state inside C2 instead.

### Global, contextual, deep

- **Global, always visible:** for the analyst, Metrics, Sources, search and the account corner. **For the reader, nothing.** The card carries its own affordances and nothing else.
- **Contextual, appears in the flow:** A2 and B1 from the card, C2 from the registry or from a source, D1 only when nobody is signed in.
- **Deep, rare:** D2, D3, and the public surface, which is not in-app navigation at all.

### Two rules this section hands forward

1. **C3 never appears in the reader's navigation.** A registry with search is the rejected "catalog and search" pattern, and the moment it becomes the reader's entry point we have changed the chosen pattern without saying so.
2. **A reader who lands on a card they cannot see has nowhere to go**, because they have no home, no menu and no account. That is a dead end created by the flattening above, and it is an input to the flows at step 4 rather than something to be discovered in wireframes.

### Where activation sits

Activation is the first time a metric card is opened by somebody other than the author of its definition (`aarrr.md`). In navigation terms that is **A1 at level 1, reached by link, at zero taps from arrival**. It is named as a node in the main flow at step 4 rather than left implied.

---

## Traceability

Rows are the **functional** jobs from `jtbd.md`. Emotional and social jobs are not here: they are not closed by a screen, and they get their own table below. Columns are every screen in the concept sitemap except the public cluster, which stands outside by the decision at step 2.

**Two marks, not one, and the second exists so that no tick is faked.**

- **X** means the screen takes part in closing the job.
- **p** means the screen is a **precondition**: the job cannot happen without it, and it does not close any part of it. `jtbd.md` already treats the source connection this way, so the category is inherited rather than invented.

| Job | A1 card | A2 source | B1 send | C1 connect | C2 define | C3 registry | D1 sign in | D2 workspace | D3 plan |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Main.** How far the number can be trusted | **X** T1, T2 | **X** T3 | p | p | p | | | | |
| **R1.** Who is answerable | **X** T4 | | | | **X** owner is set here | | | | |
| **R2.** Answer once | **X** the answer keeps answering | | **X** send the link instead of re-explaining | | | **X** the standing answer lives here | p | | |
| **R3.** The correction travels | **X** the changed state carries it | | | | **X** the correction is made here | | p | | |
| **R4.** The old figure does not travel as new | **X** T5, plus the moment carried in the link | | | | | | | | |
| **R5.** The definition stops living in a head | | | | **X** binding to a source | **X** | **X** | p | | |

### Defects, job orphans first because they cost more

**Job orphans: none.** Every functional job has at least one screen where it is closed. That matters more than the screen side: a job with no screen means a person has nowhere to do their work, while a screen with no job only means we built ballast.

**Screen orphans: two, D2 and D3.** Both were already marked `[ORPHAN]` at step 2 and neither gains a tick here.

| Orphan | Decision |
| --- | --- |
| **D2. Workspace and people** | **Deliberately in the backlog, and the row stays empty.** A workspace with more than one analyst has to be administrable, so it is not deleted; it serves tenancy rather than anybody's job, so it earns no MVP surface. An empty row that is marked is an honest state, and putting a tick here to tidy the table would be the defect this stage exists to catch |
| **D3. Plan and seats** | **Deliberately in the backlog.** It hangs off the business model hypothesis, which is still open in `research.md`: this market has no reader-pricing norm to inherit, and we have not decided ours |

**One MVP screen carries no X at all, and it is named rather than quietly ticked: D1, sign in.** It is not an orphan, because it is a precondition of three jobs. It is also the screen most likely to grow: **sign-in is a gate, not a place**, and if it ever acquires product surface, that is the moment to come back to this line.

### Scope row and the estimate

| | A1 | A2 | B1 | C1 | C2 | C3 | D1 | D2 | D3 | Public cluster |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Scope** | MVP | MVP | MVP | MVP | MVP | MVP | MVP | ПОТІМ | ПОТІМ | ПОТІМ, four screens |

**Estimate: 7 screens MVP, 6 ПОТІМ, 13 in total.** This is the gate on the size of the product: 03b writes up the nodes, 04 draws the screens and 07 colours them, and all three start from the MVP subset rather than the whole map.

**A narrower subset still, carried from the CJM backlog.** The first test of the riskiest assumption needs four capabilities, which touch **three screens: A1, A2 and B1**. The analyst's three MVP screens are what make those work with real data, not what the test needs. Recorded because it is the only place where the order of building is visible.

### Emotional and social jobs, and what actually supports them

These are not closed by a screen. Asking where a person does them is meaningless, and a tick invented to fill the row is worse than an honest gap. The column that matters is the **mechanism**: a state, a piece of microcopy, a proof of trust, a behaviour after an error, an order of blocks. The detail layer of the IA takes states and trust proofs from this table, and stage 05 takes its input to tone from it.

| Job | Mechanism | Where it lives | What supports it |
| --- | --- | --- | --- |
| **P1, emotional.** Stop feeling exposed when presenting a number I did not compute myself | Two mechanisms, and they work together. **A name and a date beside the value**, so the reader is not the only evidence for their own number. And **trouble named in words rather than raised as an alarm**, so a problem the reader did not cause reads as a property of the number rather than a failure of theirs | A1, the attribution line and the state line | `personas.md`, P1 motivation, from the brief and `[?]`. `benchmark.md` criteria 5 and 8 |
| **P2, emotional.** Stop being the bottleneck, and feel the work outlives my presence | **The definition answers in their absence**, and the registry shows what already answers without them. The mechanism is the permanence of the link, not a notification | C2 and C3 to write it, A1 when somebody else opens it | `discourse.getdbt.com/t/712`, the same question reaching the analyst repeatedly. `jtbd.md` R2 |
| **P1, social.** Be seen as somebody who checks rather than somebody who forwards | **Thin, and named as thin.** The only mechanism we have is that sending the card instead of the bare figure is itself a visible act of checking: the provenance travels with the number to whoever receives it. There is no profile, no history and no activity, by decision | B1, and A1 as rendered for the recipient | **`[?]` throughout.** The job is a hypothesis in `jtbd.md`, and nothing in the research says anybody wants to be seen this way. Open question rather than a defect |
| **P2, social.** Be the person whose numbers are trusted | **Attribution on the claim**, permanently and visibly | A1 attribution, C2 owner field | `CLAUDE.md`, stated verbatim. `benchmark.md`, where no product of five scores above 3 |

**One risk in that last row, worth naming here rather than discovering at stage 06.** The mechanism that builds an analyst's reputation is the same one that exposes it: their name sits on every number, including the ones that break. Nothing in the research says analysts want that. If they do not, the attribution that serves R1 for the reader is the thing that makes the analyst resist the product.

### Reconciliation of the concept map with the flows

**No screen appeared in the flows that was missing from the concept map**, so no cluster gained a node. One entity changed: the reading is not an object, and the moment travels in the link. One dead end became explicit and belongs to the reader.

---

## Critique 1: defects

Step 6, in two instruments. Codex ran first and blind, read-only, over the same two files, without seeing our table. Our own pass ran in parallel on the same four classes. **Ten findings, all verified in the file before repair.** This is a working step: the result is repairs in the md and re-rendered pages, not another section on a page.

### Divergence of verdicts, first, and not settled by voting

**Codex declined to treat either red node as a defect**, on the grounds that both are recorded as deliberate consequences of decisions. We disagree on both, for different reasons, and the disagreement is put here rather than resolved by majority.

1. **The reader's dead end.** Naming a price is not the same as paying the smallest one. A card the reader may not open can still show who owns it, which closes the "who is answerable" job in its reduced form and costs no screen. **Repaired:** the route now asks whether the owner may be shown, and only the "no" branch stays red. The question is open research rather than a design choice, and it is now visible as a decision instead of buried in prose.
2. **The rejected alternative in flow 3.** The diagram kept a red node for a link carrying no reading moment, after step 4 had already decided the link always carries it. That asserts a dead end the product does not have. **A dead end drawn where none exists is as misleading as one hidden. Repaired:** the branch is gone from the route and the rejected option is stated in prose, which is where a decision belongs.

### The findings

| # | Class | Where | What | Found by |
| --- | --- | --- | --- | --- |
| 1 | Missing state | Flow 1 | No empty state for a query that ran and returned nothing. It is a different event from a source being down, and rendering it as a zero would be a bare figure of the worst kind. **This is on the primary screen** | Claude |
| 2 | Missing state | Flow 2 | No state for a definition with no owner. The job simply does not close, and the reader is back in the As-Is condition we claim to fix | Claude |
| 3 | Missing state | Flow 4 | Sign-in had no loading and no failure path, for a product that sells SSO into US B2B | both |
| 4 | Missing state | Flow 4 | The registry only ever appeared empty, so a returning analyst had no route through the flow at all | Codex |
| 5 | Missing state | Flow 4 | The definition check jumped from action to verdict with no loading between them | Codex |
| 6 | Missing state | Flow 4 | Sending a link had no failure state | Codex |
| 7 | Dead end | Flow 1 | The reader's dead end was named rather than narrowed. See the divergence above | Claude |
| 8 | Dead end | Flow 3 | A rejected alternative was drawn as a live route. See the divergence above | Claude |
| 9 | Orphan, traceability | Sitemap vs matrix | B1's job tag said "main as a precondition" in the concept sitemap and carried an X under R2 in the matrix. Two sections of one file disagreeing | Claude |
| 10 | Consistency | Map vs flow 4 | Sign-in led to the registry in the concept map and to the source in the flow. **Both were right about a case neither named:** the first run for a workspace goes through connecting a source, every later run lands on the registry | Claude |

**Deduplication.** One overlap, finding 3. The two rows were treated as one defect because they name the same screen, the same class and the same missing artefact, a path for authentication that fails. Everything else came from one instrument only, which makes it no weaker: it was simply in that instrument's radius.

### Two classes came back clean, and that is a result rather than a gap

**Excess depth: nothing.** The reader reaches the main job at zero taps and depth at one; the analyst is at two and three. Both instruments looked and neither found a job hidden below three taps.

**Orphans: nothing new.** The two screen orphans and the one precondition-only MVP screen were already named at step 5, and Codex confirmed they read as deliberate rather than accidental, which is what naming them was for.

### What the repairs changed

Six states were added, two dead ends were corrected in opposite directions, and two inconsistencies between artefacts were resolved. **Flow 4 changed the most:** it now branches on whether this is the first run for a workspace, which is the difference between an analyst setting up and an analyst returning, and no artefact had drawn that difference before.
