var smellsGardenMarker;

function addSmellsGardenMarker(){
    //set the position in latitude and longitude of the marker
    var smellsGardenLatLng = {lat: -15.875609, lng: -47.837040};

    //add the marker at the map in the position previously defined
    smellsGardenMarker = new google.maps.Marker({
        position: smellsGardenLatLng,
        map: map,
        title: 'Jardim de Cheiros'
    });

    //add a listener to verify if the marker is clicked
    smellsGardenMarker.addListener('click', addSmellsGardenInfowindow);

    //set the marker on map
    smellsGardenMarker.setMap(map);
}

function addSmellsGardenInfowindow (){
    //set smells garden info, will be used at infowindow
    var smellsGardenInfowindowContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Jardim de Cheiros</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Jardim de Cheiros</b>, Jardim temático com plantas aromáticas ' +
    'de uso tradicional da cultura popular, culinário e medicinal. '+
    'Seus canteiros formam um desenho com linhas sinuosas ,'+
    'em perfeita harmonia com o ambiente. Proporciona múltiplas intervenções '+
    'pedagógicas em percurso sensorial e a descoberta de sabores cheiros e texturas. '+
    '<p>Leia mais em: <a href="/jbb_spaces/smells_garden"> '+
    'Jardim de Cheiros</a> '+
    '</div>'+
    '</div>';

    infowindow.close();

    //set the infowindow with smells garden info
    infowindow.setContent(smellsGardenInfowindowContentString);

    infowindow.open(map, smellsGardenMarker);
}
