var visitantsCenterAdministrativeArea;

var visitantsCenterAdministrativeAreaCoordinates = [
  {lat: -15.873764772807835, lng: -47.836993932724},
  {lat: -15.873651255969998, lng: -47.83669352531433},
  {lat: -15.8734758207312, lng: -47.83652186393738},
  {lat: -15.87274311896507, lng: -47.8364360332489},
  {lat: -15.87241288631216, lng: -47.83655405044556},
  {lat: -15.872227130207056, lng: -47.83663988113403},
  {lat: -15.87206201352544, lng: -47.836811542510986},
  {lat: -15.871876257096913, lng: -47.8370475769043},
  {lat: -15.871979455133895, lng: -47.83754110336304},
  {lat: -15.872175531258586, lng: -47.837820053100586},
  {lat: -15.872433525868823, lng: -47.83795952796936},
  {lat: -15.872608962015109, lng: -47.83797025680542},
  {lat: -15.87290823508859, lng: -47.83797025680542},
  {lat: -15.8730939905658, lng: -47.837873697280884},
  {lat: -15.873290065605987, lng: -47.83771276473999},
  {lat: -15.873486140455366, lng: -47.83745527267456},
  {lat: -15.873568698229603, lng: -47.837101221084595},
];

var visitantsCenterAdministrativeAreaColor = '#DCDA7D';

function addVisitantsCenterAdministrativeArea(){
  visitantsCenterAdministrativeArea = createVegetation(visitantsCenterAdministrativeAreaCoordinates,
                                      visitantsCenterAdministrativeAreaColor);

  visitantsCenterAdministrativeArea.setMap(map);
}
