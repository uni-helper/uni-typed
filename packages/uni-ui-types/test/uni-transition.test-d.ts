import type {
  UniTransition,
  UniTransitionConfig,
  UniTransitionInit,
  UniTransitionInstance,
  UniTransitionModeClass,
  UniTransitionOnChange,
  UniTransitionOnChangeEvent,
  UniTransitionOnClick,
  UniTransitionOnClickEvent,
  UniTransitionProps,
  UniTransitionRun,
  UniTransitionStep,
  UniTransitionTimingFunction,
  UniTransitionType,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniTransition", () => {
  expectTypeOf<UniTransitionModeClass>().toBeString();
  expectTypeOf<UniTransitionModeClass>().toEqualTypeOf<UniHelper.UniTransitionModeClass>();

  expectTypeOf<UniTransitionTimingFunction>().toBeString();
  expectTypeOf<UniTransitionTimingFunction>().toEqualTypeOf<UniHelper.UniTransitionTimingFunction>();

  expectTypeOf<UniTransitionConfig>().toBeObject();
  expectTypeOf<UniTransitionConfig>().toEqualTypeOf<UniHelper.UniTransitionConfig>();

  expectTypeOf<UniTransitionType>().toBeObject();
  expectTypeOf<UniTransitionType>().toEqualTypeOf<UniHelper.UniTransitionType>();

  expectTypeOf<UniTransitionInit>().toBeFunction();
  expectTypeOf<UniTransitionInit>().toEqualTypeOf<UniHelper.UniTransitionInit>();

  expectTypeOf<UniTransitionStep>().toBeFunction();
  expectTypeOf<UniTransitionStep>().toEqualTypeOf<UniHelper.UniTransitionStep>();

  expectTypeOf<UniTransitionRun>().toBeFunction();
  expectTypeOf<UniTransitionRun>().toEqualTypeOf<UniHelper.UniTransitionRun>();

  expectTypeOf<UniTransitionOnClickEvent>().toBeObject();
  expectTypeOf<UniTransitionOnClickEvent>().toEqualTypeOf<UniHelper.UniTransitionOnClickEvent>();

  expectTypeOf<UniTransitionOnClick>().toBeFunction();
  expectTypeOf<UniTransitionOnClick>().toEqualTypeOf<UniHelper.UniTransitionOnClick>();

  expectTypeOf<UniTransitionOnChangeEvent>().toBeObject();
  expectTypeOf<UniTransitionOnChangeEvent>().toEqualTypeOf<UniHelper.UniTransitionOnChangeEvent>();

  expectTypeOf<UniTransitionOnChange>().toBeFunction();
  expectTypeOf<UniTransitionOnChange>().toEqualTypeOf<UniHelper.UniTransitionOnChange>();

  expectTypeOf<UniTransitionProps>().toBeObject();
  expectTypeOf<UniTransitionProps>().toEqualTypeOf<UniHelper.UniTransitionProps>();

  expectTypeOf<UniTransition>().not.toBeAny();
  expectTypeOf<UniTransition>().toEqualTypeOf<UniHelper.UniTransition>();

  expectTypeOf<UniTransitionInstance>().not.toBeAny();
  expectTypeOf<UniTransitionInstance>().toBeObject();
  expectTypeOf<UniTransitionInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniTransitionInstance>().toEqualTypeOf<UniHelper.UniTransitionInstance>();
});
