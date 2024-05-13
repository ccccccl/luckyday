// import { getGzDay } from "./getGzDay.js"
import { getWuxing } from "./getWuxing.js"
import { getChongsha } from "./getChongsha.js"
import { getZhishen } from "./getZhishen.js"
import { getJxList } from "./getJxList.js"
import { getJianchu } from "./getJianchu.js"
import { getStars28 } from "./getStars28.js"
import { getJixiongYiji } from "./getJixiongYiji.js"
import { getTaishen } from "./getTaishen.js"
import { getPZBJ } from "./getPZBJ.js"
import { getShenwei } from "./getShenwei.js"


export function getDateInfo(date) {
  return {
    // gzDay: getGzDay(),
    wuxing: getWuxing(date), // 五行
    chongsha: getChongsha(date), // 冲煞
    zhishen: getZhishen(date), // 值神
    jxList: getJxList(date),//12时辰干支吉凶
    jianchu: getJianchu(date), // 建除
    stars28: getStars28(date), // 28星
    jsyq: getJixiongYiji('jsyq', date), // 吉神宜趋
    xsyj: getJixiongYiji('xsyj', date), // 凶神宜忌
    taishen: getTaishen(date), // 胎神
    pzbj: getPZBJ(date), // 
    caishenwei: getShenwei('财神', date),//财神位

  }
}