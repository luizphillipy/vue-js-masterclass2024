<script setup lang="ts">
// import {supabase} from '@/lib/supabaseClient'

import { ref } from 'vue'
import Swiper from './components/swiper.vue';
import ImageShow from './components/ImageShow.vue';
// console.log(supabase)
const list = [
  {
    "id": 0,
    "url": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?fit=crop&w=1024&h=300"
  },
  {
    "id": 1,
    "url": "https://images.unsplash.com/photo-1542029806767-3a4c2b793a11?fit=crop&w=1024&h=300"
  },
  {
    "id": 2,
    "url": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?fit=crop&w=1024&h=300"
  },
  {
    "id": 3,
    "url": "https://images.unsplash.com/photo-1542029806767-3a4c2b793a11?fit=crop&w=1024&h=300"
  },
  {
    "id": 4,
    "url": "https://images.unsplash.com/photo-1542029806767-3a4c2b793a11?fit=crop&w=1024&h=300"
  }
]
const index = ref(0)
</script>

<template>
  <div class="p-10 h-[100vh] bg-teal-600 overflow-auto">
    <RouterView />
  </div>
  <Swiper :list="list" :index="index">
    <template v-slot="{item}">
      <ImageShow
      v-bind:item="item"
      />
    </template>

  </swiper>
</template>
