var hammockPlaceMarker;

function addHammockPlaceMarker(){
    //set the position in latitude and longitude of the marker
    var hammockPlaceLatLng = {lat: -15.872893, lng: -47.834558};

    //add the marker at the map in the position previously defined
    hammockPlaceMarker = new google.maps.Marker({
        position: hammockPlaceLatLng,
        map: map,
        title: 'Redário'
    });

    //add a listener to verify if the marker is clicked
    hammockPlaceMarker.addListener('click', addHammockPlaceInfowindow);

    //set the marker on map
    hammockPlaceMarker.setMap(map);
}

function addHammockPlaceInfowindow (){
    //set tea house info, will be used at infowindow
    var hammockPlaceInfowindowContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Redário</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Redário</b>, venha aproveitar nosso espaço para relaxar '+
    '<p>Leia mais em:  <a href="/jbb_spaces/hammock_place">'+
    'Redário</a> '+
    '</div>'+
    '</div>';

    infowindow.close();

    infowindow.setContent(hammockPlaceInfowindowContentString);

    infowindow.open(map, hammockPlaceMarker);
}
