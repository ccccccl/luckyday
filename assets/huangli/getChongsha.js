const CompassNames = ["正北", "东北", "正东", "东南", "正南", "西南", "正西", "西北"];
const ANIMAL = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
const BASE_STEMS_DATE = new Date(1899, 1, 4, 0, 0);



function branchIndexOfSolar(e, t) {
  return -2 == t ? getBranchDay(e) : getStemBranchHour(e, t) % 12;
}

function chongIndexOfDateTime(e) {
  var t = -1; switch (e) {
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
  }return t;
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

function getBranchDay(e) {
  var t = getIntervalDays(BASE_STEMS_DATE, e); return t > 0 ? Math.floor((t + 3) % 12) : 0;
}

function getStemBranchHour(e, t) {
  var r = getIntervalDays(BASE_STEMS_DATE, e),
    dt = parseInt((r + 9) % 10);
  return (6 * ((t + 2 * (dt > 4 ? dt - 5 : dt)) % 10) - 5 * t + 60) % 60;
}

function getIntervalDays(e, t) {
  return t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), Math.floor((t - e) / 864e5);
}

export const getChongsha = function (e) {
  var r = branchIndexOfSolar(e, -2),
    n = chongIndexOfDateTime(r),
    o = shaDirectionOfDateTime(r);
  try {
    return "冲" + ANIMAL[n] + "煞" + CompassNames[o].replace("正", "");
  }
  catch (e) {
    return "";
  }
}