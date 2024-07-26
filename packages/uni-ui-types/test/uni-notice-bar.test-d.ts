import type {
  UniNoticeBar,
  UniNoticeBarInstance,
  UniNoticeBarOnClick,
  UniNoticeBarOnClose,
  UniNoticeBarOnGetmore,
  UniNoticeBarProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniNoticeBar", () => {
  expectTypeOf<UniNoticeBarOnClick>().toBeFunction();
  expectTypeOf<UniNoticeBarOnClick>().toEqualTypeOf<UniHelper.UniNoticeBarOnClick>();

  expectTypeOf<UniNoticeBarOnClose>().toBeFunction();
  expectTypeOf<UniNoticeBarOnClose>().toEqualTypeOf<UniHelper.UniNoticeBarOnClose>();

  expectTypeOf<UniNoticeBarOnGetmore>().toBeFunction();
  expectTypeOf<UniNoticeBarOnGetmore>().toEqualTypeOf<UniHelper.UniNoticeBarOnGetmore>();

  expectTypeOf<UniNoticeBarProps>().toBeObject();
  expectTypeOf<UniNoticeBarProps>().toEqualTypeOf<UniHelper.UniNoticeBarProps>();

  expectTypeOf<UniNoticeBar>().not.toBeAny();
  expectTypeOf<UniNoticeBar>().toEqualTypeOf<UniHelper.UniNoticeBar>();

  expectTypeOf<UniNoticeBarInstance>().not.toBeAny();
  expectTypeOf<UniNoticeBarInstance>().toEqualTypeOf<UniHelper.UniNoticeBarInstance>();
});
