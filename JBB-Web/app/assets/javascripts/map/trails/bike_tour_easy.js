var bikeTourEasy;

var bikeTourEasyContentString =
  '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Circuito de Bicicletas Fácil</h1>'+
  // '<div id="bodyContent">'+
  // '<p>O <b>Circuito de Bicicletas Fácil</b>, ............. ' +
  // '  '+
  // '. '+
  // '<p>Leia mais em: <a href="/trails/bike_tour_easy">'+
  // 'Circuito de Bicicletas Fácil</a> '+
  // '</div>'+
  '</div>';

var bikeTourEasyCoordenates = [
  {lat: -15.86990516444601, lng: -47.83699527382851},
  {lat: -15.868728691582596, lng: -47.83208146691322},
  {lat: -15.886442137138502, lng: -47.82686130143702},
  {lat: -15.887646883796704, lng: -47.832120694220066},
  {lat: -15.876560925620508, lng: -47.83518312175147},
{lat: -15.874414678998619, lng: -47.83576666207409},
{lat: -15.869925335630947, lng: -47.83700165913615},
];


var bikeTourEasyColor = '#00ffcc';

function addBikeTourEasy(){
    //create the river
    bikeTourEasy = createTrail(bikeTourEasyCoordenates, bikeTourEasyColor);

    //set the river on map
    bikeTourEasy.setMap(map);

    //add a listener to open a infowindow every time the river is clicked
    google.maps.event.addListener(bikeTourEasy, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, bikeTourEasyContentString);
    });
}
