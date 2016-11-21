var cactusBosk;

var cactusBoskCoordinate = {lat: -15.875259, lng: -47.836627};

var cactusBoskContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Cactário</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Cactário</b>, ficam em exposição os indivíduos em ' +
    'período de floração, dos aproximados 190 espécimes '+
    'da flora brasileira e de outros países. <br><br>'+
    '<img src="/assets/portfolio/fullsize/6.jpg" class="img-responsive" alt="" style="width: 550px;height: 250px;">' +
    '</div>'+
    '</div>';

var cactusBoskTitle = 'Cactário';

function addCactusBoskMarker(){
    //create the jbb space
    cactusBosk = createJbbSpace(cactusBoskCoordinate, cactusBoskTitle);

    //set the jbb space on map
    cactusBosk.setMap(map);

    //add a listener to open a infowindow every time the jbb space is clicked
    google.maps.event.addListener(cactusBosk, 'click', function() {
        addInfowindowMarkers(cactusBosk, cactusBoskContentString);
    });
}
