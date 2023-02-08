// Sticky navigation bar
window.onscroll = function() {
  const navbar = document.querySelector(".navbar");
  if (window.pageYOffset > 60) {
    navbar.style.backgroundColor = "#fff";
    navbar.style

const home = document.querySelector("#home");
const routes = document.querySelector("#routes");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");

document.querySelectorAll("a").forEach(function(link) {
	  link.addEventListener