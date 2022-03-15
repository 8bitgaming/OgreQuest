const randomMonster = Math.floor(Math.random() * monstersdata.length)

let monster = {
    id: 1,
    name: monstersdata[randomMonster].name,
    hp: monstersdata[randomMonster].hp,
    attack: monstersdata[randomMonster].attack,
    reward: monstersdata[randomMonster].reward,
    img: monstersdata[randomMonster].img
}

let fightingWords = ['hits', 'attacks', 'bashes', 'crushes', 'slices', 'charges and smashes', 'casts fireball at', 'mashes']


const createMonster = () => {

    let ogre = document.createElement("div")
    ogre.classList.add("ogre", "w3-row-padding")
    let ogreImg = document.createElement("img")
    ogreImg.setAttribute("src", monster.img)
    ogreImg.classList.add("w3-twothird")

    let ogreName = document.createElement("h2")
    ogreName.classList.add("w3-text-red", "w3-center")
    ogreName.textContent = `${monster.name}`

    let ogreHp = document.createElement("h4")
    ogreHp.classList.add("w3-border", "w3-xlarge", "w3-black", "w3-third")
    ogreHp.textContent = `Health: ${monster.hp}`

    let ogreAttack = document.createElement("h4")
    ogreAttack.classList.add("w3-border", "w3-xlarge", "w3-black", "w3-third")
    ogreAttack.textContent = `Attack: ${monster.attack}`

    let ogreGold = document.createElement("h4")
    ogreGold.classList.add("w3-border", "w3-xlarge", "w3-black", "w3-third")
    ogreGold.textContent = `Reward: ${monster.reward}`

    $(".monster-gold").text(`Reward: ${monster.reward} gold`)
    $(".ogre-card").append(ogre)
    $(".ogre").append(ogreImg, ogreName, ogreHp, ogreAttack, ogreGold)
     return
}

const checkAttacker = (charAttack) => {
    return monster.attack >= charAttack ? true : false

}

const startBattle = (event) => {
    event.preventDefault();

    const y = document.querySelectorAll(".display-button");
    y.forEach(function (data) {
        showButton(data);
    });

    createMonster()

    //Bring in character stats
    const charName = event.target.getAttribute('data-charName');
    const charId = event.target.getAttribute('data-charId');
    const charAttack = event.target.getAttribute('data-attack');
    let charHealth = event.target.getAttribute('data-health');
    let charGold = event.target.getAttribute('data-gold');

    //uses function to compare monster vs player attack value and set whoever has the higher attack as first
    let monsterAttackFirst = checkAttacker(charAttack)

    // check character health before battle
    if (charHealth <= 0) {
        $(".battle-message").append(`Character has 0 hp! You need to add health or select new character<br/>`);
        return;
    }

    //display welcome battle message in the log
    $(".battle-message").append(`The ${monster.name} appears, ready to do battle!<br/>`);

    //iterate back and forth between attacks until the player or the monster is at zero. Math max prevents going below zero as it returns the larger number
    while (charHealth > 0 && monster.hp > 0) {
        monsterAttackFirst ? charHealth = Math.max(0, charHealth - monster.attack) : monster.hp = Math.max(0, monster.hp - charAttack)
        const randomFightWord = Math.floor(Math.random() * fightingWords.length)
        monsterAttackFirst ? $(".battle-message").append(`${monster.name} ${fightingWords[randomFightWord]} ${charName} for ${monster.attack} damage. ${charName} has ${charHealth} health remaining!<br/>`) : $(".battle-message").append(`${charName} ${fightingWords[randomFightWord]} the ${monster.name} for ${charAttack} damage. The ${monster.name} has ${monster.hp} health remaining!<br/>`)
        $(".battle-message").append(`***************************************************<br/>`)
        monsterAttackFirst = !monsterAttackFirst
        newHealth = charHealth
    }
    if (newHealth > 0) {
        $(".battle-message").append(`${charName} is victorious in battle and collects ${monster.reward} gold!`);
        newGold = parseInt(charGold) + monster.reward;
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
const returnPage = (event) => {
    event.preventDefault();
    location.replace(`/character/`);
}


document.querySelector('.attack-button').addEventListener('click', startBattle);
document.querySelector('.continue-button').addEventListener('click', reloadPage);
document.querySelector('.return-button').addEventListener('click', returnPage);