import type {
  UniRow,
  UniRowAlign,
  UniRowInstance,
  UniRowJustify,
  UniRowProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniRow", () => {
  expectTypeOf<UniRowJustify>().toBeString();
  expectTypeOf<UniRowJustify>().toEqualTypeOf<UniHelper.UniRowJustify>();

  expectTypeOf<UniRowAlign>().toBeString();
  expectTypeOf<UniRowAlign>().toEqualTypeOf<UniHelper.UniRowAlign>();

  expectTypeOf<UniRowProps>().toBeObject();
  expectTypeOf<UniRowProps>().toEqualTypeOf<UniHelper.UniRowProps>();

  expectTypeOf<UniRow>().not.toBeAny();
  expectTypeOf<UniRow>().toEqualTypeOf<UniHelper.UniRow>();

  expectTypeOf<UniRowInstance>().not.toBeAny();
  expectTypeOf<UniRowInstance>().toEqualTypeOf<UniHelper.UniRowInstance>();
});
