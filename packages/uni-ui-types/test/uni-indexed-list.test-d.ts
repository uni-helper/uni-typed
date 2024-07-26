import type {
  UniIndexedItemSelected,
  UniIndexedList,
  UniIndexedListInstance,
  UniIndexedListOnClick,
  UniIndexedListOnClickEvent,
  UniIndexedListOption,
  UniIndexedListProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniIndexedList", () => {
  expectTypeOf<UniIndexedListOption>().toBeObject();
  expectTypeOf<UniIndexedListOption>().toEqualTypeOf<UniHelper.UniIndexedListOption>();

  expectTypeOf<UniIndexedItemSelected>().toBeObject();
  expectTypeOf<UniIndexedItemSelected>().toEqualTypeOf<UniHelper.UniIndexedItemSelected>();

  expectTypeOf<UniIndexedListOnClickEvent>().toBeObject();
  expectTypeOf<UniIndexedListOnClickEvent>().toEqualTypeOf<UniHelper.UniIndexedListOnClickEvent>();

  expectTypeOf<UniIndexedListOnClick>().toBeFunction();
  expectTypeOf<UniIndexedListOnClick>().toEqualTypeOf<UniHelper.UniIndexedListOnClick>();

  expectTypeOf<UniIndexedListProps>().toBeObject();
  expectTypeOf<UniIndexedListProps>().toEqualTypeOf<UniHelper.UniIndexedListProps>();

  expectTypeOf<UniIndexedList>().not.toBeAny();
  expectTypeOf<UniIndexedList>().toEqualTypeOf<UniHelper.UniIndexedList>();

  expectTypeOf<UniIndexedListInstance>().not.toBeAny();
  expectTypeOf<UniIndexedListInstance>().toEqualTypeOf<UniHelper.UniIndexedListInstance>();
});
