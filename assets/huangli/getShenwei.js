const e = new Date();
const CompassNames = ["正北", "东北", "正东", "东南", "正南", "西南", "正西", "西北"];
const BASE_STEMS_DATE = new Date(1899, 1, 4, 0, 0);

export function getShenwei(type, e) {
  let t = getLunarHourIndex(e);
  var r = getStemBranchHour(e, t) % 10,
    n = caiCompassValueOfStemIndex(r),
    o = xiCompassValueOfStemIndex(r),
    c = fuCompassValueOfStemIndex(r);
  let idx;
  if (type === "喜神") {
    idx = o;
  } else if (type === "财神") {
    idx = n;
  } else if (type === "福神") {
    idx = c;
  }
  return CompassNames[idx];
}

function getLunarHourIndex(e) {
  return (Math.floor(e / 2) + e % 2) % 12;
}

function getStemBranchHour(e, t) {
  var r = getIntervalDays(BASE_STEMS_DATE, e),
    dt = parseInt((r + 9) % 10); return (6 * ((t + 2 * (dt > 4 ? dt - 5 : dt)) % 10) - 5 * t + 60) % 60;
}

function caiCompassValueOfStemIndex(e) {
  var t = -1;
  switch (e) {
    case 0:
      t = 1; break; 
    case 1:
      t = 5; break; 
    case 2: case 3:
      t = 6; break; 
    case 4: case 5:
      t = 0; break; 
    case 6: case 7:
      t = 2; break; 
    case 8: case 9:
      t = 4;
  }return t;
}


function xiCompassValueOfStemIndex(e) {
  var t = -1;
  switch (e) {
    case 0: case 5:
      t = 1; break; 
    case 1: case 6:
      t = 7; break;
    case 2: case 7:
      t = 5; break; 
    case 3: case 8:
      t = 4; break; 
    case 4: case 9:
      t = 3;
  }return t;
}

function fuCompassValueOfStemIndex(e) {
  var t = -1;
  switch (e) {
  case 0: case 1:
    t = 3; break; 
  case 2: case 3:
    t = 2; break; 
  case 4:
    t = 0; break; 
  case 5:
    t = 4; break; 
  case 6: case 7:
    t = 5; break; 
  case 8:
    t = 7; break;
  case 9:
    t = 6;
  }
  return t;
}

function getIntervalDays(e, t) {
  return t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), Math.floor((t - e) / 864e5);
}