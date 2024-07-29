import type {
  Swiper,
  SwiperEasingFunction,
  SwiperInstance,
  SwiperOnAnimationfinish,
  SwiperOnAnimationfinishDetail,
  SwiperOnAnimationfinishEvent,
  SwiperOnChange,
  SwiperOnChangeDetail,
  SwiperOnChangeEvent,
  SwiperOnTransition,
  SwiperOnTransitionDetail,
  SwiperOnTransitionEvent,
  SwiperProps,
  SwiperSource,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("Swiper", () => {
  expectTypeOf<SwiperSource>().toBeString();
  expectTypeOf<SwiperSource>().toEqualTypeOf<UniHelper.SwiperSource>();

  expectTypeOf<SwiperEasingFunction>().toBeString();
  expectTypeOf<SwiperEasingFunction>().toEqualTypeOf<UniHelper.SwiperEasingFunction>();

  expectTypeOf<SwiperOnChangeDetail>().toBeObject();
  expectTypeOf<SwiperOnChangeDetail>().toEqualTypeOf<UniHelper.SwiperOnChangeDetail>();

  expectTypeOf<SwiperOnChangeEvent>().toBeObject();
  expectTypeOf<SwiperOnChangeEvent>().toEqualTypeOf<UniHelper.SwiperOnChangeEvent>();

  expectTypeOf<SwiperOnChange>().toBeFunction();
  expectTypeOf<SwiperOnChange>().toEqualTypeOf<UniHelper.SwiperOnChange>();

  expectTypeOf<SwiperOnTransitionDetail>().toBeObject();
  expectTypeOf<SwiperOnTransitionDetail>().toEqualTypeOf<UniHelper.SwiperOnTransitionDetail>();

  expectTypeOf<SwiperOnTransitionEvent>().toBeObject();
  expectTypeOf<SwiperOnTransitionEvent>().toEqualTypeOf<UniHelper.SwiperOnTransitionEvent>();

  expectTypeOf<SwiperOnTransition>().toBeFunction();
  expectTypeOf<SwiperOnTransition>().toEqualTypeOf<UniHelper.SwiperOnTransition>();

  expectTypeOf<SwiperOnAnimationfinishDetail>().toBeObject();
  expectTypeOf<SwiperOnAnimationfinishDetail>().toEqualTypeOf<UniHelper.SwiperOnAnimationfinishDetail>();

  expectTypeOf<SwiperOnAnimationfinishEvent>().toBeObject();
  expectTypeOf<SwiperOnAnimationfinishEvent>().toEqualTypeOf<UniHelper.SwiperOnAnimationfinishEvent>();

  expectTypeOf<SwiperOnAnimationfinish>().toBeFunction();
  expectTypeOf<SwiperOnAnimationfinish>().toEqualTypeOf<UniHelper.SwiperOnAnimationfinish>();

  expectTypeOf<SwiperProps>().toBeObject();
  expectTypeOf<SwiperProps>().toEqualTypeOf<UniHelper.SwiperProps>();

  expectTypeOf<Swiper>().not.toBeAny();
  expectTypeOf<Swiper>().toEqualTypeOf<UniHelper.Swiper>();

  expectTypeOf<SwiperInstance>().not.toBeAny();
  expectTypeOf<SwiperInstance>().toBeObject();
  expectTypeOf<SwiperInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<SwiperInstance>().toEqualTypeOf<UniHelper.SwiperInstance>();
});
