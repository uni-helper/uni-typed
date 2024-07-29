import type {
  UniBreadcrumbItem,
  UniBreadcrumbItemInstance,
  UniBreadcrumbItemProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniBreadcrumbItem", () => {
  expectTypeOf<UniBreadcrumbItemProps>().toBeObject();
  expectTypeOf<UniBreadcrumbItemProps>().toEqualTypeOf<UniHelper.UniBreadcrumbItemProps>();

  expectTypeOf<UniBreadcrumbItem>().not.toBeAny();
  expectTypeOf<UniBreadcrumbItem>().toEqualTypeOf<UniHelper.UniBreadcrumbItem>();

  expectTypeOf<UniBreadcrumbItemInstance>().not.toBeAny();
  expectTypeOf<UniBreadcrumbItemInstance>().toBeObject();
  expectTypeOf<UniBreadcrumbItemInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniBreadcrumbItemInstance>().toEqualTypeOf<UniHelper.UniBreadcrumbItemInstance>();
});
