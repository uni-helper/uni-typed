import type {
  UniCombox,
  UniComboxInstance,
  UniComboxOnInput,
  UniComboxProps,
  UniComboxValue,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniCombox", () => {
  expectTypeOf<UniComboxValue>().toBeString();
  expectTypeOf<UniComboxValue>().toEqualTypeOf<UniHelper.UniComboxValue>();

  expectTypeOf<UniComboxOnInput>().toBeFunction();
  expectTypeOf<UniComboxOnInput>().toEqualTypeOf<UniHelper.UniComboxOnInput>();

  expectTypeOf<UniComboxProps>().toBeObject();
  expectTypeOf<UniComboxProps>().toEqualTypeOf<UniHelper.UniComboxProps>();

  expectTypeOf<UniCombox>().not.toBeAny();
  expectTypeOf<UniCombox>().toEqualTypeOf<UniHelper.UniCombox>();

  expectTypeOf<UniComboxInstance>().not.toBeAny();
  expectTypeOf<UniComboxInstance>().toBeObject();
  expectTypeOf<UniComboxInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniComboxInstance>().toEqualTypeOf<UniHelper.UniComboxInstance>();
});
