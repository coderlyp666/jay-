<template>
  <el-card style="margin-top: 20px">
    <goods-list-item :table-data="tableData" :table-label="tableLabel" />
  </el-card>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
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
  components: {
    GoodsListItem,
  },
};
</script>

<style></style>
