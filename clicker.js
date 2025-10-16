import { upgrades } from "./constants/upgrades.js";

let nut = document.querySelector('.nut-cost');
let parsedNut = parseFloat(nut.innerHTML);

let nutImgContainer = document.querySelector('.nut-img-container');

let npcText = document.getElementById('npc-text');
let npsText = document.getElementById('nps-text');

let npc = 1;

let nps = 0;


function incrementNut(event) {
    nut.innerHTML = Math.round(parsedNut += npc);

    const x = event.offsetX;
    const y = event.offsetY;

    const div = document.createElement('div');
    div.innerHTML = `+${Math.round(npc)}`;
    div.style.cssText = `color: white; position: absolute; top: ${y}px; left: ${x}px; font-size: 15px;pointer-events: none;`
    nutImgContainer.appendChild(div);

    div.classList.add('fade-up');

    timeout(div);
}

const timeout = (div) => {
    setTimeout(() => {
        div.remove();
    }, 800)
}

function buyUpgrade(upgrade) {
    const mu = upgrades.find((u) => {
        if (u.name === upgrade) return u;
    })

    if (parsedNut >= mu.parsedCost) {
        nut.innerHTML = Math.round(parsedNut -= mu.parsedCost);

        mu.level.innerHTML ++

        mu.parsedIncrease = parseFloat((mu.parsedIncrease * mu.nutMultiplier).toFixed(2));
        mu.increase.innerHTML = mu.parsedIncrease;

        mu.parsedCost *= mu.costMultiplier;
        mu.cost.innerHTML = Math.round(mu.parsedCost);

        if (mu.name === 'bolt') {
            npc += mu.parsedIncrease;
        } else {
            nps += mu.parsedIncrease;
        }
    }
}

function save () {
    localStorage.clear();
    upgrades.map((upgrades) => {
        
        const obj = JSON.stringify({
            parsedLevel: parseFloat(upgrades.level.innerHTML),
            parsedCost: upgrades.parsedCost,
            parsedIncrease: upgrades.parsedIncrease,
        })

        localStorage.setItem(upgrades.name, obj);
    })

    localStorage.setItem('nut', parsedNut);
    localStorage.setItem('npc', npc);
    localStorage.setItem('nps', nps);
}

function load () {
    upgrades.map((upgrade) => {
        const saveValues = JSON.parse(localStorage.getItem(upgrade.name));

        upgrade.parsedCost = saveValues.parsedCost;
        upgrade.parsedIncrease = saveValues.parsedIncrease;
        upgrade.level.innerHTML = saveValues.parsedLevel;
        upgrade.cost.innerHTML = Math.round(upgrade.parsedCost);
        upgrade.increase.innerHTML = upgrade.parsedIncrease;
    })
    npc = parseFloat(localStorage.getItem('npc'));
    nps = parseFloat(localStorage.getItem('nps'));
    parsedNut = parseFloat(localStorage.getItem('nut'));
    nut.innerHTML = Math.round(parsedNut);
}


setInterval(() => {
    parsedNut += nps / 10;
    nut.innerHTML = Math.round(parsedNut);
    npcText.innerHTML = Math.round(npc);
    npsText.innerHTML = Math.round(nps);
}, 100)

window.incrementNut = incrementNut;
window.buyUpgrade = buyUpgrade;
window.save = save;
window.load = load;