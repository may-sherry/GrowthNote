import DefaultTheme from 'vitepress/theme'
import LongImage from './components/LongImage.vue'
import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('LongImage', LongImage)
  }
} satisfies Theme
