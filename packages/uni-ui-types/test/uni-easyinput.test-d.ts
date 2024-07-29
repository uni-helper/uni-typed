import type {
  UniEasyinput,
  UniEasyinputIconPosition,
  UniEasyinputInstance,
  UniEasyinputOnBlur,
  UniEasyinputOnBlurDetail,
  UniEasyinputOnBlurEvent,
  UniEasyinputOnChange,
  UniEasyinputOnClear,
  UniEasyinputOnConfirm,
  UniEasyinputOnConfirmType,
  UniEasyinputOnFocus,
  UniEasyinputOnFocusDetail,
  UniEasyinputOnFocusEvent,
  UniEasyinputOnIconClick,
  UniEasyinputOnInput,
  UniEasyinputProps,
  UniEasyinputStyles,
  UniEasyinputTrim,
  UniEasyinputType,
  UniEasyinputValue,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniEasyinput", () => {
  expectTypeOf<UniEasyinputValue>().toMatchTypeOf<string | number>();
  expectTypeOf<UniEasyinputValue>().toEqualTypeOf<UniHelper.UniEasyinputValue>();

  expectTypeOf<UniEasyinputType>().toBeString();
  expectTypeOf<UniEasyinputType>().toEqualTypeOf<UniHelper.UniEasyinputType>();

  expectTypeOf<UniEasyinputOnConfirmType>().toBeString();
  expectTypeOf<UniEasyinputOnConfirmType>().toEqualTypeOf<UniHelper.UniEasyinputOnConfirmType>();

  expectTypeOf<UniEasyinputTrim>().toMatchTypeOf<string | boolean>();
  expectTypeOf<UniEasyinputTrim>().toEqualTypeOf<UniHelper.UniEasyinputTrim>();

  expectTypeOf<UniEasyinputStyles>().toBeObject();
  expectTypeOf<UniEasyinputStyles>().toEqualTypeOf<UniHelper.UniEasyinputStyles>();

  expectTypeOf<UniEasyinputIconPosition>().toBeString();
  expectTypeOf<UniEasyinputIconPosition>().toEqualTypeOf<UniHelper.UniEasyinputIconPosition>();

  expectTypeOf<UniEasyinputOnInput>().toBeFunction();
  expectTypeOf<UniEasyinputOnInput>().toEqualTypeOf<UniHelper.UniEasyinputOnInput>();

  expectTypeOf<UniEasyinputOnClear>().toBeFunction();
  expectTypeOf<UniEasyinputOnClear>().toEqualTypeOf<UniHelper.UniEasyinputOnClear>();

  expectTypeOf<UniEasyinputOnFocusDetail>().toBeObject();
  expectTypeOf<UniEasyinputOnFocusDetail>().toEqualTypeOf<UniHelper.UniEasyinputOnFocusDetail>();

  expectTypeOf<UniEasyinputOnFocusEvent>().toBeObject();
  expectTypeOf<UniEasyinputOnFocusEvent>().toEqualTypeOf<UniHelper.UniEasyinputOnFocusEvent>();

  expectTypeOf<UniEasyinputOnFocus>().toBeFunction();
  expectTypeOf<UniEasyinputOnFocus>().toEqualTypeOf<UniHelper.UniEasyinputOnFocus>();

  expectTypeOf<UniEasyinputOnBlurDetail>().toBeObject();
  expectTypeOf<UniEasyinputOnBlurDetail>().toEqualTypeOf<UniHelper.UniEasyinputOnBlurDetail>();

  expectTypeOf<UniEasyinputOnBlurEvent>().toBeObject();
  expectTypeOf<UniEasyinputOnBlurEvent>().toEqualTypeOf<UniHelper.UniEasyinputOnBlurEvent>();

  expectTypeOf<UniEasyinputOnBlur>().toBeFunction();
  expectTypeOf<UniEasyinputOnBlur>().toEqualTypeOf<UniHelper.UniEasyinputOnBlur>();

  expectTypeOf<UniEasyinputOnConfirm>().toBeFunction();
  expectTypeOf<UniEasyinputOnConfirm>().toEqualTypeOf<UniHelper.UniEasyinputOnConfirm>();

  expectTypeOf<UniEasyinputOnIconClick>().toBeFunction();
  expectTypeOf<UniEasyinputOnIconClick>().toEqualTypeOf<UniHelper.UniEasyinputOnIconClick>();

  expectTypeOf<UniEasyinputOnChange>().toBeFunction();
  expectTypeOf<UniEasyinputOnChange>().toEqualTypeOf<UniHelper.UniEasyinputOnChange>();

  expectTypeOf<UniEasyinputProps>().toBeObject();
  expectTypeOf<UniEasyinputProps>().toEqualTypeOf<UniHelper.UniEasyinputProps>();

  expectTypeOf<UniEasyinput>().not.toBeAny();
  expectTypeOf<UniEasyinput>().toEqualTypeOf<UniHelper.UniEasyinput>();

  expectTypeOf<UniEasyinputInstance>().not.toBeAny();
  expectTypeOf<UniEasyinputInstance>().toBeObject();
  expectTypeOf<UniEasyinputInstance>().toEqualTypeOf<UniHelper.UniEasyinputInstance>();
});
