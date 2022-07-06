<template>
  <el-table :data="tableData">
    <el-table-column
      :prop="key + ''"
      :label="item"
      v-for="(item, index, key) in tableLabel"
      :key="key"
    >
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    tableData: {
      type: Array,
      default() {
        return [];
      },
    },
    tableLabel: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style></style>
