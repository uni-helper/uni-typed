import type {
  UniPopupMessage,
  UniPopupMessageInstance,
  UniPopupMessageProps,
  UniPopupMessageType,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniPopupMessage", () => {
  expectTypeOf<UniPopupMessageType>().toBeString();
  expectTypeOf<UniPopupMessageType>().toEqualTypeOf<UniHelper.UniPopupMessageType>();

  expectTypeOf<UniPopupMessageProps>().toBeObject();
  expectTypeOf<UniPopupMessageProps>().toEqualTypeOf<UniHelper.UniPopupMessageProps>();

  expectTypeOf<UniPopupMessage>().not.toBeAny();
  expectTypeOf<UniPopupMessage>().toEqualTypeOf<UniHelper.UniPopupMessage>();

  expectTypeOf<UniPopupMessageInstance>().not.toBeAny();
  expectTypeOf<UniPopupMessageInstance>().toBeObject();
  expectTypeOf<UniPopupMessageInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniPopupMessageInstance>().toEqualTypeOf<UniHelper.UniPopupMessageInstance>();
});
