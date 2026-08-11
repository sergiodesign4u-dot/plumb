# 7.1 to 7.4, the system nodes

**Pages:** 404, 500, Maintenance, Cookie notice · **Type:** page and section · **Nodes:** 7.1, 7.2, 7.3, 7.4 · **Scope:** 7.1 and 7.2 MVP, 7.3 and 7.4 ПОТІМ · **Group:** pages, and 7.4 global

**7.1 matters more here than in most products, and the reason is structural.** The reader's only entrance is a link. **A broken or expired link is therefore their first contact with us**, not a rare edge, and a 404 that behaves like a wall means the product failed at the front door for the persona it is built around.

**This step also closes the one discrepancy the map has been carrying since stage 03a.** It is 7.4, and it is settled below.

---

## Purpose and jobs

**Purpose.** Keep a failure from becoming a dead end, for a person who may have no account and no other address.

**Jobs served: none directly.** 7.1 and 7.2 sit on the failure path of the main job, which is the phase of `cjm-to-be.md` where the reader arrives at a number and cannot get it.

## URL and breadcrumbs

| Node | URL | Breadcrumbs | Indexation and status |
| --- | --- | --- | --- |
| 7.1 | **No URL of its own.** Rendered at whatever address failed | None for the reader. The signed-in rendering keeps the analyst's trail | `noindex, follow`, real HTTP 404 |
| 7.2 | The same. Rendered at the address that failed | None | `noindex`, HTTP 500 |
| 7.3 | `/maintenance`, and every address redirects to it while it is on | None | `noindex`, HTTP 503 with `Retry-After` |
| 7.4 | No URL. A section on cluster 6 pages | None | Not indexed as a page |

## Content blocks, mobile-first priority

**7.1:** what was expected here, the two causes, the one thing to do, footer. **7.2:** what broke, what is safe to assume, retry, footer. **7.3:** what is happening, until when if known, whose data is unaffected, retry. **7.4:** one line and two controls, on cluster 6 only.

## Filters and facets

**None on any of the four.** There is nothing to filter on a page whose whole content is one message.

## Primary call to action

**One per page, and each names its destination.** 7.1 signed out: none, because the honest act is to ask the sender, and a button that goes nowhere useful is the wall this node refuses. 7.1 signed in: back to the registry. **7.2 and 7.3: retry**, which reloads the same address rather than sending anybody home, because the address the reader holds is the only one they have.

## 7.1, the 404, and it renders two ways from one node

### The negative reference, quoted in full because it is the whole argument

**dbt's documentation 404 says, in its entirety:** "Page Not Found", "We could not find what you were looking for.", and *"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."*

**There is no route onward at all.** The page tells the visitor to go and fix somebody else's website. **Our reader is the person who was linked**, so that sentence hands the problem to the one person who cannot solve it and has no account to solve it with.

### The two renderings

**For the reader, signed out.** One centred column, and four things.

1. What was expected at this address, in words: a number card
2. **The two honest causes, named without choosing between them.** The link may have expired, or the metric may have been removed
3. The one thing they can actually do
4. Footer, node 0.2

**For the analyst, signed in.** The same message inside the shell, navigation intact, and a route to the registry. Two sources confirm the shape: Secoda renders not-found as a state inside the app rather than as a page, and a craft reference does the same inside a signed-in shell. **An analyst who mistypes a URL should not lose their navigation.**

### The decision that stops block 3 being a shrug, and it adds an object

**"Ask whoever sent it" is only useful if we can say who that might be.** For a link that never existed we know nothing. For a metric that existed and was removed, we could know, and until now we would have thrown that away.

**So a deleted metric leaves a tombstone: its name, its owner, and the date it was removed. Nothing else.** No definition, no value, no history.

| Why it is worth an object | Why it is small |
| --- | --- |
| It is the difference between "this is gone" and "this was *Weekly active accounts*, Dana Reyes removed it on 3 August, and she is who to ask" | Three fields. It stores nothing about the reader and nothing about the data |
| It closes the case node 4.4's delete confirmation already promises the reader will get | It is metadata about our own object, which is the only thing this product stores anyway |

**Recorded as a new decision at step 7** and added to the entity inventory in `ia/docs/sitemap.md`, rather than smuggled in as a paragraph.

### What is refused, and one of the refusals is about markup

| Refused | Why |
| --- | --- |
| **"Contact the owner of the site that linked you"** | Our reader **is** the person who was linked |
| **A 404 with no onward route at all** | The flow critique already ruled a dead end with no route out a defect. This one is live, in a HARD competitor |
| **The full marketing header and the whole sitemap footer** | Cube's 404 carries about twenty-five links. That is not a route, it is a shrug, and on a phone the answer sits below a full-height header nobody asked for |
| **"Page Not Found" as an H2 with no H1 on the page** | Cube's does this. **Every page we write carries one H1**, and SEO structure is this stage's job rather than production's |
| **"Go to Homepage"** | The analyst's home is the registry. **The reader has no home at all**, by decision, so this destination is not available for the persona that meets this page most |
| "Back to Safety" as a label | A friendly label that does not say where it goes |

### One thing 7.1 must not become

**7.1 and node 2.9 must not be usable to tell whether a metric exists.** 7.1 says a card is not here; 2.9 says a card is here and is not yours to read. **In MVP the question does not arise**, because nothing is restricted and 2.9 depends on a workspace policy that is entirely ПОТІМ. It is written down so that whoever builds restriction meets the question before shipping it.

### Indexation

**`noindex, follow`**, and the HTTP status is a real 404. A soft 404 that returns 200 is the version of this page that gets indexed.

## 7.2, the 500, and the middle block is ours

Three blocks: **what broke**, **what is safe to assume about the number they were looking at**, and **a retry**.

**The middle block appears in none of the sources and follows from the product.** An error page in a trust product has to say whether anything it showed can still be believed. Ours says the honest thing: **nothing was shown, because we did not get the number.** No stale value is behind the error, because there is no stored copy for one to come from.

**The separation that matters:** a 500 is our failure. "Source is down" is a fact about the customer's warehouse and belongs on the card as node 2.4. **These must never share wording**, or a reader learns to read our outage as their data being broken.

- **Indexation:** `noindex`. HTTP status 500
- **Retry** returns to the same URL, since the reader's URL is the only address they have

## 7.3, maintenance, ПОТІМ

Duration if known, and one sentence that is specific to this product rather than generic.

**"Your data is not affected."** In a metadata-only product a maintenance window means the definitions are unreachable, and the customer's warehouse is untouched and still answering everybody else. That is worth saying, because the reader's mental model is that we hold the numbers, and this is the one moment the architecture is visible to them.

**The retry the map names is specified here rather than implied.** One control, "Try again", which reloads the address the person was on. **It does not go home**, because 7.3 catches the reader as often as the analyst and the reader has no home. If the window is still open the same page returns with the time updated, which is a state rather than a failure to act on.

- **Indexation:** `noindex`. HTTP status 503 with `Retry-After` when the duration is known

## 7.4, the cookie notice, and the discrepancy is settled here

### What the map was carrying

`ia/docs/sitemap.md` records it openly: 7.4 is labelled ПОТІМ because the market is US B2B and GDPR was deliberately deferred, **but the public card with no account will almost certainly carry analytics**, and at that point the question stops being legal and becomes a product question **on the very screen where we promise to store nothing about the reader.**

### The evidence, all of it opened live

| Company | What a US visitor gets |
| --- | --- |
| **dbt Labs** | A full consent platform: "Accept All Cookies", "Personalize My Choices", a vendor list with search and filters. After the merger their legal rail also carries a separate **Cookie List** document |
| **Secoda** | A plain "we use cookies" banner |
| **Cube** | Nothing at all |

**Two of the three show a banner**, so a banner is the majority behaviour in this market rather than an even split.

### The decision, and it is a product decision rather than a legal one

**The number card sets nothing on the reader's device. No cookie, no local storage, no third-party analytics, no tag manager.**

**Why this is the only answer consistent with the product.** A consent modal on the card would be **a dialog about tracking sitting on top of a page whose whole claim is that we store nothing about the reader.** It would also be the reader's first contact with us, arriving before the number they came for.

**Consequence: 7.4 never applies to the card.** It stays ПОТІМ and it applies only to the marketing pages of cluster 6, where a cookie may legitimately exist and where the visitor is not mid-task.

### The correction this forces, and it is a correction rather than a refinement

Nodes 4.7 and 6.2 say we cannot count anything about readers. **That was stated too broadly, and the precise version is better for both pages.**

| Precise position | |
| --- | --- |
| **Nothing that identifies a reader is stored.** No cookie, no device identifier, no per-reader log, no name, no address | Unchanged, and it is what the trust page sells |
| **An anonymous counter on the metric is allowed**, server side, holding no identity | **This is what makes the activation metric measurable at all.** `aarrr.md` defines activation as the first time a card is opened by somebody other than the author, and a product that counted nothing could not observe its own activation |
| **No count is ever shown in the product** | Node 4.7's banner still names no number, **for a better reason than "we cannot":** a count of links minted is not a count of people who will see the change, and putting it in front of the analyst invites them to read it as people |

**Both nodes are repaired upwards** rather than left disagreeing with this one.

## Components and variants

| Component | Variant | Note |
| --- | --- | --- |
| **Error page** | Centred single column | **Canonical, defined here**, shared by 7.1 signed out, 7.2 and 7.3 |
| Error state in shell | 7.1 signed in | The shell is node 0.1 plus the panel |
| Footer | Node 0.2 | On the signed-out renderings |
| Consent banner | 7.4, **cluster 6 only** | Never on cluster 2 |

## Emotional support

**One mechanism does land here, and it is the only system page in this product where that is true.**

**P1, emotional.** Stop feeling exposed when presenting a number I did not compute myself → **trouble named in words rather than raised as an alarm** → 7.1 block 2 and 7.2 block 2. A reader who followed a dead link did not break anything, and **naming two possible causes without blaming them is the same discipline node 0.4 applies to a number's states.**

## Responsive

**360 is the base and these pages barely change at width.** One centred column, capped. The signed-in rendering of 7.1 keeps the navigation, which is the only structural difference at any width.

## Search, closed here rather than left implied

**Search is an affordance and not a node.** It lives in node 0.1 as a persistent control over the registry, node 4.3 holds its result state including no-match, and node 3.1 records why the same control is not on the sources list. **No screen was invented to fill a row**, and this line exists so the absence reads as a decision rather than an omission.

---

## SEO block

**`noindex` on all four, no schema, no SEO text.** Error and system pages, with real HTTP status codes: 404, 500, 503. **`follow` on 7.1** so a crawler that lands there follows the footer out rather than stopping. **A soft 404 returning 200 is refused by name**, because it is the version of this page that gets indexed and then competes with real pages.
