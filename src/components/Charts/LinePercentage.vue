<template>
  <div>
    <div
      v-for="(item,index) in dataList"
      :key="index"
      class="wrap"
    >
      <div class="item1">
        {{ item.name }}
      </div>
      <div class="item2">
        <el-progress
          :percentage="50"
          :stroke-width="strokeWidth"
          :color="item.color"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    strokeWidth: {
      type: Number,
      default: 8
    },
    dataList: {
      type: Array,
      default: function() {
        return [
          { name: "医用源1", number: 10, color: "blue" },
          { name: "医用源1", number: 10, color: "red" },
          { name: "医用源1", number: 10, color: "yellow" },
          { name: "医用源1", number: 10, color: "blue" },
          { name: "医用源1", number: 10, color: "blue" }
        ];
      }
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
<style lang="scss" scoped>
.wrap {
  display: flex;
  .item1 {
    flex: 1;
    font-size: 10px;
	line-height: 16px;
    padding-left: 4px;
  }
  .item2 {
    flex: 3;
  }
}
</style>