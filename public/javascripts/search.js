function search() {
    let payload = {
        "search": document.getElementById("search-bar").value,
        "companyOne": document.getElementById("1").value,
        "companyTwo": document.getElementById("2").value
    }
    console.log(payload);

    window.location.href = 'results';
}