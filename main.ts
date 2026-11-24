// Charm the Commuter: Forecast a City That Isn't
// Writes one line of weather forecast (<=140 chars) for the invented
// city of Mizzlewick to /output/entry.txt. Fully deterministic: no
// network, no randomness, same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Mizzlewick: light rain until noon, 14\u00B0, and the 7:40 bus is only six minutes late \u2014 the mayor calls it punctual.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
