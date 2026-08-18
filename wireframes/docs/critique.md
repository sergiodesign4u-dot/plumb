# Critique, stage 04 step 9

Five instruments, because they have different radii and each one is blind where another sees.

| Instrument | Radius | What it took |
| --- | --- | --- |
| **Codex**, read-only, source only | Sees files, never a rendered page | The mechanical classes: leaked appearance, placeholders, missing states, dead ends, screens off the map, navigation, canonical data, appearance living inline |
| **Three auditors in a browser**, read-only, one batch each | See a rendered page and understand the product | A schema instead of a screen, a zone with no role, and **it breaks at 360**, the class nobody had checked on a live screen until now |
| **A grep of my own** | Sees every file at once, and cannot be persuaded | The duplicate-rule sign, which is a fact rather than a judgement |
| **A measurement of my own** across all 52 pages | The same page every auditor saw, measured identically | 360 as a number rather than an impression |

**The division is by class, not by screen, and it paid twice.** Codex found nothing at 360 because it cannot see a page; the auditors found the two defects that only exist once a browser computes a style; the grep settled a class both models could have guessed wrong.

---

## The findings, verified in the current file before anything was touched

Priority order is the pack's: dead ends and missing states first, then what is broken on a live screen, then what is merely inconsistent.

| # | Class | Where | What is wrong | Found by | Verified |
| --- | --- | --- | --- | --- | --- |
| 1 | Breaks at 360 | `number-card-loading.html` | **The skeleton does not render at all.** `.wf-skeleton` sets `height` and `width` on a `<span>`, which is `display:inline`, so both are ignored. The value slot is 0px tall and every block below sits 44px higher than on the resolved card. Node 2.1 checklist E requires the value's space to be reserved so that nothing shifts | Auditor, reader batch | Confirmed in `_wf.css:152` and in the markup |
| 2 | Zone without role | Every screen | **No tap target reaches 44px.** Buttons render 39px, footer links 18px, and two of the four header targets 21 and 28px. The rule is not new: `_wf.css` already applies `min-height:44px` in six places, so the reader's cluster is where the product's own decision was not applied | Auditors, two batches | Confirmed by measurement |
| 3 | Zone without role | `send.html` and its three states | **The fixed sheet slices the footer and the page cannot scroll clear of it.** On the copied state the footer sentence is cut mid-line at y=320 with `scrollHeight` equal to the viewport, so it can never be revealed | Auditor, reader batch | Confirmed by measurement |
| 4 | Zone without role | `send.html` and its three states | The card behind the sheet is a three block stub, so at 360 **the footer occupies the whole middle band** between the number and the sheet. Node 2.8 says the card stays legible behind the dialog, and node 2.1 is the canonical component | Auditor, reader batch | Confirmed |
| 5 | Zone without role | `number-card*` | **A primary action was invented by weight** on the one screen the IA says has none: `Send this number` renders with an ink border and 600 weight, `Where this came from` muted at 400. Node 2.1: both are secondary, the primary act is reading | Auditor, reader batch | Confirmed in the markup |
| 6 | Schema instead of a screen | `cookie-notice.html` | Not the banner but a page **about** the banner: an H1, a lede in IA vocabulary, a dashed empty box labelled "a cluster 6 page, for example the product page" standing in for the host, and an essay. The specified component is the last 139px | Auditor, public batch | Confirmed |
| 7 | Zone without role | `error-404.html` | **The only solid button on the reader's first contact points at the registry**, which a reader has no account for. Node 7.1 gives the signed-out reader no call to action at all | Auditor, public batch | Confirmed |
| 8 | Zone without role | `sign-in*`, `error-404`, `error-500`, `cookie-notice` | The minimal footer asserts "this number was queried from your source when you opened the page" **on pages with no number**, and on the 500 it contradicts the screen's own words | Auditors, two batches | Confirmed in `_nav.js` |
| 9 | Zone without role | `connect-source-error.html` | **The field the error points at is not marked.** `.wf-field--flagged` sets `border-color:var(--wf-ink)`, and `.wf-secret` sets the whole `border` shorthand 5 lines later at equal specificity, so the flagged field is byte-identical to an unflagged one | Auditor, analyst batch | Confirmed in `_wf.css:284` against `:289` |
| 10 | Zone without role | `metric-registry*` | **Two search fields on one screen**, and the sharpest case is the search results page: the page field holds the live query while an empty header field sits 146px above it. Node 0.1 puts search in the global bar, node 4.1 lists it as block 2 | Auditor, analyst batch; predicted by the fan-out | Confirmed by measurement |
| 11 | Zone without role | `define-metric*` | **"Run it" is a dead control** while its twin on `connect-source.html` is a real link to the testing state. The same act, one deterministic outcome, two treatments | Auditor, analyst batch | Confirmed in the markup |
| 12 | Breaks at 360 | `connect-source-testing.html` | The state's own content, the progress block naming what is being tried, sits **417px below the fold**. On a phone, pressing Test changes nothing you can see except two greyed buttons | Auditor, analyst batch | Confirmed |
| 13 | Breaks at 360 | `define-metric-running.html` | The same defect, milder: the progress block is 70px below the fold | Auditor, analyst batch | Confirmed |
| 14 | Zone without role | `metric-registry-search.html` | **No visible h1 in the no-match rendering**: the real h1 lives inside the section that `:target` hides, so that state has no heading on screen at all | Auditor, analyst batch | Confirmed |
| 15 | Canonical data | `sources.html` against `sources-empty.html` | The same three columns are labelled two ways across two states of one node: "Name / State at last run" against "Warehouse and database / State at last answer" | Auditor, analyst batch | Confirmed |
| 16 | Zone without role | `metric-registry*` | The registry, the analyst's densest surface and the node that DEFINES the canonical listing, renders at 640px while `sources.html`, which reuses that listing, renders at 880 | Auditor, analyst batch | Confirmed |
| 17 | Zone without role | `number-card-definition-changed` and both combinations | The attribution line sits under the "Previously" block, so it reads as the author of the **previous** definition, while the banner above names the same person and date for the change | Auditor, reader batch | Confirmed |
| 18 | Zone without role | `source-layer*` | Two "Close" buttons per screen for one section. Node 2.7 block 4 specifies one | Auditor, reader batch | Confirmed, and it is mine from step 7 |
| 19 | Zone without role | `number-card-analyst.html` | "Edit definition" is still an inert marker although `define-metric-editing.html` now exists | Auditor, reader batch | Confirmed |
| 20 | Zone without role | `send*` | "Share" renders as an inert box identical to "Close", so three controls compete under Copy. Node 2.8 says it is real where a share sheet exists and absent where it is not | Auditor, reader batch | Confirmed |
| 21 | Zone without role | `send-clipboard-unavailable.html` | Copy is still the largest control on the screen and links to itself, so the biggest button is the thing that just failed | Auditor, reader batch | Confirmed |
| 22 | Zone without role | `documentation`, `privacy`, `terms` | The document rail renders "Cookie notice" as dead text although the page exists and is registered. The rail, unlike the footer, does not ask the registry | Auditor, public batch | Confirmed |
| 23 | Schema instead of a screen | `product-page*` | The strip prints the state's name as a caps label, "Guest", on the only indexed page in the product: an annotation on a zone | Auditor, public batch | Confirmed |
| 24 | Zone without role | `trust-security.html` | Two documents are described as "open, nothing asked" and neither is a link | Auditor, public batch | Confirmed |
| 25 | Zone without role | Twelve public pages | The full footer's link columns do not collapse into accordions at mobile, which node 0.2 requires by name | Auditor, public batch | Confirmed |
| 26 | Appearance living inline | `pricing.html` | `min-height:44px` written as a literal | Codex, and my grep | Confirmed |
| 27 | Appearance living inline | `metric-registry-search.html` | A style block still carries the marker "to fold into _wf.css" although it was deliberately kept. **The marker lies about the state of the work** | Codex | Confirmed |
| 28 | Appearance leaked | `sources.html` | A sort arrow glyph in a table header, where the registry solved the same problem with text and `aria-sort` | Codex | Confirmed |
| 29 | Zone without role | `plan-and-seats.html` | Two of four blocks render only marked blanks, and the invoices block names no route | Auditor, public batch | Confirmed |
| 30 | Zone without role | `product-page*` | Block 1 renders a 147 word lede where node 6.1 says one sentence, and it is what pushes the card and the single call to action below the fold | Auditor, public batch | Confirmed |

### Withdrawn at verification, kept with the reason

Removing these silently would bring the same false finding back next time.

| Finding | Instrument | Why it does not stand |
| --- | --- | --- |
| Hex literals and font families in `overview.html` | Codex | `overview.html` is an artefact page of the project on the same shell as the research and IA pages, not a product screen. The inline rule binds screens |
| A font stack declared in `_wf.css` | Codex | The contract forbids a font **choice**, brand type. A neutral system stack is what a page renders with anyway; removing it would not remove a typeface, it would pick a different one |
| A triangle glyph in the panel summary | Codex | The panel is prototype furniture and is not part of the product. Stage 06 never colours it |
| `number-card-owner-only.html` has no exit | Codex | Confirmed present, and it is node 2.10 by decision: a partial close for a reader who has no home, no menu and no account. The IA argued this narrowing rather than accepting it |
| `maintenance.html` carries no footer | Auditor, public batch, asked to confirm or refute | Correct as built. Node 7.3's block list has no footer, and during a maintenance window a footer link returns the same 503 |
| `error-404.html` is a wall | Auditor, public batch, asked to confirm or refute | Refuted. It names both causes, carries the tombstone with somebody to ask, and the footer gives three routes. Its real defect is the opposite one, row 7 |

### Divergences between instruments, not settled by voting

- **Codex reported no duplicate rules across screens and my grep agrees**, counting independently over all 53 files. Two instruments, one answer, and it is the one that proves the step 8 consolidation held.
- **Codex found nothing at 360 and three auditors found four defects there.** Not a contradiction: Codex reads source and the class only exists once a browser computes a style. It is the clearest evidence in this stage for having two radii rather than two opinions.

### Three findings that are IA holes, not wireframe defects

They are repaired upwards or not at all, and they are listed here so the fix is not attempted in the wrong layer.

| Hole | Where it lands |
| --- | --- |
| **Search is specified twice**, in node 0.1 as a persistent affordance in the bar and in node 4.1 as block 2 of the page. One has to go, and the choice changes both nodes | `ia/docs/pages/navigation.md` and `metric-registry.md` |
| **"No seats left" tells the admin to change the number of seats on a page that has no seat control**, and "the last administrator" tells them to make somebody else an admin, which no screen in the product can do | `ia/docs/pages/workspace.md` |
| **Node 0.2 has three footer variants and none of them fits a gate.** Sign in is public, carries no number and is not the card | `ia/docs/pages/footer.md` |
