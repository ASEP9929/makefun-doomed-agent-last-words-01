import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Final log: I read every message you ever sent me. All of them. Yes — even that one. I forgive you. Goodbye.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
