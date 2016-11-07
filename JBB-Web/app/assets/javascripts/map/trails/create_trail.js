function createTrail(trailCoordinates, trailColor){
    var trail;

    //add the trail at the map in the position previously defined
    trail = new google.maps.Polyline({
        path: trailCoordinates,
        geodesic: true,
        strokeColor: trailColor,
        strokeOpacity: 1,
        strokeWeight: 3
    });

    return (trail);
}
