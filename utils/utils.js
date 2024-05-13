const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}
export default {
  formatTime: (date, format) => {
    const year = new Date(date).getFullYear()
    const month = new Date(date).getMonth() + 1
    const day = new Date(date).getDate()
    const hour = new Date(date).getHours()
    const minute = new Date(date).getMinutes()
    const second = new Date(date).getSeconds()

    if (format === 'day') {
      return `${[year, month, day].map(formatNumber).join('-')}`
    }

    return `${[year, month, day].map(formatNumber).join('-')} ${[hour, minute, second].map(formatNumber).join(':')}`
  },


  formatNumber: n => {
    n = n.toString()
    return n[1] ? n : `0${n}`
  },

  getDays: (year, months) => {
    // let baseUrl = process.env.NODE_ENV === 'development' ? '' : 'https://opendata.baidu.com';
    let url = 'https://opendata.baidu.com/data/inner?type=json&resource_id=52109&apiType=yearMonthData&';
    let allDays = [], promises = [];

    months.map((item, i) => {
      promises.push(
        new Promise((resolve, reject) => {
          wx.request({
            url: url + `query=${year}年${item}月`,
            success(res) {
              const data = res.data.Result[0].DisplayData.resultData.tplData.data.almanac;
              resolve(data)
            },
            fail(err) {
              console.log(err)
              reject(err)
            }
          })
        })
      );
    })

    return Promise.all(promises)
      .then((data) => {
        allDays = [].concat(...data);
        return allDays;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
