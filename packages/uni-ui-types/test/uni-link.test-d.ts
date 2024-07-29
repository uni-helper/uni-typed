import type {
  UniLink,
  UniLinkInstance,
  UniLinkProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniLink", () => {
  expectTypeOf<UniLinkProps>().toBeObject();
  expectTypeOf<UniLinkProps>().toEqualTypeOf<UniHelper.UniLinkProps>();

  expectTypeOf<UniLink>().not.toBeAny();
  expectTypeOf<UniLink>().toEqualTypeOf<UniHelper.UniLink>();

  expectTypeOf<UniLinkInstance>().not.toBeAny();
  expectTypeOf<UniLinkInstance>().toBeObject();
  expectTypeOf<UniLinkInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniLinkInstance>().toEqualTypeOf<UniHelper.UniLinkInstance>();
});
