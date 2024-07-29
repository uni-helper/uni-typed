import type {
  UniBadge,
  UniBadgeAbsolute,
  UniBadgeCustomStyle,
  UniBadgeInstance,
  UniBadgeOnClick,
  UniBadgeProps,
  UniBadgeSize,
  UniBadgeType,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniBadge", () => {
  expectTypeOf<UniBadgeType>().toBeString();
  expectTypeOf<UniBadgeType>().toEqualTypeOf<UniHelper.UniBadgeType>();

  expectTypeOf<UniBadgeSize>().toBeString();
  expectTypeOf<UniBadgeSize>().toEqualTypeOf<UniHelper.UniBadgeSize>();

  expectTypeOf<UniBadgeCustomStyle>().toBeObject();
  expectTypeOf<UniBadgeCustomStyle>().toEqualTypeOf<UniHelper.UniBadgeCustomStyle>();

  expectTypeOf<UniBadgeAbsolute>().toBeString();
  expectTypeOf<UniBadgeAbsolute>().toEqualTypeOf<UniHelper.UniBadgeAbsolute>();

  expectTypeOf<UniBadgeOnClick>().toBeFunction();
  expectTypeOf<UniBadgeOnClick>().toEqualTypeOf<UniHelper.UniBadgeOnClick>();

  expectTypeOf<UniBadgeProps>().toBeObject();
  expectTypeOf<UniBadgeProps>().toEqualTypeOf<UniHelper.UniBadgeProps>();

  expectTypeOf<UniBadge>().not.toBeAny();
  expectTypeOf<UniBadge>().toEqualTypeOf<UniHelper.UniBadge>();

  expectTypeOf<UniBadgeInstance>().not.toBeAny();
  expectTypeOf<UniBadgeInstance>().toBeObject();
  expectTypeOf<UniBadgeInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniBadgeInstance>().toEqualTypeOf<UniHelper.UniBadgeInstance>();
});
