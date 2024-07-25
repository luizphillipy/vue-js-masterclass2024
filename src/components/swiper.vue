<script setup>
import { computed, ref, onMounted } from 'vue'

const props = defineProps({
  list: {
    type:Array,
    required: true
  },
  index:{
    type:Number,
    default: 0
  }
})
const el = ref(null)
const elWidth = computed(() => {
  console.log("clientWidth: ", el.value[0].clientWidth)
  return el.value[0].clientWidth
})
onMounted(() => {
  console.log(elWidth.value)
})
</script>

<template>
  <ul>
    <li v-for="item in props.list" :key="item" ref="el">
      <slot :item="item"></slot>
    </li>
  </ul>


</template>


