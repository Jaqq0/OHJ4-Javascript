let nut = document.querySelector('.nut-cost');
let parsedNut = parseFloat(nut.innerHTML);

let nutImgContainer = document.querySelector('.nut-img-container');

let npcText = document.getElementById('npc-text');
let npsText = document.getElementById('nps-text');

let npc = 1;

let nps = 0;

const upgrades = [
    {
        name: 'bolt',
        cost: document.querySelector('.bolt-cost'),
        parsedCost: parseFloat(document.querySelector('.bolt-cost').innerHTML),
        increase: document.querySelector('.bolt-increase'),
        parsedIncrease: parseFloat(document.querySelector('.bolt-increase').innerHTML),
        level: document.querySelector('.bolt-level'),
        nutMultiplier: 1.025,
        costMultiplier: 1.12,
    },
    {
        name: 'doublenut',
        cost: document.querySelector('.doublenut-cost'),
        parsedCost: parseFloat(document.querySelector('.doublenut-cost').innerHTML),
        increase: document.querySelector('.doublenut-increase'),
        parsedIncrease: parseFloat(document.querySelector('.doublenut-increase').innerHTML),
        level: document.querySelector('.doublenut-level'),
        nutMultiplier: 1.03,
        costMultiplier: 1.115,
    },
    {
        name: 'wrench',
        cost: document.querySelector('.wrench-cost'),
        parsedCost: parseFloat(document.querySelector('.wrench-cost').innerHTML),
        increase: document.querySelector('.wrench-increase'),
        parsedIncrease: parseFloat(document.querySelector('.wrench-increase').innerHTML),
        level: document.querySelector('.wrench-level'),
        nutMultiplier: 1.035,
        costMultiplier: 1.11,
    },
    {
        name: 'gear',
        cost: document.querySelector('.gear-cost'),
        parsedCost: parseFloat(document.querySelector('.gear-cost').innerHTML),
        increase: document.querySelector('.gear-increase'),
        parsedIncrease: parseFloat(document.querySelector('.gear-increase').innerHTML),
        level: document.querySelector('.gear-level'),
        nutMultiplier: 1.04,
        costMultiplier: 1.10,
    },
]

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


setInterval(() => {
    parsedNut += nps / 10;
    nut.innerHTML = Math.round(parsedNut);
    npcText.innerHTML = Math.round(npc);
    npsText.innerHTML = Math.round(nps);
}, 100)