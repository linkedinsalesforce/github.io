function startTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
        h + ":" + m + ":" + s;
    setTimeout(startTime, 999);
}

function checkTime(i) {
    if (i < 10) i = "0" + i;
    return i;
}