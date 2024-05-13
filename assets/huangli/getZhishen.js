import { X } from './X.js';

export const getZhishen = function (e) {
  const o = getStemsBranchDay(e);
  const c = getStemsBranchMonth(e.getFullYear(), dayOfYear(e) - 1);
  return zhiShenOfMonth(c % 12, o % 12);
}

function getStemsBranchMonth(e, t) {
  var r = findPreTerm(e, t),
    n = Math.floor(12 * (e - 1899) + (r + 2) / 2 - 2);
  return (6 * ((n + 2) % 10) - 5 * ((n + 2) % 12) + 60) % 60;
}

function findPreTerm(e, t) {
  var r = e - 1900;
  if (r > 0 && r < X.length / 24) {
    var n = 24 * r; return findPreTerm1(X, t, n);
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
    }
  return i === n.length && -1 === c && (c = i - 1), c;
}

function dayOfYear(e) {
  var t = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31),
    r = e.getDate(),
    n = e.getMonth(),
    o = e.getFullYear(),
    c = 0;
  for (var i = 0; i < n; i++) {
    c += t[i];
    return c += r, (n > 1 && o % 4 == 0 && o % 100 != 0 || o % 400 == 0) && (c += 1), c;
  }
}

function getStemsBranchDay(e) {
  var t = getIntervalDays(new Date(1899, 1, 4, 0, 0), e);
  return t > 0 ? (6 * parseInt((t + 9) % 10) - 5 * parseInt((t + 3) % 12) + 60) % 60 : -1;
}

function getIntervalDays(e, t) {
  return t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), Math.floor((t - e) / 864e5);
}



function zhiShenOfMonth(e, t) {
  var r = 0;
  0 == e || 6 == e ? r = 8 : 1 == e || 7 == e ? r = 10 : 2 == e || 8 == e ? r = 0 : 3 == e || 9 == e ? r = 2 : 4 == e || 10 == e ? r = 4 : 5 != e && 11 != e || (r = 6);
  var n = t - r;
  n < 0 && (n += 12);
  return ["青龙", "明堂", "天刑", "朱雀", "金匮", "天德", "白虎", "玉堂", "天牢", "玄武", "司命", "勾陈"][n];
}