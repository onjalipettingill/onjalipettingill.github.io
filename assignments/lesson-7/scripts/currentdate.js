function renderDate(){
    var mydate = new Date();
    var year = mydate.getFullYear();
    var day = mydate.getDay();
    var month = mydate.getMinutes();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday","MOnday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    var montharray = new Array("Jan","Feb","March","April","May","June","July","Aug","Sept","October","November","December");

var myClock = document.getElementById("date");
myClock.textContent = "+dayarray[day]+" "+daym+" "+montharray[month]+" "+year+";
myClock.innerText = "+dayarray[day]+" "+daym+" "+montharray[month]+" "+year+";
}
