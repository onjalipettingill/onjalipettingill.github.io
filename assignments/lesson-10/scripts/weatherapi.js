let weatherRequest = new XMLHttpRequest();
let apiURLstring =
'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=9f0d8ba5071db5ba05fc4a7a0b1c086b';

weatherRequest.open("get" , apiURLstring , true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);


document.getElementById('current-temp').innerHTML = weatherData.main.temp;
document.getElementById('currently').innerHTML = weatherData.weather[0].description;
document.getElementById('humidity').innerHTML = weatherData.main.humidity;
document.getElementById('windSpeed').innerHTML = weatherData.wind.speed;
let icon = 'http://openweathermap.org/img/wn/01d@2x.png';
let desc = weatherData.weather[0].description;


}