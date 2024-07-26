import type {
  UniLink,
  UniLinkInstance,
  UniLinkProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniLink", () => {
  expectTypeOf<UniLinkProps>().toBeObject();
  expectTypeOf<UniLinkProps>().toEqualTypeOf<UniHelper.UniLinkProps>();

  expectTypeOf<UniLink>().not.toBeAny();
  expectTypeOf<UniLink>().toEqualTypeOf<UniHelper.UniLink>();

  expectTypeOf<UniLinkInstance>().not.toBeAny();
  expectTypeOf<UniLinkInstance>().toEqualTypeOf<UniHelper.UniLinkInstance>();
});
