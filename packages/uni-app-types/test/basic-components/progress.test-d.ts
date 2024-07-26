import type {
  Progress,
  ProgressActiveMode,
  ProgressInstance,
  ProgressOnActiveend,
  ProgressOnActiveendEvent,
  ProgressProps,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";

describe("Progress", () => {
  expectTypeOf<ProgressActiveMode>().toBeString();
  expectTypeOf<ProgressActiveMode>().toEqualTypeOf<UniHelper.ProgressActiveMode>();

  expectTypeOf<ProgressOnActiveendEvent>().toBeObject();
  expectTypeOf<ProgressOnActiveendEvent>().toEqualTypeOf<UniHelper.ProgressOnActiveendEvent>();

  expectTypeOf<ProgressOnActiveend>().toBeFunction();
  expectTypeOf<ProgressOnActiveend>().toEqualTypeOf<UniHelper.ProgressOnActiveend>();

  expectTypeOf<ProgressProps>().toBeObject();
  expectTypeOf<ProgressProps>().toEqualTypeOf<UniHelper.ProgressProps>();

  expectTypeOf<Progress>().not.toBeAny();
  expectTypeOf<Progress>().toEqualTypeOf<UniHelper.Progress>();

  expectTypeOf<ProgressInstance>().not.toBeAny();
  expectTypeOf<ProgressInstance>().toEqualTypeOf<UniHelper.ProgressInstance>();
});
