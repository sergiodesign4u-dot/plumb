# Screens and states

Stage 04, step 1. Built from `ia/docs/sitemap.md`, `ia/docs/flows.md`, `ia/docs/pages/*.md` and `research/docs/jtbd.md`. **Nothing here is chosen by taste:** the screens are the ones flow 1 walks, the states are the ones each node's specification carries, and the scope labels are carried over from the IA rather than re-derived.

**Reference screen: node 2.1, the number card. First flow assembled end to end: flow 1, the main job.** Taken at step 1 on 2026-08-18, with the candidates and the arguments at the end of this file. This line is the single place either is recorded: stages 05 and 06 read the reference screen from here rather than re-deriving it, and `CLAUDE.md` will carry the path to this file rather than a second copy of the name.

---

## The main flow, and why these three screens

**Flow 1 in `ia/docs/flows.md` is the reader's path to the main job**, and it is the only flow whose closing node is the job this product exists for. It walks node 2.1 and node 2.7. Node 2.8 joins them because `CLAUDE.md` already fixes the build order: **the first test of the riskiest assumption needs four capabilities and touches exactly three screens, the card, its source layer and sending it as a link.** That decision was taken at the CJM and repeated in the IA, so this stage inherits it instead of picking a starting point of its own.

The analyst's three screens (3.1, 3.2, 4.1, 4.4 and their states) are what make these work against real data. They are not in this round, and they are not forgotten: they are the estimate at step 8.

| Screen | Node | Job it closes | Place in the flow | Scope |
| --- | --- | --- | --- | --- |
| **The number card** | 2.1 | Main job, plus R1 and R4 on the same screen | The first node after arrival, at zero taps. The activation node | MVP |
| **Where this number came from** | 2.7 | Main job, depth on request | Opens from block 6 of the card, one action from arrival | MVP |
| **Send this number** | 2.8 | R2 answer once, and P1 social, which the IA marks thin | A dialog over the card, block 7 | MVP |

---

## Matrix, screen by state

**Rows are screens, columns are state classes.** The four system states are the floor, not the set: the real set comes from the "States" section of each node. Every "-" carries a numbered reason, because a dash with no reason cannot be told apart from an omission, and stage 05 step 4 and stage 07 step 2 read this table as the complete list of states in the product.

| Screen | Loading | Ordinary (success) | Empty | Error | Role: reader | Role: analyst | Domain states | Transitional |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **2.1 The number card** | ✓ 2.2 | ✓ 2.3, as of | ✓ 2.6 | - [1] | ✓ the base case | ✓ same card plus one affordance | ✓ 2.4, 2.5, 2.10, and two combinations | - [2] |
| **2.7 Where this number came from** | - [3] | ✓ open, all six rows | - [4] | - [1] | ✓ | ✓ no difference [5] | ✓ open while the source is down, open on a bare URL, open with restricted visibility | ✓ the section opens and closes |
| **2.8 Send this number** | - [6] | ✓ copied | - [7] | - [8] | ✓ | ✓ same dialog [5] | ✓ sending a card that is in the source-down state | ✓ the dialog opens and closes |

**Reasons for every dash.**

1. **There is no error state on either node, and it is a design decision rather than a gap.** Design principle 2: doubt is a state, not an error and not an incident. Everything that would be an error page in another product is a named domain state here, with its own wording fixed at node 0.4. A card that cannot reach its source shows "source is down", not an error.
2. The card has no transitional state of its own. Opening the source layer and opening the send dialog are transitions **into the other two screens**, and they are counted there.
3. Node 2.7 states it directly: loading is not a state here. The six rows are metadata we already hold, so they render with the card. **Only the value is ever queried at read time.**
4. The six rows are always present when the section can open at all. There is no case where the section opens and has nothing in it.
5. The analyst sees the same screen. Node 2.1 records why: a separate analyst view of the same number is how two people end up with two different numbers, which is the reconciliation this product exists to remove. The analyst's one difference, "edit definition", sits on the card and nowhere else.
6. The link exists before the dialog opens, so there is nothing to wait for.
7. There is always a link to show.
8. **Settled at node 2.8 and recorded at node 0.3:** the reader never needs a failure toast. Their only action is copying, and the link is on screen and selectable, so the fallback is already visible. The assertive announcement path is analyst-only.

---

## Page inventory, one page per state

Base file is the ordinary condition; every other state is its own page so the prototype can navigate between them. File names come from the node names in `ia/docs/sitemap.md`.

### 2.1 The number card

| Page | Node | What it shows | Route out |
| --- | --- | --- | --- |
| `number-card.html` | 2.3 | The ordinary condition: value, as of, relative age, expected cadence | Stays. Source layer and send are the two secondary actions |
| `number-card-loading.html` | 2.2 | **Only the value is waiting.** Definition, attribution, state line and the source line are already rendered | 2.3, 2.4 or 2.6 |
| `number-card-source-down.html` | 2.4 | No value at all. Definition, owner and last successful run stay | 2.10 |
| `number-card-definition-changed.html` | 2.5 | Current value, the change, the previous definition, who changed it and when | 2.7 |
| `number-card-empty.html` | 2.6 | **Never a zero.** The time it ran and the reason in words | 2.7 |
| `number-card-owner-only.html` | 2.10 | Name and date only, no value. A partial close | End of the reader's route, with the owner named |
| `number-card-analyst.html` | 2.1, role | The reader's card plus one affordance, "edit definition", beside the definition block | The definition editor, which is node 4.7 and is not in this round |
| `number-card-down-and-changed.html` | 2.4 + 2.5 | Both, source down first. From the combination rules at node 0.4 | 2.10 |
| `number-card-empty-and-changed.html` | 2.6 + 2.5 | Both, empty first | 2.7 |

**Source down and empty is impossible** by the same table, so it is not drawn.

### 2.7 Where this number came from

| Page | What it shows | Route out |
| --- | --- | --- |
| `source-layer.html` | Open, all six rows | Closes back to the card |
| `source-layer-source-down.html` | All six rows, and this is where they matter most: the value is missing and everything else is still true | Back to 2.4 |
| `source-layer-bare-url.html` | Five rows. The definition this ran against is the current one and says so, because there is no earlier reading to compare with | Back to the card |

### 2.8 Send this number

| Page | What it shows | Route out |
| --- | --- | --- |
| `send.html` | The link, visible and selected on open | Copy, or close back to the card |
| `send-copied.html` | The success message from node 0.3, auto-dismissing | Back to the card |
| `send-clipboard-unavailable.html` | **No error toast.** The link stays on screen and selectable | Back to the card |
| `send-source-down.html` | Sending a card that is in the source-down state. Allowed, and the recipient gets the same honest state | Back to the card |

**Fifteen pages in this round.** Nine for the card, three for the source layer, four for the send dialog, minus the two deferred below.

---

## Deferred, so that they are deferred rather than forgotten

| Page | Node | Why it is not in this round |
| --- | --- | --- |
| `number-card-restricted.html` | 2.9 | ПОТІМ at the IA audit. Restriction is a workspace policy, cluster 5 is entirely deferred, so in MVP every card is readable and this state cannot fire |
| `source-layer-restricted.html` | 2.7, fourth state | **A scope discrepancy, named rather than fixed quietly.** The state is listed in the specification of 2.7 with no scope label of its own, and its trigger is the same workspace policy that sent 2.9 to ПОТІМ. It cannot fire in MVP for the same reason. **The IA is where this is repaired**, and it is a label, not a structure, so it does not block this stage |

---

## One divergence between two IA artefacts, found at this step

**`ia/docs/flows.md` flow 4 carries a node the send specification does not have.** The flow draws "Error: the link could not be created, returns to B1" as one of the four recoverable errors of the analyst's setup path. Node 2.8's state table has four states and none of them is that one, and node 0.3 records the reader's side as settled: no failure toast, because the link is on screen before anything is copied.

**Not repaired here and not drawn here.** It sits in the analyst's flow, which is the step 8 round, and the two readings can both be right: the link is created when the metric is saved, not when the dialog opens. **It is written down now** so that the analyst round starts by settling it in the IA rather than by inventing a state at the wireframe.

---

## The rest of the product, added at step 8

Step 1 filled this file for the main flow only, and from here it is read as the complete list of the product: stage 05 step 4 takes the tone of every state from it, stage 07 step 2 reads the component inventory out of it, and stage 12 takes the structure of everything still to be built. **Sixteen screen rows were added below**, with their states taken from the States section of each node and their scope labels carried over from `ia/docs/sitemap.md` rather than re-derived.

### The analyst, flow 4

| Screen | Node | Job | Scope | States, one page each | Pages |
| --- | --- | --- | --- | --- | --- |
| **Sign in through SSO** | 1.1 | Precondition of R5 and R2 | MVP | 1.2 the provider is answering, **with no cancel by decision**; 1.3 authentication failed, which names three different failures with the fix in a different place each time | 3 |
| **Sources** | 3.1 | The main job as a precondition | MVP | 3.5 no sources connected, **a recovery state and not an onboarding one** | 2 |
| **Connect a source** | 3.2 | R5, and the precondition | MVP | 3.3 testing, naming which half is being tried; 3.4 failed, where the node found three failures where the map said two | 3 |
| **Metric registry** | 4.1 | R2 and R5 | MVP | 4.2 no metrics yet, which is the first screen of every workspace; 4.3 search results, including the no-match case that carries the query into the primary action | 3 |
| **Define a metric** | 4.4 | R5 and R3 | MVP | 4.5 running against the source; 4.6 does not run, three named failure modes of which one does not block; 4.7 editing with the previous version and the consequence banner | 4 |

### The public surface

| Screen | Node | Job | Scope | States, one page each | Pages |
| --- | --- | --- | --- | --- | --- |
| **Product page** | 6.1 | Acquisition. **The only indexed page in the product** | MVP | Signed in as an analyst; signed in with no workspace; **the live card cannot load and renders its own source-is-down state in public** | 4 |
| **Privacy policy** | 6.5 | Legal, and an argument for a metadata-only product | MVP | None. Default is the only state | 1 |
| **Terms of service** | 6.6 | Legal | MVP | None | 1 |
| Trust and security | 6.2 | The buyer, who has no product surface | ПОТІМ | A document is requested | 2 |
| Pricing | 6.3 | Acquisition | ПОТІМ | None. No data behind the page | 1 |
| Documentation | 6.4 | Both | ПОТІМ | None | 1 |
| Support and contact | 6.7 | Both | ПОТІМ | Message sent | 2 |

### System and workspace

| Screen | Node | Job | Scope | States, one page each | Pages |
| --- | --- | --- | --- | --- | --- |
| **404** | 7.1 | **The reader most of all:** a dead link is their first contact with us | MVP | None, but it routes by role and carries the tombstone of a removed metric | 1 |
| **500** | 7.2 | Both | MVP | None | 1 |
| Maintenance | 7.3 | Both | ПОТІМ | None | 1 |
| Cookie notice | 7.4 | Legal | ПОТІМ | None | 1 |
| Workspace and people | 5.1 | **No job.** Tenancy | ПОТІМ | The last administrator, blocked inline; invitation pending; no seats left | 4 |
| Plan and seats | 5.2 | **No job.** Business model | ПОТІМ | None | 1 |

**One global component is still to be built and it is not a screen:** node 0.1, the analyst's header with Metrics, Sources, persistent search and the account corner. It is rendered by the registry, the sources list and both forms, so it becomes a render function in `wireframes/_nav.js` at the start of the round, exactly as the footer did. **The reader never sees it**, and that is the largest single decision in this IA.

## Repairs made upwards, because a wireframe may not invent

| Found at | What was wrong | The repair |
| --- | --- | --- |
| Step 6, drawing node 2.7 | The bare URL state said **five rows** and then described six, dropping none. No row can be defended as absent on a bare address: the source, the table, the last run, the cadence and the query time all still exist, and the definition row is reworded rather than removed | `ia/docs/pages/source-layer.md` and its render now say six rows, with the definition row worded as the current one. **The count was the error, not the description** |

## What the flow walk found, step 7

The prototype was walked by clicks along `ia/docs/flows.md`, and the link graph was read mechanically as well, because a walk finds what a graph cannot and the reverse is just as true.

**Two pages are exceptional by design, and both are named rather than repaired.**

- **`number-card-owner-only.html` has no exit at all.** It is node 2.10, a partial close: somebody to ask and no number to use. The reader has no home, no menu and no account, so there is genuinely nowhere for them to go. The IA argued this narrowing rather than accepting it, and inventing a way out here would be a fourth route the product does not have. In the prototype the panel is the way back, and the panel is not part of the product.
- **`number-card-loading.html` has nothing linking to it.** It is an arrival state: a person gets there by opening the address, not by pressing anything. Every other arrival state, the analyst's card and the two combinations, is now reachable from the state it follows, but nothing precedes the first read.

**Two mechanics were decided during the wiring.**

- **Closing the provenance section returns to the card state you came from**, not to the ordinary card. Node 2.7 already required it: the open state is a real URL change and the back button works. Verified by clicks: empty card, open, close, and the empty card comes back.
- **Closing the send dialog returns to its card explicitly**, without stepping through history. After a copy the previous page is the dialog itself, and a Close that lands on the dialog it just closed is not a close.

### One finding for the matrix, not repaired here

**State combinations across two screens are not in the matrix, and the walk makes them visible.** Opening the provenance section from the empty card shows the ordinary card above the six rows, and copying a link from the source-down card lands on the one "copied" page, whose card is the ordinary one. Neither is drawn wrongly: the matrix carries three states for node 2.7 and one copied state for node 2.8, and those are the states the IA specifies.

**The question this raises is real and belongs to the IA rather than to a wireframe:** whether a state of the card is inherited by the section and the dialog opened on top of it, or whether they are independent. Node 2.7 answers it for one case only, the source being down, which suggests inheritance was intended and was written once rather than as a rule. Carried into the critique at step 9.

## The two choices, as they were taken

### Reference screen, the candidates

| Candidate | What it feeds | The argument against |
| --- | --- | --- |
| **2.1 The number card** | Nine pages in this round come from its template. It is also rendered live inside node 6.1, and its compact form is the row of the registry and of search results, which the node records as three copies to walk | It carries no global navigation, so the analyst's header and the listing template are not established by it |
| 4.1 The metric registry | The canonical listing feeds 3.1, 3.5, 4.2 and 4.3, and it does establish the global header and the account corner | It is the secondary persona's screen. Building the planet-setting screen for the persona the interface is deliberately not built around inverts the priority the IA spent a stage defending, and none of its five pages are in this round |

### First flow, and it follows from the reference screen

| Candidate | Why |
| --- | --- |
| **Flow 1, the main job** | It is the flow the reference screen lives in, it closes the job the product exists for, and it is three screens deep with fifteen pages, so it is assembled end to end cheaply |
| Flow 4, the analyst's setup | Six screens, four loading states and four errors. It is the largest flow in the product and it reuses nothing that exists yet |

---

## Style consolidation, step 8

The fan-out wrote its CSS inline by design, one marked block per screen, because nine agents cannot write into one stylesheet without colliding. This is the pass that folds it back. **Rules were moved, not edited:** each declaration block was carried across byte for byte, and the two places where that was impossible are named below.

| | Count |
| --- | --- |
| Screens in the fan-out | 18, on 36 pages |
| Distinct rules across the inline blocks | 259 |
| **Folded into `_wf.css`**, appearing on two or more screens | **233** |
| Stayed inline, genuinely single use | 23 |
| Inline blocks removed entirely | 30 of 36 |

**What stayed inline, and why each one is genuinely single use.** The tombstone box and the role split on the 404, the consent banner and its host on the cookie notice, the plan cards and the FAQ on pricing, the progress block on the sign-in loading state, the error banner on the sign-in failure, and the gate form on the trust document request. One block stayed by explicit instruction from its author and is marked "prototype only, do not fold": the second title on the search results page, which exists because one file can only be one page.

### Six collisions, which is what the fold exists to find

Folding turned nine private stylesheets into one, and six selectors turned out to be defined twice with different bodies. **This is the defect the consolidation step exists to catch:** left alone it reaches stage 07 as three versions of a card and two grids, and it becomes visible two stages later as a fork in the tokens.

| Selector | Defined by | Resolution |
| --- | --- | --- |
| `.wf-list` | Sources and the registry | One definition. The registry defines the canonical listing and sources reuses it, which is what the IA already says |
| `.wf-list td`, `.wf-list th` | Both, in opposite directions | The registry's mobile-first blocks with a table restored at 700px, which both screens were already rendering |
| `.wf-label` | Connect a source, define a metric | One. The earlier definition was already dead |
| `.wf-banner`, `.wf-banner--info` | Connect a source, define a metric | One, carrying the properties the later rule did not set |
| `.wf-btn[disabled]` | Three groups | One |
| `.wf-crumb` | Workspace, the document shell | One. The earlier definition was already dead |

**The merge is neutral by construction and was proved rather than asserted.** The surviving rule sits where the last definition sat, and an earlier declaration is carried over only where the later rule did not set that property. Computed styles were read from six pages before and after the merge, across eleven properties: identical everywhere.

### Proof that the fold changed nothing

Six screenshots before, six after, at a measured 360 and on a wide canvas: the registry, the number card and the workspace, chosen as the densest screen, the screen with the most states and one from the last batch of the fan-out.

**Five of the six pairs are byte identical.** The sixth has no proof, and the reason is worth recording rather than hiding: **the registry's wide shot was taken with the viewport still narrow**, so it is a second 360 shot rather than a desktop one, and a before shot cannot be taken twice. It is kept under its honest name. For that one pair the evidence is the computed-style probe above, not pixels.

### New variables the fan-out asked for, not yet added

Every agent was told to use `var(--wf-...)` and to report anything missing rather than invent a token. Seven came back, and **44px came back from five independent screens**, which makes it a fact about the product rather than a request.

| Variable | Value | Why | Asked for by |
| --- | --- | --- | --- |
| `--wf-target` | 44px | The tap target the IA fixes at AAA, already hard-coded twice inside `_wf.css` itself | Sign in, connect a source, the document rail, pricing, workspace |
| `--wf-screen-max-wide` | 880 to 960px | A table with three columns, a form with a panel beside it and a two-column hero are not the reader's one-column card. **Three screens asked, with three different numbers**, which is a decision rather than a token | Sources, the registry, the product page |
| `--wf-border-strong` | 2px | The heavier border that marks the field that caused a failure. In a grey prototype weight is the only non-hue way to say it | Define a metric, connect a source, the system pages |
| `--wf-gate-max` | 380px | The sign-in column, narrower than a reading column | Sign in |
| `--wf-rail-w` | 168px | The document rail | The document shell |
| `--wf-aside-w` | 260px | The prerequisites panel beside the connection form | Connect a source |
| `--wf-choice-basis` | 9rem | The flex basis of a warehouse option | Connect a source |

**None has been added.** A token is a decision about the system, and the second row shows why: three screens want a wider canvas and none of them wants the same width, so adding a variable now would freeze a number nobody has argued for. They go to the critique at step 9 with the rest.
