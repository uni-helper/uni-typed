import type {
  UniFav,
  UniFavContentText,
  UniFavInstance,
  UniFavOnClick,
  UniFavProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniFav", () => {
  expectTypeOf<UniFavContentText>().toBeObject();
  expectTypeOf<UniFavContentText>().toEqualTypeOf<UniHelper.UniFavContentText>();

  expectTypeOf<UniFavOnClick>().toBeFunction();
  expectTypeOf<UniFavOnClick>().toEqualTypeOf<UniHelper.UniFavOnClick>();

  expectTypeOf<UniFavProps>().toBeObject();
  expectTypeOf<UniFavProps>().toEqualTypeOf<UniHelper.UniFavProps>();

  expectTypeOf<UniFav>().not.toBeAny();
  expectTypeOf<UniFav>().toEqualTypeOf<UniHelper.UniFav>();

  expectTypeOf<UniFavInstance>().not.toBeAny();
  expectTypeOf<UniFavInstance>().toBeObject();
  expectTypeOf<UniFavInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniFavInstance>().toEqualTypeOf<UniHelper.UniFavInstance>();
});
