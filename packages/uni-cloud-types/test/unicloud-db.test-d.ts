import type {
  UnicloudDb,
  UnicloudDbAdd,
  UnicloudDbAddOptions,
  UnicloudDbClear,
  UnicloudDbId,
  UnicloudDbInstance,
  UnicloudDbLoadData,
  UnicloudDbLoadDataCallback,
  UnicloudDbLoadDataOptions,
  UnicloudDbLoadMore,
  UnicloudDbLoadtime,
  UnicloudDbOnError,
  UnicloudDbOnLoad,
  UnicloudDbPageData,
  UnicloudDbProps,
  UnicloudDbRefresh,
  UnicloudDbRemove,
  UnicloudDbRemoveOptions,
  UnicloudDbReset,
  UnicloudDbSpaceInfo,
  UnicloudDbSpaceInfoProvider,
  UnicloudDbUpdate,
  UnicloudDbUpdateOptions,
} from "@uni-helper/uni-cloud-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UnicloudDb", () => {
  expectTypeOf<UnicloudDbSpaceInfoProvider>().toBeString();
  expectTypeOf<UnicloudDbSpaceInfoProvider>().toEqualTypeOf<UniHelper.UnicloudDbSpaceInfoProvider>();

  expectTypeOf<UnicloudDbSpaceInfo>().toBeObject();
  expectTypeOf<UnicloudDbSpaceInfo>().toEqualTypeOf<UniHelper.UnicloudDbSpaceInfo>();

  expectTypeOf<UnicloudDbPageData>().toBeString();
  expectTypeOf<UnicloudDbPageData>().toEqualTypeOf<UniHelper.UnicloudDbPageData>();

  expectTypeOf<UnicloudDbLoadtime>().toBeString();
  expectTypeOf<UnicloudDbLoadtime>().toEqualTypeOf<UniHelper.UnicloudDbLoadtime>();

  expectTypeOf<UnicloudDbLoadDataOptions>().toBeObject();
  expectTypeOf<UnicloudDbLoadDataOptions>().toEqualTypeOf<UniHelper.UnicloudDbLoadDataOptions>();

  expectTypeOf<UnicloudDbLoadDataCallback>().toBeFunction();
  expectTypeOf<UnicloudDbLoadDataCallback>().toEqualTypeOf<UniHelper.UnicloudDbLoadDataCallback>();

  expectTypeOf<UnicloudDbLoadData>().toBeFunction();
  expectTypeOf<UnicloudDbLoadData>().toEqualTypeOf<UniHelper.UnicloudDbLoadData>();

  expectTypeOf<UnicloudDbLoadMore>().toBeFunction();
  expectTypeOf<UnicloudDbLoadMore>().toEqualTypeOf<UniHelper.UnicloudDbLoadMore>();

  expectTypeOf<UnicloudDbClear>().toBeFunction();
  expectTypeOf<UnicloudDbClear>().toEqualTypeOf<UniHelper.UnicloudDbClear>();

  expectTypeOf<UnicloudDbReset>().toBeFunction();
  expectTypeOf<UnicloudDbReset>().toEqualTypeOf<UniHelper.UnicloudDbReset>();

  expectTypeOf<UnicloudDbRefresh>().toBeFunction();
  expectTypeOf<UnicloudDbRefresh>().toEqualTypeOf<UniHelper.UnicloudDbRefresh>();

  expectTypeOf<UnicloudDbId>().toBeString();
  expectTypeOf<UnicloudDbId>().toEqualTypeOf<UniHelper.UnicloudDbId>();

  expectTypeOf<UnicloudDbRemoveOptions>().toBeObject();
  expectTypeOf<UnicloudDbRemoveOptions>().toEqualTypeOf<UniHelper.UnicloudDbRemoveOptions>();

  expectTypeOf<UnicloudDbRemove>().toBeFunction();
  expectTypeOf<UnicloudDbRemove>().toEqualTypeOf<UniHelper.UnicloudDbRemove>();

  expectTypeOf<UnicloudDbAddOptions>().toBeObject();
  expectTypeOf<UnicloudDbAddOptions>().toEqualTypeOf<UniHelper.UnicloudDbAddOptions>();

  expectTypeOf<UnicloudDbAdd>().toBeFunction();
  expectTypeOf<UnicloudDbAdd>().toEqualTypeOf<UniHelper.UnicloudDbAdd>();

  expectTypeOf<UnicloudDbUpdateOptions>().toBeObject();
  expectTypeOf<UnicloudDbUpdateOptions>().toEqualTypeOf<UniHelper.UnicloudDbUpdateOptions>();

  expectTypeOf<UnicloudDbUpdate>().toBeFunction();
  expectTypeOf<UnicloudDbUpdate>().toEqualTypeOf<UniHelper.UnicloudDbUpdate>();

  expectTypeOf<UnicloudDbOnLoad>().toBeFunction();
  expectTypeOf<UnicloudDbOnLoad>().toEqualTypeOf<UniHelper.UnicloudDbOnLoad>();

  expectTypeOf<UnicloudDbOnError>().toBeFunction();
  expectTypeOf<UnicloudDbOnError>().toEqualTypeOf<UniHelper.UnicloudDbOnError>();

  expectTypeOf<UnicloudDbProps>().toBeObject();
  expectTypeOf<UnicloudDbProps>().toEqualTypeOf<UniHelper.UnicloudDbProps>();

  expectTypeOf<UnicloudDb>().not.toBeAny();
  expectTypeOf<UnicloudDb>().toEqualTypeOf<UniHelper.UnicloudDb>();

  expectTypeOf<UnicloudDbInstance>().not.toBeAny();
  expectTypeOf<UnicloudDbInstance>().toBeObject();
  expectTypeOf<UnicloudDbInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UnicloudDbInstance>().toEqualTypeOf<UniHelper.UnicloudDbInstance>();
});
