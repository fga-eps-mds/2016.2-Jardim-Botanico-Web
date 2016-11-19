var orchidGarden;

var orchidGardenCoordinate = {lat: -15.872070, lng: -47.836940};

var orchidGardenContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Orquidário</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Orquidário</b>, abriga uma coleção de orquídeas composta por ' +
    'espécies nativas da flora brasileira, ' +
    'com ênfase para as do bioma Cerrado. <br><br>' +
    '<img src="/assets/portfolio/fullsize/4.jpg" class="img-responsive" alt="" style="width: 550px;height: 250px;">' +
    '<p>Leia mais em: <a href="http://www.jardimbotanico.df.gov.br/espacos-jbb/orquidario/" target="_blank">'+
    'Orquidário</a> '+
    '</div>'+
    '</div>';

var orchidGardenTitle = 'Orquidário';

function addOrchidGardenMarker(){
    //create the jbb space
    orchidGarden = createJbbSpace(orchidGardenCoordinate, orchidGardenTitle);

    //set the jbb space on map
    orchidGarden.setMap(map);

    //add a listener to open a infowindow every time the jbb space is clicked
    google.maps.event.addListener(orchidGarden, 'click', function() {
        addInfowindowMarkers(orchidGarden, orchidGardenContentString);
    });
}
