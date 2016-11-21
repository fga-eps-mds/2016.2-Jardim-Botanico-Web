var caesb4River;

var caesb4RiverCoordinates = [
    {lat: -15.878996797648476, lng: -47.84568630158901},
    {lat: -15.879141269779181, lng: -47.845732904970646},
    {lat: -15.879203186374902, lng: -47.845754362642765},
    {lat: -15.879285741806266, lng: -47.845797277987},
    {lat: -15.879347658357585, lng: -47.84581873565912},
    {lat: -15.879368297203788, lng: -47.84584019333124},
    {lat: -15.87940957488986, lng: -47.84586165100336},
    {lat: -15.879455631742953, lng: -47.84590344406331},
    {lat: -15.879554046724508, lng: -47.84594748169184},
    {lat: -15.879657240828646, lng: -47.84596893936396},
    {lat: -15.879760434879936, lng: -47.845990397036076},
    {lat: -15.879884267671681, lng: -47.846033312380314},
    {lat: -15.880049377942228, lng: -47.84609768539667},
    {lat: -15.880173210556322, lng: -47.84616205841303},
    {lat: -15.880379598077267, lng: -47.846290804445744},
    {lat: -15.880627262823232, lng: -47.84641955047846},
    {lat: -15.880895565954331, lng: -47.84654829651117},
    {lat: -15.881081314066472, lng: -47.84669850021601},
    {lat: -15.881267062007295, lng: -47.84682724624872},
    {lat: -15.881514725661907, lng: -47.846977449953556},
    {lat: -15.881617918761425, lng: -47.84706328064203},
    {lat: -15.88178302761067, lng: -47.84719202667475},
    {lat: -15.881906859158779, lng: -47.847277857363224},
    {lat: -15.882051329201973, lng: -47.84740660339594},
    {lat: -15.882175160585103, lng: -47.847470976412296},
    {lat: -15.882381546054413, lng: -47.84759972244501},
    {lat: -15.882691123861775, lng: -47.847728468477726},
    {lat: -15.882876870317748, lng: -47.8478142991662},
    {lat: -15.883145170451675, lng: -47.84794304519892},
    {lat: -15.883434108657628, lng: -47.84813616424799},
    {lat: -15.883619854428245, lng: -47.84830782562494},
    {lat: -15.88386751518919, lng: -47.848522402346134},
    {lat: -15.884032622193928, lng: -47.848736979067326},
    {lat: -15.88417709071201, lng: -47.84895155578852},
    {lat: -15.884300920787854, lng: -47.84920904785395},
    {lat: -15.884404112459567, lng: -47.84935925155878},
    {lat: -15.884466027437199, lng: -47.84961674362421},
    {lat: -15.88450730407837, lng: -47.849745489656925},
    {lat: -15.884527942395787, lng: -47.84978840500116},
    {lat: -15.884527942395787, lng: -47.84978840500116},
];

var caesb4RiverContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Captação da CAESB 4</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Ribeirão Cabeça de Veado</b>, serve de ponto de captação de ' +
    'água para a CAESB. '+
    'Esse braço do ribeirão da na estação de captação de recursos hidricos Cabeça de Veado IV'+
    '</div>'+
    '</div>';

function addCaesb4River(){
    //create the river
    caesb4River = createRiver(caesb4RiverCoordinates, true);

    //set the river on map
    caesb4River.setMap(map);

    //add a listener to open a infowindow every time the river is clicked
    google.maps.event.addListener(caesb4River, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, caesb4RiverContentString);
    });
}
