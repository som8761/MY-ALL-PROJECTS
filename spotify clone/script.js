let audioElement = new Audio("songs/1.mp3");
let songIndex = 0;
const mainPlayer = document.getElementById("mainPlayer");
const songPlayBtn = Array.from(document.querySelectorAll(".songPlayBtn"));
const myProgressBar = document.getElementById("myProgressBar");
const gif = document.getElementById("gif");
const masterSongName = document.getElementById("masterSongName");

let songs = [
  {
    songName: "Warriyo - Mortals [NCS Release]",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
    songTime : '03:50'
  },
  {
    songName: "Cielo - Huma-Huma",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
    songTime : '02:33'
  },
  {
    songName: "DEAF KEV - Invincible [NCS Release]",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
    songTime : '04:33'
  },
  {
    songName: "Different Heaven & EH!DE - My Heart",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
    songTime : '04:27'
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
    songTime : '03:28'
  },
  {
    songName: "Rabba - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/6.jpg",
    songTime : '02:33'
  },
  {
    songName: "Sakhiyaan - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/7.jpg",
    songTime : '02:33'
  },
  {
    songName: "Bhula Dena - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/8.jpg",
    songTime : '02:33'
  },
  {
    songName: "Tumhari Kasam - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/9.jpg",
    songTime : '02:33'
  },
  {
    songName: "Na Jaana - Salam-e-Ishq",
    filePath: "songs/4.mp3",
    coverPath: "covers/10.jpg",
    songTime : '04:27'
  },
];

const songItem = document.querySelectorAll(".songItem");
songItem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.querySelector(".songName").innerHTML = songs[i].songName;
  element.querySelector('#songTime').innerHTML = songs[i].songTime;
});

mainPlayer.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime < 0) {
    audioElement.src = songs[5].filePath;
    audioElement.play();
    songPlayBtn[songIndex].classList.remove("fa-play-circle")
    songPlayBtn[songIndex].classList.add("fa-pause-circle")

    if(mainPlayer.classList.contains("fa-play-circle")){
      mainPlayer.classList.remove("fa-play-circle"); 
      mainPlayer.classList.add("fa-pause-circle");
    }
    else{
      mainPlayer.classList.remove("fa-pause-circle");
      mainPlayer.classList.add("fa-play-circle");
    }
    gif.style.opacity = "1";
  } else {
    audioElement.pause();
    mainPlayer.classList.remove("fa-pause-circle");
    mainPlayer.classList.add("fa-play-circle");
    gif.style.opacity = "0";
    songPlayBtn[songIndex].classList.remove("fa-pause-circle")
    songPlayBtn[songIndex].classList.add("fa-play-circle")
  }
});


audioElement.addEventListener('timeupdate',(e)=>{
  progress = audioElement.currentTime / audioElement.duration * 100;
  myProgressBar.value = progress;
  console.log( myProgressBar.value);
  updateMasterPlayTime(); // Add this line to update the masterPlay element's time
})
audioElement.addEventListener('ended',()=>{
  // Play the next song
  playNextSong();
  // loopTheSong();
})

function playNextSong() {
  if(songIndex < songs.length - 1){
    songIndex++;
    // songs.length - 1 (songs ta 9 index er) .
  }
  else{
    songIndex = 0;
  }
  audioElement.src = songs[songIndex].filePath;
  audioElement.play();
  masterSongName.innerHTML = songs[songIndex].songName;
  mainPlayer.classList.remove("fa-play-circle");
  mainPlayer.classList.add("fa-pause-circle");
  makeAllPlays();
  songPlayBtn[songIndex].classList.remove("fa-play-circle")
  songPlayBtn[songIndex].classList.add("fa-pause-circle")
}
myProgressBar.addEventListener('change',()=>{
  audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

})
function loopTheSong(){
  songIndex;
  audioElement.src = songs[songIndex].filePath;
  audioElement.play();
  masterSongName.innerHTML = songs[songIndex].songName;
  mainPlayer.classList.remove("fa-play-circle");
  mainPlayer.classList.add("fa-pause-circle");
  makeAllPlays();
  songPlayBtn[songIndex].classList.remove("fa-play-circle")
  songPlayBtn[songIndex].classList.add("fa-pause-circle")
}

const makeAllPlays = () => {
  songPlayBtn.forEach((element) => {
    element.classList.remove("fa-pause-circle");
    element.classList.add("fa-play-circle");
  });

};


songPlayBtn.forEach((element)=>{
  element.addEventListener('click',(e)=>{  
    makeAllPlays();
    songIndex =  e.target.id; // i have made index which is basically id of each element,i have putted the id's as index of the songs.
    // console.log(e.target);
    // console.log(`id is : ${songIndex}`);
    if(audioElement.paused || audioElement.currentTime < 0){
      audioElement.src = songs[songIndex].filePath;
      audioElement.play();
      gif.style.opacity = "1";
      e.target.classList.remove("fa-play-circle"); // small play btn
      e.target.classList.add("fa-pause-circle"); // small play btn
      mainPlayer.classList.remove("fa-play-circle"); // main player btn
      mainPlayer.classList.add("fa-pause-circle"); // main player btn
      masterSongName.innerHTML = songs[songIndex].songName;
    }
    else{
      audioElement.pause();
      gif.style.opacity = "0";
      e.target.classList.remove("fa-pause-circle"); // small play btn
      e.target.classList.add("fa-play-circle"); // small play btn
      mainPlayer.classList.remove("fa-pause-circle"); // main player btn
      mainPlayer.classList.add("fa-play-circle"); // main player btn
    }

  })
})

document.getElementById('previous').addEventListener('click',()=>{
  if(songIndex <= 0){
    songIndex = 0;
  }
  else{
    songIndex--;
  }
  audioElement.src = songs[songIndex].filePath;
  audioElement.play();
  masterSongName.innerHTML = songs[songIndex].songName;
  mainPlayer.classList.remove("fa-play-circle"); // main player btn
  mainPlayer.classList.add("fa-pause-circle"); // main player btn

  makeAllPlays();
  songPlayBtn[songIndex].classList.remove("fa-play-circle")
  songPlayBtn[songIndex].classList.add("fa-pause-circle")
})


document.getElementById('next').addEventListener('click',()=>{
  if(songIndex >= 9){
    songIndex = 0;
  }
  else{
    songIndex++;
  }
  audioElement.src = songs[songIndex].filePath;
  audioElement.play();
  masterSongName.innerHTML = songs[songIndex].songName;

  mainPlayer.classList.remove("fa-play-circle"); // main player btn
  mainPlayer.classList.add("fa-pause-circle"); // main player btn

  makeAllPlays();
  songPlayBtn[songIndex].classList.remove("fa-play-circle")
  songPlayBtn[songIndex].classList.add("fa-pause-circle")
})



function updateMasterPlayTime() {
  const currentTime = formatTime(audioElement.currentTime);
  const duration = formatTime(audioElement.duration);
  masterSongName.innerHTML = `${currentTime} / ${duration} ${songs[songIndex].songName}`;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const formattedTime = `${padZero(minutes)}:${padZero(remainingSeconds)}`;
  return formattedTime;
}

function padZero(number) {
  return number < 10 ? `0${number}` : number;
}



