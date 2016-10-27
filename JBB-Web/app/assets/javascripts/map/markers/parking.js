var parkingMarker;

function addParkingMarker(){
    //set the position in latitude and longitude of the marker
    var parkingLatLng = {lat: -15.874579, lng: -47.836251};

    //add the marker at the map in the position previously defined
    parkingMarker = new google.maps.Marker({
        position: parkingLatLng,
        map: map,
        title: 'Estacionamento'
    });

    //add a listener to verify if the marker is clicked
    parkingMarker.addListener('click', addParkingInfowindow);

    //set the marker on map
    parkingMarker.setMap(map);
}
function addParkingInfowindow (){
    //set parking info, will be used at infowindow
    var parkingInfowindowContentString =
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

    infowindow.close();

    //set the infowindow with parking info
    infowindow.setContent(parkingInfowindowContentString);

    infowindow.open(map, parkingMarker);
}
