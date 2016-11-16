var teaHouse;

var teaHouseCoordinate = {lat: -15.872346, lng: -47.837086};

var teaHouseContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Casa de Chá</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Casa de Chá</b>, é um espaço destinado a futuro restaurante ' +
    'Sua proximidade com o lago do Jardim Evolutivo, '+
    'torna-se um excelente ponto para sua observação. '+
    '<p>Leia mais em: <a href="http://www.jardimbotanico.df.gov.br/espacos-jbb/jardins-do-jardim/" target="_blank">'+
    'Casa de Chá</a> '+
    '</div>'+
    '</div>';

var teaHouseTitle = 'Casa de Chá';

function addTeaHouseMarker(){
    //create the jbb space
    teaHouse = createJbbSpace(teaHouseCoordinate, teaHouseTitle);

    //set the jbb space on map
    teaHouse.setMap(map);

    //add a listener to open a infowindow every time the jbb space is clicked
    google.maps.event.addListener(teaHouse, 'click', function() {
        addInfowindowMarkers(teaHouse, teaHouseContentString);
    });
}
