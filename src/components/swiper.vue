<script setup>
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
</script>

<template>
  <ul>
    <li v-for="item in props.list" :key="item">
      <slot :item="item"></slot>
    </li>
  </ul>


</template>


