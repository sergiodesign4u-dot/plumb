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

---

## The emotional and barrier layer

Collected at step 4 in Deep mode. **The rule this section is held to: every emotion and every barrier stands on a source, and where there is none it says `[?]` rather than a drawn face.** Intensity is written only where a reported feeling exists to derive it from. Strength of evidence is marked on every line: one mention is a signal, repetition across venues is a pattern, and a repetition inside a single thread is named as such rather than counted as a pattern.

### Sources found in this pass

The productive seam was not the vendor category. It was one Hacker News thread, "Notes on the Perfidy of Dashboards" (2021-08-27), where practitioners describe **non-technical readers of numbers** rather than analysts.

| Tag | Source | What it carries |
| --- | --- | --- |
| S1 | `news.ycombinator.com/item?id=28330744`, 2021-08-27, screen `cjm-hn-28330744-push-vs-pull.png` | A comparative trial in healthcare: push beat pull, and a no-login, in-context, linked dashboard was visited one to two times per year |
| S2 | `news.ycombinator.com/item?id=28331383`, 2021-08-27, screen `cjm-hn-28331383-view-source.png` | A first-person statement that trust depends on being able to see the source. **Author is technical, so this is not our reader** |
| S3 | `news.ycombinator.com/item?id=28331531`, 2021-08-27, screen `cjm-hn-28331531-provenance-attribution.png` | What non-technical readers mean when they ask for "more data" is lineage and provenance, plus attribution matching their own definition |
| S4 | `news.ycombinator.com/item?id=28330651`, 2021-08-27 | No one but an analyst will slice and dice their own data |
| S5 | `news.ycombinator.com/item?id=28329709`, 2021-08-27, already cited in `research.md` | The connection between a dashboard and its source data is usually missing |
| S6 | `news.ycombinator.com/item?id=41926383`, 2024-10-23 | The people building the dashboard often do not know what the data means or how it is measured |
| S7 | `news.ycombinator.com/item?id=41918670`, 2024-10-22 | While a data request is being worked on, the consumer may lose interest or become frustrated and move on |
| S8 | `discourse.getdbt.com/t/712`, thread dated 2019-11, already cited in `research.md` | The same question reaches the analyst repeatedly, and business readers do not have the time to dig |

**S1 in full, because it is the hardest source this research has produced and paraphrase would soften it:**

> "We pretty quickly found that sending data ("push") was way more effective at engagement than just having a tableau report they could go to ("pull"), even when that dashboard was linked directly within the EHR, didn't require a login, and was contextualized for the provider (basically as low friction as you could get-- they would actually venture into it 1-2 times per year)."

A dashboard with no login, embedded in the tool the person already works in, contextualised to them: that is the shape of what we are designing, and it was opened once or twice a year. This is a measured trial rather than an opinion, and the population is clinicians rather than B2B business readers, which is the one thing that keeps it from being decisive.

### Phase A. The audience approaches

- **Thoughts and questions.** `[?]`
- **Emotion.** `[?]`. Not a single source describes this moment, so no sign and no intensity are written.
- **Barrier.** `[?]`
- **Quote.** None found. None will be synthesised.

### Phase B. The number is taken

- **Thoughts and questions.** `[?]` for the reader's own words.
- **Emotion.** `[?]`. What exists here is structure rather than a reported feeling: nothing at the moment of taking creates friction, because there is nothing at the moment of taking. Writing "calm" or "unaware" here would be an inference dressed as an observation.
- **Barrier, and this one is evidenced.** The number arrives with no route back to its source (S5), and the definition is often unknown even to the people who built the surface it came from (S6).
- **Strength.** Three different authors say the same thing, but **all inside one thread**, so this is a patterned complaint in a single place rather than a pattern across venues.
- **Quote.** "The main problem is that it's not easy to drill down into a metric in most BI tools because the connection between the dashboard and the source data is usually missing" (S5).

### Phase C. The private moment of doubt

- **Thoughts and questions.** The nearest thing found is a trust condition stated in the first person: trust depends on being able to see what the number was made from (S2). **The author is technically sophisticated and is therefore not P1**, and the line is kept for its shape rather than as our reader's voice.
- **Emotion.** `[?]` for our population. What this pass produced is behaviour, not feeling, and the behaviour points against the phase happening at all: a low-friction destination was visited one to two times per year (S1), and the people who dig are analysts (S4).
- **Barrier.** Checking is a destination that has to be chosen (`competitors.md`), and S1 adds the harder half: even a destination chosen **for** the reader and placed in their path is not visited.
- **Strength.** S1 is a measured trial, which is stronger than any single comment, and it is on an adjacent population, which is what stops it settling the question outright. S2 is a signal from the wrong population.
- **Quote.** "I have trouble trusting any dashboard if it doesn't have the equivalent of a "view source" button that lets me see what data sources were used for it and how they were manipulated. Sadly dashboard systems that encourage this are extremely rare" (S2).

### Phase D. Trying to resolve the doubt

**The only phase in this map that carries a number.**

- **Thoughts and questions.** How long this will take, and whether it is worth the ask at all.
- **Emotion.** Negative, **intensity 3**.
- **Strength.** A signal reinforced by a second venue, and not yet a pattern: S7 on losing interest during the wait, S8 on the same question reaching the analyst again and on business readers not having time to dig.
- **Barrier.** The answer runs on somebody else's clock, and the reader's question is one of many arriving at the same person.
- **Quote.** "the consumer may have lost interest or become frustrated and moved on" (S7). **Scope, stated rather than glossed over:** that sentence is about waiting for a requested dashboard, not about waiting for a doubt to be resolved. It is the closest reported feeling we have to this phase, and it is not the same event.

### Phase E. The number is presented

- **Thoughts, emotion, barrier, quote.** `[?]` throughout.

### Phase F. The number is challenged, or it is not

- **Thoughts, emotion, barrier, quote.** `[?]` throughout, after a deliberate search.
- **What was tried.** Six different phrasings across the Hacker News comment corpus, aimed at finding an account of somebody being contradicted on a number in front of others. Nothing usable came back.
- **What that means.** The phase on which the entire motivation model of this product rests has no evidence at all. The cost of the error is still our assumption.

### Phase G. The number travels on

- **Thoughts, emotion, barrier, quote.** `[?]` throughout. Consistent with R4 already being marked a hypothesis in `jtbd.md`.

### What this pass means for the curve at step 5

**After a full Deep pass, exactly one phase carries a number and six do not.** That is not a reason to fill the rest in. The curve at step 5 shows the points that exist, marks the gaps as undefined, and does not interpolate through them. A smooth line here would be the single most convincing lie this research could tell.

### Routes that returned nothing, recorded so they are not paid for twice

- **G2** returns HTTP 403 on product review pages.
- **TrustRadius** renders and reads without an account, and the first rendered page of 137 Looker reviews contains product feedback from people who build reports, with no line about trusting where a number came from.
- **The dbt Community Forum** was searched on three trust phrasings and returned technical threads, with thread 712 remaining the only usable one.
- **Locally Optimistic** answers 301 without resolving.
- **Hacker News** was searched on exact phrases for a contradiction in a meeting, for stale reports and for conflicting figures. The corpus is saturated for this question: what it holds is practitioners describing readers, never readers describing themselves.

### Sync back into the persona

**Nothing in `personas.md` was disproved.** Two lines gain outside evidence, and one of the two **raises the risk instead of relieving it**. Applied at step 4 together with the source.

| Line in `personas.md` | Source | How it now reads |
| --- | --- | --- |
| P1 context, "the flow starts at one number opened from a link", marked `[?]` | S1 | Still `[?]`, now standing beside the first outside evidence bearing **against** the link being opened at all, tied to hole 1 |
| P1 pains, provenance as what is actually being asked for | S3 | Lifted off the brief and given a source outside vendor marketing |

**P1 still has no mood quote.** Deep did not find a business reader speaking. S2 is a reader speaking about trust, but a technical one, and passing it off as P1's voice would be exactly the kind of quiet substitution this stage exists to prevent.

**One consequence reaches past this step and is therefore only named here.** S1 lands on the riskiest assumption in `lean-ux-canvas.md`, and step 4 has no right to edit that file. It is carried into the step 6 critique as an input.
