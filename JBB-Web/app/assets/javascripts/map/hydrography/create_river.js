function createRiver(riverCoordinates, hasCAESBcaptation){
    var river;

    var lineSymbol = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        strokeWeight: 4,
        strokeColor: '#393'
    };

    //add the river at the map in the position previously defined
    if(hasCAESBcaptation){
        river = new google.maps.Polyline({
            path: riverCoordinates,
            map: map,
            strokeColor: '#366ED4',
            strokeWidth: 0.3,
            icons: [{
                icon: lineSymbol,
                offset: '100%'
            }]
        });
    }else{
        river = new google.maps.Polyline({
            path: riverCoordinates,
            map: map,
            strokeColor: '#366ED4',
            strokeWidth: 0.3
        });
    }

    return (river);
}
