var evolutionaryGardenMarker;

function addEvolutionaryGardenMarker(){
    //set the position in latitude and longitude of the marker
    var evolutionaryGardenLatLng = {lat: -15.872847, lng: -47.837298};

    //add the marker at the map in the position previously defined
    evolutionaryGardenMarker = new google.maps.Marker({
        position: evolutionaryGardenLatLng,
        map: map,
        title: 'Jardim Evolutivo'
    });

    //add a listener to verify if the marker is clicked
    evolutionaryGardenMarker.addListener('click', addEvolutionaryGardenInfowindow);

    //set the marker on map
    evolutionaryGardenMarker.setMap(map);
}

function addEvolutionaryGardenInfowindow (){
    //set japanese garden info, will be used at infowindow
    var evolutionaryGardenInfowindowContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Jardim Evolutivo</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Jardim Evolutivo</b>, Baseado no Modelo Filogenético concebido ' +
    'pelo botânico alemão Stebbins para apresentar a evolução das plantas'+
    'segundo seu sistema reprodutivo. Construído na forma circular,'+
    'em uma área aproximada de 3 hectares, permite ao visitante conhecer'+
    'as plantas em seu parentesco, e a organização da diversidade vegetal.'+
    'As plantas estão organizadas em um gradiente de evolução,'+
    'partindo das mais primitivas no centro até as mais evoluídas na periferia.'+
    'Também, por uma linha imaginária, as plantas monocotiledôneas são'+
    'separadas das dicotiledôneas, os dois grandes grupos da divisão botânica'+
    'das plantas. É um excelente instrumento didático para a educação ambiental,'+
    'proporcionando conhecimentos de botânica, ecologia e paisagismo.'+
    '<p>Leia mais em: <a href="/jbb_spaces/contemplation_garden">'+
    'Jardim Evolutivo</a> '+
    '</div>'+
    '</div>';

    infowindow.close();

    //set the infowindow with japanese garden info
    infowindow.setContent(evolutionaryGardenInfowindowContentString);

    infowindow.open(map, evolutionaryGardenMarker);
}
