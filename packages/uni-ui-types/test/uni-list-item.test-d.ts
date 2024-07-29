import type {
  UniListItem,
  UniListItemDirection,
  UniListItemEllipsis,
  UniListItemExtraIcon,
  UniListItemInstance,
  UniListItemLink,
  UniListItemOnClick,
  UniListItemOnClickEvent,
  UniListItemOnSwitchChange,
  UniListItemOnSwitchChangeEvent,
  UniListItemProps,
  UniListItemSwitchChecked,
  UniListItemThumbSize,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniListItem", () => {
  expectTypeOf<UniListItemEllipsis>().toBeNumber();
  expectTypeOf<UniListItemEllipsis>().toEqualTypeOf<UniHelper.UniListItemEllipsis>();

  expectTypeOf<UniListItemThumbSize>().toBeString();
  expectTypeOf<UniListItemThumbSize>().toEqualTypeOf<UniHelper.UniListItemThumbSize>();

  expectTypeOf<UniListItemLink>().toBeString();
  expectTypeOf<UniListItemLink>().toEqualTypeOf<UniHelper.UniListItemLink>();

  expectTypeOf<UniListItemDirection>().toBeString();
  expectTypeOf<UniListItemDirection>().toEqualTypeOf<UniHelper.UniListItemDirection>();

  expectTypeOf<UniListItemSwitchChecked>().toBeBoolean();
  expectTypeOf<UniListItemSwitchChecked>().toEqualTypeOf<UniHelper.UniListItemSwitchChecked>();

  expectTypeOf<UniListItemExtraIcon>().toBeObject();
  expectTypeOf<UniListItemExtraIcon>().toEqualTypeOf<UniHelper.UniListItemExtraIcon>();

  expectTypeOf<UniListItemOnClickEvent>().toBeObject();
  expectTypeOf<UniListItemOnClickEvent>().toEqualTypeOf<UniHelper.UniListItemOnClickEvent>();

  expectTypeOf<UniListItemOnClick>().toBeFunction();
  expectTypeOf<UniListItemOnClick>().toEqualTypeOf<UniHelper.UniListItemOnClick>();

  expectTypeOf<UniListItemOnSwitchChangeEvent>().toBeObject();
  expectTypeOf<UniListItemOnSwitchChangeEvent>().toEqualTypeOf<UniHelper.UniListItemOnSwitchChangeEvent>();

  expectTypeOf<UniListItemOnSwitchChange>().toBeFunction();
  expectTypeOf<UniListItemOnSwitchChange>().toEqualTypeOf<UniHelper.UniListItemOnSwitchChange>();

  expectTypeOf<UniListItemProps>().toBeObject();
  expectTypeOf<UniListItemProps>().toEqualTypeOf<UniHelper.UniListItemProps>();

  expectTypeOf<UniListItem>().not.toBeAny();
  expectTypeOf<UniListItem>().toEqualTypeOf<UniHelper.UniListItem>();

  expectTypeOf<UniListItemInstance>().not.toBeAny();
  expectTypeOf<UniListItemInstance>().toBeObject();
  expectTypeOf<UniListItemInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniListItemInstance>().toEqualTypeOf<UniHelper.UniListItemInstance>();
});
