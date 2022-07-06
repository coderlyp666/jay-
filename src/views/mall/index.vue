<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in imgArr" :key="item">
      <h3><img :src="item" alt="" /></h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Mall",
  data() {
    return {
      imgArr: [
        require("assets/image/bizhi1.jpeg"),
        require("assets/image/bizhi3.jpeg"),
        require("assets/image/bizhi5.jpeg"),
        require("assets/image/login.jpeg"),
      ],
    };
  },
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
