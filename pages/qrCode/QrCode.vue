<template>
  <div class="container">
    <!-- <uni-section title="二维码内容" subTitle="输入链接或文字，生成二维码" padding> -->
			<uni-easyinput 
        type="textarea" 
        v-model="qrText" 
        placeholder="请输入要生成的内容"
        style="height: 500rpx;"
        :placeholderStyle="placeholderStyle"></uni-easyinput>
      <button type="primary" style="margin: 20rpx 0;" @click="onBtnClick">生成二维码</button>
      
		<!-- </uni-section> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      qrText: '',
      // canvasId: 'qrcode',
      // qrcode: null,
      placeholderStyle: 'font-size:28rpx'
    }
  },
  methods: {
    onBtnClick() {
      if (!this.qrText) {
        uni.showToast({
          icon: 'error',
          title: '请输入内容'
        });
        return;
      }
      uni.navigateTo({
        url: `/pages/qrCode/QrCodeRes?text=${this.qrText}`,
        success: (result) => {
          
        },
        fail: () => {},
        complete: () => {}
      });
        
    },
  }
}
</script>

<style lang="scss" scoped>
.container{
  height: calc(100% - 40rpx);
  padding: 20rpx;
  background-color: #fff;
  fons-size: 22rpx;
  /deep/ .uni-easyinput__content, 
  /deep/ .uni-easyinput__content-textarea{
    height: 100%;
  }
  /deep/ .uni-easyinput__content {
    padding: 20rpx;
  }
}

</style>