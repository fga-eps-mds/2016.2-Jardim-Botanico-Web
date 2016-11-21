var southEucalyptusOne;

var southEucalyptusOneCoordinates = [
    {lat: -15.865405634650417, lng: -47.840330600738525},
  {lat: -15.86533855374455, lng: -47.840330600738525},
  {lat: -15.865199231791832, lng: -47.84039497375488},
  {lat: -15.865152791119538, lng: -47.84044325351715},
  {lat: -15.865209551939788, lng: -47.84050762653351},
  {lat: -15.865271472816383, lng: -47.840566635131836},
  {lat: -15.865333393673943, lng: -47.840582728385925},
  {lat: -15.86542627492465, lng: -47.84052908420563},
  {lat: -15.865441755128941, lng: -47.84043788909912},
  {lat: -15.865410794719166, lng: -47.840346693992615},
];

var southEucalyptusOneColor = '#A1BF77';

function addSouthEucalyptusOne(){
  southEucalyptusOne = createVegetation(southEucalyptusOneCoordinates,
                                        southEucalyptusOneColor);

  southEucalyptusOne.setMap(map);
}
