var japaneseGarden;

var japaneseGardenCoordinate = {lat: -15.875562, lng: -47.836124};

var japaneseGardenContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Jardim Japonês</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Jardim Japonês</b>, Um jardim japonês manifesta a intenção de equilíbrio ' +
    'e harmonia entre seus elementos compostos no espaço. '+
    'Os elementos filosóficos e simbólicos - a água, as pedras, as plantas'+
    '- são mais importantes que seus aspectos visuais. '+
    'É um convite à contemplação, transmite paz e espiritualidade. '+
    '<p>Leia mais em: <a href="/jbb_spaces/japapnese_garden">'+
    'Jardim Japonês</a> '+
    '</div>'+
    '</div>';

var japaneseGardenTitle = 'Jardim Japonês';

function addJapaneseGardenMarker(){
    //create the jbb space
    japaneseGarden = createJbbSpace(japaneseGardenCoordinate, japaneseGardenTitle);

    //set the jbb space on map
    japaneseGarden.setMap(map);

    //add a listener to open a infowindow every time the jbb space is clicked
    google.maps.event.addListener(japaneseGarden, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, japaneseGardenContentString);
    });
}
