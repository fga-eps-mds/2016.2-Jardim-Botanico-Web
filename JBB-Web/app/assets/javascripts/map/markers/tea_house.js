var teaHouseMarker;

function addTeaHouseMarker(){
    //set the position in latitude and longitude of the marker
    var teaHouseLatLng = {lat: -15.872346, lng: -47.837086};

    //add the marker at the map in the position previously defined
    teaHouseMarker = new google.maps.Marker({
        position: teaHouseLatLng,
        map: map,
        title: 'Casa de Chá'
    });

    //add a listener to verify if the marker is clicked
    teaHouseMarker.addListener('click', addTeaHouseInfowindow);

    //set the marker on map
    teaHouseMarker.setMap(map);
}


function addTeaHouseInfowindow (){
    //set tea house info, will be used at infowindow
    var teaHouseInfowindowContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Casa de Chá</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Casa de Chá</b>, é um espaço destinado a futuro restaurante ' +
    'Sua proximidade com o lago do Jardim Evolutivo, '+
    'torna-se um excelente ponto para sua observação. '+
    '<p>Leia mais em: <a href="/jbb_spaces/tea_house">'+
    'Casa de Chá</a> '+
    '</div>'+
    '</div>';

    infowindow.close();

    //set the infowindow with japanese garden info
    infowindow.setContent(teaHouseInfowindowContentString);

    infowindow.open(map, teaHouseMarker);
}
