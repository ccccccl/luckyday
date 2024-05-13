<template>
  <div class="container">
    <div class="row">
      <div>开始日期: </div>
      <picker class="val" mode="date" :value="startDateString" 
              @change="onDateChange">
        {{startDateString}}
      </picker>
    </div>
    <div class="row">
      <div>间隔：</div>
      <input class="val" :value="interval" type="number" 
            placeholder="请输入间隔数字" 
            @input="onItervalInput" />
    </div>
    <div class="row">
      <div>单位：</div>
      <picker class="val" mode="selector" 
              :range="units" range-key="text" :value="unitIndex" @change="onUnitChange">
        {{units[unitIndex].text}}
      </picker>
    </div>
    <div class="row">
      <div>计算方向：</div>
      <picker class="val" mode="selector" 
              :range="directionArr" :value="directionIndex"
              @change="onDirectionChange">
        {{directionArr[directionIndex]}}
      </picker>
    </div>
    <div class="row">
      <div>计算结果: </div>
      <div class="val">
        {{endDateString}}
      </div>
    </div>
    
  </div>
</template>

<script>
const dayjs = require('dayjs');
var quarterOfYear = require('dayjs/plugin/quarterOfYear')
dayjs.extend(quarterOfYear)

import util from '../../utils/utils'

export default {
  data() {
    return {
      startDateString: util.formatTime(new Date(), 'day'),
      endDateString: '',
      interval: '',
      // 小时	h
      // 分钟	m
      // 秒	s
      // 毫秒	ms
      units: [
        { id: 'd', text: '天' },
        { id: 'w', text: '周' },
        { id: 'M', text: '月' },
        { id: 'Q', text: '季度' },
        { id: 'y', text: '年' }
      ],
      unitIndex: 0,
      directionArr: ['之后', '之前'],
      directionIndex: 0
    }
  },
  created() {
    // this.calcDate();
  },

  methods: {
    onDateChange(e) {
      this.startDateString = e.detail.value;
      this.calcDate();
    },


    onItervalInput(e) {
      this.interval = e.detail.value;
      this.calcDate();
    },

    onUnitChange(e) {
      this.unitIndex = Number(e.detail.value);
      this.calcDate();
    },

    onDirectionChange(e) {
      this.directionIndex = e.detail.value;
      this.calcDate();
    },

    calcDate() {
      let startTime = new Date(this.startDateString.replace(/-/g, '/')),
        { units, unitIndex, directionArr, directionIndex } = this,
        interval = Number(this.interval),
        unit = units[unitIndex].id,
        direction = directionArr[directionIndex],
        endTime;

      if (direction === '之后') {
        endTime = dayjs(startTime).add(interval, unit)
      } else {
        endTime = dayjs(startTime).subtract(interval, unit)
      }
      this.endDateString = endTime.format('YYYY-MM-DD')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  padding: 0 24rpx;
  background-color: #fff;

  .row {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1rpx solid #eee;
    padding: 0 12rpx;
    display: flex;
    justify-content: space-between;

    .val {
      flex: 1;
      height: 100%;
      text-align: right;
    }
  }
}
</style>