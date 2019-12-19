<template>
  <div
    id="progress-line"
    style="padding:16px"
  >
    <div
      v-for="(item, index) in dataList"
      :key="index"
      class="wrap"
    >
      <div
        class="item1"
        style="text-align:left;"
      >
        {{ item.name }}
      </div>
      <div class="item2">
        <el-progress
          :percentage="item.number"
          :stroke-width="strokeWidth"
          :color="item.color"
          :show-text="false"
        />
      </div>
      <div class="item1 item3">
        {{ item.number }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		strokeWidth: {
			type: Number,
			default: 16
		},
		dataList: {
			type: Array,
			default: function() {
				return [
					{ name: "科研用源", number: 70, color: "#4a90e2" },
					{ name: "测厚仪", number: 60, color: "#50e3c2" },
					{ name: "探伤机", number: 50, color: "#ff9b53" },
					{ name: "医用源", number: 40, color: "#d03702" },
					{ name: "XXXXX源", number: 30, color: "#e1da83" }
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
<style lang="scss">
#progress-line {
	.wrap {
		display: flex;
		color: #fff;
		padding: 10px;
		.item1 {
			text-align: center;
			flex: 1.3;
			font-size: 16px;
			line-height: 1;
			padding-left: 4px;
		}
		.item2 {
			flex: 3;
    }
    .item3 {
      flex: 1
    }
	}
	.el-progress-bar__outer {
    background: #091048;
    font-size: 18px;
	}
}
</style>
