<template>
  <div class="long-image-wrapper">
    <div 
      class="long-image-container" 
      :class="{ expanded: isExpanded }" 
      @click="isExpanded = !isExpanded"
    >
      <img :src="withBase(src)" :alt="alt" class="no-zoom" />
      <div class="expand-overlay" v-if="!isExpanded">
        <span class="expand-text">👇 点击展开完整长图</span>
      </div>
    </div>
    <div class="collapse-btn-wrapper" v-if="isExpanded">
      <button class="collapse-btn" @click="isExpanded = false">收起长图 👆</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { withBase } from 'vitepress'
const props = defineProps({
  src: String,
  alt: String
})
const isExpanded = ref(false)
</script>

<style scoped>
.long-image-wrapper {
  margin: 24px 0;
}
.long-image-container {
  position: relative;
  max-height: 450px;
  overflow: hidden;
  cursor: zoom-in;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  transition: max-height 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: var(--vp-c-bg-soft);
}
.long-image-container.expanded {
  max-height: none;
  cursor: zoom-out;
}
.long-image-container img {
  width: 100%;
  display: block;
  object-fit: cover;
  object-position: top;
}
.expand-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  background: linear-gradient(to bottom, transparent, var(--vp-c-bg) 90%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 20px;
  pointer-events: none;
}
.expand-text {
  background: var(--vp-c-brand-1);
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  pointer-events: auto;
}
.collapse-btn-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}
.collapse-btn {
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-1);
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid var(--vp-c-divider);
  transition: background 0.2s;
}
.collapse-btn:hover {
  background: var(--vp-c-default-mute);
}
</style>
