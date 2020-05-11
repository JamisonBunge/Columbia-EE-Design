const volstep = 1 / 10;
var volumeTimer = null;

document.getElementById("volume-up").addEventListener('click', function () {
    actualAudio = document.getElementById("actual-player")
    dummyAudio = document.getElementById("dummy-player")

    if (actualAudio.volume < 1.0) {
        actualAudio.volume = Number((actualAudio.volume + volstep).toFixed(2));
        console.log("vol-" + (actualAudio.volume*10))
        document.getElementById("vol-" + ((actualAudio.volume*10))).classList.remove('vol-off');
        document.getElementById("vol-" + ((actualAudio.volume*10))).classList.add('vol-on');
    }

    if (dummyAudio.volume < 1.0) {
        dummyAudio.volume = Number((dummyAudio.volume + volstep).toFixed(2));
    }

    document.getElementById("volume-container").style.opacity = 1;
    clearTimeout(volumeTimer)
    volumeTimer = setTimeout(fadeout, 2000)
    // console.log(actualAudio.volume)
});

document.getElementById("volume-down").addEventListener('click', function () {
    actualAudio = document.getElementById("actual-player")
    dummyAudio = document.getElementById("dummy-player")

    if (actualAudio.volume > 0) {
        actualAudio.volume = Number((actualAudio.volume - volstep).toFixed(2));
        console.log("vol-" + (actualAudio.volume*10))
        document.getElementById("vol-" + ((actualAudio.volume*10)+1)).classList.remove('vol-on');
        document.getElementById("vol-" + ((actualAudio.volume*10)+1)).classList.add('vol-off');
    }

    if (dummyAudio.volume > 0) {
        dummyAudio.volume = Number((dummyAudio.volume - volstep).toFixed(2));
    }

    document.getElementById("volume-container").style.opacity = 1;
    clearTimeout(volumeTimer)
    volumeTimer = setTimeout(fadeout, 2000)
    // console.log(actualAudio.volume)
});

volume_bar = document.getElementById('volume-bar')
for (let i = 0; i < 10; i++) {
    let vol_step = document.createElement('div');
    vol_step.classList.add('vol-step');
    vol_step.innerHTML = '<div id="vol-' + (10 - i) + '" class="vol-on">';
    // vol_step.id = "vol-" + (10 - i);
    volume_bar.appendChild(vol_step);
}

function fadeout() {
    volCont = document.getElementById("volume-container")
    if (volCont.style.opacity > 0) {
        volCont.style.opacity = Number((volCont.style.opacity - 0.005).toFixed(3))
        // console.log(volCont.style.opacity)
        volumeTimer = setTimeout(fadeout, 10)
    }
}