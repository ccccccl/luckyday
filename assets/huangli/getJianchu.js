import { X } from './X.js';

export const getJianchu = function (e) {
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

function twentyFourTermdaysOf(e) {
  try {
    var t = e.getFullYear() - 1900, r = dayOfYear(e) - 1, n = 0, o = 0;
    for (var i = 0; i < 24; i++) {
      var c = X[24 * t + i]; if (c > r) {
        n = i, o = 0; break;
      } if (c == r) {
        n = i, o = 1; break;
      }
    }
    return [n + 24 * t - 24, o];
  }
  catch (e) {
    return null;
  }
}

function dayOfYear(e) {
  for (var t = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31), r = e.getDate(), n = e.getMonth(), o = e.getFullYear(), c = 0, i = 0; i < n; i++) c += t[i]; return c += r, (n > 1 && o % 4 == 0 && o % 100 != 0 || o % 400 == 0) && (c += 1), c;
}