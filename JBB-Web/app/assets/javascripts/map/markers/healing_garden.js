function addHealingGardenMarker(){
    //set tea hoJardim Medicinalo, will be used at infowindow
    var healingGardenInfowindowContentString =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Jardim Medicinal</h1>'+
        '<div id="bodyContent">'+
        '<p>O <b>Jardim Medicinal</b>, acompanha o caminho de diversas espécies ' +
        'da flora nativa com uso medicinal, identificadas com '+
        'nomes científicos e populares. '+
        '<p>Leia mais em:  <a href="/jbb_spaces/healing_garden">'+
        'Jardim Medicinal</a> '+
        '</div>'+
        '</div>';

    //set the infowindow with japanese garden info
    var infowindow = new google.maps.InfoWindow({
        content: healingGardenInfowindowContentString
    });

    //set the position in latitude and longitude of the marker
    var healingGardenLatLng = {lat: -15.873571, lng: -47.838149};

    //add the marker at the map in the position previously defined
    var healingGardenMarker = new google.maps.Marker({
        position: healingGardenLatLng,
        map: map,
        title: 'Estufas'
    });

    //add a listener to verify if the marker is clicked
    healingGardenMarker.addListener('click', function() {
        infowindow.open(map, healingGardenMarker);
    });

    //set the marker on map
    healingGardenMarker.setMap(map);
}
