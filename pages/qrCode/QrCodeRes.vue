<template>
  <div class="container">
    <div class="qrcode-wrap">
      <uqrcode 
        ref="uqrcode" 
        canvas-id="qrcode" 
        :value="qrText" 
        :options="{ margin: 10 }"
        @complete="onComplete"></uqrcode>
    </div>
    <button
      :disabled="!qrText"
      type="primary" 
      style="margin: 50rpx 0;" 
      @click="onSaveClick">保存</button>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      qrText: '',
      canvasId: 'qrcode',
      isCompleted: false,
    }
  },
  onLoad(option) {
    this.qrText = option.text;
  },
  methods: {
    onComplete(res) {
      if (res.success) {
        console.log('onComplete', res.success, this.qrText)
        this.isCompleted = true
      }
    },
    onSaveClick() {
      const self = this;
      if (!this.isCompleted) return;

      // 获取用户的当前设置
      uni.getSetting({
        success(res) {
          const writePhotosAlbum = res.authSetting['scope.writePhotosAlbum'];
          console.log('getSetting writePhotosAlbum', writePhotosAlbum)
          if (writePhotosAlbum) {
            // 已允许
            console.log('getSetting, 已授权')
            self.handleSave();
          } else if (writePhotosAlbum === false) {
            // 已不允许
            console.log('getSetting, 未授权')
            // 提示用户去设置
            uni.showModal({
              title: '提示',
              content: '请先授权相册权限',
              success: (res) => {
                if (res.confirm) {
                  uni.openSetting({
                    success: (res) => {
                      console.log('openSetting', res)
                      if (res.authSetting['scope.writePhotosAlbum']) {
                        // 用户已同意小程序使用相册权限
                        self.handleSave();
                      }
                    }
                  })
                } else if (res.cancel) {
                  uni.showToast({
                    title: '您取消了相册授权',
                    icon: none
                  })
                }
              }
            })
          } else {
            // 第一次调用
            // 向用户发起授权请求
            uni.authorize({
              scope: 'scope.writePhotosAlbum',
              success() {
                console.log('authorize success')
                self.handleSave();
              },
              fail() {
                console.log('authorize fail')
                uni.showToast({
                  title: '授权失败， 请稍后重试',
                  icon: none
                })
              }
            })
          }
        }
      })
    },

    handleSave() {
      this.$refs.uqrcode.save({
        success: () => {
          uni.showToast({
            icon: 'success',
            title: '保存成功'
          });
        },
        fail: () => {
          uni.showToast({
            icon: 'none',
            title: '保存失败'
          });
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  height: calc(100% - 40rpx);
  padding: 20rpx;
  background-color: #fff;
}
.qrcode-wrap{
  margin: 100rpx 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>