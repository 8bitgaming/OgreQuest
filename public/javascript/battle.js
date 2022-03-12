
const goToBattle = () => {
    console.log("battlepage with character", charId)
    location.replace(`/battlepage/${charId}`);
}



document.querySelectorAll('.start-battle').forEach(e => e.addEventListener('click', goToBattle))