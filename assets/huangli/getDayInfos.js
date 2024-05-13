import { X } from '../data1/X.js';
import { wuxing } from '../data1/wuxing.js';
import { getJxList } from "./getJxList.js"
import {
  Gan, Zhi, Animals, CompassNames, solarTerm, nStr1, nStr2, nStr3, JXNames, JXTable, BASE_STEMS_DATE, mPzStemArray, mPzBranchArray, solarMonth, hoursJson, lunarInfo, k
} from '../data1/constants.js'
import { yijiArr } from '../data1/yijiArr.js'
import { c } from '../data1/c.js';
import { l } from '../data1/l.js';
import { C } from '../data1/C2.js';
import { mWxMap } from '../data1/mWxMap.js';


function getYMD(S) {
  var J = S || new Date();
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


function leapMonth(e) {
  return 15 & lunarInfo[e - 1900];
}

function leapDays(e) {
  return leapMonth(e) ? 65536 & lunarInfo[e - 1900] ? 30 : 29 : 0;
}

function toGanZhi(e) {
  return Gan[e % 10] + Zhi[e % 12];
}

function getTerm(e, t) {
  var r = getOffsetByTerm(e, t - 1);
  return getDateObjByOffset(e, r).getDate();
}

function getTermTime(e, t) {
  var r = getOffsetByTerm(e, t - 1); return getDateObjByOffset(e, r);
}

function getOffsetByTerm(e, t) {
  return t < 0 ? -1 : X[24 * (e - 1900) + t];
}

function getDateObjByOffset(e, t) {
  var r = new Date(e, 0, 1, 0, 0, 0, 0);
  return r.setDate(r.getDate() + t), r;
}

function cyclical(e) {
  return Gan[e % 10] + Zhi[e % 12];
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


function solar2lunarBase(e, t, r) {
  // console.log(e, t, r)
  if (e < 1900 || e > 2100) return -1; if (1900 == e && 0 == t && r < 31) return -1; var i,
    n,
    o = new Date(),
    c = 0; e = (o = e ? new Date(e, parseInt(t), r) : new Date()).getFullYear(), t = o.getMonth(), r = o.getDate(), t++; var f = (Date.UTC(o.getFullYear(), o.getMonth(), o.getDate()) - Date.UTC(1900, 0, 31)) / 864e5; for (i = 1900; i < 2101 && f > 0; i++) f -= c = lYearDays(i); f < 0 && (f += c, i--); var l = new Date(),
      h = !1; l.getFullYear() == e && l.getMonth() + 1 == t && l.getDate() == r && (h = !0); var d = o.getDay(),
        v = nStr1[d],
        y = i; n = leapMonth(i); var w = !1; for (i = 1; i < 13 && f > 0; i++) n > 0 && i == n + 1 && 0 == w ? (--i, w = !0, c = leapDays(y)) : c = monthDays(y, i), 1 == w && i == n + 1 && (w = !1), f -= c; 0 == f && n > 0 && i == n + 1 && (w ? w = !1 : (w = !0, --i)), f < 0 && (f += c, --i); var m = i,
          S = f + 1,
          k = t - 1,
          D = toGanZhiYear(e, t - 1, r),
          A = getTerm(e, 2 * t - 1),
          T = getTerm(e, 2 * t),
          E = toGanZhi(12 * (e - 1900) + t + 11); r >= A && (E = toGanZhi(12 * (e - 1900) + t + 12)); var O = !1,
            M = null;
  A === r && (O = !0, M = solarTerm[2 * t - 2]), T === r && (O = !0, M = solarTerm[2 * t - 1]);
  var C = !1,
    B = !1;
  A - 1 === r && -1 != [2, 8, 14, 20].indexOf(2 * t - 2) && (C = !0), T - 1 === r && -1 != [5, 11, 17, 23].indexOf(2 * t - 1) && (B = !0); var P = Date.UTC(e, k, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10,
    _ = toGanZhi(P + r - 1),
    R = toAstro(t, r); return { lYear: y, lMonth: m, lDay: S, Animal: getAnimal(y), IMonthCn: (w ? "闰" : "") + toChinaMonth(m), IDayCn: toChinaDay(S), cYear: e, cMonth: t, cDay: r, gzYear: D, gzMonth: E, gzDay: _, isToday: h, isLeap: w, nWeek: d, ncWeek: "星期" + v, isTerm: O, Term: M, is4jue: C, is4li: B, astro: R };
}


function getStemsBranchMonthAsString(e, t) {
  return formatBranchMonthString(getStemsBranchMonth(e, t));
}

function getStemsBranchDayAsString(e) {
  return formatStemsBranchString(getStemsBranchDay(e));
}


function taiShenOfMonthDiZhi(e, t, r) {
  var code = codeForMonthDizhi(e); return taiShenWithCode(code, t, r);
}

function taiShenWithCode(code, e, t) {
  var r = t[code + "-" + e]; return r || "暂无";
}

function branchIndexOfSolar(e, t) {
  return -2 == t ? getBranchDay(e) : getStemBranchHour(e, t) % 12;
}

function shaDirectionOfDateTime(e) {
  var t = -1;
  switch (e) {
    case 0: case 4: case 8:
      t = 4; break;
    case 1: case 5: case 9:
      t = 2; break;
    case 2: case 6: case 10:
      t = 0; break;
    case 3: case 7: case 11:
      t = 6;
  }return t;
}

function getStemBranchHour(e, t) {
  var r = getIntervalDays(BASE_STEMS_DATE, e),
    dt = parseInt((r + 9) % 10);
  return (6 * ((t + 2 * (dt > 4 ? dt - 5 : dt)) % 10) - 5 * t + 60) % 60;
}

function getIntervalDays(e, t) {
  return t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), Math.floor((t - e) / 864e5);
}

function getStemsBranchMonth(e, t) {
  var r = findPreTerm(e, t),
    n = Math.floor(12 * (e - 1899) + (r + 2) / 2 - 2);
  return (6 * ((n + 2) % 10) - 5 * ((n + 2) % 12) + 60) % 60;
}


function codeForMonthDizhi(e) {
  return { "子": 11, "丑": 12, "寅": 1, "卯": 2, "辰": 3, "巳": 4, "午": 5, "未": 6, "申": 7, "酉": 8, "戌": 9, "亥": 10 }[e];
}

function formatBranchMonthString(e) {
  return e < 0 ? "" : Zhi[e % 12];
}

function findPreTerm(e, t) {
  var r = e - 1900;
  if (r > 0 && r < X.length / 24) {
    var n = 24 * r;
    return findPreTerm1(X, t, n);
  }
  return -1;
}

function findPreTerm1(e, t, r) {
  for (var n = new Array(24), o = r; o <= r + 23; o++) n[o - r] = e[o]; var c = -1,
    i = 0; for (i = 0; i < n.length; i++) {
      if (t === n[i]) {
        c = i; break;
      } if (t < n[i]) {
        c = i - 1; break;
      }
    } return i === n.length && -1 === c && (c = i - 1), c;
}


function jianChuOfDate(e) {
  var t = new Date(1901, 0, 1),
    r = new Date(e.getFullYear(), e.getMonth(), e.getDate()),
    n = twentyFourTermdaysOf(r),
    o = -1;
  if (2 == n.length) {
    var a = parseInt(n[0]),
      c = a % 2 == 0 ? a / 2 : a / 2 + 1;
    parseInt(n[n.length - 1]) && a % 2 == 0 && (c += 1); var f = Math.abs((r.getTime() - t.getTime()) / 1e3) / 86400; o = Math.ceil((5 + f - c) % 12);
  }
  return ["建日", "除日", "满日", "平日", "定日", "执日", "破日", "危日", "成日", "收日", "开日", "闭日"][o >= 2 ? o - 2 : o + 10];
}

function stars28OfDate(e) {
  for (var t = 365 * (e.getFullYear() - 1), i = 0; i < e.getMonth(); i++) t += dayCountOfMonth(i, 0); t += e.getDate(); var r = 0; isLeapYear(e.getFullYear()) && (e.getMonth() + 1 > 3 || e.getMonth() + 1 == 3 && e.getDate() >= 1) && (r = 1); return ["轸水蚓宿星", "角木蛟宿星", "亢金龙宿星", "氐土貉宿星", "房日兔宿星", "心月狐宿星", "尾火虎宿星", "箕水豹宿星", "斗木獬宿星", "牛金牛宿星", "女土蝠宿星", "虚日鼠宿星", "危月燕宿星", "室火猪宿星", "壁水貐宿星", "奎木狼宿星", "娄金狗宿星", "胃土雉宿星", "昴日鸡宿星", "毕月乌宿星", "觜火猴宿星", "参水猿宿星", "井木犴宿星", "鬼金羊宿星", "柳土獐宿星", "星日马宿星", "张月鹿宿星", "翼火蛇宿星"][(t + Math.floor((e.getFullYear() - 1) / 4 - 13 + r) + 23) % 28];
}

function dayCountOfMonth(e, t) {
  switch (e + 1) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
      return 31;
    case 2:
      return t ? 29 : 28;
    case 4: case 6: case 9: case 11:
      return 30;
  }
  return 0;
}

function isLeapYear(e) {
  return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
}

function zhiShenOfMonth(e, t) {
  var r = 0;
  0 == e || 6 == e ? r = 8 : 1 == e || 7 == e ? r = 10 : 2 == e || 8 == e ? r = 0 : 3 == e || 9 == e ? r = 2 : 4 == e || 10 == e ? r = 4 : 5 != e && 11 != e || (r = 6);
  var n = t - r;
  n < 0 && (n += 12);
  return ["青龙", "明堂", "天刑", "朱雀", "金匮", "天德", "白虎", "玉堂", "天牢", "玄武", "司命", "勾陈"][n];
}

function querySAByDay(e, t, r) {
  var n = {},
    o = getStemsBranchDay(e),
    c = getStemsBranchMonth(e.getFullYear(), dayOfYear(e) - 1),
    f = getStemsBranchDayAsString(e),
    l = o % 10,
    h = o % 12,
    d = mPzStemArray[l] + " " + mPzBranchArray[h];
  n.pzbj = d;
  var v = "",
      y = "",
    w = (c + 10) % 12 + 1;
  t[w + "-" + f] && (v = t[w + "-" + f].JSYQ, y = t[w + "-" + f].XSYJ, n.jsyq = v, n.xsyj = y);
  var m = ""; mWxMap[f] && (m = mWxMap[f], n.wx = m); 
  var S = cxInfoOfDateTime(e, -2); n.cs = S; 
  var k = zhiShenOfMonth(c % 12, o % 12);
  n.zhishen = k;
  n.jxList = getJxList(e);//12时辰干支吉凶
  var D = jianChuOfDate(e); n.jianchu = D; 
  var A = stars28OfDate(e); n.stars28 = A; 
  var T = getStemsBranchMonthAsString(e.getFullYear(), dayOfYear(e) - 1),
      E = getStemsBranchDayAsString(e),
    O = taiShenOfMonthDiZhi(T, E, r);
  return n.taishen = O, n;
}

function twentyFourTermdaysOf(e) {
  try {
    for (var t = e.getFullYear() - 1900, r = dayOfYear(e) - 1, n = 0, o = 0, i = 0; i < 24; i++) {
      var c = X[24 * t + i]; if (c > r) {
        n = i, o = 0; break;
      } if (c == r) {
        n = i, o = 1; break;
      }
    } return [n + 24 * t - 24, o];
  } catch (e) {
    return null;
  }
}

function dayOfYear(e) {
  for (var t = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31), r = e.getDate(), n = e.getMonth(), o = e.getFullYear(), c = 0, i = 0; i < n; i++) c += t[i]; return c += r, (n > 1 && o % 4 == 0 && o % 100 != 0 || o % 400 == 0) && (c += 1), c;
}

function getYJSqlFields(e) {
  var t = ["-1", "-1"],
    r = twentyFourTermdaysOf(e);
  if (2 == r.length) {
    var a = r[0],
      b = r[1],
      n = Math.floor(a % 2 == 0 ? a / 2 : a / 2 + 1); b > 0 && a % 2 == 0 && (n += 1); var o = new Date(1901, 0, 1),
        c = Math.abs(getIntervalDays(o, e));
    t[0] = (15 + c) % 60 + "", t[1] = Math.floor(Math.abs((5 + c - n) % 12)) + "";
  } return t;
}

function getYearWeek(e, t, r) {
  var n = new Date(e, t, r),
    o = new Date(e, 0, 1),
    c = (r = dayOfYear(n), Math.ceil((r + (o.getDay() + 1 - 1)) / 7)); if (c > 1 && 11 === t) {
      var f = new Date(e + 1, 0, 1),
        l = f.getDay(); l > 0 && getIntervalDays(n, f) <= l && (c = 1);
    } return c;
}

function getLunarHourIndex(e) {
  return (Math.floor(e / 2) + e % 2) % 12;
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

function getCurrentHourYJ(S, J) {
  // var S = getYMD(this.S)

  var Y = getYMD(S),
    t = Y.year,
    e = Y.month,
    n = Y.date;
  // console.log('t, e, n', t, e, n)
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
  // console.log('base', base)
  return base.gzYear2 = n, base;
}

function lYearDays(e) {
  var i,
    t = 348; for (i = 32768; i > 8; i >>= 1) t += lunarInfo[e - 1900] & i ? 1 : 0; return t + leapDays(e);
}


function monthDays(e, t) {
  return t > 12 || t < 1 ? -1 : lunarInfo[e - 1900] & 65536 >> t ? 30 : 29;
}

function toGanZhiYear(e, t, r) {
  var n = ""; n = t < 2 ? cyclical(e - 1900 + 36 - 1) : cyclical(e - 1900 + 36); var o = getTerm(e, 3); return 1 === t && r >= o && (n = cyclical(e - 1900 + 36)), n;
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
  n = !!n;
  var o = leapMonth(e);
  if (n && o != t) return -1;
  if (2100 == e && 12 == t && r > 1 || 1900 == e && 1 == t && r < 31) return -1;
  var c = monthDays(e, t),
    f = c;
  if (n && (f = leapDays(e, t)), e < 1900 || e > 2100 || r > f) {
    return -1;
  }
  for (var l = 0, i = 1900; i < e; i++) {
    l += lYearDays(i);
  }
  var h = 0,
    d = !1;
  for (i = 1; i < t; i++) {
    h = leapMonth(e),
      d || h <= i && h > 0 && (l += leapDays(e), d = !0),
      l += monthDays(e, i);
  }
  n && (l += c);
  var v = Date.UTC(1900, 1, 30, 0, 0, 0),
    y = new Date(864e5 * (l + r - 31) + v),
    w = y.getUTCFullYear(),
    m = y.getUTCMonth(),
    S = y.getUTCDate();

  return solar2lunarBase(w, m, S);
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


function getJXName(e) {
  return e < 0 || e > JXNames.length ? "" : JXNames[e];
}

function getStemsBranchDay(e) {
  var t = getIntervalDays(BASE_STEMS_DATE, e);
  return t > 0 ? (6 * parseInt((t + 9) % 10) - 5 * parseInt((t + 3) % 12) + 60) % 60 : -1;
}

function getAnimal(e) {
  var t = (e - 1900) % 12; return Animals[t];
}

function toChinaMonth(e) {
  if (e > 12 || e < 1) return -1; var s = nStr3[e - 1]; return s += "月";
}

function cxInfoOfDateTime(e, t) {
  var r = branchIndexOfSolar(e, t),
    n = chongIndexOfDateTime(r),
    o = shaDirectionOfDateTime(r);

  try {
    return "冲" + Animals[n] + "煞" + CompassNames[o].replace("正", "");
  } catch (e) {
    return "";
  }
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

function getCanlendar(currentDate) {
  console.log(497, 'currentDate', currentDate)
  let self = {};
  var S = getYMD(currentDate),
    J = S.year,
    Y = S.month,
    t = S.date,
    e = S.hour;
  S.miniute;
  self.c_hour = e;
  self.currentCanlender = solar2lunar(J, Y, t);
  self.currentCanlender.isTerm && (self.currentCanlender.termImg = k["1-".concat(self.currentCanlender.Term)]);
  self.currentCanlender.ncWeek = "周" + self.currentCanlender.ncWeek[2];
  self.currentCanlender.yearWeek = getYearWeek(J, Y, t);

  self.currentJX = querySAByDay(currentDate, c, l);

  var n = new Date(JSON.parse(JSON.stringify(currentDate)));
  if (e >= 23 && self.currentCanlender.isToday) {
    n.setDate(n.getDate() + 1);
    var r = querySAByDay(n, c, l),
      j = r.zhishen,
      y = r.taishen;
    self.currentJX.zhishen = j, self.currentJX.taishen = y;
  }
  var o = getYJSqlFields(currentDate),
    X = "".concat(o[1], "-").concat(o[0]);
  self.currentYJ = C[X],
    (self.currentCanlender.is4jue || self.currentCanlender.is4li) && (self.currentYJ = { y: "-", j: "大事勿用 结婚 动手术 搬家 开工开业 建房 出行上任 安葬" });
  self.currentYJ = JSON.parse(JSON.stringify(self.currentYJ).replaceAll("-", "无"));

  var m = cxInfoOfDateTime(currentDate, getLunarHourIndex(e));

  self.currentHourYJ = {
    lunarHour: Zhi[getLunarHourIndex(e)],
    StemBranchHour: getStemsBranchHourAsString(currentDate, e),
    hour: hoursJson["1-".concat(e)],
    cs: m.substring(0, 2) + " " + m.substring(2, 4),
    caixi: compassCNOfDate(currentDate, getLunarHourIndex(e)),
    yi: getCurrentHourYJ(currentDate, e).yi,
    ji: getCurrentHourYJ(currentDate, e).ji,
    jx: jixiongStatusOfDateTime(currentDate, e)
  };

  console.log(99999, e)
  return self;
}

export function getHourInfos(currentDate) { 
  var S = getYMD(currentDate),
    J = S.year,
    Y = S.month,
    t = S.date,
    e = S.hour;
  var m = cxInfoOfDateTime(currentDate, getLunarHourIndex(e));

  // console.log(66666, {
  //   lunarHour: Zhi[getLunarHourIndex(e)],
  //   StemBranchHour: getStemsBranchHourAsString(currentDate, e),
  //   hour: hoursJson["1-".concat(e)],
  //   cs: m.substring(0, 2) + " " + m.substring(2, 4),
  //   caixi: compassCNOfDate(currentDate, getLunarHourIndex(e)),
  //   yi: getCurrentHourYJ(currentDate, e).yi,
  //   ji: getCurrentHourYJ(currentDate, e).ji,
  //   jx: jixiongStatusOfDateTime(currentDate, e)
  // })
  
  return {
    lunarHour: Zhi[getLunarHourIndex(e)],
    StemBranchHour: getStemsBranchHourAsString(currentDate, e),
    hour: hoursJson["1-".concat(e)],
    cs: m.substring(0, 2) + " " + m.substring(2, 4),
    caixi: compassCNOfDate(currentDate, getLunarHourIndex(e)),
    yi: getCurrentHourYJ(currentDate, e).yi,
    ji: getCurrentHourYJ(currentDate, e).ji,
    jx: jixiongStatusOfDateTime(currentDate, e)
  };
}

export function getDayInfos(date) {
  var S = getYMD(date),
    J = S.year,
    Y = S.month,
    t = S.date;
  // solar2lunar(J, Y, t);
  return getCanlendar(date)
}

export function get12ShichenInfos(date) {
  let self = {};
  var S = getYMD(date),
    J = S.year,
    Y = S.month,
    t = S.date,
    e = S.hour;
  
  self.currentHourYJ = {
    lunarHour: Zhi[getLunarHourIndex(e)],
    StemBranchHour: getStemsBranchHourAsString(currentDate, e),
    hour: hoursJson["1-".concat(e)],
    cs: m.substring(0, 2) + " " + m.substring(2, 4),
    caixi: compassCNOfDate(currentDate, getLunarHourIndex(e)),
    yi: getCurrentHourYJ(currentDate, e).yi,
    ji: getCurrentHourYJ(currentDate, e).ji,
    jx: jixiongStatusOfDateTime(currentDate, e)
  };
  return self;

  // return getCanlendar(date)
}