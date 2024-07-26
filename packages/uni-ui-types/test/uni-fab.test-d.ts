import type {
  UniFab,
  UniFabContent,
  UniFabContentItem,
  UniFabDirection,
  UniFabHorizontal,
  UniFabInstance,
  UniFabOnFabClick,
  UniFabOnTrigger,
  UniFabOnTriggerEvent,
  UniFabPattern,
  UniFabProps,
  UniFabVertical,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniFab", () => {
  expectTypeOf<UniFabPattern>().toBeObject();
  expectTypeOf<UniFabPattern>().toEqualTypeOf<UniHelper.UniFabPattern>();

  expectTypeOf<UniFabHorizontal>().toBeString();
  expectTypeOf<UniFabHorizontal>().toEqualTypeOf<UniHelper.UniFabHorizontal>();

  expectTypeOf<UniFabVertical>().toBeString();
  expectTypeOf<UniFabVertical>().toEqualTypeOf<UniHelper.UniFabVertical>();

  expectTypeOf<UniFabDirection>().toBeString();
  expectTypeOf<UniFabDirection>().toEqualTypeOf<UniHelper.UniFabDirection>();

  expectTypeOf<UniFabContentItem>().toBeObject();
  expectTypeOf<UniFabContentItem>().toEqualTypeOf<UniHelper.UniFabContentItem>();

  expectTypeOf<UniFabContent>().toBeArray();
  expectTypeOf<UniFabContent>().toEqualTypeOf<UniHelper.UniFabContent>();

  expectTypeOf<UniFabOnTriggerEvent>().toBeObject();
  expectTypeOf<UniFabOnTriggerEvent>().toEqualTypeOf<UniHelper.UniFabOnTriggerEvent>();

  expectTypeOf<UniFabOnTrigger>().toBeFunction();
  expectTypeOf<UniFabOnTrigger>().toEqualTypeOf<UniHelper.UniFabOnTrigger>();

  expectTypeOf<UniFabOnFabClick>().toBeFunction();
  expectTypeOf<UniFabOnFabClick>().toEqualTypeOf<UniHelper.UniFabOnFabClick>();

  expectTypeOf<UniFabProps>().toBeObject();
  expectTypeOf<UniFabProps>().toEqualTypeOf<UniHelper.UniFabProps>();

  expectTypeOf<UniFab>().not.toBeAny();
  expectTypeOf<UniFab>().toEqualTypeOf<UniHelper.UniFab>();

  expectTypeOf<UniFabInstance>().not.toBeAny();
  expectTypeOf<UniFabInstance>().toEqualTypeOf<UniHelper.UniFabInstance>();
});
