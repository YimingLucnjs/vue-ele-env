<template>
  <div
    class="wrap"
    style="background: blue;"
  >
    <div
      v-show="abnormalNum !== 0"
      class="wrap_head"
    >
      <span>异常督办</span>
      <span>{{ abnormalNum }}</span>
    </div>
    <div class="wrap_content">
      <div
        v-if="abnormalNum === 0"
        class="noTask"
        :style="{height:height,width: width,textAlign:'center',lineHeight:height}"
      >
        无异常督办信息
      </div>
      <el-carousel
        v-else
        trigger="click"
        arrow="never"
        :width="width"
        :height="height"
      >
        <el-carousel-item
          v-for="item in abnormalNum"
          :key="item"
        >
          <div class="itemWrap">
            <el-row :gutter="24">
              <el-col
                class="item1"
                :span="9"
              >
                企业：
              </el-col>
              <el-col
                class="item2"
                :span="15"
              >
                中国石油
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col
                class="item1"
                :span="9"
              >
                源国家编码：
              </el-col>
              <el-col
                class="item2"
                :span="15"
              >
                中国石油
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col
                class="item1"
                :span="9"
              >
                核素名称：
              </el-col>
              <el-col
                class="item2"
                :span="15"
              >
                中国石油
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col
                class="item1"
                :span="9"
              >
                异常类型：
              </el-col>
              <el-col
                class="item2"
                :span="15"
              >
                中国石油
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col
                class="item1"
                :span="9"
              >
                异常发生时间：
              </el-col>
              <el-col
                class="item2"
                :span="15"
              >
                中国石油
              </el-col>
            </el-row>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    abnormalNum: {
      // 督办数量
      type: Number,
      default: 3
    },
    width: {
      type: String,
      default: '300px'
    },
    height: {
      type: String,
      default: '115px'
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
.wrap{
  .wrap_head{
    padding: 2px;
    color: red;
    line-height: 20px;
    text-align: right;

    span:nth-child(2) {
      padding-right: 5px;
      display: inline-block;
      width: 25px;
    }
  }
  .itemWrap {
  line-height: 18px;
  margin-bottom: 5px;
  .item1 {
    font-size: 10px;
    text-align: right;
    color: #fff;
  }
  .item2 {
    font-size: 10px;
    text-align: left;
    color: #fff;
  }
}
}

</style>