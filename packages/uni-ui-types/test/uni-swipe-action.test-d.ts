import type {
  UniSwipeAction,
  UniSwipeActionCloseAll,
  UniSwipeActionInstance,
  UniSwipeActionProps,
  UniSwipeActionResize,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniSwipeAction", () => {
  expectTypeOf<UniSwipeActionResize>().toBeFunction();
  expectTypeOf<UniSwipeActionResize>().toEqualTypeOf<UniHelper.UniSwipeActionResize>();

  expectTypeOf<UniSwipeActionCloseAll>().toBeFunction();
  expectTypeOf<UniSwipeActionCloseAll>().toEqualTypeOf<UniHelper.UniSwipeActionCloseAll>();

  expectTypeOf<UniSwipeActionProps>().toBeObject();
  expectTypeOf<UniSwipeActionProps>().toEqualTypeOf<UniHelper.UniSwipeActionProps>();

  expectTypeOf<UniSwipeAction>().not.toBeAny();
  expectTypeOf<UniSwipeAction>().toEqualTypeOf<UniHelper.UniSwipeAction>();

  expectTypeOf<UniSwipeActionInstance>().not.toBeAny();
  expectTypeOf<UniSwipeActionInstance>().toBeObject();
  expectTypeOf<UniSwipeActionInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniSwipeActionInstance>().toEqualTypeOf<UniHelper.UniSwipeActionInstance>();
});
