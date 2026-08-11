# Plumb

**Slug:** `plumb`

**Project boundary:** languages 1 (English); brand or design system: none; screens approximately 15 to 30. All three answers sit inside what this pipeline is built for, so no fork is taken. Read by stage 03a step 2 (languages), stage 06 step 2 (brand), stage 07 entry gate (volume). Answered once at stage 01, never asked again.

## How this file works

This is the rules file. It loads in full in every session, so it has a budget: 200 lines. What must hold next time goes here, nothing else.

Statuses do not go here, they already have two owners: the table in `README.md` and `done:true` in `_nav.js`. History does not go here either, it lives in `docs/decisions.md`. That path stays in backticks on purpose: an @ path means import, an imported file loads every session, and a decision log that loads every session is no longer a separate log.

## Product overview

Plumb is a metric trust tool for B2B teams. It keeps the canonical definition of every metric in one place and shows, right next to the number, where that number came from, how fresh it is and what changed since it was last read.

The difference from BI and analytics tools: Plumb is not built to visualise data, it is built to make a number defensible. It stores definitions, lineage and metadata, never the customer's data rows.

**Goal.** Remove the daily friction of reconciliation, when two people arrive at a meeting with different numbers for the same thing and spend half an hour working out whose number is right. The side effect matters more in money: decisions stop being made on a number nobody owns.

## Platform

**Responsive web, mobile-first.** Mobile priority, desktop is full and carries the analyst's dense work (metric registry, lineage tree, definition versions). Mobile is the read and verify path, and it leads in layout order.

## Audience

**Primary user: analyst or data lead.** 28 to 40, company of 50 to 300 people, data team of 1 to 5. Context: interrupted several times a week with "why is this number different", and every answer costs manual digging through dashboards and queries. Driver: stop being a human API to their own data, plus the reputation of being the person whose numbers are trusted.

**Second side: business consumer of the number.** PM, marketer, finance, 25 to 45. Takes a number from a dashboard into a decision or a deck with no way to check whether it still holds. Driver: not being caught out in front of leadership.

**Buyer, not user: head of data or COO.** Deliberately kept outside the product surface, otherwise three personas compete for 15 to 30 screens and none gets drawn properly.

## MVP scope (initial, rough)

Refined on the Lean UX Canvas (`research/docs/lean-ux-canvas.md`, block 5), narrowed to three core jobs at stage 02.

**In:** one data source connection; metric registry with definition and owner; number card with provenance; freshness and breakage states ("as of", "source is down", "definition changed after this was saved"); search and jump to a metric by name.

**Out:** building dashboards; SQL editor; row-level permissions; notification routing; comments and discussion; version history deeper than the previous definition.

Cut logic: everything outside the line is either a separate large product (dashboards, SQL) or only makes sense once trust already works (discussion, permissions).

## Business model hypothesis

Seat-based, paid analysts, free or near free readers, no cap on metric count.

Reason: the value of Plumb grows the more people see a number with its provenance. Charging per reader kills the product's own growth mechanism, and charging per connected metric penalises filling the registry, which is exactly what activation is.

Still a hypothesis, and the research says why it has to stay one: this market has no reader-pricing norm to inherit. Secoda gives unlimited viewers on every tier, Cube charges $20 per viewer per month, Looker makes Viewer a separate license type, PowerMetrics caps metrics at 50 and 200. So this is our decision to defend, and it stays open until questions 1 and 2 in `research/docs/research.md` are answered.

## Geo and compliance

**Market:** United States, B2B companies of 50 to 300 people. Product in English.

**Metadata only.** No copy of customer data rows. The number is pulled from the source at read time. This keeps the compliance surface on our own infrastructure rather than on someone else's rows, and it becomes a sales argument rather than an excuse. Honest cost: without a copy we cannot show what a value was a month ago unless the source itself provides it, which is consistent with deep version history already being out of MVP.

**SOC 2 Type II** is the real purchasing gate in US B2B at this company size. Named as a later goal, not MVP, but it needs a trust surface in the IA. GDPR becomes a separate decision when the first EU customer appears. CCPA barely applies to B2B metadata. HIPAA out of scope.

## Design principles

A principle is useful only when it forbids something. Each of these carries what it forbids.

1. **A number is never shown bare.** Freshness and source state sit beside the value where it is read, not one click away. *Forbids:* a large figure with no timestamp, freshness pushed into a footer or a tooltip.
2. **Doubt is a state, not an error, and not an incident.** "Source is down", "definition changed", "data is stale" get full informational treatment with their own look. Ours is an annotation on a number: no assignee, no severity, nothing to close. *Forbids:* hiding a broken number, replacing it with a dash and no explanation, one red style for every kind of doubt, an incident workflow around a number, any aggregate trust score or health percentage.
3. **The definition outweighs the visualisation.** The definition text is the main object on the screen, the chart illustrates it. *Forbids:* a screen that opens on a chart with the definition collapsed, any drift towards being another dashboard.
4. **Explanation in place, depth on request.** One line of provenance is visible immediately, the full lineage opens on action. *Forbids:* a dependency tree as the opening state, a modal as the only route to the source.
5. **Every claim carries a name and a time.** Who declared the definition and when it last changed is always visible. *Forbids:* anonymous changes, "updated recently" instead of a date.

Principles 1 and 4 work as a pair and are what makes mobile-first survivable: the first demands the state be shown, the fourth stops it eating the screen.

## What the research fixed

Four decisions from stage 01 that later stages read rather than re-derive. Single source of truth for the research is `research/docs/research.md`, with the level files beside it.

1. **Strategic dimension: trust without leaving the place of reading.** Can a person tell how far a number can be trusted, right where they read it, without going anywhere to find out. Grounds and scoring in `research/docs/benchmark.md`. Read by 04 step 4, 06 step 1, 07 step 6.
2. **Riskiest assumption: a business consumer will read the number in Plumb, before using it, instead of the figure they already have.** Value risk, not feasibility. Everything downstream pays off only if the reader arrives at the moment of acting. Test and kill condition in `research/docs/lean-ux-canvas.md`, block 8. Read by 02, CJM step 9, 07 step 6.
3. **Chosen UX pattern: evidence on the claim.** Trust information lives on the object being read and travels with it, one line immediately, depth on request. Rejected: catalog and search, lineage graph, dedicated doubt surface, conversational answer, each with grounds in `research/docs/ux-patterns.md`. Read by 03a step 2.
4. **Activation is the first time a metric card is opened by somebody other than the author of its definition.** Connecting a source and writing a definition are setup, not activation. Funnel in `research/docs/aarrr.md`. Read by 03a step 4.

## Tech stack hypothesis

**Front:** React and TypeScript, Next.js App Router. Reason: Plumb has a public part that needs SEO and server rendering (product page, docs, pricing) and an app behind login. One repo covers both.

**Styling: vanilla CSS, tokens plus cascade layers, no utility framework.** This line binds the design work, unlike the rest of this section. Stages 07 to 09 of this pipeline produce `kit.css`, two token levels and one file per component. A utility framework in the hypothesis would mean either rewriting the system at stage 08 or carrying two parallel styling languages.

**Data:** Postgres for our own objects only (definitions, lineage, owners, definition change history). Customer rows are not stored. Queries go to the customer's source (Snowflake, BigQuery, Postgres) at read time through a query service. This follows from metadata only, so it is a requirement rather than a preference.

**Auth:** OIDC / SAML SSO through a provider (WorkOS or Auth0). US B2B asks about SSO in the first call, and hand-rolled auth costs more here than it looks.

**Hosting:** GitHub and GitHub Pages hold the repository and every HTML page this pipeline produces. Note the limit: GitHub Pages is static hosting, so it cannot run the product as described above (server rendering plus Postgres). Product runtime hosting stays open and gets decided when it is actually needed, not now.

**Not in the hypothesis:** a cache layer mirroring values (contradicts metadata only), microservices (premature at this customer size), GraphQL (one team, one surface, REST plus server actions are cheaper).
