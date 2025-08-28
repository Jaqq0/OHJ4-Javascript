function teeLista() {
    const kaverit =[];
    for (let i= 0; i < 10; i++) {
        let nimi = prompt(`Anna kaverin nimi (${i+1}/10):`);
        while (!nimi) {
            nimi = prompt(`Nimi ei voi olla tyhjä. Anna kaverin nimi (${i+1}/10):`);
        }
        kaverit.push(nimi);
    }
    const lista = document.getElementById("lista");
    lista.innerHTML = "";
    kaverit.forEach(kaveri => {
        const li = document.createElement("li");
        li.textContent = kaveri;
        lista.appendChild(li);
    });
}