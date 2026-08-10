# Competitors

Three groups, five per group. HARD is the same product for the same audience, SOFT is a different product solving the same job, ASPIRATIONAL is a category benchmark.

Every fact below comes from a page opened in the browser on **2026-08-11**. Anything taken from a search summary rather than the page itself is marked `[?]` and is not treated as a fact. Only public, pre-login pages were opened. No accounts were created.

Status: HARD and SOFT collected. ASPIRATIONAL pending.

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

## SOFT

| Product | Type | Why in this group | What to study |
| --- | --- | --- | --- |
| Looker | BI platform with a semantic model | The classic market answer to "we have different numbers": define the logic once in LookML | How a governed definition is surfaced to a reader who never opens LookML |
| Omni | Modern BI with a promotable semantic model | Same job from the other side: ad hoc work gets promoted into governed logic instead of being forbidden | The promotion moment: how an ungoverned number becomes a governed one |
| Cube | API-first semantic layer | Definitions as a service for apps and agents rather than for people | Reader pricing and what a viewer role is actually allowed to see |
| Monte Carlo | Data observability, now positioned as agent trust | Answers "is this number broken" but for the data engineer, not for the person reading the number | How an incident is explained to somebody who did not build the pipeline |
| Sifflet | Data observability with a business-facing frame | Closest to our idea that doubt belongs in front of the business, not only in an engineering channel | How "why it happened" is presented, and to whom |

### Facts collected

**Looker** (`cloud.google.com/looker`, opened 2026-08-11; screen: `research/screens/soft-looker-home.png`)
- H1 "Looker", H2 "Agentic BI platform for organizations"
- Sub: "Go beyond static dashboards with a governed intelligence experience. Leveraging the power of Gemini and Google Cloud's Agentic Data Cloud, Looker delivers the most intelligent BI solution by combining foundational AI, cloud-first infrastructure, industry leading APIs, and our flexible semantic layer."
- On LookML: "By defining business logic in LookML, you create the definitive source of truth for your metrics-whether they are powering a chart or an AI agent. This vital backbone serves as the infrastructure for human analysts and LLMs alike, eliminating agent hallucinations and ensuring total consistency"
- Product highlights listed: Conversational Analytics Agents, composable agentic BI platform, open and trusted semantic model, self-service BI
- Pricing (`cloud.google.com/looker/pricing`): three editions, Standard (under 50 users), Enterprise, Embed, all "Call sales", no dollar figures. Each edition includes 10 Standard Users and 2 Developer Users. Three license types: Developer, Standard, Viewer, where Viewer gets folders, boards, dashboards and Looks only. Conversational Analytics token overage from 2026-10-01: $3.00 per 1M input data tokens, $20.00 per 1M output data tokens

**Omni** (`omni.co`, opened 2026-08-11; screen: `research/screens/soft-omni-home.png`)
- Hero: "The AI analytics platform". Sub: "Omni turns your data into a source of truth for AI, so anyone can get answers they trust."
- Governance model on the page: "experts define core logic, while everyone else contributes domain expertise"
- Personas addressed: data teams drowning in ad hoc requests, business teams tired of waiting, product teams needing AI without roadmap disruption
- Pricing: no numbers on the homepage, and `omni.co/pricing` returns HTTP 404. Public per-seat pricing is `[?]`

**Cube** (`cube.dev`, opened 2026-08-11; screen: `research/screens/soft-cube-home.png`)
- Hero: "The agentic analytics platform built on a semantic layer". Sub: "AI answers your team - and your customers - can trust. Grounded in your semantic model, governed end to end."
- Positioning: chat, workbooks and dashboards grounded on "a single governed model - so every answer ties back to the same numbers"
- Pricing (`cube.dev/pricing`), public with numbers: Free forever, Starter $40 per developer per month, Premium $80 per developer per month, Enterprise custom. On Premium, extra seats are Explorer $40 per user per month and **Viewer $20 per user per month**
- The page does not mention an open-source core, although Cube is widely described as open source elsewhere, so that is `[?]` here

**Monte Carlo** (`montecarlodata.com` redirects to `montecarlo.ai`, opened 2026-08-11; screen: `research/screens/soft-montecarlo-home.png`)
- Hero: "Trust your agents in production". Sub: "Monte Carlo is the agent trust platform that unifies data and agent observability to monitor, troubleshoot, and improve production AI systems."
- The category leader in data observability now leads with agent trust, not with data quality. The old domain redirects to the new one
- Personas listed in solutions: Data Engineers, Data Analysts, Data Governance, CDAOs
- Platform features named in the footer: Root Cause Analysis, Lineage and Impact, Performance
- Pricing: no public numbers, the pricing link is a request for pricing

**Sifflet** (`siffletdata.com`, opened 2026-08-11; screen: `research/screens/soft-sifflet-home.png`)
- Hero: "The Control Plane for Data and AI". Sub: "We catch data issues before they reach the business, show exactly why they happened, and how to fix it. So the data behind every decision is one you can trust."
- Personas addressed: Data Engineers, Data Leaders, Data Users, Data Governance Leaders
- Pricing: no numbers, "Contact us" and "Start for Free Now"

### Known gap in this round

None of the five show the actual product surface without an account. Every claim about how a number, a definition or a lineage graph is *presented* is therefore `[?]` until it is seen in a public demo, a product tour or documentation screenshots. This matters more for Plumb than it would for another product, because the reading surface is exactly what we are designing. Closing this gap is the first thing to do before the matrix.
