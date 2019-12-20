<template>
  <div id="all_count">
    <div
      v-for="item of countData"
      :key="item.name"
      class="count"
    >
      <div class="title">
        {{ item.name }}
      </div>
      <div
        class="num_arr"
      >
        <div
          v-for="(c,i) of item.countArr"
          :key="i"
          class="num"
        >
          {{ c }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		countData: {
			type: Array,
			default: () => [
				{
					name: "源总数",
					count: 0
				},
				{
					name: "企业总数",
					count: null
				},
				{
					name: "车辆总数",
					count: 2
				}
			]
		}
	},
	data() {
		return {
			
		};
	},
	mounted() {
		this.manageCount();
	},
	methods: {
		manageCount() {
			this.countData.map(v => {
                v.count = v.count? v.count : "0";
				let countArr = String(v.count).split("");
                while(countArr.length < 3) {
                    countArr.unshift("0")
                }
                this.$set(v,'countArr',countArr)
				return v;
            });
		}
	}
};
</script>

<style lang="scss" scoped>
#all_count {
    text-align: center;
    width: 100%;
    .count {
	color: #fff;
	text-align: center;
    margin: 0 2%;
    display: inline-block;
	.title {
		font-size: 20px;
	}
	.num_arr {
		text-align: center;
		margin-top: 5px;
		.num {
			padding: 8px 9px;
			margin: 0 3px;
			// background: rgba(53, 158, 228, 0.5);
			// border-radius: 5px;
			background: url('~@/assets/info_images/count_bg.png') no-repeat;
			background-size: 100%;
			color: #fff;
			display: inline-block;
			font-size: 24px;
		}
	}
}
}

</style>
