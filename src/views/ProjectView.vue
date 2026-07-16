<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import ProjectPreview from "../components/ProjectPreview.vue";
import { getProject } from "../project-data";

const route = useRoute();
const project = computed(() => getProject(String(route.params.slug)));
</script>

<template>
  <main v-if="project" class="project-page wrap">
    <RouterLink class="back-link" to="/">← 返回项目列表</RouterLink>
    <section class="project-hero">
      <div class="detail-tags"><span>{{ project.category }}</span><time>{{ project.year }}</time></div>
      <h1>{{ project.title }}</h1>
      <p>{{ project.description }}</p>
      <div class="detail-actions">
        <a class="primary-button" :href="project.github" target="_blank" rel="noreferrer">查看 GitHub ↗</a>
        <a v-if="project.demo" class="secondary-button" :href="project.demo" target="_blank" rel="noreferrer">在线体验 ↗</a>
      </div>
    </section>
    <ProjectPreview :variant="project.preview" large />
    <section class="project-details">
      <div class="detail-copy">
        <h2>项目介绍</h2>
        <p>{{ project.introduction }}</p>
        <h2>项目价值</h2>
        <p class="value-box">{{ project.value }}</p>
      </div>
      <dl>
        <div><dt>项目类型</dt><dd>{{ project.category }}</dd></div>
        <div><dt>技术栈</dt><dd>{{ project.stack.join(" · ") }}</dd></div>
        <div><dt>项目状态</dt><dd>{{ project.status }}</dd></div>
        <div><dt>年份</dt><dd>{{ project.year }}</dd></div>
      </dl>
    </section>
  </main>
  <main v-else class="not-found wrap">
    <p class="eyebrow">404</p>
    <h1>没有找到这个项目。</h1>
    <RouterLink class="back-link" to="/">← 返回项目列表</RouterLink>
  </main>
</template>
