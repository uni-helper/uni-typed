import { existsSync } from "node:fs";
import { unlink } from "node:fs/promises";
import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts"],
  dts: true,
  format: ["esm", "cjs"],
  hooks: {
    "build:done": async () => {
      await Promise.all(
        ["./dist/index.cjs", "./dist/index.mjs"]
          .filter((path) => existsSync(path))
          .map((path) => unlink(path)),
      );
    },
  },
});
