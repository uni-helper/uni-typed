import type {
  AdFullscreenVideo,
  AdFullscreenVideoInstance,
  AdFullscreenVideoOnClose,
  AdFullscreenVideoOnCloseEvent,
  AdFullscreenVideoOnError,
  AdFullscreenVideoOnErrorDetail,
  AdFullscreenVideoOnErrorEvent,
  AdFullscreenVideoOnLoad,
  AdFullscreenVideoOnLoadEvent,
  AdFullscreenVideoProps,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("AdFullscreenVideo", () => {
  expectTypeOf<AdFullscreenVideoOnLoadEvent>().toBeObject();
  expectTypeOf<AdFullscreenVideoOnLoadEvent>().toEqualTypeOf<UniHelper.AdFullscreenVideoOnLoadEvent>();

  expectTypeOf<AdFullscreenVideoOnLoad>().toBeFunction();
  expectTypeOf<AdFullscreenVideoOnLoad>().toEqualTypeOf<UniHelper.AdFullscreenVideoOnLoad>();

  expectTypeOf<AdFullscreenVideoOnErrorDetail>().toBeObject();
  expectTypeOf<AdFullscreenVideoOnErrorDetail>().toEqualTypeOf<UniHelper.AdFullscreenVideoOnErrorDetail>();

  expectTypeOf<AdFullscreenVideoOnErrorEvent>().toBeObject();
  expectTypeOf<AdFullscreenVideoOnErrorEvent>().toEqualTypeOf<UniHelper.AdFullscreenVideoOnErrorEvent>();

  expectTypeOf<AdFullscreenVideoOnError>().toBeFunction();
  expectTypeOf<AdFullscreenVideoOnError>().toEqualTypeOf<UniHelper.AdFullscreenVideoOnError>();

  expectTypeOf<AdFullscreenVideoOnCloseEvent>().toBeObject();
  expectTypeOf<AdFullscreenVideoOnCloseEvent>().toEqualTypeOf<UniHelper.AdFullscreenVideoOnCloseEvent>();

  expectTypeOf<AdFullscreenVideoOnClose>().toBeFunction();
  expectTypeOf<AdFullscreenVideoOnClose>().toEqualTypeOf<UniHelper.AdFullscreenVideoOnClose>();

  expectTypeOf<AdFullscreenVideoProps>().toBeObject();
  expectTypeOf<AdFullscreenVideoProps>().toEqualTypeOf<UniHelper.AdFullscreenVideoProps>();

  expectTypeOf<AdFullscreenVideo>().not.toBeAny();
  expectTypeOf<AdFullscreenVideo>().toEqualTypeOf<UniHelper.AdFullscreenVideo>();

  expectTypeOf<AdFullscreenVideoInstance>().not.toBeAny();
  expectTypeOf<AdFullscreenVideoInstance>().toBeObject();
  expectTypeOf<AdFullscreenVideoInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<AdFullscreenVideoInstance>().toEqualTypeOf<UniHelper.AdFullscreenVideoInstance>();
});
