var southLeftBypassArea;

var southLeftBypassAreaCoordinates = [
  {lat: -15.921937145808334, lng: -47.90642969193868},
  {lat: -15.921524455835797, lng: -47.90642969193868},
  {lat: -15.920802246343483, lng: -47.90649406495504},
  {lat: -15.920327650120322, lng: -47.906172199873254},
  {lat: -15.919667340466223, lng: -47.90627948823385},
  {lat: -15.919089567738375, lng: -47.906107826856896},
  {lat: -15.918511793348749, lng: -47.90625803056173},
  {lat: -15.917480049234236, lng: -47.905871792463586},
  {lat: -15.918181635178867, lng: -47.90536172746215},
  {lat: -15.918906146917495, lng: -47.90522579132812},
  {lat: -15.919473602807926, lng: -47.905204333656},
  {lat: -15.919958518389537, lng: -47.905097045295406},
  {lat: -15.920298990332451, lng: -47.90530089318054},
  {lat: -15.920711682822892, lng: -47.90530089285312},
  {lat: -15.921083105339319, lng: -47.905451096557954},
  {lat: -15.921702141340404, lng: -47.90563348677097},
  {lat: -15.921991024154647, lng: -47.90560130026279}
];

var southLeftBypassAreaColor = '#BAEE5F';

function addSouthLeftBypassArea(){
  southLeftBypassArea = createVegetation(southLeftBypassAreaCoordinates,
                                              southLeftBypassAreaColor);

  southLeftBypassArea.setMap(map);

  //add a listener to open a infowindow every time the river is clicked
  google.maps.event.addListener(southLeftBypassArea, 'click', function(clicked_location) {
      addInfowindow(clicked_location.latLng, pathsContentString);
  });
}
