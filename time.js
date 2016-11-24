function date(id) {
  var date = new Date;
  d = date.getDate();
  year = date.getFullYear();
  month = date.getMonth();
  months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
  result = `${d} ${months[month]} ${year}`;
  document.getElementById(id).innerHTML = result;
  setTimeout('date("'+id+'");','1000');
  return true;
}

function time(id) {
  var date = new Date;
  h = date.getHours();
    if(h<10) {
      h = "0"+h;
    }
  m = date.getMinutes();
    if(m<10) {
      m = "0"+m;
    }
  s = date.getSeconds();
    if(s<10) {
      s = "0"+s;
    }
  result = `${h}:${m}:${s}`;
  document.getElementById(id).innerHTML = result;
  setTimeout('time("'+id+'");','1000');
  return true;
}
