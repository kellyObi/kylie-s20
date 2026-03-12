
const audio = document.getElementById('myAudio');
const playBtn = document.getElementById('playBtn');

playBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        // Option: Change icon to 'Pause' here
        console.log("Music is playing");
    } else {
        audio.pause();
        // Option: Change icon back to 'Play' here
        console.log("Music is paused");
    }
});