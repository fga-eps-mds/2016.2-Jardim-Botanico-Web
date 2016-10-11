function addJapaneseGardenMarker(){
    //set japanese garden info, will be used at infowindow
    var japaneseGardenInfowindowContentString =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Jardim Botanico - Jardim Japonês</h1>'+
        '<div id="bodyContent">'+
        '<p>O <b>Jardim Japonês</b>, Um jardim japonês manifesta a intenção de equilíbrio ' +
        'e harmonia entre seus elementos compostos no espaço. '+
        'Os elementos filosóficos e simbólicos - a água, as pedras, as plantas'+
        '- são mais importantes que seus aspectos visuais. '+
        'É um convite à contemplação, transmite paz e espiritualidade. '+
        '<p>Leia mais em: <a href="/jbb_spaces/space_name">'+
        'Jardim Japonês</a> '+
        '</div>'+
        '</div>';

    //set the infowindow with japanese garden info
    var infowindow = new google.maps.InfoWindow({
        content: japaneseGardenInfowindowContentString,
        maxWidth: 200
    });

    //set the position in latitude and longitude of the marker
    var japaneseGardenLatLng = {lat: -15.875562, lng: -47.836124};

    //add the marker at the map in the position previously defined
    var japaneseGardenMarker = new google.maps.Marker({
        position: japaneseGardenLatLng,
        map: map,
        title: 'Jardim Japonês'
    });

    //add a listener to verify if the marker is clicked
    japaneseGardenMarker.addListener('click', function() {
        infowindow.open(map, japaneseGardenMarker);
    });

    //set the marker on map
    japaneseGardenMarker.setMap(map);
}
