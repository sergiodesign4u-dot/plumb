# CJM To-Be

**Focus: P1, the reader who is about to be quoted, times the main job.**

> When I have to put a number in front of other people, I want to know how far it can be trusted, so that I am not defending something I cannot back up.

Same focus as `cjm-as-is.md`, and the same persona markers apply: the arrival trigger is a hypothesis from the brief, not an observation.

**This map is design, not research,** and it lives by the opposite rule to the As-Is map. Here the future has to be invented rather than found, so honesty is enforced by tracing instead: every step and every feature below names the As-Is barrier or the job it closes, with a direct reference. A feature with no parent is cut rather than kept for later, because "later" is a priority for work that has a parent, not a shelter for an orphan.

The designed curve on this map is a **target, not a measurement**, and it is drawn differently from the As-Is curve wherever both appear.

**One thing has to be said before the first step, because it changes what the target emotions in this file can mean.** The As-Is map carries no emotional intensity at any phase: the single plotted point was withdrawn at step 6 when its sources turned out to report waiting rather than how waiting feels. So the target emotions below **have no measured baseline to be an improvement over**. They are design intent, and they cannot be validated as a change until somebody talks to a reader. Written here once, rather than hedged on every row.

---

## What this map does not touch

**Phase A of the As-Is map, the audience approaching, gets no To-Be step.** The trigger happens outside any product of ours: a deck is due, a meeting is booked, a decision acquires somebody's name. There is nothing to design there, and inventing a step would be the first orphan in a file whose whole discipline is refusing them.

**The analyst's side is not in this map either.** Connecting a source, writing a definition, filling the registry and searching it by name are real work with a real owner, P2, whose journey diverges fundamentally and earns its own map. They appear in the backlog at step 8 as prerequisites, not as steps on the reader's path.

---

## The path

Six steps. Each one names what it closes, and the reference is the trace: **barrier or job, with a direct pointer.** Where a barrier admits more than one answer, two or three candidate capabilities are put up and one is chosen with the rejection stated in a line. Where the answer is obvious, no candidates are invented to fill the shape.

### T1. The number arrives already carrying where it came from

- **Step in the product.** At the moment the reader takes a figure, it is not a bare value: it comes as a card that carries the number, its source, its age and the name behind its definition.
- **Goal.** Main job, the situation half: the reader is about to put this in front of other people.
- **Closes.** The phase B barrier in `cjm-as-is.md`: the number arrives with no route back to its source (S5), and the definition is often unknown even to the people who built the surface it came from (S6). Growth zone **Z2**.
- **Capability, with the alternatives named.** Candidates: **(a)** one permanent URL per metric, rendering a card that anybody can open without an account, so the number travels as a link; **(b)** a browser extension that annotates numbers in whatever surface they appear in; **(c)** embeds and integrations into each BI tool. **Chosen: (a).** (b) asks the person who never pays to install something, and it cannot reach a slide or a chat message, which is where the number actually travels. (c) needs the cooperation of whoever owns each surface, multiplies work per surface, and still only serves people already inside that surface, which is the destination pattern wearing an integration badge.
- **Target emotion.** Nothing to feel. The provenance is simply present, at no cost in attention. Design intent.

### T2. The doubt is answered where the number is read, in one line

- **Step in the product.** Beside the value, without any action: how old it is, whether its source is reachable, and whether the definition changed after this number was saved. Named states, in words.
- **Goal.** Main job, the core: knowing how far this can be trusted.
- **Closes.** The phase C barrier: checking is a destination that has to be chosen (`competitors.md`), and S1 measured that a destination chosen for the reader and placed in their path was still entered only once or twice a year. Growth zone **Z1**, which is the zone where the evidence points against us.
- **Capability, with the alternatives named.** Candidates: **(a)** a named state plus a date plus the source name, sitting beside the value; **(b)** a certification badge, the category's existing answer (`support.powermetrics.app`); **(c)** a computed trust score out of a hundred. **Chosen: (a).** (b) says somebody approved this once and never says when or who, which is the gap benchmark criterion 5 already measures. (c) is forbidden by design principle 2 and fails for a reason worth keeping: a score cannot be interrogated, so it replaces one number nobody can defend with a second one.
- **Target emotion.** The doubt resolves without the reader going anywhere. Design intent.

### T3. Depth opens on request, and only then

- **Step in the product.** One action from the card opens what the number is made of: the definition in words, the source it was queried from, and when it last ran.
- **Goal.** Main job, and it is what makes T2 honest: a one-line claim that cannot be opened is just a different bare assertion.
- **Closes.** The other half of the phase B barrier, the missing route back. Design principle 4, which forbids a dependency tree as the opening state.
- **Capability.** The definition text and the source as the card's second layer. **The full lineage tree is not the reader's depth** and is not in this path: it is dense analyst work on a desktop, and `research.md` records that a lineage graph presumes a mental model of the stack. What the reader gets is one hop, in words.
- **Target emotion.** The question has a bottom, and reaching it does not require knowing the stack. Design intent.

### T4. The claim carries a name and a date

- **Step in the product.** Who declared this definition and when it last changed is visible on the card, not in a history page.
- **Goal.** **R1**, who is answerable, so that a specific person can be asked instead of guessing who to ask.
- **Closes.** **A job, not an As-Is barrier, and the difference is stated rather than blurred.** Nothing in the mined layer shows a reader looking for a name and failing to find one; the candidate zone built on that was demoted at step 6 for precisely that missing parent. What does stand behind this step is R1 plus market evidence: no product of five scores above 3 on attribution (`benchmark.md`), and PowerMetrics names a person only when a certification is removed. So this step is legitimate by the tracing rule and weaker than T1 to T3, and it should be the first thing a reader test tries to kill.
- **Capability.** Attribution on the claim: the definition's author and the date of its last change, rendered with the number rather than behind it. Design principle 5.
- **Target emotion.** The question has an addressee. Design intent.

### T5. A change after the fact catches up with the number

- **Step in the product.** When the definition changes after a number was taken, the card that number came from says so, in its own state, wherever it is opened.
- **Goal.** **R4** for the reader, an old figure not travelling as a current one, and **R3** for the analyst, whose correction reaches the decisions it affected.
- **Closes.** The phase G barrier, which the step 6 follow-up gave us: a value that stopped being computed keeps looking exactly as it did and cannot practically be found again, and versions are not tracked well enough to say what changed (S9, a CFO in the first person). Growth zone **Z3**.
- **Capability, with the alternatives named.** Candidates: **(a)** a state on the card itself, "definition changed after this was saved"; **(b)** an email or a message to everyone who opened it; **(c)** a diff view of the two definitions. **Chosen: (a).** (b) is notification routing, which `CLAUDE.md` puts out of scope, and it also assumes we know who used the number, which for a reader with no account we do not. (c) is version history deeper than the previous definition, also out of scope, and it answers a question the reader did not ask.
- **Target emotion.** A stale number stops being able to pass for a fresh one. Design intent.
- **Standing.** R4 is marked a hypothesis in `jtbd.md`: nothing shows that anybody reopens a saved link. If that falls, this step keeps its analyst half, R3, and loses its reader half.

### T6. The number is defended in the room

- **Step in the product.** In the meeting, on a phone, the card opens at its permanent URL with no login and shows the same provenance the reader saw when they took it.
- **Goal.** Main job, the outcome half: not defending something that cannot be backed up.
- **Closes.** **A job, and an As-Is phase that is empty.** Phases E and F of the As-Is map have no evidence at all: what it costs to be contradicted in front of others was searched for deliberately and never found. This step is designed for a moment we have no observation of, and that is stated here rather than discovered at stage 07.
- **Capability.** The card readable with no account at one permanent URL, mobile first. Already in the MVP core in `CLAUDE.md`, and this is the step that makes the mobile-first platform decision pay for itself.
- **Target emotion.** The reader is not the only evidence for their own number. Design intent.

---

## Orphans, tested for and reported

Every step above was checked against the rule in both directions: does it close something real, and is there anything in our own inventory that closes nothing.

- **Search and jump to a metric by name** appears in the MVP scope in `CLAUDE.md` and has **no step in this map**. It is not an orphan: its parent is R5 and R2, and both belong to P2, whose map is not built. It is recorded as belonging to the other map rather than quietly kept here.
- **The two growth mechanics carry no job by design and are kept out of the path:** a reader inviting another reader in one action, and the public page rendering the real card component. `CLAUDE.md` already names them as jobless so they cannot claim screens on equal footing with work people do, and putting them into a To-Be step would launder them into parented work.
- **Nothing was cut at this step**, and that is a result rather than a clean bill: the inventory being tested against is small and was already narrowed at stage 02. The real orphan test comes at step 8, where the backlog meets the old MVP core.

---

## What this map assumes and the research does not support

Written here because the To-Be map is the file most likely to be read later as though it were evidence.

1. **That the reader opens the card at all.** Z1 is the strongest instrument in this research and it points against us: a frictionless, contextual, no-login destination was entered once or twice a year. T1 and T2 are designed to arrive with the number rather than to be visited, which is a response to that finding and not a refutation of it.
2. **That a name is wanted.** T4 traces to a job whose support is the shape of the market, not anything a reader said.
3. **That a saved number is ever revisited.** T5's reader half stands on R4, which `jtbd.md` marks a hypothesis.
4. **That being contradicted is expensive.** T6 serves a phase of the As-Is map that has no evidence in it whatsoever.
