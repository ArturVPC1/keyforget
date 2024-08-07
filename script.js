// script.js

function increment(counterId) {
    const counter = document.getElementById(counterId);
    counter.textContent = parseInt(counter.textContent) + 1;
    if (counterId.includes('chains-counter')) {
        updateHandSize(counterId);
    }
}

function decrement(counterId) {
    const counter = document.getElementById(counterId);
    if (parseInt(counter.textContent) > 0) {
        counter.textContent = parseInt(counter.textContent) - 1;
        if (counterId.includes('chains-counter')) {
            updateHandSize(counterId);
        }
    }
}

function resetCounters() {
    document.getElementById('aember-counter-p1').textContent = 0;
    document.getElementById('aember-counter-p2').textContent = 0;
    document.getElementById('chains-counter-p1').textContent = 0;
    document.getElementById('chains-counter-p2').textContent = 0;
    document.getElementById('hand-size-p1').textContent = 'Hand Size: 6';
    document.getElementById('hand-size-p2').textContent = 'Hand Size: 6';
    document.getElementById('red-key-p1').src = 'red-key-unforged.png';
    document.getElementById('blue-key-p1').src = 'blue-key-unforged.png';
    document.getElementById('yellow-key-p1').src = 'yellow-key-unforged.png';
    document.getElementById('red-key-p2').src = 'red-key-unforged.png';
    document.getElementById('blue-key-p2').src = 'blue-key-unforged.png';
    document.getElementById('yellow-key-p2').src = 'yellow-key-unforged.png';
}

function forgeKey(keyId, aemberCounterId) {
    const aemberCounter = document.getElementById(aemberCounterId);
    const key = document.getElementById(keyId);
    if (key.src.includes('unforged')) {
        if (parseInt(aemberCounter.textContent) >= 6) {
            aemberCounter.textContent = parseInt(aemberCounter.textContent) - 6;
            key.src = keyId.split('-')[0] + '-key-forged.png';
        } else {
            alert("Six Aember needed to forge a key!");
        }
    } else {
        alert("This key is already forged!");
    }
}

function confirmReset() {
    if (confirm("Are you sure you want to reset the game?")) {
        resetCounters();
    }
}

function updateHandSize(counterId) {
    const counter = document.getElementById(counterId);
    const handSizeId = counterId.replace('chains-counter', 'hand-size');
    const chains = parseInt(counter.textContent);
    let handSize = 6;
    
    if (chains >= 25) {
        handSize = 1;
    } else if (chains >= 19) {
        handSize = 2;
    } else if (chains >= 13) {
        handSize = 3;
    } else if (chains >= 7) {
        handSize = 4;
    } else if (chains >= 1) {
        handSize = 5;
    }

    document.getElementById(handSizeId).textContent = `Hand Size: ${handSize}`;
}

function confirmSinglePlayer() {
    if (confirm("Are you sure you want to switch to 1-player mode?")) {
        document.querySelector('.counter-section:nth-of-type(2)').style.display = 'none';
    }
}
