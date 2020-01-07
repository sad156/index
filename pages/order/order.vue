<template>
    <view style="width:100%" class="page">
		<!-- 选项卡 -->
      <!-- <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#009eff"></uni-segmented-control>
        <view class="content">
            <view v-show="current === 0">
                选项卡1的内容
            </view>
            <view v-show="current === 1">
                选项卡2的内容
            </view>
            <view v-show="current === 2">
                选项卡3的内容
            </view>
        </view> -->
		<!-- 滑动选项卡 -->
		 <view class="page">
		        <tabControl :current="current" :values="items" bgc="#fff" :fixed="false" :scrollFlag='true' :isEqually='true' @clickItem="onClickItem" ></tabControl>
		        <!-- 使用 swiper 配合 滑动切换 -->
		        <swiper class="swiper" style="height: 100%;" @change='scollSwiper' :current='current'>
		            <swiper-item v-for="(item,index) in items" :key='index'>
		                <!-- 使用 scroll-view 来滚动内容区域 -->
						<view class="content">
							<!-- 根据current匹配显示内容 -->
						    <view v-show="current === 0">
						        选项卡1的内容
						    </view>
						    <view v-show="current === 1">
						        选项卡2的内容
						    </view>
						    <view v-show="current === 2">
						        选项卡3的内容
						    </view>
						</view> 
		            </swiper-item>
		        </swiper>
		    </view>
	<uni-load-more></uni-load-more>
    </view>
</template>

<script>
	import tabControl from '@/components/tabControl-tag/tabControl-tag.vue';
	// 没有更多数据
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	import uniSegmentedControl from "@/components/uni-segmented-control/uni-segmented-control.vue"
	export default {
	    components: {uniSegmentedControl, tabControl, uniLoadMore },
	    data() {
	        return {
				// 选项卡标题
	            items: ['选项卡1','选项卡2','选项卡3'],
	            current: 0
	        }
	    },
	    methods: {
	          onClickItem(val) {
	                    this.current = val.currentIndex
	                },
	                scollSwiper(e){
	                    this.current = e.target.current
	                }
	    },
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
	
	page{
	    height: 100%;
	}
	
	.page{
	    height: 100%;
	}
	
	.swiper {
		height:100% !important;
		height:100vh !important;
	}
	
</style>
