var deerHeadRiverArm3;

function addDeerHeadRiverArm3(){
    //set the path of the river
    var deerHeadRiverArm3Coordinates = [
        {lat: -15.871499583813398, lng: -47.85478393547237},
        {lat: -15.87164406132045, lng: -47.854901952669024},
        {lat: -15.871773059007067, lng: -47.85503069870174},
        {lat: -15.8718246580586, lng: -47.85528282634914},
        {lat: -15.8718246580586, lng: -47.85548667423427},
        {lat: -15.871845297675515, lng: -47.855663700029254},
        {lat: -15.87191237641587, lng: -47.85582999698818},
        {lat: -15.87195365562961, lng: -47.85596947185695},
        {lat: -15.87195365562961, lng: -47.85617868416011},
        {lat: -15.871917536318046, lng: -47.8562484215945},
        {lat: -15.871865937290305, lng: -47.856377167627215},
        {lat: -15.871907216513552, lng: -47.85654346458614},
        {lat: -15.871963975431727, lng: -47.85670976154506},
        {lat: -15.871948495728363, lng: -47.856918973848224}
    ];

    //add the river at the map in the position previously defined
    deerHeadRiverArm3 = new google.maps.Polyline({
        path: deerHeadRiverArm3Coordinates,
        map: map,
        strokeColor: '#366ED4',
        strokeWidth: 0.3,
    });

    //set the river on map
    deerHeadRiverArm3.setMap(map);

    google.maps.event.addListener(deerHeadRiverArm3, 'click', addDeerHeadRiverArm3Infowindow);
}

function addDeerHeadRiverArm3Infowindow(event){
    var deerHeadRiverArm3ContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Ribeirão Cabeça de Veado</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Ribeirão Cabeça de Veado</b>, serve de ponto de captação de ' +
    'água para a CAESB. '+
    'Esse ribeirão tem 4 braços que dão em 4 estações de captação de recursos hidricos da CAESB'+
    '<p>Leia mais em: <a href="/jbb_spaces/rio">'+
    'Rio</a> '+
    '</div>'+
    '</div>';

    infoWindow.close();
    infoWindow.setContent(deerHeadRiverArm3ContentString);
    infoWindow.setPosition(event.latLng);
    infoWindow.open(map);
}
