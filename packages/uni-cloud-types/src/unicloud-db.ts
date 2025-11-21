import type { DefineComponent } from "vue";

/**
 * 服务商
 *
 * aliyun 阿里云
 *
 * tencent 腾讯云
 */
type _UnicloudDbSpaceInfoProvider = "aliyun" | "tencent";

/** 服务空间信息 */
interface _UnicloudDbSpaceInfo {
  /**
   * 服务商
   *
   * aliyun 阿里云
   *
   * tencent 腾讯云
   */
  provider: _UnicloudDbSpaceInfoProvider;
  /** 服务空间 ID */
  spaceId: string;
  /** 阿里云支持，在控制台服务空间列表中查看 */
  clientSecret: string;
  /** 服务空间地址，阿里云支持 */
  endpoint?: string;
}

/**
 * 分页策略
 *
 * add 下一页的数据追加到之前的数据中，常用于滚动到底加载下一页
 *
 * replace 替换当前数据，常用于 PC 式交互，列表底部有页码分页按钮
 */
type _UnicloudDbPageData = "add" | "replace";

/**
 * 加载数据时机
 *
 * auto 页面就绪后或属性变化后加载数据
 *
 * onready 页面就绪后不自动加载数据，属性变化后加载，适合在 onready 中接收上个页面的参数作为 where 条件时
 *
 * manual 手动模式，不自动加载数据，如果涉及到分页，需要先手动修改当前页再调用加载数据
 */
type _UnicloudDbLoadtime = "auto" | "onready" | "manual";

interface _UnicloudDbLoadDataOptions {
  /** 是否清空数据和分页信息 */
  clear: boolean;
}

type _UnicloudDbLoadDataCallback = () => any;

/**
 * 手动加载数据
 *
 * @param options.clear 是否清空数据和分页信息，默认为 false
 * @param callback 回调函数，加载数据完或加载失败后触发
 */
type _UnicloudDbLoadData = (
  options?: _UnicloudDbLoadDataOptions,
  callback?: _UnicloudDbLoadDataCallback,
) => void;

/** 加载更多数据，每加载成功一次，当前页 +1 */
type _UnicloudDbLoadMore = () => void;

/** 清空已加载的数据，但不会重置当前分页信息 */
type _UnicloudDbClear = () => void;

/** 重置当前分页信息，但不会清空已加载的数据 */
type _UnicloudDbReset = () => void;

/** 清空并重新加载当前页面数据 */
type _UnicloudDbRefresh = () => void;

/** 单个数据 id */
type _UnicloudDbId = string;

interface _UnicloudDbRemoveOptions {
  /** 云端执行数据库查询的前或后，触发某个 action 函数操作，进行预处理或后处理 */
  action?: string;
  /**
   * 删除确认框标题
   *
   * 默认为 提示
   */
  confirmTitle?: string;
  /** 删除确认框提示 */
  confirmContent?: string;
  /**
   * 控制是否有弹出框
   *
   * 默认为 true
   */
  needConfirm?: boolean;
  /**
   * 是否显示 Loading
   *
   * 默认为 true
   */
  needLoading?: boolean;
  /** loading 的标题 */
  loadingTitle?: string;
  /** 成功回调 */
  success?: ({
    code,
    message,
  }: {
    code: string;
    message: string;
  }) => void | Promise<void>;
  /** 失败回调 */
  fail?: ({ message }: { message: string }) => void | Promise<void>;
  /** 完成回调 */
  complete?: () => void | Promise<void>;
}

/** 删除一个 item */
type _UnicloudDbRemove = (
  id: _UnicloudDbId | _UnicloudDbId[],
  options?: _UnicloudDbRemoveOptions,
) => void;

interface _UnicloudDbAddOptions {
  /** 云端执行数据库查询的前或后，触发某个 action 函数操作，进行预处理或后处理 */
  action?: string;
  /**
   * 是否显示更新成功后的提示框
   *
   * 默认为 true
   */
  showToast?: boolean;
  /**
   * 新增成功后的 toast 提示
   *
   * 默认为 新增成功
   */
  toastTitle?: string;
  /**
   * 是否显示 Loading
   *
   * 默认为 true
   */
  needLoading?: boolean;
  /** loading 的标题 */
  loadingTitle?: string;
  /** 成功回调 */
  success?: ({
    code,
    message,
  }: {
    code: string;
    message: string;
  }) => void | Promise<void>;
  /** 失败回调 */
  fail?: ({ message }: { message: string }) => void | Promise<void>;
  /** 完成回调 */
  complete?: () => void | Promise<void>;
}

/** 新增一个 item */
type _UnicloudDbAdd = (
  value: Record<string, any>,
  options?: _UnicloudDbAddOptions,
) => void;

interface _UnicloudDbUpdateOptions {
  /** 云端执行数据库查询的前或后，触发某个 action 函数操作，进行预处理或后处理 */
  action?: string;
  /**
   * 是否显示更新成功后的提示框
   *
   * 默认为 true
   */
  showToast?: boolean;
  /**
   * 新增成功后的 toast 提示
   *
   * 默认为 修改成功
   */
  toastTitle?: string;
  /**
   * 控制是否有弹出框
   *
   * 默认为 true
   */
  needConfirm?: boolean;
  /**
   * 是否显示 Loading
   *
   * 默认为 true
   */
  needLoading?: boolean;
  /** loading 的标题 */
  loadingTitle?: string;
  /** 成功回调 */
  success?: ({
    code,
    message,
  }: {
    code: string;
    message: string;
  }) => void | Promise<void>;
  /** 失败回调 */
  fail?: ({ message }: { message: string }) => void | Promise<void>;
  /** 完成回调 */
  complete?: () => void | Promise<void>;
}

/** 更新一个 item */
type _UnicloudDbUpdate = (
  id: _UnicloudDbId,
  value: Record<string, any>,
  options?: _UnicloudDbUpdateOptions,
) => void;

/**
 * 成功回调
 *
 * 联网返回结果后，若希望先修改下数据再渲染界面，则在本方法里对 data 进行修改
 *
 * @param data 当前查询结果
 * @param ended 是否有更多数据
 * @param pagination 分页信息
 * @param pagination.size 每页数据量
 * @param pagination.count 数据总量
 */
type _UnicloudDbOnLoad = (
  data: any,
  ended: boolean,
  pagination: { size: number; count: number },
) => void;

/** 失败回调 */
type _UnicloudDbOnError = (event: { message: string }) => void;

/** 数据库查询组件属性 */
type _UnicloudDbProps = Partial<{
  /** 服务空间信息 */
  spaceInfo: _UnicloudDbSpaceInfo;
  /** 表名 */
  collection: string;
  /** 指定要查询的字段，多个字段用 , 分割 */
  field: string;
  /** 查询条件，过滤记录 */
  where: string;
  /** 排序字段及正序倒序设置 */
  orderby: string;
  /** 手动指定使用的关联关系 */
  foreignKey: string;
  /**
   * 分页策略
   *
   * add 下一页的数据追加到之前的数据中，常用于滚动到底加载下一页
   *
   * replace 替换当前数据，常用于 PC 式交互，列表底部有页码分页按钮
   *
   * 默认为 add
   */
  pageData: _UnicloudDbPageData;
  /** 当前页 */
  pageCurrent: number;
  /** 每页数据数量 */
  pageSize: number;
  /**
   * 是否查询总数据条数
   *
   * 默认 false
   */
  getcount: boolean;
  /**
   * 指定查询结果是否仅返回数组第一条数据
   *
   * false 结果数据外会再用数组包裹一层，一般用于列表页
   *
   * true 直接返回结果数据，一般用于非列表页
   *
   * 默认 false
   */
  getone: boolean;
  /**
   * 云端执行数据库查询的前或后，触发某个 action 函数操作，进行预处理或后处理
   *
   * 场景：前端无权操作的数据，比如阅读数 +1
   */
  action: string;
  /** 是否查询树状结构数据 */
  gettree: boolean;
  /**
   * gettree 的第一层级条件
   *
   * 此初始条件可以省略，不传 startWith 时默认从最顶级开始查询
   */
  startwith: string;
  /**
   * 取值范围为 1 - 15
   *
   * @desce gettree查询返回的树的最大层级，超过设定层级的节点不会返回
   * @dsec 默认为 10
   */
  limitlevel: number;
  /** 对数据进行分组 */
  groupby: string;
  /** 对数据进行分组统计 */
  groupField: string;
  /**
   * 是否对数据查询结果中重复的记录进行去重
   *
   * 默认为 false
   */
  distinct: boolean;
  /**
   * 加载数据时机
   *
   * auto 页面就绪后或属性变化后加载数据
   *
   * onready 页面就绪后不自动加载数据，属性变化后加载，适合在 onready 中接收上个页面的参数作为 where 条件时
   *
   * manual 手动模式，不自动加载数据，如果涉及到分页，需要先手动修改当前页再调用加载数据
   *
   * 默认 auto
   */
  loadtime: _UnicloudDbLoadtime;
  /**
   * 发行 H5 ssr 时有效，用于保证服务器端渲染和前端加载的数据对应
   *
   * 页面同时出现 2 个及以上 unicloud-db 组件需要配置此属性，且要保证值整个应用唯一
   *
   * 默认根据页面路径 + unicloud-db 组件代码中的行号生成唯一值
   */
  ssrKey: string;
  /**
   * 手动加载数据
   *
   * @param param.clear 是否清空数据和分页信息，默认为 false
   * @param callback 回调函数，加载数据完或加载失败后触发
   */
  loadData: _UnicloudDbLoadData;
  /** 加载更多数据，每加载成功一次，当前页 +1 */
  loadMore: _UnicloudDbLoadMore;
  /** 清空已加载的数据，但不会重置当前分页信息 */
  clear: _UnicloudDbClear;
  /** 重置当前分页信息，但不会清空已加载的数据 */
  reset: _UnicloudDbReset;
  /** 清空并重新加载当前页面数据 */
  refresh: _UnicloudDbRefresh;
  /** 删除一个 item */
  remove: _UnicloudDbRemove;
  /** 新增一个 item */
  add: _UnicloudDbAdd;
  /** 更新一个 item */
  update: _UnicloudDbUpdate;
  /** 获取 data */
  dataList: any;
  /**
   * 成功回调
   *
   * 联网返回结果后，若希望先修改下数据再渲染界面，则在本方法里对 data 进行修改
   *
   * @param data 当前查询结果
   * @param ended 是否有更多数据
   * @param pagination 分页信息
   * @param pagination.size 每页数据量
   * @param pagination.count 数据总量
   */
  onLoad: _UnicloudDbOnLoad;
  /** 失败回调 */
  onError: _UnicloudDbOnError;
}>;

/** 数据库查询组件，对 uni-clientdb 的 js 库的再封装 */
type _UnicloudDb = DefineComponent<_UnicloudDbProps>;

/** 数据库查询组件实例 */
type _UnicloudDbInstance = InstanceType<_UnicloudDb>;

export type {
  _UnicloudDbSpaceInfoProvider as UnicloudDbSpaceInfoProvider,
  _UnicloudDbSpaceInfo as UnicloudDbSpaceInfo,
  _UnicloudDbPageData as UnicloudDbPageData,
  _UnicloudDbLoadtime as UnicloudDbLoadtime,
  _UnicloudDbLoadDataOptions as UnicloudDbLoadDataOptions,
  _UnicloudDbLoadDataCallback as UnicloudDbLoadDataCallback,
  _UnicloudDbLoadData as UnicloudDbLoadData,
  _UnicloudDbLoadMore as UnicloudDbLoadMore,
  _UnicloudDbClear as UnicloudDbClear,
  _UnicloudDbReset as UnicloudDbReset,
  _UnicloudDbRefresh as UnicloudDbRefresh,
  _UnicloudDbId as UnicloudDbId,
  _UnicloudDbRemoveOptions as UnicloudDbRemoveOptions,
  _UnicloudDbRemove as UnicloudDbRemove,
  _UnicloudDbAddOptions as UnicloudDbAddOptions,
  _UnicloudDbAdd as UnicloudDbAdd,
  _UnicloudDbUpdateOptions as UnicloudDbUpdateOptions,
  _UnicloudDbUpdate as UnicloudDbUpdate,
  _UnicloudDbOnLoad as UnicloudDbOnLoad,
  _UnicloudDbOnError as UnicloudDbOnError,
  _UnicloudDbProps as UnicloudDbProps,
  _UnicloudDb as UnicloudDb,
  _UnicloudDbInstance as UnicloudDbInstance,
};

declare module "vue" {
  export interface GlobalComponents {
    /**
     * 数据库查询组件，对 uni-clientdb 的 js 库的再封装
     ***
     * [👉🏻点击查看组件文档](https://doc.dcloud.net.cn/uniCloud/unicloud-db.html)
     * |
     * [Netlify 使用说明](https://uni-typed.netlify.app/)
     * |
     * [Cloudflare 使用说明](https://uni-typed.pages.dev/)
     */
    UnicloudDb: _UnicloudDb;
  }
}

declare global {
  namespace UniHelper {
    /**
     * 服务商
     *
     * aliyun 阿里云
     *
     * tencent 腾讯云
     */
    export type UnicloudDbSpaceInfoProvider = _UnicloudDbSpaceInfoProvider;
    /** 服务空间信息 */
    export interface UnicloudDbSpaceInfo extends _UnicloudDbSpaceInfo {}
    /**
     * 分页策略
     *
     * add 下一页的数据追加到之前的数据中，常用于滚动到底加载下一页
     *
     * replace 替换当前数据，常用于 PC 式交互，列表底部有页码分页按钮
     */
    export type UnicloudDbPageData = _UnicloudDbPageData;
    /**
     * 加载数据时机
     *
     * auto 页面就绪后或属性变化后加载数据
     *
     * onready 页面就绪后不自动加载数据，属性变化后加载，适合在 onready 中接收上个页面的参数作为 where 条件时
     *
     * manual 手动模式，不自动加载数据，如果涉及到分页，需要先手动修改当前页再调用加载数据
     */
    export type UnicloudDbLoadtime = _UnicloudDbLoadtime;
    export interface UnicloudDbLoadDataOptions
      extends _UnicloudDbLoadDataOptions {}
    export interface UnicloudDbLoadDataCallback
      extends _UnicloudDbLoadDataCallback {}
    /**
     * 手动加载数据
     *
     * @param param.clear 是否清空数据和分页信息，默认为 false
     * @param callback 回调函数，加载数据完或加载失败后触发
     */
    export interface UnicloudDbLoadData extends _UnicloudDbLoadData {}
    /** 加载更多数据，每加载成功一次，当前页 +1 */
    export interface UnicloudDbLoadMore extends _UnicloudDbLoadMore {}
    /** 清空已加载的数据，但不会重置当前分页信息 */
    export interface UnicloudDbClear extends _UnicloudDbClear {}
    /** 重置当前分页信息，但不会清空已加载的数据 */
    export interface UnicloudDbReset extends _UnicloudDbReset {}
    /** 清空并重新加载当前页面数据 */
    export interface UnicloudDbRefresh extends _UnicloudDbRefresh {}
    /** 单个数据 id */
    export type UnicloudDbId = _UnicloudDbId;
    export interface UnicloudDbRemoveOptions extends _UnicloudDbRemoveOptions {}
    /** 删除一个 item */
    export interface UnicloudDbRemove extends _UnicloudDbRemove {}
    export interface UnicloudDbAddOptions extends _UnicloudDbAddOptions {}
    /** 新增一个 item */
    export interface UnicloudDbAdd extends _UnicloudDbAdd {}
    export interface UnicloudDbUpdateOptions extends _UnicloudDbUpdateOptions {}
    /** 更新一个 item */
    export interface UnicloudDbUpdate extends _UnicloudDbUpdate {}
    /**
     * 成功回调
     *
     * 联网返回结果后，若希望先修改下数据再渲染界面，则在本方法里对 data 进行修改
     *
     * @param data 当前查询结果
     * @param ended 是否有更多数据
     * @param pagination 分页信息
     * @param pagination.size 每页数据量
     * @param pagination.count 数据总量
     */
    export interface UnicloudDbOnLoad extends _UnicloudDbOnLoad {}
    /** 失败回调 */
    export interface UnicloudDbOnError extends _UnicloudDbOnError {}
    /** 数据库查询组件属性 */
    export type UnicloudDbProps = _UnicloudDbProps;
    /** 数据库查询组件，对 uni-clientdb 的 js 库的再封装 */
    export type UnicloudDb = _UnicloudDb;
    /** 数据库查询组件实例 */
    export type UnicloudDbInstance = _UnicloudDbInstance;
  }
}
