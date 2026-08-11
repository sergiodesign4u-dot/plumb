# Node 0.3: Toast and inline feedback

**Type:** section &nbsp;&nbsp; **Group:** global &nbsp;&nbsp; **Scope:** MVP &nbsp;&nbsp; **Page:** `ia/toasts.html`

The third and last global element of the frame. It is small, and it is the place where this product is most likely to drift into being something else, which is why it gets a node rather than a paragraph in somebody's wireframe.

---

## The rule this node exists to enforce

**A toast reports what the person just did. It never reports what is true about a number.**

Design principle 2 in `CLAUDE.md` says doubt is a state and not an incident, and forbids an incident workflow around a number. A toast saying "source is down" would break that rule in the quietest possible way: it turns a property of the number into an event with a timestamp, which is one short step from a feed of such events, which is the incident tool we refused to build.

| Kind of thing | Where it goes | Why |
| --- | --- | --- |
| The source is unreachable | **State on the card** (2.4) | It is a fact about the number, not something that happened to the reader |
| The definition changed after this was saved | **State on the card** (2.5) | Same |
| The query returned nothing | **State on the card** (2.6) | Same |
| The link was copied | **Toast** | The person did it, it succeeded, and there is nothing left on screen to show it |
| The definition was saved | **Toast** | Same |
| The definition does not run | **Inline, on the field** (4.6) | It belongs to the thing being edited and has to stay visible while it is fixed |
| The connection failed | **Inline, on the form** (3.4) | Same |
| Signed out | **Toast**, then the sign-in page | Confirms a deliberate action |

**The dividing line, in one sentence:** if it belongs to a thing on the screen, it is inline and it stays; if it belongs to an action that is over, it is a toast and it goes.

---

## Anatomy

| Element | Behaviour |
| --- | --- |
| Message | One line, plain, past tense for confirmations |
| Action | Optional and single. "Undo" where an undo exists, otherwise nothing |
| Dismiss | Always present as a target of 44 by 44 CSS pixels |

**Position.** Bottom on the phone, within thumb reach and clear of the top bar. Bottom right on the desktop. **Never over the number itself**, on any width: covering the value with a notification about an action is the one placement this product cannot afford.

---

## Timing, and it is a conformance requirement rather than a preference

WCAG 2.2 SC 2.2.1 Timing Adjustable is **Level A**, and it requires that for each time limit set by the content, the user can turn it off, adjust it, or extend it, unless one of the stated exceptions applies. An auto-dismissing toast is a time limit.

What that means here:

- **A toast that carries an action does not auto-dismiss.** If there is an "Undo", removing it on a timer removes the only route to it.
- **A toast that only confirms may auto-dismiss**, and the same information stays available: the copied link is in the clipboard, the saved definition is on the screen behind it. Nothing is lost when the toast goes, which is what makes the timer defensible.
- **No toast is the only copy of anything.** That is the rule the criterion turns into a design constraint.

---

## States

| State | What is shown | Live region |
| --- | --- | --- |
| Success | Confirmation, optional undo | `role="status"`, polite |
| Failure of an action | What failed and one route to retry | `role="alert"`, assertive |
| Offline or degraded | That the action could not reach us, and that it was not lost if it was not | `role="alert"` |
| Several at once | Stacked, newest nearest the edge, maximum three visible | Announced in order |

**Assertive is reserved for failures.** A confirmation announced assertively interrupts a screen reader user mid-sentence to tell them something worked, which is the accessibility equivalent of a toast covering the number.

---

## Who sees this

**Both personas, and this is the only global element the reader shares with the analyst.** The reader meets exactly one toast in the whole product: the link was copied. Everything else here belongs to the analyst.

That asymmetry is worth stating, because it sets the tone: for the reader, feedback in this product is one quiet confirmation, and every other thing they need to know is a state on the number rather than a message about it.

---

## SEO and accessibility

- **No H1**, no schema, no indexing consequences. Toasts are not content.
- **Live regions** as in the table above; the container exists in the DOM from page load rather than being created when a message arrives, so that announcements are reliable.
- **Targets** 44 by 44 CSS pixels, matching the navigation and footer.
- **Motion.** Entry and exit are a fade and a short offset, and both respect `prefers-reduced-motion`.

---

## The question this node handed forward, and its answer

**Asked here:** whether a reader ever needs a failure toast at all. The only action they take is copying a link, and if that fails there is a fallback: the URL is on screen and can be selected.

**Answered at node 2.8, and the answer is no.** The send dialog puts the link on screen, visible and selectable, before anything is copied, so a clipboard failure has its fallback already in view. **The reader's half of this component is therefore a single success message, and the assertive announcement path is analyst-only.** Recorded here rather than left open, so no later stage designs a failure toast for a persona that has no use for one.
