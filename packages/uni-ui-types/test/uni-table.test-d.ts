import type {
  UniTable,
  UniTableClearSelection,
  UniTableInstance,
  UniTableOnSelectionChange,
  UniTableOnSelectionChangeDetail,
  UniTableOnSelectionChangeEvent,
  UniTableProps,
  UniTableSelectionAll,
  UniTableToggleAllSelection,
  UniTableToggleRowSelection,
  UniTableType,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniTable", () => {
  expectTypeOf<UniTableType>().toBeString();
  expectTypeOf<UniTableType>().toEqualTypeOf<UniHelper.UniTableType>();

  expectTypeOf<UniTableSelectionAll>().toBeFunction();
  expectTypeOf<UniTableSelectionAll>().toEqualTypeOf<UniHelper.UniTableSelectionAll>();

  expectTypeOf<UniTableToggleRowSelection>().toBeFunction();
  expectTypeOf<UniTableToggleRowSelection>().toEqualTypeOf<UniHelper.UniTableToggleRowSelection>();

  expectTypeOf<UniTableClearSelection>().toBeFunction();
  expectTypeOf<UniTableClearSelection>().toEqualTypeOf<UniHelper.UniTableClearSelection>();

  expectTypeOf<UniTableToggleAllSelection>().toBeFunction();
  expectTypeOf<UniTableToggleAllSelection>().toEqualTypeOf<UniHelper.UniTableToggleAllSelection>();

  expectTypeOf<UniTableOnSelectionChangeDetail>().toBeObject();
  expectTypeOf<UniTableOnSelectionChangeDetail>().toEqualTypeOf<UniHelper.UniTableOnSelectionChangeDetail>();

  expectTypeOf<UniTableOnSelectionChangeEvent>().toBeObject();
  expectTypeOf<UniTableOnSelectionChangeEvent>().toEqualTypeOf<UniHelper.UniTableOnSelectionChangeEvent>();

  expectTypeOf<UniTableOnSelectionChange>().toBeFunction();
  expectTypeOf<UniTableOnSelectionChange>().toEqualTypeOf<UniHelper.UniTableOnSelectionChange>();

  expectTypeOf<UniTableProps>().toBeObject();
  expectTypeOf<UniTableProps>().toEqualTypeOf<UniHelper.UniTableProps>();

  expectTypeOf<UniTable>().not.toBeAny();
  expectTypeOf<UniTable>().toEqualTypeOf<UniHelper.UniTable>();

  expectTypeOf<UniTableInstance>().not.toBeAny();
  expectTypeOf<UniTableInstance>().toBeObject();
  expectTypeOf<UniTableInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniTableInstance>().toEqualTypeOf<UniHelper.UniTableInstance>();
});
