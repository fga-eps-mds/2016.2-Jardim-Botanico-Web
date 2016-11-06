var trails_on  = false;

//Shows or remove trails at map
function setTrails() {
    if(trails_on) {
        ecologicTrail.setMap(null);
        matterTrail.setMap(null);
        labiataTrail.setMap(null);

        trails_on = false;
        infowindow.close();
    }else{
        addEcologicTrail();
        addMatterTrail();
        addLabiataTrail();

        trails_on = true;
    }
}
