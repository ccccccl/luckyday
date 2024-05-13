<template>
  <div ref="hourWrap" class="hour-wrap">
    <uni-card v-for="item in hours" :key="item.lunarHour">
      <div class="hour-content">
        <!-- <div class="left">{{ item.lunarHour }}</div> -->
        <div class="right">
          <div class="lunar">
            <span class="red">{{ item.StemBranchHour }}时</span>
            <span>{{ item.hour }}</span>
            <span>{{ item.cs }}</span>
          </div>
          <div class="caixi">{{ item.caixi }}</div>
          <div class="yiji yi">
            <div class="label">宜</div>
            <div class="val" >
              <text v-for="item in item.yi" :key="item" 
                    @click="onValTap(item)"> {{item}} </text>
            </div>
          </div>
          <div class="yiji ji">
            <div class="label">忌</div>
            <div class="val" >
              <text v-for="item in item.ji" :key="item" 
                    @click="onValTap(item)"> {{item}} </text>
            </div>
          </div>
        </div>
        <div class="jx" 
            :class="item.jx === '吉' ? 'ji' : 'xiong'">{{ item.jx }}</div>
      </div>
    </uni-card>

    <uni-popup ref="explainDialog" type="dialog">
      <uni-popup-dialog type="info" 
                        confirmText="了解了" 
                        cancelText=""
                        :title="popName" :content="explain" 
                        @confirm="onPopClose"
        @close="onPopClose"></uni-popup-dialog>
    </uni-popup>
  </div>
</template>

<script>
const dayjs = require('dayjs');

const { explainJson } = require('@/assets/data/explain.js').default;

import { getHourInfos } from "@/assets/huangli/getDayInfos.js"

const times = ['00:10', '01:00', '03:00', '05:00', '07:00', '09:00', '11: 00', '13:00', '15:00', '17:00', '19:00', '21:00'];

export default {
  data() {
    return {
      hours: times.map(time => { 
        return {
          time,
          lunarHour: '',
          StemBranchHour: '',
          hour: '',
          cs: '',
          jx: '',
          yi: [],
          ji: []
        }
      }),
      explainJson: explainJson,
      visible: false,
      popName: '',
      explain: '',
    }
  },
  onLoad(option) {
    let hours = this.hours;
    let date = option.date || dayjs().format('YYYY-MM-DD');
    this.hours = hours.map(item => {
      let time = new Date(`${date} ${item.time}`)
      return { 
        ...item,
        ...getHourInfos(time)
      }
    })
  },
  methods: {
    onValTap(name) {
      console.log(1111, name)
      if (name != '无') {
        this.$refs.explainDialog.open()
        this.popName = name;
        this.explain = explainJson[`${name}`];
      }
    },
  }
}
</script>

<style lang="scss" scoped>


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

.yi .label{
  background-color: rgba(208,63,63, .9);
}
.ji .label {
  background-color: rgba(0, 128, 0, .8);
}
.val text{
  margin-right: 6rpx;
  color: #777;
}
</style>