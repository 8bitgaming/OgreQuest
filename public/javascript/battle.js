//Check for higher attack level, then attack, then check for death


let enemyAttackFirst = false;

const loadEnemy = () => {
    //need to do - randomly select enemy or treasure
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
    //check for last enemy - i.e. loop through 10 enemies?
    //award treasure
}