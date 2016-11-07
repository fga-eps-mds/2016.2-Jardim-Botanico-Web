var redentorCristRiverArm;

var redentorCristRiverArmCoordinates = [
    {lat: -15.921745703131183, lng: -47.893264163285494},
    {lat: -15.921745703131183, lng: -47.893242705613375},
    {lat: -15.921776654874442, lng: -47.89316760376096},
    {lat: -15.92180760661293, lng: -47.89307104423642},
    {lat: -15.92190046179978, lng: -47.89280282333493},
    {lat: -15.921931413519184, lng: -47.89267407730222},
    {lat: -15.921941730757927, lng: -47.89255606010556},
    {lat: -15.921952047996145, lng: -47.892470229417086},
    {lat: -15.921972682470981, lng: -47.89234148338437},
    {lat: -15.921993316943707, lng: -47.892234195023775},
    {lat: -15.922003634179267, lng: -47.89205180481076},
    {lat: -15.922024268648798, lng: -47.89184795692563},
    {lat: -15.92203458588278, lng: -47.891708482056856},
    {lat: -15.922024268648798, lng: -47.89155827835202},
    {lat: -15.921972682470981, lng: -47.89138661697507},
    {lat: -15.921941730757927, lng: -47.89118276908994},
    {lat: -15.921859192833148, lng: -47.89105402305722},
    {lat: -15.921786972121135, lng: -47.89089309051633},
    {lat: -15.921704434132748, lng: -47.89069997146726},
    {lat: -15.92164253061921, lng: -47.89053903892636},
    {lat: -15.921559992571458, lng: -47.89036737754941},
    {lat: -15.921508406274397, lng: -47.890238631516695},
    {lat: -15.921436185436255, lng: -47.89012061432004},
    {lat: -15.921363964572134, lng: -47.890024054795504},
    {lat: -15.921260791864071, lng: -47.88988457992673},
    {lat: -15.921209205490166, lng: -47.88979874923825},
    {lat: -15.921167936381504, lng: -47.889766562730074},
    {lat: -15.921167936381504, lng: -47.889766562730074},
];

function addRedentorCristRiverArm(){
    //create the river
    redentorCristRiverArm = createRiver(redentorCristRiverArmCoordinates, false);

    //set the river on map
    redentorCristRiverArm.setMap(map);

    //add a listener to open a infowindow every time the river is clicked
    google.maps.event.addListener(redentorCristRiverArm, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, redentorCristRiverContentString);
    });
}
