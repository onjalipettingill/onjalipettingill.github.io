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

//-----------Soda Springs

let weatherRequestFH = new XMLHttpRequest();
let apiFHURLstring =
'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=9f0d8ba5071db5ba05fc4a7a0b1c086b';

weatherRequestFH.open("get" , apiFHURLstring , true);
weatherRequestFH.send();

weatherRequestFH.onload =  function () {
    let weatherData2 = JSON.parse(weatherRequestFH.responseText);
    console.log(weatherData2);


document.getElementById('current-temp').innerHTML = weatherDataFH.main.temp;
document.getElementById('currently').innerHTML = weatherDataFH.weather[0].description;
document.getElementById('humidity').innerHTML = weatherDataFH.main.humidity;
document.getElementById('windSpeed').innerHTML = weatherDataFH.wind.speed;
let icon = 'http://openweathermap.org/img/wn/01d@2x.png';
let desc = weatherDataFH.weather[0].description;

}

