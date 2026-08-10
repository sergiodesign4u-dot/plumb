# Competitors

Three groups, five per group. HARD is the same product for the same audience, SOFT is a different product solving the same job, ASPIRATIONAL is a category benchmark.

Every fact below comes from a page opened in the browser on **2026-08-11**. Anything taken from a search summary rather than the page itself is marked `[?]` and is not treated as a fact. Only public, pre-login pages were opened. No accounts were created.

Status: HARD collected. SOFT and ASPIRATIONAL pending.

## HARD

| Product | Type | Why in this group | What to study |
| --- | --- | --- | --- |
| Atlan | Enterprise catalog and governance platform | Sells the metrics layer as "a single source of truth for all KPI definitions", the same object Plumb owns | How the definition is presented to a non-analyst, and whether provenance ever reaches the place where a number is read |
| Secoda | Catalog built for the whole team, not just data engineers | Names Data Consumers, Business Ops and PMs as personas, which is our second side | How a business reader is served differently from a data engineer inside one product |
| Select Star | Lineage-first metadata platform | Column-level lineage is the product, and lineage is our screen number one | How a lineage graph stays readable, and what it does when the graph is large |
| PowerMetrics (Klipfolio) | Metric-first analytics platform | Metrics are first-class objects: Metric Catalog, Defined Metrics, Certified Metrics. Closest to the idea of a number card | What a certified metric looks like, what the metric card carries, and what happens when a metric is not certified |
| dbt Semantic Layer | Semantic layer inside a data platform | The de facto standard for "the definition lives in one place" in the modern stack | Where the definition stops: does it reach a reading surface at all, or only an API |

### Facts collected

**Atlan** (`atlan.com/metrics-layer/`, published 2023-08-02, updated 2026-05-06; screen: `research/screens/hard-atlan-metrics-layer.png`)
- Page headline: "Metrics Layer: A Single Source of Truth for All KPI Definitions"
- Definition given: "A metrics layer is a framework for standardizing metrics, i.e., to centralize how a company calculates its metrics. It can be seen as the single source of truth when it comes to defining KPIs used within the organization."
- The page names data teams, data scientists, data analysts and business stakeholders as its audience
- The page does **not** state that the metrics layer carries ownership, lineage or certification status. That claim appeared in a third-party search summary, not on the page, so it is `[?]` until seen in the product
- Pricing: contact sales only, no public numbers (`atlan.com/pricing/`)

**Secoda** (`secoda.co`, opened 2026-08-11; screen: `research/screens/hard-secoda-home.png`)
- Hero: "The AI platform for data and analytics". Sub: "Powered by enterprise data governance and context across your entire data stack, Secoda delivers trusted answers fast and at scale."
- Personas named on the site: Data Leads, Data Engineers, Data Analysts, Data Consumers, Governance Managers, Business Operations, Product Managers
- Named capabilities: search ("Find data in seconds"), end-to-end lineage, unified governance, a 24/7 AI data analyst, monitoring, quality scoring, documentation, access requests
- Pricing (`secoda.co/pricing`): three tiers, Core, Premium, Enterprise. No public numbers. **Viewers are unlimited on all three tiers**, editors and admins are custom priced

**Select Star** (`selectstar.com`, opened 2026-08-11; screen: `research/screens/hard-selectstar-home.png`)
- Hero: "Metadata Context Platform for Data & AI". Sub: "AI-ready data starts here. Automated data catalog, lineage, and semantic models built on your existing data - for humans and AI."
- Three mechanisms sold: automated cataloging, column-level lineage, semantic model generation
- Customer logos on the page: Opendoor, Bose, Fivetran, Intercom
- Pricing: no public numbers, contact sales

**PowerMetrics** (`powermetrics.app`, opened 2026-08-11; screens: `research/screens/hard-powermetrics-home.png`)
- Hero: "When your AI knows your business, so do you." Sub: "When metrics are inconsistent, definitions conflict, and teams can't agree on numbers, AI makes it worse — not better."
- Product is organised around metrics as objects: Metric Catalog, Defined Metrics, Certified Metrics
- Audience stated as growing companies, explicitly including non-technical business users alongside data teams
- Pricing (`powermetrics.app/pricing`), public with numbers: Launch $24/month billed annually, starts at 2 users, extra users $288/user/year, 50 metrics, 4-hour refresh. Professional $35/month billed annually, starts at 3 users, extra users $420/user/year, 200 metrics, 1-hour refresh with a 15-minute option. Custom tier on request. A user is "a named individual who can log into Klipfolio with a unique email address"
- 30-day free trial with full access. Whether a read-only viewer is billable is not stated on the page, `[?]`

**dbt Semantic Layer** (`getdbt.com/product/semantic-layer`, opened 2026-08-11; screen: `research/screens/hard-dbt-semantic-layer.png`)
- Hero: "From exploration to AI, trusted analysis starts with dbt." Sub: "Move faster, trust your data, and scale self-service-all with a unified layer for metrics and governance."
- Problem framing on the page: "inconsistent metrics, slow queries, and scattered tools can quickly erode trust"
- Audience: data teams, with non-technical business users named as the people who get self-serve access
- No specific BI integrations named on the page, only "dozens of out-of-the-box integrations", `[?]`
- Pricing (`getdbt.com/pricing`): Developer free, one seat, Semantic Layer not included. Starter $100/seat/month, five developer seats, Semantic Layer basic. Enterprise and Enterprise+ custom, Semantic Layer advanced

### Known gap in this round

None of the five show the actual product surface without an account. Every claim about how a number, a definition or a lineage graph is *presented* is therefore `[?]` until it is seen in a public demo, a product tour or documentation screenshots. This matters more for Plumb than it would for another product, because the reading surface is exactly what we are designing. Closing this gap is the first thing to do before the matrix.
