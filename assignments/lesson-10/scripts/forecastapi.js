let forecastRequest = new XMLHttpRequest();
let apiURLstring2 =
'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=9f0d8ba5071db5ba05fc4a7a0b1c086b';

forecastRequest.open("get" , apiURLstring2 , true);
forecastRequest.send();

forecastRequest.onload =  function () {
    let forecastData = JSON.parse(forecastRequest.responseText);
    console.log(forecastData);


document.getElementById('day1').innerHTML = forecastData.list[6].main.temp;
document.getElementById('day2').innerHTML = forecastData.list[14].main.temp;
document.getElementById('day3').innerHTML = forecastData.list[22].main.temp;
document.getElementById('day4').innerHTML = forecastData.list[30].main.temp;
document.getElementById('day5').innerHTML = forecastData.list[38].main.temp;
console.log(forecastData.list[4].main.temp);


let icon = 'http://openweathermap.org/img/wn/01d@2x.png';
let desc = forecastData.list[6].weather["0"].description;

document.getElementById('day1-img').setAttribute('src' , icon);
document.getElementById('day1-img').setAttribute('description' , desc);

}