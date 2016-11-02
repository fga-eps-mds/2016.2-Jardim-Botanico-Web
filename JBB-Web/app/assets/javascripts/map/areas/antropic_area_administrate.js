var anthropicAreaAdministrate;

var anthropicAreaAdministrateCoordinates = [
    {lat: -15.869482047803452, lng: -47.835094928741455},
    {lat: -15.869585247066473, lng: -47.835631370544434},
    {lat: -15.869667806438837, lng: -47.836060523986816},
    {lat: -15.869771005606735, lng: -47.8364360332489},
    {lat: -15.869894844538468, lng: -47.836865186691284},
    {lat: -15.869946444070884, lng: -47.837069034576416},
    {lat: -15.870348919970423, lng: -47.83695101737976},
    {lat: -15.871618261773216, lng: -47.836575508117676},
    {lat: -15.87138090578367, lng: -47.83574938774109},
    {lat: -15.871019711350165, lng: -47.835856676101685},
    {lat: -15.870596597047564, lng: -47.83613562583923},
    {lat: -15.870452118789554, lng: -47.83578157424927},
    {lat: -15.870276680765596, lng: -47.83527731895447},
    {lat: -15.870183801749903, lng: -47.83491253852844},
    {lat: -15.86991548435302, lng: -47.83495545387268},
    {lat: -15.869482047803452, lng: -47.835084199905396},
];

var anthropicAreaAdministrateColor = '#589C5F';

function addAnthropicAreaAdministrate(){
  anthropicAreaAdministrate = createVegetation(anthropicAreaAdministrateCoordinates,
                                        anthropicAreaAdministrateColor);

  anthropicAreaAdministrate.setMap(map);
}
