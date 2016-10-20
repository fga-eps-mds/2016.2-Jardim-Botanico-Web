var naturalLibraryMarker;

function addNaturalLibraryMarker(){
    //set the position in latitude and longitude of the marker
    var naturalLibraryLatLng = {lat: -15.875422, lng: -47.836901};

    //add the marker at the map in the position previously defined
    naturalLibraryMarker = new google.maps.Marker({
        position: naturalLibraryLatLng,
        map: map,
        title: 'Biblioteca da Natureza'
    });

    //add a listener to verify if the marker is clicked
    naturalLibraryMarker.addListener('click', addNaturalLibraryInfowindow);

    //set the marker on map
    naturalLibraryMarker.setMap(map);
}

function addNaturalLibraryInfowindow (){
    //set tea hoBiblioteca da Naturezao, will be used at infowindow
    var naturalLibraryInfowindowContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Biblioteca da Natureza</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Biblioteca da Natureza</b>, Possui acervo literário infanto-juvenil, ' +
    'livros didáticos, gibis e brinquedos com temática ambiental que '+
    'estimulam a imaginação. Há ainda uma Sala Verde para exposição '+
    'de vídeos ambientais e um espaço para realização de oficinas.'+
    '<p>Leia mais em:  <a href="/jbb_spaces/narural_library">'+
    'Biblioteca da Natureza</a> '+
    '</div>'+
    '</div>';

    infowindow.close();

    infowindow.setContent(naturalLibraryInfowindowContentString);
    //set the infowindow with japanese garden info

    infowindow.open(map, naturalLibraryMarker);
}
