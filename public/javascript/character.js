//all logic for managing a character - add, update delete
async function characterFormHandler(event) {
    event.preventDefault();
    console.log('test');

    const character_name = document.querySelector('#character-name').value.trim();
    const userID = document.querySelector('#character-name').getAttribute('user');
    const goldValue = document.querySelector("input[name='difficulty']:checked").value
   
    // const user_id = session.user_id;
    // console.log(session.value);
    // const expr = 'difficultValue';
    if(goldValue && character_name){
        switch (goldValue) {
            case 'easy':
                var difficultValue = 50;
                console.log('easy');
                break;
            case 'medium':
                var difficultValue = 25;
                console.log('medium');
                break;
            case 'hard':
                var difficultValue = 10;
                console.log('hard');
                break;
        }

    }


    if (character_name) {
        const response = await fetch('/api/characters', {
            method: 'POST',
            body: JSON.stringify({
                name: character_name,
                user_id: parseInt(userID),
                gold: difficultValue
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            // document.location.reload();
            console.log("user id", parseInt(userID));
            console.log(difficultValue)

        } else {
            alert(response.statusText);
        }

        console.log("characters: ", character_name);
        // console.log(user_id);
    }
    else {
        console.log("enter a character name")
    }
}

document.querySelector('.character-form').addEventListener('submit', characterFormHandler);