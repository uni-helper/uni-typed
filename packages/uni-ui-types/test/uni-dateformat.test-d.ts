import type {
  UniDateformat,
  UniDateformatData,
  UniDateformatInstance,
  UniDateformatLocale,
  UniDateformatProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniDateformat", () => {
  expectTypeOf<UniDateformatLocale>().toBeString();
  expectTypeOf<UniDateformatLocale>().toEqualTypeOf<UniHelper.UniDateformatLocale>();

  expectTypeOf<UniDateformatData>().toMatchTypeOf<string | number | Date>();
  expectTypeOf<UniDateformatData>().toEqualTypeOf<UniHelper.UniDateformatData>();

  expectTypeOf<UniDateformatProps>().toBeObject();
  expectTypeOf<UniDateformatProps>().toEqualTypeOf<UniHelper.UniDateformatProps>();

  expectTypeOf<UniDateformat>().not.toBeAny();
  expectTypeOf<UniDateformat>().toEqualTypeOf<UniHelper.UniDateformat>();

  expectTypeOf<UniDateformatInstance>().not.toBeAny();
  expectTypeOf<UniDateformatInstance>().toEqualTypeOf<UniHelper.UniDateformatInstance>();
});
