import type {
  UniFormsItem,
  UniFormsItemInstance,
  UniFormsItemLabelAlign,
  UniFormsItemOnFieldChange,
  UniFormsItemProps,
  UniFormsItemRules,
  UniFormsItemRulesRule,
  UniFormsItemSetRules,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniFormsItem", () => {
  expectTypeOf<UniFormsItemRulesRule>().toBeObject();
  expectTypeOf<UniFormsItemRulesRule>().toEqualTypeOf<UniHelper.UniFormsItemRulesRule>();

  expectTypeOf<UniFormsItemRules>().toBeArray();
  expectTypeOf<UniFormsItemRules>().toEqualTypeOf<UniHelper.UniFormsItemRules>();

  expectTypeOf<UniFormsItemLabelAlign>().toBeString();
  expectTypeOf<UniFormsItemLabelAlign>().toEqualTypeOf<UniHelper.UniFormsItemLabelAlign>();

  expectTypeOf<UniFormsItemSetRules>().toBeFunction();
  expectTypeOf<UniFormsItemSetRules>().toEqualTypeOf<UniHelper.UniFormsItemSetRules>();

  expectTypeOf<UniFormsItemOnFieldChange>().toBeFunction();
  expectTypeOf<UniFormsItemOnFieldChange>().toEqualTypeOf<UniHelper.UniFormsItemOnFieldChange>();

  expectTypeOf<UniFormsItemProps>().toBeObject();
  expectTypeOf<UniFormsItemProps>().toEqualTypeOf<UniHelper.UniFormsItemProps>();

  expectTypeOf<UniFormsItem>().not.toBeAny();
  expectTypeOf<UniFormsItem>().toEqualTypeOf<UniHelper.UniFormsItem>();

  expectTypeOf<UniFormsItemInstance>().not.toBeAny();
  expectTypeOf<UniFormsItemInstance>().toEqualTypeOf<UniHelper.UniFormsItemInstance>();
});
