# Wireframe conventions

Stage 04, step 2. The contract every screen and every subagent works to. **It inherits rather than starts over:** the wireframes continue the black and white node drawings of stage 03b, and anything they need is already decided somewhere upstream.

Three named readers take three different things from this file. **Stage 05 step 4** takes the rule about zones and the one primary action, plus what each state has to say, so that microcopy is written for states that exist. **Stage 07** takes what was inherited from the IA and does not change when the screens are coloured. **Stage 09 step 1** restates the one primary action rule in terms of system classes and puts it in the usage rules of the design system.

---

## What is inherited, and from where

| What | Where it comes from | The rule |
| --- | --- | --- |
| **Appearance** | The black and white mockups on the IA node pages | One stylesheet, `wireframes/_wf.css`, holding the same greys. **No second visual language, no new palette** |
| **Page text** | The A to E block of each node in `ia/docs/pages/` | Real copy, so lorem ipsum is never needed. **The three screens of this round are all noindex and carry no A to E block**, by the decision at node 0.2 that indexing a card would publish customers' numbers; their content comes from their block lists. Finished A to E copy exists on the four indexed nodes and arrives with the step 8 round |
| **Block order** | The content blocks table of each node | Read the IA anatomy as an ORDER and a priority, and render it as one live screen |
| **Components** | The IA nodes that define them | Card 2.1, listing 4.1, dialog 2.8, error page 7.1, document shell 6.4, settings shell 5.1, state wording 0.4, footer 0.2, feedback 0.3. Include once and reuse |
| **States and routes** | The States section of each node, plus `ia/docs/flows.md` | The state set is the node's, not the floor of four. Every exit is checked against the flow |
| **Illustrative data** | The IA mockups | One canonical set, below. A screen that invents its own numbers makes two screens disagree |

**Interface strings are the one exception, and they are draft here.** The A to E block does not carry button labels, field labels or state text, and it never will: a node holds the requirement for *what information* belongs in a place. So write them plainly, by the substance of the action, with no advertising and no exclamation marks. **Stage 05 owns them** and will replace them; they are not pushed back into the IA.

---

## The canonical illustrative data

Taken from the IA mockups, not invented. Every screen in the product uses this one metric so that the card, its states, its source layer and the dialog agree with each other.

| Field | Value |
| --- | --- |
| Metric | Weekly active accounts |
| Value | 18,432 |
| Read at | 14:25 |
| As of | 14:05, 20 minutes ago |
| Expected cadence | Hourly |
| Definition | Distinct accounts with at least one session in the last 7 days, counted on the account, not the user |
| Declared by | Dana Reyes, Analytics, on 3 August |
| Source | Snowflake, ANALYTICS.PROD |
| Table or view | FACT_SESSIONS |
| Last successful run | 14:05 today, and 07:40 when the source is down |
| Permanent link | plumb.app/m/8f2c41?v=7&t=2026-08-12T14:25 |
| Previous definition | Distinct accounts with a session in the last 30 days, declared by Dana Reyes on 12 July |

**The previous definition is the only value here that the IA does not spell out.** It is required by state 2.5, which shows what the definition used to say, and it is written down here rather than left to each screen, which is exactly what this section is for.

---

## Fidelity

- **A live screen, not a schema.** Every wireframe is a real page filling the viewport, which clicks and scrolls. Not the node anatomy of stage 03b, not two frames labelled desktop and mobile on one page, not skeleton placeholders standing in for a screen.
- **One viewport, mobile first, 360 is the base.** The screen is responsive and rebuilds itself on a wider canvas. **The phone view is checked by narrowing the browser**, never by a second file.
- **Grey only.** No colour, type choice, brand, icons, shadows or images. A state is told apart by its words and its position, never by hue. Those arrive at stages 06 to 08, and they arrive on copies of these screens in `design/`.
- **Zones have roles.** Every zone answers what it is doing there. A zone with no role is a defect, not filling. The footer is secondary and never competes with the main action.
- **At most one primary action per screen, and node 2.1 has none by decision.** The primary act on the card is reading, and it is complete on arrival; its two actions are secondary. **The rule is a ceiling, not a quota:** a screen with no primary action is correct when its node says so, and inventing one for the card would sell the reader's zero tap answer to somebody.

## Markup

- Semantic HTML: `header`, `nav`, `main`, `section`, `article`, `form`, `button`, `dl`. Buttons and fields are real elements, not styled boxes.
- One `h1` per screen, and it is the metric name on the card.
- The panel is a `details` element so that it collapses on a phone without script.
- Every screen links `_wf.css` and `_nav.js`, and nothing else.

## Files and naming

- Latin file names, taken from the node names in `ia/docs/sitemap.md`.
- `wireframes/<screen>.html` is the **ordinary condition**. Every other state is `wireframes/<screen>-<state>.html`, one page per state, so that the prototype navigates between them.
- `overview.html` is the hub. It is not the home screen and never becomes one.
- **`index.html` is reserved and stays uncreated in this round.** The pipeline reserves that name for the home screen of the product, and this product deliberately has none: the reader arrives at a card by link and has no home. The entry point of the map is node 6.1, the product page, which is the only indexed page in the product and belongs to the step 8 round. **If anything ever becomes `wireframes/index.html`, it is 6.1 and nothing else.**

## States

- Every state is its own page, with the same structure and different content.
- **The floor is four**, empty, error, loading and success. The real set comes from the node. Success is not added everywhere by reflex.
- **Every state has a visible way out**, checked against `ia/docs/flows.md`. No dead ends, with one recorded exception: node 2.10 is a partial close, and the reader's dead end when the owner may not be shown is a price the IA named and accepted.
- A state that is not in the node specification is not drawn. If one is missing, **the IA is repaired first**, then the screen is rendered.

## Inline CSS is transport, not a home

At step 8 the screens are built by parallel agents, and they cannot all write into `_wf.css` without colliding. So an agent puts its own screen's rules inline, and the reconcile pass of the same step folds them back. Two rules decide where a declaration ends up:

1. **A token value never lives inline**, not even on one screen. It is already a variable in `_wf.css`, and the screen writes `var(--wf-...)`. A literal inline is where drift starts.
2. **A rule that appears on two or more screens moves into `_wf.css`.** That is the same two occurrence test stage 07 uses to decide what is a component. Only something genuinely single use stays inline, and even that is written through variables.

Every inline block opens with a marker comment reading `INLINE: <screen name> :: to fold into _wf.css`, so the reconcile pass finds them all by grep rather than by reading twenty files.

**Why this is not pedantry.** Stage 07 extracts the component classes of the kit from these screens. If the structure of twenty screens lives in twenty inline blocks, the extraction honestly collects the differences: three versions of the card, two grids, four spacings where there should be one. The audit at stage 08 then shows the forks, three stages after they were created.

## Nothing is invented here

A block, a page or a state appearing for the first time in a wireframe is a defect in the IA, not a feature of this stage. **Repair upwards, then render.** This covers blocks, states and transitions. It does not cover button and field wording, which is draft here by the rule above.

## Not now

Colour, type, shadows, icons, images and finished UI. Stages 06 to 08. `_wf.css` stays grey after them too.
