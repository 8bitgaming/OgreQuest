
const goToBattle = () => {
    const charId = document.querySelector(".delete-character").getAttribute('charId');
    location.replace(`/battlepage/${charId}`);
}



document.querySelectorAll('.start-battle').forEach(e => e.addEventListener('click', goToBattle))