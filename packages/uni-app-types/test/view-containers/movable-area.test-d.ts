import type {
  MovableArea,
  MovableAreaInstance,
  MovableAreaProps,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";

describe("MovableArea", () => {
  expectTypeOf<MovableAreaProps>().toBeObject();
  expectTypeOf<MovableAreaProps>().toEqualTypeOf<UniHelper.MovableAreaProps>();

  expectTypeOf<MovableArea>().not.toBeAny();
  expectTypeOf<MovableArea>().toEqualTypeOf<UniHelper.MovableArea>();

  expectTypeOf<MovableAreaInstance>().not.toBeAny();
  expectTypeOf<MovableAreaInstance>().toEqualTypeOf<UniHelper.MovableAreaInstance>();
});
