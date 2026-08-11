# Node 0.4: State vocabulary

**Type:** section &nbsp;&nbsp; **Group:** global &nbsp;&nbsp; **Scope:** MVP &nbsp;&nbsp; **Page:** `ia/state-vocabulary.html`

**Discovered at step 3 and given its scope label here**, because it has no parent screen to inherit from. It is a canonical list rather than a screen: three states, consumed in at least three places, defined once.

---

## Why this is a node and not a paragraph

The three states are consumed by **the card (2.1 and its state nodes), the rows of the registry (4.1), and the definition editor (4.7)**. If the vocabulary is not canonical it drifts, and it drifts in the most damaging direction available to this product: the registry starts saying "stale", the card says "out of date" and the editor says "changed". **A product whose entire claim is that a number means one thing would then be ambiguous about its own states.**

One list, one wording, one set of rules for when each applies. Every screen references this node rather than restating it.

---

## Grounding, so this is not invented from nothing

| Source | What it gives us | What we take and what we refuse |
| --- | --- | --- |
| dbt catalog, `docs.getdbt.com/docs/explore/data-health-signals`, re-opened 2026-08-12 at step 4. "Data health signals offer a quick, at-a-glance view of data health when browsing your resources in Catalog. They keep you informed on the status of your resource's health using the indicators Healthy, Caution, Degraded, or Unknown", and "In the Health column on each resource's details page. Hover over or click the signal to view detailed information" | A working four-state vocabulary already exists in this market | **Take:** that named states beat a binary. **Refuse:** the delivery, an icon whose meaning arrives only on hover or click. A state that needs an interaction to be read does not exist on a phone, and our reader is on one |
| GitHub Status, `benchmark.md` mechanism 1: five named component states and four named incident stages instead of a binary up or down | The mechanism underneath, ambiguity aversion: a named trouble stays usable, an unnamed one gets discounted entirely | **Take:** the naming. **Refuse:** the incident stages, which are a workflow, and design principle 2 forbids one here |

**What we do differently, in one line:** the same idea, moved from a catalog that a non-analyst never opens onto the object the reader is already looking at, and written in words rather than an icon.

---

## The vocabulary

Three states, and **there is no fourth**. "Healthy" is not a state in this product: a number with nothing wrong carries its age, not a badge saying it is fine.

| State | Wording on the surface | When it applies | What is still shown | Node |
| --- | --- | --- | --- | --- |
| **As of** | "As of 14:05, 20 minutes ago, expected hourly" | The query ran and returned a value | Everything | 2.3 |
| **Source is down** | "Source is down. Last successful run: 14:05 yesterday" | The source could not be reached at read time | Definition, owner, last successful run. **No value at all**, because we store no copy | 2.4 |
| **Definition changed** | "The definition changed after this link was made, on 3 August by Dana Reyes" | The current definition differs from the one carried in the link | The current value, the current definition, and the previous definition | 2.5 |
| **Empty** | "The query ran and returned nothing" | The query succeeded with no rows | Definition, owner, the time it ran. **Never a zero** | 2.6 |

**Four rows and three states, and the difference is deliberate.** "As of" is the ordinary condition and is always present, including underneath the other three. The other three are conditions that can be true on top of it, and more than one can be true at once.

### Combination rules, because they will happen

| Combination | What wins | Reason |
| --- | --- | --- |
| Source down and definition changed | **Both are shown**, source down first | They are different facts, and hiding one would mean choosing which truth the reader gets |
| Empty and definition changed | Both, empty first | The absent value is the more immediate answer to "can I use this" |
| Source down and empty | Impossible | An unreachable source cannot return an empty result |

**No state is ever collapsed into a single worst-case indicator**, and no aggregate score is ever computed from them. `CLAUDE.md` design principle 2 forbids both by name.

---

## What this vocabulary refuses

- **No severity.** A state is not high, medium or low. Severity implies triage, triage implies a queue, and a queue is the incident tool.
- **No assignee and nothing to close.** A state ends when the underlying fact ends.
- **No aggregate.** No health percentage, no trust score, no "99.4% reliable". A score cannot be interrogated, so it replaces one number nobody can defend with a second one. **Evidenced at step 4 rather than asserted:** dbt publishes the criteria behind its signal (`docs.getdbt.com/docs/explore/data-health-signals`, opened 2026-08-12), and Caution fires if any one of these is true, "Not built in the last 30 days", "Tests are not configured", "One or more upstream sources are stale", or "Missing a description". A stale source and an unwritten sentence of prose produce the same yellow, and the person reading it cannot tell which they have.
- **No colour-only encoding.** Every state is legible in words with the colour removed, which is both an accessibility requirement and the reason these can survive a black and white wireframe.
- **No "Healthy".** Saying a number is fine is a claim we would have to defend; showing its age is a fact.

---

## Where each state appears

| Surface | How it appears |
| --- | --- |
| The card (2.1) | In full, in words, beside the value. The primary place |
| Registry rows (4.1) | Compact: the state name and the age, no explanation. The row links to the card, where the full form lives |
| Definition editor (4.7) | As a consequence: "changing this will put the changed state on cards already sent" |
| Search results (4.3) | Same compact form as the registry |

**The compact form is a shortening, never a different vocabulary.** Same words, fewer of them.

---

## SEO and accessibility

- **No H1**, no schema. This node is a list of rules, not a page a person visits.
- **Never colour alone**: text carries the state, and colour, when the visual stage adds it, is redundant reinforcement.
- **Live regions do not apply here.** A state is present on load rather than announced as an event, which is the same distinction node 0.3 draws between a state and a toast.
- **Screen readers get the state before the value** in the reading order on the card, because a value read without its state is exactly the bare number this product exists to prevent.

---

## Open questions this node hands forward

1. **What "expected hourly" says when no cadence is known.** Not every source declares one, and "as of 14:05" with no expectation is the failure benchmark criterion 3 was taken to prevent.

   **Answered at step 4 and then narrowed at node 3.2.** Freshness is not something a warehouse announces: PowerMetrics gets it from a webhook the customer calls or a cache TTL they pick, so **cadence is configured, not discovered**, and node 3.2 carries a required field for it. **The narrowing is that the field is a claim rather than a measurement.** Nothing checks a declared cadence against what the source actually does, because that would need a history of run times and we keep one overwritten timestamp. So a card can say "expected hourly" in good faith about a source that answers daily. **That is a hole in this state's promise and it stays open**, owned by node 3.2.
2. **How old is old.** Nothing here decides when "as of" should start looking uncomfortable, and the honest answer is that it depends on the metric's cadence rather than on a fixed threshold. It stays open rather than being invented.
