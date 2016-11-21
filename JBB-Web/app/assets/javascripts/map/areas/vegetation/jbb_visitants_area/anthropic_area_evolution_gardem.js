var anthropicAreaEvolutionGardem;

var anthropicAreaEvolutionGardemCoordinates = [
    {lat: -15.874719343686692, lng: -47.838855385780334},
    {lat: -15.874672905208056, lng: -47.839069962501526},
    {lat: -15.874595507719864, lng: -47.83944547176361},
    {lat: -15.874507790530645, lng: -47.83963859081268},
    {lat: -15.874724503517003, lng: -47.83970832824707},
    {lat: -15.874915417145166, lng: -47.83978879451752},
    {lat: -15.87539528033068, lng: -47.839847803115845},
    {lat: -15.875421079394293, lng: -47.83944010734558},
    {lat: -15.87535916163607, lng: -47.839059233665466},
    {lat: -15.875152768971175, lng: -47.83897876739502},
    {lat: -15.87473482317719, lng: -47.838839292526245},
];

var anthropicAreaEvolutionGardemColor = '#589C5F';

function addAnthropicAreaEvolutionGardem(){
  anthropicAreaEvolutionGardem = createVegetation(anthropicAreaEvolutionGardemCoordinates,
                                        anthropicAreaEvolutionGardemColor);

  anthropicAreaEvolutionGardem.setMap(map);
}
