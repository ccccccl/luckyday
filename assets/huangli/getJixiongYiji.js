import { X } from './X.js';
import { shenyiji } from './shenyiji.js';

const mPzStemArray = ["甲不开仓财物耗散", "乙不栽植千株不长", "丙不修灶必见灾殃", "丁不剃头头必生疮", "戊不受田田主不祥", "己不破券二比并亡", "庚不经络织机虚张", "辛不合酱主人不尝", "壬不汲水更难提防", "癸不词讼理弱敌强"]; 
const mPzBranchArray = ["子不问卜自惹祸殃", "丑不冠带主不还乡", "寅不祭祀神鬼不尝", "卯不穿井水泉不香", "辰不哭泣必主重丧", "巳不远行财物伏藏", "午不苫盖屋主更张", "未不服药毒气入肠", "申不安床鬼祟入房", "酉不宴客醉坐颠狂", "戌不吃犬作怪上床", "亥不嫁娶不利新郎"];
const Gan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const Zhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
const BASE_STEMS_DATE = new Date(1899, 1, 4, 0, 0);
const MIN_YEAR = 1900;

export const getJixiongYiji = (type, e) => {
  var n = {},
    o = getStemsBranchDay(e),
    c = getStemsBranchMonth(e.getFullYear(), dayOfYear(e) - 1),
    f = getStemsBranchDayAsString(e),
    l = o % 10,
    h = o % 12,
    d = mPzStemArray[l] + " " + mPzBranchArray[h];

  var v = "",
    y = "",
    w = (c + 10) % 12 + 1;

  if (shenyiji[w + "-" + f]) {
    v = shenyiji[w + "-" + f].JSYQ;
      y = shenyiji[w + "-" + f].XSYJ;
    // n.jsyq = v,
    //   n.xsyj = y
    return type === 'jsyq' ? v : y;
  }
  return '';
}



function getStemsBranchDay(e) {
  var t = getIntervalDays(BASE_STEMS_DATE, e);
  return t > 0 ? (6 * parseInt((t + 9) % 10) - 5 * parseInt((t + 3) % 12) + 60) % 60 : -1;
}

function getStemsBranchDayAsString(e) {
  return formatStemsBranchString(getStemsBranchDay(e));
}

function getStemsBranchMonth(e, t) {
  var r = findPreTerm(e, t),
    n = Math.floor(12 * (e - 1899) + (r + 2) / 2 - 2);
  return (6 * ((n + 2) % 10) - 5 * ((n + 2) % 12) + 60) % 60;
}

function dayOfYear (e) {
  for (var t = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31), r = e.getDate(), n = e.getMonth(), o = e.getFullYear(), c = 0, i = 0; i < n; i++) c += t[i]; return c += r, (n > 1 && o % 4 == 0 && o % 100 != 0 || o % 400 == 0) && (c += 1), c;
}

function getIntervalDays(e, t) {
  return t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), Math.floor((t - e) / 864e5);
}

function formatStemsBranchString (e) {
  return e < 0 ? "" : Gan[e % 10] + Zhi[e % 12];
}

function findPreTerm(e, t) {
  var r = e - MIN_YEAR;
  if (r > 0 && r < X.length / 24) {
    var n = 24 * r;
    return findPreTerm1(X, t, n);
  } return -1;
}

function findPreTerm1 (e, t, r) {
  for (var n = new Array(24), o = r; o <= r + 23; o++) n[o - r] = e[o];
  var c = -1,
    i = 0;
  for (i = 0; i < n.length; i++) {
    if (t === n[i]) {
      c = i; break;
    } if (t < n[i]) {
      c = i - 1; break;
    }
  }
  return i === n.length && -1 === c && (c = i - 1), c;
}