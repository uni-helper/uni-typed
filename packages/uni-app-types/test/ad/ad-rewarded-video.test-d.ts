import type {
  AdRewardedVideo,
  AdRewardedVideoInstance,
  AdRewardedVideoOnClose,
  AdRewardedVideoOnCloseEvent,
  AdRewardedVideoOnError,
  AdRewardedVideoOnErrorDetail,
  AdRewardedVideoOnErrorEvent,
  AdRewardedVideoOnLoad,
  AdRewardedVideoOnLoadEvent,
  AdRewardedVideoProps,
  AdRewardedVideoUrlCallback,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";

describe("AdRewardedVideo", () => {
  expectTypeOf<AdRewardedVideoUrlCallback>().toBeObject();
  expectTypeOf<AdRewardedVideoUrlCallback>().toEqualTypeOf<UniHelper.AdRewardedVideoUrlCallback>();

  expectTypeOf<AdRewardedVideoOnLoadEvent>().toBeObject();
  expectTypeOf<AdRewardedVideoOnLoadEvent>().toEqualTypeOf<UniHelper.AdRewardedVideoOnLoadEvent>();

  expectTypeOf<AdRewardedVideoOnLoad>().toBeFunction();
  expectTypeOf<AdRewardedVideoOnLoad>().toEqualTypeOf<UniHelper.AdRewardedVideoOnLoad>();

  expectTypeOf<AdRewardedVideoOnErrorDetail>().toBeObject();
  expectTypeOf<AdRewardedVideoOnErrorDetail>().toEqualTypeOf<UniHelper.AdRewardedVideoOnErrorDetail>();

  expectTypeOf<AdRewardedVideoOnErrorEvent>().toBeObject();
  expectTypeOf<AdRewardedVideoOnErrorEvent>().toEqualTypeOf<UniHelper.AdRewardedVideoOnErrorEvent>();

  expectTypeOf<AdRewardedVideoOnError>().toBeFunction();
  expectTypeOf<AdRewardedVideoOnError>().toEqualTypeOf<UniHelper.AdRewardedVideoOnError>();

  expectTypeOf<AdRewardedVideoOnCloseEvent>().toBeObject();
  expectTypeOf<AdRewardedVideoOnCloseEvent>().toEqualTypeOf<UniHelper.AdRewardedVideoOnCloseEvent>();

  expectTypeOf<AdRewardedVideoOnClose>().toBeFunction();
  expectTypeOf<AdRewardedVideoOnClose>().toEqualTypeOf<UniHelper.AdRewardedVideoOnClose>();

  expectTypeOf<AdRewardedVideoProps>().toBeObject();
  expectTypeOf<AdRewardedVideoProps>().toEqualTypeOf<UniHelper.AdRewardedVideoProps>();

  expectTypeOf<AdRewardedVideo>().not.toBeAny();
  expectTypeOf<AdRewardedVideo>().toEqualTypeOf<UniHelper.AdRewardedVideo>();

  expectTypeOf<AdRewardedVideoInstance>().not.toBeAny();
  expectTypeOf<AdRewardedVideoInstance>().toEqualTypeOf<UniHelper.AdRewardedVideoInstance>();
});
