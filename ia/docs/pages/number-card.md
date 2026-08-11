# 2.1 The number card, with its seven states

**Page:** The number card · **Type:** page · **Node:** 2.1 · **Scope:** MVP · **Group:** pages

**States specified in the same pass, because they change one block rather than the composition:** 2.2 loading, 2.3 as of, 2.4 source is down, 2.5 definition changed, 2.6 empty, 2.9 not readable without an account, 2.10 the owner is named and the number is not shown.

**This is the whole product for the primary persona.** The reader has no header, no menu, no home and no account. Their navigation is this page and the two actions on it. Every other node in the map exists so that this one can be true.

---

## Purpose and jobs

**Purpose.** Let somebody who is about to be quoted on a number tell how far it can be trusted, without going anywhere to find out.

**Jobs served.**

| Job | How this page closes it |
| --- | --- |
| **Main job.** How far the number can be trusted | Blocks 2 to 5 together, on arrival. T1 and T2 of `cjm-to-be.md` |
| **R1.** Who is answerable | Block 5, the name and date on the claim. T4 |
| **R4.** The old figure does not travel as new | Block 3, state 2.5, comparing against the definition carried in the link. T5 |
| **R3.** The correction travels, from the reading side | State 2.5 is what a correction made in node 4.7 looks like when it arrives here |

**Depth in taps: zero.** Arrival is the answer. The definition, the state, the age and the attribution are all on the first screen. This is fixed in `CLAUDE.md` and nothing at a later stage may move any of the four off it.

## URL and breadcrumbs

- **Permanent URL, one per metric:** `/m/<stable-id>`
- **No slug from the metric name.** A slug derived from a name that can change is either a broken promise of permanence or a redirect to maintain forever. The name is on the page, where it can change freely
- **A sent link carries the moment of reading:** `/m/<stable-id>?v=<definition-version>&t=<sent-at>`. Entity E6 settled this at the base layer: the moment travels **encoded in the link**, and a reading is not a stored object, because the reader has no account and we store nothing about them
- **Breadcrumbs:** none. A breadcrumb implies a hierarchy the reader is inside, and they are not inside anything
- **Indexation:** `noindex, follow`. See the SEO section

**One consequence, stated because it is easy to discover late.** The bare URL and the sent URL are **the same page in two conditions**. On a bare `/m/<id>` there is nothing to compare against, so **state 2.5 cannot fire there at all**. That is honest rather than a gap: without a moment of reading in the link, "the definition changed since you read this" has no since.

## Content blocks, mobile-first priority

Composition from `ia/docs/blocks.md`, type T1. Order reasoned from 360.

| # | Block | Serves | Note |
| --- | --- | --- | --- |
| 1 | **Metric name**, H1 | Main job | What am I looking at |
| 2 | **The value**, or the named absence of one | Main job | Design principle 1: never bare |
| 3 | **The state line**: as of, relative age, expected cadence, or the named trouble in words | Main job | Vocabulary from node 0.4. **Directly beside the value, not in a footer and not in a tooltip** |
| 4 | **The definition, in words** | Main job | Design principle 3: the definition is the main object. Visible, never collapsed |
| 5 | **Attribution**: who declared this definition and when | R1, and P2's social job | Design principle 5 |
| 6 | **Where this number came from**: one line present, the full label and value grid opens on one action | Main job, depth | Node 2.7. Design principle 4 |
| 7 | **Send this number** | R2 from the sender's side | Node 2.8 |
| 8 | **Footer**, node 0.2 | Legal, identity | Minimal. This is the only footer a reader ever sees |

**Block 3 before block 4 is ours**, and it follows from design principle 1 rather than from any source. Nothing in the bank puts a state above a definition, because nothing in the bank has both.

**No chart in MVP.** A chart is allowed only as an illustration under the definition, and it illustrates nothing the first test needs. Recorded as ПОТІМ rather than dropped.

**Refused here, with reasons in the bank:** date range and filter controls, seven visualisations, an eleven-item overflow menu, a certification badge, a health signal, a ninety-day timeline, a subscribe action.

## Components and variants

| Component | Variant | Note |
| --- | --- | --- |
| **Number card** | **This node defines it.** Canonical | **List of copies to walk when the canon changes: node 6.1 hero, node 4.1 registry rows (compact), node 4.3 search results (compact).** Recorded here so a change is never made in one place only |
| State line (node 0.4) | Full, in words | Compact form belongs to the registry, and it is a shortening, never a different vocabulary |
| Footer (node 0.2) | Public, reader | |
| Button | Secondary, two instances: open the source layer, send | Neither is a primary action, because the primary act on this page is reading |

## States

Seven, and every one of them is a node in the map.

| Node | State | The value | What else changes | Route out |
| --- | --- | --- | --- | --- |
| 2.2 | **Loading** | Not yet | **Blocks 1, 4, 5 and 6 are already there.** Only the value is waiting, because only the value is queried at read time | 2.3, 2.4 or 2.6 |
| 2.3 | **As of**, the ordinary condition | Shown | Timestamp, relative age, expected cadence | Stays |
| 2.4 | **Source is down** | **None at all** | Definition, owner and last successful run stay. We hold no copy, so there is no stale value to fall back on | 2.10 |
| 2.5 | **Definition changed after this was saved** | Current value shown | The change, the previous definition, who changed it and when | 2.7 |
| 2.6 | **Empty**, the query ran and returned nothing | **Never a zero** | The time it ran, and the reason in words | 2.7 |
| 2.9 | **Not readable without an account** | None | What is missing and why. **No login wall theatre** | 2.10, or a dead end |
| 2.10 | **The owner is named, the number is not shown** | None | Name and date only | End, a partial close |

**2.2 is the one people get wrong, so it is spelled out.** A loading state that greys the whole card would hide the definition and the attribution, which are already known and cost nothing to render. **Only the value waits.** This is also what keeps the LCP of node 6.1 off the warehouse.

**2.9 and 2.10 are the reader's dead end, narrowed rather than accepted.** The base layer left a red node here: a reader who lands on a card they may not see has no home, no menu and no account. **2.10 is the narrowing:** showing who owns the claim closes R1 in its reduced form and costs no screen. Whether we may show the owner to somebody with no access is **open research**, and the branch in flow 1 asks it rather than assuming it. dbt's soft access controls, collected at T2, are a live precedent on the yes side.

**Combination rules, from node 0.4.** Source down and definition changed: both shown, source down first. Empty and definition changed: both, empty first. Source down and empty: impossible.

## Filters and facets

None. This is a single object.

## Primary call to action

**None, and that is the design.** The primary act on this page is reading, and it is complete on arrival. Two secondary actions sit below the fold of the answer: open the source layer, and send this number.

**Why this is worth stating.** A page with no primary call to action looks unfinished to anybody used to marketing pages. Here it is the point: **the moment the card acquires a "start free" or "sign up", the reader's zero-tap answer has been sold to somebody.**

## Emotional support

Three of the four mechanisms in the emotional and social table of `ia/docs/sitemap.md` land on this node. Written as `job → mechanism → where exactly`.

- **P1, emotional.** Stop feeling exposed when presenting a number I did not compute → **a name and a date beside the value**, so the reader is not the only evidence for their own number → block 5, the attribution line. And **trouble named in words rather than raised as an alarm** → block 3, the state line, in the wording fixed by node 0.4.
- **P2, emotional.** Stop being the bottleneck → **the definition answers in the analyst's absence** → this page as rendered for somebody else. The mechanism is the permanence of the link, not a notification.
- **P2, social.** Be the person whose numbers are trusted → **attribution on the claim, permanently and visibly** → block 5.
- **P1, social** is thin and is named as thin in the table. Its only mechanism is that the provenance travels with the number, which is node 2.8 rather than this page.

**One risk carried from the base layer rather than rediscovered later.** The mechanism that builds an analyst's reputation is the same one that exposes it: their name sits on every number, including the ones that break. Nothing in the research says analysts want that.

**Microcopy is a marker, not text.** Stage 05 writes the words for the state line, the empty case and the two dead-end states. What this node fixes is that the place exists and **what information has to be in it**.

## Responsive

**360 stack:** name, value, state line, definition, attribution, source line, send, footer. One column, in that order, with no exceptions.

**Wide canvas:** the same order. The card keeps a maximum width and does not spread; a value that grows to fill a desktop is a dashboard tile, and this is not one. The source layer of node 2.7 may open beside the card instead of below it, which is the only difference the width buys.

**Design principles 1 and 4 are what make this survivable at 360**, and they work as a pair: the first demands the state be shown, the fourth stops it eating the screen.

---

## SEO block

**This page is `noindex`, and the reason is not technical.** The card is public and reachable with no account, but **indexing it would publish customers' numbers**. That decision was taken at node 0.2 and it is the single most consequential SEO decision in this project.

- **A. Meta.** `robots: noindex, follow`. Follow rather than nofollow, because the only links leaving this page go to our own public pages. **No canonical**, because there is nothing to consolidate: one metric, one URL. No hreflang.
- **B. Headings.** One H1, the metric name. **No H2 in the default state:** the blocks below it are a definition list rather than sections, and inventing headings to look structured would be markup theatre. **Opening the source layer at node 2.7 adds exactly one H2**, because that genuinely is a section. Amended when 2.7 was written, rather than left as two documents disagreeing about heading structure.
- **C. SEO text.** None, deliberately. An unindexed page has no SEO copy. The words on it are interface copy and belong to stage 05 and `voice/docs/microcopy.md`, and this node holds only the requirement for what information each place needs.
- **D. Structured data.** None. Schema on a noindex page describes a page nobody will retrieve, and here it would describe a customer's metric.
- **E. Checklist.** One H1. **LCP is the value, and it must not wait on the warehouse:** blocks 1, 4, 5 and 6 render first, the value fills in, and its space is reserved so nothing shifts. Crawlable `<a>` on both routes out. No text baked into images.

### The Open Graph decision, and it is the sharpest one on this page

**The card is sent as a link into Slack and email, so it will be unfurled.** An unfurl is a preview card generated once and then frozen in a chat log.

**The preview carries the metric name and the state. It does not carry the value.**

Three reasons, and each one is a rule this project already holds.

1. **Design principle 1 forbids it directly.** An unfurl showing "18,432" with no state beside it is a bare number, and it is bare in the one place we cannot control.
2. **It would rebuild the As-Is problem inside our own growth mechanic.** Phase G of `cjm-as-is.md`, from S9: a figure that was once computed stops being computed and keeps looking exactly as it did. A frozen unfurl in a Slack thread is exactly that, forever, and forwarding it is one click.
3. **It contradicts the product.** We store no copy of a value. Baking one into an image or a meta tag is storing a copy in the least revocable place available.

**So:** `og:title` is the metric name, `og:description` is the first line of the definition plus a line saying that the current value and its provenance are one click away, and there is no `og:image` carrying a number. **The unfurl's job is to make the link worth opening, not to answer instead of it.**
