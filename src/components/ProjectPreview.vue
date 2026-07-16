<script setup lang="ts">
defineProps<{ variant: string; large?: boolean }>();
</script>

<template>
  <div :class="['project-preview', `preview-${variant}`, { 'preview-large': large }]" aria-hidden="true">
    <div class="preview-window">
      <div class="preview-toolbar"><i /><i /><i /></div>
      <div class="preview-layout">
        <div class="preview-sidebar"><b /><b /><b /><b /></div>
        <div class="preview-main">
          <span class="preview-heading" />
          <span class="preview-subheading" />
          <div class="preview-blocks"><i /><i /><i /></div>
          <div v-if="large" class="preview-lines"><i /><i /><i /></div>
        </div>
      </div>
    </div>
  </div>
</template>
