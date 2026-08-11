# Template for a page node

Stage 03b, fixed at step 5. **Every node under `ia/docs/pages/` uses this shape**, so that thirty specifications can be read the same way and stage 04 never has to guess where something lives.

A node is not done until it has three things: this md, its own `ia/<node>.html`, and a chip in `ia/_nav.js`.

---

## The sections, in order

**1. Header line.** Page, type (page, dialog, state, section), node number `X.Y`, scope (MVP or ПОТІМ), group (global or pages).

**2. Purpose and jobs.** One line for what the page is for. Then the jobs it serves, by their identifiers from `jtbd.md`, or the phase of `cjm-to-be.md` if it is a step of the main path rather than a job of its own.

**3. URL and breadcrumbs.** The slug, and the trail `A > B > C`. A private or transactional page says so here.

**4. Content blocks, mobile-first priority.** Numbered from the first screen down. **The composition comes from `ia/docs/blocks.md`**, taking the TAKE rows for this page type plus whatever the jobs of this specific node require.

> **The rule that keeps this honest:** a block that is not in the bank and traces to nothing is never added quietly. It gets named out loud, and then either it enters the bank with its tracing or it does not exist. Block order is reasoned from the phone and from the barriers, never from the order a source happened to use.

**5. Components and variants.** From the shared library, with the variant named. Canonical components are referenced, never restated.

**6. States.** Guest, signed in, role, empty, loading, error, and any node-specific state. Every state that exists in the node map appears here.

**7. Filters and facets.** Listing pages only. "None" is an answer, and it is written rather than left blank.

**8. Primary call to action.** One, and it is the next step a person would actually take.

**9. Emotional support.** Only if a mechanism from the emotional and social table in `ia/docs/sitemap.md` genuinely lives on this page, written as `job → mechanism → where exactly on the page`. A mechanism that is microcopy stays a marker: stage 05 writes the words, but the place for them has to exist in the blocks now. **Nothing is added here for completeness.** If nothing from that table lands on this node, that is written as a line.

**10. Responsive.** The mobile stack at 360, then what changes on a wide canvas. Never the other way round.

**11. SEO block A to E.** On every indexed page. **Private and transactional zones carry noindex and no schema**, and say so instead of carrying an empty block.

---

## The SEO block, A to E

**A. Meta tags, with finished copy.** Title up to 60 characters, description up to 155, canonical, hreflang, robots, Open Graph and Twitter. Written out, not described.

**B. Heading structure.** Exactly one H1, then the H2 list in block order.

**C. Finished SEO text.** Real copy, not "to be filled in later". **This block stays the property of the node to the end of the pipeline:** stage 05 aligns it to voice and syncs the final version back here. Interface strings, meaning button labels, field labels and state text, do **not** move in here. After stage 05 those live in `voice/docs/microcopy.md`, and the node holds the requirement for *what information* is needed in that place.

**D. Structured data.** The schema.org type for this page, and where on the page it attaches.

**E. Optimisation checklist.** One H1, the LCP element named, crawlable `<a>` links, canonical and hreflang, no text baked into images, Core Web Vitals.

---

## Deviations this project takes, recorded once here

**There is no node 0.0 and there is no Home.** The pipeline's reference page is normally the Home. This product deliberately has none: `CLAUDE.md` records that global navigation belongs to the analyst and that the reader has no header, no menu and no home. The reference node is therefore **6.1, the product page**, which is the acquisition front door and the only indexed page in the whole map. Inventing a 0.0 to match the template would contradict a decision the IA has already made and defended.

**Almost nothing is indexed.** The number card is public and `noindex` by the decision at node 0.2, because indexing it would publish customers' numbers. The registry, sources, the definition editor, sign in and the system pages are private or transactional. **So the A to E block appears in full on 6.1 and on the rest of cluster 6, and everywhere else section 11 is one line saying noindex, no schema, and why.**
