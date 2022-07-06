<template>
  <div class="tags">
    <el-tag
      v-for="(item, index) in tags"
      :key="item.name"
      :closable="item.name !== 'home'"
      size="small"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
      style="margin-right: 10px"
      @click="changePath(item)"
      @close="handleClose(item, index)"
      >{{ item.label }}</el-tag
    >
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CommonTag",
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabList,
    }),
  },
  methods: {
    // ...mapMutations["choseTag"],
    changePath(item) {
      this.$router.push(item.path + "");
    },
    handleClose(item, index) {
      const length = this.tags.length - 1;
      //if (item.name !== this.$route.name) return;
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name,
        });
        // this.choseTag(index);
        this.$store.commit("choseTag", index);
      } else {
        this.$router.push({
          name: this.tags[index + 1].name,
        });
        // this.choseTag(index);
        this.$store.commit("choseTag", index);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.tags {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>
