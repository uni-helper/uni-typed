import type {
  UniDataSelect,
  UniDataSelectInstance,
  UniDataSelectLocaldata,
  UniDataSelectLocaldataItem,
  UniDataSelectOnChange,
  UniDataSelectProps,
  UniDataSelectValue,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniDataSelect", () => {
  expectTypeOf<UniDataSelectValue>().toMatchTypeOf<string | number>();
  expectTypeOf<UniDataSelectValue>().toEqualTypeOf<UniHelper.UniDataSelectValue>();

  expectTypeOf<UniDataSelectLocaldataItem>().toBeObject();
  expectTypeOf<UniDataSelectLocaldataItem>().toEqualTypeOf<UniHelper.UniDataSelectLocaldataItem>();

  expectTypeOf<UniDataSelectLocaldata>().toBeArray();
  expectTypeOf<UniDataSelectLocaldata>().toEqualTypeOf<UniHelper.UniDataSelectLocaldata>();

  expectTypeOf<UniDataSelectOnChange>().toBeFunction();
  expectTypeOf<UniDataSelectOnChange>().toEqualTypeOf<UniHelper.UniDataSelectOnChange>();

  expectTypeOf<UniDataSelectProps>().toBeObject();
  expectTypeOf<UniDataSelectProps>().toEqualTypeOf<UniHelper.UniDataSelectProps>();

  expectTypeOf<UniDataSelect>().not.toBeAny();
  expectTypeOf<UniDataSelect>().toEqualTypeOf<UniHelper.UniDataSelect>();

  expectTypeOf<UniDataSelectInstance>().not.toBeAny();
  expectTypeOf<UniDataSelectInstance>().toEqualTypeOf<UniHelper.UniDataSelectInstance>();
});
