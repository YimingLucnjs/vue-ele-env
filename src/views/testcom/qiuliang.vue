<template>
  <el-row
    id="qiuliang"
    :gutter="10"
    style="height:100vh;"
  >
    <el-col
      class="grid-content bg-purple"
      :span="6"
    >
      <!-- <img
        src="@/assets/info_images/bg.png"
        alt=""
        srcset=""
      > -->
    </el-col>
    <el-col
      class="grid-content bg-purple"
      :span="12"
    >
      <el-row style="height: 100%">
        <el-col
          class="grid-content bg-purple"
          style="height:60%;position:relative"
          :span="24"
        >
          <count
            style="position:absolute;left:0px;top:20px;z-index:1;"
            width="100%"
          />
          <map-chart
            height="100%"
            width="100%"
          />
          <bar-chart
            style="position:absolute;left:0;bottom:0;"
            height="40%"
            width="40%"
          />
          <div style="position:absolute;bottom:10px;right:0;">
            <el-radio-group
              v-model="tableRadio"
              size="small"
            >
              <el-radio-button label="移动源" />
              <el-radio-button label="固定源" />
            </el-radio-group>
          </div>
        </el-col>
        <el-col
          :span="24"
          style="height:35%;"
        >
          <div class="table_norder">
            <info-table
              :table-data="tableData"
              :table-head="tableHead"
              height="100%"
            />
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col
      class="grid-content bg-purple"
      :span="6"
    >
      <div style="height:10%;" />
      <div class="right-dev">
        <div
          class="danger"
          style="height:33%"
        >
          <div class="title">
            源危险等级分布
          </div>
          <PieChart
            width="100%"
            height="100%"
          />
        </div>
        <div
          class="danger"
          style="height:33%"
        >
          <div class="title">
            行业分类TOP5
          </div>
          <LinePercentage
            width="100%"
            height="100%"
          />
        </div>
        <div
          class="danger"
          style="height:33%"
        >
          <div class="title">
            核安全排名TOP5
          </div>
          <TopRank
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import mapChart from "@/components/ql_component/Charts/mapChart";
import barChart from "@/components/ql_component/Charts/barChart";
import Count from "@/components/ql_component/Count";
import infoTable from "@/components/ql_component/Table/info-table";
import LinePercentage from '@/components/Charts/LinePercentage'; // 进度条
import TopRank from '@/components/Charts/TopRank'; // 进度条
import PieChart from "@/components/Charts/PieChart";

export default {
	components: {
		mapChart,
		barChart,
		Count,
		infoTable,
    PieChart,
    TopRank,
    LinePercentage
	},
	data() {
		return {
			tableRadio: "移动源",
			tableData: [
				{
					enterprise: "中石油集团测井有限公司华北事业部",
					sourceCode: "0193AB099522",
					nucleusName: "某某某",
					pollution: "III",
					dose: "8.10",
					state: "当前状态"
				},
				{
					enterprise: "中石油集团测井有限公司华北事业部",
					sourceCode: "0193AB099522",
					nucleusName: "某某某",
					pollution: "III",
					dose: "8.10",
					state: "当前状态"
				},
				{
					enterprise: "中石油集团测井有限公司华北事业部",
					sourceCode: "0193AB099522",
					nucleusName: "某某某",
					pollution: "III",
					dose: "8.10",
					state: "当前状态"
				}
			],
			tableHead: [
				{
					prop: "enterprise",
					label: "企业",
					width: "",
					align: "center"
				},
				{
					prop: "sourceCode",
					label: "源编码",
					width: "",
					align: "center"
				},
				{
					prop: "nucleusName",
					label: "核素名称",
					width: "",
					align: "center"
				},
				{
					prop: "pollution",
					label: "污染程度",
					width: "",
					align: "center"
				},
				{
					prop: "dose",
					label: "剂量（uSv/h）",
					width: "",
					align: "center"
				},
				{
					prop: "state",
					label: "当前状态",
					width: "",
					align: "center"
				}
			]
		};
	}
};
</script>

<style lang="scss">
@mixin bacgroundImg($url) {
	background-image: url($url);
	background-position: top left;
	background-repeat: no-repeat;
}
#qiuliang {
	background-image: url("../../assets/info_images/bg.png");
	.el-radio-button__inner {
		border-color: #041991;
		color: #041991;
		background: transparent;
	}
	.is-active {
		background: #041991;
		.el-radio-button__inner {
			color: #fff;
		}
	}
	.grid-content {
		height: 100%;
		.right-dev {
			height: 90%;
			@include bacgroundImg("../../assets/info_images/border.png");
			.danger {
				background: rgba($color: #0b0e2d, $alpha: 0.5);
				.title {
					@include bacgroundImg(
						"../../assets/info_images/title_bg.png"
					);
					line-height: 40px;
					color: #fff;
					padding-left: 10px;
				}
			}
		}
	}
	.bg-purple {
		// background: url('../../assets/bg.png')
	}
	.table_norder {
		padding: 10px;
		height: 100%;
		border-radius: 5px;
		border: 1px solid #1403a8;
	}
}
</style>
