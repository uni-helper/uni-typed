import type {
  AdDraw,
  AdDrawInstance,
  AdDrawOnError,
  AdDrawOnErrorDetail,
  AdDrawOnErrorEvent,
  AdDrawOnLoad,
  AdDrawOnLoadEvent,
  AdDrawProps,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("AdDraw", () => {
  expectTypeOf<AdDrawOnLoadEvent>().toBeObject();
  expectTypeOf<AdDrawOnLoadEvent>().toEqualTypeOf<UniHelper.AdDrawOnLoadEvent>();

  expectTypeOf<AdDrawOnLoad>().toBeFunction();
  expectTypeOf<AdDrawOnLoad>().toEqualTypeOf<UniHelper.AdDrawOnLoad>();

  expectTypeOf<AdDrawOnErrorDetail>().toBeObject();
  expectTypeOf<AdDrawOnErrorDetail>().toEqualTypeOf<UniHelper.AdDrawOnErrorDetail>();

  expectTypeOf<AdDrawOnErrorEvent>().toBeObject();
  expectTypeOf<AdDrawOnErrorEvent>().toEqualTypeOf<UniHelper.AdDrawOnErrorEvent>();

  expectTypeOf<AdDrawOnError>().toBeFunction();
  expectTypeOf<AdDrawOnError>().toEqualTypeOf<UniHelper.AdDrawOnError>();

  expectTypeOf<AdDrawProps>().toBeObject();
  expectTypeOf<AdDrawProps>().toEqualTypeOf<UniHelper.AdDrawProps>();

  expectTypeOf<AdDraw>().not.toBeAny();
  expectTypeOf<AdDraw>().toEqualTypeOf<UniHelper.AdDraw>();

  expectTypeOf<AdDrawInstance>().not.toBeAny();
  expectTypeOf<AdDrawInstance>().toBeObject();
  expectTypeOf<AdDrawInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<AdDrawInstance>().toEqualTypeOf<UniHelper.AdDrawInstance>();
});
