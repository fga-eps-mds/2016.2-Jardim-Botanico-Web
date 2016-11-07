var denseCerrado;

var denseCerradoCoordinates = [
];

var denseCerradoColor = '#87B591';

function addDenseCerrado(){
    denseCerrado = createVegetation(denseCerradoCoordinates, denseCerradoColor);

    denseCerrado.setMap(map);
}
