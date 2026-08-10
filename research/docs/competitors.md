# Competitors

Three groups, five per group. HARD is the same product for the same audience, SOFT is a different product solving the same job, ASPIRATIONAL is a category benchmark.

Every fact below comes from a page opened in the browser on **2026-08-11**. Anything taken from a search summary rather than the page itself is marked `[?]` and is not treated as a fact. Only public, pre-login pages were opened. No accounts were created.

Status: all three groups collected, matrix and open questions written.

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

## ASPIRATIONAL

| Product | Type | Why in this group | What to study |
| --- | --- | --- | --- |
| Datadog | Infrastructure observability | The bar for showing state and freshness in a dense interface and letting people go deep without losing context | How a broken state reads next to a healthy one at a glance |
| Grafana | Open observability platform | The bar for reading state at any width, phone included | What survives at narrow width and what is dropped |
| Snowflake Horizon Catalog | Governance inside the data platform | Our landscape: if governance moves into the warehouse, Plumb has to know where it is still needed | What the platform gives away for free and where a separate product still has room |
| Databricks Unity Catalog | Governance inside the data platform | Same pressure from the other side of the market | Same |
| Hex | Notebook and data app platform | The best in category at explaining how a result was produced | How the steps behind a number are shown without turning into a wall of code |

### Facts collected

**Datadog** (`datadoghq.com`, opened 2026-08-11; screen: `research/screens/asp-datadog-home.png`)
- Hero: "AI-Powered Observability and Security". Sub: "See inside any stack, any app, at any scale, anywhere."
- Personas addressed: engineers and developers, IT operations, business users, security
- No pricing numbers on the homepage

**Grafana** (`grafana.com`, opened 2026-08-11; screen: `research/screens/asp-grafana-home.png`)
- Page title: "Full-stack observability for the agentic era". Hero: "AI for observability. Observability for AI. One platform for both." Sub: "Full-stack observability with Grafana Cloud"
- Free Forever plan, open standards named: OpenTelemetry, Prometheus
- No dollar figures on the homepage

**Snowflake Horizon Catalog** (`snowflake.com/en/product/features/horizon/`, opened 2026-08-11; screen: `research/screens/asp-snowflake-horizon.png`)
- Hero: "Snowflake Horizon Catalog". Sub: "Govern and find data and AI assets across Snowflake and external catalogs. Enterprise context, lineage, data quality monitoring and AI guardrails mean every answer is traceable and trusted."
- Named capabilities: column-level lineage, data quality monitoring, natural language discovery, sensitive data classification and masking, access controls
- Whether governance is included in platform licensing or priced separately is not stated on the page, `[?]`

**Databricks Unity Catalog** (`databricks.com/product/unity-catalog`, opened 2026-08-11; screen: `research/screens/asp-databricks-unity-catalog.png`)
- Hero: "Unified governance for data, apps and AI agents". Sub: "Ensure your data, models, agents and apps are discoverable, governed and secure"
- Named: "Automated lineage", described as "End-to-end automated column-level lineage for data and AI assets to simplify impact analysis, troubleshooting, governance and AI audits"
- Metric views are not named on this page, `[?]`
- Pricing not stated on the page

**Hex** (`hex.tech`, opened 2026-08-11; screen: `research/screens/asp-hex-home.png`)
- Hero: "The AI Analytics Platform where trust meets insight". Sub: "Finally — anyone can get data insights grounded in the facts of their business. Hex has a flexible approach to context that earns trust without slowing you down."
- Trust is framed as grounding in a context engine (semantic models, database descriptions, business rules), not as showing the working
- Tiers named: Community (free), Professional, Team, Enterprise. No numbers on the homepage

## Matrix: the five most relevant

| | PowerMetrics | Secoda | Atlan | dbt Semantic Layer | Sifflet |
| --- | --- | --- | --- | --- | --- |
| **Audience** | Growing companies, non-technical business users plus data teams | Whole data org including Data Consumers, Business Ops, PMs | Enterprise data teams and stakeholders | Data teams, with business users as consumers | Data engineers, leaders, users, governance |
| **What the product is built on** | The metric as a first-class object | The asset catalog | The enterprise metadata graph | The dbt model | The pipeline and its incidents |
| **Key mechanism** | Metric Catalog with defined and certified metrics | Search plus lineage plus governance in one UI | Metrics layer as the standard for KPI definitions | Definitions compiled once, served everywhere | Catch the issue before the business sees it and explain why |
| **Where trust is shown** | On the metric, as certification | In the catalog, next to the asset | In the governance layer | In the API contract | In the incident |
| **Monetization** | Public: $24 and $35 per month annually, extra users $288 and $420 per year, capped at 50 and 200 metrics | Tiers with no public numbers, viewers unlimited | Contact sales only | Free developer tier, $100 per seat per month for Starter | No public numbers, free entry offered |

## Three common patterns

1. **Trust is sold as a property of the answering system, not of the number.** Ten out of ten products opened here lead with AI in 2026: Looker sells a semantic layer "eliminating agent hallucinations", Omni turns data into "a source of truth for AI", Cube sells "AI answers your team can trust", Monte Carlo sells agent trust outright. The subject of the sentence is always the system that answers, never the figure being read.
2. **Definition governance lives in a producer tool, and the last mile is delegated.** LookML, dbt, the semantic layer and the catalog all own the definition, then hand the number to a BI surface owned by somebody else. No product in this set treats the reading surface as its own product.
3. **Pricing is mostly opaque.** Seven of the ten have no public numbers. Public figures exist only at PowerMetrics, Cube and dbt. In a market where the buyer is a data lead, contact-sales is the default rather than the exception.

## Three differences

1. **Reader pricing splits the market.** Secoda gives unlimited viewers on every tier, Cube charges $20 per viewer per month, Looker makes Viewer a separate license type. There is no market norm to inherit here, only a choice to make.
2. **The object of the product differs, and it decides the interface.** A metric as object (PowerMetrics) produces metric cards. An asset catalog (Secoda, Select Star, Atlan) produces tables and graphs. An incident (Monte Carlo, Sifflet) produces an alert feed. Same job, three completely different screens.
3. **The pricing lever differs.** Metric count caps at PowerMetrics (50 and 200), pure seats at dbt ($100 per seat), consumption at Looker (token overage from 2026-10-01 at $3 and $20 per 1M tokens).

## Our gaps

- **Provenance at the point of reading, on a phone.** Every product in this set assumes a desktop working session. Nobody sells the five minutes before a meeting, which is exactly when a wrong number does its damage.
- **Doubt addressed to a business reader.** Sifflet comes closest by promising to explain "exactly why they happened", but the incident is still routed to people who own pipelines. A reader who is not on that channel sees a number with no warning at all.
- **Ownership visible on the claim.** Certification exists (PowerMetrics), but the pattern is a badge, not a name and a time attached to a definition where somebody reads it.
- **The space Monte Carlo just vacated.** The category leader moved up to agent trust. Trust in a number read by a person is now less defended than it was a year ago.

## Three open questions

**1. Do readers pay?**
Addressee: me as product owner, no stakeholder exists yet.
What changes when answered: the business model line in `CLAUDE.md`, whether the MVP needs a shared read-only link at all, and whether the reading surface must work for somebody with no account. This is a pricing decision that reaches straight into the IA.

**2. Does charging by metric count actually punish filling the registry?**
Addressee: analysts at three target companies, none interviewed yet. Until then it stays a guess.
What changes when answered: the business model hypothesis, and the activation metric in AARRR. If a cap does not hurt adoption, the whole "seats not metrics" argument in the brief loses its ground.

**3. Is an AI agent a second reader of our number, and does it read the same surface?**
Addressee: a data lead in a target company, plus me as owner for the scope call.
What changes when answered: whether provenance needs a machine-readable surface inside the MVP. If yes, the MVP grows an API and the IA grows a whole branch. If no, we stay a human-facing product while the entire market moves the other way, and that has to be a deliberate choice rather than an oversight.

### Known gap in this round

Checked on 2026-08-11 whether Refero could close this gap: it cannot. Searches for lineage graphs, metric detail pages and data warehouse consoles return consumer and developer SaaS (Resend, Intercom, n8n, GlossGenius, Vercel, Anthropic console), and not one product from this competitor set. Refero indexes the categories it indexes, and enterprise data tooling is not among them. Recorded here so nobody spends the search twice. The route that will work is public documentation, which carries real interface screenshots without an account.

One useful thing did come out of that search: Resend puts its freshness marker in "a small update timestamp footer" (`refero.design/pages/9d0debce-382e-442d-91a2-31a623730246`). That is a live example of the pattern our first design principle forbids, and it is worth keeping as a counter-reference.

None of the fifteen show the actual product surface without an account. Every claim about how a number, a definition or a lineage graph is *presented* is therefore `[?]` until it is seen in a public demo, a product tour or documentation screenshots. This matters more for Plumb than it would for another product, because the reading surface is exactly what we are designing. Closing this gap is the first thing to do before the matrix.
