var caesb2River;

var caesb2RiverCoordinates = [
    {lat: -15.891771861105648, lng: -47.8432122990489},
    {lat: -15.891773150954002, lng: -47.84321232000366},
    {lat: -15.891957599183025, lng: -47.84338898956776},
    {lat: -15.892081424472694, lng: -47.84356065094471},
    {lat: -15.892329074823467, lng: -47.843689396977425},
    {lat: -15.89257672486949, lng: -47.8437752276659},
    {lat: -15.892617999847523, lng: -47.84381814301014},
    {lat: -15.89290692445676, lng: -47.843903973698616},
    {lat: -15.893278398344792, lng: -47.84411855041981},
    {lat: -15.89352604722251, lng: -47.84424729645252},
    {lat: -15.893938794674744, lng: -47.84437604248524},
    {lat: -15.894186442739692, lng: -47.84454770386219},
    {lat: -15.894475365096916, lng: -47.84471936523914},
    {lat: -15.894764287039271, lng: -47.84480519592762},
    {lat: -15.895094483036813, lng: -47.8448910266161},
    {lat: -15.895218306396192, lng: -47.84501977264881},
    {lat: -15.89538340409015, lng: -47.84506268799305},
    {lat: -15.895548501648632, lng: -47.845148518681526},
    {lat: -15.895754873406226, lng: -47.84523434937},
    {lat: -15.896002519235916, lng: -47.84536309540272},
    {lat: -15.896208890527815, lng: -47.845448926091194},
    {lat: -15.896415261608027, lng: -47.845448926091194},
    {lat: -15.896621632476544, lng: -47.84549184143543},
    {lat: -15.896745454896042, lng: -47.84532018005848},
    {lat: -15.89682800313336, lng: -47.845191434025764},
    {lat: -15.896993099506398, lng: -47.84506268799305},
    {lat: -15.897116921697277, lng: -47.844933941960335},
    {lat: -15.897405839846261, lng: -47.84484811127186},
    {lat: -15.897612209698629, lng: -47.84476228058338},
    {lat: -15.897859853242034, lng: -47.84471936523914},
    {lat: -15.898066222628653, lng: -47.84471936523914},
    {lat: -15.898231317985527, lng: -47.84471936523914},
    {lat: -15.898437686991064, lng: -47.84471936523914},
    {lat: -15.898685329518258, lng: -47.84471936523914},
    {lat: -15.898891698058033, lng: -47.84476228058338},
    {lat: -15.899263160896083, lng: -47.8448910266161},
    {lat: -15.899510802407026, lng: -47.84497685730457},
    {lat: -15.899964811051877, lng: -47.84506268799305},
    {lat: -15.900088631413533, lng: -47.845148518681526},
    {lat: -15.900212451698968, lng: -47.845191434025764},
    {lat: -15.900336271908172, lng: -47.84527726471424},
    {lat: -15.900542638754112, lng: -47.84536309540272},
    {lat: -15.900625185433203, lng: -47.845448926091194},
    {lat: -15.900707732078423, lng: -47.84553475677967},
    {lat: -15.900831551982728, lng: -47.845663502812386},
    {lat: -15.901079191562653, lng: -47.8457922488451},
    {lat: -15.901120464796316, lng: -47.84587807953358},
    {lat: -15.901244284446532, lng: -47.84600682556629},
    {lat: -15.90128555764633, lng: -47.846178486943245},
    {lat: -15.901368104020518, lng: -47.84626431763172},
    {lat: -15.901491923518257, lng: -47.846393063664436},
    {lat: -15.90157446980774, lng: -47.84652180969715},
    {lat: -15.90173956228507, lng: -47.846693471074104},
    {lat: -15.901822108472913, lng: -47.84682221710682},
    {lat: -15.901987200746953, lng: -47.84699387848377},
    {lat: -15.90219356589893, lng: -47.847165539860725},
    {lat: -15.902358657868044, lng: -47.84733720123768},
    {lat: -15.90252374970163, lng: -47.84746594727039},
    {lat: -15.90252374970163, lng: -47.84746594727039},
];

var caesb2RiverContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Captação da CAESB 2</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Ribeirão Cabeça de Veado</b>, serve de ponto de captação de ' +
    'água para a CAESB. '+
    'Esse braço do ribeirão da na estação de captação de recursos hidricos Cabeça de Veado II'+
    '</div>'+
    '</div>';

function addCaesb2River(){
    //create the river
    caesb2River = createRiver(caesb2RiverCoordinates, true);

    //set the river on map
    caesb2River.setMap(map);

    //add a listener to open a infowindow every time the river is clicked
    google.maps.event.addListener(caesb2River, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, caesb2RiverContentString);
    });
}
