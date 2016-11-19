var evolutionaryGarden;

var evolutionaryGardenCoordinate = {lat: -15.872847, lng: -47.837298};

var evolutionaryGardenContentString =
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
    'proporcionando conhecimentos de botânica, ecologia e paisagismo. <br><br>'+
    '<img src="/assets/portfolio/fullsize/2.jpg" class="img-responsive" alt="" style="width: 550px;height: 250px;">' +
    '<p>Leia mais em: <a href="http://www.jardimbotanico.df.gov.br/espacos-jbb/jardins-do-jardim/" target="_blank">'+
    'Jardim Evolutivo</a> '+
    '</div>'+
    '</div>';

var evolutionaryGardenTitle = 'Jardim Evolutivo';

function addEvolutionaryGardenMarker(){
    //create the jbb space
    evolutionaryGarden = createJbbSpace(evolutionaryGardenCoordinate, evolutionaryGardenTitle);

    //set the jbb space on map
    evolutionaryGarden.setMap(map);

    //add a listener to open a infowindow every time the jbb space is clicked
    google.maps.event.addListener(evolutionaryGarden, 'click', function() {
        addInfowindowMarkers(evolutionaryGarden, evolutionaryGardenContentString);
    });
}
