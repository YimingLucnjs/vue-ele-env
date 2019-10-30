<template>
	<el-container class="kd-abnormal-template">
		<el-aside width="300px" class="kd-left-tree-wrap" ></el-aside>
		<el-container>
			<el-header style="text-align: right; font-size: 12px">1</el-header>
			<el-main>1</el-main>
		</el-container>
	</el-container>
</template>

<script>
	export default {
		name: 'KdAbnormalTemplate',
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.kd-abnormal-template{
		height: calc(100vh - 85px); 
		padding: 15px; 
		border: 1px solid #eee;
		.kd-left-tree-wrap{

		}
	}
</style>
