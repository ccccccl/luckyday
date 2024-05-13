<template>
  <div class="container">
    <div class="content">
      <div class="title-row">
        <div class="title">吉日查询</div>
        <div class="title-btns">
          <div v-for="(item, idx) in typeList" :key="item" 
              class="title-btn btn-yi" 
              :class="{'actived': typeIdx === idx}"
              @click="typeIdx = idx">{{ item }}</div>
        </div>
      </div>
      <div class="list">
        <uni-grid :column="4" :show-border="false" :square="false">
          <uni-grid-item v-for="item in items" :key="item">
            <view class="grid-item-box" :class="typeIdx === 0 ? 'yi' : 'ji'"  
                  @click="onItemClick(item)">
              {{ item }}
            </view>
          </uni-grid-item>
        </uni-grid>
      </div>
    </div>
  </div>
</template>

<script>
import { luckyList } from '@/assets/data/luckyList.js'
import { files } from '@/assets/jiri/getJiDays.js'

console.log(files);

export default {
  data() {
    return {
      typeList: ['宜', '忌'],
      typeIdx: 0,
      items: luckyList
    }
  },
  onLoad () {
  },
  onShow () {
  },
  methods: {
    // onTypeChange(val) {
    //   this.typeIdx = val.detail.index
    // },

    onItemClick(item) {
      console.log(11111)
      console.log(`pages/tools/date/result?type=${this.typeIdx === 0 ? '适宜' : '禁忌'}&item=${item}`)
      uni.navigateToMiniProgram({
				appId: 'wx07bc42c54b7c8dd0',
				path: `pages/tools/date/result?type=${this.typeIdx === 0 ? '适宜' : '禁忌'}&item=${item}`,
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
  }
}
</script>

<style lang="scss" scoped>
.container{
  // height: 100vh;
  padding: 20rpx;
  background-color: #fff;
}
.content{
  position: relative;
}
.title-row{
  position: fixed;
  top: 0;
  left: 20rpx;
  right: 20rpx;
  z-index: 2;
  height: 80rpx;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title{
    font-size: 32rpx;
  }
  .title-btns{
    display: flex;
    align-items: center;
    .title-btn{
      width: 50rpx;
      padding: 0 20rpx;
      height: 60rpx;
      line-height: 60rpx;
      background-color: #f5f5f5;
      text-align: center;
      color: #999;
      &:nth-child(1){
        border-radius: 50rpx 0 0 50rpx;
      }
      &:nth-child(2){
        border-radius: 0 50rpx 50rpx 0;
      }
      &.actived{
        background-color: #ff9760;
        color: #fff;
      }
    }
  }
}

.list{
  padding-top: 80rpx;
}
.grid-item-box{ 
  margin: 10rpx auto;
  width: 90%;
  height: 80rpx;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rpx;
  &.yi{
    background: #fef2e8;
    color: #dc7148;
  }
  &.ji{
    background: #fcedec;
    color: #d46b5b;
  }
}
</style>