function createJbbSpace(jbbSpaceCoordinate, jbbSpaceTitle){
    var jbbSpace;

    //add the jbbSpace at the map in the position previously defined
    jbbSpace = new google.maps.Marker({
        position: jbbSpaceCoordinate,
        map: map,
        title: jbbSpaceTitle
    });

    return (jbbSpace);
}
