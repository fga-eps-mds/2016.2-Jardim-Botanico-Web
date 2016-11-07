var deerHeadRiverArm3;

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

function addDeerHeadRiverArm3(){
    //create the river
    deerHeadRiverArm3 = createRiver(deerHeadRiverArm3Coordinates, false);

    //set the river on map
    deerHeadRiverArm3.setMap(map);

    //add a listener to open a infowindow every time the river is clicked
    google.maps.event.addListener(deerHeadRiverArm3, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, deerHeadRiverContentString);
    });
}
