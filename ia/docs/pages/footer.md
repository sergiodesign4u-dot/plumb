# Node 0.2: Footer

**Type:** section &nbsp;&nbsp; **Group:** global &nbsp;&nbsp; **Scope:** MVP &nbsp;&nbsp; **Page:** `ia/footer.html`

**The footer is the only global surface the reader ever sees.** Navigation is absent in the guest state by decision, so everything a global frame normally does, identity, legal footing, the second plane of internal linking, lands here. That makes this node structural rather than decorative, and it is why it was given MVP scope at step 1 despite having no parent screen to inherit from.

---

## The decision this node forces, and it is bigger than a footer

**The number card is publicly reachable and must not be indexed.** A card carries a customer's business figure. Publishing it to a search engine would mean publishing our customers' numbers, which is the opposite of what a company buys this product for.

- **Public** means no account is required, because the reader will never have one.
- **Not indexed** means `noindex`, no sitemap entry, and a URL that cannot be guessed.

The two are not in conflict and the distinction has to be written down here, because "public page" reads as "indexed page" to every later stage. **The consequence for this node:** the footer's SEO linking block appears only on the public marketing surface, never on a card, and a card's footer is the minimal variant.

---

## Three variants, not one

| Variant | Where | What it carries |
| --- | --- | --- |
| **Minimal** | On the number card (2.1) and its states, seen by the reader | Trust line, wordmark, privacy, terms, and one route to what Plumb is. Nothing else |
| **Full** | On the public surface (6.1 to 6.4), seen by a buyer or an analyst evaluating us | Trust strip, link columns, the SEO block, the bottom line |
| **App** | Behind sign-in, seen by the analyst | The bottom line only. The analyst has navigation; they do not need a second one |

**Why the minimal variant is not simply the full one hidden.** The reader arrived to check a number, and a full footer under a single figure would be a marketing surface attached to somebody's work. What they get is what they may need: who stands behind this, what happens to their data, and a way to find out what this is.

---

## The trust strip

Repeated above the footer on the public surface. Ours is not a guarantee or a returns policy: **it is the one sentence that is both our sales argument and a fact about the architecture.**

> Plumb stores definitions, lineage and owners. It never stores your data rows: the number is queried from your source at the moment it is read.

That claim is load-bearing in `CLAUDE.md` and it is the reason our compliance surface sits on our own infrastructure rather than on somebody else's rows. It appears in the minimal variant too, in a single line, because it is the only thing on a card that answers "what happens to what I am looking at".

---

## Anatomy

| Zone | Elements | Goes to |
| --- | --- | --- |
| Trust strip | Metadata-only sentence, SOC 2 position `[?]` until certification exists | 6.2 |
| Product column | What Plumb is, pricing, documentation | 6.1, 6.3, 6.4 |
| Trust and legal column | Trust and security, privacy policy, terms | 6.2, 6.5, 6.6 |
| Support column | Support and contact | 6.7 |
| SEO block | Crawlable links to the priority public pages. **Structure fixed here, exact list is `[?]` until keyword research** | 6.1 to 6.4 |
| Bottom line | Wordmark, copyright, company | n/a |

**No social icons and no app badges.** We have no app and no social presence to point at, and a row of empty affordances is worse than none. If either appears later, this line is where the decision gets revisited.

---

## Mobile

Link columns and the SEO block collapse into accordions. **Collapsed, not removed:** the links stay in the DOM and stay crawlable, because a collapsed accordion is a display state and a missing link is a missing link.

The minimal variant does not collapse anything, because there is nothing to collapse.

---

## SEO and accessibility

- **No H1.** A global component never carries the page heading.
- **The second plane of internal linking**, and on this product it is the main one, because the analyst's navigation carries two links and the reader's carries none.
- **Indexing by variant:** the full variant lives on indexed pages; the minimal variant lives on `noindex` pages; the app variant lives behind authentication.
- **Semantics:** `contentinfo` landmark, real `a` elements inside the accordions, accordion headers as buttons with `aria-expanded`.
- **Targets:** 44 by 44 CSS pixels, the same figure as the navigation.
- **No schema.** The footer declares none; organisation schema belongs to the pages that carry it.

---

## Directions this footer promises, registered as nodes

The rule is that a promise in the footer without a node makes the map and the product diverge. Three nodes were added to `ia/docs/sitemap.md` because this footer links to them.

| Node | Why it exists | Scope |
| --- | --- | --- |
| 6.5 Privacy policy | A footer that mentions what happens to data has to lead somewhere. For a product whose whole claim is that it stores no rows, this page is an argument, not a formality | ПОТІМ |
| 6.6 Terms of service | Standard for US B2B, and the buyer's security review asks for it | ПОТІМ |
| 6.7 Support and contact | The trust strip makes a claim; somebody has to be reachable about it | ПОТІМ |

All three get their labels here, since they have no parent screen to inherit from, and all three are ПОТІМ: the MVP is one card and the analyst's setup, and none of these three carries a job.

---

## Open question this node hands forward

**Whether the minimal footer on a card should name the workspace that owns the metric.** It would answer "whose number is this" before the reader even reads the attribution, and it would also disclose one customer's name to whoever the link reaches. That is the same open question the flows raised about showing the owner, seen from a different angle, and it is `research.md` open question 7.
