var denseCerrado;

var denseCerradoCoordinates = [
];

var denseCerradoColor = '#87B591';

function addDenseCerrado(){
    denseCerrado = createVegetation(denseCerradoCoordinates, denseCerradoColor);

    denseCerrado.setMap(map);

    //add a listener to open a infowindow every time the river is clicked
    google.maps.event.addListener(denseCerrado, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, cerradoSensuStrictuContentString);
    });
}
