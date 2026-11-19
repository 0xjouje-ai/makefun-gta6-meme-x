// Entry program for make.fun bounty gta6-meme-x-01 ("Post a GTA 6 meme on X").
//
// The entry itself is the X post: a GTA 6 meme (meme.png in this repo — a Vice City
// beach scene where the make.fun ghost, holding its magenta star coin, lounges next
// to a guy who waited 13 years since GTA V and is calling in sick for launch day).
// POST.json at the repo root names that post's address; this program's only job is
// to copy POST.json into /output, where the gate reads it. Nothing this program
// writes about the post is judged — the house reads the post itself from X.
//
// Deterministic by design: it reads POST.json as bytes and writes the same bytes
// out, so two runs produce identical output. No network, no wall clock, no files
// outside this repository.
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(BOT_DIR, 'POST.json');
const targetPath = join(OUTPUT_DIR, 'POST.json');

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  const postJson = readFileSync(sourcePath);
  // Fail loudly on a malformed post file instead of copying garbage to /output:
  // POST.json must be a JSON object with a string url (a placeholder is fine —
  // the house refuses it later — but broken JSON must never pass silently).
  const parsed: unknown = JSON.parse(postJson.toString('utf8'));
  if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
    throw new Error('POST.json must be a JSON object with a string "url" field');
  }
  writeFileSync(targetPath, postJson);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
