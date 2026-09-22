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
      { text: '交流与反馈', link: 'https://pd.qq.com/s/g6yra9f2t?b=9' }
    ],

    // 针对 /tutorial/ 教程页面开启专用左侧文档树侧边栏
    sidebar: {
      '/tutorial/': [
        {
          text: '📖 AI 大模型配置指南',
          items: [
            { text: '🔒 隐私与安全承诺', link: '/tutorial/' },
            {
              text: '🚀 主流平台配置',
              collapsed: false,
              items: [
                { text: '1. DeepSeek (深度求索)', link: '/tutorial/deepseek' },
                { text: '2. Kimi (月之暗面)', link: '/tutorial/kimi' },
                { text: '3. 豆包 (火山引擎)', link: '/tutorial/doubao' }
              ]
            },
            { text: '📱 App 内填报说明', link: '/tutorial/app-config' },
            { text: '❓ 常见报错排查 (FAQ)', link: '/tutorial/faq' }
          ]
        }
      ]
    },

    socialLinks: [
      // 右上角 GitHub 图标：点击直接跳到你的 GitHub 项目仓库
      { icon: 'github', link: 'https://github.com/may-sherry/GrowthNote' }
    ],

    footer: {
      message: 'Released under the MIT License. · <a href="/GrowthNote/privacy" style="text-decoration: underline; opacity: 0.8;">隐私政策</a>',
      copyright: 'Copyright © 2026-present GrowthNote'
    }
  }
})
