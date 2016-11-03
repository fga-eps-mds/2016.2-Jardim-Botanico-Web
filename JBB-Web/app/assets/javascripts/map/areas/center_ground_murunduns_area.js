var centerGroundMurundunsArea;

var centerGroundMurundunsAreaCoordinates = [
    {lat: -15.909927520359934, lng: -47.84158460802246},
    {lat: -15.910216420733473, lng: -47.84162752328484},
    {lat: -15.910835490214742, lng: -47.84162752328484},
    {lat: -15.91126883771713, lng: -47.841069623809744},
    {lat: -15.911557735532991, lng: -47.840275689941336},
    {lat: -15.91139265111763, lng: -47.83900968728631},
    {lat: -15.911000575087732, lng: -47.83847324548333},
    {lat: -15.910567227006956, lng: -47.83797971902459},
    {lat: -15.91036087044964, lng: -47.837593480926444},
    {lat: -15.910154513680473, lng: -47.83785097299187},
    {lat: -15.910154513680473, lng: -47.83847324548333},
    {lat: -15.910319599112757, lng: -47.839052602630545},
    {lat: -15.910484684409461, lng: -47.83943884072869},
    {lat: -15.910484684409461, lng: -47.840039655548026},
    {lat: -15.910195785051258, lng: -47.840340062957694},
    {lat: -15.910030699517273, lng: -47.8401254862365}
];

var centerGroundMurundunsAreaColor = '#42CCD0';

function addCenterGroundMurundunsArea(){
    centerGroundMurundunsArea = createVegetation(centerGroundMurundunsAreaCoordinates,
                                                 centerGroundMurundunsAreaColor);

    centerGroundMurundunsArea.setMap(map);
}
