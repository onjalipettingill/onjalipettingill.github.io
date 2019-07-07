
          function PrestonEvents(){
            var section = document.querySelector('section');
            var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json' ;
            var request = new XMLHttpRequest();
            request.open('GET', requestURL);
            request.responseType = 'json';
            request.send();
            request.onload = function() {
                var preston = request.response;
               
                prestontowninfo(preston);
            }

                function prestontowninfo(jsonObj) {
      var towns = (jsonObj)['towns'];
      var i = 4;

  var myArticle = document.createElement('article');
  var myPara5 = document.createElement('p');
    var myList = document.createElement('ul');

    myPara5.textContent = 'town events: ';

    var PrestonEvents = towns[4].events;
    for (var j = 0; j < PrestonEvents.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = PrestonEvents[j];
      myList.appendChild(listItem);
    }

    myArticle.className = "prestonevents";

    myArticle.appendChild(myPara5);
    myArticle.appendChild(myList);

   section.appendChild(myArticle);
            }
        } 