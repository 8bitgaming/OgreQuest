var character_name = document.querySelector(".upgrade-form").getAttribute('name');
const character_health = document.querySelector(".upgrade-form").getAttribute('health');
const character_gold = document.querySelector(".upgrade-form").getAttribute('gold');
const character_attack = document.querySelector(".upgrade-form").getAttribute('attack');
const userID = document.querySelector(".upgrade-form").getAttribute('user');


const addHealth = (event) => {
    let newGold = parseInt(character_gold) - 10;
    if (newGold < 0) {
        window.alert("you dont have enough gold");
        return;
    }
    else {
        let newHealth = parseInt(character_health) + 10;
        let newAttack = parseInt(character_attack);
        submitUpgrade(newAttack, newGold, newHealth);

    }
    // location.replace('/');

}

const addAttack = (event) => {
    let newGold = parseInt(character_gold) - 10;
    if (newGold < 0) {
        window.alert("you dont have enough gold");
        return;
    }
    else {
        let newAttack = parseInt(character_attack) + 10;
        let newHealth = parseInt(character_health);
        submitUpgrade(newAttack, newGold, newHealth);

    }
    // location.replace('/');

}


const submitUpgrade = (newAttack, newGold, newHealth) => {
    const response = fetch('/api/characters/' + parseInt(userID), {
        method: 'PUT',
        body: JSON.stringify({
            attack: newAttack,
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



document.querySelector('.addAttack').addEventListener('click', addAttack);
document.querySelector('.addHealth').addEventListener('click', addHealth);