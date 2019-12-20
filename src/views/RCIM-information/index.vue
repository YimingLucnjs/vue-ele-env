<!--
	创建者：luyiming
	该文件用于：
	创建时间：2019-12-20 01:27:15
-->
<template>
	<div class="informationRCIM_view">
		<div class="header_wrap">
			
		</div>
		<div class="main_wrap" :class="hideSide ? 'hidenside' : ''">
			<div class="cont_wrap lf_cont_wrap fl">
			</div>
			<div class="cont_wrap mid_cont_wrap fl">
				<div class="map_wrap"></div>
				<div class="tb_wrap"></div>
			</div>
			<div class="cont_wrap rg_cont_wrap fl">

			</div>
		</div>
	</div>	  
</template>

<script>
import InformationRcim from './index.js';
export default InformationRcim;
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
<style lang="scss">

.el-header{
	height: 120px;
}
</style>
