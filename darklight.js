
var dark = document.querySelector('#moon')
var light = document.querySelector('#sun')
var darkMode = document.querySelectorAll('.dark')


function darkLight () {
  dark.style.display = "block";
  light.style.display = "none";

}


function lightDark() {
  dark.style.display = "none";
  light.style.display = "block";

}