<script setup lang="ts">
import {supabase} from '@/lib/supabaseClient'
console.log(supabase)
</script>

<template>
  <div class="p-10 h-[100vh] bg-teal-600 overflow-auto">
    <RouterView />
  </div>
</template>
