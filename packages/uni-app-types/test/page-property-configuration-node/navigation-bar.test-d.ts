import type {
  NavigationBar,
  NavigationBarBackgroundRepeat,
  NavigationBarBlurEffect,
  NavigationBarColorAnimationTimingFunc,
  NavigationBarInstance,
  NavigationBarProps,
  NavigationBarSubtitleOverflow,
  NavigationBarTitleAlign,
  NavigationFrontColor,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("NavigationBar", () => {
  expectTypeOf<NavigationBarSubtitleOverflow>().toBeString();
  expectTypeOf<NavigationBarSubtitleOverflow>().toEqualTypeOf<UniHelper.NavigationBarSubtitleOverflow>();

  expectTypeOf<NavigationBarTitleAlign>().toBeString();
  expectTypeOf<NavigationBarTitleAlign>().toEqualTypeOf<UniHelper.NavigationBarTitleAlign>();

  expectTypeOf<NavigationBarBackgroundRepeat>().toBeString();
  expectTypeOf<NavigationBarBackgroundRepeat>().toEqualTypeOf<UniHelper.NavigationBarBackgroundRepeat>();

  expectTypeOf<NavigationBarBlurEffect>().toBeString();
  expectTypeOf<NavigationBarBlurEffect>().toEqualTypeOf<UniHelper.NavigationBarBlurEffect>();

  expectTypeOf<NavigationFrontColor>().toBeString();
  expectTypeOf<NavigationFrontColor>().toEqualTypeOf<UniHelper.NavigationFrontColor>();

  expectTypeOf<NavigationBarColorAnimationTimingFunc>().toBeString();
  expectTypeOf<NavigationBarColorAnimationTimingFunc>().toEqualTypeOf<UniHelper.NavigationBarColorAnimationTimingFunc>();

  expectTypeOf<NavigationBarProps>().toBeObject();
  expectTypeOf<NavigationBarProps>().toEqualTypeOf<UniHelper.NavigationBarProps>();

  expectTypeOf<NavigationBar>().not.toBeAny();
  expectTypeOf<NavigationBar>().toEqualTypeOf<UniHelper.NavigationBar>();

  expectTypeOf<NavigationBarInstance>().not.toBeAny();
  expectTypeOf<NavigationBarInstance>().toBeObject();
  expectTypeOf<NavigationBarInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<NavigationBarInstance>().toEqualTypeOf<UniHelper.NavigationBarInstance>();
});
