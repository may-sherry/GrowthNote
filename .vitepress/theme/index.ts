import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import LongImage from './components/LongImage.vue'
import type { Theme } from 'vitepress'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('LongImage', LongImage)
  }
} satisfies Theme
