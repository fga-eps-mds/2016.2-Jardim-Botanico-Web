function addCenterOfExcellenceMarker(){
    //set tea house info, will be used at infowindow
    var centerOfExcellenceInfowindowContentString =
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

    //set the infowindow with japanese garden info
    var infowindow = new google.maps.InfoWindow({
        content: centerOfExcellenceInfowindowContentString
    });


    //set the position in latitude and longitude of the marker
    var centerOfExcellenceLatLng = {lat: -15.876439, lng: -47.825293};

    //add the marker at the map in the position previously defined
    var centerOfExcellenceMarker = new google.maps.Marker({
        position: centerOfExcellenceLatLng,
        map: map,
        title: 'Mirante'
    });

    //add a listener to verify if the marker is clicked
    centerOfExcellenceMarker.addListener('click', function() {
        infowindow.open(map, centerOfExcellenceMarker);
    });

    //set the marker on map
    centerOfExcellenceMarker.setMap(map);
}
s
