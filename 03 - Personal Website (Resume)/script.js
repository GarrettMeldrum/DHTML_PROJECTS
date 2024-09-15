// JavaScript to change the font-weight of the selected-tab when hovering over other tabs or the header
const tabs = document.querySelectorAll('.menu-bar-tab');
const header = document.querySelector('.menu-bar-header');
const selectedTab = document.querySelector('.selected-tab');

// Function to temporarily remove bold from selected-tab
function removeBoldFromSelected() {
  selectedTab.style.fontWeight = 'normal';
}

// Function to restore bold to selected-tab
function restoreBoldToSelected() {
  selectedTab.style.fontWeight = 'bold';
}

// Add hover event listeners for each tab
tabs.forEach(tab => {
  tab.addEventListener('mouseover', removeBoldFromSelected);
  tab.addEventListener('mouseout', restoreBoldToSelected);
});

// Add hover event listeners for the header
header.addEventListener('mouseover', removeBoldFromSelected);
header.addEventListener('mouseout', restoreBoldToSelected);

var coll = document.getElementsByClassName("experience-element-collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("experience-element-active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}