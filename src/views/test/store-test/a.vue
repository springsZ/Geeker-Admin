<script setup>
import { store, store2 } from "./store.js";
console.log(store, store2);
</script>

<template>
  <div @click="store.count++">From A: {{ store.count }}</div>
</template>
