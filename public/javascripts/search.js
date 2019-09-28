function search() {
    let payload = {
        "search": document.getElementById("search-bar").value,
        "companyOne": document.getElementById("1").value,
        "companyTwo": document.getElementById("2").value
    };
    console.log(payload);

    sessionStorage.setItem("search", payload["search"]);
    sessionStorage.setItem("cOne", payload["companyOne"]);
    sessionStorage.setItem("cTwo", payload["companyTwo"]);


    window.open("results");
}