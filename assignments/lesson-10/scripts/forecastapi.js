let forecastRequest = new XMLHttpRequest();
let apiURLstring2 =
'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=9f0d8ba5071db5ba05fc4a7a0b1c086b';

forecastRequest.open("get" , apiURLstring2 , true);
forecastRequest.send();

forecastRequest.onload =  function () {
    let forecastData = JSON.parse(forecastRequest.responseText);
    console.log(forecastData);

    var section = document.querySelector('body');
    var table = document.getElementById('table')
    

    for (var i=0; i < forecastData.list.length; i++) {
    if(forecastData.list[i].dt_txt.includes('18:00:00')){
            var myDiv = document.createElement('div');
            var days = document.createElement('h4');
            var icon = document.createElement('img');
            var temp  = document.createElement('p');
           
           
            //days.textContent = 
            temp.textContent =  forecastData.list[i].main.temp;
            icon.textContent =  forecastData.list[i].weather[0];
            myDiv.className = "table"

            myDiv.appendChild(days);
            myDiv.appendChild(temp);
            myDiv.appendChild(icon);

            table.appendChild(myDiv);
        
            let img = "http://openweathermap.org/img/wn/" + forecastData.list[i].weather[0].icon + ".png";
            let desc = "weather icon";      

            icon.setAttribute('src', img);
            icon.setAttribute('alt', desc);


}
    }
}
