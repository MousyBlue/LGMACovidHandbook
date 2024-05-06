/* Functions for the sidebar */

/* Open sidebar */
function openNav() {
  document.getElementById("sidebar").style.left = "0px";
  document.getElementById("pageContent").style.marginLeft = "250px";
  document.getElementById("closeBtn").style.transform = "rotate(0deg)";

  // check for these dumb info boxes
  if (document.getElementById("tickbox")){
    document.getElementById("tickbox").style.marginLeft = "210px";
  }
  if(document.getElementsByClassName("leaflet-control-layers leaflet-control").length != 0){
    for (i = 0; i < document.getElementsByClassName("leaflet-control-layers leaflet-control").length; i++){
      document.getElementsByClassName("leaflet-control-layers leaflet-control")[i].style.marginLeft = "220px";
    }
  }
  if(document.getElementsByClassName("info").length != 0){
    console.log(document.getElementsByClassName("info"));
    document.getElementsByClassName("info")[i].style.marginLeft = "210px";
  }
  
  
}

/* Close sidebar*/
function closeNav() {
  document.getElementById("sidebar").style.left = "-210px";
  document.getElementById("pageContent").style.marginLeft = "40px";
  document.getElementById("closeBtn").style.transform = "rotate(45deg)";

  // check for these dumb info boxes
  if (document.getElementById("tickbox")){
    document.getElementById("tickbox").style.marginLeft = "0";
  }
  if(document.getElementsByClassName("leaflet-control-layers leaflet-control").length != 0){
    console.log('yes');
    for (i = 0; i < document.getElementsByClassName("leaflet-control-layers leaflet-control").length; i++){
      document.getElementsByClassName("leaflet-control-layers leaflet-control")[i].style.marginLeft = "10px";
    }
  }
  if(document.getElementsByClassName("info").length != 0){
    document.getElementsByClassName("info")[i].style.marginLeft = "0px";
  }
}

function toggleNav() {
  if (document.getElementById("sidebar").style.left === "0px") {
    closeNav();
  }
  else {
    openNav();
  }
}
