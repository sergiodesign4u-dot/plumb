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


---

## What was repaired, and what the second pass found

**Most of the thirty findings were one defect seen on many screens**, so most of the repair happened in the two shared files rather than page by page.

| Repair | Where | Screens it reached |
| --- | --- | --- |
| The placeholder renders: height and width were being set on an inline span | `_wf.css` | The loading state, and the rule for any state that reserves space |
| Every control reaches 44px, through `--wf-target`, the one token five screens asked for independently | `_wf.css` | All 53 |
| The send sheet no longer covers a footer the page cannot scroll clear of | `_wf.css` | Four |
| The flagged field is visible again: the secret row was setting the whole border five lines after the flag set its colour | `_wf.css` | The connection error |
| The account corner is a real control carrying the one item MVP allows, and the active destination declares itself | `_nav.js` | Twelve signed-in screens |
| The footer's trust line is chosen by what the page holds rather than by the variant's name | `_nav.js` | Sign in, the 404, the 500, the cookie notice |
| The full footer's columns collapse on a phone, as node 0.2 requires | `_nav.js` | Twelve public pages |
| The card's two actions carry equal weight again | Nine card pages | The screen the IA says has no primary action |
| The full card renders behind the send sheet | Four | Node 2.8's "stays legible" |
| Attribution moved above the previous definition, where it belongs to the current one | Three | The changed states |
| One Close per section, and the second was mine from step 7 | Three | The source layer |
| The registry gets the width its own reuse already had | Three | The node that defines the listing |
| "Run it" is a route rather than a dead button, matching its twin on the connection form | Four | Define a metric |
| Both progress states are visible when they fire, instead of 400px below the fold | Two | Testing, running |
| The search results state has a heading on screen | One | The no-match rendering |
| One wording for one column across two states of one node | Two | Sources |
| The rail asks the registry, so it cannot go stale again | Five | The document shell |

**Two screens were rebuilt rather than patched.** The cookie notice is node 7.4 rendered on the page it lives on, instead of a page about itself with an empty box standing in for the host. The 404 is split by role, so the reader's first contact no longer carries a button into a registry they have no account for, and the analyst's rendering became its own page, registered as a state.

### The second pass, over the touched screens

Repairs shift neighbours, so the taxonomy was run again. **It found one thing, and it was the same defect in the places the first fix did not reach:** a breadcrumb, a public wordmark and a link that is the whole of its paragraph are targets a thumb aims at, and they were still 14 to 21px. Links sitting inside a sentence were left alone deliberately, because the accessibility criterion exempts them and padding one would break the line it lives in.

**Measured after the second repair, across all 53 pages: no horizontal overflow anywhere, no control under 44px, no page without an exit, and the placeholder is 38 by 160.**

### The second pass in the second instrument, and it caught what I had just made

Codex was given the touched files again. **The first two attempts did not finish** on a folder this size and were stopped, which is recorded rather than glossed: the pass that landed was scoped to six files and three questions. That is a smaller radius than the first pass had, and the difference is named here so nobody reads the second pass as equal in coverage to the first.

| What it found | Verdict |
| --- | --- |
| `.wf-header__mark` defined twice with different declarations | **Confirmed, and I had just created it.** The tap target repair added a second definition beside the original instead of extending it. Additive rather than conflicting, so nothing rendered differently, but two definitions of one selector is exactly the class the consolidation exists to remove. Merged, and two more of the same kind that it did not reach, `.wf-list__name a` and `.pp-bar__mark`, were merged with it |
| A bare `1px` in a page's inline block | **Withdrawn.** There is no border width token and `_wf.css` writes `1px` as a literal throughout; inventing a token for a hairline would be a decision about the system taken to satisfy a checker |
| An `aria-labelledby` with no matching id | **Nothing found.** The one such attribute in the batch resolves |

**The useful part is the first row.** A repair pass that removes duplicate definitions can introduce them, and the instrument that caught it is the one that reads source rather than pixels. Ten `44px` literals that predated the token were also removed in the same pass, which the token had made obsolete without anybody going back for them.

---

## The stage contract as a checklist, the third instrument

**A separate table on purpose.** Both instruments above read what exists, so neither can see a step that never happened: it leaves no trace in any file and on any page. This pass walks the pack's own contract instead.

| Contract line | Verdict |
| --- | --- |
| Entry gate before step 1: sitemap, flows, the node sources, jtbd, benchmark | **Done.** All five present, listed before anything was drawn |
| The matrix carries every screen and every dash has a reason | **Done.** Eight reasons in the first round, sixteen screens added at step 8 |
| The reference screen and the first flow are recorded once, at the top of `screens.md` | **Done.** The path is what `CLAUDE.md` carries, never a copy of the name |
| A contract written before any screen, and inheritance named rather than reinvented | **Done.** `conventions.md`, with the canonical data set that stopped 36 pages from disagreeing |
| Navigation built BEFORE the first screen, as a coverage tracker | **Done.** The registry was filled with all 25 rows while nothing was drawn |
| The hub registered in the root registry at step 3, with `wip` | **Done.** It needed a `wip` flag that did not exist, so the renderer learned one |
| One screen at a time, shown, then wait | **Done** through step 7. Step 8 is the sanctioned exception |
| Estimate before the fan-out, and the round agreed with the user | **Done.** 36 pages across 18 screens, and the deferred round was named |
| Every screen in the agreed scope has a wireframe and all its states | **Done.** 53 pages, and the two deferred states are the ones the IA audit deferred |
| Flows wired in both directions, no dead ends | **Done**, with node 2.10 as the one recorded exception |
| Nothing invented outside the IA | **Done**, and three holes were carried back rather than filled |
| Inline CSS folded back into `_wf.css` with a table and before and after screenshots | **Done.** 233 rules folded, six collisions resolved, five of six pairs byte identical and the sixth explained |
| Critique in several instruments, verified before repair, second pass over the touched screens | **Done.** Five instruments, six findings withdrawn with reasons |
| Every screen checked at a measured 360 | **Done.** All 53, three times: before the critique, after the first repair, after the second |
| `wireframes/CLAUDE.md`, the root rule, the README status, the decision log | **Done** at closing |
| **The 360 class had never been checked on a live screen before this stage** | **Not done until now, and that is the finding.** The stance was declared at 03b and carried through four stages on trust. The first real check produced four defects, one of which meant a state rendered nothing at all |

**Not everything is green, and the row above is why the checklist is worth running.** The one honest "not done" is that a rule the project had been asserting since the detail layer of the IA had never been tested until the stage whose job it is.


---

## The three IA holes, repaired upwards after the stage closed

A wireframe may not repair an IA hole, so these waited. They were settled in the nodes first, then rendered, which is the order this project committed to at the third pass of stage 03b.

### 1. Search was specified twice, and the screen made it visible

**Node 0.1 carried a persistent search field in the bar and node 4.1 carried a search field as block 2.** Both nodes were closed and both had passed an audit; the contradiction only existed once a screen was rendered, and on the search results state one field held the live query while the other sat empty above it.

**Settled: the field belongs to node 4.1, the bar carries a route to it.** Three reasons and none is preference. State 4.3 requires the query to be visible in the field it searches with, and a global component that takes no arguments cannot hold one. Node 0.1's own mobile column already said the bar carries an icon rather than a field at 360, so a permanent box there contradicted its own spec. And a route keeps what that node was actually protecting: search is one tap from every analyst screen.

### 2. Two refusals pointed at controls that did not exist

**"Make somebody else an admin first" when no screen could change a role, and "change the number of seats on plan and seats" when node 5.2 had no seat control.** Both were rendered honestly by the fan-out and both were dead ends made of words.

**Repaired in node 5.1 and 5.2:** the role becomes a control in the member row, the seat count becomes a control on 5.2 beside the counter it already carries. Neither is new surface. **The rule left behind is worth more than the two controls:** an inline refusal is honest only when the remedy it names is reachable from the screen the person is on, or one named route away. A refusal pointing at nothing moves the failure from the product to the person.

### 3. The footer had three variants and none fitted a gate

**Settled in node 0.2 without a fourth variant:** the trust line is worded by what the page holds rather than by the variant it carries. On a page with a number the sentence is about that number; anywhere else it is the general claim. The gate takes the minimal shape with the general wording, and so do the system pages.

**Measured after all three: 53 pages, no horizontal overflow, no control under 44px, and exactly one visible search field on every registry screen.**
