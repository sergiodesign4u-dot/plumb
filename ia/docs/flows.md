# User flows

Stage 03a, step 4. Routes traced onto the To-Be phases in `research/docs/cjm-to-be.md`, with the As-Is barriers in `cjm-as-is.md` supplying the decision points and the dead ends. Nothing here is invented from the jobs alone.

**Colour is semantic, not decorative.** Green marks the two ends of the happy path, start and job closed, and the path itself is drawn with green arrows. Red marks a **true dead end**, a node with no route to the goal. Grey is everything between, including an error that recovers back into the flow. Tokens are the ones on `research.html`, so the diagrams sit on a light ground rather than punching a dark hole in the page.

Four flows: the main job, two related jobs of the primary persona, and one of the secondary. Every screen node exists in the concept sitemap; nodes that are states or steps rather than screens are named as such underneath each diagram.

---

## Flow 1. Main job: knowing how far the number can be trusted

Traces T1, T2 and T3 in `cjm-to-be.md`. The decision points come from the phase B and phase C barriers.

```mermaid
flowchart TD
    Start(["A link to a number arrives, in a deck or a chat"]) --> A1["A1. The number card opens, no account"]
    A1 --> Perm{"Readable without an account?"}
    Perm -->|no| Dead1["Dead end: nothing to see, no home, no way in"]
    Perm -->|yes| Load["Loading: value queried at read time"]
    Load --> Src{"Is the source reachable?"}
    Src -->|no| Down["State: source is down. Definition, owner and last run still shown"]
    Down --> Who["The name and date on the claim, on A1"]
    Src -->|yes| Fresh["The value, as of, age, expected cadence"]
    Fresh --> Chg{"Definition changed since the link?"}
    Chg -->|no| Enough{"Enough to stand behind it?"}
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
    class A1,Perm,Load,Src,Down,Who,Fresh,Chg,Changed,Enough,A2 neutral;
    linkStyle 0,1,3,4,7,8,9,14 stroke:#1f5c4e,stroke-width:2px;
```

**Activation node: `A1`.** Activation is the first time a metric card is opened by somebody other than the author of its definition (`aarrr.md`). It is the **first node after the start and sits at zero taps from arrival**, which is what the research asked for: the product does not defer its first value behind anything.

**Decisions.** Whether the card is readable without an account. Whether the source answers. Whether the definition changed after the link was made. Whether what is shown is enough to stand behind.

**States.** Loading while the value is queried, because we store no rows and the number is pulled at read time. "Source is down", which still shows the definition, the owner and the last successful run. "Definition changed after this was saved", carrying the previous definition as a line.

**The one true dead end, and it was predicted at step 3.** A reader who lands on a card they may not see has nowhere to go: no home, no menu, no account, and nothing to sign into. It is red because there is no route to the goal from there, and it is the direct price of flattening the reader's navigation to nothing.

**A consequence of metadata-only, visible here for the first time.** When the source is down there is no value at all, not even a stale one, because we keep no copy. The route does not die there: the definition, the owner and the age of the last successful run are enough to close the main job in its honest form, since the job is to know how far a number can be trusted, not to hold one. **This is the node where the main job and R1 join.**

---

## Flow 2. R1: finding out who is answerable

Traces T4. The `[?]` on the owner's contact route from the entity inventory becomes a decision here rather than staying an open note.

```mermaid
flowchart TD
    S2(["The number does not match what I expected"]) --> C2a["A1. The card, name and date already visible"]
    C2a --> Route{"A route to reach them?"}
    Route -->|"yes, a route is shown"| Ask["Leaves our product to ask that specific person"]
    Route -->|"unknown at IA time, name only"| Name["The name alone: I know who, not how"]
    Ask --> W2(["Job closed: a specific person instead of a guess"])
    Name --> W2

    classDef success fill:#eaf2ee,stroke:#1f5c4e,color:#14161a;
    classDef dead fill:#f7e9e6,stroke:#8c3b2e,color:#14161a;
    classDef neutral fill:#f6f5f1,stroke:#c9c6bf,color:#14161a;
    class S2,W2 success;
    class C2a,Route,Ask,Name neutral;
    linkStyle 0,1,2,4 stroke:#1f5c4e,stroke-width:2px;
```

**Decisions.** Only one, and its answer is unknown: whether we may show a route to the owner at all. `personas.md` records that the reader has no account and that what a data lead considers safe to show is an open question.

**Why both branches close the job.** R1 is worded as finding out **who** is answerable, so knowing the name closes it and the asking happens outside our product. The branch without a route is not red, and it is not free either: it returns the reader to the As-Is behaviour of working out how to reach somebody, which is exactly the friction we claim to remove. It is the weakest branch in this IA.

**No screen exists for a person.** The owner is visible on A1 and set on C2, and never gets a page of their own.

---

## Flow 3. R4: an old figure does not travel as a current one

Traces T5. **This flow settles the fork left open in the entity inventory.**

```mermaid
flowchart TD
    S3(["I come back to a number I saved weeks ago"]) --> L3["Loading: the value is queried again"]
    L3 --> Mark{"Link carries the reading moment?"}
    Mark -->|no| D3["Dead end: we can say the definition changed, never that it changed since YOUR reading"]
    Mark -->|yes| Cmp{"Changed since that moment?"}
    Cmp -->|yes| Ch3["State: definition changed since saved, with the previous one"]
    Cmp -->|no| Ok3["State: as of, age, expected cadence"]
    Ch3 --> W3(["Job closed: an old figure does not travel as a current one"])
    Ok3 --> W3

    classDef success fill:#eaf2ee,stroke:#1f5c4e,color:#14161a;
    classDef dead fill:#f7e9e6,stroke:#8c3b2e,color:#14161a;
    classDef neutral fill:#f6f5f1,stroke:#c9c6bf,color:#14161a;
    class S3,W3 success;
    class D3 dead;
    class L3,Mark,Cmp,Ch3,Ok3 neutral;
    linkStyle 0,1,3,4,6 stroke:#1f5c4e,stroke-width:2px;
```

**What this flow decided, and it is a real IA result rather than a drawing.** Entity E6, the reading, was left `[?]` at step 1: either the reading is a stored object or the moment is encoded in the link. The flow shows there is no third option and no neutral one. **If the link does not carry the moment it was read, R4 cannot be served at all**: the state degrades to "the definition changed at some point", which asks the reader to remember when they took the number, which is the very thing they came to us to avoid.

**Resolution: the moment is carried in the link, not stored as an object.** That keeps the permanent URL per metric, adds no record about a reader who has no account, and it is the cheaper of the two. The entity inventory is updated accordingly.

**Decisions.** Whether the link carries the reading moment. Whether the definition changed since it.

**States.** Loading, "definition changed after this was saved" with the previous definition, and the ordinary "as of".

---

## Flow 4. R5: the definition stops living in somebody's head

The secondary persona. Included because R5 and the source connection are preconditions of every flow above, and because the errors here are the only ones in the product that a person can actually fix.

```mermaid
flowchart TD
    S4(["An analyst brings a metric under control"]) --> D1s["D1. Sign in through SSO"]
    D1s --> C1s["C1. Connect a source"]
    C1s --> Lc["Loading: testing the connection"]
    Lc --> Conn{"Does the source answer?"}
    Conn -->|no| Er1["Error: connection failed. Returns to C1"]
    Er1 --> C1s
    Conn -->|yes| C3s["C3. Metric registry"]
    C3s --> Emp["Empty: no metrics yet, one route to the first"]
    Emp --> C2s["C2. Define a metric: text, owner, source"]
    C2s --> Q{"Definition returns a value?"}
    Q -->|no| Er2["Error: definition does not run. Returns to C2"]
    Er2 --> C2s
    Q -->|yes| Save["The metric is saved and gets its permanent URL"]
    Save --> B1s["B1. Send this number"]
    B1s --> W4(["Setup complete, and this is deliberately NOT activation"])

    classDef success fill:#eaf2ee,stroke:#1f5c4e,color:#14161a;
    classDef dead fill:#f7e9e6,stroke:#8c3b2e,color:#14161a;
    classDef neutral fill:#f6f5f1,stroke:#c9c6bf,color:#14161a;
    class S4,W4 success;
    class D1s,C1s,Lc,Conn,Er1,C3s,Emp,C2s,Q,Er2,Save,B1s neutral;
    linkStyle 0,1,2,3,6,7,8,9,12,13,14 stroke:#1f5c4e,stroke-width:2px;
```

**There is no red node in this flow, and that is not carelessness.** Both errors recover: a failed connection returns to C1 and a definition that does not run returns to C2. The analyst has credentials, an account and a way back, which is exactly what the reader in flow 1 does not have.

**The end of this flow is not activation, and the label says so.** Connecting a source and writing a definition are setup (`aarrr.md`). Activation happens in flow 1, when a second person opens the card. Naming it here stops a later stage from treating a completed analyst setup as the moment of value.

**Decisions.** Whether the source answers. Whether the definition returns a value.

**States.** Loading while the connection is tested, an empty registry on the first run, and two recoverable errors.

---

## What the flows changed in the concept map

- **No new screen appeared.** Every screen node was already in the concept sitemap, which is a small confirmation that the map was derived from jobs rather than assembled loosely.
- **One entity was resolved:** E6, the reading, is not an object. The reading moment travels in the link.
- **One dead end is now explicit** and belongs to the reader: a card they may not see, with nowhere to go. It is carried into the critique at step 6 rather than treated as handled because it is drawn.
