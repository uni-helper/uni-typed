import type {
  CoverImage,
  CoverImageInstance,
  CoverImageOnError,
  CoverImageOnErrorEvent,
  CoverImageOnLoad,
  CoverImageOnLoadEvent,
  CoverImageProps,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";

describe("CoverImage", () => {
  expectTypeOf<CoverImageOnLoadEvent>().toBeObject();
  expectTypeOf<CoverImageOnLoadEvent>().toEqualTypeOf<UniHelper.CoverImageOnLoadEvent>();

  expectTypeOf<CoverImageOnLoad>().toBeFunction();
  expectTypeOf<CoverImageOnLoad>().toEqualTypeOf<UniHelper.CoverImageOnLoad>();

  expectTypeOf<CoverImageOnErrorEvent>().toBeObject();
  expectTypeOf<CoverImageOnErrorEvent>().toEqualTypeOf<UniHelper.CoverImageOnErrorEvent>();

  expectTypeOf<CoverImageOnError>().toBeFunction();
  expectTypeOf<CoverImageOnError>().toEqualTypeOf<UniHelper.CoverImageOnError>();

  expectTypeOf<CoverImageProps>().toBeObject();
  expectTypeOf<CoverImageProps>().toEqualTypeOf<UniHelper.CoverImageProps>();

  expectTypeOf<CoverImage>().not.toBeAny();
  expectTypeOf<CoverImage>().toEqualTypeOf<UniHelper.CoverImage>();

  expectTypeOf<CoverImageInstance>().not.toBeAny();
  expectTypeOf<CoverImageInstance>().toEqualTypeOf<UniHelper.CoverImageInstance>();
});
