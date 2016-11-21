var infantPark;

var infantParkCoordinate = {lat: -15.873544, lng: -47.835236};

var infantParkContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Parque Infantil/Área de Piquenique</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Parque Infantil/Área de Piquenique</b>, um ótimo local para ficar com a família. ' +
    'Traga sua comida, e não esqueça de limpar depois! <br><br>'+
    '<img src="/assets/portfolio/fullsize/9.jpg" class="img-responsive" alt="" style="width: 550px;height: 250px;">' +
    '<p>Leia mais em:  <a href="http://www.jardimbotanico.df.gov.br/espacos-jbb/piquenique/" target="_blank">'+
    'Parque Infantil/Área de Piquenique</a> '+
    '</div>'+
    '</div>';

var infantParkTitle = 'Parque Infantil/Área de Piquenique';

function addInfantParkMarker(){
    //create the jbb space
    infantPark = createJbbSpace(infantParkCoordinate, infantParkTitle);

    //set the jbb space on map
    infantPark.setMap(map);

    //add a listener to open a infowindow every time the jbb space is clicked
    google.maps.event.addListener(infantPark, 'click', function() {
        addInfowindowMarkers(infantPark, infantParkContentString);
    });
}
