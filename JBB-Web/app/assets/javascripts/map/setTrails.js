var trails_on  = false;

//Shows or remove trails at map
function setTrails() {
    if(trails_on) {
        transcerradoTrail.setMap(null);
        ecologicTrail.setMap(null);
        matterTrail.setMap(null);
        labiataTrail.setMap(null);
        bikeTourEasy.setMap(null);
        bikeTourMedium.setMap(null);
        medicinalTrail.setMap(null);

        trails_on = false;
        infowindow.close();
    }
    else {
        addTrancerradoTrail();
        addEcologicTrail();
        addMatterTrail();
        addLabiataTrail();
        addBikeTourEasy();
        addBikeTourMedium();
        addmedicinalTrail();

        trails_on = true;
    }
}
