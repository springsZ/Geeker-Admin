<template>
  <div @click="$emit('update:value', Math.random() + 10)">grand-child: {{ value }}</div>
</template>

<script lang="ts" setup>
defineEmits(["handleClick", "update:value"]);

type prop = {
  value?: string;
  value2?: { value: number };
};
const props = defineProps<prop>();
console.log(props.value);
</script>

<style scoped></style>
