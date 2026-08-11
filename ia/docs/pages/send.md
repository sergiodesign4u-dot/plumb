# 2.8 Send this number

**Page:** Send this number · **Type:** dialog · **Node:** 2.8 · **Scope:** MVP · **Group:** pages

**Delivery, not recruitment.** This is the node where a number leaves one person and reaches another, and it is the third of the four capabilities the first test of the riskiest assumption needs. Without it the card never reaches anybody, and the whole product is a page nobody has a reason to open.

---

## URL and breadcrumbs

- **No URL of its own.** A dialog over node 2.1, opened from the card and closed back to it. The card's address does not change, which is what keeps the reader's one permanent link the only address they hold
- **Breadcrumbs:** none
- **Indexation:** inherits `noindex` from 2.1

## Purpose and jobs

**Purpose.** Hand this number to somebody else so that its provenance goes with it.

**Jobs served.**

| Job | How |
| --- | --- |
| **R2.** Answer once | Sending the card instead of re-explaining the number. The standing answer keeps answering |
| **P1, social** (thin, and named as thin) | Sending the card rather than the bare figure is itself a visible act of checking. It is the only mechanism this job has |
| **The main job, for the recipient** | Everything this node does is in service of somebody else's arrival at node 2.1 |

**Both personas use it, and for different reasons.** The analyst sends in the first place, instead of answering the same question again. The reader forwards, because they were asked where their number came from.

## Where this sits and how it is reached

- **A dialog on node 2.1**, opened from block 7 of the card
- **No URL of its own, and the contrast with node 2.7 is deliberate.** 2.7 is addressable because it is content somebody would want to link to. This is a transient action with nothing to return to. **The rule is not that everything gets a URL; it is that anything worth linking to gets one**
- Returns focus to the trigger on close

## Why a dialog and not just a button

A copy-link button with a toast would be smaller, and it was the obvious first answer. **The dialog earns its place on one argument: you should be able to see what you are passing on.**

1. **The link is visible and selectable**, which is the failure route when the clipboard is unavailable. Node 0.3 already named that fallback
2. **For a trust product, seeing what you are about to send is not decoration.** The whole premise is that a number should not travel without its provenance; a person handing one on can reasonably want to look at what leaves their hands

## Content blocks, mobile-first priority

| # | Block | Content |
| --- | --- | --- |
| 1 | **Heading** | What this does, one line |
| 2 | **The link**, visible and selectable | The full URL, including the parameters that carry the moment of reading |
| 3 | **What the recipient will see**, one line | The metric name, the current definition and its state. **This is the unfurl promise made honest** |
| 4 | **Copy**, the primary action | |
| 5 | **Share**, on devices that have a native share sheet | Secondary, and absent where there is none |
| 6 | **Close** | |

**Composition source.** T1 in `ia/docs/blocks.md`: the share row, taken and reduced to one action. Block 3 is not in the bank and is named here rather than added quietly: **it traces to design principle 1**, because a person sending a number should know whether the number is what travels. It answers the same question the unfurl decision at node 2.1 answers, on the sending side.

## The link, and the decision inside it

**What is copied:** `/m/<stable-id>?v=<definition-version>&t=<sent-at>`.

**`t` is stamped when Send is pressed, not when the page was opened.** The sender is handing on what they are looking at now.

### The forwarding decision, which no earlier artefact had

A reader who received a link and presses Send is not passing the link along untouched. **They mint a new one, stamped from their own reading.**

The alternative is to propagate the original stamp down the chain, and it fails on its own terms. State 2.5 answers **"has the definition changed since you read this"**, and "you" has to mean the person who sent it, not a stranger three hops back. **A chain carrying the first stamp forever would tell the fifth recipient about a change that happened before four other people had already looked and been satisfied.**

**The honest cost, stated rather than hidden:** if the sender saw the "definition changed" state and forwards anyway, that state does not travel. The recipient gets a clean card stamped now. **The changed state is a fact about a reading, not a property of the number**, and it belongs to whoever did the reading. If it matters, it is theirs to say.

**What we do not control:** somebody pasting a URL by hand. That is copy and paste, not this node, and pretending otherwise would be designing for an act we cannot observe.

## What this node refuses

| Refused | Who does it | Why |
| --- | --- | --- |
| **Granting view or edit access on share** | PowerMetrics: share with users or groups, granting view or edit | The card is already open at its link with no account. **Access is a workspace question**, which is cluster 5 and entirely ПОТІМ. Putting a permission control in a send dialog would move tenancy onto the reader's only screen |
| **An email field, an invite, a "sign up to see more"** | Most products with a share action | **Delivery, not recruitment.** `CLAUDE.md` names the reader-invites-reader mechanic as carrying no job underneath it, precisely so it cannot claim screens on equal footing with work people actually do |
| **A message or note attached to the link** | Slack-style share sheets | The message belongs in the channel the person is already using. We would be building a worse version of the tool they are about to paste into |
| **Send to a person inside Plumb** | Every collaboration product | The recipient has no account, by decision. There is no directory of people to send to, and building one would give the reader a user object the whole IA refuses them |
| **Anything that changes as it is copied** | Products that shorten or brand outgoing links | A permanent URL that is rewritten on the way out is not permanent |

## Components and variants

| Component | Variant | Note |
| --- | --- | --- |
| **Dialog** | **This node defines it.** Canonical | First dialog in the product. Focus is trapped, Escape closes, focus returns to the trigger, targets are 44 by 44. Nodes that need a dialog later reference this rather than restating it |
| Link display | Selectable text, wrapping, monospace-ish | Must wrap rather than truncate: a truncated URL cannot be checked by eye, which defeats block 2 |
| Toast (node 0.3) | Success, "Link copied", auto-dismissing | **The reader's only toast in the entire product** |
| Button | Primary, one: copy |  |

## States

| State | What happens |
| --- | --- |
| **Open** | The link is visible, selected on open so a keyboard user can copy without hunting |
| **Copied** | Toast from node 0.3, auto-dismissing because nothing is lost: the link is in the clipboard and still on screen |
| **Clipboard unavailable** | **No error toast.** The link is on screen and selectable, so the fallback is already visible. See below |
| **Sending a card in the source-down state** (2.4) | Allowed, and the link works. What the recipient gets is the same honest state. Nothing is blocked here on the grounds that the number is inconvenient |

### An open question from node 0.3, now closed

Node 0.3 asked whether a reader ever needs a failure toast at all. **The answer is no.** The reader's only action is copying a link, and when that fails the link is on the screen and can be selected. **So the reader's half of the feedback component is a single success message, and the assertive announcement path is analyst-only.** Node 0.3 is amended to record that this is settled here.

## Filters and facets

None.

## Primary call to action

**Copy.** One action, one button.

## Emotional support

**One mechanism from the emotional and social table lands here, and the table already calls it thin.**

- **P1, social.** Be seen as somebody who checks rather than somebody who forwards → **the provenance travels with the number, so sending the card instead of the figure is itself a visible act of checking** → this node, and node 2.1 as rendered for the recipient.

**The table marks this job `[?]` throughout, and that mark is kept.** It is a hypothesis in `jtbd.md`, and nothing in the research says anybody wants to be seen this way. There is no profile, no history and no activity to support it, by decision. **This node is the only support it has, and if the job turns out to be imaginary, nothing here changes**, because the same block also serves R2, which is evidenced.

## Responsive

**360:** the dialog is a sheet from the bottom, not a centred box. The link wraps to two or three lines and stays fully visible. Copy is full width and within thumb reach. **Nothing scrolls inside the dialog**, which is the constraint that keeps block 3 to one line.

**Wide:** a centred dialog over the card, the card dimmed behind it but still legible, because the person is about to send that number and may want to check it while the dialog is open.

---

## SEO block

**Part of node 2.1 and therefore `noindex`.** No canonical, no structured data, no SEO text.

**No URL of its own**, and the reasoning is in the section above: 2.7 is addressable because somebody would want to link to it, and this is not. **The rule is not that everything gets a URL. It is that anything worth linking to gets one**, and a send dialog is a door, not a room.
