import type {
  UniFilePicker,
  UniFilePickerArrayProps,
  UniFilePickerBaseFile,
  UniFilePickerBaseProps,
  UniFilePickerCallbackFile,
  UniFilePickerClearFiles,
  UniFilePickerFileImage,
  UniFilePickerFileMediatype,
  UniFilePickerFileStatus,
  UniFilePickerFileType,
  UniFilePickerImageStyles,
  UniFilePickerInstance,
  UniFilePickerListStyles,
  UniFilePickerMode,
  UniFilePickerObjectProps,
  UniFilePickerOnDelete,
  UniFilePickerOnDeleteEvent,
  UniFilePickerOnFail,
  UniFilePickerOnFailEvent,
  UniFilePickerOnProgress,
  UniFilePickerOnProgressEvent,
  UniFilePickerOnSelect,
  UniFilePickerOnSelectEvent,
  UniFilePickerOnSuccess,
  UniFilePickerOnSuccessEvent,
  UniFilePickerProps,
  UniFilePickerSizeType,
  UniFilePickerSizeTypeItem,
  UniFilePickerSourceType,
  UniFilePickerSourceTypeItem,
  UniFilePickerTempFile,
  UniFilePickerTempFileFile,
  UniFilePickerUpload,
  UniFilePickerValue,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";

describe("UniFilePicker", () => {
  expectTypeOf<UniFilePickerValue>().toBeObject();
  expectTypeOf<UniFilePickerValue>().toEqualTypeOf<UniHelper.UniFilePickerValue>();

  expectTypeOf<UniFilePickerMode>().toBeString();
  expectTypeOf<UniFilePickerMode>().toEqualTypeOf<UniHelper.UniFilePickerMode>();

  expectTypeOf<UniFilePickerFileMediatype>().toBeString();
  expectTypeOf<UniFilePickerFileMediatype>().toEqualTypeOf<UniHelper.UniFilePickerFileMediatype>();

  expectTypeOf<UniFilePickerFileType>().toBeString();
  expectTypeOf<UniFilePickerFileType>().toEqualTypeOf<UniHelper.UniFilePickerFileType>();

  expectTypeOf<UniFilePickerListStyles>().toBeObject();
  expectTypeOf<UniFilePickerListStyles>().toEqualTypeOf<UniHelper.UniFilePickerListStyles>();

  expectTypeOf<UniFilePickerImageStyles>().toBeObject();
  expectTypeOf<UniFilePickerImageStyles>().toEqualTypeOf<UniHelper.UniFilePickerImageStyles>();

  expectTypeOf<UniFilePickerSizeTypeItem>().toBeString();
  expectTypeOf<UniFilePickerSizeTypeItem>().toEqualTypeOf<UniHelper.UniFilePickerSizeTypeItem>();

  expectTypeOf<UniFilePickerSizeType>().toBeArray();
  expectTypeOf<UniFilePickerSizeType>().toEqualTypeOf<UniHelper.UniFilePickerSizeType>();

  expectTypeOf<UniFilePickerSourceTypeItem>().toBeString();
  expectTypeOf<UniFilePickerSourceTypeItem>().toEqualTypeOf<UniHelper.UniFilePickerSourceTypeItem>();

  expectTypeOf<UniFilePickerSourceType>().toBeArray();
  expectTypeOf<UniFilePickerSourceType>().toEqualTypeOf<UniHelper.UniFilePickerSourceType>();

  expectTypeOf<UniFilePickerUpload>().toBeFunction();
  expectTypeOf<UniFilePickerUpload>().toEqualTypeOf<UniHelper.UniFilePickerUpload>();

  expectTypeOf<UniFilePickerClearFiles>().toBeFunction();
  expectTypeOf<UniFilePickerClearFiles>().toEqualTypeOf<UniHelper.UniFilePickerClearFiles>();

  expectTypeOf<UniFilePickerFileImage>().toBeObject();
  expectTypeOf<UniFilePickerFileImage>().toEqualTypeOf<UniHelper.UniFilePickerFileImage>();

  expectTypeOf<UniFilePickerFileStatus>().toBeString();
  expectTypeOf<UniFilePickerFileStatus>().toEqualTypeOf<UniHelper.UniFilePickerFileStatus>();

  expectTypeOf<UniFilePickerBaseFile>().toBeObject();
  expectTypeOf<UniFilePickerBaseFile>().toEqualTypeOf<UniHelper.UniFilePickerBaseFile>();

  expectTypeOf<UniFilePickerTempFileFile>().toBeObject();
  expectTypeOf<UniFilePickerTempFileFile>().toEqualTypeOf<UniHelper.UniFilePickerTempFileFile>();

  expectTypeOf<UniFilePickerTempFile>().toBeObject();
  expectTypeOf<UniFilePickerTempFile>().toEqualTypeOf<UniHelper.UniFilePickerTempFile>();

  expectTypeOf<UniFilePickerCallbackFile>().toBeObject();
  expectTypeOf<UniFilePickerCallbackFile>().toEqualTypeOf<UniHelper.UniFilePickerCallbackFile>();

  expectTypeOf<UniFilePickerOnSelectEvent>().toBeObject();
  expectTypeOf<UniFilePickerOnSelectEvent>().toEqualTypeOf<UniHelper.UniFilePickerOnSelectEvent>();

  expectTypeOf<UniFilePickerOnSelect>().toBeFunction();
  expectTypeOf<UniFilePickerOnSelect>().toEqualTypeOf<UniHelper.UniFilePickerOnSelect>();

  expectTypeOf<UniFilePickerOnProgressEvent>().toBeObject();
  expectTypeOf<UniFilePickerOnProgressEvent>().toEqualTypeOf<UniHelper.UniFilePickerOnProgressEvent>();

  expectTypeOf<UniFilePickerOnProgress>().toBeFunction();
  expectTypeOf<UniFilePickerOnProgress>().toEqualTypeOf<UniHelper.UniFilePickerOnProgress>();

  expectTypeOf<UniFilePickerOnSuccessEvent>().toBeObject();
  expectTypeOf<UniFilePickerOnSuccessEvent>().toEqualTypeOf<UniHelper.UniFilePickerOnSuccessEvent>();

  expectTypeOf<UniFilePickerOnSuccess>().toBeFunction();
  expectTypeOf<UniFilePickerOnSuccess>().toEqualTypeOf<UniHelper.UniFilePickerOnSuccess>();

  expectTypeOf<UniFilePickerOnFailEvent>().toBeObject();
  expectTypeOf<UniFilePickerOnFailEvent>().toEqualTypeOf<UniHelper.UniFilePickerOnFailEvent>();

  expectTypeOf<UniFilePickerOnFail>().toBeFunction();
  expectTypeOf<UniFilePickerOnFail>().toEqualTypeOf<UniHelper.UniFilePickerOnFail>();

  expectTypeOf<UniFilePickerOnDeleteEvent>().toBeObject();
  expectTypeOf<UniFilePickerOnDeleteEvent>().toEqualTypeOf<UniHelper.UniFilePickerOnDeleteEvent>();

  expectTypeOf<UniFilePickerOnDelete>().toBeFunction();
  expectTypeOf<UniFilePickerOnDelete>().toEqualTypeOf<UniHelper.UniFilePickerOnDelete>();

  expectTypeOf<UniFilePickerBaseProps>().toBeObject();
  expectTypeOf<UniFilePickerBaseProps>().toEqualTypeOf<UniHelper.UniFilePickerBaseProps>();

  expectTypeOf<UniFilePickerArrayProps>().toBeObject();
  expectTypeOf<UniFilePickerArrayProps>().toEqualTypeOf<UniHelper.UniFilePickerArrayProps>();

  expectTypeOf<UniFilePickerObjectProps>().toBeObject();
  expectTypeOf<UniFilePickerObjectProps>().toEqualTypeOf<UniHelper.UniFilePickerObjectProps>();

  expectTypeOf<UniFilePickerProps>().toBeObject();
  expectTypeOf<UniFilePickerProps>().toEqualTypeOf<UniHelper.UniFilePickerProps>();

  expectTypeOf<UniFilePicker>().not.toBeAny();
  expectTypeOf<UniFilePicker>().toEqualTypeOf<UniHelper.UniFilePicker>();

  expectTypeOf<UniFilePickerInstance>().not.toBeAny();
  expectTypeOf<UniFilePickerInstance>().toEqualTypeOf<UniHelper.UniFilePickerInstance>();
});
