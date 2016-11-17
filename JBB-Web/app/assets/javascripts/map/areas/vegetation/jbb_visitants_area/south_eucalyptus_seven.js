var southEucalyptusSeven;

var southEucalyptusSevenCoordinates = [
  {lat: -15.87211361250299, lng: -47.842551469802856},
  {lat: -15.87220649062926, lng: -47.842358350753784},
  {lat: -15.872237449995177, lng: -47.84218668937683},
  {lat: -15.872299368712735, lng: -47.84204721450806},
  {lat: -15.872474804975798, lng: -47.84215450286865},
  {lat: -15.872619281783665, lng: -47.84219741821289},
  {lat: -15.87280503752724, lng: -47.84224033355713},
  {lat: -15.872598642246022, lng: -47.842594385147095},
  {lat: -15.872495444526127, lng: -47.84292697906494},
  {lat: -15.872474804975798, lng: -47.84300208091736},
  {lat: -15.872268409356323, lng: -47.842937707901},
  {lat: -15.872134252090301, lng: -47.842873334884644},
];

var southEucalyptusSevenColor = '#A1BF77';

function addSouthEucalyptusSeven(){
  southEucalyptusSeven = createVegetation(southEucalyptusSevenCoordinates,
                                        southEucalyptusSevenColor);

  southEucalyptusSeven.setMap(map);
}
