# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.0.0-alpha.7](https://github.com/uni-helper/uni-typed/compare/v1.0.0-alpha.6...v1.0.0-alpha.7) (2025-11-21)

### Features

* **uat:** add getRealtimePhoneNumber for Button ([#43](https://github.com/uni-helper/uni-typed/issues/43)) ([ae34a4d](https://github.com/uni-helper/uni-typed/commit/ae34a4dc777c4f0ef6523acbe6f8303dc830f72e)) - by @wtto00
* **uat:** input nicknamereview event related ([#24](https://github.com/uni-helper/uni-typed/issues/24)) ([628318f](https://github.com/uni-helper/uni-typed/commit/628318f50d51d7445eed1cf362a38cd8a6ecd164)) - by @wtto00

### Bug Fixes

* support vue >= 3.4 ([3f18869](https://github.com/uni-helper/uni-typed/commit/3f188696118ee429dfcdd65f941376ab9c15b8f5)) - by @
* textarea 组件 confirm-type 属性支持 return 值 ([#30](https://github.com/uni-helper/uni-typed/issues/30)) ([65a270a](https://github.com/uni-helper/uni-typed/commit/65a270afb4952bf6899b02ceec913ee26d6ea823)) - by @skiyee
* **uat:** 修正组件类型定义，去除一系列 JSX.IntrinsicElements 组件类型定义的 DefineComponent 泛型包裹 ([#32](https://github.com/uni-helper/uni-typed/issues/32)) ([3626dd8](https://github.com/uni-helper/uni-typed/commit/3626dd8765447712e3aa5fd9a485b983a98c0c2b)) - by @Vanisper
* **uat:** fix uni-app-types `_LivePusherProps.aspect` ([#42](https://github.com/uni-helper/uni-typed/issues/42)) ([63c2c5b](https://github.com/uni-helper/uni-typed/commit/63c2c5b50c0fc4a1c8f45868717e49bbc359d1cc)) - by @Cinea4678
* **uut:** fix _UniFormsRulesRule ([59b4c34](https://github.com/uni-helper/uni-typed/commit/59b4c3405c654ad59fba7739b0b627272461ab03)) - by @ModyQyW

## [1.0.0-alpha.6](https://github.com/uni-helper/uni-typed/compare/v1.0.0-alpha.5...v1.0.0-alpha.6) (2024-11-06)

### Bug Fixes

* add CommonProps, close https://github.com/uni-helper/uni-typed/issues/22 ([3ed358f](https://github.com/uni-helper/uni-typed/commit/3ed358ffd6ae5f02354f7fbb6cc51160e0ea394e)) - by @
* CameraFlash torch option ([#23](https://github.com/uni-helper/uni-typed/issues/23)) ([aa87524](https://github.com/uni-helper/uni-typed/commit/aa87524555225bfc3d176722bb2a826e92a49207)) - by @wtto00
* fix tsdocs ([#21](https://github.com/uni-helper/uni-typed/issues/21)) ([fc0877a](https://github.com/uni-helper/uni-typed/commit/fc0877a5dad635e7bfd2f984e51a19ca2c34acb1)) - by @FliPPeDround

## [1.0.0-alpha.5](https://github.com/uni-helper/uni-typed/compare/v1.0.0-alpha.4...v1.0.0-alpha.5) (2024-10-17)

### Bug Fixes

* **uut:** 补充 UniIcons 类型 ([c688b7f](https://github.com/uni-helper/uni-typed/commit/c688b7f200f05b87d48441bf7cbae2001a64a2cb)) - by @

## [1.0.0-alpha.4](https://github.com/uni-helper/uni-typed/compare/v1.0.0-alpha.3...v1.0.0-alpha.4) (2024-09-10)

### ⚠ BREAKING CHANGES

* **uut:** remove UniSearchBarOnInputEvent, update UniSearchBarOnInput types
* **uni-app-components:** require vue@^3.4.21 for defineOptions and shorthand v-bind

### Features

* **uac:** add Ad ([8d4d045](https://github.com/uni-helper/uni-typed/commit/8d4d0453e6660c002f06b8433d945d5726582a56)) - by @ModyQyW
* **uac:** add AdInterstitial ([be449b6](https://github.com/uni-helper/uni-typed/commit/be449b6110a8488fbf5b3d759106761b75ae9ca4)) - by @ModyQyW
* **uac:** add AdRewardedVideo ([483bfcc](https://github.com/uni-helper/uni-typed/commit/483bfccd27b2e91b09849a00620ab2d79a3a6022)) - by @ModyQyW
* **uni-app-components:** add AdContentPage ([3bae235](https://github.com/uni-helper/uni-typed/commit/3bae23596f83d2d39f8abf20b820864309676ee9)) - by @ModyQyW
* **uni-app-components:** add AdDraw ([753606a](https://github.com/uni-helper/uni-typed/commit/753606a4dd34e4591234237c40ca70269856300a)) - by @ModyQyW
* **uni-app-components:** add AdFullscreenVideo ([a0919af](https://github.com/uni-helper/uni-typed/commit/a0919afaa8d7bee5c30d3c376d183265a341b659)) - by @ModyQyW
* **uni-app-components:** add AdInteractive ([2e77196](https://github.com/uni-helper/uni-typed/commit/2e771968962bdb932617d5212fc7ba890cd902f1)) - by @ModyQyW

### Bug Fixes

* fix type errors ([f32681e](https://github.com/uni-helper/uni-typed/commit/f32681e64701affed74c3f83debc3feea4b9ec51)) - by @ModyQyW
* loose peerDependencies ([cb6c14b](https://github.com/uni-helper/uni-typed/commit/cb6c14bbbf02e8bd408861e394ab2fd93697ee6b)) - by @ModyQyW
* **uat:** [Ad] better jsdoc styles ([ab2f5c5](https://github.com/uni-helper/uni-typed/commit/ab2f5c56d355c8bdfbc15bfbc131f60e995045eb)) - by @ModyQyW
* **uat:** [AdInterstitial] better jsdoc styles ([0e76de1](https://github.com/uni-helper/uni-typed/commit/0e76de15a0e363868780097866da5582d18d2777)) - by @ModyQyW
* **uat:** [AdRewardedVideo] better jsdoc styles ([1056746](https://github.com/uni-helper/uni-typed/commit/1056746924c60cca2dee02cb6d5fd1a70beb51d8)) - by @ModyQyW
* **uni-app-components:** add missing slot ([4622ba0](https://github.com/uni-helper/uni-typed/commit/4622ba08f46e8ba9aa15e699006ef2122bd5450f)) - by @ModyQyW
* **uni-app-components:** fix template ([590a6f8](https://github.com/uni-helper/uni-typed/commit/590a6f84fb2278e30229f0304bdfbd73eb05a822)) - by @ModyQyW
* **uni-app-components:** require vue@^3.4.21 for defineOptions and shorthand v-bind ([0033f92](https://github.com/uni-helper/uni-typed/commit/0033f92b8ebd839fc78f82019dea5e06473ed67b)) - by @ModyQyW
* **uni-app-types:** [AdContentPage] better jsdoc styles ([794ee03](https://github.com/uni-helper/uni-typed/commit/794ee034e25a583d25297d68ce55a1543d847190)) - by @ModyQyW
* **uni-app-types:** [AdFullScreenVideo] better jsdoc styles ([01222ce](https://github.com/uni-helper/uni-typed/commit/01222ce2ce023858996675aeeebcd56200b8345d)) - by @ModyQyW
* **uut:** remove UniSearchBarOnInputEvent, update UniSearchBarOnInput types ([2e32d7f](https://github.com/uni-helper/uni-typed/commit/2e32d7f9f1218d9364a92db9b24d283370beaf27)) - by @ModyQyW

## [1.0.0-alpha.3](https://github.com/uni-helper/uni-typed/compare/v1.0.0-alpha.2...v1.0.0-alpha.3) (2024-08-07)

### Bug Fixes

* **uni-app-types:** fix onInput types ([57dedec](https://github.com/uni-helper/uni-typed/commit/57dedec513e43a1c807ef6badb00bea68a465b14)) - by @ModyQyW

## [1.0.0-alpha.2](https://github.com/uni-helper/uni-typed/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2024-08-06)

### ⚠ BREAKING CHANGES

* remove redundant types and reduce dependency on uni-app-types

### Features

* remove redundant types and reduce dependency on uni-app-types ([2b03b3e](https://github.com/uni-helper/uni-typed/commit/2b03b3ee83fbb42614591ea8adca352ce18deda1)) - by @ModyQyW

### Bug Fixes

* fix plugin support ([#10](https://github.com/uni-helper/uni-typed/issues/10)) ([1432fd3](https://github.com/uni-helper/uni-typed/commit/1432fd3855382c0dfa623f056531a6c5b5eddc8c)) - by @PaperStrike
* **uni-types:** fix plugin exports ([939c4f8](https://github.com/uni-helper/uni-typed/commit/939c4f8da7bf23e6bb92a771a6294ea692a17308)) - by @ModyQyW

## [1.0.0-alpha.1](https://github.com/uni-helper/uni-typed/compare/v1.0.0-alpha.0...v1.0.0-alpha.1) (2024-08-02)

**Note:** Version bump only for package @monorepo/uni-types

## 1.0.0-alpha.0 (2024-08-01)

**Note:** Version bump only for package @monorepo/uni-types
