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
      { text: '隐私政策', link: '/privacy' },
      { text: '关于作者', link: 'https://may-sherry.github.io' } // 跳转个人主站点
    ],

    sidebar: [
      {
        text: '使用指引',
        items: [
          { text: '产品介绍', link: '/' },
          { text: '版本历程 (Changelog)', link: '/changelog' },
          { text: '隐私政策与协议', link: '/privacy' }
        ]
      }
    ],

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