<script setup lang="ts">
import { computed, ref } from "vue";
import ProjectPreview from "../components/ProjectPreview.vue";
import { categories, projects } from "../project-data";

const category = ref<(typeof categories)[number]>("全部");
const visibleProjects = computed(() => category.value === "全部" ? projects : projects.filter((project) => project.category === category.value));
</script>

<template>
  <main>
    <section id="about" class="hero wrap" aria-labelledby="page-title">
      <p class="eyebrow">PERSONAL PROJECTS · 2026</p>
      <h1 id="page-title">我做过的一些项目。</h1>
      <p class="hero-copy">这里收录个人开发、AI 实验和开源工具。每个项目包含预览、简介、项目价值、技术栈与独立详情页面。</p>
    </section>

    <section class="catalog wrap" aria-label="项目列表">
      <div class="catalog-toolbar">
        <div class="filters" aria-label="项目分类">
          <button
            v-for="item in categories"
            :key="item"
            type="button"
            :class="{ active: category === item }"
            :aria-pressed="category === item"
            @click="category = item"
          >{{ item }}</button>
        </div>
        <span>{{ visibleProjects.length }} 个项目</span>
      </div>

      <div class="project-grid">
        <RouterLink v-for="project in visibleProjects" :key="project.slug" class="project-card" :to="`/projects/${project.slug}`">
          <ProjectPreview :variant="project.preview" />
          <div class="project-content">
            <div class="project-title-row"><h2>{{ project.title }}</h2><span aria-hidden="true">↗</span></div>
            <p class="project-description">{{ project.description }}</p>
            <p class="project-value"><span>价值</span>{{ project.value }}</p>
            <div class="project-meta">
              <span v-for="item in project.stack.slice(0, 2)" :key="item">{{ item }}</span>
              <time>{{ project.year }}</time>
            </div>
          </div>
        </RouterLink>
      </div>
    </section>
  </main>
</template>
