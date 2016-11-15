var amphitheater;

var amphitheaterCoordinate = {lat: -15.868693, lng: -47.840186};

var amphitheaterContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Anfiteatro</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Anfiteatro</b>, localizado junto à Alameda das Nações ' +
    'e dos Estados, foi criado para '+
    'a realização de grandes eventos.'+
    '<p>Leia mais em: <a href="http://www.jardimbotanico.df.gov.br/espacos-jbb/anfiteatro/">'+
    'Anfiteatro</a> '+
    '</div>'+
    '</div>';

var amphitheaterTitle = 'Anfiteatro';

function addAmphitheaterMarker(){
    //create the jbb space
    amphitheater = createJbbSpace(amphitheaterCoordinate, amphitheaterTitle);

    //set the jbb space on map
    amphitheater.setMap(map);

    //add a listener to open a infowindow every time the jbb space is clicked
    google.maps.event.addListener(amphitheater, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, amphitheaterContentString);
    });
}
