import { mkdirSync, writeFileSync } from "node:fs";

const vow =
  "I promise to love you through every firmware update, dead battery, and midnight reboot — till firmware do us part.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", vow, "utf8");
console.log(vow);
