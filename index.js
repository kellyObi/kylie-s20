
function playNetflixIntro() {
    const overlay = document.getElementById('netflix-overlay');
    const letter = document.getElementById('anim-letter');
    const audio = document.getElementById('ta-dum');

    // 1. Show the hidden black layer
    overlay.style.display = 'flex';
    
    // 2. Play the sound
    audio.play();

    // 3. Start the zoom
    letter.classList.add('zoom-animation');

    // 4. Wait 1.5 seconds, then go to the birthday page
    setTimeout(() => {
        window.location.href = "homepage.html"; 
    }, 1500);
}