import type {
  UniSwipeActionItem,
  UniSwipeActionItemInstance,
  UniSwipeActionItemOnChange,
  UniSwipeActionItemOnClick,
  UniSwipeActionItemOnClickEvent,
  UniSwipeActionItemOnClickEventPosition,
  UniSwipeActionItemOption,
  UniSwipeActionItemProps,
  UniSwipeActionItemShow,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniSwipeActionItem", () => {
  expectTypeOf<UniSwipeActionItemShow>().toBeString();
  expectTypeOf<UniSwipeActionItemShow>().toEqualTypeOf<UniHelper.UniSwipeActionItemShow>();

  expectTypeOf<UniSwipeActionItemOption>().toBeObject();
  expectTypeOf<UniSwipeActionItemOption>().toEqualTypeOf<UniHelper.UniSwipeActionItemOption>();

  expectTypeOf<UniSwipeActionItemOnClickEventPosition>().toBeString();
  expectTypeOf<UniSwipeActionItemOnClickEventPosition>().toEqualTypeOf<UniHelper.UniSwipeActionItemOnClickEventPosition>();

  expectTypeOf<UniSwipeActionItemOnClickEvent>().toBeObject();
  expectTypeOf<UniSwipeActionItemOnClickEvent>().toEqualTypeOf<UniHelper.UniSwipeActionItemOnClickEvent>();

  expectTypeOf<UniSwipeActionItemOnClick>().toBeFunction();
  expectTypeOf<UniSwipeActionItemOnClick>().toEqualTypeOf<UniHelper.UniSwipeActionItemOnClick>();

  expectTypeOf<UniSwipeActionItemOnChange>().toBeObject();
  expectTypeOf<UniSwipeActionItemOnChange>().toEqualTypeOf<UniHelper.UniSwipeActionItemOnChange>();

  expectTypeOf<UniSwipeActionItemProps>().toBeObject();
  expectTypeOf<UniSwipeActionItemProps>().toEqualTypeOf<UniHelper.UniSwipeActionItemProps>();

  expectTypeOf<UniSwipeActionItem>().not.toBeAny();
  expectTypeOf<UniSwipeActionItem>().toEqualTypeOf<UniHelper.UniSwipeActionItem>();

  expectTypeOf<UniSwipeActionItemInstance>().not.toBeAny();
  expectTypeOf<UniSwipeActionItemInstance>().toBeObject();
  expectTypeOf<UniSwipeActionItemInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniSwipeActionItemInstance>().toEqualTypeOf<UniHelper.UniSwipeActionItemInstance>();
});
