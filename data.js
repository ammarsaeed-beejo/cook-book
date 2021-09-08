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