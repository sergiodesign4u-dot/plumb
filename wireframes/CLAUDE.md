# wireframes/

1. **This folder is grey and it stays grey.** Colour, brand and type never land here, only on COPIES of these screens in `design/`. Forgetting this line costs the whole artefact of stage 04.
2. **Structure and text belong to this folder.** A colour copy owns the visual layer and nothing else: a change of wording or of block order is made here and copied forward, never the reverse.
3. **`_wf.css` is the single source of appearance.** Inline CSS on a screen is allowed only for a rule that is genuinely single use, and even then written through `var(--wf-...)`. Anything repeated, and every token value, lives in `_wf.css`. No second stylesheet.
4. **`index.html` is reserved for the home screen of the product and stays uncreated:** this product has no home, and node 6.1 is the entry point. The hub with every screen is `overview.html`.
5. **A state is a page.** A state that is not in `docs/screens.md` is not drawn; a hole is repaired upwards in the IA and then rendered.
6. **Details:** the contract is `docs/conventions.md`, the screen registry is `_nav.js`, the state matrix and the reference screen are at the top of `docs/screens.md`.
