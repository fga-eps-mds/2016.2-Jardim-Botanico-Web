var contemplationGarden;

var contemplationGardenCoordinate = {lat: -15.873717, lng: -47.834306};

var contemplationGardenContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Jardim de Contemplação</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Jardim de Contemplação</b>, Este jardim dispõe em coleções ' +
    'espécies vegetais de diferentes biomas brasileiros, '+
    'onde se pode apreciar a riqueza da nossa biodiversidade. <br><br>'+
    '<img src="/assets/portfolio/fullsize/17.jpg" class="img-responsive" alt="" style="width: 550px;height: 250px;">' +
    '<p>Leia mais em: <a href="http://www.jardimbotanico.df.gov.br/espacos-jbb/jardins-do-jardim/" target="_blank">'+
    'Jardim de Contemplação</a> '+
    '</div>'+
    '</div>';

var contemplationGardenTitle = 'Jardim de Contemplação';

function addContemplationGardenMarker(){
    //create the jbb space
    contemplationGarden = createJbbSpace(contemplationGardenCoordinate, contemplationGardenTitle);

    //set the jbb space on map
    contemplationGarden.setMap(map);

    //add a listener to open a infowindow every time the jbb space is clicked
    google.maps.event.addListener(contemplationGarden, 'click', function() {
        addInfowindowMarkers(contemplationGarden, contemplationGardenContentString);
    });
}
