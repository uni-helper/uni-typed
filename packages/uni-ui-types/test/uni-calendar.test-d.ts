import type {
  UniCalendar,
  UniCalendarBaseEvent,
  UniCalendarDate,
  UniCalendarInstance,
  UniCalendarOnChange,
  UniCalendarOnChangeEvent,
  UniCalendarOnClose,
  UniCalendarOnConfirm,
  UniCalendarOnConfirmEvent,
  UniCalendarOnMonthSwitch,
  UniCalendarOnMonthSwitchEvent,
  UniCalendarOpen,
  UniCalendarProps,
  UniCalendarSelected,
  UniCalendarSelectedElement,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniCalendar", () => {
  expectTypeOf<UniCalendarDate>().toBeString();
  expectTypeOf<UniCalendarDate>().toEqualTypeOf<UniHelper.UniCalendarDate>();

  expectTypeOf<UniCalendarSelectedElement>().toBeObject();
  expectTypeOf<UniCalendarSelectedElement>().toEqualTypeOf<UniHelper.UniCalendarSelectedElement>();

  expectTypeOf<UniCalendarSelected>().toBeArray();
  expectTypeOf<UniCalendarSelected>().toEqualTypeOf<UniHelper.UniCalendarSelected>();

  expectTypeOf<UniCalendarOpen>().toBeFunction();
  expectTypeOf<UniCalendarOpen>().toEqualTypeOf<UniHelper.UniCalendarOpen>();

  expectTypeOf<UniCalendarBaseEvent>().toBeObject();
  expectTypeOf<UniCalendarBaseEvent>().toEqualTypeOf<UniHelper.UniCalendarBaseEvent>();

  expectTypeOf<UniCalendarOnChangeEvent>().toBeObject();
  expectTypeOf<UniCalendarOnChangeEvent>().toEqualTypeOf<UniHelper.UniCalendarOnChangeEvent>();

  expectTypeOf<UniCalendarOnChange>().toBeObject();
  expectTypeOf<UniCalendarOnChange>().toEqualTypeOf<UniHelper.UniCalendarOnChange>();

  expectTypeOf<UniCalendarOnConfirmEvent>().toBeObject();
  expectTypeOf<UniCalendarOnConfirmEvent>().toEqualTypeOf<UniHelper.UniCalendarOnConfirmEvent>();

  expectTypeOf<UniCalendarOnConfirm>().toBeObject();
  expectTypeOf<UniCalendarOnConfirm>().toEqualTypeOf<UniHelper.UniCalendarOnConfirm>();

  expectTypeOf<UniCalendarOnMonthSwitchEvent>().toBeObject();
  expectTypeOf<UniCalendarOnMonthSwitchEvent>().toEqualTypeOf<UniHelper.UniCalendarOnMonthSwitchEvent>();

  expectTypeOf<UniCalendarOnMonthSwitch>().toBeObject();
  expectTypeOf<UniCalendarOnMonthSwitch>().toEqualTypeOf<UniHelper.UniCalendarOnMonthSwitch>();

  expectTypeOf<UniCalendarOnClose>().toBeObject();
  expectTypeOf<UniCalendarOnClose>().toEqualTypeOf<UniHelper.UniCalendarOnClose>();

  expectTypeOf<UniCalendarProps>().toBeObject();
  expectTypeOf<UniCalendarProps>().toEqualTypeOf<UniHelper.UniCalendarProps>();

  expectTypeOf<UniCalendar>().not.toBeAny();
  expectTypeOf<UniCalendar>().toEqualTypeOf<UniHelper.UniCalendar>();

  expectTypeOf<UniCalendarInstance>().not.toBeAny();
  expectTypeOf<UniCalendarInstance>().toEqualTypeOf<UniHelper.UniCalendarInstance>();
});
