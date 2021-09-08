const searchForm = document.querySelector('form');

const resultdiv = document.getElementById("returns");

let searchQuery = "";

const APP_ID = "87b086fc";

const APP_key = "71045b8ebe617f09be582fcfa204a6ea";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchAPI();
});

async function fetchAPI() {
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
  const response = await fetch(baseURL);
  // const data = await response.json();
  // generateHTML(data.hits);
  console.log(response);
}

