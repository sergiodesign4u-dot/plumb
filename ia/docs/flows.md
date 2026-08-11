# User flows

Stage 03a, step 4. Routes traced onto the To-Be phases in `research/docs/cjm-to-be.md`, with the As-Is barriers in `cjm-as-is.md` supplying the decision points and the dead ends. Nothing here is invented from the jobs alone.

**Colour is semantic, not decorative.** Green marks the two ends of the happy path, start and job closed, and the path itself is drawn with green arrows. Red marks a **true dead end**, a node with no route to the goal. Grey is everything between, including an error that recovers back into the flow. Tokens are the ones on `research.html`, so the diagrams sit on a light ground rather than punching a dark hole in the page.

Four flows: the main job, two related jobs of the primary persona, and one of the secondary. Every screen node exists in the concept sitemap; nodes that are states or steps rather than screens are named as such underneath each diagram.

---

## Flow 1. Main job: knowing how far the number can be trusted

Traces T1, T2 and T3 in `cjm-to-be.md`. The decision points come from the phase B and phase C barriers.

```mermaid
flowchart TD
    Start(["A link to a number arrives, in a deck or a chat"]) --> A1["A1. The number card"]
    A1 --> Perm{"Readable without an account?"}
    Perm -->|no| Own{"May the owner be shown on a card this reader cannot open?"}
    Own -->|no| Dead1["Dead end: nothing to see, no home, no way in"]
    Own -->|yes| NoNum["The owner is named, the number is not shown"]
    NoNum --> Part(["Partly closed: somebody to ask, and no number to use"])
    Perm -->|yes| Load["Loading: value queried at read time"]
    Load --> Src{"Is the source reachable?"}
    Src -->|no| Down["State: source is down. Definition, owner and last run still shown"]
    Down --> Who["The name and date on the claim, on A1"]
    Src -->|yes| Ret{"Did the query return a value?"}
    Ret -->|no| Emptyv["Empty: the query ran and returned nothing. The reason, never a zero"]
    Emptyv --> Enough{"Enough to stand behind it?"}
    Ret -->|yes| Fresh["The value, as of, age, expected cadence"]
    Fresh --> Chg{"Definition changed since the link?"}
    Chg -->|no| Enough
    Chg -->|yes| Changed["State: definition changed since saved, with the previous one"]
    Changed --> Enough
    Enough -->|no| A2["A2. Where this number came from"]
    A2 --> Enough
    Enough -->|yes| Win(["Job closed: the reader knows how far the number can be trusted"])
    Who --> Win

    classDef success fill:#eaf2ee,stroke:#1f5c4e,color:#14161a;
    classDef dead fill:#f7e9e6,stroke:#8c3b2e,color:#14161a;
    classDef neutral fill:#f6f5f1,stroke:#c9c6bf,color:#14161a;
    class Start,Win success;
    class Dead1 dead;
    class A1,Perm,Own,NoNum,Part,Load,Src,Down,Who,Ret,Emptyv,Fresh,Chg,Changed,Enough,A2 neutral;
    linkStyle 0,1,6,7,10,13,14,15,20 stroke:#1f5c4e,stroke-width:2px;
```

**Activation node: `A1`.** Activation is the first time a metric card is opened by somebody other than the author of its definition (`aarrr.md`). It is the **first node after the start and sits at zero taps from arrival**, which is what the research asked for: the product does not defer its first value behind anything.

**Decisions.** Whether the card is readable without an account. Whether the source answers. Whether the definition changed after the link was made. Whether what is shown is enough to stand behind.

**States.** Loading while the value is queried, because we store no rows and the number is pulled at read time. "Source is down", which still shows the definition, the owner and the last successful run. **"Empty", added at the critique: the query ran and returned nothing.** That is a different event from a source being down and it must never be rendered as a zero, which would be a bare figure of the worst kind. "Definition changed after this was saved", carrying the previous definition as a line.

**The dead end was narrowed at the first critique and corrected again at the second.** A reader who lands on a card they may not see still has nowhere to go, but naming a price is not the same as paying the smallest one. The route now asks a question first: **may the owner be shown on a card this reader cannot open?** If yes, the reader gets a name to ask. **That end is deliberately not the green one:** knowing who owns a card you cannot open is not knowing how far a number can be trusted, and the first repair routed it into the closed-job node, which overclaimed. It now ends at a partial close, somebody to ask and no number to use. If no, the dead end stands, red, and it is the direct price of flattening the reader's navigation to nothing. The question itself is open research, `research.md` OQ7, what a data lead considers safe to show.

**A consequence of metadata-only, visible here for the first time.** When the source is down there is no value at all, not even a stale one, because we keep no copy. The route does not die there: the definition, the owner and the age of the last successful run are enough to close the main job in its honest form, since the job is to know how far a number can be trusted, not to hold one. **This is the node where the main job and R1 join.**

---

## Flow 2. R1: finding out who is answerable

Traces T4. The `[?]` on the owner's contact route from the entity inventory becomes a decision here rather than staying an open note.

```mermaid
flowchart TD
    S2(["The number does not match what I expected"]) --> C2a["A1. The number card"]
    C2a --> Has{"Is an owner recorded on this definition?"}
    Has -->|no| NoOwn["Dead end for this job: an unowned number, the As-Is condition we claim to fix"]
    Has -->|yes| Route{"A route to reach them?"}
    Route -->|"yes, a route is shown"| Ask["Leaves our product to ask that specific person"]
    Route -->|"unknown at IA time, name only"| Name["The name alone: I know who, not how"]
    Ask --> W2(["Job closed: a specific person instead of a guess"])
    Name --> W2

    classDef success fill:#eaf2ee,stroke:#1f5c4e,color:#14161a;
    classDef dead fill:#f7e9e6,stroke:#8c3b2e,color:#14161a;
    classDef neutral fill:#f6f5f1,stroke:#c9c6bf,color:#14161a;
    class S2,W2 success;
    class NoOwn dead;
    class C2a,Has,Route,Ask,Name neutral;
    linkStyle 0,1,3,4,6 stroke:#1f5c4e,stroke-width:2px;
```

**Decisions.** Two after the critique. Whether an owner is recorded on this definition at all, and whether we may show a route to reach them. The second answer is unknown: `personas.md` records that the reader has no account and that what a data lead considers safe to show is an open question.

**The unowned number is a real dead end and it is drawn red.** Note that flow 1 asks whether the owner may be *shown* and does not ask whether one exists; a second diamond there would double the depth of an already long diagram, and in practice a definition cannot be saved without an owner. The case the two flows really disagree about is an owner who has left the company, which nothing prevents. A definition with no owner leaves this job unclosed and puts the reader back in the As-Is condition we claim to fix. It is prevented structurally at C2, which cannot save a definition without an owner, and it stays in the diagram because **an owner who leaves the company is prevented by nothing**: we do not track employment, and MVP has no import path that could bring in ownerless definitions.

**Why both branches close the job.** R1 is worded as finding out **who** is answerable, so knowing the name closes it and the asking happens outside our product. The branch without a route is not red, and it is not free either: it returns the reader to the As-Is behaviour of working out how to reach somebody, which is exactly the friction we claim to remove. It is the weakest branch in this IA.

**No screen exists for a person.** The owner is visible on A1 and set on C2, and never gets a page of their own.

---

## Flow 3. R4: an old figure does not travel as a current one

Traces T5. **This flow settles the fork left open in the entity inventory.**

```mermaid
flowchart TD
    S3(["I come back to a number I saved weeks ago"]) --> L3["Loading: the value is queried again"]
    L3 --> Cmp{"Definition changed since the moment the link carries?"}
    Cmp -->|yes| Ch3["State: definition changed since saved, with the previous one"]
    Cmp -->|no| Ok3["State: as of, age, expected cadence"]
    Ch3 --> W3(["Job closed: an old figure does not travel as a current one"])
    Ok3 --> W3

    classDef success fill:#eaf2ee,stroke:#1f5c4e,color:#14161a;
    classDef dead fill:#f7e9e6,stroke:#8c3b2e,color:#14161a;
    classDef neutral fill:#f6f5f1,stroke:#c9c6bf,color:#14161a;
    class S3,W3 success;
    class L3,Cmp,Ch3,Ok3 neutral;
    linkStyle 0,1,2,4 stroke:#1f5c4e,stroke-width:2px;
```

**What this flow decided, and it is a real IA result rather than a drawing.** Entity E6, the reading, was left `[?]` at step 1: either the reading is a stored object or the moment is encoded in the link. There is no third option and no neutral one. **If the link does not carry the moment it was read, R4 cannot be served at all**: the state degrades to "the definition changed at some point", which asks the reader to remember when they took the number, which is the very thing they came to us to avoid.

**Resolution: the moment is carried in the link, not stored as an object.** That keeps the permanent URL per metric and adds no record about a reader who has no account.

**Corrected at the critique: the rejected alternative is no longer drawn as a route.** The first version of this diagram kept a red node for a link that carries no moment. That asserted a dead end the product does not have, since the decision had already been taken, and a dead end drawn where none exists is as misleading as one hidden. The rejected option lives in this paragraph, which is where a decision belongs.

**Decisions.** One: whether the definition changed since the moment the link carries.

**States.** Loading, "definition changed after this was saved" with the previous definition, and the ordinary "as of".

---

## Flow 4. R5: the definition stops living in somebody's head

The secondary persona. Included because R5 and the source connection are preconditions of every flow above, and because the errors here are the only ones in the product that a person can actually fix.

```mermaid
flowchart TD
    S4(["An analyst brings a metric under control"]) --> D1s["D1. Sign in through SSO"]
    D1s --> La["Loading: the identity provider answers"]
    La --> Auth{"Did authentication succeed?"}
    Auth -->|no| Er0["Error: sign-in failed or SSO is misconfigured. Returns to D1"]
    Er0 --> D1s
    Auth -->|yes| First{"First run for this workspace?"}
    First -->|no| C3s["C3. Metric registry, populated, with search"]
    First -->|yes| C1s["C1. Connect a source"]
    C1s --> Lc["Loading: testing the connection"]
    Lc --> Conn{"Does the source answer?"}
    Conn -->|no| Er1["Error: connection failed. Returns to C1"]
    Er1 --> C1s
    Conn -->|yes| Emp["Empty: no metrics yet, one route to the first"]
    Emp --> C2s["C2. Define a metric: text, owner, source"]
    C3s --> C2s
    C2s --> Lq["Loading: the definition is run against the source"]
    Lq --> Q{"Definition returns a value?"}
    Q -->|no| Er2["Error: definition does not run. Returns to C2"]
    Er2 --> C2s
    Q -->|yes| Save["The metric is saved and gets its permanent URL"]
    Save --> B1s["B1. Send this number"]
    B1s --> Sent{"Did the link come back?"}
    Sent -->|no| Er3["Error: the link could not be created. Returns to B1"]
    Er3 --> B1s
    Sent -->|yes| W4(["Setup complete, and this is deliberately NOT activation"])

    classDef success fill:#eaf2ee,stroke:#1f5c4e,color:#14161a;
    classDef dead fill:#f7e9e6,stroke:#8c3b2e,color:#14161a;
    classDef neutral fill:#f6f5f1,stroke:#c9c6bf,color:#14161a;
    class S4,W4 success;
    class D1s,La,Auth,Er0,First,C3s,C1s,Lc,Conn,Er1,Emp,C2s,Lq,Q,Er2,Save,B1s,Sent,Er3 neutral;
    linkStyle 0,1,2,5,7,8,9,12,13,15,16,19,20,21,24 stroke:#1f5c4e,stroke-width:2px;
```

**There is no red node in this flow, and that is not carelessness.** Every error recovers: failed sign-in returns to D1, a failed connection returns to C1, a definition that does not run returns to C2, and a link that does not come back returns to B1. The analyst has credentials, an account and a way back, which is exactly what the reader in flow 1 does not have.

**Four states were added at the critique**, three of them found by the second instrument. Sign-in had no loading and no failure path, which for a product that sells SSO into US B2B is not a small omission. The registry only ever appeared empty, so the returning analyst had no route at all; the flow now branches on whether this is the first run for the workspace. The definition check jumped from action to verdict with no loading between them. And sending a link had no failure state.

**This flow is the definition job on both branches.** A returning analyst inside it is defining another metric, not running a general session: somebody who only wants to send an existing number is in flow 1 and on the send screen. Added at the second critique, because the first-run branch made the diagram readable as a whole session.

**The end of this flow is not activation, and the label says so.** Connecting a source and writing a definition are setup (`aarrr.md`). Activation happens in flow 1, when a second person opens the card. Naming it here stops a later stage from treating a completed analyst setup as the moment of value.

**Decisions.** Whether authentication succeeded. Whether this is the first run for the workspace. Whether the source answers. Whether the definition returns a value. Whether the link came back.

**States.** Three loadings (identity provider, connection test, definition run), an empty registry on the first run and a populated one afterwards, and four recoverable errors.

---

## What the flows changed in the concept map

- **No new screen appeared.** Every screen node was already in the concept sitemap, which is a small confirmation that the map was derived from jobs rather than assembled loosely.
- **One entity was resolved:** E6, the reading, is not an object. The reading moment travels in the link.
- **One dead end is now explicit** and belongs to the reader: a card they may not see, with nowhere to go. It is carried into the critique at step 6 rather than treated as handled because it is drawn.
