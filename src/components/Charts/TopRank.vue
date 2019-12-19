<template>
  <div class="wrap">
    <div class="wrap_head">
      <el-row :gutter="24">
        <el-col :span="6">
          <div class="item1">
            排名
          </div>
        </el-col>
        <el-col :span="12">
          <div class="item2">
            企业名称
          </div>
        </el-col>
        <el-col :span="6">
          <div class="item1">
            分数
          </div>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-row
        v-for="(item,index) in dataList"
        :key="index"
        class="content_item"
        :gutter="24"
      >
        <el-col
          :span="6"
          style="text-align: center;"
        >
          <div
            class="item1 rankIndex"
            :class="'rank' + index"
          >
            {{ index + 1 }}
          </div>
        </el-col>
        <el-col :span="12">
          <div class="item2">
            {{ item.name }}
          </div>
        </el-col>
        <el-col :span="6">
          <div class="item1">
            {{ item.number }}
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataList: {
      type: Array,
      default: function() {
        return [
          { name: "医用源1", number: 10 },
          { name: "医用源1", number: 10 },
          { name: "医用源1", number: 10 },
          { name: "医用源1", number: 10 },
          { name: "医用源1", number: 10 }
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
<style type="text/css" lang="scss" scoped>
.wrap {
  font-size: 10px;
    color: #fff;
  padding: 20px;
  .item1 {
    text-align: center;
    line-height: 20px;
  }
  .item2 {
    line-height: 20px;
  }
  .wrap_head {
    background: #0a1c48;
    border-radius: 4px;
    padding: 5px 4px;
  }
  .content_item {
    margin-top: 10px;
  }
  .rankIndex {
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 50%;
    background: #d7e7f9;
    color: #000;
  }
  .rank0 {
    background: #ffdc70;
  }
  .rank1 {
    background: #ff9b53;
  }
  .rank2 {
    background: #3591ff;
  }
}
</style>