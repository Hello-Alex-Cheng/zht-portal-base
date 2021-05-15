/* eslint-disable */

import { createApp, App } from 'vue'
import AppComp from './App.vue'
import router from './router'
import { store } from './store'

let instance: App

function render() {
  // @ts-ignore
  instance = createApp(AppComp).use(store).use(router).mount('#vue-base-app')
}

/**
 * @name __POWERED_BY_QIANKUN__ Boolean
 * @name __INJECTED_PUBLIC_PATH_BY_QIANKUN__ http://localhost:9090/ (子应用应用路径)
 */

// @ts-ignore
// 如果子应用是独立运行，就直接render
if (!window.__POWERED_BY_QIANKUN__) {
  // 独立运行
  render()
} else {
  // qiankun 将会在微应用 bootstrap 之前注入一个运行时的 publicPath 变量，你需要做的是在微应用的 entry js 的顶部添加如下代码：
  // runtime publicPath 主要解决的是微应用动态载入的 脚本、样式、图片 等地址不正确的问题。

  // @ts-ignore
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

export async function bootstrap(params: object) {
  console.log('subapp bootstraped')
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(params: { user: Object }) {
  // 替代 vue2.0 中的 Vue.prototype
  // instance.config.globalProperties.$parentData = params.user
  console.log('render')
  render()
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props: object) {
  console.log('subapp destroyed')
  // @ts-ignore
  // instance.$destroy()

  // @ts-ignore
  // instance = null
}
