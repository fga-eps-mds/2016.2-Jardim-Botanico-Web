var eucalyptusTypicalCerrado;

var eucalyptusTypicalCerradoCoordinates = [
    {lat: -15.878666575246287, lng: -47.83930063247681},
    {lat: -15.878511783308886, lng: -47.839375734329224},
    {lat: -15.878594339023635, lng: -47.840105295181274},
    {lat: -15.878749130897582, lng: -47.84045934677124},
    {lat: -15.879316700084306, lng: -47.840362787246704},
    {lat: -15.879615963193336, lng: -47.840330600738525},
    {lat: -15.87962628260297, lng: -47.83997654914856},
    {lat: -15.879554046724508, lng: -47.83952593803406},
    {lat: -15.87945085256747, lng: -47.83919334411621},
    {lat: -15.87935797778096, lng: -47.83893585205078},
    {lat: -15.87890392265257, lng: -47.83912897109985}
];

var eucalyptusTypicalCerradoColor = '#A1BF77';

function addEucalyptusTypicalCerrado(){
    eucalyptusTypicalCerrado = createVegetation(eucalyptusTypicalCerradoCoordinates,
                                                eucalyptusTypicalCerradoColor);
    eucalyptusTypicalCerrado.setMap(map);
}
