const searchForm = document.querySelector('form');

let searchResultDiv = document.getElementById("returns");

let searchQuery = "";

const APP_ID = "87b086fc";

const APP_key = "71045b8ebe617f09be582fcfa204a6ea";

const openbtn = document.getElementById("burger-menu");

const closebtn = document.getElementById("close-btn");

const health_information = document.getElementById("ul");



closebtn.addEventListener("click", () => {
  var ul = document.getElementById("ul");
  ul.className = "health-information-close";
})

openbtn.addEventListener("click", () => {
  var ul = document.getElementById("ul");
  ul.className = "health-information-active";
})


searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchAPI();
});

async function fetchAPI() {
  const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
  const response = await fetch(baseURL);
  const data = await response.json();
  generateHTML(data.hits);
  console.log(data);
}


function generateHTML(Resultsarya) {

  let generatedHTML = "";
  Resultsarya.map((result) => {
    generatedHTML += `
     
        
        <a href="./itam.html">
            <div id="itam">
                <img  id="img" src="${result.recipe.image}">
                <div id="data">
                    <h1 id="name">${result.recipe.label}</h1>
                    <div id="info">
                        <p id="CALORIES">${result.recipe.calories.toFixed()}</p>
                        <p id="INGREDIENTS">${result.recipe.dietLabels.length > 0
                          ? result.recipe.dietLabels
                          : "No Data Found"
                         }</p>

                        <p style="display: none;"> ${result.recipe.uri}</p>
                         
                    </div>
                    <br>
                    <a id="link" href="./itam.html">more
                        info</a>
               
        </div>
            </a>
        </div>
      
    `;
  });

const uri = "${result.recipe.uri}"; 

  searchResultDiv.innerHTML = generatedHTML;
}
