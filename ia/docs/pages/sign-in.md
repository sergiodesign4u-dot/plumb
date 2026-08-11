# 1.1 Sign in, with its two states

**Page:** Sign in · **Type:** page · **Node:** 1.1 · **Scope:** MVP · **Group:** pages

**States in the same pass:** 1.2 the identity provider is answering, 1.3 authentication failed.

**This is the one MVP screen that closes no job**, and the traceability matrix already said why in four words: **sign in is a gate, not a place.** This node is where that line has to hold against the pressure every sign-in page is under to become something else.

---

## Purpose and jobs

**Purpose.** Let an analyst into their workspace, and let nobody else in.

| Job | Relationship |
| --- | --- |
| **R5, R2** | **Precondition, not closure.** Nothing here is the work; everything here is what the work needs first |
| Any job of the reader | **None.** The reader never signs in |

### Why a screen that closes no job is in MVP, and it is not only the obvious reason

The obvious reason is that the analyst's three screens are unreachable without it.

**The second reason is that this is the only place in the MVP where the buyer is visible.** `CLAUDE.md` records the head of data or COO as a deliberate non-persona with no product surface, who nonetheless imposes SOC 2, SSO and a trust surface. **SSO is the one of those three that has to exist as a screen**, and this is the screen. It is a gate for the analyst and a piece of evidence for the person who signs the contract, and it is the only MVP node doing double duty like that.

**Depth in taps.** One action.

## URL and breadcrumbs

- **URL:** `/signin`
- **Breadcrumbs:** none. A gate has no trail
- **Indexation:** `noindex, follow`. Publicly reachable but transactional, and **an indexed sign-in page competes with node 6.1 for the brand query**, which is the acquisition page's whole purpose

## Content blocks, mobile-first priority

Composition from `ia/docs/blocks.md`, type T4.

| # | Block | Note |
| --- | --- | --- |
| 1 | **Product name**, small | A gate is not a landing page |
| 2 | **Heading**, one line | |
| 3 | **Work email**, one field | The only field |
| 4 | **Continue with SSO**, one action | **The only route.** See below |
| 5 | **A contextual notice slot** | Used only when there is something true to say |
| 6 | **The legal line**, with the prior-agreement clause | |
| 7 | **Footer**, node 0.2 | |

### What is not on this page, and it is most of what is usually on this page

| Not here | Why |
| --- | --- |
| **Password field** | The tech hypothesis commits to OIDC and SAML through a provider. A password field we do not use is an attack surface, a support queue and a reset flow |
| **Reset password** | Falls with the field. **This is the clearest saving in the type:** no password means no reset, no expiry, no rotation, and three fewer nodes than a conventional gate |
| **GitHub and Google buttons** | A personal account signing into a company workspace is the thing SSO exists to prevent |
| **Create an account** | Self-serve sign-up is acquisition, and cluster 6 is entirely ПОТІМ. Recorded rather than dropped: when it arrives, it arrives here |
| **Language selector** | One language. The project boundary settles it |
| **A disabled primary action** | A disabled button with no stated reason is a dead end that looks like a bug. Ours stays enabled and answers on submit, **which is also what makes 1.3 reachable** |

### The comparison here is real, because both domain sources were opened live

Both dbt Cloud and Cube Cloud sell into US B2B, where the research records that SSO is asked about on the first call. **In Cube Cloud the SSO route is fifth on the page, behind email, password, GitHub and Google. In dbt Cloud there is no SSO control on the sign-in page at all.**

**Both treat the enterprise route as the exception. For a product whose buyer imposes SSO before the security review, the exception route is the main one**, and ours is the only one.

## Components and variants

| Component | Variant | Note |
| --- | --- | --- |
| Text field | Work email, single | |
| Button | Primary, full width at 360 | Enabled always |
| **Notice slot** | Informational, above the field | Empty by default. A slot that is usually empty is not a wasted block: it is the only moment a gate has to explain something before it fails |
| Banner | Error, above the field | From node 0.3: this belongs to the thing on screen, so it is not a toast |
| Progress in place | 1.2 | No spinner over a dimmed page |
| Footer | Node 0.2, canonical | |

## States

| Node | State | What happens |
| --- | --- | --- |
| **1.1** | The gate | One field, one action |
| **1.2** | **The identity provider is answering** | Progress in place, **naming whose answer is being waited for**. See the rule below |
| **1.3** | **Authentication failed** | The reason named, the specific case named separately, one route back |
| | Signed in | **First run of a workspace: to 3.2.** Returning: to 4.1 |

### 1.2 has no cancel, and that is a decision rather than an omission

**An OIDC round trip takes the browser to somebody else's system and brings it back.** A cancel control during that window returns a person to a half-state: not signed in, not signed out, and holding a page that may be about to be replaced by a redirect they did not expect.

**So there is no cancel.** What there is instead: the progress says which provider is being waited for, and **a stated timeout with a route back to the gate**, which is the same thing a cancel was for without the state it would have left behind.

### 1.3, and the three failures, which are the same shape as node 3.2's

| What happened | What the page says | Where the fix is |
| --- | --- | --- |
| **The address belongs to no configured workspace** | That this domain is not set up with Plumb yet, in those words | **Their own admin.** The person who set Plumb up at their company has to add the domain |
| **The provider answered and refused** | That the identity provider declined, and that nothing about the address was wrong | **Them or their admin**, and retrying is reasonable |
| **The provider did not answer** | That we could not reach the provider, and that this is not about them | **Neither side.** Waiting is the only honest advice |

**The first row is the real failure of an SSO gate**, and naming it is what stops 1.3 being a generic "something went wrong". A wrong password is not available to fail on here; an address that belongs to nobody is.

**The route out is back to the gate, and the gap is named.** In MVP there is nowhere else to send somebody: support and contact is node 6.7 and it is ПОТІМ. **So the message has to carry the instruction rather than a link**, and it says who at their company can fix it rather than offering us as the fix.

### The reader never arrives here, and node 2.9 does not send them

**Cluster 1 is entirely the analyst's.** Node 2.9, "not readable without an account", refuses login wall theatre, and this node gives that refusal a mechanical reason rather than a stylistic one: **a person who reaches 2.9 has no workspace to be signed into. If they had one, the card would have opened.** Offering them a sign-in they would fail at 1.3 turns a partial answer into a dead end with a form in it.

## Filters and facets

None. This is a gate.

## Primary call to action

**Continue with SSO.** One, and it stays enabled.

## Emotional support

**Nothing from the emotional and social table lands here.**

**And this is the third analyst screen in a row to say that, which is a finding rather than three gaps.** The mechanisms in that table live on the card, on the owner field and on the registry count. **The analyst's infrastructure screens carry none of them**, and a stage that added one to each would be inventing feeling to fill a section.

## Responsive

**360:** single centred column, the field and the action full width, targets at 44 by 44. The footer is the only thing below.

**Wide:** the same column, capped and centred vertically. **Nothing is added at width**, because there is nothing this page is holding back.

---

## SEO block

**`noindex, follow`, no schema, no SEO text.** Publicly reachable and transactional. `follow` rather than `none` because the footer's links are real and there is no reason to strand a crawler that arrives here. **The reason to keep it out of the index is competitive with ourselves:** node 6.1 is the page that should answer a brand query, and a sign-in page ranking for it costs a visitor the explanation.
