/* Sidebar Dropdowns */
var dropdown = document.getElementsByClassName("dropdownBtn");
var i;
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

/* Arrow Dropdowns */
var dropdownArrow = document.getElementsByClassName("arrow");
var i;
for (i = 0; i < dropdownArrow.length; i++) {
  dropdownArrow[i].addEventListener("click", function() {
    var dropdownAContent = this.nextElementSibling;
    if (dropdownAContent.style.height === "auto") {
      dropdownAContent.style.height = "0px";
      dropdownAContent.style.padding = "0px";
      dropdownAContent.style.opacity = "0";
      this.style.transform = "rotate(0deg)";
    } else {
      dropdownAContent.style.height = "auto";
      dropdownAContent.style.padding = "15px";
      dropdownAContent.style.opacity = "1";
      this.style.transform = "rotate(180deg)";
    }
  });
}

var dropdownArrow2 = document.getElementsByClassName("arrow2");
var i;
for (i = 0; i < dropdownArrow2.length; i++) {
  dropdownArrow2[i].addEventListener("click", function() {
    var dropdownA2Content = this.nextElementSibling;
    if (dropdownA2Content.style.height === "auto") {
      dropdownA2Content.style.height = "0px";
      dropdownA2Content.style.padding = "0px";
      dropdownA2Content.style.opacity = "0";
      this.style.transform = "rotate(0deg)";
    } else {
      dropdownA2Content.style.height = "auto";
      dropdownA2Content.style.padding = "15px";
      dropdownA2Content.style.opacity = "1";
      this.style.transform = "rotate(180deg)";
    }
  });
}