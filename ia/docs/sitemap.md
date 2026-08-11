# IA base: entities and the concept sitemap

Stage 03a of the pipeline. Built from `research/docs/personas.md`, `jtbd.md`, `cjm-as-is.md` and `cjm-to-be.md`. **Nothing here is researched anew:** this stage structures what the earlier ones collected.

**The rule this file is held to: every screen serves a job.** A screen that serves none is marked `[ORPHAN]` rather than left as a quiet node. A screen that is a step of the main path is not an orphan: it traces to a phase of `cjm-to-be.md` plus the main job, because by our own definition the steps of a journey do not become separate jobs.

**Project boundary, from `CLAUDE.md`:** one language, English. No fork is taken at step 2.

---

## Entities

Objects first, screens second. Screens only show objects, and objects grow out of jobs.

| # | Entity | What it is made of | The job that produces it |
| --- | --- | --- | --- |
| E1 | **Metric** | Name, a pointer to the current definition, a binding to a source, a permanent URL | R5 produces it as an object, the main job reads it |
| E2 | **Definition version** | The text in words, who declared it, when it was declared, a pointer to the previous one | R5 to write it once, R1 for the name and date on the claim, R3 for the correction travelling, R4 for having something to compare against |
| E3 | **Source connection** | Warehouse type, reachability, time of the last successful run, expected cadence | The main job **as a precondition**: with no source a number has no age and no state. The wording is inherited from `jtbd.md`, which already calls this a precondition rather than a job of its own |
| E4 | **Owner of the claim** | Name, role, a route for reaching them `[?]` | R1. **The `[?]` is load-bearing:** asking a specific person requires a route, the reader has no account, and whether we may show a contact at all is unknown |
| E5 | **Analyst account** | Name, email, SSO identity, workspace | R5 and R2: writing and owning definitions requires signing in |
| E6 | **Reading** `[?]` | A metric plus the definition version that was current when the number was taken, plus a timestamp | R4. What is in question is not the need but the **form** |

**E6 deserves its own paragraph, because it is the first real fork in this IA.** The backlog requires a definition snapshot at read time, without which the state "definition changed after this was saved" has nothing to compare against. But T1 gave us **one permanent URL per metric**, not per reading. So either the snapshot is encoded in the link itself and there is no entity, or a reading is a stored object, and then we are storing something about a reader who has no account. Both have consequences, and this is not the place to settle it. It is carried into step 2 marked `[?]`.

### Under question, because no job sits under them

- **Workspace.** It lives in the `aarrr.md` metrics and is needed for tenancy and billing, and it closes no job. It is here rather than in the main list for exactly that reason.
- **The link as an object.** The success signal for sending a metric as a link counts links that went outside, but that is either a property of the metric or an analytics event, not an object a person handles. `[?]` until step 2.

### Deliberately not entities, each with its reason

- **A state is not an entity, and this is the most important line in the inventory.** "As of", "source is down" and "definition changed after this was saved" are **computed** from E3 and E2 and store nothing. Design principle 2 forbids them becoming an object with a lifecycle: ours is an annotation on a number, with no assignee, no severity and nothing to close. The moment a state gets its own entity it gets a list, a status and a queue, and we have built an incident tool.
- **The registry is not an entity**, it is a view over E1. There is one object there, the metric.
- **The reader has no user object at all.** The primary persona has no account by decision, so nothing in the product represents them. This is a consequence rather than an omission, and it lands in step 2: **no "my profile", no "my saved", no "my settings" for the person the interface is built around.**

### Relations

A metric has one current definition version and a pointer to the previous one; nothing deeper is stored, because version history deeper than the previous definition is out of scope. A metric points to one source connection. A definition version points to one owner. A reading, if it turns out to be an object, points to a metric and a version. An analyst account belongs to a workspace.
