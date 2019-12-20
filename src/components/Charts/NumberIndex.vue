<template>
  <div
    class="wrap"
    :style="{height: height,width: width}"
  >
    <div :class="isAlarm?'alarm':'noAlarm'">
      <div>{{ typeName }}</div>
      <div>{{ typeNumber }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isAlarm: {
        type: Boolean,
        default: true
    },
    typeName: {
      type: String,
      default: "异常数量"
    },
    typeNumber: {
      // 督办数量
      type: Number,
      default: 23
    },
    width: {
      type: String,
      default: "66px"
    },
    height: {
      type: String,
      default: "60px"
    }
  },
  data() {
    return {};
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
};
</script>
<style type="text/css" lang="scss" scoped>
.noAlarm{
  width: 100%;
  height: 100%;
  /*border-radius: 3px;*/
  background: url("~@/assets/info_images/abn_red_bg.png") no-repeat;
  background-size: 100% 100%;
  /*border: 1px solid #000;*/
  text-align: center;

  div:nth-child(1){
    font-size: 14px;
    color: #fff;
    line-height: 40px;
  }

  div:nth-child(2){
    font-size: 26px;
    color: #fff;
    line-height: 26px;
  }
}
.alarm{
  width: 100%;
  height: 100%;
  /*border-radius: 3px;*/
  background: url("~@/assets/info_images/abn_blue_bg.png") no-repeat;
  background-size: 100% 100%;
  /*border: 1px solid #000;*/
  text-align: center;

  div:nth-child(1){
    font-size: 14px;
    color: #d0021b;
    line-height: 40px;
  }

  div:nth-child(2){
    font-size: 26px;
    color: #d0021b;
    line-height: 26px;
  }
}
</style>