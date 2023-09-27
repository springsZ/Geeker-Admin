<script setup>
import { store, store2 } from "./store.js";
console.log(store, store2);
</script>

<template>
  <div @click="store2.count++">From B: {{ store.count }}</div>
</template>
