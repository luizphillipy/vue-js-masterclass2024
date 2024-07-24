<script setup >
import { onMounted } from 'vue';

const props = defineProps({
  item: {
    type:Object,
    required: true
  }
})
onMounted(() => {
  console.log("props on Image: ", props.item)
})

</script>

<template>
    <img :src="props.item.url" alt="image" class="w-full h-full object-cover" />

</template>

