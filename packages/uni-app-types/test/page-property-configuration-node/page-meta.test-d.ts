import type {
  PageMeta,
  PageMetaBackgroundTextStyle,
  PageMetaInstance,
  PageMetaOnResize,
  PageMetaOnResizeDetail,
  PageMetaOnResizeEvent,
  PageMetaOnScroll,
  PageMetaOnScrollDetail,
  PageMetaOnScrolldone,
  PageMetaOnScrolldoneEvent,
  PageMetaOnScrollEvent,
  PageMetaProps,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("PageMeta", () => {
  expectTypeOf<PageMetaBackgroundTextStyle>().toBeString();
  expectTypeOf<PageMetaBackgroundTextStyle>().toEqualTypeOf<UniHelper.PageMetaBackgroundTextStyle>();

  expectTypeOf<PageMetaOnResizeDetail>().toBeObject();
  expectTypeOf<PageMetaOnResizeDetail>().toEqualTypeOf<UniHelper.PageMetaOnResizeDetail>();

  expectTypeOf<PageMetaOnResizeEvent>().toBeObject();
  expectTypeOf<PageMetaOnResizeEvent>().toEqualTypeOf<UniHelper.PageMetaOnResizeEvent>();

  expectTypeOf<PageMetaOnResize>().toBeFunction();
  expectTypeOf<PageMetaOnResize>().toEqualTypeOf<UniHelper.PageMetaOnResize>();

  expectTypeOf<PageMetaOnScrollDetail>().toBeObject();
  expectTypeOf<PageMetaOnScrollDetail>().toEqualTypeOf<UniHelper.PageMetaOnScrollDetail>();

  expectTypeOf<PageMetaOnScrollEvent>().toBeObject();
  expectTypeOf<PageMetaOnScrollEvent>().toEqualTypeOf<UniHelper.PageMetaOnScrollEvent>();

  expectTypeOf<PageMetaOnScroll>().toBeFunction();
  expectTypeOf<PageMetaOnScroll>().toEqualTypeOf<UniHelper.PageMetaOnScroll>();

  expectTypeOf<PageMetaOnScrolldoneEvent>().toBeObject();
  expectTypeOf<PageMetaOnScrolldoneEvent>().toEqualTypeOf<UniHelper.PageMetaOnScrolldoneEvent>();

  expectTypeOf<PageMetaOnScrolldone>().toBeFunction();
  expectTypeOf<PageMetaOnScrolldone>().toEqualTypeOf<UniHelper.PageMetaOnScrolldone>();

  expectTypeOf<PageMetaProps>().toBeObject();
  expectTypeOf<PageMetaProps>().toEqualTypeOf<UniHelper.PageMetaProps>();

  expectTypeOf<PageMeta>().not.toBeAny();
  expectTypeOf<PageMeta>().toEqualTypeOf<UniHelper.PageMeta>();

  expectTypeOf<PageMetaInstance>().not.toBeAny();
  expectTypeOf<PageMetaInstance>().toBeObject();
  expectTypeOf<PageMetaInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<PageMetaInstance>().toEqualTypeOf<UniHelper.PageMetaInstance>();
});
