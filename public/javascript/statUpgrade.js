const character_name = document.querySelector('#character-name').value.trim();
const userID = document.querySelector('#character-name').getAttribute('user');
const goldValue = document.querySelector("input[name='difficulty']:checked").value

const addHealth = () => {

}
const removeHealth = () => {

}
const addAttack = () => {

}
const removeAttack = () => {

}
// const submitUpgrade = () => {
//     const response = await fetch('/api/characters/'+ userID, {
//         method: 'PUT',
//         body: JSON.stringify({
//             name: character_name,
//             user_id: parseInt(userID),
//             gold: difficultValue,
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
// }