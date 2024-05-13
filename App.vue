<script>
	import utils from './utils/utils'

	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
		},
		onShow: function() {
			const { year, fullYearMonths } = this.$store.state;
			utils.getDays(year, fullYearMonths).then(res => {
				this.$store.commit('setFullYearDays', res)
			});
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	@import '@/static/iconfont/iconfont.css';
	// 设置整个项目的背景色
	page {
		height: 100%;
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>
