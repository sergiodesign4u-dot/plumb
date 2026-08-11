# AARRR

The funnel: how a person arrives, activates, comes back, pays and brings somebody else. Five stages, and on each one **exactly one metric and exactly one product decision**. Mechanics and hypotheses may be several, the metric may not: two metrics on a stage is not twice the information, it is a lost focus.

Written on 2026-08-11 from `CLAUDE.md`, `research/docs/competitors.md`, `research/docs/benchmark.md` and `research/docs/lean-ux-canvas.md`.

**Every baseline below is `[?]`.** There is no product, no traffic and no cohort, and the category gives nothing to borrow: seven of the ten HARD and SOFT products publish no seat price (`competitors.md`, pattern 3). So every target here is a hypothesis and is labelled as one. Where a number from outside is used as an anchor, it is cited.

**One structural note before the stages.** This funnel has two bodies and one wallet. The analyst pays and never spreads; the business reader spreads and never pays. They enter at different points, and any metric that averages them hides the exact thing we are trying to learn. That is why the stages below name whose funnel they are.

---

## Acquisition

**Whose stage:** the analyst or data lead. Readers do not arrive here, they arrive through a link, which is Referral.

**Channels and mechanics**

- **Search on the reconciliation problem, not on the category.** The public part of the product is server rendered for exactly this reason (`CLAUDE.md`, tech stack). The intent we want is "why do two dashboards show different numbers", "who owns this metric definition", "how to document metric definitions", not "data catalog" or "semantic layer", where Atlan, Secoda and dbt are already sitting with enterprise budgets.
- **A public, real metric card as the artefact people land on.** Not a screenshot of one.
- **Data practitioner communities.** dbt Slack, Locally Optimistic and similar. Whether these are still the live watering holes in 2026 is `[?]`, not checked on a page in this session.
- **The vacated position.** `montecarlodata.com` now redirects to `montecarlo.ai` and the leader sells agent trust (`competitors.md`). Trust in a number read by a person is momentarily unclaimed, and that is a positioning line, not a channel.
- **Not a channel for us:** paid search against Atlan, Secoda or Select Star keywords. Enterprise contact-sales categories bid these up and we have no sales motion to catch what lands.

**Hypotheses**

1. The analyst searches for the symptom, not for the category, because they do not yet know they want a metric layer. They know they were asked the same question three times this week.
2. A working card beats a feature list, because the product is one screen wide and its whole argument is visible in it. This is the reverse of the market habit: fourteen of the fifteen pages opened put the answering system in the subject of the sentence, never the figure being read (`competitors.md`, pattern 1).
3. The first contact is with the analyst, never with the buyer. The head of data appears at the seat purchase, not before (`CLAUDE.md`).

**What is unknown**

- Search volume on symptom queries, `[?]`. Not measured, and it may be far thinner than category volume.
- Whether the phrase we would use ("metric trust") means anything to an analyst who has never had the problem named for them, `[?]`.
- Whether communities tolerate a product mention at all in 2026, `[?]`.

**One metric:** qualified workspaces created per week, where qualified means a company of 50 to 300 with a data team of 1 to 5 (`CLAUDE.md`, audience).
**Target:** 5 per week by month 3 [hypothesis].

**One product decision for the MVP:** the public marketing page renders **the same metric card component the app uses**, on real data, with a real freshness line and a real state, not an image of a card. The demo and the product are the same code. Consequence taken deliberately: the card must be presentable with no account and no context, which is the same requirement Activation makes of it, and the two decisions therefore reinforce rather than compete.

---

## Activation

**Whose stage:** the business reader, and this is a deliberate choice rather than the obvious one.

> ### The activation node
>
> **The first time a metric card is opened by somebody other than the person who wrote its definition.**
>
> Read by stage 03a step 4: this is the node that must be visible in the flow of the main job. Everything before it (connecting a source, writing a definition, naming an owner) is setup, not activation.

**Why not "source connected" or "first metric saved".** Both are the analyst congratulating themself. The product's promise is that a number stops being argued about, and no part of that has happened until a second person has read one. It also makes the funnel and the strategy fail at the same point: the activation event is precisely the event the riskiest assumption predicts (`lean-ux-canvas.md`, block 7). If the assumption is wrong, activation stalls, and we do not need a separate instrument to find out.

**Mechanics**

- The analyst writes a definition once, names an owner, and gets a link.
- The link opens a card carrying the value, its age in relative time with the expected cadence, the source in one line, the definition, and who declared it and when (`lean-ux-canvas.md`, block 5).
- If something is wrong, the card says which kind of wrong: stale, source down, definition changed after this was saved. Three states, three treatments, never one red badge (`benchmark.md`, mechanism 1).

**Hypotheses**

1. A reader will open a link sent in answer to their own question. This is nearly free to believe.
2. A reader who has opened one will recognise what they are looking at without training, because the card is legible to a layperson by construction (criterion 6, `benchmark.md`).
3. Activation is faster if the reader needs no account. Every competitor whose product surface we could see puts the reading behind a login, and Secoda goes further, restricting even the lineage graph to what a viewer may access (`docs.secoda.co/features/data-lineage`).

**What is unknown**

- Whether a reader opens the link **before** using the number or after being contradicted, `[?]`. This is the difference between a product and a post-mortem tool, and only the first test in `lean-ux-canvas.md` block 8 can tell us.
- How many metrics an analyst must write before a reader's question is likely to hit one already in the registry, `[?]`.
- Whether US B2B security review tolerates an account-free read at all, `[?]`, and it will be asked at the same time as SOC 2 (`CLAUDE.md`).

**One metric:** share of new workspaces where a card is opened by a second person within 7 days.
**Target:** 50% [hypothesis].

**One product decision for the MVP:** **a metric card is readable through its link with no account.** The logged-out card carries the value, the freshness line, the source line, the definition and the attribution. It does not carry the lineage tree, the registry or any other metric, and the link is revocable by the owner. The honest cost is named rather than discovered later: this is a security surface in a market where SOC 2 Type II is the purchasing gate, and it is the reason the trust surface has to exist in the IA from the start rather than after the first enterprise call.

---

## Retention

**Whose stage:** both, and their curves are not the same shape. The analyst returns because the registry is their working file. The reader returns only when they next need to be sure, and that need does not arrive daily.

**The honest problem, stated first.** Plumb is a check-when-in-doubt tool, and notification routing is explicitly out of MVP (`CLAUDE.md`). So there is no push, nothing that reaches out, and no daily habit to build. Retention has to be carried by two things only: a URL that stays valid, and a card that has something new to say when it is reopened.

**Mechanics**

- One permanent URL per metric. It survives being pasted into a deck, a Slack message and a document, and it is still the same address a month later.
- The state does the returning, not us. A card reopened after its definition changed says "definition changed after this was saved", which turns a stale link into new information instead of a wrong number (`CLAUDE.md`, MVP scope).
- Relative age plus expected cadence, so a reopened card tells you in one line whether it is behaving normally: "as of 14:05, 20 minutes ago, expected hourly" (`benchmark.md`, mechanism 3).

**Hypotheses**

1. The reader returns to the same URL rather than asking again, once they have learned that the URL answers.
2. A card that speaks up about a changed definition earns a second visit that a silent card would not.
3. The analyst's retention follows the registry: every metric added raises the chance the next question lands on one that already exists, so their curve should climb where the reader's stays flat and event-driven.

**What is unknown**

- The natural frequency of the reader's need, `[?]`. If it is monthly, weekly retention is the wrong instrument and we will be measuring noise.
- Whether a link pasted into a deck is ever clicked again by anyone, `[?]`.
- Whether the absence of notifications is a retention hole or the reason the product stays welcome, `[?]`. Both are plausible and we should not decide it from the armchair.

**One metric:** 4-week reader return, the share of readers who opened a card in their first week and open one again in week 4.
**Target:** 35% [hypothesis].
**Instrument caveat, named because it will bite:** distinguishing "returned on their own" from "was sent the link again" needs the share event recorded next to the open event. If that is not built, the metric silently measures the analyst's behaviour instead of the reader's.

**One product decision for the MVP:** **one permanent URL per metric, and it is what the copy action gives you.** No expiring share tokens, no "open in app" redirect that costs a login, no per-share copies of a card. The URL is the unit of sharing, quoting and returning, which is also what makes the metric above measurable at all.

---

## Revenue

**Whose stage:** the analyst pays, the head of data or COO signs (`CLAUDE.md`).

**Mechanics**

- Seat-based. Analyst seats are paid, readers are free or near free.
- The paywall sits on write access: defining, owning and connecting. Reading is never metered.
- SSO through WorkOS or Auth0 because US B2B asks in the first call (`CLAUDE.md`), and SOC 2 Type II as the later purchasing gate.

**Hypotheses**

1. Charging per reader kills the mechanism the product grows by, so we do not. There is no norm to inherit here, only a choice: Secoda gives unlimited viewers on all three tiers, Cube charges $20 per viewer per month, Looker makes Viewer a separate license type (`competitors.md`, difference 1).
2. Charging by metric count penalises exactly the behaviour that is activation. PowerMetrics caps at 50 and 200 metrics on its two public tiers (`powermetrics.app/pricing`). We take the opposite side of that trade deliberately.
3. The price anchor in this market is wide and mostly hidden: dbt Starter is $100 per seat per month, PowerMetrics is $24 and $35 per month billed annually with extra users at $288 and $420 per year, and seven of the ten HARD and SOFT products publish no seat price (`competitors.md`). Our own number is `[?]` and will be set against a customer conversation, not against this range.

**What is unknown**

- Whether readers pay, which is open question 1 in `competitors.md` and reaches straight into the IA.
- Whether free unlimited readers create a ceiling where a team buys one seat and stops, `[?]`.
- Whether SOC 2 Type II blocks the first paid deal or only the first deal above some company size, `[?]`.

**One metric:** share of activated workspaces that buy at least one analyst seat within 30 days of activation.
**Target:** 20% [hypothesis]. The 30-day window is taken from the category rather than invented: PowerMetrics runs a 30-day free trial with full access (`powermetrics.app/pricing`).

**One product decision for the MVP:** **no metric count limit on any plan, and no reader seat, ever.** The only billable object is an analyst seat, meaning write access to definitions and connections. This is the pricing shape stated in `CLAUDE.md` turned into a product rule that the IA must respect: there is no upgrade wall anywhere on the reading path, so no screen a reader can reach may contain one.

---

## Referral

**Whose stage:** the business reader, and the loop is probably not the one it looks like.

**Mechanics**

- Every shared card is the product demo. A reader who opens one has seen the whole argument, which is why the same component serves the marketing page (Acquisition decision above).
- Attribution is the social object. The card names who declared the definition and when, which turns "I do not trust this number" into "I will ask this person", a far cheaper action.
- Reader to reader spread inside a company: a card forwarded in a thread costs us nothing and adds a reader per forward.

**Hypotheses**

1. The dominant loop is **lateral, inside one company**, not between companies. Metrics are internal by nature, and a card carrying a real revenue figure is not going to be forwarded to another firm.
2. Therefore the referral engine raises readers per paid seat, which is the business outcome the pricing depends on (`lean-ux-canvas.md`, outcome 2), and does **not** produce new logos. New logos come from Acquisition, and we should stop expecting a viral curve this product shape cannot make.
3. The rare cross-company case, an analyst or reader who changes jobs or works with an agency, is high intent and low volume. Worth nothing in a forecast, worth watching in interviews.

**What is unknown**

- Actual forward rate inside a company, `[?]`.
- Whether a reader who received a card ever tries to make one, or whether the two roles never swap, `[?]`.
- Whether a public, non-sensitive card (a definition with no value attached) is a thing anyone would share outwards, `[?]`. If yes, it is a second, slower acquisition channel and it changes what the public surface has to support.

**One metric:** distinct readers per paid analyst seat at day 30.
**Target:** 8 [hypothesis], matching business outcome 2 in `lean-ux-canvas.md`.

**One product decision for the MVP:** **a reader can bring another reader in one action, with no admin approval and no seat**, bounded by verified email domain so the blast radius is the company that already has access. Routing invitations through the analyst or an admin would put a queue in the middle of the only loop the model depends on, and free readers with a gatekeeper are not free readers.

---

## Metric summary

| Stage | Whose funnel | The one metric | Target [all hypotheses] | Baseline |
| --- | --- | --- | --- | --- |
| Acquisition | Analyst | Qualified workspaces created per week | 5 per week by month 3 | `[?]` |
| **Activation** | **Reader** | **Workspaces where a second person opens a card within 7 days** | **50%** | `[?]` |
| Retention | Reader | 4-week reader return | 35% | `[?]` |
| Revenue | Analyst | Activated workspaces buying a seat within 30 days | 20% | `[?]` |
| Referral | Reader | Distinct readers per paid analyst seat, day 30 | 8 | `[?]` |

| Stage | The one product decision |
| --- | --- |
| Acquisition | The public page renders the real card component, not a picture of it |
| Activation | A card is readable through its link with no account |
| Retention | One permanent URL per metric, and it is what copy gives you |
| Revenue | No metric limits and no reader seat; only analyst write access is billable |
| Referral | A reader invites a reader in one action, bounded by email domain |

---

## Conclusions

**1. The funnel has two bodies and one wallet, and averaging them would destroy it.** Readers move through Activation, Retention and Referral. Analysts move through Acquisition and Revenue. A single "active users" number would mix a person who pays and returns weekly with a person who is free and returns monthly, and it would look healthiest exactly when the readers stopped coming.

**2. Activation is defined on the reader on purpose, and it doubles as the test of the riskiest assumption.** The activation event and the event predicted by `lean-ux-canvas.md` block 7 are the same event. That is deliberate instrument design: the funnel cannot show green while the strategy is wrong.

**3. Retention is the weakest stage and the cut that made it weak was ours.** No notification routing means nothing reaches out, so the whole stage rests on a permanent URL and on a card that has something new to say when reopened. If retention fails in the first cohort, the first thing to reconsider is that scope cut, not the metric or the target.

**4. Referral grows readers, not logos, and saying so now prevents a bad forecast later.** Metrics are internal, so cards travel inside a company. That raises readers per seat, which is the one number the pricing model depends on, and produces almost no new accounts. New accounts have to be bought or earned in Acquisition.

**5. Four of the five product decisions land on the same object.** The card must work with no account, keep one permanent address, carry no upgrade wall, and be the public demo. The reading surface is therefore not one screen among fifteen, it is the load-bearing object of the whole IA, and stage 03a should treat it that way.
