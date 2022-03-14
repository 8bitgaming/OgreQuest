
const goToBattlePage = (event) => {
    const charId = event.target.getAttribute('charId');
    console.log("charId", charId)
    location.replace(`/battlepage/${charId}`);
}



document.querySelectorAll('.start-battle').forEach(e => e.addEventListener('click', goToBattlePage));