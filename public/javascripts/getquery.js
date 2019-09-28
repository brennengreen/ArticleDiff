

console.log("QUERYING...");
let cOne = sessionStorage.getItem("cOne");
let cTwo = sessionStorage.getItem("cTwo");
let searchR = sessionStorage.getItem("search");

document.getElementById("results-message").innerHTML = `Showing results for ${searchR}`;
document.getElementById("cOneTitle").innerHTML = cOne;
document.getElementById("cTwoTitle").innerHTML = cTwo;