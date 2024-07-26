import type {
  UniBreadcrumbItem,
  UniBreadcrumbItemInstance,
  UniBreadcrumbItemProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniBreadcrumbItem", () => {
  expectTypeOf<UniBreadcrumbItemProps>().toBeObject();
  expectTypeOf<UniBreadcrumbItemProps>().toEqualTypeOf<UniHelper.UniBreadcrumbItemProps>();

  expectTypeOf<UniBreadcrumbItem>().not.toBeAny();
  expectTypeOf<UniBreadcrumbItem>().toEqualTypeOf<UniHelper.UniBreadcrumbItem>();

  expectTypeOf<UniBreadcrumbItemInstance>().not.toBeAny();
  expectTypeOf<UniBreadcrumbItemInstance>().toEqualTypeOf<UniHelper.UniBreadcrumbItemInstance>();
});
