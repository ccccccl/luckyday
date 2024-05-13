<template>
	<div ref="container" class="container">
    <div ref="dayWrap" class="day-wrap">
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
        <text class="">{{currentCanlender.IMonthCn}}{{currentCanlender.IDayCn}}</text>
        <div class="iconfont icon-next" @click="onNextTap"></div>
      </div>

      <div class="desc" style="text-align: center;">{{currentCanlender.gzYear}}年 {{currentCanlender.gzMonth}}月 {{currentCanlender.gzDay}}日 【属{{currentCanlender.Animal}}】{{currentCanlender.ncWeek}} 第{{ currentCanlender.yearWeek }}周</div>

      <div class="suit-avoid-wrap">
        <div wx:if="currentDayInfo.suit" class="day-suit-avoid suit-avoid-box">
          <div class="row suit">
            <div class="label">宜</div>
            <div class="val" >
              <text v-for="item in currentYJ.y" :key="item" 
                    @click="onValTap(item)"> {{item}} </text>
            </div>
          </div>
          <div class="row avoid">
            <div class="label">忌</div>
            <div class="val">
              <text v-for="item in currentYJ.j" :key="item" 
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
            <div class="val">{{ currentTable.wx }}</div>
          </uni-col>
          <uni-col class="col br-1" :span="10">
            <view class="label">冲煞</view>
            <div class="val">{{ currentTable.cs }}</div>
          </uni-col>
          <uni-col class="col" :span="7">
            <view class="label">值神</view>
            <div class="val">{{ currentTable.zhishen }}</div>
          </uni-col>
        </uni-row>

        <uni-row class="row-2">
          <view class="label">时辰吉凶</view>
          <view v-for="item in currentTable.jxList" :key="item" 
              class="val jx-item">
            {{ item }}
          </view>
        </uni-row>

        <uni-row class="row-3">
          <uni-col class="col col-left" :span="3">
            <view class="label">建除十二神</view>
            <div class="val">{{ currentTable.jianchu }}</div>
          </uni-col>
          <uni-col class="col col-center bl-1 br-1" :span="18">
            <uni-row class="row-3-1">
              <uni-col class="col br-1" :span="8">
                <view class="label">吉神宜趋</view>
                <div class="val">{{ currentTable.jsyq }}</div>
              </uni-col>
              <uni-col class="col br-1" :span="8">
                <view class="label">今日胎神</view>
                <div class="val">{{ currentTable.taishen }}</div>
              </uni-col>
              <uni-col class="col" :span="8">
                <view class="label">凶神宜忌</view>
                <div class="val">{{ currentTable.xsyj }}</div>
              </uni-col>
            </uni-row>
            <uni-row class="row-3-2">
              <view class="label">彭祖百忌</view>
              <div class="val">{{ currentTable.pzbj }}</div>
            </uni-row>
          </uni-col>
          <uni-col class="col col-right" :span="3">
            <view class="label">二十八星宿</view>
            <div class="val">{{ currentTable.stars28 }}</div>
          </uni-col>
        </uni-row>
      </div>
    </div>
		
    <div ref="hourWrap" class="hour-wrap">
      <div class="hour-title">当前时辰</div>
      <div class="hour-content">
        <div class="left">{{ currentShichen.lunarHour }}</div>
        <div class="right">
          <div class="lunar">
            <span class="red">{{ currentShichen.StemBranchHour }}时</span>
            <span>{{ currentShichen.hour }}</span>
            <span>{{ currentShichen.cs }}</span>
          </div>
          <div class="caixi">{{ currentShichen.caixi }}</div>
          <div class="yiji yi">
            <div class="label">宜</div>
            <div class="val" >
              <text v-for="item in currentShichen.yi" :key="item" 
                    @click="onValTap(item)"> {{item}} </text>
            </div>
          </div>
          <div class="yiji ji">
            <div class="label">忌</div>
            <div class="val" >
              <text v-for="item in currentShichen.ji" :key="item" 
                    @click="onValTap(item)"> {{item}} </text>
            </div>
          </div>
        </div>
        <div class="jx" 
            :class="currentShichen.jx === '吉' ? 'ji' : 'xiong'">{{ currentShichen.jx }}</div>
      </div>

      <div class="more" @click="navigateToHours">
        查看更多 
        <uni-icons type="right" size="16" color="#777"></uni-icons>
      </div>  
    </div>

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
import { getDayInfos } from "@/assets/huangli/getDayInfos.js"

const { explainJson } = require('@/assets/data/explain.js').default;

export default {
  name: 'almanac',
  data() {
    return {
      currentTime: {},
      currentCanlender: {
        IMonthCn: '',
        IDayCn: '',
        gzYear: '',
        gzMonth: '',
        gzDay: '',
      },
      currentYJ: {},
      currentTable: {
        wx: '',
        cs: '',
        zhishen: '',
        jxList: [],
        jianchu: '',
        jsyq: '',
        taishen: '',
        xsyj: '',
        pzbj: '',
        stars28: ''
      },
      currentShichen: {},
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
      dateInfo: {},
      dayHeight: 0
    }
  },

  onLoad() {
    this.currentTime = dayjs();
    // this.getCurrentQuarter();
  },

  watch: {
    'currentTime': function (currentTime) {
      this.currentDate = currentTime.format('YYYY年MM月DD日')

      let data = getDayInfos(new Date(this.currentTime))
      this.currentCanlender = data.currentCanlender;
      this.currentYJ = {
        y: data.currentYJ.y.split(' '),
        j: data.currentYJ.j.split(' ')
      };
      this.currentTable = data.currentJX;
      this.currentShichen = data.currentHourYJ;

      // uni.getWindowInfo()

      // let height = this.getComputedStyle(this.$refs.dayWrap).height;
      // dayHeight

      // console.log('day height', height)
      // console.log('container height', this.getComputedStyle(this.$refs.container).height)
      // console.log('hour height', window.getComputedStyle(this.$refs.hourWrap).height)
      // this.$refs.hourWrap.style.maxHeight = `calc(100vh - ${height} - 2rpx)`;
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
        },
        fail(err) {
          console.log(err)
        }
      })
    },

    findCurrentDay(allDays) {
      allDays.forEach(item => {
        if (dayjs(item.oDate).format('YYYY年MM月DD日') === this.currentDate) {
          console.log(dayjs(item.oDate).format('YYYY年MM月DD日'), this.currentDate, item)
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

    navigateToHours() {
      uni.navigateTo({
        url: `/pages/hoursList/HoursList?date=${this.currentTime.format('YYYY-MM-DD')}`,
      })
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
.day-wrap{
  padding: 30rpx 20rpx;
  background-color: #fff;
}

.hour-wrap{
  margin-top: 20rpx;
  padding: 30rpx;
  background-color: #fff;
}
.hour-title{
  margin-bottom: 30rpx;
  font-size: 32rpx;
  font-weight: bold;
}
.hour-content{
  position: relative;
  display: flex;
  .left{
    margin-right: 20rpx;
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
    text-align: center;
    line-height: 100rpx;
    background-color: #d03f3f;
    border: .05333rem solid #e96f6f;
    color: #fff;
    font-size: 40rpx;
  }
  .right{
    flex: 1;
    font-size: 24rpx;
    color: #777;
    span{
      display: inline-block;
      margin-right: 20rpx;
    }
    .lunar{
      margin-bottom: 1em;
      .red{
        font-size: 1.2em;
        color: #d03f3f;
      }
    }
    .caixi{
      margin-bottom: 1em;
    }
    .yiji{
      display: flex;
      align-items: center;
      margin-bottom: .5em;
    }
  }
  .jx{
    position: absolute;
    right: 0rpx;
    top: 0rpx;
    width: 1.6em;
    height: 1.6em;
    text-align: center;
    line-height: 1.6em;
    color: #fff;
    border-radius: 50%;
    font-size: 20rpx;
    &.ji{
      background-color: #d03f3f;
    }
    &.xiong{
      background-color: rgb(0, 128,0);
    }
  }
  
}
.hour-wrap .more{
  margin-top: 50rpx;
  margin-bottom: 24rpx;
  height: 2.5em;
  border-radius: 40rpx;
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #777;
  font-size: 16px;
}

.picker{
  font-size: 26rpx;
}
.lunarDate-row{
  width: 90%;
  margin: 40rpx auto;
  // padding: 0 30rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 68rpx;
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
  margin-right: 6rpx;
  color: #777;
}

.suit-avoid-wrap{
  padding: 0 10rpx;
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
  line-height: 1.2;
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
.suit-avoid-box .label,
.yiji .label{
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
.suit-avoid-box .suit .label,
.yi .label{
  background-color: rgba(208,63,63, .9);
}
.suit-avoid-box .avoid .label,
.ji .label {
  background-color: rgba(0, 128, 0, .8);
}
.day-suit-avoid .val text {
  display: inline-block;
  margin-right: 18rpx;
}

.day-suit-avoid .suit .val text,
.yi .val {
  color: #d03f3f;
}
.day-suit-avoid .avoid .val text,
.ji .val {
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
