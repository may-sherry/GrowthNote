import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "GrowthNote",
  description: "成长小记官方网站",
  
  // 关键：因为是挂载在 [用户名].github.io/GrowthNote/ 路径下，base 必须填写仓库名
  base: '/GrowthNote/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '更新日志', link: '/changelog' },
      { text: '投喂支持', link: '/sponsor' },
      { text: '互动留言', link: '/comments' },
      { text: '隐私政策', link: '/privacy' }
    ],

    // 禁用左侧冗余侧边栏，让正文全屏居中展示，干净纯粹
    sidebar: false,

    socialLinks: [
      // 右上角 GitHub 图标：点击直接跳到你的 GitHub 项目仓库
      { icon: 'github', link: 'https://github.com/may-sherry/GrowthNote' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present GrowthNote'
    }
  }
})