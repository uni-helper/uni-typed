import type {
  MovableView,
  MovableViewDirection,
  MovableViewInstance,
  MovableViewOnChange,
  MovableViewOnChangeDetail,
  MovableViewOnChangeEvent,
  MovableViewOnHtouchmove,
  MovableViewOnHtouchmoveEvent,
  MovableViewOnScale,
  MovableViewOnScaleDetail,
  MovableViewOnScaleEvent,
  MovableViewOnVtouchmove,
  MovableViewOnVtouchmoveEvent,
  MovableViewProps,
  MovableViewSource,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("MovableView", () => {
  expectTypeOf<MovableViewDirection>().toBeString();
  expectTypeOf<MovableViewDirection>().toEqualTypeOf<UniHelper.MovableViewDirection>();

  expectTypeOf<MovableViewSource>().toBeString();
  expectTypeOf<MovableViewSource>().toEqualTypeOf<UniHelper.MovableViewSource>();

  expectTypeOf<MovableViewOnChangeDetail>().toBeObject();
  expectTypeOf<MovableViewOnChangeDetail>().toEqualTypeOf<UniHelper.MovableViewOnChangeDetail>();

  expectTypeOf<MovableViewOnChangeEvent>().toBeObject();
  expectTypeOf<MovableViewOnChangeEvent>().toEqualTypeOf<UniHelper.MovableViewOnChangeEvent>();

  expectTypeOf<MovableViewOnChange>().toBeFunction();
  expectTypeOf<MovableViewOnChange>().toEqualTypeOf<UniHelper.MovableViewOnChange>();

  expectTypeOf<MovableViewOnHtouchmoveEvent>().toBeObject();
  expectTypeOf<MovableViewOnHtouchmoveEvent>().toEqualTypeOf<UniHelper.MovableViewOnHtouchmoveEvent>();

  expectTypeOf<MovableViewOnHtouchmove>().toBeFunction();
  expectTypeOf<MovableViewOnHtouchmove>().toEqualTypeOf<UniHelper.MovableViewOnHtouchmove>();

  expectTypeOf<MovableViewOnScaleDetail>().toBeObject();
  expectTypeOf<MovableViewOnScaleDetail>().toEqualTypeOf<UniHelper.MovableViewOnScaleDetail>();

  expectTypeOf<MovableViewOnScaleEvent>().toBeObject();
  expectTypeOf<MovableViewOnScaleEvent>().toEqualTypeOf<UniHelper.MovableViewOnScaleEvent>();

  expectTypeOf<MovableViewOnScale>().toBeFunction();
  expectTypeOf<MovableViewOnScale>().toEqualTypeOf<UniHelper.MovableViewOnScale>();

  expectTypeOf<MovableViewOnVtouchmoveEvent>().toBeObject();
  expectTypeOf<MovableViewOnVtouchmoveEvent>().toEqualTypeOf<UniHelper.MovableViewOnVtouchmoveEvent>();

  expectTypeOf<MovableViewOnVtouchmove>().toBeFunction();
  expectTypeOf<MovableViewOnVtouchmove>().toEqualTypeOf<UniHelper.MovableViewOnVtouchmove>();

  expectTypeOf<MovableViewProps>().toBeObject();
  expectTypeOf<MovableViewProps>().toEqualTypeOf<UniHelper.MovableViewProps>();

  expectTypeOf<MovableView>().not.toBeAny();
  expectTypeOf<MovableView>().toEqualTypeOf<UniHelper.MovableView>();

  expectTypeOf<MovableViewInstance>().not.toBeAny();
  expectTypeOf<MovableViewInstance>().toBeObject();
  expectTypeOf<MovableViewInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<MovableViewInstance>().toEqualTypeOf<UniHelper.MovableViewInstance>();
});
