<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <!-- 用户信息 -->
      <user-info />
      <!-- 商品记录 -->
      <goods-list :table-data="tableData" :table-label="tableLabel" />
    </el-col>
    <el-col style="margin-top: 20px" :span="16">
      <!-- 购买记录 -->
      <purchase-history />
      <!-- 折线图 -->
      <el-card style="height: 280px">
        <div style="height: 280px" ref="echarts"></div>
      </el-card>
      <div class="graph">
        <!-- 柱形图 -->
        <el-card style="height: 260px">
          <div style="height: 240px" ref="userEcharts"></div>
        </el-card>
        <!-- 扇形图 -->
        <el-card style="height: 260px">
          <div style="height: 240px" ref="videoEcharts"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import { getData, getMenu } from "../../api/data";

import UserInfo from "./childComps/UserInfo";
import GoodsList from "./childComps/GoodsList";
import PurchaseHistory from "./childComps/PurchaseHistory";
import * as echarts from "echarts";
export default {
  name: "home",
  data() {
    return {
      tableData: [],
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      obj: {},
    };
  },
  components: {
    UserInfo,
    GoodsList,
    PurchaseHistory,
  },
  mounted() {
    getData().then((res) => {
      console.log(res);
      this.obj = res;
      const { code, data } = res;
      if (code === 20000) {
        this.tableData = data.tableData;
        const order = data.orderData;
        const xData = order.date;
        const KeyArray = Object.keys(order.data[0]);
        const series = [];
        KeyArray.forEach((key) => {
          series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: "line",
          });
        });
        const option = {
          xAxis: {
            data: xData,
          },
          yAxis: {},
          legend: {
            data: KeyArray,
          },
          series,
        };
        const E = echarts.init(this.$refs.echarts);
        E.setOption(option);

        //用户
        const userOptions = {
          legend: {
            // 图例文字颜色
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "20%",
          },
          // 提示框
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category", // 类目轴
            data: data.userData.map((item) => item.date),
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              interval: 0,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
          color: ["#2ec7c9", "#b6a2de"],
          series: [
            {
              name: "新增用户",
              data: data.userData.map((item) => item.new),
              type: "bar",
            },
            {
              name: "活跃用户",
              data: data.userData.map((item) => item.active),
              type: "bar",
            },
          ],
        };
        const U = echarts.init(this.$refs.userEcharts);
        U.setOption(userOptions);

        //产品
        const videoOptions = {
          tooltip: {
            trigger: "item",
          },
          color: [
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#a6a6a6",
            "#e1bb22",
            "#39c362",
            "#3ed1cf",
          ],
          series: [
            {
              data: data.videoData,
              type: "pie",
            },
          ],
        };
        const V = echarts.init(this.$refs.videoEcharts);
        V.setOption(videoOptions);
      }
    });
  },
};
</script>

<style lang="less" scoped></style>
