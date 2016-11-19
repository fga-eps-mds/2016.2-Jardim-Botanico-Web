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
    'a realização de grandes eventos.<br><br>'+
    '<img src="/assets/portfolio/fullsize/8.jpg" class="img-responsive" alt="" style="width: 550px;height: 250px;">' +
    '<p>Leia mais em: <a href="http://www.jardimbotanico.df.gov.br/espacos-jbb/anfiteatro/" target="_blank">'+
    'Anfiteatro</a> <br><br>'+
    '</div>'+
    '</div>';

var amphitheaterTitle = 'Anfiteatro';

function addAmphitheaterMarker(){
    //create the jbb space
    amphitheater = createJbbSpace(amphitheaterCoordinate, amphitheaterTitle);

    //set the jbb space on map
    amphitheater.setMap(map);

    //add a listener to open a infowindow every time the jbb space is clicked
    google.maps.event.addListener(amphitheater, 'click', function() {
        addInfowindowMarkers(amphitheater, amphitheaterContentString);
    });
}
