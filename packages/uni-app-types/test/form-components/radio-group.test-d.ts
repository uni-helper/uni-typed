import type {
  RadioGroup,
  RadioGroupInstance,
  RadioGroupOnChange,
  RadioGroupOnChangeDetail,
  RadioGroupOnChangeEvent,
  RadioGroupProps,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";

describe("RadioGroup", () => {
  expectTypeOf<RadioGroupOnChangeDetail>().toBeObject();
  expectTypeOf<RadioGroupOnChangeDetail>().toEqualTypeOf<UniHelper.RadioGroupOnChangeDetail>();

  expectTypeOf<RadioGroupOnChangeEvent>().toBeObject();
  expectTypeOf<RadioGroupOnChangeEvent>().toEqualTypeOf<UniHelper.RadioGroupOnChangeEvent>();

  expectTypeOf<RadioGroupOnChange>().toBeFunction();
  expectTypeOf<RadioGroupOnChange>().toEqualTypeOf<UniHelper.RadioGroupOnChange>();

  expectTypeOf<RadioGroupProps>().toBeObject();
  expectTypeOf<RadioGroupProps>().toEqualTypeOf<UniHelper.RadioGroupProps>();

  expectTypeOf<RadioGroup>().not.toBeAny();
  expectTypeOf<RadioGroup>().toEqualTypeOf<UniHelper.RadioGroup>();

  expectTypeOf<RadioGroupInstance>().not.toBeAny();
  expectTypeOf<RadioGroupInstance>().toEqualTypeOf<UniHelper.RadioGroupInstance>();
});
