import { defaultValues } from "./defaultValues.js";

function createUpgrades() {
    const upgradesContainer = document.getElementById('upgrades-container');
    const template = document.getElementById('upgrade-template').textContent;

    defaultValues.forEach((obj) => {
        let html = template;

        Object.keys(obj).forEach((key) => {
            const regex = new RegExp(`{{${key}}}`, 'g');
            html = html.replace(regex, obj[key]);
        });

        upgradesContainer.innerHTML += html;
    });
}

createUpgrades();

 export const upgrades = [
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
    {
        name: 'bionicarm',
        cost: document.querySelector('.bionicarm-cost'),
        parsedCost: parseFloat(document.querySelector('.bionicarm-cost').innerHTML),
        increase: document.querySelector('.bionicarm-increase'),
        parsedIncrease: parseFloat(document.querySelector('.bionicarm-increase').innerHTML),
        level: document.querySelector('.bionicarm-level'),
        nutMultiplier: 1.05,
        costMultiplier: 1.13,
    },
]

