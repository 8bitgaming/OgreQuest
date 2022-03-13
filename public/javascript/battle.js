const checkAttacker = (monsterAttack, charAttack) => {
    return monsterAttack >= charAttack ? true : false

}


const startBattle = (event) => {
    event.preventDefault()
    const charName = event.target.getAttribute('data-charName');
    const charId = event.target.getAttribute('data-charId');
    const charAttack = event.target.getAttribute('data-attack');
    let charHealth = event.target.getAttribute('data-health');

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
    }
//to do - display final message and gold award and update db or go back to character screen
}



document.querySelector('.attack-button').addEventListener('click', startBattle);