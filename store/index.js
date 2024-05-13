// 页面路径：store/index.js
import Vue from "vue";
import Vuex from "vuex";
const dayjs = require('dayjs');


Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    url: 'https://opendata.baidu.com/data/inner?type=json&resource_id=52109&apiType=yearMonthData&',
    year: dayjs().year(),
    today: dayjs().format('YYYY-MM-DD'),
    fullYearMonths: ['2', '5', '8', '11'],
    fullYearDays: []
  },
  mutations: {
    setFullYearDays(state, res) {
      state.fullYearDays = res;
    }
  }
});

export default store;