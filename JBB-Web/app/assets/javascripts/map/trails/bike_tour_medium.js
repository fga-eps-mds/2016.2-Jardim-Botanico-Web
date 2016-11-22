var bikeTourMedium;

var bikeTourMediumContentString =
  '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Circuito de Bicicletas Médio</h1>'+
  // '<div id="bodyContent">'+
  // '<p>O <b>Circuito de Bicicletas Médio</b>, ............. ' +
  // '  '+
  // '. '+
  // '<p>Leia mais em: <a href="/trails/bike_tour_medium">'+
  // 'Circuito de Bicicletas Médio</a> '+
  // '</div>'+
  '</div>';

var bikeTourMediumCoordenates = [
    {lat: -15.877882294871338, lng: -47.84056797623634},
    {lat: -15.876530436004504, lng: -47.835192158818245},
    {lat: -15.87423947889127, lng: -47.82599821686745},
    {lat: -15.882670485356108, lng: -47.82393828034401},
    {lat: -15.882711762365357, lng: -47.82797232270241},
    {lat: -15.882660166102458, lng: -47.83349700272083},
    {lat: -15.882662745915919, lng: -47.833507396280766},
    {lat: -15.882647267034676, lng: -47.83470634371042},
    {lat: -15.882665325729342, lng: -47.83594937995076},
    {lat: -15.88266403582263, lng: -47.836041916161776},
    {lat: -15.882655006475451, lng: -47.83610947430134},
    {lat: -15.882629208338384, lng: -47.836173847317696},
    {lat: -15.882577612054343, lng: -47.83614702522755},
    {lat: -15.882484738709746, lng: -47.83609874546528},
    {lat: -15.882391865322335, lng: -47.83605046570301},
    {lat: -15.882337689159886, lng: -47.836037683300674},
    {lat: -15.882234496429202, lng: -47.83600281458348},
    {lat: -15.882181610134216, lng: -47.835960590746254},
    {lat: -15.882132593555738, lng: -47.83595221932046},
    {lat: -15.882091316427763, lng: -47.835931432200596},
    {lat: -15.882017791522625, lng: -47.835911619476974},
    {lat: -15.881940396856601, lng: -47.83590893726796},
    {lat: -15.881905569247197, lng: -47.83590024104342},
    {lat: -15.881834624098303, lng: -47.83588012447581},
    {lat: -15.881813985504827, lng: -47.83588280668482},
    {lat: -15.881805343097138, lng: -47.835881352416436},
    {lat: -15.881704084960491, lng: -47.83590146898405},
    {lat: -15.881626690173912, lng: -47.83594371377603},
    {lat: -15.881550585268995, lng: -47.83601881562845},
    {lat: -15.881504793322291, lng: -47.836107999078195},
    {lat: -15.881419658976101, lng: -47.83628301322153},
    {lat: -15.880372632470397, lng: -47.83969196716498},
    {lat: -15.880358443334611, lng: -47.83981803098868},
    {lat: -15.88029652709402, lng: -47.83997628132056},
    {lat: -15.880242350367903, lng: -47.840067476427066},
    {lat: -15.880132706949006, lng: -47.84015062490653},
    {lat: -15.879411122818675, lng: -47.84031665325983},
    {lat: -15.879156748929907, lng: -47.840374815277755},
    {lat: -15.878885863620615, lng: -47.84042845945805},
    {lat: -15.878692373890944, lng: -47.84046332817525},
    {lat: -15.878465345704468, lng: -47.840495514683425},
    {lat: -15.878271855570837, lng: -47.840522336773574},
    {lat: -15.877882294871338, lng: -47.84056797623634},
];


var bikeTourMediumColor = '#660033';

function addBikeTourMedium(){
    //create the river
    bikeTourMedium = createTrail(bikeTourMediumCoordenates, bikeTourMediumColor);

    //set the river on map
    bikeTourMedium.setMap(map);

    //add a listener to open a infowindow every time the river is clicked
    google.maps.event.addListener(bikeTourMedium, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, bikeTourMediumContentString);
    });
}
