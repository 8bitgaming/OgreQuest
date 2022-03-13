const deleteCharacter = async (event) => {
    const charId = event.target.getAttribute('charId');
    
    if (charId) {
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