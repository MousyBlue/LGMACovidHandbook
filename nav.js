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
    if (dropdownAContent.style.display === "block") {
      dropdownAContent.style.display = "none";
      this.style.transform = "rotate(0deg)";
    } else {
      dropdownAContent.style.display = "block";
      this.style.transform = "rotate(180deg)";
    }
  });
}