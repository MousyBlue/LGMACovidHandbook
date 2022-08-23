/* Functions for the sidebar */

/* Open sidebar */
function openNav() {
  document.getElementById("sidebar").style.left = "0px";
  document.getElementById("pageContent").style.marginLeft = "250px";
  document.getElementById("closeBtn").style.transform = "rotate(0deg)";
}

/* Close sidebar*/
function closeNav() {
  document.getElementById("sidebar").style.left = "-210px";
  document.getElementById("pageContent").style.marginLeft = "40px";
  document.getElementById("closeBtn").style.transform = "rotate(45deg)";
}

function toggleNav() {
  if (document.getElementById("sidebar").style.left === "0px") {
    closeNav();
  }
  else {
    openNav();
  }
}
