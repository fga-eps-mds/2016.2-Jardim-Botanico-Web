var centerTypicalCerradoAreaUp;

var centerTypicalCerradoAreaUpCoordinates = [
    {lat: -15.896196279199867, lng: -47.847169563501666},
    {lat: -15.895515253090581, lng: -47.84735195371468},
    {lat: -15.894173831284979, lng: -47.84748069974739},
    {lat: -15.893451523531652, lng: -47.8468155119117},
    {lat: -15.89305024012496, lng: -47.84694191068411},
    {lat: -15.892529144025266, lng: -47.846539579331875},
    {lat: -15.891915177503494, lng: -47.84680780056078},
    {lat: -15.891604467312918, lng: -47.84648291832127},
    {lat: -15.89129490321222, lng: -47.846118137895246},
    {lat: -15.890582903973577, lng: -47.846676037370344},
    {lat: -15.890407483484575, lng: -47.847405598222394},
    {lat: -15.889984409911456, lng: -47.8471910215012},
    {lat: -15.889705799999609, lng: -47.84781329399266},
    {lat: -15.889695481106573, lng: -47.847877667009016},
    {lat: -15.889571654348936, lng: -47.848167345582624},
    {lat: -15.889633567737283, lng: -47.84832827812352},
    {lat: -15.889757394456817, lng: -47.84859649902501},
    {lat: -15.889994728789684, lng: -47.848607227861066},
    {lat: -15.890283657164977, lng: -47.8487574315659},
    {lat: -15.890551947427808, lng: -47.84903638130345},
    {lat: -15.890778961986245, lng: -47.84933678871312},
    {lat: -15.891007696106087, lng: -47.84970073029399},
    {lat: -15.891451405135763, lng: -47.849529068917036},
    {lat: -15.891809983298778, lng: -47.849209886044264},
    {lat: -15.892583890647396, lng: -47.84931180998683},
    {lat: -15.893040781244407, lng: -47.84983425401151},
    {lat: -15.893584806600055, lng: -47.84972218796611},
    {lat: -15.894162652627388, lng: -47.85015670582652},
    {lat: -15.894611514021317, lng: -47.850730698883126},
    {lat: -15.894611514021317, lng: -47.85073338109214},
    {lat: -15.895089037170251, lng: -47.85031436958889},
    {lat: -15.895532450643005, lng: -47.848936300888454},
    {lat: -15.895917678203228, lng: -47.847706005304644}
];

var centerTypicalCerradoAreaUpColor = '#22B373';

function addCenterTypicalCerradoAreaUp(){
    centerTypicalCerradoAreaUp = createVegetation(centerTypicalCerradoAreaUpCoordinates,
                                                  centerTypicalCerradoAreaUpColor);

    centerTypicalCerradoAreaUp.setMap(map);

    //add a listener to open a infowindow every time the river is clicked
    google.maps.event.addListener(centerTypicalCerradoAreaUp, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, cerradoSensuStrictuContentString);
    });
}
