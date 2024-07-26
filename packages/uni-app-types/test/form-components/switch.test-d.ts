import type {
  Switch,
  SwitchChecked,
  SwitchInstance,
  SwitchOnChange,
  SwitchOnChangeDetail,
  SwitchOnChangeEvent,
  SwitchProps,
  SwitchType,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";

describe("Switch", () => {
  expectTypeOf<SwitchChecked>().toBeBoolean();
  expectTypeOf<SwitchChecked>().toEqualTypeOf<UniHelper.SwitchChecked>();

  expectTypeOf<SwitchType>().toBeString();
  expectTypeOf<SwitchType>().toEqualTypeOf<UniHelper.SwitchType>();

  expectTypeOf<SwitchOnChangeDetail>().toBeObject();
  expectTypeOf<SwitchOnChangeDetail>().toEqualTypeOf<UniHelper.SwitchOnChangeDetail>();

  expectTypeOf<SwitchOnChangeEvent>().toBeObject();
  expectTypeOf<SwitchOnChangeEvent>().toEqualTypeOf<UniHelper.SwitchOnChangeEvent>();

  expectTypeOf<SwitchOnChange>().toBeFunction();
  expectTypeOf<SwitchOnChange>().toEqualTypeOf<UniHelper.SwitchOnChange>();

  expectTypeOf<SwitchProps>().toBeObject();
  expectTypeOf<SwitchProps>().toEqualTypeOf<UniHelper.SwitchProps>();

  expectTypeOf<Switch>().not.toBeAny();
  expectTypeOf<Switch>().toEqualTypeOf<UniHelper.Switch>();

  expectTypeOf<SwitchInstance>().not.toBeAny();
  expectTypeOf<SwitchInstance>().toEqualTypeOf<UniHelper.SwitchInstance>();
});
