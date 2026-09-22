---
# ==============================================================================
# 第一部分：YAML 配置区 (Frontmatter)
# 作用：定义首页大屏 (Hero)
# ==============================================================================
layout: home

hero:
  name: "成长小记"
  text: "GrowthNote"
  tagline: 搭建多维成长体系，见证你每一次微小的进步
  image:
    src: /logo.png
    alt: GrowthNote Logo
  actions:
    - theme: brand
      text: 立即下载 APK
      link: /download
    - theme: alt
      text: AI 配置教程 📖
      link: /tutorial/
    - theme: alt
      text: 实战使用示例 ✨
      link: /examples
---

<style>
/* 精准对齐：Hero 图片与下方卡片右边缘对齐 */
@media (min-width: 960px) {
  .VPHomeHero .container {
    max-width: 1152px !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .VPHomeHero .image {
    display: flex !important;
    justify-content: flex-end !important;
  }
  .VPHomeHero .image-container {
    width: 240px !important;
    height: 240px !important;
    margin-left: auto !important;
    margin-right: 0 !important;
  }
  .VPHomeHero .image-src {
    max-width: 240px !important;
    max-height: 240px !important;
    border-radius: 20px; /* 圆角契合下方卡片风格 */
  }
  .VPHomeHero .image-bg {
    width: 240px !important;
    height: 240px !important;
    left: auto !important;
    right: 0 !important;
  }
}
@media (max-width: 960px) {
  .VPHomeHero .image {
    justify-content: center !important;
  }
  .VPHomeHero .image-container {
    margin: 0 auto !important;
  }
}
/* 调小首页 Hero 图片尺寸，更加精致 */





/* 核心功能亮点深度展示区 */
.showcase-wrapper {
  max-width: 1152px;
  margin: 48px auto 60px;
  padding: 0; /* 桌面端去掉内边距，让卡片向外扩展对齐 Hero */
}
@media (max-width: 960px) {
  .showcase-wrapper {
    padding: 0 24px; /* 移动端保留内边距防贴边 */
  }
}
.showcase-header {
  text-align: center;
  margin-bottom: 40px;
}
.showcase-title {
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--vp-c-text-1);
}
.showcase-subtitle {
  font-size: 1.05rem;
  color: var(--vp-c-text-2);
  margin-top: 8px;
}

/* 两列大功能卡片网格 */
.showcase-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
@media (max-width: 768px) {
  .showcase-grid {
    grid-template-columns: 1fr;
  }
}

.feature-deep-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 28px;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  display: flex;
  flex-direction: column;
}
.feature-deep-card:hover {
  transform: translateY(-3px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.05);
}

.card-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  width: fit-content;
  margin-bottom: 14px;
}
.card-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 10px;
}
.card-desc {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  line-height: 1.65;
  margin-bottom: 16px;
}
.card-points {
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px dashed var(--vp-c-divider);
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
}
.card-points li {
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.card-points li::before {
  content: "✓";
  color: var(--vp-c-brand-1);
  font-weight: bold;
}

/* 底部行动召唤 Banner (CTA) */
.cta-banner {
  margin-top: 48px;
  padding: 36px 32px;
  border-radius: 20px;
  background: linear-gradient(135deg, var(--vp-c-brand-soft) 0%, var(--vp-c-bg-soft) 100%);
  border: 1px solid var(--vp-c-brand-soft);
  text-align: center;
}
.cta-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--vp-c-text-1);
  margin-bottom: 8px;
}
.cta-desc {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  max-width: 580px;
  margin: 0 auto 20px;
}
.cta-btn-group {
  display: flex;
  justify-content: flex-start;
  gap: 16px;
  flex-wrap: wrap;
}
.cta-btn-primary {
  background: var(--vp-c-brand-1);
  color: white !important;
  padding: 10px 24px;
  border-radius: 24px;
  font-weight: 700;
  text-decoration: none !important;
  transition: opacity 0.2s;
}
.cta-btn-primary:hover {
  opacity: 0.9;
}
.cta-btn-secondary {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1) !important;
  padding: 10px 22px;
  border-radius: 24px;
  font-weight: 600;
  text-decoration: none !important;
  transition: border-color 0.2s;
}
.cta-btn-secondary:hover {
  border-color: var(--vp-c-brand-1);
}

/* 强制 Hero 按钮在桌面端排成一行 */
.VPHomeHero .actions {
  display: flex !important;
  flex-wrap: nowrap !important;
  gap: 12px !important;
  justify-content: flex-start;
}
.VPHomeHero .action .VPButton {
  padding: 0 18px !important; /* 缩小左右内边距让按钮更紧凑 */
  white-space: nowrap !important; /* 防止文字换行 */
}
@media (max-width: 768px) {
  .VPHomeHero .actions {
    flex-wrap: wrap !important; /* 移动端屏幕太小，允许换行 */
  }
}

</style>

<div class="showcase-wrapper">
<div class="showcase-header">
<div class="showcase-title">✨ 为专注与长久坚持而生</div>
<div class="showcase-subtitle">全功能永久免费、无广告干扰 · 摒弃沉重复杂的传统商业软件，用极简纯粹找回生活的掌控感</div>
</div>
<div class="showcase-grid">
<div class="feature-deep-card">
<span class="card-badge">体系化分类</span>
<div class="card-title">📁 像整理文件夹一样规划成长</div>
<div class="card-desc">告别扁平堆积的待办清单。独创树状文件夹架构，为你真正值得长期投入的学习、技能与生活目标分门别类，层级分明，条理清晰。</div>
<ul class="card-points">
<li>支持跨层级灵活拖拽移动</li>
<li>常用事项一键长按加入 ❤️ 快捷收藏</li>
<li>支持自定义拖拽排序与首字母智能排版</li>
</ul>
</div>
<div class="feature-deep-card">
<span class="card-badge">双轨记录哲学</span>
<div class="card-title">⏱️ 专注计时与“理性+感性”双轨记录</div>
<div class="card-desc">独创“事项内容（客观做了什么）+ 事项想法（主观心流体会）”双轨记录法。分别支持各 800 字独立撰写与最多 9 张配图，既有理性的成长轨迹，又有感性的生活温度。</div>
<ul class="card-points">
<li>支持专注正计时、番茄倒计时与即时快记</li>
<li>【事项内容 + 事项想法】各支持 800 字独立记录</li>
<li>支持最多 9 张高清配图，留住真实的专注瞬间</li>
</ul>
</div>
<div class="feature-deep-card">
<span class="card-badge">反内耗习惯哲学</span>
<div class="card-title">🌱 允许请假，给习惯一份宽容</div>
<div class="card-desc">市面上的习惯打卡断签一天就令人崩溃自责。我们创新性地引入“请假条”机制，疲惫时勇敢原谅自己，仅限当日真实打卡，不搞虚假补卡。</div>
<ul class="card-points">
<li>直观的二元勾叉状态与打卡热力图</li>
<li>真诚的请假条碎碎念，诚实面对真实当下</li>
<li>以月为单位，回顾每月习惯养成与请假轨迹</li>
</ul>
</div>
<div class="feature-deep-card">
<span class="card-badge">数据洞察与回望</span>
<div class="card-title">📊 每日时间轴与多维统计透视</div>
<div class="card-desc">自动串联你的每日专注轨迹，时间流向清晰可视化。一眼看清精力在学习、工作与运动中的真实投入占比，科学复盘每一天。</div>
<ul class="card-points">
<li>每日时间轴串联图文，记录真实生活轨迹</li>
<li>时间分配占比饼图，多维度自由筛选透视</li>
<li>支持多维度热力图分布，直观展现专注密度</li>
</ul>
</div>
<div class="feature-deep-card">
<span class="card-badge">极客隐私创新</span>
<div class="card-title">🤖 自带密钥 (BYOK) 的 AI 报告</div>
<div class="card-desc">拒绝贩卖用户隐私。创新采用 Bring Your Own Key 模式，用户自由配置 DeepSeek / Kimi / 豆包等大模型凭证，一键提炼你的成长轨迹。</div>
<ul class="card-points">
<li>一键生成智能日报、周报、月报与年报</li>
<li>敏感图片绝对脱敏，仅纯文本加密直连</li>
<li>生成的报告永久本地留存，随时回顾复盘</li>
</ul>
</div>
<div class="feature-deep-card">
<span class="card-badge">私有云与纯本地</span>
<div class="card-title">☁️ 坚果云 WebDAV 云同步</div>
<div class="card-desc">纯本地优先架构，数据 100% 掌握在自己手中。无需依赖中心化商业服务器，轻巧全量同步核心数据，差异增量上传新增照片。</div>
<ul class="card-points">
<li>SQLite 纯本地沙盒存储，换机无损迁移</li>
<li>轻量级数据快速同步，照片仅增量上传</li>
<li>全流程相对路径架构，彻底告别死链风险</li>
</ul>
</div>
</div>
<div class="cta-banner">
<div class="cta-title">准备好开启你的成长小记了吗？</div>
<div class="cta-desc">纯净本地、完全免费、没有任何烦人开屏广告。从今天的一刻专注开始，见证你每一次微小的进步。</div>
<div class="cta-btn-group">
<a href="/GrowthNote/download" class="cta-btn-primary">立即下载体验 Android 版</a>
<a href="https://pd.qq.com/s/g6yra9f2t?b=9" target="_blank" class="cta-btn-secondary">去 QQ 频道打个卡 💬</a>
</div>
</div>
</div>
