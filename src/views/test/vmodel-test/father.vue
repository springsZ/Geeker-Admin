<template>
  <div>
    <div>{{ value }}</div>
    <div>{{ value2 }}</div>
    <child v-model:value="value" :value2="value2" :columns="columns"></child>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import child from "@/views/test/vmodel-test/child.vue";
import { ColumnProps } from "@/components/ProTable/interface";
let value = ref("111");
let value2 = ref({ value: 222 });
const columns: ColumnProps[] = [
  { type: "index", label: "#", width: 150 },
  { prop: "meta.title", label: "菜单名称", align: "left", search: { el: "input" } },
  { prop: "meta.icon", label: "菜单图标" },
  { prop: "name", label: "菜单 name", search: { el: "input" } },
  { prop: "path", label: "菜单路径", width: 300, search: { el: "input" } },
  { prop: "component", label: "组件路径", width: 300 },
  { prop: "operation", label: "操作", width: 250, fixed: "right" }
];
onMounted(() => {
  console.log("mounted");
});

let value3 = "123";
let valueRef = ref(value3);
// valueRef.value = "456";
value3 = "456";
console.log(valueRef.value);
console.log(value3);

let value4 = { value: "123" };
let valueRef2 = ref(value4);
// valueRef2.value.value = "456";
value4.value = "456";
console.log(valueRef2.value);
console.log(value4);
</script>

<style scoped></style>
