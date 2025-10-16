import type { Plugin } from "vue";
import * as components from "./components";

const install: Plugin = {
  install(app) {
    for (const key of Object.keys(components)) {
      // biome-ignore lint/performance/noDynamicNamespaceImportAccess: Expected.
      app.component(key, components[key as keyof typeof components]);
    }
  },
};

export default install;

export * from "./components";
