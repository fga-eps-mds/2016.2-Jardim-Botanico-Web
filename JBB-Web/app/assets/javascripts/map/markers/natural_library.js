var naturalLibrary;

var naturalLibraryCoordinate = {lat: -15.875422, lng: -47.836901};

var naturalLibraryContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Biblioteca da Natureza</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Biblioteca da Natureza</b>, Possui acervo literário infanto-juvenil, ' +
    'livros didáticos, gibis e brinquedos com temática ambiental que '+
    'estimulam a imaginação. Há ainda uma Sala Verde para exposição '+
    'de vídeos ambientais e um espaço para realização de oficinas. <br><br>'+
    '<img src="/assets/portfolio/fullsize/10.jpg" class="img-responsive" alt="" style="width: 550px;height: 250px;">' +
    '<p>Leia mais em:  <a href="http://www.jardimbotanico.df.gov.br/espacos-jbb/biblioteca-da-natureza/" target="_blank">'+
    'Biblioteca da Natureza</a> '+
    '</div>'+
    '</div>';

var naturalLibraryTitle = 'Biblioteca da Natureza';

function addNaturalLibraryMarker(){
    //create the jbb space
    naturalLibrary = createJbbSpace(naturalLibraryCoordinate, naturalLibraryTitle);

    //set the jbb space on map
    naturalLibrary.setMap(map);

    //add a listener to open a infowindow every time the jbb space is clicked
    google.maps.event.addListener(naturalLibrary, 'click', function() {
        addInfowindowMarkers(naturalLibrary, naturalLibraryContentString);
    });
}
