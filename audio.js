document.addEventListener("DOMContentLoaded", function () {
        var playAudioLink = document.getElementById("playAudio");
        var audioElement = document.querySelector("#waveaudio audio");
        playAudioLink.addEventListener("click", function (event) {
            event.preventDefault();
            if (audioElement.paused) {
                audioElement.play();
            } else {
                audioElement.pause();
            }
        });
    });