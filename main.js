/*For price of upgrades the formula is:
price = basecost * 1.15^m, m=number of that upgrade owned*/

let maleki = document.getElementById("maleki");

// Basic vars for increasing Malekis
let malekiCounter = 0;
let increase = 1;
let multiply = 1;
let mps = 0;

// Upgrade1
let price1 = 10;
let count1 = 0;

// Le jar
let price2 = 100;
let count2 = 0;


function updateCounter() {
    document.getElementById("counter").textContent = `You have ${malekiCounter.toFixed(2)} Maleki's`;
}

// Handles adding malekis
function malekiIncrease() {
    malekiCounter += increase
    malekiCounter *= multiply
    updateCounter();
}

// Mps
setInterval(function () {
    malekiCounter += (mps / 10);
    updateCounter();
}, 100);

function upgradeOne() {
    if (malekiCounter >= price1) {
        malekiCounter -= price1;
        
        malekiCounter = Math.round(malekiCounter * 100) / 100;

        increase += 0.1;
        count1 += 1;
        price1 = Math.round(10 * 1.15 ** count1);
        document.getElementById("upgrade1price").textContent = `Cost: ${price1} Maleki's`;
        document.getElementById("upgrade1count").textContent = `${count1}`;
        document.getElementById("counter").textContent = `You currently have ${malekiCounter} Maleki's.`
    }
    else {
        window.alert("You cant afford this, try again chud")
    }
}

function upgradeTwo() {
    if (malekiCounter >= price2) {
        malekiCounter -= price2;
        
        malekiCounter = Math.round(malekiCounter * 100) / 100;

        mps += 1;
        count2 += 1;
        price2 = Math.round(10 * 1.15 ** count2);
        document.getElementById("upgrade2price").textContent = `Cost: ${price2} Maleki's`;
        document.getElementById("upgrade2count").textContent = `${count2}`;
        document.getElementById("counter").textContent = `You currently have ${malekiCounter} Maleki's.`;
        document.getElementById("mpscount").textContent = `Your mps (Malekis per second) is ${mps}.`;
    }
    else {
        window.alert("You cant afford this, try again chud")
    }
}

maleki.onclick = malekiIncrease;
upgrade1.onclick = upgradeOne;
upgrade2.onclick = upgradeTwo;