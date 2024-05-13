<template>
	<view class="container">
		<uni-card v-for="item in holidays" :key="item.name"
							:title="item.name" :sub-title="item.range">
			<div class="uni-body" :class="item.status">
        <div v-if="item.status === 'past'">
          已经过去{{item.interval}}天
        </div>
        <div v-else-if="item.status === 'now'">
          好好享受假期吧~
        </div>
        <div v-else>
          <div>还有<span class="strong">{{item.interval}}</span>天就放假啦！</div>
          <div>
            <span v-if="item.range.slice(-6) === '12月31日'">今年还</span>
            可以休息
            <span class="strong">{{item.days.length}}</span>
            天哦~</div>
        </div>
      </div>
		</uni-card>
	</view>
</template>

<script>
const dayjs = require('dayjs');
const dayOfYear = require('dayjs/plugin/dayOfYear');
dayjs.extend(dayOfYear)

import utils from '../../utils/utils'

  
export default {
  name: 'Home',
  data() {
    return {
      allDays: [],
      holidays: [],
    }
  },

  onLoad() {
    this.getAllDays()
  },
  methods: {
    getAllDays() {
      console.log('this.$store', this.$store)
      const { year, fullYearMonths, fullYearDays } = this.$store.state;
      console.log(!fullYearDays || !fullYearDays?.length)
      if (!fullYearDays || !fullYearDays?.length) {
        utils.getDays(year, fullYearMonths).then(res => {
          this.$store.commit('setFullYearDays', res)
          this.getRestDays(res);
        }).catch((err) => {
          console.log(err)
        })
      } else {
        this.allDays = fullYearDays;
        this.getRestDays(this.allDays);
      }
    },

    // 获取休息的节日
    getRestDays(allDays) {
      let restDays = [], holidays = [];

      // status为1，法定休息日；status为2，法定周末上班日。
      // baikeName 节日名，只有节日节日当天有这个字段
      // term：节日和节气名
      // let arr = allDays.filter(item => { return item.status && item.festivalList && item.term });
      // console.log('有status', arr.length)

      allDays.map(item => {
        if (item.status === '1') {
          const dateString = `${item.year}/${item.month}/${item.day}`;
          restDays.push({
            dateString,
            term: item.term,
            type: item.type,
          })
        }
      });

      console.log('restDays', restDays)

      holidays = this.splitArray(restDays).map(item => {
        let name = [], mainDay = '', firstDate, lastDate, status;
        item.map(day => {
          if (day.term) {
            name.push(day.term);
            mainDay = day.dateString;
          }
        })
        
        // console.log('restDays item', item)
        firstDate = item[0].dateString;
        lastDate = item[item.length - 1].dateString;

        if (dayjs().isAfter(lastDate)) {
          status = 'past'
        } else if (dayjs().isBefore(firstDate)) {
          status = 'future'
        } else {
          status = 'now'
        }
        let firstDateStr = dayjs(firstDate).format('MM月DD日'),
            lastDateStr = dayjs(lastDate).format('MM月DD日');
        return {
          name: name.join('、'),
          mainDay,
          days: item,
          range: `${firstDateStr}——${lastDateStr}`,
          status,
          interval: status === 'past' ? dayjs().dayOfYear() - dayjs(lastDate).dayOfYear() : dayjs(firstDate).dayOfYear() - dayjs().dayOfYear()
        }
      })
      holidays[holidays.length - 1].name = '元旦';
      // console.log(holidays)
      
      this.holidays = holidays;
    },

    splitArray(arr) {
      let result =[];
      let temp = [arr[0]];

      for (let i = 1; i < arr.length; i++) {
        if ((dayjs(arr[i].dateString).subtract(1, 'days').isSame(arr[i - 1].dateString))) {
          // console.log(temp)
          temp.push(arr[i]);
        } else {
          result.push(temp);
          temp = [arr[i]];
        }
      }
      result.push(temp);
      return result;
    },

    onShareAppMessage() {
      const promise = new Promise(resolve => {
        setTimeout(() => {
          resolve({
            title: '看看还有几天放假'
          })
        }, 2000)
      })
      return {
        title: '看看还有几天放假',
        path: '/page/holidays/holidays?source=share',
        promise
      }
    },

    onShareTimeline() {
      const promise = new Promise(resolve => {
        setTimeout(() => {
          resolve({
            title: '看看还有几天放假'
          })
        }, 2000)
      })
      return {
        title: '看看还有几天放假',
        path: '/page/holidays/holidays?source=share',
        promise
      }
    }
  }
}
</script>

<style lang="scss" scoped>
	.container {
    padding-bottom: 20rpx;
		font-size: 14px;
		line-height: 24px;
	}
	.apps{
		.grid-item-box{
			margin: 20rpx 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.icon{
			width: 100rpx;
			height: 100rpx;
		}
	}
.container .past {
  color: #999;
}

.container .now {
  color: coral;
}

.container .future {
  color: #333;
}

.container .future .range {
  color: #333;
}

.container .future .strong {
  display: inline-block;
  margin: 0 10rpx;
  font-size: 1rem;
  color: dodgerblue;
}

</style>
