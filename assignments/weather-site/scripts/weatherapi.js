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

//-----------Fish Haven

let weatherRequestFH = new XMLHttpRequest();
let apiFHURLstring =
'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=9f0d8ba5071db5ba05fc4a7a0b1c086b';

weatherRequestFH.open("get" , apiFHURLstring , true);
weatherRequestFH.send();

weatherRequestFH.onload =  function () {
    let weatherDataFH = JSON.parse(weatherRequestFH.responseText);
    console.log(weatherDataFH);


document.getElementById('current-temp').innerHTML = weatherDataFH.main.temp;
document.getElementById('currently').innerHTML = weatherDataFH.weather[0].description;
document.getElementById('humidity').innerHTML = weatherDataFH.main.humidity;
document.getElementById('windSpeed').innerHTML = weatherDataFH.wind.speed;
let icon = 'http://openweathermap.org/img/wn/01d@2x.png';
let desc = weatherDataFH.weather[0].description;

}

//-----------Soda Springs

let weatherRequestSS = new XMLHttpRequest();
let apiSSURLstring =
'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=9f0d8ba5071db5ba05fc4a7a0b1c086b';

weatherRequestSS.open("get" , apiSSURLstring , true);
weatherRequestSS.send();

weatherRequestSS.onload =  function () {
    let weatherDataSS = JSON.parse(weatherRequestSS.responseText);
    console.log(weatherDataSS);


document.getElementById('current-temp').innerHTML = weatherDataSS.main.temp;
document.getElementById('currently').innerHTML = weatherDataSS.weather[0].description;
document.getElementById('humidity').innerHTML = weatherDataSS.main.humidity;
document.getElementById('windSpeed').innerHTML = weatherDataSS.wind.speed;
let icon = 'http://openweathermap.org/img/wn/01d@2x.png';
let desc = weatherDataSS.weather[0].description;

}

