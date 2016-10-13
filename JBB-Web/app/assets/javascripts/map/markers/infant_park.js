function addInfantParkMarker(){
    //set tea house info, will be used at infowindow
    var infantParkInfowindowContentString =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Parque Infantil/Área de Piquenique</h1>'+
        '<div id="bodyContent">'+
        '<p>O <b>Parque Infantil/Área de Piquenique</b>, um ótimo local para ficar com a família. ' +
        'Traga sua comida, e não esqueça de limpar depois! '+
        '<p>Leia mais em:  <a href="/jbb_spaces/infant_park">'+
        'Parque Infantil/Área de Piquenique</a> '+
        '</div>'+
        '</div>';

    //set the infowindow with japanese garden info
    var infowindow = new google.maps.InfoWindow({
        content: infantParkInfowindowContentString
    });

    //set the position in latitude and longitude of the marker
    var infantParkLatLng = {lat: -15.873544, lng: -47.835236};

    //add the marker at the map in the position previously defined
    var infantParkMarker = new google.maps.Marker({
        position: infantParkLatLng,
        map: map,
        title: 'Parque Infantil/Área de Piquenique'
    });

    //add a listener to verify if the marker is clicked
    infantParkMarker.addListener('click', function() {
        infowindow.open(map, infantParkMarker);
    });

    //set the marker on map
    infantParkMarker.setMap(map);
}
