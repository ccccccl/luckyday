function setListDate(d) {
  var y = r.a.solar2lunar(d.getFullYear(), d.getMonth(), d.getDate()); console.log("农历", y);
  var j = r.a.getStemsBranchDay(d),
    e = r.a.getStemsBranchMonth(d.getFullYear(), r.a.dayOfYear(d) - 1);
  y.zs = r.a.zhiShenOfMonth(e % 12, j % 12),
    y.jc = r.a.jianChuOfDate(d),
    y.xxiu = r.a.stars28OfDate(d);
  var o = y.cYear;
  y.cYear == new Date().getFullYear() && (y.cYear = "今"), y.cMonth <= 9 && (y.cMonth = "0".concat(y.cMonth)), y.cDay <= 9 && (y.cDay = "0".concat(y.cDay));
  var n = new Date(),
    l = Math.ceil((d.getTime() - n.getTime()) / 864e5);
  0 === l ? y.afterday = "今天" : l > 0 ? y.afterday = Math.abs(l) + "天后" : l < 0 && (y.afterday = Math.abs(l) + "天前"),
    y.url = "http://www.51wnl.com/calendar_lightApp/hl.html?yj=".concat(t.yjRes ? 1 : 0, "&sub_name=").concat(t.title, "&date=").concat(o).concat(y.cMonth).concat(y.cDay, " "),
    y.jxList = this.jxList("".concat(o, "/").concat(y.cMonth, "/").concat(y.cDay)).join("  "),
    t.transRes.push(y);
}


if (query?.start) {
  var d = t.$route.query.start.match(/\d+/g),
    y = t.$route.query.end.match(/\d+/g);
  var startdate = new Date(d[0], d[1] - 1, d[2]),
  enddate = new Date(y[0], y[1] - 1, y[2]);   
} else {
  startdate = new Date(j.getFullYear(), j.getMonth(), j.getDate()),
  enddate = new Date(j.getFullYear(), j.getMonth() + 3, j.getDate());
}




var d = startdate,
  y = enddate,
  j = r.a.solar2lunar(d.getFullYear(), d.getMonth(), d.getDate());
  startLunar = "".concat(j.IMonthCn).concat(j.IDayCn);

totalsearchres.map(function (d) {
  setListDate(d);
}