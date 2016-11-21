var southEucalyptusEleven;

var southEucalyptusElevenCoordinates = [
  {lat: -15.868630651867337, lng: -47.84074366092682},
  {lat: -15.8728359968012, lng: -47.84200429916382},
  {lat: -15.872990793099614, lng: -47.84165024757385},
  {lat: -15.873248786666014, lng: -47.84116744995117},
  {lat: -15.871773059007067, lng: -47.84072756767273},
  {lat: -15.871618261773216, lng: -47.841070890426636},
  {lat: -15.871019711350165, lng: -47.840856313705444},
  {lat: -15.870225081317717, lng: -47.840609550476074},
  {lat: -15.869791645433974, lng: -47.84044861793518},
  {lat: -15.869703926153607, lng: -47.84043252468109},
  {lat: -15.869487207767865, lng: -47.84038424491882},
  {lat: -15.869182769641885, lng: -47.840362787246704},
  {lat: -15.868898970974707, lng: -47.84029841423035},
  {lat: -15.86875965148277, lng: -47.84051835536957},
];

var southEucalyptusElevenColor = '#A1BF77';

function addSouthEucalyptusEleven(){
  southEucalyptusEleven = createVegetation(southEucalyptusElevenCoordinates,
                                        southEucalyptusElevenColor);

  southEucalyptusEleven.setMap(map);
}
