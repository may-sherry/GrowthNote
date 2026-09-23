<script setup>
import DefaultTheme from 'vitepress/theme'
import { ref, onMounted, onUnmounted } from 'vue'

const { Layout } = DefaultTheme

const previewSrc = ref('')
const previewAlt = ref('')

const openPreview = (src, alt = '') => {
  previewSrc.value = src
  previewAlt.value = alt
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

const closePreview = () => {
  previewSrc.value = ''
  previewAlt.value = ''
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

const handleGlobalClick = (e) => {
  const target = e.target
  if (target && target.tagName === 'IMG') {
    // 排除 logo、长图展开按钮或带 no-zoom 标识的图片
    if (
      target.classList.contains('no-zoom') ||
      target.closest('.no-zoom') ||
      target.closest('.VPNavBarTitle') ||
      target.closest('.VPNav')
    ) {
      return
    }
    // 仅对内容区图片生效
    if (target.closest('.vp-doc') || target.closest('.VPDoc') || target.closest('main')) {
      e.preventDefault()
      e.stopPropagation()
      openPreview(target.currentSrc || target.src, target.alt)
    }
  }
}

const handleKeyDown = (e) => {
  if (e.key === 'Escape' && previewSrc.value) {
    closePreview()
  }
}

onMounted(() => {
  window.addEventListener('click', handleGlobalClick, true)
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('click', handleGlobalClick, true)
    window.removeEventListener('keydown', handleKeyDown)
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <Layout />

  <!-- 全屏大图灯箱预览层 -->
  <Transition name="lightbox-fade">
    <div 
      v-if="previewSrc" 
      class="lightbox-overlay"
      @click="closePreview"
    >
      <!-- 右上角关闭按钮 -->
      <button class="lightbox-close-btn" @click.stop="closePreview" title="关闭 (Esc)">
        ✕
      </button>

      <!-- 底部提示文字 -->
      <div class="lightbox-tip">
        点击背景任意处或按 Esc 即可退出全屏
      </div>

      <!-- 高清放大图片 -->
      <img 
        :src="previewSrc" 
        :alt="previewAlt" 
        class="lightbox-image"
        @click.stop
      />
    </div>
  </Transition>
</template>

<style scoped>
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.88);
  backdrop-filter: blur(8px);
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  cursor: zoom-out;
}

.lightbox-image {
  max-width: 95vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
  cursor: default;
  user-select: none;
}

.lightbox-close-btn {
  position: absolute;
  top: 24px;
  right: 28px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-size: 22px;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.2s ease;
  z-index: 1000000;
}

.lightbox-close-btn:hover {
  background: rgba(255, 255, 255, 0.35);
  transform: scale(1.08);
}

.lightbox-tip {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.75);
  font-size: 13px;
  background: rgba(0, 0, 0, 0.5);
  padding: 6px 18px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  pointer-events: none;
  white-space: nowrap;
}

.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.25s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}
</style>
