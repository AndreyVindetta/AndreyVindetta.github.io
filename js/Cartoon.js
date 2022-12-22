let date = new Date('May 1 2023 00:00:00');
function clock()
{
    var now = new Date();
    gap = date - now;
    console.log(gap);
    var days = Math.floor(gap / 1000 / 60 / 60/ 24);
    var hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    var minutes = Math.floor(gap / 1000 / 60) % 60;
    var seconds = Math.floor(gap / 1000) % 60;
    console.log(days);
    document.getElementById('day').innerText = days;
    document.getElementById('hour').innerText = hours;
    document.getElementById('minute').innerText = minutes;
    document.getElementById('second').innerText = seconds;
    setInterval(clock, 1000);
}
clock();


let data = new Date('Feb 1 2023 00:00:00');
function count()
{
    var now = new Date();
    gap = data - now;
    console.log(gap);
    var days = Math.floor(gap / 1000 / 60 / 60/ 24);
    var hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    var minutes = Math.floor(gap / 1000 / 60) % 60;
    var seconds = Math.floor(gap / 1000) % 60;
    console.log(days);
    document.getElementById('d').innerText = days;
    document.getElementById('h').innerText = hours;
    document.getElementById('m').innerText = minutes;
    document.getElementById('s').innerText = seconds;
    setInterval(count, 1000);
}
count();


let datu = new Date('Dec 17 2023 00:00:00');
function cou()
{
    var now = new Date();
    gap = datu - now;
    console.log(gap);
    var days = Math.floor(gap / 1000 / 60 / 60/ 24);
    var hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    var minutes = Math.floor(gap / 1000 / 60) % 60;
    var seconds = Math.floor(gap / 1000) % 60;
    console.log(days);
    document.getElementById('da').innerText = days;
    document.getElementById('ho').innerText = hours;
    document.getElementById('mi').innerText = minutes;
    document.getElementById('se').innerText = seconds;
    setInterval(cou, 1000);
}
cou();