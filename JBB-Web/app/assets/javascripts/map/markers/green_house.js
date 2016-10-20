var greenHouseMarker;

function addGreenHouseMarker (){
    //set the position in latitude and longitude of the marker
    var greenHouseLatLng = {lat: -15.876243, lng: -47.835719};

    //add the marker at the map in the position previously defined
    greenHouseMarker = new google.maps.Marker({
        position: greenHouseLatLng,
        map: map,
        title: 'Estufas'
    });

    //add a listener to verify if the marker is clicked
    greenHouseMarker.addListener('click', addGreenHouseInfowindow);

    //set the marker on map
    greenHouseMarker.setMap(map);
}


function addGreenHouseInfowindow (){
    //set tea house info, will be used at infowindow
    var greenHouseInfowindowContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Estufas</h1>'+
    '<div id="bodyContent">'+
    '<p>As <b>Estufas</b>, conjunto de quiosques onde estão alocadas as coleções ' +
    'de aráceas, bromeliáceas e outras famílias botânicas, '+
    'permitindo o acesso dos visitantes. '+
    '<p>Leia mais em:  <a href="/jbb_spaces/green_house">'+
    'Estufas</a> '+
    '</div>'+
    '</div>';

    infowindow.close();

    //set the infowindow with japanese garden info
    infowindow.setContent(greenHouseInfowindowContentString);

    infowindow.open(map, greenHouseMarker);
}
