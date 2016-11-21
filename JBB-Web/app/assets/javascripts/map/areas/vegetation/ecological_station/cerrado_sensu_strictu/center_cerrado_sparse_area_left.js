var centerCerradoSparseAreaLeft;

var centerCerradoSparseAreaLeftCoordinates = [
    {lat: -15.923794239561076, lng: -47.873577922582626},
    {lat: -15.920327649490611, lng: -47.87128195166588},
    {lat: -15.918057826591152, lng: -47.868106216192245},
    {lat: -15.916551475000933, lng: -47.867634147405624},
    {lat: -15.916118138890047, lng: -47.868835777044296},
    {lat: -15.91541654463768, lng: -47.86926493179635},
    {lat: -15.914921300494463, lng: -47.871153206942836},
    {lat: -15.914756218842141, lng: -47.872698159335414},
    {lat: -15.915808612052055, lng: -47.872912736056605},
    {lat: -15.916427664306601, lng: -47.87377104294137},
    {lat: -15.91708798460913, lng: -47.874951214907924},
    {lat: -15.91764512817632, lng: -47.87602409851388},
    {lat: -15.915767341833938, lng: -47.87634596359567},
    {lat: -15.917975286598177, lng: -47.87709698211984},
    {lat: -15.918841949874004, lng: -47.8775046778901}
];

var centerCerradoSparseAreaLeftColor = '#399E87';

function addCenterCerradoSparseAreaLeft(){
    centerCerradoSparseAreaLeft = createVegetation(centerCerradoSparseAreaLeftCoordinates,
                                                   centerCerradoSparseAreaLeftColor);

    centerCerradoSparseAreaLeft.setMap(map);

    //add a listener to open a infowindow every time the river is clicked
    google.maps.event.addListener(centerCerradoSparseAreaLeft, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, cerradoSensuStrictuContentString);
    });
}
