<template>
	<!-- 进度条  -->
	<uni-steps :options="[{title:'买家下单',desc:'2018-11-11'},{title:'卖家发货',desc:'2018-11-12'},{title:'买家签收',desc:'2018-11-13'},{title:'交易完成',desc:'2018-11-14'}]" direction="column" :active="3"></uni-steps>
</template>

<script>
	import uniSteps from '@/components/uni-steps/uni-steps.vue'
	export default {
	    components: {uniSteps},
		onLoad: function (options) {
		        setTimeout(function () {
		            console.log('start pulldown');
		        }, 1000);
		        //uni.startPullDownRefresh();
		        uni.startPullDownRefresh({
		            success:function(res){
		                console.log(res);  //success 返回参数说明
		            }
		        });  //进入页面的时候就开始执行下拉刷新动画
		    },
		    onPullDownRefresh() {
		        //监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
		        console.log('refresh');
		        setTimeout(function () {
		            uni.stopPullDownRefresh();  //停止下拉刷新动画
		        }, 1000);
		    }
	}
</script>

<style>
</style>
