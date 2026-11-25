import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The line, kept as clauses so each beat of the joke stays separate.
const PARTS = [
  "I know you've been on hold for three hours,",
  "so let's turn it off, turn it on,",
  "and pretend together that was always the plan.",
] as const;

const MAX_CHARS = 199;
const MIN_CHARS = 1;

interface Entry {
  text: string;
  chars: number;
}

function buildLine(): Entry {
  const text = PARTS.join(" ");
  return { text, chars: [...text].length };
}

function resolveOutputPath(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
  return join(dir, "entry.txt");
}

function writeEntry(path: string, entry: Entry): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, entry.text, "utf8");
}

function verifyEntry(path: string, entry: Entry): void {
  const back = readFileSync(path, "utf8");
  if (back !== entry.text) {
    throw new Error("verification failed: entry.txt is not byte-identical to the line");
  }
}

function checkLength(entry: Entry): void {
  if (entry.chars < MIN_CHARS || entry.chars > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${entry.chars}`,
    );
  }
}

function main(): void {
  const entry = buildLine();
  const path = resolveOutputPath();
  writeEntry(path, entry);
  verifyEntry(path, entry);
  checkLength(entry);
  console.log(`wrote ${path} (${entry.chars} chars)`);
}

main();
