import type {
  UniForms,
  UniFormsCallback,
  UniFormsClearValidate,
  UniFormsErrShowType,
  UniFormsFormat,
  UniFormsInstance,
  UniFormsLabelAlign,
  UniFormsLabelPosition,
  UniFormsOnValidate,
  UniFormsProps,
  UniFormsRules,
  UniFormsRulesRule,
  UniFormsSetRules,
  UniFormsValidate,
  UniFormsValidateField,
  UniFormsValidateFunction,
  UniFormsValidateTrigger,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniForms", () => {
  expectTypeOf<UniFormsFormat>().toBeString();
  expectTypeOf<UniFormsFormat>().toEqualTypeOf<UniHelper.UniFormsFormat>();

  expectTypeOf<UniFormsCallback>().toBeFunction();
  expectTypeOf<UniFormsCallback>().toEqualTypeOf<UniHelper.UniFormsCallback>();

  expectTypeOf<UniFormsValidateFunction>().toBeFunction();
  expectTypeOf<UniFormsValidateFunction>().toEqualTypeOf<UniHelper.UniFormsValidateFunction>();

  expectTypeOf<UniFormsRulesRule>().toBeObject();
  expectTypeOf<UniFormsRulesRule>().toEqualTypeOf<UniHelper.UniFormsRulesRule>();

  expectTypeOf<UniFormsRules>().toBeObject();
  expectTypeOf<UniFormsRules>().toEqualTypeOf<UniHelper.UniFormsRules>();

  expectTypeOf<UniFormsValidateTrigger>().toBeString();
  expectTypeOf<UniFormsValidateTrigger>().toEqualTypeOf<UniHelper.UniFormsValidateTrigger>();

  expectTypeOf<UniFormsLabelPosition>().toBeString();
  expectTypeOf<UniFormsLabelPosition>().toEqualTypeOf<UniHelper.UniFormsLabelPosition>();

  expectTypeOf<UniFormsLabelAlign>().toBeString();
  expectTypeOf<UniFormsLabelAlign>().toEqualTypeOf<UniHelper.UniFormsLabelAlign>();

  expectTypeOf<UniFormsErrShowType>().toBeString();
  expectTypeOf<UniFormsErrShowType>().toEqualTypeOf<UniHelper.UniFormsErrShowType>();

  expectTypeOf<UniFormsSetRules>().toBeFunction();
  expectTypeOf<UniFormsSetRules>().toEqualTypeOf<UniHelper.UniFormsSetRules>();

  expectTypeOf<UniFormsValidate>().toBeFunction();
  expectTypeOf<UniFormsValidate>().toEqualTypeOf<UniHelper.UniFormsValidate>();

  expectTypeOf<UniFormsValidateField>().toBeFunction();
  expectTypeOf<UniFormsValidateField>().toEqualTypeOf<UniHelper.UniFormsValidateField>();

  expectTypeOf<UniFormsClearValidate>().toBeFunction();
  expectTypeOf<UniFormsClearValidate>().toEqualTypeOf<UniHelper.UniFormsClearValidate>();

  expectTypeOf<UniFormsOnValidate>().toBeFunction();
  expectTypeOf<UniFormsOnValidate>().toEqualTypeOf<UniHelper.UniFormsOnValidate>();

  expectTypeOf<UniFormsProps>().toBeObject();
  expectTypeOf<UniFormsProps>().toEqualTypeOf<UniHelper.UniFormsProps>();

  expectTypeOf<UniForms>().not.toBeAny();
  expectTypeOf<UniForms>().toEqualTypeOf<UniHelper.UniForms>();

  expectTypeOf<UniFormsInstance>().not.toBeAny();
  expectTypeOf<UniFormsInstance>().toBeObject();
  expectTypeOf<UniFormsInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniFormsInstance>().toEqualTypeOf<UniHelper.UniFormsInstance>();
});
