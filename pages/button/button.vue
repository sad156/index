
<template>
	<uni-goods-nav :fill="true"  :options="options" :button-group="buttonGroup"  @click="onClick" @buttonClick="buttonClick"  style="width: 100%;"></uni-goods-nav>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
	    components: {uniGoodsNav},
	    data () {
	      return {
	        options: [{
	          icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/kefu.png',
	          text: '客服'
	        }, {
	          icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png',
	          text: '店铺'
	        }, {
	          icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png',
	          text: '购物车',
	          info: 2
	        }],
	        buttonGroup: [{
	          text: '加入购物车',
	          backgroundColor: '#ff0000',
	          color: '#fff'
	        },
	        {
	          text: '立即购买',
	          backgroundColor: '#ffa200',
	          color: '#fff'
	        }
	        ]
	      }
	    },
	    methods: {
	      onClick (e) {
	        uni.showToast({
	          title: `点击${e.content.text}`,
	          icon: 'none'
	        })
	      },
	      buttonClick (e) {
	        console.log(e)
	        this.options[2].info++
	      }
	    }
	}
</script>

<style>
</style>
