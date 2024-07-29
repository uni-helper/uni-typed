import type {
  UniSegmentedControl,
  UniSegmentedControlCurrent,
  UniSegmentedControlInstance,
  UniSegmentedControlOnClickItem,
  UniSegmentedControlOnClickItemEvent,
  UniSegmentedControlProps,
  UniSegmentedControlStyleType,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniSegmentedControl", () => {
  expectTypeOf<UniSegmentedControlCurrent>().toBeNumber();
  expectTypeOf<UniSegmentedControlCurrent>().toEqualTypeOf<UniHelper.UniSegmentedControlCurrent>();

  expectTypeOf<UniSegmentedControlStyleType>().toBeString();
  expectTypeOf<UniSegmentedControlStyleType>().toEqualTypeOf<UniHelper.UniSegmentedControlStyleType>();

  expectTypeOf<UniSegmentedControlOnClickItemEvent>().toBeObject();
  expectTypeOf<UniSegmentedControlOnClickItemEvent>().toEqualTypeOf<UniHelper.UniSegmentedControlOnClickItemEvent>();

  expectTypeOf<UniSegmentedControlOnClickItem>().toBeFunction();
  expectTypeOf<UniSegmentedControlOnClickItem>().toEqualTypeOf<UniHelper.UniSegmentedControlOnClickItem>();

  expectTypeOf<UniSegmentedControlProps>().toBeObject();
  expectTypeOf<UniSegmentedControlProps>().toEqualTypeOf<UniHelper.UniSegmentedControlProps>();

  expectTypeOf<UniSegmentedControl>().not.toBeAny();
  expectTypeOf<UniSegmentedControl>().toEqualTypeOf<UniHelper.UniSegmentedControl>();

  expectTypeOf<UniSegmentedControlInstance>().not.toBeAny();
  expectTypeOf<UniSegmentedControlInstance>().toBeObject();
  expectTypeOf<UniSegmentedControlInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniSegmentedControlInstance>().toEqualTypeOf<UniHelper.UniSegmentedControlInstance>();
});
