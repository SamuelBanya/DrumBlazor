window.playAudioFile = (audioElem, path) => {
    audioElem.src = path;
    audioElem.play();
};

window.pauseAudioFile = (audioElem) => {
    audioElem.pause();
};
