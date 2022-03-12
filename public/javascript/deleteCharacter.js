const deleteCharacter = async (event) => {
    const charId = document.querySelector(".delete-character").getAttribute('charId');
    const userId = document.querySelector(".delete-character").getAttribute('userId');
    
    if (charId && userId ) {
        const response = await fetch(`/api/characters/${charId}`, {
            method: 'delete',
        
    })
        if (response.ok) {
            location.replace('/');
            document.location.reload();

        }
    }
}

document.querySelectorAll('.delete-character').forEach(e => e.addEventListener('click', deleteCharacter))