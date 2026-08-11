# Node 0.1: Global navigation

**Type:** section &nbsp;&nbsp; **Group:** global &nbsp;&nbsp; **Scope:** MVP &nbsp;&nbsp; **Page:** `ia/navigation.html`

The first structural node, and the one that sets the level of detail for the other 36. It is not decoration: it is a page-level node with a state matrix, inherited by every screen that has it, and **most screens in this product do not**.

---

## The decision this node exists to record

**The reader has no global navigation, and the guest state of this component is therefore empty.** That is not an omission to be repaired later. It comes from rule 5 in `CLAUDE.md`: the strongest measurement in this research is that a destination a reader is expected to travel to gets entered once or twice a year, so what we build has to arrive with the number rather than wait to be visited. A header with a logo and a menu on the number card would turn the card into a page of a site the reader has no reason to be on.

**So this node serves the secondary persona almost entirely.** The analyst signs in, and gets a navigation with two destinations.

---

## Pattern research, so the shape is argued rather than assumed

Three sources, opened 2026-08-11.

| Finding | Source | What it decides here |
| --- | --- | --- |
| "If your site has more than 5 options, it's hard to fit them in a tab or navigation bar and still keep an optimum touch-target size", and tab bars are "well suited for sites with relatively few navigation options" | Nielsen Norman Group, mobile navigation patterns | We have two destinations, far below the ceiling. Fit is not our problem |
| "The navigation menu makes the navigation options least discoverable", and out of sight is out of mind | Nielsen Norman Group, same article | **No hamburger.** With two destinations, hiding them behind a menu costs discoverability and buys nothing |
| Target size minimum is "at least 24 by 24 CSS pixels", Level AA; the enhanced criterion is "at least 44 by 44 CSS pixels", Level AAA | W3C, Understanding WCAG 2.2, SC 2.5.8 and SC 2.5.5 | Targets here are built to **44px**, the AAA figure, because the analyst uses this on a phone in transit and the cost of hitting it is zero |

**A deliberate departure from the usual answer, and the reason.** The obvious mobile pattern is a bottom tab bar of four or five items. **We are not building one.** With two destinations plus an account corner, a bottom bar would spend the most valuable strip of a phone screen on almost nothing, and `CLAUDE.md` already says the analyst's dense work belongs on the desktop while the phone is the read and verify path. The phone case that actually matters in this product is the **reader** opening a card, and the reader has no navigation at all. So: one top bar on both widths, and the bottom of the phone screen stays free for the content.

---

## State matrix

Rows are the zones of the component. Columns are who is looking and on what.

| Zone | Guest, mobile | Guest, desktop | Analyst, mobile | Analyst, desktop |
| --- | --- | --- | --- | --- |
| Wordmark | **Absent** | **Absent** | Present, links to 4.1 | Present, links to 4.1 |
| Metrics (4.1) | Absent | Absent | Present | Present |
| Sources (3.1) | Absent | Absent | Present | Present |
| Search | Absent | Absent | Icon, opens the field over the bar | Field, always visible |
| Account corner | Absent | Absent | Avatar, opens a menu | Avatar, opens a menu |
| Sign in (1.1) | Absent | Absent | n/a | n/a |

**The guest column is empty on purpose, and it is the most important thing in this table.** A guest in this product is a reader holding a link. They see the card, the footer and nothing else. There is no sign-in prompt in the navigation either: offering an account to somebody who will never have one is noise, and the route to signing in lives on the public product page and in the footer.

### Transient states

| State | What happens | Where it returns to |
| --- | --- | --- |
| Search open, mobile | The field takes the whole bar, the two destinations are suppressed for the duration, escape and the back gesture both close it | The bar as it was |
| Account menu open | Workspace name, 5.1, 5.2, sign out | The bar as it was |
| Scrolled | The bar stays. It does not hide on scroll: two destinations do not justify the cost of a thing that disappears and has to be hunted | n/a |
| Offline or degraded | The bar renders, and search reports that it cannot reach the registry rather than returning an empty result | 0.3 |

---

## Anatomy

| Element | Behaviour | Goes to |
| --- | --- | --- |
| Wordmark | Link, not a home button. There is no home in this product | 4.1 Metric registry |
| Metrics | Primary destination, `aria-current="page"` when active | 4.1 |
| Sources | Second destination | 3.1 Sources |
| Search | Persistent affordance over the registry, not a destination. Enter jumps to the single match, otherwise to 4.3 | 4.3 State: search results |
| Account corner | Menu, not a page | 5.1, 5.2, sign out |

**Search is in the navigation and is not a nav item**, which is the one subtlety in this component. It has no page of its own: the base layer recorded that decision so that no screen was invented to fill a row in the traceability matrix.

---

## Transitions

`0.1 → 4.1` Metrics. `0.1 → 3.1` Sources. `0.1 → 4.3` search with a result set. `0.1 → 5.1`, `0.1 → 5.2` through the account menu. Nothing here transitions to cluster 2: **the analyst reaches a card from the registry, not from the navigation.**

---

## SEO and accessibility

- **No H1.** A global component never carries the page heading.
- **This is the main plane of internal linking for the signed-in product**, and it is a small plane: two links. The public surface does its linking through the footer instead, which is why the footer is node 0.2 and not an afterthought.
- **Indexing.** Every screen carrying this component is behind authentication and is `noindex`. The component therefore never appears on an indexed page, and it declares no schema.
- **Semantics.** One `nav` element with an accessible name; `aria-current="page"` on the active destination; the account menu is a button with `aria-expanded`, not a link.
- **Targets are 44 by 44 CSS pixels**, the AAA figure from SC 2.5.5, rather than the AA minimum of 24.
- **No breadcrumbs.** The tree is two levels deep for the analyst, and breadcrumbs on a two-level tree are furniture.

---

## Open questions this node hands forward

1. **Whether the wordmark should link anywhere at all.** It currently goes to the registry because that is where a signed-in analyst starts, and a product with no home page has no obvious answer.
2. **What the account menu does when a workspace has one analyst**, which is the common shape at 50 to 300 people. Two of its three items lead to nodes labelled ПОТІМ.

   **Answered at step 8, because the audit made it a defect rather than a question.** An MVP component may not offer routes to nodes that do not exist in MVP. **So in MVP the account corner carries sign out and nothing else.** Workspace and people, and plan and seats, appear in it when cluster 5 does, and the corner is designed to take them without changing shape.
