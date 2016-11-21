var centerCerradoSparseAreaRight;

var centerCerradoSparseAreaRightCoordinates = [
    {lat: -15.935650579902546, lng: -47.864239141345024},
    {lat: -15.935184042698225, lng: -47.86383613944054},
    {lat: -15.934792013112759, lng: -47.86344990134239},
    {lat: -15.934317449958321, lng: -47.86299929022789},
    {lat: -15.93291438711214, lng: -47.86207661032677},
    {lat: -15.931944617353377, lng: -47.86205515265465},
    {lat: -15.92635287480185, lng: -47.85995230078697},
    {lat: -15.92569258495762, lng: -47.86154016852379},
    {lat: -15.926043364207713, lng: -47.86327823996544},
    {lat: -15.926600482933635, lng: -47.863857597112656},
    {lat: -15.928003589912585, lng: -47.8636859357357},
    {lat: -15.929509855608337, lng: -47.86366447806358},
    {lat: -15.929963796478493, lng: -47.86445841193199},
    {lat: -15.930273301028688, lng: -47.866089195013046},
    {lat: -15.929262251064676, lng: -47.86651834845543},
    {lat: -15.928828942378441, lng: -47.867848724126816},
    {lat: -15.929262251064676, lng: -47.8691790997982}
];

var centerCerradoSparseAreaRightColor = '#399E87';

function addCenterCerradoSparseAreaRight(){
    centerCerradoSparseAreaRight = createVegetation(centerCerradoSparseAreaRightCoordinates,
                                                    centerCerradoSparseAreaRightColor);

    centerCerradoSparseAreaRight.setMap(map);

    //add a listener to open a infowindow every time the river is clicked
    google.maps.event.addListener(centerCerradoSparseAreaRight, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, cerradoSensuStrictuContentString);
    });
}
