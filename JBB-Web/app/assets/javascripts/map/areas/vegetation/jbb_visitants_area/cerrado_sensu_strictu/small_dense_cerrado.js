var smallDenseCerrado;

var smallDenseCerradoCoordinates = [
  {lat: -15.876406601150908, lng: -47.84322738647461},
  {lat: -15.876158931215373, lng: -47.843613624572754},
  {lat: -15.875663590430824, lng: -47.84402132034302},
  {lat: -15.875302403674299, lng: -47.84438610076904},
  {lat: -15.874301396993605, lng: -47.84392476081848},
  {lat: -15.873259106401797, lng: -47.8445041179657},
  {lat: -15.873290065605987, lng: -47.84395694732666},
  {lat: -15.873186868240204, lng: -47.84393548965454},
  {lat: -15.872784398008642, lng: -47.84412860870361},
  {lat: -15.872939194346685, lng: -47.843055725097656},
  {lat: -15.87346550100651, lng: -47.843302488327026},
  {lat: -15.873661575685173, lng: -47.843356132507324},
  {lat: -15.874291077311193, lng: -47.84351706504822},
  {lat: -15.87488961801681, lng: -47.8434956073761},
  {lat: -15.875250805513362, lng: -47.84350633621216},
  {lat: -15.875488156944243, lng: -47.84325957298279},
  {lat: -15.875611992362401, lng: -47.84289479255676},
  {lat: -15.876210529143723, lng: -47.843087911605835},
  {lat: -15.87637564242563, lng: -47.84323811531067},
];

var smallDenseCerradoColor = '#639E9A';

function addSmallDenseCerrado(){
  smallDenseCerrado = createVegetation(smallDenseCerradoCoordinates,
                                       smallDenseCerradoColor);

  smallDenseCerrado.setMap(map);

  //add a listener to open a infowindow every time the river is clicked
  google.maps.event.addListener(smallDenseCerrado, 'click', function(clicked_location) {
      addInfowindow(clicked_location.latLng, cerradoSensuStrictuContentString);
  });
}
