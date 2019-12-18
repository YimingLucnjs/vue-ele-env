<template>
  <div class="wrap">
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
  width: 66px;
  height: 60px;
  border-radius: 3px;
  background: blue;
  border: 1px solid #000;
  text-align: center;

  div:nth-child(1){
    font-size: 12px;
    color: #fff;
    line-height: 26px;
  }

  div:nth-child(2){
    font-size: 24px;
    color: #fff;
    line-height: 26px;
  }
}
.alarm{
  width: 66px;
  height: 60px;
  border-radius: 3px;
  background: blue;
  border: 1px solid #000;
  text-align: center;

  div:nth-child(1){
    font-size: 12px;
    color: #d0021b;
    line-height: 26px;
  }

  div:nth-child(2){
    font-size: 24px;
    color: #d0021b;
    line-height: 26px;
  }
}
</style>