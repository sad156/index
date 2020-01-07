<template>
	<view class="content">
		
		
		<view style="display:flex;justify-content: space-between;align-items: center;margin-bottom:20px">
			<!-- 已登录 -->
			<view v-if="hasLogin" class="hello">
				<view class="title">
					您好 {{userName}}，您已成功登录。
				</view>
			</view>
		<!-- 未登录 -->
		<view v-if="!hasLogin" class="hello">
			<view class="title">
				您好 游客。
			</view>
		</view>
		<view class="btn-row">
			<!-- 未登录显示 -->
			<button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
			<!-- <view v-if="!hasLogin" type="primary" class="primary">11111</view> -->
			
			<!-- 登录显示 -->
			<button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
			<!-- <span v-if="hasLogin" type="default" >222</span> -->
		</view>
	</view>	
		<uni-list style="border-top-width: 0;">
		    <uni-list-item title="标题文字" @tap="list1"></uni-list-item>
		</uni-list>
		
		<!-- 带描述信息 -->
		<uni-list>
		    <uni-list-item title="标题文字" note="描述信息" @tap="list2"></uni-list-item>
		</uni-list>
		
		<!-- 包含图片 -->
		<uni-list>
		    <uni-list-item title="标题文字" thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png" @tap="list3"></uni-list-item>
		</uni-list>
		
		<!-- 包含图标 -->
		<uni-list>
		    <uni-list-item title="标题文字" :show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}" @tap="list4"></uni-list-item>
		</uni-list>
		
		
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'
	import uniList from "@/components/uni-list/uni-list.vue"
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	export default {
		// computed: (0, _vuex.mapState)(['forcedLogin', 'hasLogin', 'userName']),
		components: {uniList,uniListItem},
		computed: {
			...mapState(['hasLogin', 'forcedLogin','userName'])
		},
		onLoad: function (options) {
		        setTimeout(function () {
		            console.log('start pulldown');
		        }, 1000);
		        uni.startPullDownRefresh();
		    },
			 onPullDownRefresh() {
			        console.log('refresh');
			        setTimeout(function () {
			            uni.stopPullDownRefresh();
			        }, 1000);
			    },
		methods: {
			...mapMutations(['logout']),
			bindLogin() {
				uni.navigateTo({
					url: '../login/login',
				});
			},
			list1(){
				uni.navigateTo({
					url:"../list/list1",
					success(){
						console.log("成功跳转")
					},
					fail(){
						console.log("重新跳转")
					}
				})
			},
			list2(){
				uni.navigateTo({
					url:"../list/list2"
				})
			},
			list3(){
				uni.navigateTo({
					url:"../list/list3"
				})
			},
			list4(){
				uni.navigateTo({
					url:"../list/list4"
				})
			},
			bindLogout() {
				this.logout();
				/**
				 * 如果需要强制登录跳转回登录页面
				 */
				if (this.forcedLogin) {
					uni.reLaunch({
						url: '../login/login',
					});
				}
			}
		}
	}
</script>

<style>
.btn-row {
	margin:0;
	padding:0;
}

.uni-list-item {
	padding-right:15px;
}
.uni-list-item--first {
	padding:12px 0
}

.uni-list-item__container {
	border-top-width: 0 !important;
	padding:12px 0 !important;
}
</style>
