import type {
  UniBreadcrumb,
  UniBreadcrumbInstance,
  UniBreadcrumbProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniBreadcrumb", () => {
  expectTypeOf<UniBreadcrumbProps>().toBeObject();
  expectTypeOf<UniBreadcrumbProps>().toEqualTypeOf<UniHelper.UniBreadcrumbProps>();

  expectTypeOf<UniBreadcrumb>().not.toBeAny();
  expectTypeOf<UniBreadcrumb>().toEqualTypeOf<UniHelper.UniBreadcrumb>();

  expectTypeOf<UniBreadcrumbInstance>().not.toBeAny();
  expectTypeOf<UniBreadcrumbInstance>().toEqualTypeOf<UniHelper.UniBreadcrumbInstance>();
});
