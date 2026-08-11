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
| E7 | **Tombstone of a removed metric**, added at 03b step 7 | Three fields only: the name it had, its owner, and the date it was removed. No definition, no value, no history | The main job at its failure point. Node 7.1 is the reader's first contact when a link dies, and without this object it can only shrug |

**E7 is small on purpose and is added rather than assumed.** Node 4.4's delete confirmation already promises the reader will be told that the metric may have been removed, and node 7.1 is where that promise is either kept or broken. **A tombstone is the difference between "this is gone" and "this was *Weekly active accounts*, Dana Reyes removed it on 3 August, and she is who to ask."** It stores nothing about the reader and nothing about the data, which is the only kind of object this product adds.

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

## Node map

**This section replaces the concept sitemap of the base layer.** One list, not two. The concept diagram on `ia/concept-map.html` stays as it is, because at its own level it is honest, and it now carries a line saying it has been expanded into this.

**Language fork, checked before the first node.** `CLAUDE.md` records one language, English, so no node multiplies by language.

**How to read a node.** `X.Y` where X is the cluster and Y is a step or a state inside it. Type is page, dialog, state, flow or section. Group is `global` or `pages` and is exactly the value in `ia/_nav.js`, which is what sorts the chips on the hub. Scope is carried over from the base layer, not re-derived; derived nodes inherit the label of the screen they belong to, and the five nodes with no parent are named below.

**Eight clusters, 41 nodes, 30 of them MVP.** Four were added at step 3: three the footer promised, and the state vocabulary, which turned out to be a canonical list consumed by four surfaces rather than a paragraph inside the card. The number rose because states and dialogs are nodes now, not notes. Seven MVP screens in the base layer became 30 MVP nodes, and that is the honest count the two estimates in this stage depend on.

### Cluster 0. Global frame

| # | Name | Type | Group | Includes | Transitions | Serves | Scope |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1 | Global navigation | section | global | Metrics, Sources, persistent search, account corner | 4.1, 3.1, 5.1 | P2. **The reader never sees this** | MVP |
| 0.2 | Footer | section | global | Product identity, trust link, legal | 6.2, 6.4 | Both, minimally | MVP |
| 0.3 | Toast and inline feedback | section | global | Sent, saved, failed, retry | Returns to the originating node | Both | MVP |
| 0.4 | State vocabulary | section | global | The canonical wording and rules for as of, source is down, definition changed, empty | Consumed by 2.1, 4.1, 4.3, 4.7 | Both. **Discovered at step 3, label assigned here** | MVP |

### Cluster 1. Sign in

| # | Name | Type | Group | Includes | Transitions | Serves | Scope |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | Sign in through SSO | page | pages | Single SSO action, no password field | 1.2 | P2, precondition of R5 and R2 | MVP |
| 1.2 | Loading: the identity provider answers | state | pages | Progress, no cancel that strands the user | 3.2 first run, 4.1 after | P2 | MVP |
| 1.3 | Error: authentication failed | state | pages | Reason, retry, a route out | 1.1 | P2 | MVP |

### Cluster 2. The number card

The reader's whole product. Every node here is MVP because the card is the one thing this product has to win on.

| # | Name | Type | Group | Includes | Transitions | Serves | Scope |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | The number card | page | pages | Value, definition in words, named state, age with expected cadence, name and date on the claim | 2.7, 2.8 | P1, main job plus R1 and R4 | MVP |
| 2.2 | Loading: value queried at read time | state | pages | The value only; definition and attribution are already there | 2.3, 2.4, 2.6 | P1 | MVP |
| 2.3 | State: as of, fresh | state | pages | Timestamp, relative age, expected cadence | 2.1 | P1 | MVP |
| 2.4 | State: source is down | state | pages | No value at all, definition, owner, last successful run | 2.10 | P1, and the node where the main job and R1 join | MVP |
| 2.5 | State: definition changed after this was saved | state | pages | The change, the previous definition, who changed it and when | 2.7 | P1, R4, and R3 from the other side | MVP |
| 2.6 | Empty: the query returned nothing | state | pages | The reason in words. **Never a zero** | 2.7 | P1 | MVP |
| 2.7 | Where this number came from | section | pages | Source, last run, what it ran against. One hop, in words | 2.1 | P1 | MVP |
| 2.8 | Send this number | dialog | pages | The permanent link, one action, the moment of reading carried in it | 0.3 | Both. Delivery, not recruitment | MVP |
| 2.9 | State: not readable without an account | state | pages | What is missing and why, no login wall theatre | 2.10 or a dead end | P1 | MVP |
| 2.10 | State: the owner is named, the number is not shown | state | pages | Name and date, no value | End, partial close | P1, R1 | MVP |

### Cluster 3. Sources

| # | Name | Type | Group | Includes | Transitions | Serves | Scope |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | Sources | page | pages | List of connections, reachability, last successful run | 3.2 | P2 | MVP |
| 3.2 | Connect a source | page | pages | Warehouse type, credentials, expected cadence | 3.3 | P2, R5 and the main job as a precondition | MVP |
| 3.3 | Loading: testing the connection | state | pages | Progress, what is being tried | 3.4 or 4.2 | P2 | MVP |
| 3.4 | Error: connection failed | state | pages | Which half failed, credentials or reachability | 3.2 | P2 | MVP |
| 3.5 | Empty: no sources connected | state | pages | What stopped working, and one route. **Not a first-run screen** | 3.2 | P2 | MVP |

**3.5 was discovered at stage 03b step 6 and inherits its label from 3.1.** Cluster 4 had an empty state for its listing and cluster 3 did not, which was an omission rather than a decision: the same canonical component cannot have empty behaviour in one place and none in the other. **It is reachable only when the registry is also empty**, because a connection carrying metrics cannot be removed, which is why it is a recovery state and not an onboarding one. Specified inside `ia/docs/pages/sources.md`.

### Cluster 4. Registry and definition

| # | Name | Type | Group | Includes | Transitions | Serves | Scope |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1 | Metric registry | page | pages | List, search, owner and freshness per row | 4.4, 2.1 | P2, R2 and R5 | MVP |
| 4.2 | Empty: no metrics yet | state | pages | One route to defining the first | 4.4 | P2 | MVP |
| 4.3 | State: search results | state | pages | Matches, and a no-match case that is not a dead end | 4.1, 4.4 | P2, R2 | MVP |
| 4.4 | Define a metric | page | pages | Definition in words, owner, binding to a source | 4.5 | P2, R5 and R3 | MVP |
| 4.5 | Loading: the definition runs against the source | state | pages | Progress | 4.6 or 4.1 | P2 | MVP |
| 4.6 | Error: the definition does not run | state | pages | What failed, returns to the definition | 4.4 | P2 | MVP |
| 4.7 | State: editing a definition, previous version retained | state | pages | The change, and what it will do to cards already sent | 2.5 | P2, R3 | MVP |

### Cluster 5. Workspace

| # | Name | Type | Group | Includes | Transitions | Serves | Scope |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.1 | Workspace and people | page | pages | Members, roles | 5.2 | **No job.** Tenancy | ПОТІМ |
| 5.2 | Plan and seats | page | pages | Seats, billing | 5.1 | **No job.** Business model | ПОТІМ |

### Cluster 6. Public surface

Jobless by construction, and that is recorded rather than repaired.

| # | Name | Type | Group | Includes | Transitions | Serves | Scope |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | Product page | page | pages | The real card component rendered live | 6.3, 1.1 | Acquisition | ПОТІМ |
| 6.2 | Trust and security | page | pages | SOC 2 position, SSO, metadata only | 6.1 | The buyer, who has no product surface | ПОТІМ |
| 6.3 | Pricing | page | pages | Seats, free readers | 1.1 | Acquisition | ПОТІМ |
| 6.4 | Documentation | page | pages | How a definition is written and read | 6.1 | Both | ПОТІМ |
| 6.5 | Privacy policy | page | pages | What is stored and what is not | 6.2 | Legal, and an argument for a metadata-only product | ПОТІМ |
| 6.6 | Terms of service | page | pages | Standard US B2B terms | 6.2 | Legal, asked for in the security review | ПОТІМ |
| 6.7 | Support and contact | page | pages | A route to a person | 6.1 | Both | ПОТІМ |

### Cluster 7. System nodes

| # | Name | Type | Group | Includes | Transitions | Serves | Scope |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.1 | 404 | page | pages | What was expected here, and a route that is not a wall | 6.1 or 4.1 by role | Both, and **the reader most of all** | MVP |
| 7.2 | 500 | page | pages | What broke, what is safe to assume, a way back | Retry | Both | MVP |
| 7.3 | Maintenance | page | pages | Duration if known | Retry | Both | ПОТІМ |
| 7.4 | Cookie notice | section | global | Consent, only if anything is set | Dismiss | Legal | ПОТІМ |

### Five nodes with no parent, each named out loud

The scope label was assigned here, because there was nothing to inherit it from.

- **3.1 Sources, MVP.** It came out of the navigation: the base layer put a "Sources" item in the analyst's menu, and a menu item with no list behind it is a promise with no node.
- **0.2 Footer, MVP.** The number card is a **public page with no account**, and it cannot ship with no anchor at all for whose product this is and under what terms.
- **0.3 Toast and inline feedback, MVP.** Sending a link, saving a definition and failing at either need somewhere to say what happened.
- **7.1 404, MVP, and it matters more here than in most products.** The reader's only entrance is a link, so **a broken or expired link is their first contact with us**, not a rare edge. It must not be a wall.
- **7.2 500, MVP**, for the same reason.
- **0.4 State vocabulary, MVP.** Found while looking for what else is global. Three states are consumed by the card, the registry rows, the search results and the definition editor, and a vocabulary that is not canonical drifts: the registry would say "stale", the card "out of date" and the editor "changed".

### One discrepancy, not corrected silently

**7.4, the cookie notice, is labelled ПОТІМ** because the market is US B2B and GDPR was deliberately deferred. But the **public card with no account will almost certainly carry analytics**, and at that point the question stops being legal and becomes a product question on the very screen where we promise to store nothing about the reader. The label stays ПОТІМ, the discrepancy is named, and step 7 comes back to it.

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
| Analyst, secondary | R5, define a metric and its owner, **returning run** | 2 after sign-in: Metrics, then new metric |
| Analyst, secondary | R5, **first run for the workspace**, through connecting a source | 3 after sign-in. Corrected at the second critique: the earlier table gave only the returning number, and the first-run branch had just been added to the flow |
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

---

## Critique 2: consistency, purity, and what the first round of repairs broke

Step 7, in two instruments again, and the division was natural: the first two axes are mechanical and went to Codex, while the third checks the consequences of repairs we made ourselves and stayed with us. **Seven findings, none withdrawn at verification, no verdict divergence this time.**

| # | Axis | Where | What | Found by |
| --- | --- | --- | --- | --- |
| 1 | Consistency | Four files | **The same screen carried three different names**: "A1. The number card opens, no account", "A1. The card, name and date already visible", "A1. The number card". Now one name everywhere, with the situation described outside the node | Codex |
| 2 | Purity | The concept canvas | The words "ORPHAN, tenancy", "ORPHAN, business model" and "jobless by construction" had leaked onto the diagram. That is judgement rather than concept. **Absence of a job tag is now the whole signal**, which is quieter and says the same thing | Codex |
| 3 | Not broken | Flow 1 | **The worst of them, and it was ours.** Adding a route out of the reader's dead end routed it into the closed-job node, so the map briefly claimed the main job could close with no number ever shown. It now ends at a partial close: somebody to ask, and no number to use | Claude |
| 4 | Not broken | Flow 1 | The empty-result state hopped through the attribution node on its way to the end, which made no sense: attribution is on the card either way. It now goes to the same decision every other path goes to | Claude |
| 5 | Not broken | Flows 1 and 2 | The two flows disagreed about whether an ownerless definition is possible. A second diamond in flow 1 would double an already long diagram, so the resolution is a stated note: a definition cannot be saved without an owner, and **the case that nothing prevents is an owner who has left the company** | Claude |
| 6 | Not broken | Flow 4 | Adding the first-run branch made the diagram readable as a general analyst session, which it is not. Stated: this flow is the definition job on both branches, and somebody who only wants to send an existing number is in flow 1 | Claude |
| 7 | Not broken | Navigation | The tap table silently described only the returning run after the first-run branch was added. Both numbers are now given | Claude |

**What the second pass was really for, stated plainly.** Four of its seven findings were damage caused by the first round of repairs, and all four were ours rather than Codex's, because they are consequences of edits only the editor can trace. A critique that looked only for original defects would have shipped a map claiming the main job closes without a number.

**Two axes came back with a single finding each and nothing else.** Every screen node in the flows exists in the concept sitemap and the reverse; the four diagrams in the page match the four in the file line for line; every link resolves; both pages take their sidebar from the one registry; and the matrices in the file and on the page carry the same nine screens and six jobs.
