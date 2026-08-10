# Plumb: entry point for an external auditor

1. Project rules live in `CLAUDE.md`. Read it first. Without it any finding is a median opinion, not a decision about this project.
2. The audit is READ-ONLY. Return findings as a list with `file:line` evidence. Edits are made by the repository owner after an explicit "we take it".
3. A finding without evidence is not a finding. Every claim quotes a line that actually exists in the file. If it does not hold up on re-reading, it is not submitted.
4. General advice is not wanted: "structure it better", "add examples", "consider automating". Only falsifiable discrepancies: a quote that contradicts another quote, a promise with no one to fulfil it, a file with no reader.
5. A deliberate decision of this project is not a defect. In doubt, read `CLAUDE.md` and `docs/decisions.md`, the reason is there.
6. Answer in Ukrainian.
