var centerGroundAreaRight;

var centerGroundAreaRightCoordinates = [
    {lat: -15.905235134311953, lng: -47.83575411891718},
    {lat: -15.905307361287521, lng: -47.8353893385065},
    {lat: -15.903646141527831, lng: -47.8344344720972},
    {lat: -15.901809497496874, lng: -47.83452030278568},
    {lat: -15.902180954946198, lng: -47.835046015752596},
    {lat: -15.90231279886138, lng: -47.83744327738532}
];

var centerGroundAreaRightColor = '#42CCD0';

function addCenterGroundAreaRight(){
    centerGroundAreaRight = createVegetation(centerGroundAreaRightCoordinates,
                                             centerGroundAreaRightColor);

    centerGroundAreaRight.setMap(map);
}
