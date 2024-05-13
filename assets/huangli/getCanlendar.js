export const a = getCanlendar()


function getCanlendar() {
  var S = this.getYMD(this.currentDate),
    J = S.year,
    Y = S.month,
    t = S.date,
    e = S.hour;
  S.miniute;
  this.c_hour = e,
    this.currentCanlender = Q.a.solar2lunar(J, Y, t),
    this.currentCanlender.isTerm && (this.currentCanlender.termImg = k["1-".concat(this.currentCanlender.Term)]),
    this.currentCanlender.ncWeek = "周" + this.currentCanlender.ncWeek[2],
    this.currentCanlender.yearWeek = Q.a.getYearWeek(J, Y, t),
    console.log(this.currentCanlender),
    this.currentJX = Q.a.querySAByDay(this.currentDate, c, l);

  var n = new Date(JSON.parse(JSON.stringify(this.currentDate)));
  if (e >= 23 && this.currentCanlender.isToday) {
    n.setDate(n.getDate() + 1);
    var r = Q.a.querySAByDay(n, c, l),
      j = r.zhishen,
      y = r.taishen;
    this.currentJX.zhishen = j, this.currentJX.taishen = y;
  }
  var o = Q.a.getYJSqlFields(this.currentDate),
    X = "".concat(o[1], "-").concat(o[0]); this.currentYJ = C[X],
      (this.currentCanlender.is4jue || this.currentCanlender.is4li) && (this.currentYJ = { y: "-", j: "大事勿用 结婚 动手术 搬家 开工开业 建房 出行上任 安葬" }),
      this.currentYJ = JSON.parse(JSON.stringify(this.currentYJ).replaceAll("-", "无"));
  var m = Q.a.cxInfoOfDateTime(this.currentDate, Q.a.getLunarHourIndex(e));

  this.currentHourYJ = {
    lunarHour: Q.a.Zhi[Q.a.getLunarHourIndex(e)],
    StemBranchHour: Q.a.getStemsBranchHourAsString(this.currentDate, e),
    hour: D.a["1-".concat(e)],
    cs: m.substring(0, 2) + " " + m.substring(2, 4),
    caixi: Q.a.compassCNOfDate(this.currentDate, Q.a.getLunarHourIndex(e)),
    yi: this.getCurrentHourYJ(this.currentDate, e).yi,
    ji: this.getCurrentHourYJ(this.currentDate, e).ji,
    jx: Q.a.jixiongStatusOfDateTime(this.currentDate, e)
  };
}