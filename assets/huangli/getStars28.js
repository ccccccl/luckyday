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

export const getStars28 = function (e) {
  for (var t = 365 * (e.getFullYear() - 1), i = 0; i < e.getMonth(); i++) t += dayCountOfMonth(i, 0); t += e.getDate(); var r = 0; isLeapYear(e.getFullYear()) && (e.getMonth() + 1 > 3 || e.getMonth() + 1 == 3 && e.getDate() >= 1) && (r = 1); return ["轸水蚓宿星", "角木蛟宿星", "亢金龙宿星", "氐土貉宿星", "房日兔宿星", "心月狐宿星", "尾火虎宿星", "箕水豹宿星", "斗木獬宿星", "牛金牛宿星", "女土蝠宿星", "虚日鼠宿星", "危月燕宿星", "室火猪宿星", "壁水貐宿星", "奎木狼宿星", "娄金狗宿星", "胃土雉宿星", "昴日鸡宿星", "毕月乌宿星", "觜火猴宿星", "参水猿宿星", "井木犴宿星", "鬼金羊宿星", "柳土獐宿星", "星日马宿星", "张月鹿宿星", "翼火蛇宿星"][(t + Math.floor((e.getFullYear() - 1) / 4 - 13 + r) + 23) % 28];
}