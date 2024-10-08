import type {
  Radio,
  RadioInstance,
  RadioProps,
  RadioValue,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("Radio", () => {
  expectTypeOf<RadioValue>().toBeString();
  expectTypeOf<RadioValue>().toEqualTypeOf<UniHelper.RadioValue>();

  expectTypeOf<RadioProps>().toBeObject();
  expectTypeOf<RadioProps>().toEqualTypeOf<UniHelper.RadioProps>();

  expectTypeOf<Radio>().not.toBeAny();
  expectTypeOf<Radio>().toEqualTypeOf<UniHelper.Radio>();

  expectTypeOf<RadioInstance>().not.toBeAny();
  expectTypeOf<RadioInstance>().toBeObject();
  expectTypeOf<RadioInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<RadioInstance>().toEqualTypeOf<UniHelper.RadioInstance>();
});
