import type {
  UniTooltip,
  UniTooltipInstance,
  UniTooltipProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniTooltip", () => {
  expectTypeOf<UniTooltipProps>().toBeObject();
  expectTypeOf<UniTooltipProps>().toEqualTypeOf<UniHelper.UniTooltipProps>();

  expectTypeOf<UniTooltip>().not.toBeAny();
  expectTypeOf<UniTooltip>().toEqualTypeOf<UniHelper.UniTooltip>();

  expectTypeOf<UniTooltipInstance>().not.toBeAny();
  expectTypeOf<UniTooltipInstance>().toBeObject();
  expectTypeOf<UniTooltipInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniTooltipInstance>().toEqualTypeOf<UniHelper.UniTooltipInstance>();
});
