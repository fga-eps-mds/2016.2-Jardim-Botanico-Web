var smallDrainCerrado;
var smallDrainCerradoCoordinates = [
  {lat: -15.869069250222964, lng: -47.84749746322632},
  {lat: -15.868883491035929, lng: -47.84771203994751},
  {lat: -15.868615171907937, lng: -47.84799098968506},
  {lat: -15.868346852422768, lng: -47.84822702407837},
  {lat: -15.868078532580396, lng: -47.84842014312744},
  {lat: -15.867810212380835, lng: -47.84865617752075},
  {lat: -15.867583171933015, lng: -47.84895658493042},
  {lat: -15.867562531879614, lng: -47.84914970397949},
  {lat: -15.867727652247583, lng: -47.849342823028564},
  {lat: -15.867934052517322, lng: -47.84921407699585},
  {lat: -15.86801661256605, lng: -47.84891366958618},
  {lat: -15.868181732562034, lng: -47.84876346588135},
  {lat: -15.868408772335666, lng: -47.84891366958618},
  {lat: -15.868656451797039, lng: -47.84927845001221},
  {lat: -15.869027970418417, lng: -47.84970760345459},
  {lat: -15.86929628899686, lng: -47.84975051879883},
  {lat: -15.869585247066473, lng: -47.84947156906128},
  {lat: -15.869791645433974, lng: -47.84914970397949},
  {lat: -15.869812285259103, lng: -47.84891366958618},
  {lat: -15.869667806438837, lng: -47.848613262176514},
  {lat: -15.869461407944506, lng: -47.84822702407837},
  {lat: -15.869110530019054, lng: -47.84766912460327},
];

var smallDrainCerradoColor = '#65B494';

function addSmallDrainCerrado(){
  smallDrainCerrado = createVegetation(smallDrainCerradoCoordinates,
                                       smallDrainCerradoColor);

  smallDrainCerrado.setMap(map);

  //add a listener to open a infowindow every time the river is clicked
  google.maps.event.addListener(smallDrainCerrado, 'click', function(clicked_location) {
      addInfowindow(clicked_location.latLng, cerradoSensuStrictuContentString);
  });
}
