//all logic for managing a character - add, update delete
async function characterFormHandler(event) {
    event.preventDefault();
    console.log('test');

    const character_name = document.querySelector('#character-name').value.trim();
    const userId = document.querySelector('#character-name').getAttribute('user');
    console.log("user id", userId);

    // const user_id = session.user_id;
    // console.log(session.value);

    if (character_name) {
        const response = await fetch('/api/character', {
            method: 'POST',
            body: JSON.stringify({
                character_name,
                user_Id: userId,
                gold
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }

        console.log("characters: ", character_name);
        // console.log(user_id);
    }
}

document.querySelector('.character-form').addEventListener('submit', characterFormHandler);