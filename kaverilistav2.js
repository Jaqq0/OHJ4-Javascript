const kaverit = [];
const nimiKentta = document.getElementById("nimiKentta");

nimiKentta.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        lisaaKaveri();
    }
});

function lisaaKaveri() {
    const nimi = nimiKentta.value.trim();
    if (nimi === "") {
        alert("Nimi ei voi olla tyhjä!");
        return;
    }
    kaverit.push(nimi);
    nimiKentta.value = "";
    paivitaLista();
}

function poistaKaveri(index) {
    kaverit.splice(index, 1);
    paivitaLista();
}

function jarjestaKaverit() {
    kaverit.sort((a, b) => a.localeCompare(b));
    paivitaLista();
}

function paivitaLista() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";
    kaverit.forEach((nimi, index) => {
        const li = document.createElement("li");
        li.textContent = nimi + " ";
        const poistaNappi = document.createElement("button");
        poistaNappi.textContent = "Poista";
        poistaNappi.onclick = () => poistaKaveri(index);
        li.appendChild(poistaNappi);
        lista.appendChild(li);
    });
}
