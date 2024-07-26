import type {
  UniTooltip,
  UniTooltipInstance,
  UniTooltipProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniTooltip", () => {
  expectTypeOf<UniTooltipProps>().toBeObject();
  expectTypeOf<UniTooltipProps>().toEqualTypeOf<UniHelper.UniTooltipProps>();

  expectTypeOf<UniTooltip>().not.toBeAny();
  expectTypeOf<UniTooltip>().toEqualTypeOf<UniHelper.UniTooltip>();

  expectTypeOf<UniTooltipInstance>().not.toBeAny();
  expectTypeOf<UniTooltipInstance>().toEqualTypeOf<UniHelper.UniTooltipInstance>();
});
