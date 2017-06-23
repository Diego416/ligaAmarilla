function select(audioName, description) {
    var audioHouse = document.getElementById('audioHouse');
    var audioCar = document.getElementById('audioCar');
    var audioChampions = document.getElementById('audioChampions');
    var correctAudio = document.getElementById(audioName);

    if (!audioHouse.paused) {
        audioHouse.pause();
        audioHouse.currentTime = 0;
    }
    if (!audioCar.paused) {
        audioCar.pause();
        audioCar.currentTime = 0;
    }
    if (!audioChampions.paused) {
        audioChampions.pause();
        audioChampions.currentTime = 0;
    }

    correctAudio.play();

    //document.getElementById('descripcion').innerHTML(description);
    document.getElementById('descripcion').getElementsByTagName('span')[0].innerHTML = description;
}