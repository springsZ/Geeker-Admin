<template>
  <div>
    <h5>slot-test</h5>
    <child v-slot="{ content, content2 }">
      <!-- <h1>{{ content }}</h1> -->
      {{ content }}
      {{ content2 }}
      784561
      <h3>123</h3>
    </child>
  </div>
</template>

<script lang="ts" setup>
import child from "./child.vue";
</script>

<style scoped></style>
