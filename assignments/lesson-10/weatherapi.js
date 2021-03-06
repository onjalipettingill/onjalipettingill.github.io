let weatherRequest = new XMLHttpRequest();
let apiURLstring =
'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=9f0d8ba5071db5ba05fc4a7a0b1c086b';

weatherRequest.open("get" , apiURLstring , true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);


document.getElementById('current-temp').innerHTML = weatherData.main.temp;
let icon = 'http://openweathermap.org/img/wn/01d@2x.png';
let desc = weatherData.weather[0].description;

document.getElementById('cc-img').setAttribute('src' , icon);
document.getElementById('cc-img').setAttribute('description' , desc);

}
