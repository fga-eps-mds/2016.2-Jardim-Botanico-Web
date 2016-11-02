function createRiver(riverCoordinates){
    //add the river at the map in the position previously defined
    var river = new google.maps.Polyline({
        path: riverCoordinates,
        map: map,
        strokeColor: '#366ED4',
        strokeWidth: 0.3
    });

    return (river);
}
