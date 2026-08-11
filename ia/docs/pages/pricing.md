# 6.3 Pricing

**Page:** Pricing · **Type:** page · **Node:** 6.3 · **Scope:** ПОТІМ · **Group:** pages

**The one page in this product that argues with itself.** The business model is still a hypothesis in `CLAUDE.md` and in `research.md`, and this is the page that would have to state it as a fact. So the node specifies the structure and **names the two things that are not decided**, rather than inventing numbers to fill a card.

---

## Purpose and jobs

**Purpose.** Answer, in the open, what this costs and who is not charged for.

**Jobs served: none.** Cluster 6 is jobless by construction. This page serves acquisition, and that is recorded rather than repaired.

## URL and breadcrumbs

- **URL:** `/pricing`
- **Breadcrumbs:** none. A top-level public page
- **Indexation:** `index, follow`. One of the four indexed pages in the whole map

## Content blocks, mobile-first priority

| # | Block | Note |
| --- | --- | --- |
| 1 | **Title and one line** | What is charged for, in a sentence |
| 2 | **The plans**, as cards | **With prices on them.** See below |
| 3 | **What is not charged for** | Ours, and no source has it |
| 4 | **Comparison, one axis** | Not six groups. See below |
| 5 | **FAQ**, carrying `FAQPage` | The one block here with an SEO payload |
| 6 | **One call to action** | |
| 7 | **Footer**, node 0.2 | |

### Block 2, and the comparison that decided it

**Secoda's pricing page has three tiers and not one price anywhere on it.** Core, Premium, Enterprise, each with "Learn more". **dbt's has four tiers with the prices in the open**, and the price is in the meta description.

**We take dbt's version outright.** For a product selling defensibility, a price you have to ask for is off-brand in a way that is hard to argue out of: the whole claim is that a person should be able to check a thing without asking anybody's permission.

### Block 3 exists because no source has it

Every pricing page in the bank says what a plan includes. **None says what it will never charge for.**

Ours does, and it is the business hypothesis stated as a promise: **readers are free, and the number of metrics is not capped.** The reason is in `CLAUDE.md`: charging per reader kills the product's own growth mechanism, and charging per metric penalises the exact behaviour activation is defined as.

### Block 4, one axis instead of six groups

Secoda's comparison runs six feature groups and dozens of rows across three tiers. **Ours has one axis that matters: what a person can do without paying.** Read a card, open its source layer, send it on. That is the whole free tier, and it is also the product's argument.

## The two things this node does not decide

| Open | Why it stays open |
| --- | --- |
| **The number on the card** | Question 1 in `research.md`. The market gives no reader-pricing norm to inherit: Secoda gives unlimited viewers on every tier, Cube charges $20 per viewer per month, Looker makes Viewer a separate licence, PowerMetrics caps metrics at 50 and 200 |
| **Whether seats are the unit at all** | **A live risk, found on the live page.** dbt meters "5,000 queried metrics per month" and "20,000 queried metrics per month". **A queried metric per month is a billable unit in this market**, and it is the unit we intend to leave free. If our hypothesis falls, it falls here |

**Neither is invented to make the page look finished.** A pricing page written before the pricing decision would become the place the decision was accidentally made.

## Components and variants

| Component | Variant | Note |
| --- | --- | --- |
| Plan card | Two or three, stated limits | Bounded thing: seats |
| Comparison table | One axis, two columns | Reuses nothing from node 4.1: that is a data listing, this is prose in a grid |
| FAQ accordion | Carries `FAQPage` | Canonical with node 6.1's FAQ |
| Footer | Node 0.2 | |

## States

| State | What happens |
| --- | --- |
| Default | The only state. This page has no data behind it |

## Filters and facets

None.

## Primary call to action

**One**, and it goes to sign-in rather than to a sign-up that does not exist yet.

## Emotional support

**Nothing from the emotional and social table lands here.** The mechanisms in that table belong to people doing work, and nobody is doing work on this page.

## Responsive

**360:** title, cards stacked, the non-charge block, the comparison as stacked rows rather than a grid, FAQ, action, footer. **Wide:** cards in a row, comparison as a table.

---

## SEO block

### A. Meta tags, with finished copy

- **title** (52): `Plumb pricing: analysts pay, readers never do`
- **description** (149): `Seats for the people who write metric definitions. Reading a number with its source, its age and its owner is free, and the metric count is not capped.`
- **canonical:** absolute form of `/pricing` on the production domain
- **hreflang:** none, deliberately. One language, English
- **robots:** `index, follow`
- **Open Graph and Twitter:** title and description as above, `og:type` `website`, the shared card image

### B. Heading structure

One H1: **"What Plumb costs, and what it never charges for"**

H2, in block order: *The plans* · *What is never charged for* · *What a reader can do without an account* · *Questions about billing and about what we store*

### C. Finished SEO text

> Plumb charges for the people who define metrics, and for nobody else. An analyst who connects a source, writes what a metric means and puts their name on it holds a seat. Everyone who opens a number card, reads its definition, checks where the figure came from and passes it on does so without an account and without a licence.
>
> That is a decision about how this product grows rather than a promotion. A number is worth more the more people can see where it came from, so charging the people who look at it would be charging for the thing that makes it useful. The number of metrics in a workspace is not capped for the same reason: a registry that costs more as it fills up is a registry that stays empty.

### D. Structured data

**`FAQPage`** on the FAQ block. Neither competitor ships it: Secoda's pricing page has one `ld+json` of type `CreativeWork`, and dbt's pricing page has none at all, both with FAQs on the page.

**`Product` with `Offer` is deliberately deferred** until the numbers exist. Marking up a price we have not decided would publish the decision by accident.

### E. Optimisation checklist

One H1. **LCP is the first plan card**, and it is text, so nothing on this page waits on an image or on a warehouse. Crawlable `<a>` links to 6.1, 6.2 and the legal pages. Canonical set, no hreflang. **No text baked into images**, including the price. Core Web Vitals: no third-party script on this page, and the FAQ opens without one.
