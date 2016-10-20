var sunWatchMarker;

function addSunWatchMarker(){

    //set the position in latitude and longitude of the marker
    var sunWatchLatLng = {lat: -15.873392, lng: -47.836761};

    //add the marker at the map in the position previously defined
    sunWatchMarker = new google.maps.Marker({
        position: sunWatchLatLng,
        map: map,
        title: 'Relógio de Sol'
    });

    //add a listener to verify if the marker is clicked
    sunWatchMarker.addListener('click', addSunWatchInfowindow);

    //set the marker on map
    sunWatchMarker.setMap(map);
}

function addSunWatchInfowindow (){
    //set tea house info, will be used at infowindow
    var sunWatchInfowindowContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Relógio de Sol</h1>'+
    '<div id="bodyContent">'+
    '<p>Visite o <b>Relógio de Sol</b>, venha se conectar com a natureza ' +
    'sem utilizar eletrônicos! '+
    '</div>'+
    '</div>';

    infowindow.close();

    //set the infowindow with japanese garden info
    infowindow.setContent(sunWatchInfowindowContentString);

    infowindow.open(map, sunWatchMarker);
}
