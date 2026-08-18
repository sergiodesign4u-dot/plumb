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

## Repairs made upwards, because a wireframe may not invent

| Found at | What was wrong | The repair |
| --- | --- | --- |
| Step 6, drawing node 2.7 | The bare URL state said **five rows** and then described six, dropping none. No row can be defended as absent on a bare address: the source, the table, the last run, the cadence and the query time all still exist, and the definition row is reworded rather than removed | `ia/docs/pages/source-layer.md` and its render now say six rows, with the definition row worded as the current one. **The count was the error, not the description** |

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
