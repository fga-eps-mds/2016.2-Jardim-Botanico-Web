var sunWatch;

var sunWatchCoordinate = {lat: -15.873392, lng: -47.836761};

var sunWatchContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Relógio de Sol</h1>'+
    '<div id="bodyContent">'+
    '<p>Visite o <b>Relógio de Sol</b>, venha se conectar com a natureza ' +
    'sem utilizar eletrônicos! <br><br>'+
    '<img src="/assets/portfolio/fullsize/3.jpg" class="img-responsive" alt="" style="width: 550px;height: 250px;">'
    '</div>'+
    '</div>';

var sunWatchTitle = 'Relógio de Sol';

function addSunWatchMarker(){
    //create the jbb space
    sunWatch = createJbbSpace(sunWatchCoordinate, sunWatchTitle);

    //set the jbb space on map
    sunWatch.setMap(map);

    //add a listener to open a infowindow every time the jbb space is clicked
    google.maps.event.addListener(sunWatch, 'click', function() {
        addInfowindowMarkers(sunWatch, sunWatchContentString);
    });
}
 