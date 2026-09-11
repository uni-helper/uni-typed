import type {
  CustomTabBar,
  CustomTabBarDirection,
  CustomTabBarInstance,
  CustomTabBarOnTabItemTap,
  CustomTabBarOnTabItemTapDetail,
  CustomTabBarProps,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("CustomTabBar", () => {
  expectTypeOf<CustomTabBarDirection>().toBeString();
  expectTypeOf<CustomTabBarDirection>().toEqualTypeOf<UniHelper.CustomTabBarDirection>();

  expectTypeOf<CustomTabBarOnTabItemTapDetail>().toBeObject();
  expectTypeOf<CustomTabBarOnTabItemTapDetail>().toEqualTypeOf<UniHelper.CustomTabBarOnTabItemTapDetail>();

  expectTypeOf<CustomTabBarOnTabItemTap>().toBeFunction();
  expectTypeOf<CustomTabBarOnTabItemTap>().toEqualTypeOf<UniHelper.CustomTabBarOnTabItemTap>();

  expectTypeOf<CustomTabBarProps>().toBeObject();
  expectTypeOf<CustomTabBarProps>().toEqualTypeOf<UniHelper.CustomTabBarProps>();

  expectTypeOf<CustomTabBar>().not.toBeAny();
  expectTypeOf<CustomTabBar>().toEqualTypeOf<UniHelper.CustomTabBar>();

  expectTypeOf<CustomTabBarInstance>().not.toBeAny();
  expectTypeOf<CustomTabBarInstance>().toBeObject();
  expectTypeOf<CustomTabBarInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<CustomTabBarInstance>().toEqualTypeOf<UniHelper.CustomTabBarInstance>();
});
