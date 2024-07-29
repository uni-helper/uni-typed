import type {
  Canvas,
  CanvasInstance,
  CanvasOnError,
  CanvasOnErrorDetail,
  CanvasOnErrorEvent,
  CanvasOnLongtap,
  CanvasOnLongtapEvent,
  CanvasOnTouchcancel,
  CanvasOnTouchcancelEvent,
  CanvasOnTouchend,
  CanvasOnTouchendEvent,
  CanvasOnTouchmove,
  CanvasOnTouchmoveEvent,
  CanvasOnTouchstart,
  CanvasOnTouchstartEvent,
  CanvasProps,
  CanvasType,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("Canvas", () => {
  expectTypeOf<CanvasType>().toBeString();
  expectTypeOf<CanvasType>().toEqualTypeOf<UniHelper.CanvasType>();

  expectTypeOf<CanvasOnTouchstartEvent>().toBeObject();
  expectTypeOf<CanvasOnTouchstartEvent>().toEqualTypeOf<UniHelper.CanvasOnTouchstartEvent>();

  expectTypeOf<CanvasOnTouchstart>().toBeFunction();
  expectTypeOf<CanvasOnTouchstart>().toEqualTypeOf<UniHelper.CanvasOnTouchstart>();

  expectTypeOf<CanvasOnTouchmoveEvent>().toBeObject();
  expectTypeOf<CanvasOnTouchmoveEvent>().toEqualTypeOf<UniHelper.CanvasOnTouchmoveEvent>();

  expectTypeOf<CanvasOnTouchmove>().toBeFunction();
  expectTypeOf<CanvasOnTouchmove>().toEqualTypeOf<UniHelper.CanvasOnTouchmove>();

  expectTypeOf<CanvasOnTouchendEvent>().toBeObject();
  expectTypeOf<CanvasOnTouchendEvent>().toEqualTypeOf<UniHelper.CanvasOnTouchendEvent>();

  expectTypeOf<CanvasOnTouchend>().toBeFunction();
  expectTypeOf<CanvasOnTouchend>().toEqualTypeOf<UniHelper.CanvasOnTouchend>();

  expectTypeOf<CanvasOnTouchcancelEvent>().toBeObject();
  expectTypeOf<CanvasOnTouchcancelEvent>().toEqualTypeOf<UniHelper.CanvasOnTouchcancelEvent>();

  expectTypeOf<CanvasOnTouchcancel>().toBeFunction();
  expectTypeOf<CanvasOnTouchcancel>().toEqualTypeOf<UniHelper.CanvasOnTouchcancel>();

  expectTypeOf<CanvasOnLongtapEvent>().toBeObject();
  expectTypeOf<CanvasOnLongtapEvent>().toEqualTypeOf<UniHelper.CanvasOnLongtapEvent>();

  expectTypeOf<CanvasOnLongtap>().toBeFunction();
  expectTypeOf<CanvasOnLongtap>().toEqualTypeOf<UniHelper.CanvasOnLongtap>();

  expectTypeOf<CanvasOnErrorDetail>().toBeObject();
  expectTypeOf<CanvasOnErrorDetail>().toEqualTypeOf<UniHelper.CanvasOnErrorDetail>();

  expectTypeOf<CanvasOnErrorEvent>().toBeObject();
  expectTypeOf<CanvasOnErrorEvent>().toEqualTypeOf<UniHelper.CanvasOnErrorEvent>();

  expectTypeOf<CanvasOnError>().toBeFunction();
  expectTypeOf<CanvasOnError>().toEqualTypeOf<UniHelper.CanvasOnError>();

  expectTypeOf<CanvasProps>().toBeObject();
  expectTypeOf<CanvasProps>().toEqualTypeOf<UniHelper.CanvasProps>();

  expectTypeOf<Canvas>().not.toBeAny();
  expectTypeOf<Canvas>().toEqualTypeOf<UniHelper.Canvas>();

  expectTypeOf<CanvasInstance>().not.toBeAny();
  expectTypeOf<CanvasInstance>().toBeObject();
  expectTypeOf<CanvasInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<CanvasInstance>().toEqualTypeOf<UniHelper.CanvasInstance>();
});
