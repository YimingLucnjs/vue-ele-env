<template>
  <div class="wrap">
    <div
      class="wrap_head"
      :class="abnormalNum !== 0?'wrap_head_bg':''"
    >
      <span v-if="abnormalNum !== 0">异常督办</span>
      <span v-if="abnormalNum !== 0">{{ abnormalNum }}</span>
    </div>
    <div class="wrap_content">
      <div
        class="bgWrap"
        :class="abnormalNum === 0? 'bgWrap2' :'bgWrap1'"
        style="padding: 5px 0px 0;"
      >
        <div
          v-if="abnormalNum === 0"
          class="noTask"
          :style="{height:height,width: width,color:'#50e3c2',textAlign:'center',lineHeight:height}"
        >
          <div style="padding-left: 40px;">
            无异常督办信息
          </div>
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
                  :span="11"
                >
                  企业：
                </el-col>
                <el-col
                  class="item2"
                  :span="13"
                >
                  中国石油
                </el-col>
              </el-row>
              <el-row :gutter="24">
                <el-col
                  class="item1"
                  :span="11"
                >
                  源国家编码：
                </el-col>
                <el-col
                  class="item2"
                  :span="13"
                >
                  0909898A
                </el-col>
              </el-row>
              <el-row :gutter="24">
                <el-col
                  class="item1"
                  :span="11"
                >
                  核素名称：
                </el-col>
                <el-col
                  class="item2"
                  :span="13"
                >
                  *****
                </el-col>
              </el-row>
              <el-row :gutter="24">
                <el-col
                  class="item1"
                  :span="11"
                >
                  异常类型：
                </el-col>
                <el-col
                  class="item2"
                  :span="13"
                >
                  *****
                </el-col>
              </el-row>
              <el-row :gutter="24">
                <el-col
                  class="item1"
                  :span="11"
                >
                  异常发生时间：
                </el-col>
                <el-col
                  class="item2"
                  :span="13"
                >
                  2019/2/5
                </el-col>
              </el-row>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    abnormalNum: {
      // 督办数量
      type: Number,
      default: 0
    },
    width: {
      type: String,
      default: "220px"
    },
    height: {
      type: String,
      default: "115px"
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
  .wrap_head {
    // padding: 0 5px 10px;
    color: #f43333;
    height: 25px;
    line-height: 25px;
    text-align: right;
    font-weight: 500;
    position: relative;
    span:nth-child(1) {
      font-size: 16px;
    }
    span:nth-child(2) {
      padding-right: 5px;
      font-size: 18px;
      display: inline-block;
      width: 25px;
      line-height: 25px;
      position: relative;
      top: 2px;
    }
  }
  .wrap_head_bg {
    background: url("~@/assets/info_images/warning.png") no-repeat;
    background-size: contain;
    background-position-x: 58%;
  }
  .wrap_content {
    display: flex;
    justify-content: space-around;

    .bgWrap {
      width: 225px;
      .noTask {
        font-size: 12px;
        font-weight: 600;
        background: url("~@/assets/info_images/handle.png") no-repeat;
        background-size: 60px 60px;
        background-position: 10% 50%;
      }
      .itemWrap {
        width: 225px;
        line-height: 18px;
        // margin-bottom: 5px;
        .item1 {
          font-size: 8px;
          text-align: right;
          color: #fff;
          padding: 0 !important;
        }
        .item2 {
          font-size: 8px;
          text-align: left;
          color: #fff;
          padding: 0 0 0 5px !important;
        }
      }
      margin-bottom: 10px;
    }
    .bgWrap1 {
      background: url("~@/assets/info_images/abn_blue_bg.png") no-repeat;
      background-size: 100% 100%;
    }
    .bgWrap2 {
      background: url("~@/assets/info_images/abn_red_bg.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>
<style lang="scss">
.el-carousel__indicators {
  width: 140px;

  .el-carousel__indicator {
    width: 40px;
  }
}

/* .is-active{
  width: 15px;
} */
</style>