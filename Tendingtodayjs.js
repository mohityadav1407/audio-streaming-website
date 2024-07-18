var songs = [
    {
        title: "Let me Down Slowly",
        artist: "Alec Benjamin",
        source: "bootstrap-5.3.3-dist/Project/TrendingSongs/Let Me Down Slowly-(PagalSongs.Com.IN).mp3", // Path to the audio file
        cover: "coversTrendintoday/Screenshot 2024-04-19 220711.png" // Path to the cover image
    },
    {
        title: "Let me Down Slowly",
        artist: "Alec Benjamin",
        source: "bootstrap-5.3.3-dist/Project/TrendingSongs/Let Me Down Slowly-(PagalSongs.Com.IN).mp3", // Path to the audio file
        cover: "coversTrendintoday/Screenshot 2024-04-19 220711.png" // Path to the cover image
    },
    // Add more songs similarly
];

var currentSongIndex = 0; // Index of the currently playing song
var audio = new Audio(); // Create a new audio object

// Function to load a song
function loadSong(index) {
    var song = songs[index];
    audio.src = song.source;
    document.querySelector(".card-title").textContent = song.title;
    document.querySelector(".card-text").textContent = "Song by " + song.artist;
    document.querySelector(".card-img-top").src = song.cover;
}

// Function to play or pause the current song
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        document.getElementById("playPauseIcon").classList.remove("fa-play");
        document.getElementById("playPauseIcon").classList.add("fa-pause");
    } else {
        audio.pause();
        document.getElementById("playPauseIcon").classList.remove("fa-pause");
        document.getElementById("playPauseIcon").classList.add("fa-play");
    }
}

// Function to play the next song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
}

// Function to play the previous song
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
}

// Load the initial song
loadSong(currentSongIndex);
