var southEucalyptusFive;

var southEucalyptusFiveCoordinates = [
  {lat: -15.870152842068487, lng: -47.84144639968872},
  {lat: -15.87007028289482, lng: -47.84166097640991},
  {lat: -15.869925804259498, lng: -47.84220814704895},
  {lat: -15.870132202278246, lng: -47.842326164245605},
  {lat: -15.870307640427978, lng: -47.84239053726196},
  {lat: -15.870483078424991, lng: -47.84242272377014},
  {lat: -15.87056563742957, lng: -47.84217596054077},
  {lat: -15.870596597047564, lng: -47.84202575683594},
  {lat: -15.870627556660798, lng: -47.84176826477051},
  {lat: -15.870648196400317, lng: -47.84166097640991},
  {lat: -15.870441798910026, lng: -47.841618061065674},
  {lat: -15.870297320541042, lng: -47.84151077270508},
];
var southEucalyptusFiveColor = '#A1BF77';

function addSouthEucalyptusFive(){
  southEucalyptusFive = createVegetation(southEucalyptusFiveCoordinates,
                                        southEucalyptusFiveColor);

  southEucalyptusFive.setMap(map);
}
