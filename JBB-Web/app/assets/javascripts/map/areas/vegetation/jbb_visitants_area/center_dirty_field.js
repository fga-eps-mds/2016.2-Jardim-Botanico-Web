var centerDirtyField;

  var centerDirtyFieldCoordinates = [
    {lat: -15.883754004044903, lng: -47.839837074279785},
    {lat: -15.883929430331827, lng: -47.84019112586975},
    {lat: -15.884146133181146, lng: -47.84094214439392},
    {lat: -15.886653677758774, lng: -47.84039497375488},
    {lat: -15.887964192744787, lng: -47.8409743309021},
    {lat: -15.889542990806751, lng: -47.84039497375488},
    {lat: -15.889501715198078, lng: -47.84015893936157},
    {lat: -15.888748433852827, lng: -47.840373516082764},
    {lat: -15.88770621802826, lng: -47.840083837509155},
    {lat: -15.883702408049071, lng: -47.83945083618164},
  ];

var centerDirtyFieldColor = '#A7E3D9';

function addCenterDirtyField(){
  centerDirtyField = createVegetation(centerDirtyFieldCoordinates,
                                        centerDirtyFieldColor);

  centerDirtyField.setMap(map);
}