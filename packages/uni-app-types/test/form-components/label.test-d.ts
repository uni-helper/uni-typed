import type {
  Label,
  LabelInstance,
  LabelProps,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";

describe("Label", () => {
  expectTypeOf<LabelProps>().toBeObject();
  expectTypeOf<LabelProps>().toEqualTypeOf<UniHelper.LabelProps>();

  expectTypeOf<Label>().not.toBeAny();
  expectTypeOf<Label>().toEqualTypeOf<UniHelper.Label>();

  expectTypeOf<LabelInstance>().not.toBeAny();
  expectTypeOf<LabelInstance>().toEqualTypeOf<UniHelper.LabelInstance>();
});
