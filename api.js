const openbtn = document.getElementById("burger-menu");
const closebtn = document.getElementById("close-btn");
const searchForm = document.getElementById("search");
const gobtn = document.getElementById("gobutton");
const searchResultDiv = document.getElementById("returns");
const health_information= document.getElementById("ul");
const APP_ID = "87b086fc";
const APP_key = "71045b8ebe617f09be582fcfa204a6ea";
let searchQuery = "search";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchAPI();
});


closebtn.addEventListener("click", () => {
  var ul = document.getElementById("ul");
  ul.className = "health-information-close";

})

openbtn.addEventListener("click", () => {
  var ul = document.getElementById("ul");
  ul.className = "health-information-active";

})






fetch("https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=87b086fc&app_key=71045b8ebe617f09be582fcfa204a6ea")
  .then(respnse => respnse.json())
  .then(data => console.log(data))

