import { defineBuildConfig } from "unbuild";

// https://github.com/jsonleex/demo-mkdist/blob/main/build.config.ts
// https://github.com/wobsoriano/vue-sfc-unbuild/blob/main/build.config.ts
export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: [
    // *.vue -> *.vue
    {
      builder: "mkdist",
      input: "./src",
      pattern: ["**/*.vue"],
      loaders: ["vue"],
    },

    // *.ts -> *.js & *.mjs
    {
      builder: "mkdist",
      input: "./src",
      format: "cjs",
      pattern: ["**/*.ts"],
      loaders: ["js"],
    },
    {
      builder: "mkdist",
      input: "./src",
      format: "esm",
      pattern: ["**/*.ts"],
      loaders: ["js"],
    },
  ],
});
