---
# ==============================================================================
# 第一部分：YAML 配置区 (Frontmatter)
# 作用：定义首页大屏 (Hero) 与核心特性 (Features)
# ==============================================================================
layout: home

hero:
  name: "成长小记"
  text: "GrowthNote"
  tagline: 搭建成长体系，见证你每一次微小的进步
  image:
    src: /logo.png
    alt: GrowthNote Logo
  actions:
    # 1. 立即下载 APK（品牌主按钮）
    - theme: brand
      text: 立即下载 APK
      link: /download
    # 2. 查看更新日志
    - theme: alt
      text: 查看更新日志
      link: /changelog
    # 3. 投喂开发者
    - theme: alt
      text: 投喂开发者 🧋
      link: /sponsor
    # 4. 互动留言板
    - theme: alt
      text: 互动留言板 💬
      link: /comments

features:
  - title: 体系化成长看板
    details: 像管理文件一样管理多维度的成长事项，树状层级清晰呈现多维成长脉络。
  - title: 灵活计时与快速记录
    details: 支持专注计时与碎片化补录，随时打卡三餐、体重与各类灵感日常。
  - title: 本地优先与隐私安全
    details: 数据完全归属于你的本地设备，无网络依赖，远离数据泄露风险。
---

<style>
/* 强制缩小首页 Hero 图片尺寸 */
.VPHomeHero .image-src {
  max-width: 200px !important;
  max-height: 200px !important;
}
.VPHomeHero .image-container {
  width: 220px !important;
  height: 220px !important;
}
.VPHomeHero .image-bg {
  width: 200px !important;
  height: 200px !important;
}
@media (max-width: 640px) {
  .VPHomeHero .image-src {
    max-width: 150px !important;
    max-height: 150px !important;
  }
  .VPHomeHero .image-container {
    width: 160px !important;
    height: 160px !important;
  }
}
</style>
