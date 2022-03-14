let monster = {
    id: 1,
    name: 'Shrogre',
    hp: Math.floor(Math.random() * 10),
    attack: Math.floor(Math.random() * 5),
    gold: Math.floor(Math.random() * 5),
}



const checkAttacker = (charAttack) => {
    return monster.attack >= charAttack ? true : false

}

// $(".battle-message").append(`The battle begins!<br/>`);

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

    //uses function to compare monster vs player attack value and set whoever has the higher attack as first
    let monsterAttackFirst = checkAttacker(monster.attack, charAttack)

    // check character health before battle
    if (charHealth <= 0) {
        $(".battle-message").append(`Character has 0 hp! You need to add health or select new character<br/>`);
        return;
    }

    //display welcome battle message in the log
    $(".battle-message").append(`The battle begins!<br/>`);

    //iterate back and forth between attacks until the player or the monster is at zero. Math max prevents going below zero as it returns the larger number
    while (charHealth > 0 && monster.hp > 0) {
        monsterAttackFirst ? charHealth = Math.max(0, charHealth - monster.attack) : monster.hp = Math.max(0, monster.hp - charAttack)
        monsterAttackFirst ? $(".battle-message").append(`Ogre hits ${charName} for ${monster.attack} damage. ${charName} has ${charHealth} health remaining!<br/>`) : $(".battle-message").append(`${charName} hits the Ogre for ${charAttack} damage. The Ogre has ${monster.hp} health remaining!<br/>`)
        monsterAttackFirst = !monsterAttackFirst
        newHealth = charHealth
    }
    if (newHealth > 0) {
        $(".battle-message").append(`${charName} is victorious in battle and collects ${monster.gold} gold!`);
        newGold = parseInt(charGold) + monster.gold;
        saveChar(charId, newGold, newHealth);
    }
    else {
        $(".battle-message").append(`${charName} suffered an embarrassing defeat and will need to heal before continuing in battle.`);
        newGold = parseInt(charGold);
        saveChar(charId, newGold, newHealth);

    }
}

// saves to db
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
        reloadPage();

    }
}

// toggles button display
function showButton(x) {
    // var x = document.querySelectorAll(".display-button");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// function to reload page
const reloadPage = () => {
    document.location.reload();
}

// function to return to character page
const returnPage = () => {
    location.replace(`/character/`);
}


document.querySelector('.attack-button').addEventListener('click', startBattle);
document.querySelector('.continue-button').addEventListener('click', reloadPage);
document.querySelector('.return-button').addEventListener('click', returnPage);