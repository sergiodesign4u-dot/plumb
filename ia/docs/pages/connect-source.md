# 3.2 Connect a source, with its two states

**Page:** Connect a source · **Type:** page · **Node:** 3.2 · **Scope:** MVP · **Group:** pages

**States in the same pass:** 3.3 testing the connection, 3.4 the connection failed.

**This is the only form in the product whose failure has its fix on the other side of a wall we cannot see.** Credentials, network policy and grants live with the customer's data team or with their IT. A form that reports "connection failed" and stops has handed somebody a dead end whose route out is not on our screen.

---

## Purpose and jobs

**Purpose.** Give the workspace something that can answer a query at read time.

**Jobs served.**

| Job | How this page closes it |
| --- | --- |
| **R5.** The definition stops living in a head | As a precondition. Nothing can be defined until this succeeds |
| **Main job, as a precondition** | Every state on the card is downstream of whether this connection answers |

**Who this is for.** The analyst. This is the most technical screen in the product and the only one where that is allowed to show.

**Depth in taps.** Two from sign-in on a returning run, and it is the first screen of a new workspace.

## URL and breadcrumbs

- **URL:** `/sources/new`, and `/sources/<id>` for a connection that exists
- **Breadcrumbs:** Sources > New connection, or Sources > *name*
- **Indexation:** `noindex`. Private, transactional, and it names infrastructure

## Content blocks, mobile-first priority

Composition from `ia/docs/blocks.md`, type T3. Single centred column, every field full width.

| # | Block | Note |
| --- | --- | --- |
| 1 | **Which warehouse** | A short list, not a page. See below |
| 2 | **What you will need**, including the addresses to allowlist | **Above the fields at 360**, beside them at width |
| 3 | **The credential fields** | Per warehouse type, in the order the warehouse's own documentation uses |
| 4 | **Expected cadence** | Ours rather than theirs, and the only field here the reader ever sees |
| 5 | **Test the connection**, then **Save** | Testing before saving, the best block in this type |
| 6 | **Delete**, apart from both | Only when the connection exists |

### Block 1 is a block and not a screen

PowerMetrics puts a "Where is your data?" page in front of the form, with tiles, a search field over the services and tags. **With three warehouse types the search field is furniture and the page is a screen that exists to be passed through.** The choice stays, as the first block of this page, and it decides which fields block 3 shows.

### Block 3 is not one block, it is one per warehouse

Snowflake, BigQuery and Postgres do not share a credential shape, so **there is no generic connection form** and pretending otherwise produces a form that cannot connect. The pattern is fixed and the fields are not:

- **The order comes from the warehouse's own documentation**, not from us, because that is the order the person is copying from.
- **The display name is last in every variant.** It is the only field on this form that is about us rather than about them.
- **Key and value pairs for extra options are refused in MVP.** An open-ended options grid is for a product supporting many drivers.

### Block 4, and the one field here that reaches the reader

**We hold no cache, so there is nothing to expire.** PowerMetrics gets freshness from a webhook the customer calls or from a cache TTL they pick. What we need from the same place is the **expected cadence**, so that "as of 14:05" has something to be measured against. Node 0.4 handed this question forward and the domain answered it: **cadence is configured, not discovered.**

**So the expected cadence is a claim, not a measurement**, and it is the only value typed on this page that the reader sees. It appears in the state line on the card and as a row in node 2.7. That makes it the field on this form with the largest consequence per keystroke, and the helper content beside it has to say so.

**The open question this creates, named rather than hidden.** **Nothing checks the declared cadence against what the source actually does.** Verifying it would need a history of run times, and we keep one overwritten timestamp rather than a history, which is the same architectural choice that keeps deep version history out of scope. So a connection can declare hourly and answer daily, and the card will say "expected hourly" in good faith. This is a real hole in the main job's promise and it is carried as an open question, not repaired by inventing storage this stage has no authority to add.

### The constraint from the bank that turns out not to apply, and why saying so matters

The bank took a constraint from PowerMetrics: **first day of week and time zone must match the warehouse, or weekly figures are wrong.** It was taken because a silent wrong number is exactly the failure this product sells against.

**Read against our own architecture, most of it does not apply.** PowerMetrics needs those settings because it **builds** queries. We do not: the analyst pastes a query that already exists and we show the one value it returns. **We never aggregate, so we have no week to start and no calendar to get wrong.**

**What survives, and where it actually lands.** A definition can still be wrong about its own week, and that is a sentence in the analyst's own words at node 4.4, not a setting on a connection. **So this form gains no field**, and the bank row is re-read rather than mechanically obeyed. A settings pair added here would be two more ways to produce a wrong number in a product whose entire claim is the opposite.

## Components and variants

| Component | Variant | Note |
| --- | --- | --- |
| Radio list | Warehouse type, three options | Not tiles, not a page |
| Text field | Credentials, per type | |
| **Secret field** | **Write only.** See the states section | Defined here, and nothing else in the product has one |
| Select | Expected cadence | |
| **Side panel** | Prerequisites. Beside the form at width, **above the fields it explains at 360** | From R7. Above, never below: information that unblocks a field is useless after it |
| Inline help link | Beside labels that need it | "Where do I find this?" Content, not structure |
| Banner | **Error** at the top of the form, and **info** stating a consequence | Both from R8. Never a toast, per node 0.3 |
| Button | Primary: save. Secondary: test. Destructive: delete, at the far end | |

**Refused: the whole thing as a modal.** A nine-field form in a modal at 360 is a scroll inside a scroll, and the node map already says this is a page.

## States

| Node | State | What happens |
| --- | --- | --- |
| **3.2** | New, or an existing connection | The same form. Editing shows the consequence banner below |
| **3.3** | **Testing** | **Progress in place, naming which half is being tried.** Not a modal and not a success window: the success of a connection is worth saying once, in place |
| **3.4** | **Failed** | Banner at the top, inline message on the field that caused it, **and the form still filled in** |
| | Saved | **First connection in a workspace: to 4.2**, the empty registry. Returning: to 3.1 |

### 3.4, and the map said two halves where testing finds three

The node map describes 3.4 as "which half failed, credentials or reachability". **Testing a warehouse produces three distinct failures, and they matter because the fix is in a different place each time.**

| What failed | What the form says | Where the fix is |
| --- | --- | --- |
| **We could not reach the host** | That we could not reach it, and from which addresses we tried | **Their network.** The prerequisites panel is the fix, and the error points straight at it |
| **We reached it and were refused** | That the host answered and rejected the identity | **The credential fields**, and the secret is the first thing named |
| **We were let in and the database or schema is not visible** | That we authenticated as this user and could not see that object | **A grant.** Nothing on this form is wrong, and saying so stops somebody retyping a correct key nine times |

**This is a refinement inside the node rather than a change to the map**, and it earns its place because a single "connection failed" sends a person to the wrong wall two times out of three.

### The secret field, and the conflict it creates with a rule we already set

**The form stays filled in after a failure.** That rule is taken from the bank and it holds everywhere in this product.

**A secret cannot be refilled, because we never send it back.** A private key or a password is written to us and never read out, not even masked, which is the same argument the sources list makes about showing credentials.

**Resolution, and it is stated rather than left to an implementer.** The non-secret fields keep their values. The secret field shows that a value is **set** rather than showing characters, and it is not cleared by a failure the analyst did not cause. **On an authentication failure it is named as the first thing to check**, and replacing it is one action.

### Editing a connection, and the count we can name

Changing credentials means **every metric on this connection stops answering until the test passes again**. R8's banner shape carries it: *"changing these details will require a reconnect"* becomes *"8 metrics read from this connection and will stop answering until this connects again"*.

**The number is nameable here, exactly as at 3.1 and unlike 4.7.** Metrics are our objects, readings are not.

**Delete follows the rule set at 3.1:** a connection carrying metrics cannot be removed, and the confirmation says how many and what to do about them.

## Filters and facets

None. This is a form.

## Primary call to action

**Save**, enabled only after the connection has tested successfully at least once. **Test then save is the order**, because save-then-discover is the version that produces a broken source sitting in a list.

## Emotional support

**Nothing from the emotional and social table lands on this page**, and it is written rather than padded, for the same reason as node 3.1: this is infrastructure.

**One adjacent note, not a mechanism.** The prerequisites panel exists so that the commonest failure here, a network policy the analyst does not control, is visible before the attempt rather than after it. That reduces one handover to another team. **Nothing in the research measures it**, so it stays a design intention.

## Responsive

**360:** the warehouse choice, then the prerequisites, then the fields, then the actions. **The panel goes above the fields it explains**, because information that unblocks a field is useless after it. The action row is sticky, since a nine-field form is longer than a phone.

**Wide:** single capped column with the prerequisites panel beside it, from R7's three-part layout, reduced to two because we have no environment list.

---

## SEO block

**`noindex`, no schema, no SEO text.** Private and transactional, and it names the customer's infrastructure.
