<template>
	<view style="width:100%">
		<!-- 头部导航栏 -->
		<!-- <header-bar :isBack="true" titleTintColor="#fff" :bgColor="{'background-image': 'linear-gradient(45deg, #007AFF 10%, #005cbf)'}" search>
		    <text slot="back" class="uni_btnIco iconfont icon-arrL"></text>  
		    <text slot="iconfont" class="uni_btnIco iconfont icon-choose03" @tap="aaa"></text>  
		</header-bar>	 -->
		
		<!-- 轮播图 -->
		<view class="uni-padding-wrap">
		    <view class="page-section swiper">
		        <view class="page-section-spacing">
		            <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular = 'true'>
		                <swiper-item  style="background:red">
		                    <!-- <view class="swiper-item uni-bg-red">A</view> -->
							<image class="swiper-item" src="../../static/img/static/image1.jpg" mode="aspectFill" style="width:100%"></image>
		                </swiper-item>
		                <swiper-item>
		                    <image class="swiper-item" src="../../static/img/static/image2.jpg" mode="aspectFill" style="width:100%"></image>
		                </swiper-item>
		                <swiper-item>
		                    <image class="swiper-item" src="../../static/img/static/image3.jpg" mode="aspectFill" style="width:100%"></image>
		                </swiper-item>
		            </swiper>
		        </view>
		    </view>
		</view>
		<uni-notice-bar show-icon="true" scrollable="true" single="true" text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏"></uni-notice-bar>

		<navigator url="../button/button">
				<button type="primary" value="1" style="background:red">点击跳转</button>
		</navigator>
		
		<!-- 宫格 -->
					<uni-grid :column="3" :highlight="true" @change="change">
						<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
							<view class="grid-item-box">
								<!-- 图标 -->
<!-- 								<image :src="item.url" class="image" mode="aspectFill" /> -->								
								<text class="text">{{ item.text }}</text>
							</view>
						</uni-grid-item>
					</uni-grid>
					<!-- 没有更多数据 -->
				<uni-load-more></uni-load-more>
		
	</view>
</template>

<script>
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
	import uniGridItem from "@/components/uni-grid-item/uni-grid-item.vue"
	import uniFav from '@/components/uni-fav/uni-fav.vue'
	// 没有更多组件
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	// 通告
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	import {mapState} from 'vuex'
import http from '@/base/http.js';
	export default {
		components: {uniGrid, uniGridItem, uniFav, uniLoadMore, uniNoticeBar},
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		data(){
			return {
				// 轮播图
				background: ['color1', 'color2', 'color3'],
				            indicatorDots: true,
				            autoplay: true,
				            interval: 2000,
				            duration: 500,
							// 宫格列表
							list: [{
									// url: '/static/img/home.png',
									text: 'Grid 1',
									badge: '0',
									type: "primary"
								},
								{
									// url: '/static/c2.png',
									text: 'Grid 2',
									badge: '1',
									type: "success"
								},
								{
									// url: '/static/c3.png',
									text: 'Grid 3',
									badge: '99',
									type: "warning"
								},
								{
									// url: '/static/c4.png',
									text: 'Grid 4',
									badge: '2',
									type: "error"
								},
								{
									// url: '/static/c5.png',
									text: 'Grid 5'
								},
								{
									// url: '/static/c6.png',
									text: 'Grid 6'
								},
								{
									// url: '/static/c7.png',
									text: 'Grid 7'
								},
								{
									// url: '/static/c8.png',
									text: 'Grid 8'
								},
								{
									// url: '/static/c9.png',
									text: 'Grid 9'
								}
							]
			}
		},
		onLoad() {
			//   let opts={
			//                         url: 'sys/operlog/list',
			//                         method: 'get'
			//                     };
			//                     let param={
			//                         deviceId:this.deviceCode,
			//                         deviceName:this.deviceName
			//                     };
			//                     http.httpTokenRequest(opts, param).then(res => {
			//                         console.log(res);
			//                        //打印请求返回的数据
			//                         
			//                     },error => {console.log(error);}) 
			uni.request({
				
			url: 'http://172.16.1.111:8070/v2/api-docs', //仅为示例，并非真实接口地址。
			data: {
			    name: 'name',
			    age: 18
			},
			header: {
			    'custom-header': 'hello' //自定义请求头信息
			},
			success: function (res) {
			    console.log(res.data);
			}
			})
			
			console.log("1111")
			setTimeout(function () {
			            console.log('start pulldown');
						console.log("22222")
			        }, 1000);
			        //uni.startPullDownRefresh();
			        uni.startPullDownRefresh({
			            success:function(res){
			                console.log(res);  //success 返回参数说明
			            }
			        }); 
					uni.getSystemInfo({  
					        success:function(e){  
					            // Vue.prototype.statusBar = e.statusBarHeight  
					            // #ifndef MP  
					            // if(e.platform == 'android') {  
					            //     Vue.prototype.customBar = e.statusBarHeight + 50  
					            // }else {  
					            //     Vue.prototype.customBar = e.statusBarHeight + 45  
					            // }  
					            // #endif  
					
					            // #ifdef MP-WEIXIN  
					            let custom = wx.getMenuButtonBoundingClientRect()  
					            Vue.prototype.customBar = custom.bottom + custom.top - e.statusBarHeight  
					            // #endif  
					
					            // #ifdef MP-ALIPAY  
					            Vue.prototype.customBar = e.statusBarHeight + e.titleBarHeight  
					            // #endif  
					        }  
					    }) 
			if (!this.hasLogin) {
				uni.showModal({
					title: '未登录',
					content: '您未登录，需要登录后才能继续',
					/**
					 * 如果需要强制登录，不显示取消按钮
					 */
					showCancel: !this.forcedLogin,
					success: (res) => {
						if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../login/login'
								});
							} else {
								uni.navigateTo({
									url: '../login/login'
								});
							}
						}
					}
				});
			}
		},
		onPullDownRefresh() {
		        console.log('refresh');
				console.log("111111111111")
		        setTimeout(function () {
		            uni.stopPullDownRefresh();  //停止动画
		        }, 1000);
		    },
			methods: {
			        changeIndicatorDots(e) {
			            this.indicatorDots = !this.indicatorDots
			        },
			        changeAutoplay(e) {
			            this.autoplay = !this.autoplay
			        },
			        intervalChange(e) {
			            this.interval = e.target.value
			        },
			        durationChange(e) {
			            this.duration = e.target.value
			        },
					change(e) {
						let {
							index
						} = e.detail
						this.list[index].badge && this.list[index].badge++
						console.log(index)
						// 判断index跳转对应页面
						if(index == 0){
						uni.navigateTo({
						    url: '../griditem/griditem1'
						})}
						if(index == 1){
						uni.navigateTo({
						    url: '../griditem/griditem2'
						})}
						if(index == 2){
						uni.navigateTo({
						    url: '../griditem/griditem3'
						})}
						if(index == 3){
						uni.navigateTo({
						    url: '../griditem/griditem4'
						})}
						if(index == 4){
						uni.navigateTo({
						    url: '../griditem/griditem5'
						})}
						if(index == 5){
						uni.navigateTo({
						    url: '../griditem/griditem6'
						})}
						if(index == 6){
						uni.navigateTo({
						    url: '../griditem/griditem7'
						})}
						if(index == 7){
						uni.navigateTo({
						    url: '../griditem/griditem8'
						})}
						if(index == 8){
						uni.navigateTo({
						    url: '../griditem/griditem9'
						})}
						
		
						// }
					// 显示点击宫格index
						uni.showToast({
							title: `点击第${index+1}个宫格`,
							icon: 'none'
						})
					},
			    }
	}
</script>

<style>
	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.title {
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul {
		font-size: 15px;
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul>view {
		line-height: 25px;
	}
	.swiper {
		width: 100%;
	}
	.swiper-item {
		width:100%;
	}
</style>
