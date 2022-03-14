const checkAttacker = (monsterAttack, charAttack) => {
    return monsterAttack >= charAttack ? true : false

}


const startBattle = (event) => {
    event.preventDefault();

    const y = document.querySelectorAll(".display-button");
    y.forEach(function (data) {
        showButton(data);
    });


    const charName = event.target.getAttribute('data-charName');
    const charId = event.target.getAttribute('data-charId');
    const charAttack = event.target.getAttribute('data-attack');
    let charHealth = event.target.getAttribute('data-health');
    let charGold = event.target.getAttribute('data-gold');

    const monsterId = 1
    const monsterAttack = 5
    let monsterHealth = 25
    let monstergold = 50
    //uses function to compare monster vs player attack value and set whoever has the higher attack as first
    let monsterAttackFirst = checkAttacker(monsterAttack, charAttack)

    //display welcome battle message in the log
    $(".battle-message").append(`The battle begins!<br/>`);

    //iterate back and forth between attacks until the player or the monster is at zero. Math max prevents going below zero as it returns the larger number
    while (charHealth > 0 && monsterHealth > 0) {
        monsterAttackFirst ? charHealth = Math.max(0, charHealth - monsterAttack) : monsterHealth = Math.max(0, monsterHealth - charAttack)
        monsterAttackFirst ? $(".battle-message").append(`Ogre hits ${charName} for ${monsterAttack} damage. ${charName} has ${charHealth} health remaining!<br/>`) : $(".battle-message").append(`${charName} hits the Ogre for ${charAttack} damage. The Ogre has ${monsterHealth} health remaining!<br/>`)
        monsterAttackFirst = !monsterAttackFirst
        newHealth = charHealth
    }
    if (newHealth > 0) {
        console.log("congrat on winning the battle you won 20 gold");
        newGold = parseInt(charGold) + 20;
        saveChar(charId, newGold, newHealth);
    }
    else {
        console.log("Better Luck next time");
        newGold = parseInt(charGold);
        saveChar(charId, newGold, newHealth);

    }
    //to do - display final message and gold award and update db or go back to character screen
    // document.location.reload();
}

const saveChar = (charId, newGold, newHealth) => {
    const response = fetch('/api/characters/' + parseInt(charId), {
        method: 'PUT',
        body: JSON.stringify({
            gold: newGold,
            hp: newHealth,

        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.reload();

    }
}

function showButton(x) {
    // var x = document.querySelectorAll(".display-button");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


document.querySelector('.attack-button').addEventListener('click', startBattle);