# 5.1 and 5.2, the workspace shell

**Pages:** Workspace and people, Plan and seats · **Type:** page · **Nodes:** 5.1, 5.2 · **Scope:** ПОТІМ · **Group:** pages

**Two nodes, one shell, one specification.** This is the reuse decision the stage names for a private multi-section zone, and it is applied here rather than rediscovered: cluster 5 is two sections of one settings surface, not two pages designed twice.

**Both nodes carry "no job" in the traceability matrix, and both keep it.** 5.1 serves tenancy and 5.2 hangs off a business model hypothesis that is still open. Neither gained a job by being written up.

---

## Purpose and jobs

**Purpose.** Let the workspace hold people, and let somebody see what is being paid for.

**Jobs served: none, in either section.** Recorded as an honest empty row rather than filled with a tick.

## URL and breadcrumbs

- **URL:** `/settings/people` and `/settings/plan`
- **Breadcrumbs:** Settings > People, Settings > Plan
- **Indexation:** `noindex`. Private

## The domain half is missing here, and it is named rather than filled

**No competitor exposes a settings screen without an account**, and this stage does not log in. So the bank's comparison column for this type holds a **barrier** rather than a comparison, and the composition below rests on craft references plus our own decisions.

**What that costs:** nothing about density, defaults or behaviour under load in a real data-team workspace is known here. Stage 04 should treat this composition as structure and not as evidence.

## Content blocks, mobile-first priority

**The shell:** a settings sidebar with exactly two items, and a main panel. At 360 the sidebar becomes two links above the panel.

### 5.1, people

| # | Block | Note |
| --- | --- | --- |
| 1 | **Invite row**: email plus role, one action | Two fields, one action |
| 2 | **Members table**: person, role, status | |
| 3 | **Seats used and available** | **The join to 5.2.** See below |

### 5.2, plan and seats

| # | Block | Note |
| --- | --- | --- |
| 1 | **Seats used and available** | The same component as 5.1 block 3 |
| 2 | **What a seat costs** | Blank until the pricing decision, and that is stated |
| 3 | **What is not charged for** | Readers, and the metric count |
| 4 | **Invoice route** | |

### Block 3 of 5.1 is where the two sections are actually one

Supercut shows seats beside the member list. **We take that, and for us it is structural rather than convenient:** our model charges for analysts and not for readers, so **the seat count has to be visible at the moment somebody is added**, or the price is discovered on an invoice a month later.

### Roles, and the one that does not exist

Secoda's pricing page lists viewers, editors and admins, with viewers unlimited on every tier.

**Ours is narrower: there is no reader role at all.** A reader has no account, so they cannot be a member of anything. **The roles in this workspace are the ones that write**, and that is a direct consequence of the card being readable at a permanent URL with no account.

### The rule taken from a craft source, and it is a rule rather than a message

Butter shows an error toast: you cannot remove the last admin. **We take the rule and refuse the toast.** A workspace with no administrator is unrecoverable, so this is **inline and blocking** at the point of the action, per node 0.3: what belongs to the thing on screen stays on screen.

### What is refused

| Refused | Why |
| --- | --- |
| **Per-permission options inside the invite dialog** | Row level permissions are out of scope by the brief, and a permission matrix here would promise them |
| **A 2FA status column** | **We do not hold the identity.** SSO means 2FA is the provider's business, and reporting a status we do not own is a claim we cannot stand behind |
| **A third settings section** | Two intents, two items. A third would be invented from other people's menus |

## Components and variants

| Component | Variant | Note |
| --- | --- | --- |
| **Settings shell** | Sidebar with two items, main panel | **Canonical, defined here.** The only private multi-section zone in the product |
| Members table | Person, role, status | Not the listing component from node 4.1: that one carries state and age, and this one carries people |
| Invite row | Email plus role select | Inline, not a dialog |
| Seat counter | Used and available | Shared by both sections |
| Confirm dialog | Destructive, from node 2.8's canonical dialog | Removing a member |

## States

| State | What happens |
| --- | --- |
| Default | Members listed |
| **The last administrator** | Removal is blocked inline, with the reason, before the action |
| Invitation pending | The row exists with its status, and it is not a second list |
| No seats left | Stated at the invite row, not at submission |

## Filters and facets

**None.** A workspace of one to five analysts, per the persona, is a list nobody filters.

## Primary call to action

**Invite** on 5.1. **None on 5.2** until there is something to buy.

## Emotional support

**Nothing from the emotional and social table lands on either section.** Fourth analyst-side surface in a row to say so, and the pattern was already recorded at node 1.1.

## Responsive

**360:** the two section links above the panel, the invite row stacked into two fields, the members table as rows of two lines. **Wide:** sidebar beside the panel, the table as a table.

---

## SEO block

**`noindex`, no schema, no SEO text.** Private, and it names the customer's employees.
