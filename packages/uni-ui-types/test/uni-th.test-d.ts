import type {
  UniTh,
  UniThAlign,
  UniThFilterData,
  UniThFilterType,
  UniThInstance,
  UniThOnFilterChange,
  UniThOnFilterChangeEvent,
  UniThOnSortChange,
  UniThOnSortChangeEvent,
  UniThProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniTh", () => {
  expectTypeOf<UniThAlign>().toBeString();
  expectTypeOf<UniThAlign>().toEqualTypeOf<UniHelper.UniThAlign>();

  expectTypeOf<UniThFilterType>().toBeString();
  expectTypeOf<UniThFilterType>().toEqualTypeOf<UniHelper.UniThFilterType>();

  expectTypeOf<UniThFilterData>().toBeObject();
  expectTypeOf<UniThFilterData>().toEqualTypeOf<UniHelper.UniThFilterData>();

  expectTypeOf<UniThOnSortChangeEvent>().toBeObject();
  expectTypeOf<UniThOnSortChangeEvent>().toEqualTypeOf<UniHelper.UniThOnSortChangeEvent>();

  expectTypeOf<UniThOnSortChange>().toBeFunction();
  expectTypeOf<UniThOnSortChange>().toEqualTypeOf<UniHelper.UniThOnSortChange>();

  expectTypeOf<UniThOnFilterChangeEvent>().toBeObject();
  expectTypeOf<UniThOnFilterChangeEvent>().toEqualTypeOf<UniHelper.UniThOnFilterChangeEvent>();

  expectTypeOf<UniThOnFilterChange>().toBeFunction();
  expectTypeOf<UniThOnFilterChange>().toEqualTypeOf<UniHelper.UniThOnFilterChange>();

  expectTypeOf<UniThProps>().toBeObject();
  expectTypeOf<UniThProps>().toEqualTypeOf<UniHelper.UniThProps>();

  expectTypeOf<UniTh>().not.toBeAny();
  expectTypeOf<UniTh>().toEqualTypeOf<UniHelper.UniTh>();

  expectTypeOf<UniThInstance>().not.toBeAny();
  expectTypeOf<UniThInstance>().toEqualTypeOf<UniHelper.UniThInstance>();
});
