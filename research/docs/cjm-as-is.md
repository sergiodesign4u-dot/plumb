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

Eight sources came out of the Deep pass and a ninth out of the step 6 follow-up. **Five of the nine sit in one Hacker News thread**, "Notes on the Perfidy of Dashboards" (2021-08-27), where practitioners describe readers of numbers rather than analysts. The remaining four come from three other places, and the difference matters wherever strength of evidence is claimed below.

| Tag | Source | Venue | What it carries |
| --- | --- | --- | --- |
| S1 | `news.ycombinator.com/item?id=28330744`, 2021-08-27, screen `research/screens/cjm-hn-28330744-push-vs-pull.png` | Perfidy thread | A comparative trial in healthcare: push beat pull, and a no-login, in-context, linked dashboard was visited one to two times per year |
| S2 | `news.ycombinator.com/item?id=28331383`, 2021-08-27, screen `research/screens/cjm-hn-28331383-view-source.png` | Perfidy thread | A first-person statement that trust depends on being able to see the source. **Author is technical, so this is not our reader** |
| S3 | `news.ycombinator.com/item?id=28331531`, 2021-08-27, screen `research/screens/cjm-hn-28331531-provenance-attribution.png` | Perfidy thread | What clinicians mean when they ask for "more data" is lineage and provenance, plus attribution matching their own definition |
| S4 | `news.ycombinator.com/item?id=28330651`, 2021-08-27 | Perfidy thread | No one but an analyst will slice and dice their own data. **This is about exploratory analysis, not about checking where a number came from** |
| S5 | `news.ycombinator.com/item?id=28329709`, 2021-08-27, already cited in `research.md` | Perfidy thread | The connection between a dashboard and its source data is usually missing |
| S6 | `news.ycombinator.com/item?id=41926383`, 2024-10-23 | Ask HN on delivering dashboards | The people building the dashboard often do not know what the data means or how it is measured |
| S7 | `news.ycombinator.com/item?id=41918670`, 2024-10-22 | Ask HN on delivering dashboards | While a data request is being worked on, the consumer may lose interest or become frustrated and move on |
| S8 | `discourse.getdbt.com/t/712`, thread dated 2019-11, already cited in `research.md` | dbt Community Forum | The same question reaches the analyst repeatedly, and business readers do not have the time to dig |
| S9 | `news.ycombinator.com/item?id=28050270`, 2021-08-03, screen `research/screens/cjm-hn-28050270-cfo-spreadsheets.png` | HN thread on spreadsheets | A CFO of thirty years, in the first person, on waiting in an IT queue, on hard-coded values that once were formulas, and on versions nobody tracks. **The only source in this research from a person holding our primary persona's role** |

**S1 in full, because it is the hardest source this research has produced and paraphrase would soften it:**

> "We pretty quickly found that sending data ("push") was way more effective at engagement than just having a tableau report they could go to ("pull"), even when that dashboard was linked directly within the EHR, didn't require a login, and was contextualized for the provider (basically as low friction as you could get-- they would actually venture into it 1-2 times per year)."

**What matches our design and what does not, since the difference decides how much this source may be made to carry.** What matches is the delivery conditions: no login, placed inside the tool the person already works in, contextualised to that person. What does not match is the object. Theirs is a dashboard to be explored, ours is a single number with its provenance, and nothing in the trial separates the two. So this measures how often a placed, frictionless **destination** is entered, which is the assumption underneath our design, not our design itself. The population is clinicians rather than B2B business readers, which is the second thing that keeps it from being decisive.

### Phase A. The audience approaches

- **Thoughts and questions.** `[?]`
- **Emotion.** `[?]`. Not a single source describes this moment, so no sign and no intensity are written.
- **Barrier.** `[?]`
- **Quote.** None found. None will be synthesised.

### Phase B. The number is taken

- **Thoughts and questions.** `[?]` for the reader's own words.
- **Emotion.** `[?]`. What exists here is structure rather than a reported feeling. Whether anything at the moment of taking creates friction cannot be said, because **what surface the number is taken from is hole 6 and unknown**. Writing "calm" or "unaware" here would be an inference dressed as an observation.
- **Barrier, and this one is evidenced.** The number arrives with no route back to its source (S5), and the definition is often unknown even to the people who built the surface it came from (S6).
- **Strength.** Two authors, in **two different venues three years apart**. By the rule of this stage that is a pattern, and it is the weakest kind of pattern, being two points.
- **Quote.** "The main problem is that it's not easy to drill down into a metric in most BI tools because the connection between the dashboard and the source data is usually missing" (S5).

### Phase C. The private moment of doubt

- **Thoughts and questions.** The nearest thing found is a trust condition stated in the first person: trust depends on being able to see what the number was made from (S2). **The author is technically sophisticated and is therefore not P1**, and the line is kept for its shape rather than as our reader's voice.
- **Emotion.** `[?]` for our population. What this pass produced is behaviour, not feeling, and the behaviour points against the phase happening **often**: a low-friction destination was entered one to two times per year (S1). S4 is not evidence here and is not used as such: it says nobody but an analyst will slice and dice their data, which is exploratory analysis rather than checking where a number came from.
- **Barrier.** Checking is a destination that has to be chosen (`competitors.md`), and S1 adds the harder half: a destination chosen **for** the reader and placed in their path was still entered only once or twice a year. Rare, not never, and the difference is kept because the product's whole bet sits in that gap.
- **Strength.** S1 is a measured trial, which is stronger than any single comment, and it is on an adjacent population with a different object, which is what stops it settling the question outright. S2 is a signal from the wrong population.
- **Quote.** "I have trouble trusting any dashboard if it doesn't have the equivalent of a "view source" button that lets me see what data sources were used for it and how they were manipulated. Sadly dashboard systems that encourage this are extremely rare" (S2).

### Phase D. Trying to resolve the doubt

**Corrected at step 6. This phase carried the only number in the map, and the number did not survive verification.**

- **Thoughts and questions.** `[?]`. The earlier wording, "how long this will take, and whether it is worth the ask at all", appears in no source and was written by us.
- **Emotion.** Sign `[?]`, intensity `[?]`. Two sources describe waiting, and **neither reports our reader's feeling while waiting for an answer about a number**. S7 is an analyst observing that a consumer may lose interest while a requested dashboard is being built. S9 is a CFO reporting a two-year IT queue and explicitly declining to make it a complaint. Nothing in either supports a sign, and nothing at all supports a scale value.
- **Strength.** No emotion is claimed, so no strength is claimed. The earlier "signal reinforced by a second venue" counted S7 and S8 as mutual confirmation when they state different things: S8 is about a question recurring and about readers lacking time to dig, not about how waiting feels.
- **Barrier, narrowed to what the sources actually establish.** The answer is produced by somebody else and therefore arrives on their schedule (S7, S9), and the same question is known to reach the analyst repeatedly (S8). The earlier wording added simultaneity and a single addressee, and neither is in any source. That every question lands on the same person is an inference from a data team of one to five with no rota, already marked `[?]` in `personas.md`.
- **Quotes, both scoped at the point of use.** "the consumer may have lost interest or become frustrated and moved on" (S7), which is about waiting for a requested dashboard rather than for a doubt to be resolved. And from S9, a CFO of thirty years: "To get a SQL/Python (or other programming language) solution requires submitting a request to IT and then waiting two years to work up the priority queue. This is not a complaint against IT and the priority process." That second one is the only first-person voice in this research from a person in our persona's role, and **it declines to express the frustration we expected to find**.

### Phase E. The number is presented

- **Thoughts, emotion, barrier, quote.** `[?]` throughout.

### Phase F. The number is challenged, or it is not

- **Thoughts, emotion, barrier, quote.** `[?]` throughout, after a deliberate search.
- **What was tried.** Six different phrasings across the Hacker News comment corpus, aimed at finding an account of somebody being contradicted on a number in front of others. Nothing usable came back.
- **What that means.** The phase on which the entire motivation model of this product rests has no evidence at all. The cost of the error is still our assumption.

### Phase G. The number travels on

**Changed at step 6 by the follow-up research, which was aimed at phase D and landed here instead.**

- **Thoughts and questions.** `[?]`
- **Emotion.** `[?]`. S9 reports a condition, not a feeling about it.
- **Barrier, and this phase now has one.** A figure that was once computed stops being computed and keeps looking exactly as it did, in the surface a finance reader actually works in, and it cannot practically be found again. From S9: "you get the scenario the author describes of hard-coded values in cells that once contained formulas. These are almost impossible to find in worksheets with large numbers of tabs and thousands of formulas." The same source adds that versions are not tracked: "people really do not track properly what each version contains and what are the true differences".
- **Strength.** A single source, so a signal rather than a pattern. It is the strongest single source in this file on population, being a CFO speaking in the first person about their own work, and the weakest on object, being about spreadsheets rather than about a number read from a metric surface.
- **What it does not do.** It does not evidence R4, which is about a reader returning to a number they saved. Nobody in this source returns to anything. The barrier is that the stale figure is undetectable, not that somebody came back and checked.

### What this pass means for the curve at step 5

**After the Deep pass and the step 6 correction, no phase carries a number.** Barriers exist at B, C, D and G, each with a named source and a named limit. Feelings do not. That is not a reason to fill anything in: the curve shows what exists and marks the rest undefined, without interpolating. A smooth line here would be the single most convincing lie this research could tell.

### Routes that returned nothing, recorded so they are not paid for twice

- **G2** returns HTTP 403 on product review pages.
- **TrustRadius** renders and reads without an account. The Looker page reports 137 reviews; what was actually read is the set that rendered without scrolling, roughly the first few, plus the site's own synthesis of seventeen. All of it is product feedback from people who build reports, with no line about trusting where a number came from. The remaining reviews were not read, and this says nothing about them.
- **The dbt Community Forum** was searched on three trust phrasings and returned technical threads, with thread 712 remaining the only usable one.
- **Locally Optimistic** answers 301 without resolving.
- **Hacker News** was searched on roughly a dozen exact phrases for a contradiction in a meeting, for stale reports and for conflicting figures. Nothing usable came back on the contradiction. **That is a result about the queries, not proof the corpus is empty**, and the step 6 follow-up demonstrated the point by finding S9 on the thirteenth query. What the corpus visibly holds is practitioners describing readers; readers describing themselves are rare rather than absent.

### Sync back into the persona

**Nothing in `personas.md` was disproved.** Two lines gain outside evidence, and one of the two **raises the risk instead of relieving it**. Applied at step 4 together with the source.

**A note on numbering, because two schemes collide in this file.** "Hole N" always means the numbered holes table in `personas.md`. The numbered table earlier in this file is referred to as "unknown N". Hole 1 is whether the reader checks before acting or only after being contradicted. Hole 6 is what surface they read numbers in today.

| Line in `personas.md` | Source | How it now reads |
| --- | --- | --- |
| P1 context, "the flow starts at one number opened from a link", marked `[?]` | S1 | Still `[?]`. The claim itself belongs to hole 6, the surface and route. The evidence bears on hole 1, how often a reader enters a checking destination at all, and it points against frequent entry rather than against entry |
| P1 pains, provenance as what is actually being asked for | S3 | Off the brief and onto a source outside vendor marketing. **The source is clinicians, not our reader**, so it supports the shape of the pain and does not confirm it for P1, which is how `personas.md` itself words it |

**P1 still has no mood quote.** Deep did not find a business reader speaking. S2 is a reader speaking about trust, but a technical one, and passing it off as P1's voice would be exactly the kind of quiet substitution this stage exists to prevent.

**One consequence reaches past this step and is therefore only named here.** S1 lands on the riskiest assumption in `lean-ux-canvas.md`, and step 4 has no right to edit that file. It is carried into the step 6 critique as an input.

---

## The emotional curve

Built at step 5 and corrected at step 6, as the input for the chart on `cjm-as-is.html`. Every point would have to stand on an emotion from step 4 with its source. Points resting on `[?]` are marked undefined rather than interpolated.

**The correction, stated first because it changes what this section is.** The single plotted point, a negative of intensity 3 at phase D, did not survive verification: its sources report waiting, not how waiting feels, and nothing in them supports a scale value. It has been withdrawn. What is left is a barrier map, not an emotional curve.

| Phase | Sign | Intensity | What is evidenced | Standing |
| --- | --- | --- | --- | --- |
| A. The audience approaches | `[?]` | `[?]` | nothing | Undefined |
| B. The number is taken | `[?]` | `[?]` | Barrier, pattern across two venues | Barrier only |
| C. The private moment of doubt | `[?]` | `[?]` | Barrier plus a measured behaviour on an adjacent population | Barrier only |
| D. Trying to resolve the doubt | `[?]` | `[?]` | Barrier, narrowed at step 6 to what the sources establish | Barrier only |
| E. The number is presented | `[?]` | `[?]` | nothing | Undefined |
| F. The number is challenged | `[?]` | `[?]` | nothing | Undefined |
| G. The number travels on | `[?]` | `[?]` | Barrier, single source, right population and wrong object | Barrier only |

**There is no floor and no peak, and neither is available to be named.** Calling D the floor, as this section did before step 6, was a comparison against six undefined phases, which is interpolation wearing a different word.

**What this means for the chart, stated plainly rather than styled around.** There is nothing to plot as a curve, so `cjm-as-is.html` will not draw one. It will show the seven phases with barrier presence and evidence strength, and will mark the emotional dimension as not measured. A dotted line between undefined points would still read as a trajectory, which is why there will not be one.

**What would turn this into a curve.** Interviews with business readers, which is the same answer the personas critique reached and neither follow-up round has substituted for. Public mining can keep adding barriers, as step 6 did by finding S9; it has produced no reported feeling in two rounds.

---

## Growth zones

Where today's experience hurts most and where the competition is winnable. Each zone names the specific barrier from step 4 that it sits on, and the market gap from `research.md`, `benchmark.md` or `competitors.md` where there is one. **No solutions are written here.** They belong in `cjm-to-be.md` at step 7, and a remedy written into this file would stop it being a mirror.

Ordered by strength of evidence, not by how appealing the zone is to build for. **Reordered at step 6:** the previous order put a measured trial last while calling it the strongest instrument in this research, which contradicted the ordering rule stated in this same sentence.

### Z1. The reader rarely travels to the trust information

- **Barrier it sits on.** Phase C: checking is a destination that has to be chosen (`competitors.md`), and S1 adds that a destination chosen for the reader and placed in their path was still entered only once or twice a year.
- **Market gap.** Not one of the fifteen products positions itself on the moment of reading, and none sells the minutes before a meeting (`competitors.md`, "Our gaps"). That is a claim about their positioning, which is what their pages prove. **What their interfaces do about arrival is unknown for ten of the fifteen** and is not claimed here.
- **Strength.** The strongest instrument in this research, a measured trial, on an adjacent population and a different object. **This is the only zone where the evidence points against us**, and it is first in the list for exactly that reason: it decides whether the other three matter.

### Z2. The number arrives with no route back to what made it

- **Barrier it sits on.** Phase B: the number arrives with no route back to its source (S5), and the definition is often unknown even to the people who built the surface it came from (S6).
- **Market gap.** Provenance is a destination that has to be chosen, and choosing it requires already suspecting something (`competitors.md`). Attribution scores 3 or below across all five benchmark products (`benchmark.md`).
- **Strength.** Two authors in two venues three years apart, which is a pattern by the rule of this stage and the weakest kind of it, sitting on top of a gap documented across the competitor set.

### Z3. A stale figure is indistinguishable from a live one

- **Barrier it sits on.** Phase G, which had no barrier until step 6: a figure that stopped being computed keeps looking exactly as it did and cannot practically be found again (S9), and versions are not tracked well enough to say what changed between them.
- **Market gap.** Benchmark criterion 8 records the category's strongest failure as a stale value that looks exactly like a fresh one (`benchmark.md`).
- **Strength.** A single source, so a signal. It is the only source in this research from somebody in our persona's role, and its object is a spreadsheet rather than a metric surface. **This zone was rejected at step 5 for having no parent barrier and qualifies now because the follow-up research gave it one.**

### Z4. The answer is produced by somebody else

- **Barrier it sits on.** Phase D: the answer arrives on the schedule of the person who produces it (S7, S9), and the same question is known to reach that person repeatedly (S8).
- **Market gap.** The category's answer to the repeated question is a catalog the reader has no reason to open (`docs.getdbt.com/docs/explore/explore-projects`), and the field's own default answer is to build a dashboard (`discourse.getdbt.com/t/712`), which is what this job is actually hired against.
- **Strength.** Barrier evidenced, feeling not. This zone stood on a negative emotion of intensity 3 until step 6 withdrew it, and what remains is the structural half.

### A candidate that did not qualify, recorded rather than quietly dropped

**There is nobody named to ask.** No product of the five scores above 3 on attribution (`benchmark.md`), and PowerMetrics names a person only when a certification is **removed** (`support.powermetrics.app`, article 37726220561559). That is strong market evidence, and it is **not a growth zone here, because no barrier in the step 4 layer says the reader looks for a name and fails to find one.** It is R1, a job whose support is the shape of the market rather than anything a reader said. Listed at step 5 as Z3 and demoted at step 6 for exactly the defect this file polices in others: a zone whose stated parent did not exist. Step 7 may still design for R1; it simply cannot claim this map as the parent.

---

## Step 6: the As-Is critique in two instruments

Codex ran first and blind, read-only, without seeing our table. Our own pass ran in parallel. Every finding was verified against the file before anything was repaired. **Twenty-one findings, and none was withdrawn at verification**, which is worth recording because the previous two rounds each produced a withdrawal.

### High

| # | Place | Finding | Found by |
| --- | --- | --- | --- |
| 1 | Phase C barrier | "even a destination ... is not visited" against S1's "1-2 times per year". Rare turned into never, strengthening the barrier past its source | Codex |
| 2 | Phase D thoughts | "whether it is worth the ask at all" appears in no source and was written by us | both |
| 3 | Phase D emotion | Intensity 3 has no basis. No source supplies a scale or a reason for that value | both |
| 4 | Phase D strength | "Signal reinforced by a second venue" counted S7 and S8 as mutual confirmation when they state different things | Codex |
| 5 | Phase D barrier | "one of many arriving at the same person" adds simultaneity and a single addressee that no source establishes | Codex |
| 6 | Curve | "The floor is D" compares against six undefined phases, which is interpolation under another name | Codex |
| 7 | Z2 | Turned "somebody else's clock" into an analyst response workflow that neither the barrier nor the source establishes | Codex |
| 8 | Z3 | The stated parent barrier does not exist in the step 4 layer | both |
| 9 | Z4 market gap | "Every one of them assumes the reader comes" contradicts `competitors.md`, where surfaces are known for five of fifteen and unknown for ten | Codex |

### Medium

| # | Place | Finding | Found by |
| --- | --- | --- | --- |
| 10 | Phase B strength | "Three different authors ... all inside one thread": two are cited, and they sit in two different venues three years apart. Wrong in both directions | both, extended by Claude |
| 11 | Sync table | "Hole 1" collides with the file's own numbered unknowns, and the claim in that row belongs to hole 6 | Codex |
| 12 | Sync table | The row does not name the population mismatch that `personas.md` itself names | both |
| 13 | Sources intro | "One thread" describes five of the nine sources; the rest come from three other places | Claude |
| 14 | S1 reading, and `personas.md` | "That is the shape of what we are designing" claims more than the source carries: the delivery conditions match, the object does not | Claude |
| 15 | Phase B emotion | "Nothing at the moment of taking" asserts knowledge of a surface that is hole 6 and unknown | Claude |
| 16 | Phase C emotion | S4 is about slicing and dicing, which is exploratory analysis, not about checking where a number came from | Claude |
| 17 | Failed routes | The TrustRadius line implied a page of 137 reviews had been read | Claude |
| 18 | Z1 strength | Repeated the one-thread error from finding 10 | Claude |
| 19 | Zones ordering | "Ordered by strength of evidence" contradicted by placing the measured trial last while calling it the strongest instrument | Claude |

### Low

| # | Place | Finding | Found by |
| --- | --- | --- | --- |
| 20 | Failed routes | "The corpus is saturated" overclaims from about a dozen queries | Claude |
| 21 | Curve | Present tense about a page that does not exist until step 10 | Claude |

### Divergence, and the systemic cause

**No verdict conflicts between the two instruments.** One extension: Codex read finding 10 as an error in the count of authors, and it is also an error about the venues.

**The cause shared by findings 1, 3, 4, 5, 7 and 10 is one habit, and it is worse than any single row.** Once a source had been accepted as being about our problem, its specifics stopped constraining what was written from it. That is how "1-2 times per year" became "is not visited" and how two different statements became mutual confirmation. The blind spot in the stage 01 critique was treating the brief as a source; this one is finer, because here the sources are real and it is the reading of them that drifts.

### Follow-up research after the critique

**Target: the intensity at phase D**, because after finding 3 it was the last plotted point in the map and it was about to be withdrawn. Public sources were searched for a reported feeling while waiting on an answer about a number.

**Result on the target: negative, and the point was withdrawn.** Nothing was found that reports how our reader feels while waiting. The nearest voice, S9, is a CFO who describes a two-year queue and then explicitly declines to make it a complaint. That absence is now recorded in phase D rather than covered with a number.

**Result off the target, which is where the value landed.** S9 is the only source in this research spoken in the first person by somebody holding our primary persona's role, a CFO of thirty years, and it gives **phase G its first barrier**: a value that once was a formula stops being one, keeps looking identical, and cannot practically be found again. That promotes the staleness zone, which step 5 had rejected for having no parent, into Z3 with a parent.

**Caveat carried with it.** The object is a spreadsheet, not a metric surface. It is the right population and the wrong artefact, which is the mirror image of most of what this file rests on.

**What this changes upstream.** `research.md` gains a subsection recording S9, since it is new outside evidence about the primary persona rather than a CJM-internal detail, and `research.html` is rebuilt in the same step so the published page does not diverge from it.
