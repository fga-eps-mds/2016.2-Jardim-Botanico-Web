var smellsGarden;

var smellsGardenCoordinate = {lat: -15.875609, lng: -47.837040};

var smellsGardenContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Jardim de Cheiros</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Jardim de Cheiros</b>, Jardim temático com plantas aromáticas ' +
    'de uso tradicional da cultura popular, culinário e medicinal. '+
    'Seus canteiros formam um desenho com linhas sinuosas ,'+
    'em perfeita harmonia com o ambiente. Proporciona múltiplas intervenções '+
    'pedagógicas em percurso sensorial e a descoberta de sabores cheiros e texturas. <br><br> '+
    '<img src="/assets/portfolio/fullsize/16.jpg" class="img-responsive" alt="" style="width: 550px;height: 250px;">' +
    '<p>Leia mais em: <a href="http://www.jardimbotanico.df.gov.br/espacos-jbb/jardins-do-jardim/" target="_blank"> '+
    'Jardim de Cheiros</a> '+
    '</div>'+
    '</div>';

var smellsGardenTitle = 'Jardim de Cheiros';

function addSmellsGardenMarker(){
    //create the jbb space
    smellsGarden = createJbbSpace(smellsGardenCoordinate, smellsGardenTitle);

    //set the jbb space on map
    smellsGarden.setMap(map);

    //add a listener to open a infowindow every time the jbb space is clicked
    google.maps.event.addListener(smellsGarden, 'click', function() {
        addInfowindowMarkers(smellsGarden, smellsGardenContentString);
    });
}
