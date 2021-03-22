const week = 604800000;
const startSaturday = 217800000;
const len = 10800000;
var d = new Date();
var curenttime = d.getTime();
var nextSaturdayStart = (d.getTime() - d.getTime() % week) / week * week + startSaturday;
while (nextSaturdayStart < d.getTime()) {
    nextSaturdayStart += week;
}

while(nextSaturdayStart - week > d.getTime()) {
    nextSaturdayStart -= week;
}
var nextSaturdayEnd = nextSaturdayStart + len;
var nextSaturdayStart1 = nextSaturdayStart + week;
var nextSaturdayEnd1 = nextSaturdayEnd + week;

function displayDate(d){
    var dd = d.getDate();
    if(dd < 10) {
        dd = '0' + dd;
    };
    var mm = d.getMonth() + 1;
    if(mm < 10) {
        mm = '0' + mm;
    }
    var yyyy = d.getFullYear();
    return yyyy + '/' + mm + '/' + dd;
}

function displayHour(d){
    var hh = d.getHours();
    if(hh < 10) hh = '0' + hh;
    var mm = d.getMinutes();
    if(mm < 10) mm = '0' + mm;
    var ss = d.getSeconds();
    if(ss < 10) ss = '0' + ss;
    return " " + hh + ":" + mm + ":" + ss + " UTC+" + d.toString().substr(29, 2) + "<br>";
}

function displayd(d){
    return displayDate(d) + displayHour(d) + '('+ d.getTime() / 1000+')';
}

document.getElementById("day1").innerHTML = displayDate(new Date(nextSaturdayStart)) + "<br> (Thứ bảy)";
document.getElementById("day2").innerHTML = displayDate(new Date(nextSaturdayStart1)) + "<br> (Thứ bảy)";
document.getElementById("start1").innerHTML = displayd(new Date(nextSaturdayStart));
document.getElementById("end1").innerHTML = displayd(new Date(nextSaturdayEnd));
document.getElementById("start2").innerHTML = displayd(new Date(nextSaturdayStart1));
document.getElementById("end2").innerHTML = displayd(new Date(nextSaturdayEnd1));
