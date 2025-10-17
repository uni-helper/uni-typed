import { defineConfig } from "tsdown";
import Vue from "unplugin-vue/rolldown";

export default defineConfig({
  entry: ["./src/**/*.ts"],
  dts: { vue: true },
  format: ["esm", "cjs"],
  platform: "neutral",
  plugins: [Vue({ isProduction: false })],
});
