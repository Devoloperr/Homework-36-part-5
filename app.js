let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let myForm = new FormData(e.target)
    if (myForm.get("password").length > 5) {
        console.log("Icaze Verildi.");

    } else if (myForm.get("password").length < 5) {
        console.log("Giris Qadagandir.");

    }
})