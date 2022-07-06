<template>
  <div class="num">
    <el-card
      v-for="item in countData"
      :key="item.name"
      :body-style="{ display: 'flex', padding: 0 }"
    >
      <i
        class="icon"
        :class="`el-icon-${item.icon}`"
        :style="{ background: item.color }"
      >
      </i>
      <div class="detail">
        <p class="num">￥{{ item.value }}</p>
        <p class="txt">{{ item.name }}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "PurchaseHistory",
  data() {
    return {
      countData: [
        {
          name: "今日支付订单",
          value: 1231,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 999,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1781,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1781,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 111,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1123,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
};
</script>

<style></style>
