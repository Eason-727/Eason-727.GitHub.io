<script setup>
import { useData } from 'vitepress'
import Starrysky from './components/Starrysky.vue';
import profieldcard from './components/profieldcard.vue';
import NotFound from './components/NotFound.vue';
import MainLayout from './components/MainLayout.vue';
import articleCard from './components/article-card.vue';
import articleCardmini from './components/article-cardmini.vue';
import Home from './components/Home.vue';
import { ref, onMounted } from 'vue'
import postinfo from './components/postinfo.vue';

import moreFuc from './components/moreFuc.vue';
import tocCard from './components/toc-card.vue';
// https://vitepress.dev/reference/runtime-api#usedata
const { page, frontmatter, theme } = useData()
import { data as posts } from './utils/posts.data.js'
const isMounted = ref(false) // 新增标志位
onMounted(() => {
    isMounted.value = true // 设置标志位为 true
})
</script>

<template>

  <keep-alive>
    <ClientOnly>
      <Starrysky />
    </ClientOnly>
  </keep-alive>
  <NotFound v-if="page.isNotFound" />
  <div class="nullpage" v-else-if="frontmatter.layout === 'customPage'">
    <Content />
  </div>

  <MainLayout v-else-if="frontmatter.layout === 'home'">
    <template #navbar>
    </template>
    <template #header>
      <Home />
    </template>
    <template #main-content>
      <div class="a-card vp-doc">
        <Content />
      </div>
      <div class="vp-doc" v-for="post in posts" :key="post.link" v-if="isMounted">
        <articleCard :post="post" />
      </div>
    </template>
    <template #sidebar-non-stay>
      <profieldcard />
      <div class="a-card vp-doc">
        <moreFuc />
      </div>
    </template>
    <template #sidebar-stay>
      <profieldcard />
    </template>
  </MainLayout>
  <MainLayout v-else>
    <template #navbar>
    </template>
    <template #header>
      <div class="header-info" style="display: flex; width: 100%; justify-content: center;">
        <postinfo/>
      </div>
    </template>
    <template #main-content>
      <div class="a-card vp-doc">
        <Content />
      </div>

    </template>
    <template #sidebar-non-stay>
      <profieldcard />
    </template>
    <template #sidebar-stay>
      <tocCard :posts="posts" :currentUrl="page.relativePath" />
      <div class="vp-doc" v-for="post in posts" :key="post.link">
        <articleCardmini :post="post" />
      </div>
    </template>
  </MainLayout>
</template>
