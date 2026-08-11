# CJM As-Is

**Focus: P1, the reader who is about to be quoted, times the main job.**

> When I have to put a number in front of other people, I want to know how far it can be trusted, so that I am not defending something I cannot back up.

Persona and job are carried from `personas.md` and `jtbd.md` with their markers intact, not smoothed. The arrival trigger is a hypothesis taken from the brief rather than an observation, and the market evidences the **gap** this job describes, not the fact that anybody hires it.

**This map is research, not design.** Every emotion and every barrier below stands on a source, and where there is none it says `[?]` rather than showing a drawn face. Remedies belong in `cjm-to-be.md`; a recommendation written into this file would stop it being a mirror.

---

## Inputs and unknowns

### Is this focus the only one

**No, and it is worth saying now rather than discovering it at the IA stage.** The path of P2, the data lead, to their own job diverges **fundamentally** rather than in detail: different actions (write a definition, connect a source), a different entry channel (the question arrives in a chat rather than building ahead of a meeting), and different barriers (manual digging rather than provenance being out of reach). By the rule of this stage that earns P2 its own map, a repeat of steps 3 to 9. This round takes one focus, the reader.

### What we already know about this reader's path

| What is known about the path | Source |
| --- | --- |
| The trigger is an approaching audience: a deck, a meeting, a decision with their name on it | Brief, `[?]` |
| Three alternatives exist at the moment of doubt: ask the analyst in a channel, open the dashboard again, or use the number as it stands | `personas.md`. **Which of the three actually happens is `[?]`** |
| Checking is a destination that has to be chosen, and choosing it requires already suspecting something | `competitors.md`, shown for the five documented product surfaces, inferred for the other ten |
| A state vocabulary exists and sits where this person has no reason to go | `docs.getdbt.com/docs/explore/explore-projects`, four health states |
| The free role sees least: in Looker, Viewer gets folders, boards, dashboards and Looks only | `competitors.md` |
| No name stands on the claim anywhere: attribution scores 3 or below across all five benchmark products | `benchmark.md` |
| The category's existing trust signal is a badge, a blue check mark on a certified metric | `support.powermetrics.app`, article 37726220561559 |
| Business readers do not have time to dig, stated by a practitioner rather than by us | dbt Community Forum, thread dated 2019 |
| The link between a dashboard and its source data is usually missing | Hacker News, 2021 |

### What we do not know about the path

These are the candidates for the mining at step 4, ordered by what they cost us if they stay unknown.

| # | Unknown | Why it matters here |
| --- | --- | --- |
| 1 | **What surface the number is read in, and how the reader arrives at it** | The most expensive hole carried over from stage 02, and the follow-up research did not close it. It decides the first phase of this map |
| 2 | **What the reader actually does at the moment of doubt** | Three alternatives are named, and which one fires is unknown. The whole middle of the map depends on it |
| 3 | Whether the doubt is voiced at all, or silently absorbed along with the number | If it is silent, there is no observable moment for the product to attach to |
| 4 | **What happens after being contradicted in a meeting**: who fixes it, how long it takes, what it costs | We have no failure story from a real company, and the entire motivation model rests on this cost being real |
| 5 | How often the need arrives | Decides whether the emotional curve describes a routine or an exception |
| 6 | Whether the reader knows a definition exists at all | Decides how much the product has to explain before it can be trusted |
| 7 | Who they ask, and whether they ask | Decides whether R1 is a job people already do or one we are inventing |
| 8 | **The emotional shape of the moment**: what it is like to have your number contradicted in front of others | No data at all, and this is what the curve is made of |

Items 1, 4 and 8 are the dangerous three: without them the As-Is curve is drawn rather than measured, and this stage would be producing a picture of a feeling nobody reported.

### Mining mode

**Mining mode: Deep.** Chosen at step 2, before any collection. Step 4 reads it from this line rather than from the conversation.

**Why Deep rather than Lite.** The material this map is made of does not exist in the repository yet. Of the 26 screens in `research/screens/`, every one is a vendor page: what a product says about itself, never what a person said about using it. `research.md` carries exactly two lines of practitioner voice, both found at stage 02 and both dated 2019 and 2021. Lite re-projects what we already hold onto a time axis, and what we hold is vendor marketing plus our own brief, so the three dangerous unknowns above (what surface the number is read in, what a public contradiction costs, and what the moment feels like) would each come back as `[?]`. A curve made of `[?]` at its three load-bearing points is not a measurement, and step 5 would then be asked to draw it.

**Where Deep can actually reach, since two obvious routes are already known to be closed.** Reddit returns HTTP 403 without an account and the Metabase forum carries support threads, both established at stage 02 and not to be spent again. Open to us: public review pages on G2, Capterra and TrustRadius for the products in `competitors.md`; Hacker News through the Algolia index, which is fully public and dated; the dbt Community Forum, which has already produced usable material; YouTube comments under competitor demos; and comment threads under analytics writing.

**What Deep does not promise.** It buys the attempt, not the finding. Where a route returns nothing the phase keeps its `[?]` and the failed route is recorded so it is not paid for twice, exactly as at stage 02. Deep changes how hard we look, never what we are willing to write down.

---

## The path today: phases, goals, actions, touchpoints

Built at step 3. **Phases are derived from the arc of the job, not from a funnel.** There is no Awareness phase and no Retention phase in this map, because the reader chooses nothing and onboards nowhere: they are handed a number by circumstance. Emotions and barriers are deliberately absent here and arrive at step 4, so that structure is not drawn by eye together with feeling.

Each phase carries its source. Where the path is not covered by data the row says `[?]` rather than inventing a plausible step.

### A. The audience approaches

- **Goal of the phase.** Prepare what will be shown; the number is needed as part of an argument. This is the situation half of the main job.
- **Actions.** Receives a request or schedules the meeting themselves, gathers material, reaches the point where a figure is required.
- **Touchpoints.** Calendar, deck, document, a thread in chat.
- **Source.** `personas.md` slice 1, the trigger is exposure rather than curiosity. Brief only, `[?]`.

### B. The number is taken

- **Goal of the phase.** Have the figure inside the artefact. Main job.
- **Actions.** Opens wherever the number lives, copies it, pastes it into a slide or a document. Possibly takes it from last week's deck rather than from the origin.
- **Touchpoints.** A dashboard in a BI tool, a spreadsheet, a message in chat, a previous deck. **Which one is hole 6, the most expensive unknown in this map.**
- **Source.** `ux-patterns.md` B1, the number is read away from the system that produced it. The specific surface is `[?]`.

### C. The private moment of doubt

**This phase is contested, and that is the finding of the skeleton rather than a caveat on it.**

- **Goal of the phase.** Work out how far this can be trusted. This is the heart of the main job.
- **Actions.** Looks at the figure, checks it against expectation and against what they remember, looks for when it was last updated. Or does none of that.
- **Touchpoints.** The same surface the number was taken from.
- **Source.** `[?]`, and this is hole 1 and open question 4 in `research.md`. The market supplies only the shape: checking is a destination that has to be chosen, and choosing it requires already suspecting something (`competitors.md`).

**What is at stake in whether this phase exists.** Hole 1 asks exactly whether a check happens before acting or only after being contradicted. If C does not happen, the centre of gravity of this map moves to F, and the product moves with it: we would not be building "look before you take it" but "sort it out after you were caught". That is a fork, not a detail, and the mining at step 4 should aim hardest here.

### D. Trying to resolve the doubt

- **Goal of the phase.** Find out who is answerable and what is going on with the number. R1.
- **Actions.** One of the three alternatives named in `personas.md`: ask the analyst in a channel, open the dashboard again, or use the number as it stands. Plus waiting, because the answer runs on somebody else's clock.
- **Touchpoints.** Slack or another chat, the BI tool, a catalog they have no reason to open (dbt Explore and its four health states).
- **Source.** `personas.md` slice 5 for the three alternatives, and which one fires is `[?]`. `docs.getdbt.com/docs/explore/explore-projects` for the catalog. The dbt Community Forum thread 712 for the repeated question that lands on the analyst.

**This phase is the seam between the two maps.** What is waiting for the reader is R2 for the data lead. It is named here so that P2's map, when it is built, joins this one at a known point instead of being drawn independently.

### E. The number is presented

- **Goal of the phase.** Not to be defending something that cannot be backed up. This is the outcome half of the main job.
- **Actions.** Says the figure out loud or shows the slide.
- **Touchpoints.** The meeting, the deck, the document.
- **Source.** `CLAUDE.md`, `[?]`.

### F. The number is challenged, or it is not

- **Goal of the phase.** Hold the position and work out whose figure is right. R1 fires hardest here.
- **Actions.** **Unknown.** Who fixes it, how long it takes, what it costs, whether it happens at all: holes 4 and 9, and we have no failure story from a real company.
- **Touchpoints.** `[?]`.
- **Source.** None. The entire motivation model of the product rests on this phase being expensive, and the evidence that it is amounts to nothing.

### G. The number travels on

- **Goal of the phase.** Stop an old figure travelling as a current one. R4.
- **Actions.** The deck is forwarded, the slide is reused, the link is saved.
- **Touchpoints.** The deck, a saved link.
- **Source.** R4 is marked a hypothesis in `jtbd.md`. Nothing shows that a saved link is ever opened a second time.

### Cross-check against the jobs

A, B, C and E are covered by the main job; D and F by R1; G by R4. **No phase is without a job, and all three of P1's jobs have a phase.** R2 and R3 have no phase here and should not: they belong to P2, whose map is separate, and D is where the two touch.

**Two phases were deliberately not added**, and both would have looked natural. "Chooses a tool", because the reader is not the buyer and chooses nothing. "Onboarding", because there is no product yet. An invented phase survives into the IA as a real one, which is why the omission is recorded rather than left silent.
