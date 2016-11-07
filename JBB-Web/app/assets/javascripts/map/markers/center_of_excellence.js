var centerOfExcellence;

var centerOfExcellenceCoordinate = {lat: -15.876439, lng: -47.825293};

var centerOfExcellenceContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading"'+
    '>Centro de Excelência do Cerrado - Mirante</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Mirante</b>, Sua localização privilegiada em um dos '+
    'pontos mais altos do JBB permite avistar a silhueta de Brasília '+
    'e boa parte da Estação Ecológica Jardim Botânico – EEJBB. '+
    'Em período de seca, época com grande risco de incêndios, bombeiros '+
    'e brigadistas assumem este posto para monitorar a ocorrência de fogo. '+
    '<p>Leia mais em:  <a href="/jbb_spaces/center_of_excellence">'+
    'Mirante</a> '+
    '</div>'+
    '</div>';

var centerOfExcellenceTitle = 'Mirante';

function addCenterOfExcellenceMarker(){
    //create the jbb space
    centerOfExcellence = createJbbSpace(centerOfExcellenceCoordinate, centerOfExcellenceTitle);

    //set the jbb space on map
    centerOfExcellence.setMap(map);

    //add a listener to open a infowindow every time the jbb space is clicked
    google.maps.event.addListener(centerOfExcellence, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, centerOfExcellenceContentString);
    });
}
