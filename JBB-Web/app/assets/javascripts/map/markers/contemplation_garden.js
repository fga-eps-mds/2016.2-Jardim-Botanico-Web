function addContemplationGardenMarker(){
    //set japanese garden info, will be used at infowindow
    var contemplationGardenInfowindowContentString =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Jardim de Contemplação</h1>'+
        '<div id="bodyContent">'+
        '<p>O <b>Jardim de Contemplação</b>, Este jardim dispõe em coleções ' +
        'espécies vegetais de diferentes biomas brasileiros, '+
        'onde se pode apreciar a riqueza da nossa biodiversidade.'+
        '<p>Leia mais em: <a href="/jbb_spaces/contemplation_garden">'+
        'Jardim de Contemplação</a> '+
        '</div>'+
        '</div>';

    //set the infowindow with japanese garden info
    var infowindow = new google.maps.InfoWindow({
        content: contemplationGardenInfowindowContentString
    });

    //set the position in latitude and longitude of the marker
    var contemplationGardenLatLng = {lat: -15.873717, lng: -47.834306};

    //add the marker at the map in the position previously defined
    var contemplationGardenMarker = new google.maps.Marker({
        position: contemplationGardenLatLng,
        map: map,
        title: 'Jardim de Contemplação'
    });

    //add a listener to verify if the marker is clicked
    contemplationGardenMarker.addListener('click', function() {
        infowindow.open(map, contemplationGardenMarker);
    });

    //set the marker on map
    contemplationGardenMarker.setMap(map);
}
