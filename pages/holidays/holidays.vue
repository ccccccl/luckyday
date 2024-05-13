<template>
  <div>
    <uni-collapse>
      <uni-collapse-item>
        <template v-slot:title>
          <div class="title">
            <i class="iconfont icon-bagua"></i>
            <text class="title-text">折叠标题</text>
          </div>
        </template>
        <div class="content">
          <uni-list>
            <uni-list-item 
              v-for="item in holidays" 
              :key="item.name" 
              title="列表文字"
              note="列表描述信息"
              rightText="右侧文字"></uni-list-item>
          </uni-list>
        </div>
      </uni-collapse-item>
    </uni-collapse>
  </div>

</template>

<script>
const dayjs = require('dayjs');
const dayOfYear = require('dayjs/plugin/dayOfYear');
const relativeTime = require('dayjs/plugin/relativeTime')





// import * as dayjs from 'dayjs'
import 'dayjs/locale/zh-cn' // 导入本地化语言
// import * as dayOfYear from 'dayjs/plugin/dayOfYear' // 导入插件
// import * as relativeTime from 'dayjs/plugin/relativeTime' // 导入插件
import utils from '../../utils/utils'

dayjs.locale('zh-cn') // 使用本地化语言
dayjs.extend(dayOfYear)
dayjs.extend(relativeTime)


console.log('dayjs.locale()', dayjs.locale())

export default {
  components: {},
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
          console.log('setFullYearDays', res)
          this.$store.commit('setFullYearDays', res)
          this.getFestivals(res);
        }).catch((err) => {
          console.log(err)
        })
      } else {
        this.allDays = fullYearDays;
        this.getFestivals(this.allDays);
      }
    },

    // 获取休息的节日
    getFestivals(allDays) {
      let holidaysList = [], restDays = [];

      // status为1，法定休息日（不含普通周末）；status为2，法定周末上班日。

      // type:
      // h(元旦、建军节、青年节（六）、国庆节、儿童节)3.12(周二)9.3（周二）
      // t（中秋节、除夕、春节、元宵、北小年、端午、七夕节、重阳节、 万圣节 。）
      // c(平安夜，圣诞节。）
      // a(感恩节, 情人节 七九天, 父亲节。)
      // i（妇女节，愚人节，劳动节，母亲节，芒种。）
      // 无type字段（立冬，小雪, 万圣夜，三九天，霜降）

      // baikeName 节日名，只有节日当天有这个字段
      // term：节日和节气名
      // let arr = allDays.filter(item => { return item.status && item.festivalList && item.term });
      // console.log('有status', arr.length)

      allDays.map(item => {
        // 法定节假日
        const holidays = ["元旦", "春节", "清明节", "劳动节", "端午节", "中秋节", "国庆节"];
        const term24 = ["立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至", "小寒", "大寒"];
        let firstTermName = '';
        if (item.term) {
          firstTermName = item.festivalInfoList[0].name;
        }
        if (firstTermName && holidays.includes(firstTermName)) {
          console.log(firstTermName, 'festivalList')
          // console.log(item.festivalList, 'festivalList' )
          console.log(item)
          
          // console.log(dayjs("2024-02-09T16:00:00Z").fromNow())
          
          holidaysList.push({
            name: item.firstTermName,
            date: dayjs(item.oDate).format('MM月DD日'),
            interval: dayjs(item.oDate).fromNow(),
          })
        }

      });


      // holidays = this.splitArray(restDays).map(item => {
      //   let name = [], mainDay = '', firstDate, lastDate, status;
      //   item.map(day => {
      //     if (day.term) {
      //       name.push(day.term);
      //       mainDay = day.dateString;
      //     }
      //   })
        
      //   // console.log('restDays item', item)
      //   firstDate = item[0].dateString;
      //   lastDate = item[item.length - 1].dateString;

      //   if (dayjs().isAfter(lastDate)) {
      //     status = 'past'
      //   } else if (dayjs().isBefore(firstDate)) {
      //     status = 'future'
      //   } else {
      //     status = 'now'
      //   }
      //   let firstDateStr = dayjs(firstDate).format('MM月DD日'),
      //       lastDateStr = dayjs(lastDate).format('MM月DD日');
      //   return {
      //     name: name.join('、'),
      //     mainDay,
      //     days: item,
      //     range: `${firstDateStr}——${lastDateStr}`,
      //     status,
      //     interval: status === 'past' ? dayjs().dayOfYear() - dayjs(lastDate).dayOfYear() : dayjs(firstDate).dayOfYear() - dayjs().dayOfYear()
      //   }
      // })
      // holidays[holidays.length - 1].name = '元旦';
      // console.log(holidays)
      
      this.holidays = holidaysList;
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
.title{
  display: flex;
  align-items: center;
  padding: 20rpx;
  .iconfont{
    margin-right: 20rpx;
    font-size: 30rpx;
    color: #007AFF;
  }
}

.content{
  padding-left: 40rpx;
}
</style>