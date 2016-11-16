var labiataTrail;

var labiataTrailContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Trilha Labiata</h1>'+
    '<div id="bodyContent">'+
    '<p>A <b>Trilha labiata</b>,' +
    'Criada em 2009 para facilitar o acesso à Escola de Administração Fazendária '+
    '- ESAF, leva o nome da orquídea Cattleya labiat, natural da Mata Atlântica. '+
    'Nesta pequena trilha de mata seca, pode-se encontrar diversos exemplares '+
    'desta orquídea introduzidos ao longo do caminho. '+
    'A espécie foi salva da ameaça de extinção com ajuda do laboratório e do '+
    'banco de germoplasma do JBB, que produziu 100.000 plantas in vitro e '+
    'disseminou pelo do Distrito Federal.  A extensão dessa trilha é de: 0,239 KM '+
    '<p>Leia mais em: <a href="http://www.jardimbotanico.df.gov.br/espacos-jbb/trilhas/" target="_blank">'+
    'Trilha Labiata</a> '+
    '</div>'+
    '</div>';

var labiataTrailCoordinates = [
{lat: -15.863666683957533, lng: -47.82802999019623},
{lat: -15.863548001316016, lng: -47.828072905540466},
{lat: -15.863429318604636, lng: -47.828115820884705},
{lat: -15.863305475700878, lng: -47.82815337181091},
{lat: -15.863212593473154, lng: -47.828088998794556},
{lat: -15.863181632721064, lng: -47.82805144786835},
{lat: -15.863093910564343, lng: -47.82804608345032},
{lat: -15.863042309277848, lng: -47.828083634376526},
{lat: -15.862954587060518, lng: -47.828105092048645},
{lat: -15.862928786401095, lng: -47.828110456466675},
{lat: -15.86284622426876, lng: -47.828083634376526},
{lat: -15.862758501966114, lng: -47.82799243927002},
{lat: -15.862701740455838, lng: -47.82793343067169},
{lat: -15.862691420179528, lng: -47.827879786491394},
];

var labiataTrailColor = '#FFB400';

function addLabiataTrail(){
    //create the river
    labiataTrail = createTrail(labiataTrailCoordinates, labiataTrailColor);

    //set the river on map
    labiataTrail.setMap(map);

    //add a listener to open a infowindow every time the river is clicked
    google.maps.event.addListener(labiataTrail, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, labiataTrailContentString);
    });
}
