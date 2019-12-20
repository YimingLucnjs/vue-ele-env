<template>
  <div
    id="Lunbo"
    class="wrap"
  >
    <div
      class="wrap_head"
      :class="abnormalNum !== 0 ? 'wrap_head_bg' : ''"
    >
      <span v-if="abnormalNum !== 0">异常督办</span>
      <span v-if="abnormalNum !== 0">{{ abnormalNum }}</span>
    </div>
    <div class="wrap_content">
      <div
        class="bgWrap"
        :class="abnormalNum === 0 ? 'bgWrap2' : 'bgWrap1'"
        style="padding: 5px 0px 0;"
      >
        <div
          v-if="abnormalNum === 0"
          class="noTask"
          :style="{
            height: '100%',
            color: '#50e3c2',
            textAlign: 'center'
          }"
        >
          <div class="noTaskCon">
            无异常督办信息
          </div>
        </div>
        <el-carousel
          v-else
          trigger="click"
          arrow="never"
          style="height:100%"
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
                  0909898A
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
                  *****
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
                  *****
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
	height: 100%;
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
		background-position-x: 78%;
	}
	.wrap_content {
		height: calc(100% - 25px);
		padding: 20px 40px;
		display: flex;
		justify-content: space-around;

		.bgWrap {
			width: 100%;
			height: 100%;
			.noTask {
				font-size: 12px;
				font-weight: 600;
				position: relative;
				background: url("~@/assets/info_images/handle.png") no-repeat;
				background-size: 60px 60px;
				background-position: 30% 50%;
				.noTaskCon {
					position: absolute;
					left: 50%;
					top: 50%;
					/* 这里有兼容性问题 */
					-webkit-transform: translateY(-50%);
					-ms-transform: translateY(-50%);
					-o-transform: translateY(-50%);
					transform: translateY(-50%);
				}
			}
			.itemWrap {
				line-height: 2;
				// margin-bottom: 5px;
				.item1 {
					font-size: 14px;
					text-align: right;
					color: #fff;
					padding: 0 !important;
				}
				.item2 {
					font-size: 14px;
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
#Lunbo {
	.el-carousel__indicators {
		width: 140px;

		.el-carousel__indicator {
			width: 40px;
		}
	}
	
}
.el-carousel__container {
		height: 100%;
	}
/* .is-active{
  width: 15px;
} */
</style>
