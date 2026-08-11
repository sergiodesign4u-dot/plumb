# 6.4 to 6.7, the content and legal template map

**Pages:** Documentation, Privacy policy, Terms of service, Support and contact · **Type:** page · **Nodes:** 6.4, 6.5, 6.6, 6.7 · **Scope:** 6.5 and 6.6 MVP after step 8, 6.4 and 6.7 ПОТІМ · **Group:** pages

**A template map rather than four compositions**, which is the reuse decision the pipeline names for pages of this kind. Four documents, one shell, one rail, and **one of the four is deliberately not on the shell.**

---

## Purpose and jobs

**Purpose.** Hold the documents a customer reads before signing and the one page that explains how the product is used.

**Jobs served: none.** Jobless by construction, like the rest of cluster 6. **6.4 is the closest to serving one:** it is where R5 and the main job would be explained rather than performed.

## URL and breadcrumbs

| Node | URL | Breadcrumbs | Indexation |
| --- | --- | --- | --- |
| 6.4 Documentation | `/docs` | none | `index, follow` |
| 6.5 Privacy policy | `/legal/privacy` | Legal > Privacy policy | `index, follow` |
| 6.6 Terms of service | `/legal/terms` | Legal > Terms of service | `index, follow` |
| 6.7 Support and contact | `/support` | none | `index, follow` |

**The `/legal/` prefix is the rail made structural.** Two documents share a parent so a reviewer who opens one can find the other, and so the cookie document has an address to arrive at when node 7.4 needs one.

## The shell

| Element | Rule |
| --- | --- |
| **Title** | One H1, the document's name |
| **Last updated** | **Directly under the title.** Not in a footer, not at the end |
| **The rail** | Siblings: privacy, terms, and the cookie document when it exists. At 360 it stacks above the text |
| **One column of prose** | Capped for reading, left aligned |
| **Footer** | Node 0.2 |

### The last-updated date is a design principle, not a convention

`CLAUDE.md` principle 5: **every claim carries a name and a time.** A legal page is nothing but claims, so **a legal page with no date has the same defect as a number with no timestamp**, on the one surface where we are asking to be believed about how we handle somebody's data.

Both the domain source and the craft source put it under the title, and taking it is agreement rather than borrowing.

### Question-shaped H2s

The live privacy notice writes its sections as questions: "What personal data does Fivetran collect and why?", "Who does Fivetran share my personal data with?", "How does Fivetran keep my personal data secure?"

**Taken.** It is how the reader asks it, it is how a search asks it, and it costs nothing.

### The finding this type produced, and it is about a link rather than a layout

**dbt's own footer privacy link leaves dbt's own domain.** `getdbt.com/cloud/privacy-policy` redirects to `fivetran.com/legal/privacy` after the merger.

**Recorded as a finding rather than a criticism**, because it is a real structural risk for anybody: a legal surface on somebody else's domain is one whose wording, canonical and date you do not control. **For us the privacy page is a selling argument rather than boilerplate**, so it stays on our domain with the rest of the structural SEO layer this stage owns.

## The four pages

### 6.4, documentation

**One page, not a documentation site.** dbt's documentation is a subdomain with its own information architecture, and a documentation site is its own IA project.

**Ours answers two questions:** how a definition is written so that somebody else can read it, and what the states on a card mean. **It is the only page in cluster 6 that renders the state vocabulary from node 0.4**, and that makes node 0.4 its single source rather than prose written twice.

**It grows into a site when there is something to document.** Named so that the growth is a decision rather than a drift.

### 6.5, privacy policy

**The one legal page that is also an argument.** Its content is the table from node 6.2: definitions, owners, connection settings and nothing about readers.

**The row that matters is the absence.** A privacy policy that can say "we hold no copy of your data rows and nothing that identifies who read a number" is making the product's case in the document a reviewer trusts least to be making a case.

### 6.6, terms of service

**Standard US B2B terms, on the shell, with the date.** The only structural note: **the prior-agreement clause already used at node 1.1** ("unless a prior agreement is in effect") exists because in this market the contract is usually signed before anybody logs in, and the two places have to agree.

### 6.7, support and contact, and it is the exception

**It carries no rail and no prose.** It holds a route to a person: an address, what to expect, and the security-report route that node 6.2 also names.

**It is the route out that node 1.3 does not yet have.** The sign-in failure "this domain is not set up with Plumb" currently carries an instruction and no link, because this page is ПОТІМ. **When 6.7 exists, 1.3 links to it**, and that dependency is recorded here so it is not forgotten in the direction that matters.

## Components and variants

| Component | Variant | Note |
| --- | --- | --- |
| **Document shell** | Title, date, rail, column | **Canonical, defined here**, used by 6.4, 6.5, 6.6 |
| Rail | Sibling documents | Not navigation: it is a set of three |
| Prose column | Capped | |
| Contact block | 6.7 only | |
| Footer | Node 0.2 | |

**Refused: a call to action inside a legal document.** One craft source puts "Get started" on its terms page. **A legal document with a conversion button reads as an ad on the one page where a person is looking for the absence of tricks.**

## States

| State | What happens |
| --- | --- |
| Default | The only state on 6.4, 6.5, 6.6 |
| 6.7, message sent | Confirmation in place. Node 0.3: an action that is over, so a toast is allowed here |

## Filters and facets

None.

## Primary call to action

**None on 6.4, 6.5 and 6.6.** One on 6.7, and it is to reach a person.

## Emotional support

**Nothing from the emotional and social table lands on any of the four.**

## Responsive

**360:** title, date, the rail as three stacked links, then the prose. **Wide:** the rail beside the column, as in the craft source.

---

## SEO block, shared by the map

### A. Meta tags, written out per page

**The audit found the pattern stated where finished copy was required.** The legal *bodies* are counsel's deliverable and this stage may not draft them, but the meta tags are ours and are written here.

| Node | title | description |
| --- | --- | --- |
| **6.4** | `How Plumb definitions are written and read` (43) | `A definition in Plumb is a sentence, not a formula. This is how one is written, and what the states beside a number mean when you read it.` (144) |
| **6.5** | `Privacy policy: what Plumb stores and what it never does` (56) | `Plumb keeps metric definitions, owners and connection settings. It keeps no copy of your data rows and nothing that identifies the people who read a number.` (155) |
| **6.6** | `Terms of service for Plumb` (26) | `The terms that govern use of Plumb, including the clause that a prior agreement signed with us takes precedence over these.` (122) |
| **6.7** | `Support and contact at Plumb` (28) | `How to reach a person at Plumb, what to expect, and where to report a security issue.` (85) |

**Canonical:** the absolute form of each URL. **hreflang:** none, one language. **robots:** `index, follow` on all four, because a legal page that cannot be found before a call is a legal page that generates one. **Open Graph:** title and description as above, `og:type` `website`.

### A note on the rest of the pattern

Per page, and only the pattern is fixed here: **title is the document name plus the product name**, description is one sentence saying what the document governs. **`index, follow` on all four.** They answer real queries, and a legal page that cannot be found before a call is a legal page that generates one.

### B. Heading structure

One H1 per page, the document's name. **H2s as questions** wherever the content allows it.

### C. Finished SEO text

**Only 6.4 gets prose written at this stage**, because the other three are legal text that counsel writes and this stage may not draft:

> A definition in Plumb is a sentence, not a formula. It says what the metric counts, on what, and over what period, in words somebody outside the data team can check. The query underneath it is what makes it executable, and the reader never sees it. When the definition changes, everybody holding a link to that number is told what it used to say.

**6.5, 6.6 and the cookie document carry a marker instead of copy:** their text is a legal deliverable, and inventing it here would produce something that reads like a policy and binds nobody.

### D. Structured data

**None on 6.5 and 6.6.** There is no schema type for a policy that adds anything a crawler needs.

**6.4 may carry `FAQPage`** if its content settles into questions, and **6.7 carries `ContactPoint`** inside the `Organization` already declared at node 6.2.

### E. Optimisation checklist

One H1 per page. **LCP is the title block**, text. Crawlable rail links between the documents, which is also the internal linking this stage owes them. Canonical per page, no hreflang. **The last-updated date is text, never an image.** Core Web Vitals: prose with no scripts, which is the cheapest page in the product to make fast.
