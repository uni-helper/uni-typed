import type {
  Button,
  ButtonFormType,
  ButtonInstance,
  ButtonLang,
  ButtonOnAddgroupapp,
  ButtonOnAddgroupappEvent,
  ButtonOnAgreeprivacyauthorization,
  ButtonOnAgreeprivacyauthorizationEvent,
  ButtonOnChooseaddress,
  ButtonOnChooseaddressEvent,
  ButtonOnChooseavatar,
  ButtonOnChooseavatarEvent,
  ButtonOnChooseinvoicetitle,
  ButtonOnChooseinvoicetitleEvent,
  ButtonOnError,
  ButtonOnErrorEvent,
  ButtonOnGetphonenumber,
  ButtonOnGetphonenumberDetail,
  ButtonOnGetphonenumberEvent,
  ButtonOnGetrealtimephonenumber,
  ButtonOnLaunchapp,
  ButtonOnLaunchappEvent,
  ButtonOnLogin,
  ButtonOnLoginEvent,
  ButtonOnOpensetting,
  ButtonOnOpensettingDetail,
  ButtonOnOpensettingEvent,
  ButtonOnSubscribe,
  ButtonOnSubscribeEvent,
  ButtonOpenType,
  ButtonProps,
  ButtonSize,
  ButtonType,
} from "@uni-helper/uni-app-types";
import { describe, expectTypeOf } from "vitest";
import type { ComponentInternalInstance } from "vue";

describe("Button", () => {
  expectTypeOf<ButtonSize>().toBeString();
  expectTypeOf<ButtonSize>().toEqualTypeOf<UniHelper.ButtonSize>();

  expectTypeOf<ButtonType>().toBeString();
  expectTypeOf<ButtonType>().toEqualTypeOf<UniHelper.ButtonType>();

  expectTypeOf<ButtonFormType>().toBeString();
  expectTypeOf<ButtonFormType>().toEqualTypeOf<UniHelper.ButtonFormType>();

  expectTypeOf<ButtonOpenType>().toBeString();
  expectTypeOf<ButtonOpenType>().toEqualTypeOf<UniHelper.ButtonOpenType>();

  expectTypeOf<ButtonLang>().toBeString();
  expectTypeOf<ButtonLang>().toEqualTypeOf<UniHelper.ButtonLang>();

  expectTypeOf<ButtonOnGetphonenumberDetail>().toBeObject();
  expectTypeOf<ButtonOnGetphonenumberDetail>().toEqualTypeOf<UniHelper.ButtonOnGetphonenumberDetail>();

  expectTypeOf<ButtonOnGetphonenumberEvent>().toBeObject();
  expectTypeOf<ButtonOnGetphonenumberEvent>().toEqualTypeOf<UniHelper.ButtonOnGetphonenumberEvent>();

  expectTypeOf<ButtonOnGetphonenumber>().toBeFunction();
  expectTypeOf<ButtonOnGetphonenumber>().toEqualTypeOf<UniHelper.ButtonOnGetphonenumber>();

  expectTypeOf<ButtonOnGetrealtimephonenumber>().toBeFunction();
  expectTypeOf<ButtonOnGetrealtimephonenumber>().toEqualTypeOf<UniHelper.ButtonOnGetrealtimephonenumber>();

  expectTypeOf<ButtonOnErrorEvent>().toBeObject();
  expectTypeOf<ButtonOnErrorEvent>().toEqualTypeOf<UniHelper.ButtonOnErrorEvent>();

  expectTypeOf<ButtonOnError>().toBeFunction();
  expectTypeOf<ButtonOnError>().toEqualTypeOf<UniHelper.ButtonOnError>();

  expectTypeOf<ButtonOnOpensettingDetail>().toBeObject();
  expectTypeOf<ButtonOnOpensettingDetail>().toEqualTypeOf<UniHelper.ButtonOnOpensettingDetail>();

  expectTypeOf<ButtonOnOpensettingEvent>().toBeObject();
  expectTypeOf<ButtonOnOpensettingEvent>().toEqualTypeOf<UniHelper.ButtonOnOpensettingEvent>();

  expectTypeOf<ButtonOnOpensetting>().toBeFunction();
  expectTypeOf<ButtonOnOpensetting>().toEqualTypeOf<UniHelper.ButtonOnOpensetting>();

  expectTypeOf<ButtonOnLaunchappEvent>().toBeObject();
  expectTypeOf<ButtonOnLaunchappEvent>().toEqualTypeOf<UniHelper.ButtonOnLaunchappEvent>();

  expectTypeOf<ButtonOnLaunchapp>().toBeFunction();
  expectTypeOf<ButtonOnLaunchapp>().toEqualTypeOf<UniHelper.ButtonOnLaunchapp>();

  expectTypeOf<ButtonOnChooseavatarEvent>().toBeObject();
  expectTypeOf<ButtonOnChooseavatarEvent>().toEqualTypeOf<UniHelper.ButtonOnChooseavatarEvent>();

  expectTypeOf<ButtonOnChooseavatar>().toBeFunction();
  expectTypeOf<ButtonOnChooseavatar>().toEqualTypeOf<UniHelper.ButtonOnChooseavatar>();

  expectTypeOf<ButtonOnAddgroupappEvent>().toBeObject();
  expectTypeOf<ButtonOnAddgroupappEvent>().toEqualTypeOf<UniHelper.ButtonOnAddgroupappEvent>();

  expectTypeOf<ButtonOnAddgroupapp>().toBeFunction();
  expectTypeOf<ButtonOnAddgroupapp>().toEqualTypeOf<UniHelper.ButtonOnAddgroupapp>();

  expectTypeOf<ButtonOnChooseaddressEvent>().toBeObject();
  expectTypeOf<ButtonOnChooseaddressEvent>().toEqualTypeOf<UniHelper.ButtonOnChooseaddressEvent>();

  expectTypeOf<ButtonOnChooseaddress>().toBeFunction();
  expectTypeOf<ButtonOnChooseaddress>().toEqualTypeOf<UniHelper.ButtonOnChooseaddress>();

  expectTypeOf<ButtonOnChooseinvoicetitleEvent>().toBeObject();
  expectTypeOf<ButtonOnChooseinvoicetitleEvent>().toEqualTypeOf<UniHelper.ButtonOnChooseinvoicetitleEvent>();

  expectTypeOf<ButtonOnChooseinvoicetitle>().toBeFunction();
  expectTypeOf<ButtonOnChooseinvoicetitle>().toEqualTypeOf<UniHelper.ButtonOnChooseinvoicetitle>();

  expectTypeOf<ButtonOnSubscribeEvent>().toBeObject();
  expectTypeOf<ButtonOnSubscribeEvent>().toEqualTypeOf<UniHelper.ButtonOnSubscribeEvent>();

  expectTypeOf<ButtonOnSubscribe>().toBeFunction();
  expectTypeOf<ButtonOnSubscribe>().toEqualTypeOf<UniHelper.ButtonOnSubscribe>();

  expectTypeOf<ButtonOnLoginEvent>().toBeObject();
  expectTypeOf<ButtonOnLoginEvent>().toEqualTypeOf<UniHelper.ButtonOnLoginEvent>();

  expectTypeOf<ButtonOnLogin>().toBeFunction();
  expectTypeOf<ButtonOnLogin>().toEqualTypeOf<UniHelper.ButtonOnLogin>();

  expectTypeOf<ButtonOnAgreeprivacyauthorizationEvent>().toBeObject();
  expectTypeOf<ButtonOnAgreeprivacyauthorizationEvent>().toEqualTypeOf<UniHelper.ButtonOnAgreeprivacyauthorizationEvent>();

  expectTypeOf<ButtonOnAgreeprivacyauthorization>().toBeFunction();
  expectTypeOf<ButtonOnAgreeprivacyauthorization>().toEqualTypeOf<UniHelper.ButtonOnAgreeprivacyauthorization>();

  expectTypeOf<ButtonProps>().toBeObject();
  expectTypeOf<ButtonProps>().toEqualTypeOf<UniHelper.ButtonProps>();

  expectTypeOf<Button>().not.toBeAny();
  expectTypeOf<Button>().toEqualTypeOf<UniHelper.Button>();

  expectTypeOf<ButtonInstance>().not.toBeAny();
  expectTypeOf<ButtonInstance>().toBeObject();
  expectTypeOf<ButtonInstance>()
    .toHaveProperty("$")
    .toMatchTypeOf<ComponentInternalInstance>();
  expectTypeOf<ButtonInstance>().toEqualTypeOf<UniHelper.ButtonInstance>();
});
