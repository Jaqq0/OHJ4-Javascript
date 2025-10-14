let nut = document.querySelector('.nut-cost');
let parsedNut = parseFloat(nut.innerHTML);

let boltCost = document.querySelector('.bolt-cost');
let parsedBoltCost = parseFloat(boltCost.innerHTML);
let boltLevel = document.querySelector('.bolt-level');
let boltIncrease = document.querySelector('.bolt-increase');
let parsedBoltIncrease = parseFloat(boltIncrease.innerHTML);

let doublenutCost = document.querySelector('.doublenut-cost');
let parsedDoublenutCost = parseFloat(doublenutCost.innerHTML);
let doublenutLevel = document.querySelector('.doublenut-level');
let doublenutIncrease = document.querySelector('.doublenut-increase');
let parsedDoublenutIncrease = parseFloat(doublenutIncrease.innerHTML);

let wrenchCost = document.querySelector('.wrench-cost');
let parsedWrenchCost = parseFloat(wrenchCost.innerHTML);
let wrenchLevel = document.querySelector('.wrench-level');
let wrenchIncrease = document.querySelector('.wrench-increase');
let parsedWrenchIncrease = parseFloat(wrenchIncrease.innerHTML);

let npcText = document.getElementById('npc-text');
let npsText = document.getElementById('nps-text');

let npc = 1;

let nps = 0;

function incrementNut() {
    nut.innerHTML = Math.round(parsedNut += npc);
}

function buyBolt() {
    if (parsedNut >= parsedBoltCost) {
        nut.innerHTML = Math.round(parsedNut -= parsedBoltCost);

        boltLevel.innerHTML ++

        parsedBoltIncrease = parseFloat((parsedBoltIncrease * 1.03).toFixed(2));
        boltIncrease.innerHTML = parsedBoltIncrease;
        npc += parsedBoltIncrease;

        parsedBoltCost *= 1.18;
        boltCost.innerHTML = Math.round(parsedBoltCost);
    }
}

function buyDoublenut() {
    if (parsedNut >= parsedDoublenutCost) {
        nut.innerHTML = Math.round(parsedNut -= parsedDoublenutCost);

        doublenutLevel.innerHTML ++

        parsedDoublenutIncrease = parseFloat((parsedDoublenutIncrease * 1.03).toFixed(2));
        doublenutIncrease.innerHTML = parsedDoublenutIncrease;
        nps += parsedDoublenutIncrease;

        parsedDoublenutCost *= 1.18;
        doublenutCost.innerHTML = Math.round(parsedDoublenutCost);
    }
}

function buyWrench() {
    if (parsedNut >= parsedWrenchCost) {
        nut.innerHTML = Math.round(parsedNut -= parsedWrenchCost);

        wrenchLevel.innerHTML ++

        parsedWrenchIncrease = parseFloat((parsedWrenchIncrease * 1.03).toFixed(2));
        wrenchIncrease.innerHTML = parsedWrenchIncrease;
        nps += parsedWrenchIncrease;

        parsedWrenchCost *= 1.18;
        wrenchCost.innerHTML = Math.round(parsedWrenchCost);
    }
}

setInterval(() => {
    parsedNut += nps / 10;
    nut.innerHTML = Math.round(parsedNut);
    npcText.innerHTML = Math.round(npc);
    npsText.innerHTML = Math.round(nps);
}, 100)