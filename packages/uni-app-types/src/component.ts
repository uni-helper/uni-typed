import type {
  AllowedComponentProps,
  ComponentCustomProps,
  ComponentOptionsMixin,
  ComputedOptions,
  DefineComponent,
  EmitsOptions,
  ExtractPropTypes,
  MethodOptions,
  VNodeProps,
} from "vue";

type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps;

type _AnyRecord = Record<string, any>;

type _Component<P extends _AnyRecord = _AnyRecord> = DefineComponent<
  {},
  {},
  {},
  ComputedOptions,
  MethodOptions,
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  EmitsOptions,
  string,
  PublicProps,
  Readonly<ExtractPropTypes<P>>
>;

export type { _AnyRecord as AnyRecord, _Component as Component };

declare global {
  namespace UniHelper {
    export type AnyRecord = _AnyRecord;
    export type Component = _Component;
  }
}
