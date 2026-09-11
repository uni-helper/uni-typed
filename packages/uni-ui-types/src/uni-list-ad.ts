import type { DefineComponent } from "vue";

/** 列表广告属性 */
type _UniListAdProps = Partial<{
  /** 标题 */
  title: string;
}>;

/** 列表广告，用于在列表中展示广告 */
type _UniListAd = DefineComponent<_UniListAdProps>;

/** 列表广告实例 */
type _UniListAdInstance = InstanceType<_UniListAd>;

export type {
  _UniListAd as UniListAd,
  _UniListAdInstance as UniListAdInstance,
  _UniListAdProps as UniListAdProps,
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
