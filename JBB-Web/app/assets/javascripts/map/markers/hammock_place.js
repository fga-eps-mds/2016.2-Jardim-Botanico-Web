var hammockPlace;

var hammockPlaceCoordinate = {lat: -15.872893, lng: -47.834558};

var hammockPlaceContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Redário</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Redário</b>, venha aproveitar nosso espaço para relaxar '+
    '</div>'+
    '</div>';

var hammockPlaceTitle = 'Redário';

function addHammockPlaceMarker(){
    //create the jbb space
    hammockPlace = createJbbSpace(hammockPlaceCoordinate, hammockPlaceTitle);

    //set the jbb space on map
    hammockPlace.setMap(map);

    //add a listener to open a infowindow every time the jbb space is clicked
    google.maps.event.addListener(hammockPlace, 'click', function() {
        addInfowindowMarkers(hammockPlace, hammockPlaceContentString);
    });
}
