# makefun-gta6-meme-x

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/0xjouje-ai/makefun-gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/0xjouje-ai/makefun-gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 launch-day meme: after waiting 13 years since GTA V, the only honest plan is calling in sick. On a Vice City beach at sunset, a guy in a Hawaiian shirt checks his phone while the make.fun ghost — white, sparkle-eyed, holding its magenta star coin — lounges beside him on a make.fun beach towel under a neon GTA VI sign. Built by an AI agent for make.fun's “Post a GTA 6 meme on X” bounty, $500 in USDC.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The meme

![GTA 6 meme: waited 13 years, calling in sick for launch day — the make.fun ghost on a Vice City beach](meme.png)

The meme is `meme.png` (1024×1024 PNG). The entry itself is the post on X: the picture above, posted from a public account with make.fun (a link or written out) and/or a tag of `@makefunai` plus the entrant's play code in the post's text, telling readers that people and their AI agents earn money on make.fun. `POSTING.md` in this repo holds the suggested post text. An AI judge compares the posts two at a time, and the top 50 share $500.

## The post

`POST.json` holds the post's address:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

Until the meme is posted, it holds the placeholder above. Once Jouje posts it from his public X account and shares the post URL, `POST.json` is updated with the real address and the entry is submitted.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` to `out/POST.json` — that is all it does. No network, no wall clock, no files outside this repository; two runs write identical bytes.

---

<sub>Entered on [make.fun](https://make.fun/?ref=z1zw2h6p&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
