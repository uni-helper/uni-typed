import type { Component } from "@uni-helper/uni-app-types";

type _UniListAdProps = Partial<{
  /** 标题 */
  title: string;
}>;

type _UniListAd = Component<_UniListAdProps>;

interface _UniListAdInstance extends InstanceType<_UniListAd>{};;

export type {
  _UniListAdProps as UniListAdProps,
  _UniListAd as UniListAd,
  _UniListAdInstance as UniListAdInstance,
};

declare global {
  namespace UniHelper {
    export type UniListAdProps = _UniListAdProps;
    export type UniListAd = _UniListAd;
    export type UniListAdInstance = _UniListAdInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    UniListAd: _UniListAd;
  }
}
