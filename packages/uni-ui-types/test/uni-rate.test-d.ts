import type {
  UniRate,
  UniRateInstance,
  UniRateOnChange,
  UniRateOnChangeEvent,
  UniRateProps,
  UniRateValue,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniRate", () => {
  expectTypeOf<UniRateValue>().toBeNumber();
  expectTypeOf<UniRateValue>().toEqualTypeOf<UniHelper.UniRateValue>();

  expectTypeOf<UniRateOnChangeEvent>().toBeObject();
  expectTypeOf<UniRateOnChangeEvent>().toEqualTypeOf<UniHelper.UniRateOnChangeEvent>();

  expectTypeOf<UniRateOnChange>().toBeFunction();
  expectTypeOf<UniRateOnChange>().toEqualTypeOf<UniHelper.UniRateOnChange>();

  expectTypeOf<UniRateProps>().toBeObject();
  expectTypeOf<UniRateProps>().toEqualTypeOf<UniHelper.UniRateProps>();

  expectTypeOf<UniRate>().not.toBeAny();
  expectTypeOf<UniRate>().toEqualTypeOf<UniHelper.UniRate>();

  expectTypeOf<UniRateInstance>().not.toBeAny();
  expectTypeOf<UniRateInstance>().toBeObject();
  expectTypeOf<UniRateInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniRateInstance>().toEqualTypeOf<UniHelper.UniRateInstance>();
});
