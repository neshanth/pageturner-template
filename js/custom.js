let hamburgerIcon = document.querySelector(".hamburger-icon");
let mobileNav = document.querySelector(".mobile-navigation-container");
hamburgerIcon.addEventListener("click", () => {
  if (mobileNav.dataset.toggle === "hide") {
    mobileNav.style.minHeight = "7rem";
    mobileNav.dataset.toggle = "show";
  } else if (mobileNav.dataset.toggle === "show") {
    mobileNav.style.minHeight = "0px";
    mobileNav.dataset.toggle = "hide";
  }
});

//Show Search Form
let searchIcon = document.querySelector(".search-icon");
searchIcon.addEventListener("click", () => {
  document.querySelector(".search-modal").style.height = "100vh";
});
let closeIcon = document.querySelector(".close-icon");
closeIcon.addEventListener("click", () => {
  document.querySelector(".search-modal").style.height = "0vh";
});

var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
});
