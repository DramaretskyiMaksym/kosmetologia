document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("burger").addEventListener("click", function(){
    document.querySelector(".header__block").classList.toggle("open");
  })
})

const allLangs = ['pl','ua','ru'];
let currentlang = 'pl';
const langButtons = document.querySelectorAll(".header__btn-lang");

const homeTexts = {
  "home_page":{
    pl: ""
  }
}