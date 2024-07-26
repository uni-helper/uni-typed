import type {
  UniGroup,
  UniGroupInstance,
  UniGroupMode,
  UniGroupOnClick,
  UniGroupProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniGroup", () => {
  expectTypeOf<UniGroupMode>().toBeString();
  expectTypeOf<UniGroupMode>().toEqualTypeOf<UniHelper.UniGroupMode>();

  expectTypeOf<UniGroupOnClick>().toBeFunction();
  expectTypeOf<UniGroupOnClick>().toEqualTypeOf<UniHelper.UniGroupOnClick>();

  expectTypeOf<UniGroupProps>().toBeObject();
  expectTypeOf<UniGroupProps>().toEqualTypeOf<UniHelper.UniGroupProps>();

  expectTypeOf<UniGroup>().not.toBeAny();
  expectTypeOf<UniGroup>().toEqualTypeOf<UniHelper.UniGroup>();

  expectTypeOf<UniGroupInstance>().not.toBeAny();
  expectTypeOf<UniGroupInstance>().toEqualTypeOf<UniHelper.UniGroupInstance>();
});
