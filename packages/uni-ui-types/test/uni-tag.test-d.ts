import type {
  UniTag,
  UniTagCustomStyle,
  UniTagInstance,
  UniTagOnClick,
  UniTagProps,
  UniTagSize,
  UniTagType,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniTag", () => {
  expectTypeOf<UniTagType>().toBeString();
  expectTypeOf<UniTagType>().toEqualTypeOf<UniHelper.UniTagType>();

  expectTypeOf<UniTagSize>().toBeString();
  expectTypeOf<UniTagSize>().toEqualTypeOf<UniHelper.UniTagSize>();

  expectTypeOf<UniTagCustomStyle>().toBeString();
  expectTypeOf<UniTagCustomStyle>().toEqualTypeOf<UniHelper.UniTagCustomStyle>();

  expectTypeOf<UniTagOnClick>().toBeFunction();
  expectTypeOf<UniTagOnClick>().toEqualTypeOf<UniHelper.UniTagOnClick>();

  expectTypeOf<UniTagProps>().toBeObject();
  expectTypeOf<UniTagProps>().toEqualTypeOf<UniHelper.UniTagProps>();

  expectTypeOf<UniTag>().not.toBeAny();
  expectTypeOf<UniTag>().toEqualTypeOf<UniHelper.UniTag>();

  expectTypeOf<UniTagInstance>().not.toBeAny();
  expectTypeOf<UniTagInstance>().toEqualTypeOf<UniHelper.UniTagInstance>();
});
