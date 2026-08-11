# 4.4 Define a metric, with its three states

**Page:** Define a metric · **Type:** page · **Node:** 4.4 · **Scope:** MVP · **Group:** pages

**States in the same pass:** 4.5 the definition runs against the source, 4.6 the definition does not run, 4.7 editing with the previous version retained.

**This is where the reader's product is made.** Everything node 2.1 shows was typed here by somebody else. A form that loses a definition, hides the owner field or hides a consequence costs more here than it looks, because the cost lands on a person who is not in the room.

---

## Purpose and jobs

**Purpose.** Get the definition of a metric out of one person's head and into a place that answers without them.

**Jobs served.**

| Job | How this page closes it |
| --- | --- |
| **R5.** The definition stops living in a head | The whole page. This is the node the job names |
| **R3.** The correction travels | State 4.7. Editing here is what puts state 2.5 on cards already sent |
| **R1.** Who is answerable | The owner field, which is where the name on every card comes from |

**Depth in taps:** two after sign-in on a returning run, three on the first run for a workspace, which goes through connecting a source first.

## URL and breadcrumbs

- **URL:** `/metrics/new`, and `/metrics/<id>/edit` for state 4.7
- **Breadcrumbs:** Metrics > New metric, or Metrics > *name* > Edit. The analyst has a home and a hierarchy, unlike the reader
- **Indexation:** `noindex`. Private and transactional

## Content blocks, mobile-first priority

Composition from `ia/docs/blocks.md`, type T3. Single centred column, every field full width, which is the layout that survives 360 without being redesigned.

| # | Block | Required | Note |
| --- | --- | --- | --- |
| 1 | **Name** | Yes | What the reader will see as the H1 of the card |
| 2 | **The definition, in words** | Yes | **The first and largest field.** See below |
| 3 | **Owner** | Yes | Defaults to the person writing, and can be somebody else |
| 4 | **Source** | Yes | Which connection, from node 3.1 |
| 5 | **The query** | Yes | One field. See the decision below |
| 6 | **Run it**, then **Save** | | Testing before saving, taken from R7 in the bank |
| 7 | **Delete**, apart from both | Only in edit | Destructive and primary actions at opposite ends |

### Block 2 is the row this whole type turns on

**In PowerMetrics, documented step by step, nobody ever writes what the metric means.** The flow is: choose a table or view, apply filters, choose a measure column, choose dimensions. There is no field anywhere in it for a sentence. The nearest thing is a description, whose absence dbt separately counts as a health problem.

**Here the definition in words is the first field and it is required.** Not a description, not a note, not an optional annotation. It is the object the reader is being shown, and everything else on this page exists to attach a number to it.

### Block 5, and the line this product walks

A definition in words does not compute anything. Something has to make the metric executable, and there are three ways to do it. Two are refused with reasons already on record.

| Way | Verdict |
| --- | --- |
| **Compose the query in the interface**: table, filters, measure, dimensions | **Refused.** That is a query builder, and it is the BI category this product is defined against. Type T3 in the bank refuses the filter and dimension blocks individually |
| **A SQL editor**: workbench, autocomplete, results pane, history | **Refused.** `CLAUDE.md` puts a SQL editor out of scope explicitly |
| **One field, into which the analyst pastes the query that already exists** | **Taken.** It is not an editor and it is not a builder |

**Why this is the honest answer rather than a compromise.** The secondary persona is technical, the query usually already exists in their warehouse or their dbt project, and the problem this product solves is not that the SQL is hard to write. It is that **the meaning of the result lives in somebody's head**. Block 2 is the product; block 5 is plumbing.

**The query must return exactly one value.** That constraint is what state 4.6 validates, and stating it here rather than discovering it in an error message is the difference between a rule and a surprise.

**The reader never sees the query.** Decided at node 2.7: the SQL is refused there because the definition in words is the object, and SQL beside it invites the reader to check the wrong artefact.

## What is not here, and where it went

| Not here | Why |
| --- | --- |
| **Expected cadence** | It lives on the connection at node 3.2, because that is where the domain source puts it and because one warehouse answers at one rhythm in MVP. **Per-metric cadence is a real second case and is recorded as ПОТІМ**, not forgotten |
| **A chart preview** | Design principle 3. A preview that opens on a chart makes the chart the object |
| **Tags, folders, collections** | No taxonomy. The base layer checked and found none, and inventing one to fill a field is exactly what this stage forbids |
| **Certification** | Refused at T1: a badge is a verdict with no author. The owner field is the same information with a person attached |

## Components and variants

| Component | Variant | Note |
| --- | --- | --- |
| Text field | Single line: name, owner | |
| **Text area** | **Large, for the definition.** This node defines it | Its size is a statement about which field matters, and stage 06 may not shrink it to match the others |
| Code field | Monospace, for the query. Wraps, does not truncate | |
| Select | Source connection | |
| Inline help link | Beside labels that need it, from R8 in the bank | Content, not structure |
| Banner | **Error**, at the top of the form, and **info**, stating a consequence | Both from R8. Never a toast: node 0.3 rules that what belongs to the thing on screen stays on screen |
| Button | Primary: save. Secondary: run. Destructive: delete, at the far end | |

## States

| Node | State | What happens |
| --- | --- | --- |
| **4.5** | **The definition runs against the source** | **Progress in place, naming what is being tried**, not a modal and not a progress bar over a one-step form. The form stays filled and visible behind it |
| **4.6** | **The definition does not run** | Banner at the top saying the attempt failed, **inline message on the field that caused it**, and **the form still filled in**. Both, and they are not alternatives |
| **4.7** | **Editing, previous version retained** | The same form, plus the previous version visible, plus the consequence banner. See below |
| | Saved | Returns to node 4.1 with a toast. The analyst's toast, not the reader's |

### 4.6, and the failure modes are named rather than left generic

| What happened | What the form says | Blocking |
| --- | --- | --- |
| The query did not run at all: syntax, permissions, a missing column | Which one, from the warehouse's own message, on the query field | Yes |
| The query ran and returned more than one row or column | That a metric is one value, and what came back instead | Yes |
| **The query ran and returned nothing** | That it returned nothing, as a warning rather than an error | **No.** A metric can legitimately be empty right now, and blocking would stop somebody defining a metric before the data exists |

**That third row is a decision, not an oversight.** It is also the same distinction node 0.4 draws for the reader: empty is a state, not an error, and it is never a zero.

### 4.7, and the consequence we state without a number

**Editing a definition puts state 2.5 on cards that were already sent.** That has to be visible **before** saving, which is exactly the shape of the info banner taken from R8 in the bank: *"changing these details will require a reconnect"* becomes *"cards already sent will show that this definition changed"*.

**The banner names the consequence and never a number.**

**Corrected at step 7, and the correction makes the rule stronger rather than weaker.** This node first said we *cannot* count, which was stated too broadly: nothing that identifies a reader is stored, but an anonymous server-side counter on the metric holds no identity and is what makes the activation metric in `aarrr.md` measurable at all. **The reason no number appears here is better than "we cannot": a count of links minted is not a count of people who will see the change**, and putting it in front of the analyst invites them to read it as people. Node 7.1's settlement of the cookie question owns this correction.

**One previous version, and only one.** Version history deeper than the previous definition is out of scope by the brief. 4.7 shows the current text and the one before it, side by side at width and stacked at 360.

### The open question this node owns

**An owner who has left the company.** The flows critique established that a definition cannot be saved without an owner, and that **the case nothing prevents is an owner who is gone**. This node is where that would be handled, and nothing here handles it yet. It is named rather than quietly solved, because the answer is a policy question about workspaces and cluster 5 is entirely ПОТІМ.

**What is decided:** the owner may be somebody other than the person writing, because the person who knows the definition and the person who is answerable for it are not always the same.

### Delete, and what it does to a link

A deleted metric makes every link to it dead. **The reader who follows one gets node 7.1**, which already names two causes without choosing between them: the link may have expired, or the metric may have been removed. So the confirmation here says what the reader will get, in those words. **A destructive action whose consequence is described in the same vocabulary the consequence uses is the cheapest kind of honesty available.**

## Filters and facets

None. This is a form.

## Primary call to action

**Save**, and it is enabled only after the definition has run at least once. **Run then save is the order**, taken from R7 in the bank: finding out that something is wrong while the form is open beats discovering it after a broken metric is in a list.

## Emotional support

Two mechanisms from the emotional and social table land on this node.

- **P2, emotional.** Stop being the bottleneck, and feel the work outlives my presence → **the definition answers in their absence** → blocks 2 and 3 together. The mechanism is the permanence of what is written here, not a notification.
- **P2, social.** Be the person whose numbers are trusted → **attribution on the claim** → block 3, the owner field, which is where the name on every card comes from.

**The risk that comes with the second one is carried here rather than rediscovered at stage 06.** The mechanism that builds an analyst's reputation is the same one that exposes it: their name sits on every number, including the ones that break. Nothing in the research says analysts want that, and **this is the field where they find out**.

**Microcopy is a marker.** Stage 05 writes the words for the consequence banner, the three failure messages and the delete confirmation. What this node fixes is that the places exist and what information belongs in each.

## Responsive

**360:** one column, fields full width, in block order. The definition text area is at least four lines tall so that it does not read as an afterthought next to a single-line name. The action row is sticky at the bottom so that Run and Save are reachable without scrolling back through a long query.

**Wide:** the same single column, capped. **A two-column form here would put the definition beside the query and make them look equivalent**, which is precisely the equivalence this page exists to deny.

---

## SEO block

**`noindex`, no schema, no SEO text.** Private and transactional: this page is behind sign-in and nothing on it is ours to publish. Section 11 of the template is one line here by design, and the reason is recorded rather than assumed.
