var visitantCenter;

var visitantCenterCoordinate = {lat:  -15.873780, lng: -47.836607};

var visitantCenterContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Centro de Vistantes</h1>'+
    '<div id="bodyContent">'+
    '<p>O <b>Centro de Visitantes</b>, é onde o visitante se' +
    'informa sobre projetos, exposições, pesquisas, espaços de visitação, materiais' +
    'bibliográficos, eventos e visita orientada. <br><br>' +
    '<img src="/assets/portfolio/fullsize/12.jpg" class="img-responsive" alt="" style="width: 550px;height: 250px;">' +
    '<p>Leia mais em: <a href="http://www.jardimbotanico.df.gov.br/espacos-jbb/centro-de-visitantes/" target="_blank">'+
    'Centro de Visitação</a> '+
    '</div>'+
    '</div>';

var visitantCenterTitle = 'Centro de Visitantes';

function addVisitantCenterMarker(){
    //create the jbb space
    visitantCenter = createJbbSpace(visitantCenterCoordinate, visitantCenterTitle);

    //set the jbb space on map
    visitantCenter.setMap(map);

    //add a listener to open a infowindow every time the jbb space is clicked
    google.maps.event.addListener(visitantCenter, 'click', function() {
        addInfowindowMarkers(visitantCenter, visitantCenterContentString);
    });
}
