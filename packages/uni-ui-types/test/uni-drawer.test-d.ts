import type {
  UniDrawer,
  UniDrawerClose,
  UniDrawerInstance,
  UniDrawerMode,
  UniDrawerOnChange,
  UniDrawerOpen,
  UniDrawerProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniDrawer", () => {
  expectTypeOf<UniDrawerMode>().toBeString();
  expectTypeOf<UniDrawerMode>().toEqualTypeOf<UniHelper.UniDrawerMode>();

  expectTypeOf<UniDrawerOpen>().toBeFunction();
  expectTypeOf<UniDrawerOpen>().toEqualTypeOf<UniHelper.UniDrawerOpen>();

  expectTypeOf<UniDrawerClose>().toBeFunction();
  expectTypeOf<UniDrawerClose>().toEqualTypeOf<UniHelper.UniDrawerClose>();

  expectTypeOf<UniDrawerOnChange>().toBeFunction();
  expectTypeOf<UniDrawerOnChange>().toEqualTypeOf<UniHelper.UniDrawerOnChange>();

  expectTypeOf<UniDrawerProps>().toBeObject();
  expectTypeOf<UniDrawerProps>().toEqualTypeOf<UniHelper.UniDrawerProps>();

  expectTypeOf<UniDrawer>().not.toBeAny();
  expectTypeOf<UniDrawer>().toEqualTypeOf<UniHelper.UniDrawer>();

  expectTypeOf<UniDrawerInstance>().not.toBeAny();
  expectTypeOf<UniDrawerInstance>().toEqualTypeOf<UniHelper.UniDrawerInstance>();
});
