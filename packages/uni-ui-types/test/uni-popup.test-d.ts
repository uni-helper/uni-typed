import type {
  UniPopup,
  UniPopupInstance,
  UniPopupOnChange,
  UniPopupOnChangeEvent,
  UniPopupOnMaskClick,
  UniPopupProps,
  UniPopupType,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniPopup", () => {
  expectTypeOf<UniPopupType>().toBeString();
  expectTypeOf<UniPopupType>().toEqualTypeOf<UniHelper.UniPopupType>();

  expectTypeOf<UniPopupOnChangeEvent>().toBeObject();
  expectTypeOf<UniPopupOnChangeEvent>().toEqualTypeOf<UniHelper.UniPopupOnChangeEvent>();

  expectTypeOf<UniPopupOnChange>().toBeFunction();
  expectTypeOf<UniPopupOnChange>().toEqualTypeOf<UniHelper.UniPopupOnChange>();

  expectTypeOf<UniPopupOnMaskClick>().toBeFunction();
  expectTypeOf<UniPopupOnMaskClick>().toEqualTypeOf<UniHelper.UniPopupOnMaskClick>();

  expectTypeOf<UniPopupProps>().toBeObject();
  expectTypeOf<UniPopupProps>().toEqualTypeOf<UniHelper.UniPopupProps>();

  expectTypeOf<UniPopup>().not.toBeAny();
  expectTypeOf<UniPopup>().toEqualTypeOf<UniHelper.UniPopup>();

  expectTypeOf<UniPopupInstance>().not.toBeAny();
  expectTypeOf<UniPopupInstance>().toEqualTypeOf<UniHelper.UniPopupInstance>();
});
