var parking;

var parkingCoordinate = {lat: -15.874579, lng: -47.836251};

var parkingContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Estacionamento</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Estacionamento</b>,' +
    'o jardim botânico possui uma ampla área de estacionamento,'+
    'contendo vagas para todos os veiculos e até mesmo bicicletas'+
    '</div>'+
    '</div>';

var parkingTitle = 'Estacionamento';

function addParkingMarker(){
    //create the jbb space
    parking = createJbbSpace(parkingCoordinate, parkingTitle);

    //set the jbb space on map
    parking.setMap(map);

    //add a listener to open a infowindow every time the jbb space is clicked
    google.maps.event.addListener(parking, 'click', function() {
        addInfowindowMarkers(parking, parkingContentString);
    });
}
