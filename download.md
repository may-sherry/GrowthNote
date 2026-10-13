# 📥 下载 GrowthNote (成长小记)

<p style="display: flex; gap: 8px; margin-top: 12px; margin-bottom: 16px; flex-wrap: wrap;">
  <img src="https://img.shields.io/github/v/release/may-sherry/GrowthNote?label=最新版本&color=2ea44f" alt="Version" />
  <img src="https://img.shields.io/github/downloads/may-sherry/GrowthNote/total?label=总下载量&color=blue" alt="Downloads" />
  <img src="https://img.shields.io/badge/平台-Android%208.0+-orange" alt="Platform" />
</p>

感谢你选择体验成长小记！由于我们目前处于初期版本，并未上架国内各大应用商店，请通过以下官方渠道下载。

::: warning ⚠️ 安装说明
安装时，部分手机（如华为、小米、vivo 等）可能会提示**“未知的应用”**或**“安全检测提醒”**，这是各品牌系统针对**非官方应用商店下载的安装包**的通用安全提示，属于正常现象。  
请放心，本软件**纯本地单机运行，无任何联网收集隐私的代码**。  
请放心点击**“继续安装”**或在安全中心选择**“允许本次安装”**即可。  
:::

<script setup>
import { ref } from 'vue'

const toastText = ref('')
const isToastVisible = ref(false)
let toastTimer = null

const triggerToast = (text) => {
  toastText.value = text
  isToastVisible.value = true
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    isToastVisible.value = false
  }, 2800)
}

const onOfficialDownload = () => {
  triggerToast('🚀 软件正在内部打磨与小范围测试中，公测版本即将上线，敬请期待！')
}
</script>

## 官方下载通道

<div class="download-btn-group">
  <button class="download-btn official-btn" @click="onOfficialDownload" type="button">
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
    </svg>
    <span>官网直链下载 (APK)</span>
  </button>
</div>

<!-- 吐司提示条 -->
<Transition name="toast-fade">
  <div v-if="isToastVisible" class="custom-toast">
    <div class="toast-content">
      {{ toastText }}
    </div>
  </div>
</Transition>

<br>

## 📦 应用商店上架排期

成长小记目前正积极筹备各大官方应用商店的审核与上线：

<div class="store-status-grid">
  <div class="store-status-card">
    <div class="store-info">
      <span class="store-icon">📱</span>
      <div>
        <div class="store-name">国内主流应用商店</div>
        <div class="store-sub">华为 / 小米 / vivo / OPPO / 荣耀 等厂商应用市场</div>
      </div>
    </div>
    <span class="status-badge planning">📋 资质认证与上架规划排期中</span>
  </div>

  <div class="store-status-card">
    <div class="store-info">
      <span class="store-icon">🌐</span>
      <div>
        <div class="store-name">Google Play 商店</div>
        <div class="store-sub">Google 国际版官方应用商店</div>
      </div>
    </div>
    <span class="status-badge review">⏳ 国际版上架筹备与审核规划中</span>
  </div>
</div>

::: tip 💡 提示
在各应用商店完成上架审核前，请优先通过本页面的**【官网直链下载】**获取最新官方正式安装包。各大应用商店审核通过后，将第一时间在本页面开放对应的商店直达入口！
:::

<style scoped>
.download-btn-group {
  display: flex;
  gap: 16px;
  margin-top: 24px;
  flex-wrap: wrap;
}

.download-btn {
  border: none;
  cursor: pointer;
  padding: 14px 28px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.2s ease;
  user-select: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.download-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  opacity: 0.95;
}

.download-btn:active {
  transform: translateY(0);
}

.official-btn {
  background-color: #2ea44f;
  color: #ffffff;
}

/* 商店状态列表 */
.store-status-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
  margin-bottom: 20px;
}

.store-status-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft, #f6f8fa);
  border: 1px solid var(--vp-c-divider, rgba(60, 60, 67, 0.12));
  flex-wrap: wrap;
  gap: 12px;
}

.store-info {
  display: flex;
  align-items: center;
  gap: 14px;
}

.store-icon {
  font-size: 24px;
  line-height: 1;
}

.store-name {
  font-weight: 600;
  font-size: 15px;
  color: var(--vp-c-text-1, #24292f);
}

.store-sub {
  font-size: 13px;
  color: var(--vp-c-text-2, #57606a);
  margin-top: 2px;
}

.status-badge {
  font-size: 13px;
  font-weight: 500;
  padding: 6px 14px;
  border-radius: 20px;
  white-space: nowrap;
}

.status-badge.planning {
  background-color: rgba(245, 158, 11, 0.12);
  color: #d97706;
  border: 1px solid rgba(245, 158, 11, 0.25);
}

.status-badge.review {
  background-color: rgba(59, 130, 246, 0.12);
  color: #2563eb;
  border: 1px solid rgba(59, 130, 246, 0.25);
}

/* Toast 样式 */
.custom-toast {
  position: fixed;
  top: 72px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99999;
  pointer-events: none;
}

.toast-content {
  background: rgba(28, 28, 30, 0.92);
  color: #ffffff;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.28);
  border: 1px solid rgba(255, 255, 255, 0.16);
  text-align: center;
  white-space: nowrap;
}

.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.toast-fade-enter-from {
  opacity: 0;
  transform: translateY(-16px);
}

.toast-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

## 历史版本更新

我们会在 [更新日志](/changelog) 页面持续同步每一个版本的改动。如果你遇到了 bug 或者有好的建议，欢迎前往 [QQ 频道交流群](https://pd.qq.com/s/g6yra9f2t?b=9) 反馈！
