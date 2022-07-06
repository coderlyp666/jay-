<template>
<el-calendar v-model="value">
</el-calendar>
</template>

<script>
export default {
  name: "PageOne",
  data() {
    return {value: new Date()};
  },
};
</script>

<style></style>
