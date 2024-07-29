import type {
  UniPopupDialog,
  UniPopupDialogInstance,
  UniPopupDialogMode,
  UniPopupDialogOnClose,
  UniPopupDialogOnConfirm,
  UniPopupDialogOnConfirmEvent,
  UniPopupDialogProps,
  UniPopupDialogType,
  UniPopupDialogValue,
} from "@uni-helper/uni-ui-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("UniPopupDialog", () => {
  expectTypeOf<UniPopupDialogType>().toBeString();
  expectTypeOf<UniPopupDialogType>().toEqualTypeOf<UniHelper.UniPopupDialogType>();

  expectTypeOf<UniPopupDialogMode>().toBeString();
  expectTypeOf<UniPopupDialogMode>().toEqualTypeOf<UniHelper.UniPopupDialogMode>();

  expectTypeOf<UniPopupDialogValue>().toMatchTypeOf<string | number>();
  expectTypeOf<UniPopupDialogValue>().toEqualTypeOf<UniHelper.UniPopupDialogValue>();

  expectTypeOf<UniPopupDialogOnClose>().toBeFunction();
  expectTypeOf<UniPopupDialogOnClose>().toEqualTypeOf<UniHelper.UniPopupDialogOnClose>();

  expectTypeOf<UniPopupDialogOnConfirmEvent>().toBeObject();
  expectTypeOf<UniPopupDialogOnConfirmEvent>().toEqualTypeOf<UniHelper.UniPopupDialogOnConfirmEvent>();

  expectTypeOf<UniPopupDialogOnConfirm>().toBeFunction();
  expectTypeOf<UniPopupDialogOnConfirm>().toEqualTypeOf<UniHelper.UniPopupDialogOnConfirm>();

  expectTypeOf<UniPopupDialogProps>().toBeObject();
  expectTypeOf<UniPopupDialogProps>().toEqualTypeOf<UniHelper.UniPopupDialogProps>();

  expectTypeOf<UniPopupDialog>().not.toBeAny();
  expectTypeOf<UniPopupDialog>().toEqualTypeOf<UniHelper.UniPopupDialog>();

  expectTypeOf<UniPopupDialogInstance>().not.toBeAny();
  expectTypeOf<UniPopupDialogInstance>().toBeObject();
  expectTypeOf<UniPopupDialogInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<UniPopupDialogInstance>().toEqualTypeOf<UniHelper.UniPopupDialogInstance>();
});
