<template>
  <el-card shadow="hover">
    <div class="user">
      <img :src="userImg" alt="" />
      <div class="userinfo">
        <p class="name">jay</p>
        <p class="access">管理员</p>
      </div>
    </div>
    <div class="login-info">
      <p>
        上次登录时间:<span>{{ date | showDate }}</span>
      </p>
      <p>上次登录地点:<span>岳阳</span></p>
    </div>
  </el-card>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  name: "UserInfo",
  data() {
    return {
      userImg: require("assets/image/user.jpg"),
    };
  },
  computed: {
    date() {
      return new Date().getTime();
    },
  },
  filters: {
    showDate: function (value) {
      let date = new Date(value);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    },
  },
};
</script>

<style></style>
