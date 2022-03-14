//all logic for managing a character - add, update delete
async function characterFormHandler(event) {
    event.preventDefault();
    console.log('test');

    const character_name = document.querySelector('#character-name').value.trim();
    const userID = document.querySelector('#character-name').getAttribute('user');
    const goldValue = document.querySelector("input[name='difficulty']:checked").value
   

    if(character_name){
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
            document.location.reload();
    
        } else {
            alert(response.statusText);
        }
    
        console.log("characters: ", character_name);
        // console.log(user_id);
    }
    else { 
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('errorText').textContent = 'A character name is needed';
    }
}

document.querySelector('.character-form').addEventListener('submit', characterFormHandler);