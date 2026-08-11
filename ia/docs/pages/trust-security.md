# 6.2 Trust and security

**Page:** Trust and security · **Type:** page · **Node:** 6.2 · **Scope:** ПОТІМ · **Group:** pages

**This page is the buyer's entire experience of the product.** `CLAUDE.md` records the head of data or COO as a deliberate non-persona with no product surface, who imposes SOC 2, SSO and a trust surface anyway. **They never open a card and never write a definition.** They open this.

---

## Purpose and jobs

**Purpose.** Let somebody complete a security review without asking us for permission first.

**Jobs served: none.** Jobless by construction, like the rest of cluster 6. What it serves is the purchase, and the person doing it.

## URL and breadcrumbs

- **URL:** `/trust`
- **Indexation:** `index, follow`

## The comparison this node is built on, and it is the sharpest in the bank

**Both HARD competitors have a trust centre. They are opposites.**

| | dbt Labs (`trust.getdbt.com`) | Secoda (`trust.secoda.co`) |
| --- | --- | --- |
| What is public | 9 documents listed, 15 FAQs, 7 badges, dated security announcements, 3 named subprocessors, a vulnerability report route | **Nothing** |
| What it asks for first | Nothing. *"Everything you need to complete your security review is here"* | First name, last name, email, company, reason |
| H1 | "dbt Labs \| Trust Center" | **None. There is no H1 on the page** |

**Ours is public, and the refusal is not a preference.** A page that asks a security reviewer for their name before telling them anything has turned a trust surface into a lead capture. **We are selling the claim that a person can check something without asking permission**, and gating this page would contradict the product on the product's own subject.

**The gate survives in one place only:** in front of documents that legally need an NDA, which is where dbt's own gate is.

## Content blocks, mobile-first priority

| # | Block | Note |
| --- | --- | --- |
| 1 | **The claim**, not the badges | See below |
| 2 | **What we store and what we do not** | The architecture, in a table |
| 3 | **Access and identity** | SSO through a provider, no passwords held |
| 4 | **Certifications, stated honestly** | Including the one we do not have yet |
| 5 | **Subprocessors**, named | |
| 6 | **Policy links row** | To 6.5 and 6.6, from Mural's shape |
| 7 | **Report a vulnerability** | One route, always open |
| 8 | **Documents**, and the only gate on the page | |
| 9 | **Footer**, node 0.2 | |

### Block 1, and why a claim rather than a badge

Linear's security page leads with a claim and puts certifications underneath. Mural and Asana lead with badges and logos.

**We have no badge to lead with. SOC 2 Type II is a later goal, not a current fact**, and `CLAUDE.md` says so. **What we do have is an architecture claim that is true today: we store no copy of customer data rows.** The number is queried from the source at read time and never kept.

**A claim we can defend beats a badge we do not hold**, and this is the one page where the difference is the entire point.

### Block 4, and the sentence most companies would not write

**The page says what we do not have yet, and when we expect it.** A trust page that lists two certifications and stays silent about the third is answering the reviewer's question by omission, and a reviewer who finds that out later has learned something worse than the absence.

### Block 2 is where the product and the compliance story are the same sentence

| We hold | We do not hold |
| --- | --- |
| Metric definitions, in words | **Any copy of a customer's data rows** |
| Owners, and the date on each claim | Values as history. There is one last-run timestamp per metric, overwritten |
| Connection settings, with secrets write-only | Any credential in readable form, including on our own screens |
| The link a card was sent as | **Anything that identifies who opened it.** No cookie, no device identifier, no per-reader log. **One anonymous counter on the metric, naming nobody**, and it is never shown in the product |

**The last row is worth reading twice**, because it is also why node 4.7 names no number when a definition changes. The same architecture produces the compliance argument and the product limitation, and this page is where the customer meets both. **The counter exists so the product can observe its own activation, it names nobody, and it is never rendered.**

## Components and variants

| Component | Variant | Note |
| --- | --- | --- |
| Claim block | Text, no illustration | |
| Two-column table | What we hold, what we do not | Stacks at 360 |
| Badge row | Held and not-yet-held, visually distinct | Never a single row implying all are held |
| Policy links row | From R22 | |
| Document list | The only gated element | |
| Footer | Node 0.2 | |

**Refused: dated security announcements as a feed, for now.** Not on principle: design principle 2 forbids an incident workflow **around a number**, and advisories about our own infrastructure are a different object with a different reader. **They are refused because a stale advisory feed is worse than none**, and this is a ПОТІМ page for a product with no infrastructure yet. The slot is named so it is not rediscovered.

## States

| State | What happens |
| --- | --- |
| Default | The only state |
| A document is requested | A form, and it is the only form on the page |

## Filters and facets

None.

## Primary call to action

**None, and that matches node 2.1.** The act on this page is reading. A "book a demo" here would be the same mistake as a "start free" on the card.

## Emotional support

**Nothing from the emotional and social table lands here**, because the person reading this page is not in that table. **That absence is itself worth recording:** the buyer has no persona, no job and no emotional row, and the one page built for them is therefore built from the architecture rather than from research about them.

## Responsive

**360:** claim, the two-column table stacked into two lists, identity, certifications, subprocessors, policy links, vulnerability route, documents. **Wide:** the table as a table, certifications in a row.

---

## SEO block

### A. Meta tags, with finished copy

- **title** (57): `Trust and security at Plumb: we never copy your data rows`
- **description** (152): `Plumb stores metric definitions, owners and connection settings. Numbers are queried from your warehouse at read time and no copy of your rows is kept.`
- **canonical:** absolute form of `/trust` on the production domain
- **hreflang:** none, deliberately
- **robots:** `index, follow`
- **Open Graph and Twitter:** as above, `og:type` `website`

### B. Heading structure

One H1: **"What Plumb stores, and what it never touches"**

H2, in block order: *No copy of your data rows* · *What we hold and what we do not* · *How people sign in* · *Certifications, including the one we do not have yet* · *Subprocessors* · *Policies* · *Reporting a vulnerability* · *Documents for your review*

### C. Finished SEO text

> Plumb keeps the definition of a metric, the name of the person who declared it, the date they did, and the settings needed to reach your warehouse. It does not keep your data. When somebody opens a number card, the value is queried from your source at that moment and shown with the time it was read. There is no cached copy to leak and no export to secure.
>
> Sign-in is through your identity provider over OIDC or SAML. Plumb holds no passwords, so there is nothing here for a password to be stolen from. Warehouse credentials are written to us and never read back, including by us on our own screens.
>
> SOC 2 Type II is a goal and not yet a fact, and that is stated here rather than left to be discovered during a review. What is true today is the architecture above, and it is the reason the review is shorter than it would otherwise be.

### D. Structured data

**`Organization`**, attached at the page root, carrying the legal name and the contact route for security reports.

**No `Certification` markup until a certification exists.** Marking up an intention is the machine-readable version of the omission this page refuses.

### E. Optimisation checklist

One H1. **LCP is the claim block**, which is text. Crawlable `<a>` links to 6.5, 6.6 and 6.1. Canonical set, no hreflang. **No text baked into images**, and the certification badges carry text alternatives naming both the certification and whether it is held. Core Web Vitals: no third-party trust-centre widget, which is also why this page is on our own domain rather than on a vendor subdomain.
