var cleanCamp;

var cleanCampCoordinates = [
    {lat: -15.866876248900915, lng: -47.8412801027298},
    {lat: -15.866958809382886, lng: -47.842106223106384},
    {lat: -15.867123930245391, lng: -47.84268021583557},
    {lat: -15.866984609526575, lng: -47.842825055122375},
    {lat: -15.867113610195448, lng: -47.84317374229431},
    {lat: -15.867273570910212, lng: -47.843592166900635},
    {lat: -15.867418051446693, lng: -47.8438925743103},
    {lat: -15.867608971996784, lng: -47.84397840499878},
    {lat: -15.867707012208989, lng: -47.843559980392456},
    {lat: -15.867495451691497, lng: -47.84340441226959},
    {lat: -15.86756769189316, lng: -47.8431898355484},
    {lat: -15.867485131660573, lng: -47.84303963184357},
    {lat: -15.867268410889134, lng: -47.842846512794495},
    {lat: -15.867418051446693, lng: -47.8427392244339},
    {lat: -15.867113610195448, lng: -47.84130156040192},
    {lat: -15.867087810068286, lng: -47.8412264585495},
    {lat: -15.866994929583123, lng: -47.84124791622162},
];

var cleanCampColor = '#7ED9D1';

function addCleanCamp(){
    cleanCamp = createVegetation(cleanCampCoordinates, cleanCampColor);

    cleanCamp.setMap(map);

    //add a listener to open a infowindow every time the river is clicked
    google.maps.event.addListener(cleanCamp, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, campFormationsContentString);
    });
}
