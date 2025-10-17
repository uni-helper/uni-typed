import { unlink } from "node:fs/promises";
import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts", "./src/volar-plugin.ts"],
  dts: true,
  format: ["esm", "cjs"],
  hooks: {
    "build:done": async () => {
      await Promise.all(
        ["./dist/index.cjs", "./dist/index.js"].map((path) => unlink(path)),
      );
    },
  },
});
