let nut = document.querySelector('.nut-cost');
let parsedNut = parseFloat(nut.innerHTML);

let boltCost = document.querySelector('.bolt-cost');
let parsedBoltCost = parseFloat(boltCost.innerHTML);

function incrementNut() {
    parsedNut += 1;
    nut.innerHTML = parsedNut;
}

function buyBolt() {
    if (parsedNut >= parsedBoltCost) {
        parsedNut -= parsedBoltCost;
        nut.innerHTML = parsedNut;
    }
}