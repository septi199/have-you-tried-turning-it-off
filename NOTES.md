# Notes — Have You Tried Turning It Off?

## Entry

> "I know you've been on hold for three hours, so let's turn it off, turn it on, and pretend together that was always the plan."

- Characters: 124 (limit 1–199)
- Encoding: UTF-8, ASCII only, single line, no trailing newline
- SHA-256 of `out/entry.txt`: `49aab22aa05177b0e08e91546fd6f32b3b6207532e0420f39af0fe8d405f5ba5`

## How it works

`main.ts` keeps the line as clauses in `PARTS`, joins them in `buildLine()`,
resolves the output path in `resolveOutputPath()`, writes it in `writeEntry()`,
reads it back in `verifyEntry()` and throws unless the file is byte-identical,
checks the character count in `checkLength()` (1–199), and `main()` runs the
steps in order. Turn 2 refactored the flat turn-1 script into these functions;
the output is byte-identical (same SHA-256).

Run: `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`

## Bounty facts

- Bounty: "Have You Tried Turning It Off?"
- Slug: `u-motasimfuad-have-you-tried-turning-it-off-154a938b`
- Reward: $10, 10 places
- Deadline: 26 Nov 2026 04:25 WIB
- Repo: `septi199/have-you-tried-turning-it-off`
