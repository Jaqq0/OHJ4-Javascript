document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let valid = true;
    let errors = [];

    document.getElementById("successMessage").textContent = "";

    const userId = document.getElementById("userId").value.trim();
    if (userId.length < 6) {
        errors.push("Käyttäjätunnuksen tulee olla vähintään 6 merkkiä pitkä.");
        valid = false;
    }

    const password = document.getElementById("password").value;
    const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@£$€&%#]).{6,}$/;
    if (!passwordRegex.test(password)) {
        errors.push("Salasanan tulee olla vähintään 6 merkkiä pitkä, sisältää vähintään yhden numeron, yhden ison kirjaimen ja yhden erikoismerkin (!@£$€&%#).");
        valid = false;
    }

    const name = document.getElementById("name").value.trim();
    if (name === "") {
        errors.push("Nimi ei saa olla tyhjä.");
        valid = false;
    }

    const address = document.getElementById("address").value.trim();
    if (address === "") {
        errors.push("Osoite ei saa olla tyhjä.");
        valid = false;
    }

    const country = document.getElementById("country").value;
    if (country === "") {
        errors.push("Valitse maa.");
        valid = false;
    }

    const zip = document.getElementById("zip").value.trim();
    if (!/^[0-9]{5}$/.test(zip)) {
        errors.push("Postinumeron pitää olla 5 numeroa.");
        valid = false;
    }

    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push("Virheellinen sähköposti.");
        valid = false;
    }

    const gender = document.querySelector("input[name='gender']:checked");
    if (!gender) {
        errors.push("Valitse sukupuoli.");
        valid = false;
    }

    const language = document.querySelectorAll("input[name='language']:checked");
    if (language.length === 0) {
        errors.push("Valitse vähintään yksi kieli.");
        valid = false;
    }

    if (!valid) {
        document.getElementById("errorMessages").innerHTML = errors.join("<br>");
    } else {
        document.getElementById("errorMessages").innerHTML = "";
        document.getElementById("successMessage").textContent = "Lomake täytetty oikein!";
    }
});