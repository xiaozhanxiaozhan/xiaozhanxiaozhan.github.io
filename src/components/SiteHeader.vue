<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
async function goToAbout() {
  await router.push({ path: "/", hash: "#about" });
}
</script>

<template>
  <header class="site-header wrap">
    <RouterLink class="identity" to="/" aria-label="返回项目主页">
      <span class="avatar">Y</span>
      <span><strong>xiaozhan</strong><small>AI Developer · Personal Projects</small></span>
    </RouterLink>
    <nav aria-label="主要导航">
      <RouterLink to="/">项目</RouterLink>
      <a href="#about" @click.prevent="goToAbout">关于</a>
      <a href="https://github.com/xiaozhanxiaozhan" target="_blank" rel="noreferrer">GitHub ↗</a>
    </nav>
  </header>
</template>
