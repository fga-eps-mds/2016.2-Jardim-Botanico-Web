var southEucalyptusFour;

var southEucalyptusFourCoordinates = [
  {lat: -15.868728691582596, lng: -47.84151077270508},
  {lat: -15.868656451797039, lng: -47.84162878990173},
  {lat: -15.868718371614813, lng: -47.84169316291809},
  {lat: -15.868852531154765, lng: -47.84180045127869},
  {lat: -15.868997010559449, lng: -47.84190773963928},
  {lat: -15.869100210070838, lng: -47.84175753593445},
  {lat: -15.869285969058147, lng: -47.84167170524597},
  {lat: -15.869420128220272, lng: -47.84148931503296},
  {lat: -15.86945108801424, lng: -47.84128546714783},
  {lat: -15.869327248809848, lng: -47.84116744995117},
  {lat: -15.86920340952935, lng: -47.84116744995117},
  {lat: -15.869100210070838, lng: -47.841113805770874},
  {lat: -15.86893509082727, lng: -47.84100651741028},
  {lat: -15.868873171076059, lng: -47.841103076934814},
  {lat: -15.868862851115678, lng: -47.84122109413147},
  {lat: -15.868739011549847, lng: -47.84141421318054},
];

var southEucalyptusFourColor = '#A1BF77';

function addSouthEucalyptusFour(){
  southEucalyptusFour = createVegetation(southEucalyptusFourCoordinates,
                                        southEucalyptusFourColor);

  southEucalyptusFour.setMap(map);
}
