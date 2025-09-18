let players =[];
let scores = {};
let currentPlayerIndex = 0;
let roundScore = 0;
let version = 1;
let target = 100;
let consecutiveDoubles = 0;

function rollDie() {
    return Math.floor(Math.random() * 6) + 1;;
}

function startGame() {
    const numPlayers = parseInt(document.getElementById("numPlayers").value);
    target = parseInt(document.getElementById("targetScore").value);
    version = parseInt(document.getElementById("version").value);

    players = [];
    scores = {};
    for (let i = 0; i < numPlayers; i++) {
        const name = prompt(`Anna pelaajan ${i + 1} nimi:`) || `Pelaaja ${i + 1}`;
        players.push(name);
        scores[name] = 0;
    }
    currentPlayerIndex = 0;
    roundScore = 0;
    consecutiveDoubles = 0;

    document.getElementById("setup").style.display = "none";
    document.getElementById("game").style.display = "block";
    updateUI();
}

function updateUI(message = "") {
    document.getElementById("status").innerText = message;
    document.getElementById("turnInfo").innerText = `Vuoro: ${players[currentPlayerIndex]}`;

    const ul = document.getElementById("scores");
    ul.innerHTML = "";
    for (let p of players) {
        const li = document.createElement("li");
        li.innerText = `${p}: ${scores[p]} pistettä`;
        ul.appendChild(li);
    }
}

function nextPlayer(message = "") {
    roundScore = 0;
    consecutiveDoubles = 0;
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updateUI(message);
}

function checkWin() {
    for (let p of players) {
        if (scores[p] >= target) {
            updateUI(`${p} voitti pelin ${scores[p]} pisteellä!`);
            document.getElementById("roll").disabled = true;
            document.getElementById("hold").disabled = true;
            document.getElementById("next").disabled = true;
            return true;
        }
    }
    return false;
}

function roll() {
    if (version === 1) {
        let d = rollDie();
        if (d === 1) {
            roundScore = 0;
            return nextPlayer(`${players[currentPlayerIndex]} heitti ykkösen – vuoro ohi!`);
        } else {
            roundScore += d;
            updateUI(`${players[currentPlayerIndex]} heitti ${d}. Kierrospisteet nyt: ${roundScore}`);
        }
    } else {
        let d1 = rollDie();
        let d2 = rollDie();
        updateUI(`${players[currentPlayerIndex]} heitti ${d1} ja ${d2}. Kierrospisteet nyt: ${roundScore}`);
        if (d1 === 1 && d2 === 1) {
            roundScore += 25;
            updateUI(`${players[currentPlayerIndex]} heitti kaksi ykköstä – 25 pistettä lisätty! Kierrospisteet nyt: ${roundScore}`);
        } else if (d1 === 1 || d2 === 1) {
            roundScore = 0;
            return nextPlayer(`${players[currentPlayerIndex]} heitti ykkösen – vuoro ohi!`);
        } else if (d1 === d2) {
            consecutiveDoubles++;
            if (consecutiveDoubles === 3) {
                roundScore = 0;
                return nextPlayer(`${players[currentPlayerIndex]} heitti kolme tuplaa - vuoro ohi!`);
            }
            roundScore += (d1 + d2) * 2;
            updateUI(`${players[currentPlayerIndex]} heitti tuplat (${d1}, ${d2}) – ${(d1+d2)*2} pistettä lisätty! Kierrospisteet: ${roundScore}`);
        } else {
            consecutiveDoubles = 0;
            roundScore += d1 + d2;
            updateUI(`${players[currentPlayerIndex]} heitti ${d1} ja ${d2}. Kierrospisteet: ${roundScore}`);
        }
    }
}

function hold() {
    const player = players[currentPlayerIndex];
    scores[player] += roundScore;
    if (!checkWin()) {
        nextPlayer();
    }
}

document.getElementById("startGame").addEventListener("click", startGame);
document.getElementById("roll").addEventListener("click", roll);
document.getElementById("hold").addEventListener("click", hold);
document.getElementById("next").addEventListener("click", nextPlayer);