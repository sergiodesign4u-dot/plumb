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
| **B1. Send this number.** The permanent link in one action | Main, as the precondition of T1: without it the path never starts | **MVP** |

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

**Thirteen screens, eight of them MVP.** That is below the 15 to 30 boundary in `CLAUDE.md`, and there is nothing further to cut without losing work somebody does.

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
