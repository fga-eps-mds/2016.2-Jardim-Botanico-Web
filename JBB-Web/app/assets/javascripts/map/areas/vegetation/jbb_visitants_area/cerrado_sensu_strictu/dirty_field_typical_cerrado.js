var dirtyFieldTypicalCerrado;

var dirtyFieldTypicalCerradoCoordinates = [
  {lat: -15.872959833849432, lng: -47.82380819320679},
  {lat: -15.872670880618498, lng: -47.825117111206055},
  {lat: -15.872557363164399, lng: -47.82644748687744},
  {lat: -15.874476831513574, lng: -47.82717704772949},
  {lat: -15.877675904791447, lng: -47.83000946044922},
  {lat: -15.879368297203788, lng: -47.829837799072266},
  {lat: -15.88106067539581, lng: -47.828121185302734},
  {lat: -15.881638557374975, lng: -47.82756328582764},
  {lat: -15.880895565954331, lng: -47.824344635009766},
  {lat: -15.880895565954331, lng: -47.823829650878906},
  {lat: -15.875281764411506, lng: -47.823872566223145},
  {lat: -15.873754453097941, lng: -47.823829650878906},
];


var dirtyFieldTypicalCerradoColor = 'A7E3D9';

function addDirtyFieldTypicalCerrado(){
  dirtyFieldTypicalCerrado = createVegetation(dirtyFieldTypicalCerradoCoordinates,
                                        dirtyFieldTypicalCerradoColor);
  dirtyFieldTypicalCerrado.setMap(map);

  //add a listener to open a infowindow every time the river is clicked
  google.maps.event.addListener(dirtyFieldTypicalCerrado, 'click', function(clicked_location) {
      addInfowindow(clicked_location.latLng, cerradoSensuStrictuContentString);
  });
}
}