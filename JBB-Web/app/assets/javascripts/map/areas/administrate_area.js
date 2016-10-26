var administrateAreaPolygon;
function addAdministrateAreaPolygon(){
    var administrateAreaPolygonCoords = [
    {lat: -15.861463303526785, lng: -47.828829288482666},
    {lat: -15.86111241168077, lng: -47.82876491546631},
    {lat: -15.860875043321057, lng: -47.82893657684326},
    {lat: -15.86088536369034, lng: -47.829322814941406},
    {lat: -15.861669710209835, lng: -47.829108238220215},
    ];

    // Construct the polygon.
    administrateAreaPolygon = new google.maps.Polygon({
        paths: administrateAreaPolygonCoords,
        strokeColor: '#DBDA7D',
        strokeOpacity: 0.1,
        strokeWeight: 3,
        fillColor: '##DBDA7D',
        fillOpacity: 0.35
    });

  administrateAreaPolygon.setMap(map);
}