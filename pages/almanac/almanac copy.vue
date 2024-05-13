<template>
	<div class="container">
    <div class="day-wrap">
      <div>
        <picker style="text-align: center;" mode="date" 
                :value="currentDate" 
                @change="onDateChange">
          <span class="picker">
            {{currentDate}}
          </span>
          <span class="iconfont icon-expand"></span>
        </picker>
      </div>

      <div class="lunarDate-row">
        <div class="iconfont icon-previous" @click="onPrevTap"></div>
        <text class="">{{currentDayInfo.lMonth}}月{{currentDayInfo.lDate}}</text>
        <div class="iconfont icon-next" @click="onNextTap"></div>
      </div>

      <div class="desc" style="text-align: center;">{{currentDayInfo.gzYear}}年 {{currentDayInfo.gzMonth}}月 {{currentDayInfo.gzDate}}日 【属{{currentDayInfo.animal}}】周{{currentDayInfo.cnDay}}</div>

      <div class="suit-avoid-wrap">
        <div wx:if="currentDayInfo.suit" class="day-suit-avoid suit-avoid-box">
          <div class="row suit">
            <div class="label">宜</div>
            <div class="val" >
              <text v-for="item in currentDayInfo.suit" :key="item" 
                    @click="onValTap(item)"> {{item}} </text>
            </div>
          </div>
          <div class="row avoid">
            <div class="label">忌</div>
            <div class="val">
              <text v-for="item in currentDayInfo.avoid" :key="item" 
                    @click="onValTap(item)"> {{item}} </text>
            </div>
          </div>
        </div>
        <div class="ji-btn" @click="navigateToCheckDays">吉日查询</div>
      </div>

      <div class="day-table">
        <uni-row class="row-1">
          <uni-col class="col br-1" :span="7">
            <view class="label">五行</view>
            <div class="val">{{ dateInfo.wuxing }}</div>
          </uni-col>
          <uni-col class="col br-1" :span="10">
            <view class="label">冲煞</view>
            <div class="val">{{ dateInfo.chongsha }}</div>
          </uni-col>
          <uni-col class="col" :span="7">
            <view class="label">值神</view>
            <div class="val">{{ dateInfo.zhishen }}</div>
          </uni-col>
        </uni-row>

        <uni-row class="row-2">
          <view class="label">时辰吉凶</view>
          <view v-for="item in dateInfo.jxList" :key="item" 
              class="val jx-item">
            {{ item }}
          </view>
        </uni-row>

        <uni-row class="row-3">
          <uni-col class="col col-left" :span="3">
            <view class="label">建除十二神</view>
            <div class="val">{{ dateInfo.jianchu }}</div>
          </uni-col>
          <uni-col class="col col-center bl-1 br-1" :span="18">
            <uni-row class="row-3-1">
              <uni-col class="col br-1" :span="8">
                <view class="label">吉神宜趋</view>
                <div class="val">{{ dateInfo.jsyq }}</div>
              </uni-col>
              <uni-col class="col br-1" :span="8">
                <view class="label">今日胎神</view>
                <div class="val">{{ dateInfo.taishen }}</div>
              </uni-col>
              <uni-col class="col" :span="8">
                <view class="label">凶神宜忌</view>
                <div class="val">{{ dateInfo.xsyj }}</div>
              </uni-col>
            </uni-row>
            <uni-row class="row-3-2">
              <view class="label">彭祖百忌</view>
              <div class="val">{{ dateInfo.pzbj }}</div>
            </uni-row>
          </uni-col>
          <uni-col class="col col-right" :span="3">
            <view class="label">二十八星宿</view>
            <div class="val">{{ dateInfo.stars28 }}</div>
          </uni-col>
        </uni-row>
      </div>
    </div>
		
    <div class="hour-wrap">

    </div>

    <scroll-view scroll-y="true" class="scroll-Y">
      <div v-for="item in 12" :key="item" class="hour-card">
        <div class="hour-row">
          <text style="color: #000;">{{zhi[item]}}时</text>
          <text class="val" style="margin: 0 20rpx;">{{hours[item]}}</text>
          <text class="val">冲{{animals[(item + 6) % 12]}}</text>
        </div>

        <div class="hour-suit-avoid suit-avoid-box">
          <div class="row suit">
            <div class="label">宜</div>
            <div class="val" v-if="hoursInfo['Yi' + item] === '-'">
              <text> 无 </text>
            </div>
            <div class="val" v-else>
              <text v-for="i in hoursInfo['Yi' + item]" :key="i"
                    @click="onValTap(i)"> {{i}} </text>
            </div>
          </div>
          <div class="row avoid">
            <div class="label">忌</div>
            <div class="val" v-if="hoursInfo['Ji' + item] === '-'">
              <text> 无 </text>
            </div>
            <div class="val" v-else>
              <text v-for="i in (hoursInfo['Ji' + item])" :key="i"
                    @click="onValTap(i)"> {{i}} </text>
            </div>
          </div>
        </div>
      </div>  
    </scroll-view>


    <!-- <div style="width: 100%;">
      <div v-for="item in 12" :key="item" class="hour-card">
        <div class="hour-row">
          <text style="color: #000;">{{zhi[item]}}时</text>
          <text class="val" style="margin: 0 20rpx;">{{hours[item]}}</text>
          <text class="val">冲{{animals[(item + 6) % 12]}}</text>
        </div>

        <div class="hour-suit-avoid suit-avoid-box">
          <div class="row suit">
            <div class="label">宜</div>
            <div class="val" v-if="hoursInfo['Yi' + item] === '-'">
              <text> 无 </text>
            </div>
            <div class="val" v-else>
              <text v-for="i in hoursInfo['Yi' + item]" :key="i"
                    @click="onValTap"> {{i}} </text>
            </div>
          </div>
          <div class="row avoid">
            <div class="label">忌</div>
            <div class="val" v-if="hoursInfo['Ji' + item] === '-'">
              <text> 无 </text>
            </div>
            <div class="val" v-else>
              <text v-for="i in hoursInfo['Ji' + item]" :key="i"
                    @click="onValTap"> {{i}} </text>
            </div>
          </div>
        </div>
      </div>  
    </div> -->

    <!-- <uni-popup type="center" visible="{{ visible }}" title="{{popName}}" bind:close="onPopClose">
      <div class="pop-val">{{explain}}</div>
    </uni-popup> -->
    <uni-popup ref="explainDialog" type="dialog">
      <uni-popup-dialog type="info" 
                        confirmText="了解了" 
                        :title="popName" :content="explain" 
                        @confirm="onPopClose"
        @close="onPopClose"></uni-popup-dialog>
    </uni-popup>
	</div>  
</template>

<script>
const dayjs = require('dayjs');
import { daysInfo, gan, zhi, animals, hours } from '@/assets/data/hoursInfo.js';
import { getDateInfo } from "@/assets/huangli/getDateInfo.js"
import { getDayInfos } from "@/assets/huangli/getDayInfos.js"
import { getShichenInfo } from "@/assets/huangli/getShichenInfo.js"


const { explainJson } = require('@/assets/data/explain.js').default;



export default {
  name: 'Home',
  data() {
    return {
      currentTime: {},
      currentDate: '',
      currentDayInfo: {
        lMonth: '',
        lDate: '',
        gzYear: '',
        gzMonth: '',
        gzDate: '',
        animal: '',
        cnDay: ''
      },
      lunarDate: '',
      almanacYear: '',
      almanacMonth: '',
      animalYear: '',
      almanacDay: '',
      suit: '',
      avoid: '',
      time: '',
      almanacTime: '',
      hoursInfo: {},
      gan,
      zhi,
      animals,
      currentShichen: {},
      hours,
      visible: false,
      popName: '',
      explain: '',
      dateInfo: {}
    }
  },

  onLoad() {
    this.currentTime = dayjs();
    // this.getCurrentQuarter();
  },

  watch: {
    'currentTime': function (currentTime) {
      this.currentDate = currentTime.format('YYYY年MM月DD日')
      // this.getCurrentQuarter();
      // this.dateInfo = getDateInfo(currentTime.toDate());
      // this.getCurrentShichen();

      console.log('getDayInfos', getDayInfos(new Date(this.currentTime)))
      // console.log('dateInfo', this.dateInfo)
      // console.log('getShichenInfo', currentTime.toDate())
    },
  },

  methods: {
    getCurrentQuarter() {
      // const quarter = dayjs(dayjs()).quarter();
      const self = this;
      const currentTime = this.currentTime;
      uni.request({
        url: this.$store.state.url + `query=${currentTime.year()}年${currentTime.month() + 1}月`,
        success(res) {
          const data = res.data.Result[0].DisplayData.resultData.tplData.data.almanac;
          self.findCurrentDay(data);
          // 找
          daysInfo.forEach(item => {
            if (item._Date === self.currentDayInfo.gzDate) {
              self.hoursInfo = item;
            }
          })
          // console.log(self.hoursInfo)
        },
        fail(err) {
          console.log(err)
        }
      })
    },

    findCurrentDay(allDays) {
      allDays.forEach(item => {
        if (dayjs(item.oDate).format('YYYY年MM月DD日') === this.currentDate) {
          this.currentDayInfo = {
            ...item,
            suit: item.suit.split('.'),
            avoid: item.avoid.split('.')
          };
        }
      })
    },

    onPrevTap() {
      const day = this.currentTime.subtract(1, 'day');
      this.currentTime = day;
    },

    onNextTap() {
      const day = this.currentTime.add(1, 'day');
      this.currentTime = day;
    },

    onDateChange(e) {
      const day = dayjs(e.detail.value);
      this.currentTime = day;
    },

    getCurrentShichen() {
      // this.currentShichen = getShichenInfo(this.currentTime.toDate(), this.currentDayInfo.gzDate);
      // console.log(this.currentShichen)
    },

    onValTap(name) {
      console.log(1111, name)
      if (name != '无') {
        this.$refs.explainDialog.open()
        this.popName = name;
        console.log(222, explainJson, name)
        this.explain = explainJson[`${name}`];
      }
    },

    onPopClose() {
      // this.visible = false;
    },

    navigateToCheckDays() {
      uni.navigateTo({
        url: '/pages/luckyList/LuckyList'
      });
        
    },


    onShareAppMessage() {
      const promise = new Promise(resolve => {
        setTimeout(() => {
          resolve({
            title: '查看每天运势'
          })
        }, 2000)
      })
      return {
        title: '查看每天运势',
        path: '/page/almanac/almanac?source=share',
        promise
      }
    },

    onShareTimeline() {
      const promise = new Promise(resolve => {
        setTimeout(() => {
          resolve({
            title: '查看每天运势'
          })
        }, 2000)
      })
      return {
        title: '查看每天运势',
        path: '/page/almanac/almanac?source=share',
        promise
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  
}
.day-wrap{
  padding: 30rpx 20rpx;
  background-color: #fff;
}
.picker{
  font-size: 26rpx;
}
.lunarDate-row{
  width: 90%;
  margin: 10rpx auto;
  // padding: 0 30rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 50rpx;
  color: #d03f3f;
}
.lunarDate-row .iconfont{
  font-size: 50rpx;
}
.desc{
  flex: 1;
  font-size: 24rpx;
  color: #666;
}

.val text{
  margin-right: 4rpx;
  color: #777;
}

.suit-avoid-wrap{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.suit-avoid-box{
  width: 100%;
  box-sizing: border-box;
  .val{
    flex: 1;
    font-size: 26rpx;
  }
}
.ji-btn{
  width: 2em;
  padding: 10rpx 16rpx;
  border: 1rpx solid #c69c70;
  border-radius: 10rpx;
  font-size: 26rpx;
  color: #c69c70;

}
.day-suit-avoid{
  flex: 1;
  padding: 20rpx 10rpx 30rpx;
}

.suit-avoid-box .row{
  margin-top: 12rpx;
  display: flex;
  align-items: center;
}
.suit-avoid-box .label{
  margin-right: 20rpx;
  width: 50rpx;
  height: 32rpx;
  text-align: center;
  line-height: 32rpx;
  border-radius: 50rpx;
  -webkit-border-radius: 50rpx;
  -moz-border-radius: 50rpx;
  -ms-border-radius: 50rpx;
  -o-border-radius: 50rpx;
  font-size: 26rpx;
  color: #fff;
}
.suit-avoid-box .suit .label{
  background-color: rgba(208,63,63, .9);
}
.suit-avoid-box .avoid .label {
  background-color: rgba(0, 128, 0, .8);
}
.day-suit-avoid .val text {
  display: inline-block;
  margin-right: 18rpx;
}

.day-suit-avoid .suit .val text {
  color: #d03f3f;
}
.day-suit-avoid .avoid .val text {
  color: rgb(0, 128,0);
}

.day-table{
  border: 1rpx solid #e3e0d8;
  border-radius: 10rpx;
  
  .label{
    font-size: 24rpx;
    color: #c69c70;
  }
  .val{
    font-size: 24rpx;
    color:#333;
  }
  ::v-deep .uni-row:not(:last-child){
    border-bottom: 1rpx solid #e3e0d8;
  }
  .row-1{
    height:80rpx;
    line-height:80rpx;
    .col{
      display: flex;
      justify-content: center;
      align-items: center;
      
    }
    .label{
      margin-right: 1em;
    }
  }
  .row-2{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10rpx 0;
    .label{
      width: 2em; 
      height: 100%;
      padding: 0 20rpx;
    }

    .jx-item{
      width: 1em;
      height: 100%;
      line-height: 40rpx;
      text-align: center;
    }
  }
  .bl-1{
    border-left: 1rpx solid #e3e0d8;
  }

  .br-1{
    border-right: 1rpx solid #e3e0d8;
  }

  .row-3{
    // min-height: 240rpx;
    display: flex;
    align-items: normal;
    .col-center{
      .label{
        margin-bottom: 10rpx;
      }

      .row-3-1{
        display: flex;
        align-items: normal;
        text-align: center;
        .col{
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10rpx 0;
        }
      }
      .row-3-2{
        height: 100rpx;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 10rpx 0;
      }
    }
    .col-left, .col-right{
      display: flex;
      justify-content: space-around;
      align-items: center;
      .label{
        width: 1em;
      }
      .val{
        width: 1em;
      }
    }
  }

  
}

.hour-card{
  border-bottom: 1rpx solid #eee;
  border-radius: 10rpx;
  -webkit-border-radius: 10rpx;
  -moz-border-radius: 10rpx;
  -ms-border-radius: 10rpx;
  -o-border-radius: 10rpx;
  margin: 0 30rpx;
  padding: 20rpx 0;
  color: #333;
}

</style>
