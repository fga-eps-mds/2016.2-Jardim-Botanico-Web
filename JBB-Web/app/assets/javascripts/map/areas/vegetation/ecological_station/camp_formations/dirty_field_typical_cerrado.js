var dirtyFieldTypicalCerrado;

var dirtyFieldTypicalCerradoCoordinates = [
    {lat: -15.87313526953749, lng: -47.823829650878906},
    {lat: -15.872887595580538, lng: -47.825074195861816},
    {lat: -15.872722479440124, lng: -47.826361656188965},
    {lat: -15.874291077311193, lng: -47.82653331756592},
    {lat: -15.875075371667327, lng: -47.827134132385254},
    {lat: -15.876107333273804, lng: -47.828636169433594},
    {lat: -15.87722184587135, lng: -47.82940864562988},
    {lat: -15.877717182824348, lng: -47.830138206481934},
    {lat: -15.878831686515044, lng: -47.83005237579346},
    {lat: -15.880606624106031, lng: -47.82850742340088},
    {lat: -15.8818036662073, lng: -47.8289794921875},
    {lat: -15.882629208338384, lng: -47.82867908477783},
    {lat: -15.882340268977481, lng: -47.827348709106445},
    {lat: -15.881432171144203, lng: -47.82674789428711},
    {lat: -15.88134961659267, lng: -47.825889587402344},
    {lat: -15.881101952735033, lng: -47.824645042419434},
    {lat: -15.88106067539581, lng: -47.823829650878906},
    {lat: -15.880235126834814, lng: -47.82391548156738},
    {lat: -15.877180567736948, lng: -47.82400131225586},
    {lat: -15.875694549265535, lng: -47.82400131225586},
    {lat: -15.8738782895817, lng: -47.82378673553467},
];

var dirtyFieldTypicalCerradoColor = '#A7E3D9';

function addDirtyFieldTypicalCerrado(){
    dirtyFieldTypicalCerrado = createVegetation(dirtyFieldTypicalCerradoCoordinates,
                                                dirtyFieldTypicalCerradoColor);

    dirtyFieldTypicalCerrado.setMap(map);

    //add a listener to open a infowindow every time the river is clicked
    google.maps.event.addListener(dirtyFieldTypicalCerrado, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, campFormationsContentString);
    });
}
