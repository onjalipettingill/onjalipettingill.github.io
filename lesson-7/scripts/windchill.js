function myFunction(){
var wind =  parseInt(document.getElementById("windSpeed").innerHTML);
var temp =  parseInt(document.getElementById("temp").innerHTML);
var chill=(0.0817*(3.71*(Math.pow(wind, 0.5))+
5.81-0.25*wind)*(temp-91.4)+91.4);

document.getElementById("output").innerHTML = chill;
}

