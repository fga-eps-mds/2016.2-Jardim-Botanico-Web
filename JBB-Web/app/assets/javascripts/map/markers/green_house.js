var greenHouse;

var greenHouseCoordinate = {lat: -15.876243, lng: -47.835719};

var greenHouseContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Estufas</h1>'+
    '<div id="bodyContent">'+
    '<p>As <b>Estufas</b>, conjunto de quiosques onde estão alocadas as coleções ' +
    'de aráceas, bromeliáceas e outras famílias botânicas, '+
    'permitindo o acesso dos visitantes. <br><br>'+
    '<img src="/assets/portfolio/fullsize/14.jpg" class="img-responsive" alt="" style="width: 550px;height: 250px;">' +
    '</div>'+
    '</div>';

var greenHouseTitle = 'Estufas';

function addGreenHouseMarker(){
    //create the jbb space
    greenHouse = createJbbSpace(greenHouseCoordinate, greenHouseTitle);

    //set the jbb space on map
    greenHouse.setMap(map);

    //add a listener to open a infowindow every time the jbb space is clicked
    google.maps.event.addListener(greenHouse, 'click', function() {
        addInfowindowMarkers(greenHouse, greenHouseContentString);
    });
}
