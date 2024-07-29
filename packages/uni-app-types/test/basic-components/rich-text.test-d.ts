import type {
  RichText,
  RichTextInstance,
  RichTextNode,
  RichTextNodeNode,
  RichTextNodes,
  RichTextOnItemclick,
  RichTextOnItemclickEvent,
  RichTextProps,
  RichTextSpace,
  RichTextTextNode,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("RichText", () => {
  expectTypeOf<RichTextSpace>().toBeString();
  expectTypeOf<RichTextSpace>().toEqualTypeOf<UniHelper.RichTextSpace>();

  expectTypeOf<RichTextTextNode>().toBeObject();
  expectTypeOf<RichTextTextNode>().toEqualTypeOf<UniHelper.RichTextTextNode>();

  expectTypeOf<RichTextNodeNode>().toBeObject();
  expectTypeOf<RichTextNodeNode>().toEqualTypeOf<UniHelper.RichTextNodeNode>();

  expectTypeOf<RichTextNode>().toBeObject();
  expectTypeOf<RichTextNode>().toEqualTypeOf<UniHelper.RichTextNode>();

  expectTypeOf<RichTextNodes>().toEqualTypeOf<UniHelper.RichTextNodes>();

  expectTypeOf<RichTextOnItemclickEvent>().toBeObject();
  expectTypeOf<RichTextOnItemclickEvent>().toEqualTypeOf<UniHelper.RichTextOnItemclickEvent>();

  expectTypeOf<RichTextOnItemclick>().toBeFunction();
  expectTypeOf<RichTextOnItemclick>().toEqualTypeOf<UniHelper.RichTextOnItemclick>();

  expectTypeOf<RichTextProps>().toBeObject();
  expectTypeOf<RichTextProps>().toEqualTypeOf<UniHelper.RichTextProps>();

  expectTypeOf<RichText>().not.toBeAny();
  expectTypeOf<RichText>().toEqualTypeOf<UniHelper.RichText>();

  expectTypeOf<RichTextInstance>().not.toBeAny();
  expectTypeOf<RichTextInstance>().toBeObject();
  expectTypeOf<RichTextInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<RichTextInstance>().toEqualTypeOf<UniHelper.RichTextInstance>();
});
