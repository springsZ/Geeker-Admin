<template>
  <div>
    <h1 @click="$emit('update:value', Math.random())">{{ value }}</h1>
    <h3>{{ value2 }}</h3>
    <input type="text" :value="value" @input="handleInput($event)" />
    <grand-child v-model:value="value"></grand-child>
  </div>
</template>

<script lang="ts" setup name="child">
import { ref, computed } from "vue";
import grandChild from "./grandchild.vue";
import { ColumnProps } from "@/components/ProTable/interface";

const emit = defineEmits(["update:value"]);
const props = defineProps<{ value: string; value2: { value: number }; columns: ColumnProps[] }>();
console.log(props.value);
const handleInput = (event: Event) => {
  emit("update:value", (event.target as HTMLInputElement).value);
  console.log((event.target as HTMLInputElement).value);
};
const value = computed({
  get() {
    return props.value;
  },
  set(newValue: string) {
    emit("update:value", newValue);
  }
});
props.columns.forEach(col => {
  col.isShow = col.isShow ?? true;
});
// props.columns[1].isShow = false;
const columnsRef = ref(props.columns);
columnsRef.value[1].isShow = false;
const addAttrFunc = (columns: ColumnProps[]) => {
  columns.forEach(col => {
    col.isShow = col.isShow ?? true;
  });
};
addAttrFunc(columnsRef.value);
console.log(columnsRef.value);
console.log(props.columns);

const valueRef = ref(props.value);
// valueRef.value = "456";
// props.value = "456";
console.log(valueRef.value);
console.log(props.value);
</script>

<style scoped></style>
