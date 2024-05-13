<template>
  <div>
    <div class="container">
      <uni-list>
        <uni-list-item title="开始日期" link>
          <template v-slot:footer>
            <picker class="picker" mode="date" :value="startDateString" 
                    @change="e => onDateChange('startDateString', e)">
              {{startDateString}}
            </picker>
          </template>
        </uni-list-item>
        <uni-list-item title="结束日期" link>
          <template v-slot:footer>
            <picker class="picker" mode="date" :value="endDateString"  
                    @change="e => onDateChange('endDateString', e)">
              {{endDateString}}
            </picker>
          </template>
        </uni-list-item>
      </uni-list>

      <!-- <div class="row">
        <div>开始日期: </div>
        <picker class="picker" mode="date" :value="startDateString" 
                @change="e => onDateChange('startDateString', e)">
          {{startDateString}}
        </picker>
      </div>
      <div class="row">
        <div>结束日期: </div>
        <picker class="picker" mode="date" :value="endDateString"  
                @change="e => onDateChange('endDateString', e)">
          {{endDateString}}
        </picker>
      </div> -->

      
    </div>
    <uni-card title="计算结果">
      <div class="uni-body">相差{{interval}}天</div>
    </uni-card>
  </div>
</template>

<script>
import util from '../../utils/utils'
export default {
  data() {
    return {
      startDateString: util.formatTime(new Date(), 'day'),
      endDateString: util.formatTime(new Date(), 'day'),
      interval: 0
    }
  },
  methods: {
    onDateChange(key, e) {
      const { value } = e.detail;
      this[key] = value;
      let endTime = new Date(this.endDateString.replace(/-/g, '/')).getTime(),
        startTime = new Date(this.startDateString.replace(/-/g, '/')).getTime(),
        timeDiff = Math.abs(endTime - startTime);
      // 将时间差转为天数
      let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      this.interval = diffDays;
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  height: 100%;
  padding: 0 30rpx;
  // background-color: #fff;
  .row {
    width: 100%;
    height: 60px;
    // line-height: 50px;
    // border-bottom: 1rpx solid #eee;
    padding: 0 12rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .picker{
      flex: 1;
      text-align: center;
    }
  }
  .uni-body{
    height: 200rpx;
  }
}


</style>
