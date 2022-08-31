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
    this.classList.toggle("active");
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