import type {
  UniSearchBar,
  UniSearchBarBaseEvent,
  UniSearchBarCancelButton,
  UniSearchBarClearButton,
  UniSearchBarInstance,
  UniSearchBarOnBlur,
  UniSearchBarOnBlurEvent,
  UniSearchBarOnCancel,
  UniSearchBarOnCancelEvent,
  UniSearchBarOnClear,
  UniSearchBarOnClearEvent,
  UniSearchBarOnConfirm,
  UniSearchBarOnConfirmEvent,
  UniSearchBarOnFocus,
  UniSearchBarOnFocusEvent,
  UniSearchBarOnInput,
  UniSearchBarOnInputEvent,
  UniSearchBarProps,
  UniSearchBarValue,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniSearchBar", () => {
  expectTypeOf<UniSearchBarValue>().toMatchTypeOf<string | number>();
  expectTypeOf<UniSearchBarValue>().toEqualTypeOf<UniHelper.UniSearchBarValue>();

  expectTypeOf<UniSearchBarClearButton>().toBeString();
  expectTypeOf<UniSearchBarClearButton>().toEqualTypeOf<UniHelper.UniSearchBarClearButton>();

  expectTypeOf<UniSearchBarCancelButton>().toBeString();
  expectTypeOf<UniSearchBarCancelButton>().toEqualTypeOf<UniHelper.UniSearchBarCancelButton>();

  expectTypeOf<UniSearchBarBaseEvent>().toBeObject();
  expectTypeOf<UniSearchBarBaseEvent>().toEqualTypeOf<UniHelper.UniSearchBarBaseEvent>();

  expectTypeOf<UniSearchBarOnConfirmEvent>().toBeObject();
  expectTypeOf<UniSearchBarOnConfirmEvent>().toEqualTypeOf<UniHelper.UniSearchBarOnConfirmEvent>();

  expectTypeOf<UniSearchBarOnConfirm>().toBeObject();
  expectTypeOf<UniSearchBarOnConfirm>().toEqualTypeOf<UniHelper.UniSearchBarOnConfirm>();

  expectTypeOf<UniSearchBarOnInputEvent>().toBeObject();
  expectTypeOf<UniSearchBarOnInputEvent>().toEqualTypeOf<UniHelper.UniSearchBarOnInputEvent>();

  expectTypeOf<UniSearchBarOnInput>().toBeObject();
  expectTypeOf<UniSearchBarOnInput>().toEqualTypeOf<UniHelper.UniSearchBarOnInput>();

  expectTypeOf<UniSearchBarOnCancelEvent>().toBeObject();
  expectTypeOf<UniSearchBarOnCancelEvent>().toEqualTypeOf<UniHelper.UniSearchBarOnCancelEvent>();

  expectTypeOf<UniSearchBarOnCancel>().toBeObject();
  expectTypeOf<UniSearchBarOnCancel>().toEqualTypeOf<UniHelper.UniSearchBarOnCancel>();

  expectTypeOf<UniSearchBarOnClearEvent>().toBeObject();
  expectTypeOf<UniSearchBarOnClearEvent>().toEqualTypeOf<UniHelper.UniSearchBarOnClearEvent>();

  expectTypeOf<UniSearchBarOnClear>().toBeObject();
  expectTypeOf<UniSearchBarOnClear>().toEqualTypeOf<UniHelper.UniSearchBarOnClear>();

  expectTypeOf<UniSearchBarOnFocusEvent>().toBeObject();
  expectTypeOf<UniSearchBarOnFocusEvent>().toEqualTypeOf<UniHelper.UniSearchBarOnFocusEvent>();

  expectTypeOf<UniSearchBarOnFocus>().toBeObject();
  expectTypeOf<UniSearchBarOnFocus>().toEqualTypeOf<UniHelper.UniSearchBarOnFocus>();

  expectTypeOf<UniSearchBarOnBlurEvent>().toBeObject();
  expectTypeOf<UniSearchBarOnBlurEvent>().toEqualTypeOf<UniHelper.UniSearchBarOnBlurEvent>();

  expectTypeOf<UniSearchBarOnBlur>().toBeObject();
  expectTypeOf<UniSearchBarOnBlur>().toEqualTypeOf<UniHelper.UniSearchBarOnBlur>();

  expectTypeOf<UniSearchBarProps>().toBeObject();
  expectTypeOf<UniSearchBarProps>().toEqualTypeOf<UniHelper.UniSearchBarProps>();

  expectTypeOf<UniSearchBar>().not.toBeAny();
  expectTypeOf<UniSearchBar>().toEqualTypeOf<UniHelper.UniSearchBar>();

  expectTypeOf<UniSearchBarInstance>().not.toBeAny();
  expectTypeOf<UniSearchBarInstance>().toEqualTypeOf<UniHelper.UniSearchBarInstance>();
});
