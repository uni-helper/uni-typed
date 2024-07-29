import type {
  UniGrid,
  UniGridInstance,
  UniGridOnChange,
  UniGridOnChangeDetail,
  UniGridOnChangeEvent,
  UniGridProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniGrid", () => {
  expectTypeOf<UniGridOnChangeDetail>().toBeObject();
  expectTypeOf<UniGridOnChangeDetail>().toEqualTypeOf<UniHelper.UniGridOnChangeDetail>();

  expectTypeOf<UniGridOnChangeEvent>().toBeObject();
  expectTypeOf<UniGridOnChangeEvent>().toEqualTypeOf<UniHelper.UniGridOnChangeEvent>();

  expectTypeOf<UniGridOnChange>().toBeFunction();
  expectTypeOf<UniGridOnChange>().toEqualTypeOf<UniHelper.UniGridOnChange>();

  expectTypeOf<UniGridProps>().toBeObject();
  expectTypeOf<UniGridProps>().toEqualTypeOf<UniHelper.UniGridProps>();

  expectTypeOf<UniGrid>().not.toBeAny();
  expectTypeOf<UniGrid>().toEqualTypeOf<UniHelper.UniGrid>();

  expectTypeOf<UniGridInstance>().not.toBeAny();
  expectTypeOf<UniGridInstance>().toBeObject();
  expectTypeOf<UniGridInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniGridInstance>().toEqualTypeOf<UniHelper.UniGridInstance>();
});
