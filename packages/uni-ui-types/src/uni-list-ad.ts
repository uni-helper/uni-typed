import type { DefineComponent } from "vue";

type _UniListAdProps = Partial<{
  /** 标题 */
  title: string;
}>;

type _UniListAd = DefineComponent<_UniListAdProps>;

type _UniListAdInstance = InstanceType<_UniListAd>;

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
