import type {
  UniSteps,
  UniStepsDirection,
  UniStepsInstance,
  UniStepsOption,
  UniStepsProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniSteps", () => {
  expectTypeOf<UniStepsDirection>().toBeString();
  expectTypeOf<UniStepsDirection>().toEqualTypeOf<UniHelper.UniStepsDirection>();

  expectTypeOf<UniStepsOption>().toBeObject();
  expectTypeOf<UniStepsOption>().toEqualTypeOf<UniHelper.UniStepsOption>();

  expectTypeOf<UniStepsProps>().toBeObject();
  expectTypeOf<UniStepsProps>().toEqualTypeOf<UniHelper.UniStepsProps>();

  expectTypeOf<UniSteps>().not.toBeAny();
  expectTypeOf<UniSteps>().toEqualTypeOf<UniHelper.UniSteps>();

  expectTypeOf<UniStepsInstance>().not.toBeAny();
  expectTypeOf<UniStepsInstance>().toBeObject();
  expectTypeOf<UniStepsInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniStepsInstance>().toEqualTypeOf<UniHelper.UniStepsInstance>();
});
