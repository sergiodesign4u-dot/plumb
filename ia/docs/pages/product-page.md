# 6.1 Product page

**Page:** Product page · **Type:** page · **Node:** 6.1 · **Scope:** ПОТІМ · **Group:** pages

**The reference node for this stage.** It is not the Home, because this product has none: `CLAUDE.md` records that the reader has no header, no menu and no home, and global navigation belongs to the analyst. 6.1 is the acquisition front door and **the only indexed page in the map**, which is why the SEO layer of this stage attaches here and nowhere else.

---

## Purpose and jobs

**Purpose.** Make the claim and prove it on the same screen, to somebody who has never seen a Plumb card.

**Jobs served.** **None, and that is by construction.** Cluster 6 is jobless by the decision at step 2 of the base layer, and the traceability matrix excludes it from the job table on purpose. This page serves **acquisition**, which is a business outcome rather than a person's job, and it is labelled that way rather than dressed up with a job tag.

**One growth mechanic lives here**, from `CLAUDE.md`: the public page renders the real card component. It carries no job underneath it and is named so that it cannot claim screens on equal footing with work people do.

## URL and breadcrumbs

- **URL:** `/`
- **Slug:** none, this is the root
- **Breadcrumbs:** none. A root page with a breadcrumb trail is a trail of one
- **Canonical:** the absolute form of `/` on the production domain. **The domain is not decided**, and product runtime hosting is explicitly still open in `CLAUDE.md`, so the canonical is specified by rule rather than by string
- **Indexation:** `index, follow`. The only page in the MVP-adjacent map that says this

## Content blocks, mobile-first priority

Composition from `ia/docs/blocks.md`, type T6. Order reasoned from 360.

| # | Block | Where it comes from | Note |
| --- | --- | --- | --- |
| 1 | **The claim**, one sentence, as H1 | T6, hero slot, taken | Not two sentences and not a tagline plus a subtitle. One |
| 2 | **The live card**, the real component from node 2.1 rendering a real metric | T6, "do differently", **the row this type turns on** | Every competitor and every craft source puts a screenshot here. Ours runs |
| 3 | **State-dependent strip**: one next step, different by who is looking | Required by the reference-page brief | See States below |
| 4 | **The problem**, one block: two people, two numbers, half an hour | The goal statement in `CLAUDE.md` | The only place on this page where the reader's situation is described rather than shown |
| 5 | **What the product is**: the definition, the states, the attribution, the link. Four things, one sentence each | MVP core in `CLAUDE.md` | Four, matching the four capabilities the first test needs. Not a feature grid |
| 6 | **Trust**: metadata only, no copy of customer rows, with a route to node 6.2 | Geo and compliance in `CLAUDE.md`, T6 taken | Load-bearing for the buyer, who has no product surface |
| 7 | **FAQ** | T6, taken from R17 and R18 | The one block here with a structural SEO payload |
| 8 | **One call to action** | T6 | See below |
| 9 | **Footer**, node 0.2 | Already specified | The landing does not get a footer of its own |

**Refused here, and the reasons are in the bank:** a corporate news banner above the hero (D13), borrowed authority such as "as seen on TV" (D14), a testimonial carousel, a pricing panel inside this page rather than at its own URL, and a customer logo wall until there are customers to name.

**Nothing was added that is not in the bank.** Blocks 3 and 4 come from the reference-page brief and from the product goal respectively, and both are named above rather than slipped in.

## Components and variants

| Component | Variant | Note |
| --- | --- | --- |
| **Number card** (canonical, defined with node 2.1) | Public, read-only, no send action | **This is the canonical component, used live.** Changing it changes this page, and this page is on the list of copies to walk when the canon changes |
| State line (canonical, node 0.4) | "As of", ordinary | Inside the card. Real wording, not sample text |
| Footer (node 0.2) | Public | |
| Button | Primary, one instance | |
| Accordion | FAQ | |

## States

| State | What is different |
| --- | --- |
| **Guest** (the default) | Strip offers one step: open a live example card at its own URL. **Not "sign up"**, because the thing to understand precedes the thing to buy |
| **Signed in, analyst** | Strip becomes "go to your metrics", pointing at node 4.1. Somebody who already has a workspace should not be sold to |
| **Signed in, no workspace yet** | Strip points at node 3.2, connect a source, which is where the first run actually starts |
| **The live card cannot load** | **The card renders its own "source is down" state, node 2.4, in public.** This is deliberate and it is the strongest version of the argument: the marketing page demonstrating honesty about a broken number is the product working, not the page failing |
| Reduced motion, no JS | The card is server-rendered, so it is text either way. Nothing on this page requires script to be readable |

**The fourth row is a decision, not a fallback.** The alternative is a placeholder or a hidden block, and both would mean the one page that claims we never hide a broken number does exactly that.

## Filters and facets

None. This is not a listing.

## Primary call to action

**One:** open a live example card at its own permanent URL. Sign-in exists in the header as a secondary route and is not the primary action.

**Reason it is not "start free" or "book a demo":** the riskiest assumption in this whole project is that a business consumer will read a number in Plumb before using it. **The page's job is to let somebody experience that in one click**, and a signup form in front of that tests nothing.

## Emotional support

**Nothing from the emotional and social table in `ia/docs/sitemap.md` lives on this page.** The four mechanisms in that table sit on A1, B1, C2 and C3. This line exists to record that the check was made, not to leave a gap.

## Responsive

**360 stack:** claim, live card, strip, problem, what it is, trust, FAQ, CTA, footer. The card is the second block and must be legible without horizontal scroll: at 360 it is one column, the value above the state line above the definition.

**Wide canvas:** the claim and the card become two columns, the card on the right. **The card does not grow into a dashboard** as the canvas widens: it keeps its own maximum width, because it is the real component and a card that behaves differently here than in the product would be a lie told in the hero.

---

## SEO block

### A. Meta tags

- **Title (48 characters):** `Plumb: every number with its source and owner`
- **Description (147 characters):** `Plumb keeps the definition of every metric in one place and shows, right beside the number, where it came from, how fresh it is and who declared it.`
- **Canonical:** absolute form of `/` on the production domain
- **hreflang:** **none, deliberately.** One language, English, from the project boundary. A hreflang cluster of one is noise
- **robots:** `index, follow`
- **Open Graph:** `og:title` as the title above, `og:description` as the description above, `og:type=website`, `og:url` as canonical, `og:image` a rendering of the card component rather than a logo
- **Twitter:** `summary_large_image`, same image

**The og:image is a decision, not a default.** The card is what this product is. A logo card would be the same missed opportunity as a screenshot in the hero.

### B. Heading structure

**One H1:** `Every number carries its source, its age and the person who defined it`

**H2, in block order:**
1. `Two people, two numbers, half an hour` (block 4)
2. `What Plumb puts next to a number` (block 5)
3. `We store definitions, not your data` (block 6)
4. `Questions` (block 7)

The card in block 2 carries the metric name as an H3 inside the component, so the component's own heading level is fixed here rather than left to the page that embeds it.

### C. SEO text, finished

> **Every number carries its source, its age and the person who defined it**
>
> Two people arrive at a meeting with different numbers for the same thing, and the next half hour goes on working out whose number is right. Plumb removes that by keeping one definition of every metric and showing it beside the value, together with where the value came from, when it was last computed and who declared what it means.
>
> **Two people, two numbers, half an hour**
>
> The number in the deck came from somewhere. The person presenting it usually did not compute it, often cannot see the pipeline behind it, and has no way to check it in the moment they are asked. So the meeting stops being about the decision and becomes about the figure.
>
> **What Plumb puts next to a number**
>
> The definition in plain words, so the number means one thing. Its state, said in words rather than in a colour: when it was computed, whether the source could be reached, whether the definition changed since this number was sent. The name and the date on the claim, so there is a specific person to ask. And one permanent link per metric, so the answer travels instead of being re-explained.
>
> **We store definitions, not your data**
>
> Plumb holds definitions, lineage and ownership. It does not hold copies of your rows. The value is queried from your own warehouse at the moment somebody reads it, which keeps your data on your infrastructure and keeps our compliance surface on ours.
>
> **Questions**
>
> *Do readers need an account?* No. A metric card opens at its permanent link with no account at all.
>
> *Is this a BI tool?* No. Plumb does not build dashboards and does not visualise data. It makes a single number defensible.
>
> *Where does the number come from?* Your warehouse, queried when the card is opened. Snowflake, BigQuery and Postgres in the first release.
>
> *What happens when the source is down?* The card says so, in words, and still shows the definition, the owner and the time of the last successful run. It does not show a stale number and it does not show a dash.

**Ownership of this block.** It belongs to this node until the end of the pipeline. Stage 05 aligns it to voice and syncs the final version back here. Interface strings do not move in: after stage 05 those live in `voice/docs/microcopy.md`, and this node holds the requirement for what information belongs in each place.

### D. Structured data

| Type | Where | Why |
| --- | --- | --- |
| `SoftwareApplication` | Page level | With `applicationCategory: BusinessApplication`, `name`, `description`, `operatingSystem: Web`. **Neither competitor ships this:** dbt Labs has zero `ld+json` blocks and Secoda has one generic `CreativeWork` |
| `Organization` | Page level | Name, url, logo, and `sameAs` once there are profiles to point at |
| `FAQPage` | Block 7 | Each question as a `Question` with an `acceptedAnswer`. The copy in section C is the source of both |

**No `Product` and no `Offer` here.** Pricing lives at node 6.3 and takes its own markup, which is also the version that can rank for a pricing query.

### E. Optimisation checklist

- **One H1**, the one in section B
- **LCP element: the live card in block 2.** It is server-rendered text rather than an image, which is the cheap half of the win. The honest risk is that it queries a real value at read time, so **the card must render its definition, attribution and state immediately and fill the value in when it arrives**, exactly as node 2.2 already specifies. LCP must not wait on a warehouse
- **Crawlable `<a>`** on every route out, including the example card and the trust page. No route that exists only as a script handler
- **Canonical present.** No hreflang, by the decision in section A
- **No text baked into images.** The card is a component, and the og:image is a rendering of it rather than the only place its content exists
- **CWV:** no layout shift when the card's value arrives, which means the value's space is reserved before it is known
