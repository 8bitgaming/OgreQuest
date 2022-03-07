//Listen for start battle action 
//Battle Sequence:
// Load character object from DB
// Check for higher attack rating/ determineAttacker
// Alternate attacks and check for health
// If player dies - end Game
// If enemy dies - award gold
// Check to see if player wants to upgrade?
// Next monster
// End after set number of monsters or keep going until player dies?
 

let enemyAttackFirst = false;

const loadCharacter = async () => {
    await //load character from db
    //select from enemy array
    determineAttacker(enemy)
}

const determineAttacker = (enemy, player) => {
    enemy.attack >= player.health ? enemyAttackFirst = true : null
    battle()
}

const battle = (player, enemy) => {
    if (player.health || enemy.health === 0) {
        endBattle()
    } else if (enemyAttackFirst){
        Math.max(0, player.health = player.health - enemy.attack)
        enemyAttackFirst = false
    }
}

const endBattle = () => {
    //award treasure
    //check for last enemy - i.e. loop through 10 enemies?
}