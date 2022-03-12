//all logic for managing a character - add, update delete
async function characterFormHandler(event) {
    event.preventDefault();
    console.log('test');

    const character_name = document.querySelector('#character-name').value.trim();
    const userID = document.querySelector('#character-name').getAttribute('data-user');
    const goldValue = document.querySelector("input[name='difficulty']:checked").value
   console.log("this is user id >>>", userID);

    if(character_name){
        console.log("This is the character name", character_name);
        switch (goldValue) {
            case 'easy':
                var difficultValue = 50;
                break;
            case 'medium':
                var difficultValue = 25;
                break;
            case 'hard':
                var difficultValue = 10;
                break;
        }
        const response = await fetch('/api/characters', {
            method: 'POST',
            body: JSON.stringify({
                name: character_name,
                user_id: parseInt(userID),
                gold: difficultValue,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        if (response.ok) {
            // document.location.reload();
            console.log("response is ok");
    
        } else {
            alert(response.statusText);
        }
    
        console.log("characters: ", character_name);
        // console.log(user_id);
    }
    else { 
        console.log("A character name is needed")
    }
}

document.querySelector('.character-form').addEventListener('submit', characterFormHandler);