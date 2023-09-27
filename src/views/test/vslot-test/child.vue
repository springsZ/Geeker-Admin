<template>
  <slot :content="slot_data" :content2="slot_data2">123 </slot>
</template>

<script lang="ts" setup>
const slot_data = "child-content";
const slot_data2 = "child-content2";
</script>

<style scoped></style>
