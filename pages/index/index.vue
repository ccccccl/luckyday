<template>
	<view class="container">
		<view class="promotion">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item v-for="item in list" :key="item.name" @click="onItemClick(item)">
					<img class="swiper-img" :src="item.image" :alt="'领取' + item.name + '红包'">
				</swiper-item>
			</swiper>
		</view>

		<view class="tools-wrap">
			<view class="tools-title">日期工具</view>
			<uni-grid class="apps" :column="3" :show-border="false" :square="false">
				<uni-grid-item v-for="(item ,index) in apps" :index="index" :key="index">
					<view class="grid-item-box" @click="onAppClick(item)">
						<div class="icon-wrap" :style="'background: ' + item.bcolor">
							<i class="iconfont" :class="item.icon"></i>
						</div>
						<text class="text">{{item.name}}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>

		<view class="tools-wrap">
			<view class="tools-title">其他工具</view>
			<uni-grid class="apps" :column="3" :show-border="false" :square="false">
				<uni-grid-item>
					<view class="grid-item-box" @click="onTiktokClick()">
						<div class="icon-wrap" style="background: #333">
							<i class="iconfont icon-douyin"></i>
						</div>
						<text class="text">抖音去水印</text>
					</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-item-box" @click="onQrCodeClick()">
						<div class="icon-wrap" style="background: #66cc00">
							<i class="iconfont icon-erweima"></i>
						</div>
						<text class="text">二维码生成</text>
					</view>
				</uni-grid-item>
			</uni-grid>

			<!-- <view style="margin: 20rpx auto;color: #999;font-size: 0.9rem;">开发中，敬请期待</view>
			 -->

		</view>
	</view>
</template>

<script>
import utils from '../../utils/utils.js'
export default {
	name: 'Home',
	data() {
		return {
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			list: [
				{
					name: '美团',
					appId: 'wxde8ac0a21135c07d',
					url: 'index/pages/h5/h5?noshare=1&f_openId=0&weburl=https%3A%2F%2Fclick.meituan.com%2Ft%3Ft%3D1%26c%3D2%26p%3DpMdLF75zYOdn&f_userId=0&f_token=0',
					image: '../../static/images/meituan1.png',
				},
				{
					name: '饿了么',
					appId: 'wxece3a9a4c82f58c9',
					url: 'commercialize/pages/taoke-guide/index?scene=77ae9087c8f442748592ea8c92653e6b',
					image: '../../static/images/eleme.png',
				},
				{
					name: '滴滴打车',
					appId: 'wxaf35009675aa0b2a',
					url: '/pages/index/index?scene=P8WDo79&source_id=165412jutuike123456',
					image: '../../static/images/didi1.png',
				},
				{
					name: '花小猪打车',
					appId: 'wxd98a20e429ce834b',
					url: '/pages/chitu/index?scene=DeJbGgK&source_id=165412jutuike123456',
					image: '../../static/images/huaxiaozhu.png',
				}
			],
			apps: [
				{
					name: '今日运势',
					icon: 'icon-bagua',
					url: '/pages/almanac/almanac',
					bcolor: '#ff6666',
				}, {
					name: '吉日查询',
					icon: 'icon-jijibaobei',
					url: '/pages/luckyList/LuckyList',
					bcolor: '#ff9900',
				}, {
					name: '时辰宜忌',
					icon: 'icon-zhunbei',
					url: '/pages/hoursList/HoursList',
					bcolor: '#ffcc00',
				}, {
					name: '节假日',
					icon: 'icon-holiday',
					url: '/pages/holidays/holidays',
					bcolor: '#66ccff',
				}, {
					name: '间隔天数',
					icon: 'icon-tianshu',
					url: '/pages/countDays/CountDays',
					bcolor: '#66cabb' 
				}, {
					name: '日期推算',
					icon: 'icon-riqi',
					url: '/pages/countDate/CountDate',
					bcolor: '#66cc00',
				}
			]
		}
	},

	methods: {
		onItemClick(item) {			
			uni.navigateToMiniProgram({
				appId: item.appId,
				path: item.url,
				// 可以传递参数给目标小程序
				extraData: {},
				success(res) {
					console.log(res)
				},
				fail(err) {
					console.log(err)
				}
			});
		},
		
		onAppClick(item) {
			// console.log(this.$router);
			// this.$router.push(item.url)
			uni.navigateTo({
				url: item.url
			})
		},

		onTiktokClick() {
			uni.navigateToMiniProgram({
				appId: 'wx07bc42c54b7c8dd0',
				path: '/pages/tools/douyin/index',
				// 可以传递参数给目标小程序
				extraData: {},
				success(res) {
					console.log(res)
				},
				fail(err) {
					console.log(err)
				}
			});
		},

		onQrCodeClick() {
			uni.navigateTo({
				url: '/pages/qrCode/QrCode'
			})
		},

		onShareAppMessage() {
			const promise = new Promise(resolve => {
				setTimeout(() => {
					resolve({
						title: '领外卖红包'
					})
				}, 2000)
			})
			return {
				title: '领外卖红包',
				path: '/page/index/index?source=share',
				promise
			}
		},
	}
}
</script>

<style lang="scss" scoped>
	.container {
		height: 100%;
		box-sizing: border-box;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff!important;
	}

	.swiper {
		width: 100%;
		height: 50vw;
	}
	.swiper-img {
		display: block;
		width: 100%;
		height: 100%;
	}
	.promotion {
		display: flex;
		flex-wrap: wrap;
		.item {
			width: 100%;
			height: 100%;
			// border: 1px solid #aaa;
			// border-radius: 5px;
			// padding: 8px 4px;
			background-repeat: no-repeat;
			background-size: 100% auto;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 1.1rem;
			font-weight: 100;
		}
	}

 	.apps{
		.grid-item-box{
			margin: 20rpx 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.icon-wrap{
			width: 100rpx;
			height: 100rpx;
			margin-bottom: 10rpx;
			border-radius: 10rpx;
			background-color: aquamarine;
			display: flex;
			justify-content: center;
			align-items: center;
			.iconfont{
				font-size: 60rpx;
				color: #fff;
			}
		}
	}

	.tools-wrap{
		margin-top: 40rpx;
		.tools-title{
			margin-bottom: 20rpx;
			text-indent: 20rpx;
			font-size: 1.1rem;
			font-weight: bold;
		}
	}
</style>
