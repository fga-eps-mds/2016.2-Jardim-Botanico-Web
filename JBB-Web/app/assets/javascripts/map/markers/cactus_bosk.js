var cactusBoskMarker;

function addCactusBoskMarker(){
    //set the position in latitude and longitude of the marker
    var cactusBoskLatLng = {lat: -15.875259, lng: -47.836627};

    //add the marker at the map in the position previously defined
    cactusBoskMarker = new google.maps.Marker({
        position: cactusBoskLatLng,
        map: map,
        title: 'Cactário'
    });

    //add a listener to verify if the marker is clicked
    cactusBoskMarker.addListener('click', addCactusBoskInfowindow);

    //set the marker on map
    cactusBoskMarker.setMap(map);
}

function addCactusBoskInfowindow(){
    //set tea house info, will be used at infowindow
    var cactusBoskInfowindowContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Cactário</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Cactário</b>, ficam em exposição os indivíduos em ' +
    'período de floração, dos aproximados 190 espécimes '+
    'da flora brasileira e de outros países. '+
    '<p>Leia mais em:  <a href="/jbb_spaces/cactus_bosk">'+
    'Cactário</a> '+
    '</div>'+
    '</div>';

    infowindow.close();

    //set the infowindow with japanese garden info
    infowindow.setContent(cactusBoskInfowindowContentString);

    infowindow.open(map, cactusBoskMarker);
}
