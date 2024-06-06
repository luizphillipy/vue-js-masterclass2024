<script lang="ts" setup></script>
<template>
  <div>
    <h1>Projects Page</h1>
  </div>
  <RouterLink :to="{ name: '/projects/[id]', params: { 'id': 1}}">Go to Project 1</RouterLink>
</template>

<style></style>
