# 3.1 Sources, and the first test of the listing template

**Page:** Sources · **Type:** page · **Node:** 3.1 · **Scope:** MVP · **Group:** pages

**State in the same pass:** 3.5 no sources connected, discovered here and registered in the map.

**This node exists to be a reuse, so the interesting result is where the reuse stops.** The canonical listing was written at node 4.1. Four of its five blocks survive unchanged. One does not, and the third column had to be re-earned rather than copied.

---

## Purpose and jobs

**Purpose.** Show what this workspace is connected to, and whether it answered.

**Jobs served.**

| Job | How this page closes it |
| --- | --- |
| **R5.** The definition stops living in a head | As a precondition. Nothing can be defined until something is connected |
| **Main job, at one remove** | A source that stopped answering is the reason a card says "source is down". This is where the analyst sees that before somebody asks |

**Who this is for.** The analyst, and only the analyst. The reader has no navigation and never reaches cluster 3.

**Depth in taps.** One from the global bar.

## URL and breadcrumbs

- **URL:** `/sources`. Root of its own cluster, no breadcrumb above it
- **Indexation:** `noindex`. Behind sign-in, and it names the customer's infrastructure

## Content blocks, mobile-first priority

### The template, and the two places it did not survive

| Block from node 4.1 | Here | Verdict |
| --- | --- | --- |
| 1. Title with a count | "Sources, 2" | **Unchanged** |
| 2. **Search field** | **Dropped** | See below |
| 3. Primary action | Connect a source | **Unchanged** in shape and position, third at 360 |
| 4. The list, three columns | Different columns, and one of them is not the bank's | **Re-earned.** See below |
| 5. Result count line | "2 of 2" | **Unchanged** |

### Block 2 is dropped, and the global component agrees

**A US B2B company of 50 to 300 people has one to three warehouse connections.** Search over a list of three is dead weight, and a search field that returns everything it is given teaches the analyst that search here is pointless, which is a bad thing to teach on the same product where search is the mechanism that closes R2.

**This is not a deviation from the global bar, it is an agreement with it.** Node 0.1 already says search is a persistent affordance **over the registry**, not a global find-anything. Sources were never in its scope, and this node is where that decision becomes visible.

### The third column had to be re-earned, because the bank's three collapse into two

The bank wrote 3.1's columns by analogy with 4.1: name, reachability, last successful run. **Read against node 0.4, two of those are the same fact.**

- 0.4 refuses "Healthy" by name: a thing with nothing wrong carries its age, not a badge. So a reachable connection is expressed **as the time it last answered**.
- And an unreachable one is expressed as "Source is down. Last run 07:40", which already carries a time.

**So reachability and last successful run are one column in both directions**, and the third column is free. It is filled with the thing the analyst actually needs at the moment this page matters.

| Column | What it holds |
| --- | --- |
| **Name** | Warehouse type and the database or account. Snowflake, `ANALYTICS.PROD` |
| **State** | "As of 09:12, 3 h ago", or "Source is down. Last run 07:40". **The reader's exact words**, from node 0.4, never "unhealthy", "degraded" or "error" |
| **Metrics on it** | **How many metrics stop answering if this connection does.** A count from our own store, no warehouse query |

**The third column is a block the bank did not have, so it is named out loud and entered into the bank with its tracing.** It traces to the inbound barrier: the analyst is asked "why is this number different", and when a source is down the difference between answering one person and answering five before they ask is knowing which metrics are affected. **It is a count and not a score**, so design principle 2 is intact: no aggregate, no health percentage, nothing to interpret.

### The vocabulary is the reader's, and that is the point of node 0.4

The connection is the analyst's object and the card is the reader's, and **they say the same words about the same failure**. A product whose entire claim is that a number means one thing cannot have its own infrastructure page describing that failure differently from the page the customer's customer reads.

## Components and variants

| Component | Variant | Note |
| --- | --- | --- |
| **Listing table** | Canonical, from node 4.1, minus search | Second and last instance in MVP |
| **Listing row** | Three lines at 360, three columns at width | No overflow menu. **The row opens the connection** |
| State, compact | From node 0.4 | Same words as the card |
| Count line | Under the list | |
| Button | Primary: connect a source | |
| Empty block | Structure retained | Shared with 4.2 |
| Confirm dialog | Destructive, blocking. From node 2.8's canonical dialog | Focus trapped, Escape closes, focus returns |

## States

| Node | State | What happens |
| --- | --- | --- |
| **3.1** | The list | Rows sorted by name. No loading state for the table: it renders from our own store |
| **3.5** | **No sources connected** | The structure retained, one sentence naming what stopped, one route |
| | A row is down | Nothing on this page changes shape. The state column says so, in the reader's words |

### What the row does, and what it does not

**The row opens the connection**, which is node 3.2 with its fields filled in. That mirrors cluster 4 exactly: 4.4 is both "new" and "edit", and 3.2 is both "connect" and "the settings of a connection that exists". **A row overflow menu was refused in the bank and stays refused here**, so testing a connection lives on 3.2 where 3.3 and 3.4 already are.

**No credential is ever shown on this page, not even masked.** The row carries the warehouse type and the database, never a user, a key or a role. A masked secret in a list is still a secret in a list, and this product's whole compliance argument is that the customer's material is not ours to hold more of than we must.

### 3.5, and what it actually is

**It is a recovery state, not an onboarding one.** The map routes a new workspace from 3.3, testing the connection, straight to 4.2. **So nobody arrives here on a first run**: the only way to see an empty sources list is to remove the last connection.

**And it is narrower still, because removing a connection that carries metrics is refused.** See below. So 3.5 is reachable only when the registry is also empty, which means the sentence it carries is not "connect your first source to get started" but a plain statement that nothing is connected and nothing can answer.

**The structure is retained**, as at 4.2: the header row at width, a ghost row with the field labels at 360. Same canonical behaviour, which is the whole point of a canonical component.

### Removing a connection, and the count we can name

**A connection carrying metrics cannot be removed.** The confirmation says how many and what to do: repoint them to another source or delete them first. **Blocking is the decision**, because the alternative is a class of orphaned metric with a connection that no longer exists, and that would need a state of its own on the card, invented to cover a case we chose to allow.

**Here the number can be named, and the contrast with node 4.7 is exactly whose object it is.** Metrics are ours: definitions, owners and bindings live in our Postgres, so "8 metrics use this connection" is a fact we hold. Readings are not: nothing about who opened a card is stored, which is why 4.7 can only name the consequence and never a count. **The two pages behave differently because the architecture differs, not because one of them is less careful.**

## Filters and facets

**None**, and here the reason is stronger than at 4.1: with one to three rows there is nothing to filter. Written rather than left blank, per the template.

## Primary call to action

**Connect a source.** One, and it is the same button in both states.

## Emotional support

**Nothing from the emotional and social table lands on this page, and that is written rather than padded.** The mechanisms in that table live on the card, on the owner field and on the registry count. This page is infrastructure, and inventing an emotional claim for it would be the exact move the base layer forbade.

**One adjacent note, not a mechanism.** The state column here is the earliest place an analyst can learn that a source is down, before the inbound arrives. That is a real reduction of the ambush described in the As-Is map, but **nothing in the research measures it**, so it is named as a possibility and not as support for a job.

## Responsive

**360:** title with count, primary action, then rows of three lines. **No horizontal scroll**, same rule as 4.1: a sideways table hides the state column, which is the column the row exists to carry.

**Wide:** three columns, sort arrow on the first, primary action to the right of the title. Column widths set by the state column, which is the longest.

---

## SEO block

**`noindex`, no schema, no SEO text.** Behind sign-in, and it names the customer's warehouses.
