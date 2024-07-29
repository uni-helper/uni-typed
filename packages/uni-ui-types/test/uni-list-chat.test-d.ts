import type {
  UniListChat,
  UniListChatBadgePositon,
  UniListChatInstance,
  UniListChatLink,
  UniListChatOnClick,
  UniListChatOnClickEvent,
  UniListChatProps,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniListChat", () => {
  expectTypeOf<UniListChatLink>().toBeString();
  expectTypeOf<UniListChatLink>().toEqualTypeOf<UniHelper.UniListChatLink>();

  expectTypeOf<UniListChatBadgePositon>().toBeString();
  expectTypeOf<UniListChatBadgePositon>().toEqualTypeOf<UniHelper.UniListChatBadgePositon>();

  expectTypeOf<UniListChatOnClickEvent>().toBeObject();
  expectTypeOf<UniListChatOnClickEvent>().toEqualTypeOf<UniHelper.UniListChatOnClickEvent>();

  expectTypeOf<UniListChatOnClick>().toBeFunction();
  expectTypeOf<UniListChatOnClick>().toEqualTypeOf<UniHelper.UniListChatOnClick>();

  expectTypeOf<UniListChatProps>().toBeObject();
  expectTypeOf<UniListChatProps>().toEqualTypeOf<UniHelper.UniListChatProps>();

  expectTypeOf<UniListChat>().not.toBeAny();
  expectTypeOf<UniListChat>().toEqualTypeOf<UniHelper.UniListChat>();

  expectTypeOf<UniListChatInstance>().not.toBeAny();
  expectTypeOf<UniListChatInstance>().toBeObject();
  expectTypeOf<UniListChatInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniListChatInstance>().toEqualTypeOf<UniHelper.UniListChatInstance>();
});
