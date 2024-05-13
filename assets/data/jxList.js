const e = new Date();
const JXTable = [3372, 843, 3282, 2868, 717, 1203, 3372, 843, 3282, 2868, 733, 1187, 3372, 843, 3282, 2868, 709, 1202, 3372, 843, 3282, 2868, 717, 1203, 3372, 842, 3282, 2868, 717, 1203, 3372, 843, 3282, 2868, 717, 1203, 3372, 843, 3282, 2852, 717, 1187, 3368, 843, 3282, 2868, 717, 1187, 3372, 843, 3282, 2868, 717, 1203, 3372, 843, 3314, 2868, 717, 1203];
const BASE_STEMS_DATE = new Date(1899, 1, 4, 0, 0);
const JXNames = ["吉", "凶"];
const Gan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const Zhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

function getStemsBranchDay(e) {
  var t = getIntervalDays(BASE_STEMS_DATE, e);
  return t > 0 ? (6 * parseInt((t + 9) % 10) - 5 * parseInt((t + 3) % 12) + 60) % 60 : -1;
}

function getLunarHourIndex(e) {
  return (Math.floor(e / 2) + e % 2) % 12;
}

function getJXName(e) {
  return e < 0 || e > JXNames.length ? "" : JXNames[e];
}

function getIntervalDays(e, t) {
  return t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), Math.floor((t - e) / 864e5);
}

function jixiongStatusOfDateTime(e, t) {
  var r = -1,
    n = getStemsBranchDay(e);
  n > -1 && n < 60 && (r = (JXTable[n] >> 11 - getLunarHourIndex(t) & 1) > 0 ? 0 : 1);
  return getJXName(r);
}

function getStemsBranchHourAsString(e, t) {
  var r = getLunarHourIndex(t);
  return formatStemsBranchString(getStemBranchHour(e, r));
}

function formatStemsBranchString(e) {
  return e < 0 ? "" : Gan[e % 10] + Zhi[e % 12];
}

function getStemBranchHour(e, t) {
  var r = getIntervalDays(BASE_STEMS_DATE, e),
    dt = parseInt((r + 9) % 10); return (6 * ((t + 2 * (dt > 4 ? dt - 5 : dt)) % 10) - 5 * t + 60) % 60;
}

// function getYMD(S) {
//   var J = S || new Date();
//   return {
//     year: J.getFullYear(),
//     month: J.getMonth(),
//     date: J.getDate(),
//     day: J.getDay(),
//     hour: J.getHours(),
//     miniute: J.getMinutes(),
//     second: J.getSeconds()
//   };
// }


function getHourJixiongList() {
  var S = [],
    J = e;
    // this.c_hour >= 23 && this.currentCanlender.isToday && J.setDate(J.getDate() + 1);
  for (var i = 0; i < 12; i++) {
    var s = getStemsBranchHourAsString(J, 2 * i) + jixiongStatusOfDateTime(J, 2 * i);
    S.push(s);
  }
  return S;
}

export const jxList = getHourJixiongList();