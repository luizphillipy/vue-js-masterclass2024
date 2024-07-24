<script setup lang="ts">
import {supabase} from '@/lib/supabaseClient'
import Swiper from '@/components/swiper.vue'
import ImageShow from '@/components/ImageShow.vue'
import { ref } from 'vue'
console.log(supabase)
const list = [
  {id:0, image:''}
]
const index = ref(0)
</script>

<template>
  <div class="p-10 h-[100vh] bg-teal-600 overflow-auto">
    <RouterView />
  </div>
  <swiper :list="list" :index="index">
    <template v-slot="{item}">
      <ImageShow
      v-bind="item"
      />
    </template>

  </swiper>
</template>
