"use strict";

const homepageNavigation = document.querySelector(".homepage-navigation");
const navigationButton = document.querySelector(".navigation-mobile-button");

// Opening and closing menu when clicking the button
navigationButton.addEventListener("click", function () {
  homepageNavigation.classList.toggle("nav-open");
});
