import type { DefineComponent } from "vue";

/** 动态添加数据后，如不能正常滑动，需要主动调用此方法 */
type _UniSwipeActionResize = () => void;

/** 关闭所有已经打开的组件 */
type _UniSwipeActionCloseAll = () => void;

type _UniSwipeActionProps = Partial<{
  /** 动态添加数据后，如不能正常滑动，需要主动调用此方法 */
  resize: _UniSwipeActionResize;
  /** 关闭所有已经打开的组件 */
  closeAll: _UniSwipeActionCloseAll;
}>;

/**
 * 滑动操作
 *
 * 通过滑动触发选项的容器
 */
type _UniSwipeAction = DefineComponent<_UniSwipeActionProps>;

type _UniSwipeActionInstance = InstanceType<_UniSwipeAction>;

export type {
  _UniSwipeActionResize as UniSwipeActionResize,
  _UniSwipeActionCloseAll as UniSwipeActionCloseAll,
  _UniSwipeActionProps as UniSwipeActionProps,
  _UniSwipeAction as UniSwipeAction,
  _UniSwipeActionInstance as UniSwipeActionInstance,
};

declare global {
  namespace UniHelper {
    /** 动态添加数据后，如不能正常滑动，需要主动调用此方法 */
    export interface UniSwipeActionResize extends _UniSwipeActionResize {}
    /** 关闭所有已经打开的组件 */
    export interface UniSwipeActionCloseAll extends _UniSwipeActionCloseAll {}
    export type UniSwipeActionProps = _UniSwipeActionProps;
    /**
     * 滑动操作
     *
     * 通过滑动触发选项的容器
     */
    export type UniSwipeAction = _UniSwipeAction;
    export type UniSwipeActionInstance = _UniSwipeActionInstance;
  }
}

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 滑动操作
     *
     * 通过滑动触发选项的容器
     * ***
     * [👉🏻点击查看组件文档](https://uniapp.dcloud.net.cn/component/uniui/uni-swipe-action.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UniSwipeAction: _UniSwipeAction;
  }
}
