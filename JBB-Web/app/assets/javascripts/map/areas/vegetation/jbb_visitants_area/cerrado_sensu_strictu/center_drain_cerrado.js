var centerDrainCerrado;

  var centerDrainCerradoCoordinates = [
  {lat: -15.88337219336269, lng: -47.837111949920654},
  {lat: -15.883578577605146, lng: -47.83771276473999},
  {lat: -15.88428028244717, lng: -47.83979415893555},
  {lat: -15.884816878617508, lng: -47.839815616607666},
  {lat: -15.885993257525085, lng: -47.83977270126343},
  {lat: -15.886633039659277, lng: -47.83979415893555},
  {lat: -15.887087077359753, lng: -47.83987998962402},
  {lat: -15.887541114036193, lng: -47.840073108673096},
  {lat: -15.887933235796272, lng: -47.84026622772217},
  {lat: -15.888469822230158, lng: -47.84043788909912},
  {lat: -15.88896513151495, lng: -47.84043788909912},
  {lat: -15.889481077390569, lng: -47.84018039703369},
  {lat: -15.887685580036647, lng: -47.832112312316895},
  {lat: -15.886385382300125, lng: -47.832627296447754},
  {lat: -15.88595198118855, lng: -47.83717632293701},
  {lat: -15.883000701193211, lng: -47.837369441986084},
  {lat: -15.88306261660238, lng: -47.837626934051514},
  {lat: -15.882897508802285, lng: -47.8380560874939},
  {lat: -15.883681769647039, lng: -47.83975124359131},
  {lat: -15.884362835797226, lng: -47.83977270126343},
];

var centerDrainCerradoColor = '#65B494';

function addCenterDrainCerrado(){
  centerDrainCerrado = createVegetation(centerDrainCerradoCoordinates, centerDrainCerradoColor);

  centerDrainCerrado.setMap(map);

  //add a listener to open a infowindow every time the river is clicked
  google.maps.event.addListener(centerDrainCerrado, 'click', function(clicked_location) {
    addInfowindow(clicked_location.latLng, cerradoSensuStrictuContentString);
  });
}


