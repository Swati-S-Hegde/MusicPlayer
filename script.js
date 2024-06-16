let progress = document.getElementById("progress");
let song = document.getElementById("song");
let cntlIcon = document.getElementById("cntlIcon");

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function playPause() {
    if (cntlIcon.classList.contains("fa-pause")) {
        song.pause();
        cntlIcon.classList.remove("fa-pause");
        cntlIcon.classList.add("fa-play");
    } else {
        song.play();
        cntlIcon.classList.remove("fa-play");
        cntlIcon.classList.add("fa-pause");
    }
}

song.addEventListener('play', function() {
    setInterval(function() {
        progress.value = song.currentTime;
    }, 500);
});

progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
    cntlIcon.classList.remove("fa-play");
    cntlIcon.classList.add("fa-pause");
};

function backward() {
    song.currentTime -= 10;
}

function forward() {
    song.currentTime += 10;
}

function closePage() {
    if (window.close()) {
        window.close();
    } else {
        alert("closing!!");
    }
}
