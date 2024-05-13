import { yijiArr } from "../data/yijiArr";
import { daysInfo, gan, zhi, animals, hours } from '../data/hoursInfo.js'

const JXNames = ["吉", "凶"];
const Gan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const Zhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const Animals = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
const CompassNames = ["正北", "东北", "正东", "东南", "正南", "西南", "正西", "西北"];
const solarTerm = ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"];
const nStr1= ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
const nStr2 = ["初", "十", "廿", "卅"];
const nStr3 = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"];
const BASE_STEMS_DATE = new Date(1899, 1, 4, 0, 0);
const JXTable = [3372, 843, 3282, 2868, 717, 1203, 3372, 843, 3282, 2868, 733, 1187, 3372, 843, 3282, 2868, 709, 1202, 3372, 843, 3282, 2868, 717, 1203, 3372, 842, 3282, 2868, 717, 1203, 3372, 843, 3282, 2868, 717, 1203, 3372, 843, 3282, 2852, 717, 1187, 3368, 843, 3282, 2868, 717, 1187, 3372, 843, 3282, 2868, 717, 1203, 3372, 843, 3314, 2868, 717, 1203];
const lunarInfo = [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 23232, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560];



function getCurrentHourYJ(S, J) {
  // var S = getYMD(this.S)
  console.log('S, J', S, J)
  console.log()

  var Y = getYMD(S),
    t = Y.year,
    e = Y.month,
    n = Y.date;
  console.log('t, e, n', t, e, n)
  // console.log('solar2lunar', solar2lunar(t, e, n))
  var r = yijiArr.find(function (S) {
        return S._Date === solar2lunar(t, e, n).gzDay;
      }),
    j = getLunarHourIndex(J);
  return {
    yi: r["Yi".concat(j)].split(" "),
    ji: r["Ji".concat(j)].split(" ")
  };
}

function solar2lunar(e, t, r) {
  // console.log('e, t, r', solar2lunarBase(e, t, r))
  var base = JSON.parse(JSON.stringify(solar2lunarBase(e, t, r))),
    n = toGanZhiYear2(e, base.cMonth - 1, r, base.lYear);
  return base.gzYear2 = n, base;
}

function solar2lunarBase(e, t, r) {
  console.log('e, t, r', e, t, r)
  if (e < 1900 || e > 2100) return -1;
  if (1900 == e && 0 == t && r < 31) return -1;
  var i, n, o = new Date(), c = 0;
  e = (o = e ? new Date(e, parseInt(t), r) : new Date()).getFullYear(),
    t = o.getMonth(),
    r = o.getDate(), t++;
  var f = (Date.UTC(o.getFullYear(), o.getMonth(), o.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
  console.log(2222, 'f', f)
  for (i = 1900; i < 2101 && f > 0; i++) {
    f -= c = lYearDays(i);
    f < 0 && (f += c, i--);
    console.log(3333,f)
  }
  console.log(2222)
  var l = new Date(),
    h = !1;
  l.getFullYear() == e && l.getMonth() + 1 == t && l.getDate() == r && (h = !0);
  var d = o.getDay(),
    v =[d],
    y = i; n = leapMonth(i);
  var w = !1;
  for (i = 1; i < 13 && f > 0; i++) n > 0 && i == n + 1 && 0 == w ? (--i, w = !0, c = leapDays(y)) : c = monthDays(y, i), 1 == w && i == n + 1 && (w = !1), f -= c; 0 == f && n > 0 && i == n + 1 && (w ? w = !1 : (w = !0, --i)), f < 0 && (f += c, --i); var m = i,
    S = f + 1,
    k = t - 1,
    D = toGanZhiYear(e, t - 1, r),
    A = getTerm(e, 2 * t - 1),
    T = getTerm(e, 2 * t),
    E = toGanZhi(12 * (e - 1900) + t + 11);
  r >= A && (E = toGanZhi(12 * (e - 1900) + t + 12));
  var O = !1,
    M = null;
  A === r && (O = !0, M = solarTerm[2 * t - 2]), T === r && (O = !0, M = solarTerm[2 * t - 1]);
  var C = !1,
    B = !1;
  A - 1 === r && -1 != [2, 8, 14, 20].indexOf(2 * t - 2) && (C = !0), T - 1 === r && -1 != [5, 11, 17, 23].indexOf(2 * t - 1) && (B = !0); var P = Date.UTC(e, k, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10,
    _ = toGanZhi(P + r - 1),
    R = toAstro(t, r);
  console.log(2222, y)
  return {
    lYear: y,
    lMonth: m,
    lDay: S,
    Animal: getAnimal(y),
    IMonthCn: (w ? "闰" : "") + toChinaMonth(m),
    IDayCn: toChinaDay(S),
    cYear: e,
    cMonth: t,
    cDay: r,
    gzYear: D,
    gzMonth: E,
    gzDay: _,
    isToday: h,
    isLeap: w,
    nWeek: d,
    ncWeek: "星期" + v,
    isTerm: O,
    Term: M,
    is4jue: C,
    is4li: B,
    astro: R
  };
}

function lYearDays(e) {
  var i, t = 348;
  for (i = 32768; i > 8; i >>= 1) {
    t += lunarInfo[e - 1900] & i ? 1 : 0;
    return t + leapDays(e);
  }
}

function leapMonth(e) {
  return 15 & lunarInfo[e - 1900];
}

function leapDays(e) {
  return leapMonth(e) ? 65536 & lunarInfo[e - 1900] ? 30 : 29 : 0;
}

function monthDays(e, t) {
  return t > 12 || t < 1 ? -1 : lunarInfo[e - 1900] & 65536 >> t ? 30 : 29;
}

function toGanZhi(e) {
  return Gan[e % 10] + Zhi[e % 12];
}

function toGanZhiYear(e, t, r) {
  var n = ""; n = t < 2 ? cyclical(e - 1900 + 36 - 1) : cyclical(e - 1900 + 36); var o = getTerm(e, 3); return 1 === t && r >= o && (n = cyclical(e - 1900 + 36)), n;
}

function cyclical(e) {
  return Gan[e % 10] + Zhi[e % 12];
}

function toGanZhiYear2(e, t, r, n) {
  var o = toGanZhiYear(e, t, r),
    c = lunar2solarBase(e, 1, 1, 0),
    f = new Date(c.cYear, c.cMonth - 1, c.cDay),
    l = getTermTime(e, 3),
    h = solar2lunarBase(l.getFullYear(), l.getMonth(), l.getDate()),
    d = new Date(l.getTime() - 864e5),
    v = solar2lunarBase(d.getFullYear(), d.getMonth(), d.getDate()),
    y = new Date(e, t, r);
  return f.getTime() >= l.getTime() ? y.getTime() >= l.getTime() && y.getTime() < f.getTime() && (o = v.gzYear) : y.getTime() >= f.getTime() && y.getTime() <= l.getTime() && (o = h.gzYear), o;
}

function toAstro(e, t) {
  return "摩羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手摩羯".substr(2 * e - (t < [20, 19, 21, 20, 21, 22, 23, 23, 23, 24, 23, 22][e - 1] ? 2 : 0), 2) + "座";
}

function lunar2solarBase(e, t, r, n) {
  n = !!n; var o = leapMonth(e); if (n && o != t) return -1;
  if (2100 == e && 12 == t && r > 1 || 1900 == e && 1 == t && r < 31) return -1;
  var c = monthDays(e, t),
    f = c;
  if (n && (f = leapDays(e, t)), e < 1900 || e > 2100 || r > f) return -1;
  for (var l = 0, i = 1900; i < e; i++) l += lYearDays(i);
  var h = 0,
      d = !1; for (i = 1; i < t; i++) h = leapMonth(e), d || h <= i && h > 0 && (l += leapDays(e), d = !0), l += monthDays(e, i); n && (l += c); var v = Date.UTC(1900, 1, 30, 0, 0, 0),
        y = new Date(864e5 * (l + r - 31) + v),
        w = y.getUTCFullYear(),
        m = y.getUTCMonth(),
        S = y.getUTCDate();
  return solar2lunarBase(w, m, S);
}

function getTerm(e, t) {
  var r = getOffsetByTerm(e, t - 1); return getDateObjByOffset(e, r).getDate();
}

function getTermTime(e, t) {
  var r = getOffsetByTerm(e, t - 1);
  return getDateObjByOffset(e, r);
}

function getDateObjByOffset(e, t) {
  var r = new Date(e, 0, 1, 0, 0, 0, 0); return r.setDate(r.getDate() + t), r;
}

function getOffsetByTerm(e, t) {
  return t < 0 ? -1 : X[24 * (e - 1900) + t];
}

function getYMD(S) {
  var J = S || new Date();
  console.log('J', J)
  return {
    year: J.getFullYear(),
    month: J.getMonth(),
    date: J.getDate(),
    day: J.getDay(),
    hour: J.getHours(),
    miniute: J.getMinutes(),
    second: J.getSeconds()
  };
}

function getLunarHourIndex(e) {
  return (Math.floor(e / 2) + e % 2) % 12;
}

function getStemsBranchHourAsString(e, t) {
  var r = getLunarHourIndex(t);
  return formatStemsBranchString(getStemBranchHour(e, r));
}

function formatStemsBranchString(e) {
  return e < 0 ? "" : Gan[e % 10] + Zhi[e % 12];
}

function compassCNOfDate(e, t) {
  var r = getStemBranchHour(e, t) % 10,
      n = caiCompassValueOfStemIndex(r),
      o = xiCompassValueOfStemIndex(r),
      c = fuCompassValueOfStemIndex(r);
  return "喜神" + CompassNames[o] + " 财神" + CompassNames[n] + " 福神" + CompassNames[c];
}

function getStemBranchHour(e, t) {
  var r = getIntervalDays(BASE_STEMS_DATE, e),
    dt = parseInt((r + 9) % 10);
  return (6 * ((t + 2 * (dt > 4 ? dt - 5 : dt)) % 10) - 5 * t + 60) % 60;
}

function caiCompassValueOfStemIndex(e) {
  var t = -1; 
  switch (e) {
    case 0:
      t = 1; break; case 1:
      t = 5; break; case 2: case 3:
      t = 6; break; case 4: case 5:
      t = 0; break; case 6: case 7:
      t = 2; break; case 8: case 9:
      t = 4;
  }return t;
}

function xiCompassValueOfStemIndex(e) {
  var t = -1; 
  switch (e) {
    case 0: case 5:
      t = 1; break; case 1: case 6:
      t = 7; break; case 2: case 7:
      t = 5; break; case 3: case 8:
      t = 4; break; case 4: case 9:
      t = 3;
  }return t;
}

function fuCompassValueOfStemIndex(e) {
  var t = -1; 
  switch (e) {
    case 0: case 1:
      t = 3; break; case 2: case 3:
      t = 2; break; case 4:
      t = 0; break; case 5:
      t = 4; break; case 6: case 7:
      t = 5; break; case 8:
      t = 7; break; case 9:
      t = 6;
  }return t;
}

function jixiongStatusOfDateTime(e, t) {
  var r = -1,
    n = getStemsBranchDay(e);
  n > -1 && n < 60 && (r = (JXTable[n] >> 11 - getLunarHourIndex(t) & 1) > 0 ? 0 : 1);
  return getJXName(r);
}

function getJXName(e) {
  return e < 0 || e > JXNames.length ? "" : JXNames[e];
}

function getStemsBranchDay(e) {
  var t = getIntervalDays(BASE_STEMS_DATE, e);
  return t > 0 ? (6 * parseInt((t + 9) % 10) - 5 * parseInt((t + 3) % 12) + 60) % 60 : -1;
}

function getIntervalDays(e, t) {
  return t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), Math.floor((t - e) / 864e5);
}

function getAnimal(e) {
  var t = (e - 1900) % 12; return Animals[t];
}

function toChinaMonth(e) {
  if (e > 12 || e < 1) return -1; var s = nStr3[e - 1]; return s += "月";
}

function toChinaDay(e) {
  var s; switch (e) {
    case 10:
      s = "初十"; break; case 20:
      s = "二十"; break; case 30:
      s = "三十"; break; default:
      s = nStr2[Math.floor(e / 10)], s += nStr1[e % 10];
  }return s;
}

function cxInfoOfDateTime(e, t) {
  console.log(222, e, t)
  console.log(3333, branchIndexOfSolar(e, t))
  // console.log(4444, chongIndexOfDateTime(r))
  // console.log(555, shaDirectionOfDateTime(r))
  var r = branchIndexOfSolar(e, t),
    n = chongIndexOfDateTime(r),
    o = shaDirectionOfDateTime(r);
  
  try {
    return "冲" + Animals[n] + "煞" + CompassNames[o].replace("正", "");
    } catch (e) {
      return "";
    }
}

function shaDirectionOfDateTime(e) {
  var t = -1; switch (e) {
    case 0: case 4: case 8:
      t = 4; break; case 1: case 5: case 9:
      t = 2; break; case 2: case 6: case 10:
      t = 0; break; case 3: case 7: case 11:
      t = 6;
  }return t;
}

function branchIndexOfSolar(e, t) {
  return -2 == t ? getBranchDay(e) : getStemBranchHour(e, t) % 12;
}

function getBranchDay(e) {
  var t = getIntervalDays(BASE_STEMS_DATE, e);
  return t > 0 ? Math.floor((t + 3) % 12) : 0;
}



function chongIndexOfDateTime(e) {
  var t = -1;
  switch (e) {
  case 0:
    t = 6; break; case 1:
    t = 7; break; case 2:
    t = 8; break; case 3:
    t = 9; break; case 4:
    t = 10; break; case 5:
    t = 11; break; case 6:
    t = 0; break; case 7:
    t = 1; break; case 8:
    t = 2; break; case 9:
    t = 3; break; case 10:
    t = 4; break; case 11:
    t = 5;
  }
  return t;
}

export function getShichenInfo(currentTime, gzDate) {
  console.log('currentTime', currentTime)
  let D = { "1-23": "23:00 - 00:59", "1-0": "23:00 - 00:59", "1-1": "01:00 - 02:59", "1-2": "01:00 - 02:59", "1-3": "03:00 - 04:59", "1-4": "03:00 - 04:59", "1-5": "05:00 - 06:59", "1-6": "05:00 - 06:59", "1-7": "07:00 - 08:59", "1-8": "07:00 - 08:59", "1-9": "09:00 - 10:59", "1-10": "09:00 - 10:59", "1-11": "11:00 - 12:59", "1-12": "11:00 - 12:59", "1-13": "13:00 - 14:59", "1-14": "13:00 - 14:59", "1-15": "15:00 - 16:59", "1-16": "15:00 - 16:59", "1-17": "17:00 - 18:59", "1-18": "17:00 - 18:59", "1-19": "19:00 - 20:59", "1-20": "19:00 - 20:59", "1-21": "21:00 - 22:59", "1-22": "21:00 - 22:59" };
  let S = getYMD(currentTime),
    e = S.hour; 
  let m = cxInfoOfDateTime(currentTime, getLunarHourIndex(e));
  let x = daysInfo.find(item => {
    item._Date === gzDate
  })

  console.log('xxxxx', gzDate, x)

  // console.log(6666, m)
  // console.log(777, getCurrentHourYJ(currentTime, e))
  // console.log('getCurrentHourYJ', getCurrentHourYJ(currentTime, e).yi)
  return {
    lunarHour: Zhi[getLunarHourIndex(e)],
    StemBranchHour: getStemsBranchHourAsString(currentTime, e),
    hour: D["1-".concat(e)],
    cs: m.substring(0, 2) + " " + m.substring(2, 4),
    caixi: compassCNOfDate(currentTime, getLunarHourIndex(e)),
    // yi: getCurrentHourYJ(currentTime, e).yi,
    // ji: getCurrentHourYJ(currentTime, e).ji,
    jx: jixiongStatusOfDateTime(currentTime, e)
  }
};

