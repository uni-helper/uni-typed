import type {
  UniLoadMore,
  UniLoadMoreContentText,
  UniLoadMoreIconType,
  UniLoadMoreInstance,
  UniLoadMoreOnClickLoadMore,
  UniLoadMoreOnClickLoadMoreDetail,
  UniLoadMoreOnClickLoadMoreEvent,
  UniLoadMoreProps,
  UniLoadMoreStatus,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniLoadMore", () => {
  expectTypeOf<UniLoadMoreStatus>().toBeString();
  expectTypeOf<UniLoadMoreStatus>().toEqualTypeOf<UniHelper.UniLoadMoreStatus>();

  expectTypeOf<UniLoadMoreIconType>().toBeString();
  expectTypeOf<UniLoadMoreIconType>().toEqualTypeOf<UniHelper.UniLoadMoreIconType>();

  expectTypeOf<UniLoadMoreContentText>().toBeObject();
  expectTypeOf<UniLoadMoreContentText>().toEqualTypeOf<UniHelper.UniLoadMoreContentText>();

  expectTypeOf<UniLoadMoreOnClickLoadMoreDetail>().toBeObject();
  expectTypeOf<UniLoadMoreOnClickLoadMoreDetail>().toEqualTypeOf<UniHelper.UniLoadMoreOnClickLoadMoreDetail>();

  expectTypeOf<UniLoadMoreOnClickLoadMoreEvent>().toBeObject();
  expectTypeOf<UniLoadMoreOnClickLoadMoreEvent>().toEqualTypeOf<UniHelper.UniLoadMoreOnClickLoadMoreEvent>();

  expectTypeOf<UniLoadMoreOnClickLoadMore>().toBeFunction();
  expectTypeOf<UniLoadMoreOnClickLoadMore>().toEqualTypeOf<UniHelper.UniLoadMoreOnClickLoadMore>();

  expectTypeOf<UniLoadMoreProps>().toBeObject();
  expectTypeOf<UniLoadMoreProps>().toEqualTypeOf<UniHelper.UniLoadMoreProps>();

  expectTypeOf<UniLoadMore>().not.toBeAny();
  expectTypeOf<UniLoadMore>().toEqualTypeOf<UniHelper.UniLoadMore>();

  expectTypeOf<UniLoadMoreInstance>().not.toBeAny();
  expectTypeOf<UniLoadMoreInstance>().toBeObject();
  expectTypeOf<UniLoadMoreInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniLoadMoreInstance>().toEqualTypeOf<UniHelper.UniLoadMoreInstance>();
});
