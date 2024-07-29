import type {
  UniBreadcrumb,
  UniBreadcrumbInstance,
  UniBreadcrumbProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniBreadcrumb", () => {
  expectTypeOf<UniBreadcrumbProps>().toBeObject();
  expectTypeOf<UniBreadcrumbProps>().toEqualTypeOf<UniHelper.UniBreadcrumbProps>();

  expectTypeOf<UniBreadcrumb>().not.toBeAny();
  expectTypeOf<UniBreadcrumb>().toEqualTypeOf<UniHelper.UniBreadcrumb>();

  expectTypeOf<UniBreadcrumbInstance>().not.toBeAny();
  expectTypeOf<UniBreadcrumbInstance>().toBeObject();
  expectTypeOf<UniBreadcrumbInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniBreadcrumbInstance>().toEqualTypeOf<UniHelper.UniBreadcrumbInstance>();
});
