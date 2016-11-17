var administrateAreaEvolutionGardem;

var administrateAreaEvolutionGardemCoordinates = [
    {lat: -15.875235326062507, lng: -47.83722460269928},
    {lat: -15.87527144477932, lng: -47.837337255477905},
    {lat: -15.875457198077815, lng: -47.83717095851898},
    {lat: -15.875544914853673, lng: -47.837085127830505},
    {lat: -15.875679069848792, lng: -47.83701002597809},
    {lat: -15.875699709070872, lng: -47.83666670322418},
    {lat: -15.87556555408952, lng: -47.836629152297974},
    {lat: -15.875421079394293, lng: -47.836827635765076},
    {lat: -15.875343682193536, lng: -47.83680617809296},
    {lat: -15.875199207339216, lng: -47.83677399158478},
];

var administrateAreaEvolutionGardemColor = '#DBDA7D';

function addAdministrateAreaEvolutionGardem(){
  administrateAreaEvolutionGardem = createVegetation(administrateAreaEvolutionGardemCoordinates,
                                        administrateAreaEvolutionGardemColor);

  administrateAreaEvolutionGardem.setMap(map);
}
