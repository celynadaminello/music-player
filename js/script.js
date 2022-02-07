//get elements
const container = document.querySelector(".container");
let imgMsc = container.querySelector(".image__music #image");
let nameMsc = container.querySelector(".title__music .name__music");
let authorMsc = container.querySelector(".title__music .author__music");
let audioMsc = container.querySelector("#audio");
let btnPlayPause = container.querySelector(".play__pause");
let btnSkipBack = container.querySelector("#skip__back");
let btnSkipFor = container.querySelector("#skip__forward");
let btnShuffle = container.querySelector("#shuffle");
let btnRepeat = container.querySelector("#repeat");
let timeBar = container.querySelector("#time");
let currentMsc = container.querySelector("#current");
let durationMsc = container.querySelector("#duration");
let volumeControl = container.querySelector("#volume");
 
//index from the musics array
let musicIndex = 0

let randomSg = false;

audioMsc.volume = 0.1;

//events
window.addEventListener("load", ()=>{
    loadMusic(musicIndex);
})
btnPlayPause.addEventListener("click", ()=>{
        playPause();
} );
btnSkipBack.addEventListener("click", ()=>{
        skipBack();
} );
btnSkipFor.addEventListener("click", ()=>{
        skipForward();
} );
btnShuffle.addEventListener("click", ()=>{
        shuffle();
} );
btnRepeat.addEventListener("click", ()=>{
       repeatMusic();
} );
timeBar.addEventListener("change", ()=>{
        progressBar();
 } );
 volumeControl.addEventListener("change", ()=>{
        setVolume();
 } );

 audioMsc.addEventListener("ended", ()=>{
         skipForward();
 } );

 //duration
 setInterval(()=>{
         timeBar.max = audioMsc.duration;
         console.log(audioMsc.duration);
         durationMsc.innerHTML = timeFormat(audioMsc.duration);
 },1000);

 const timeFormat = (time)=>{
         let min = Math.floor(time / 60);
         if(min < 10){
                 min = `0${min}`;
         }
         let sec = Math.floor(time % 60);
         if(sec < 10){
                 sec = `0${sec}`;
         }
         return `${min}:${sec}`;
 }

 //timeBar and currentTime
        setInterval(() => {
              timeBar.value = audioMsc.currentTime;
              currentMsc.innerHTML = timeFormat(audioMsc.currentTime);
        }, 500);

//functions
        function loadMusic(indexNumb){
        
        nameMsc.innerHTML = allMusic[indexNumb].name;
        authorMsc.innerHTML = allMusic[indexNumb].author;
        imgMsc.src = `assets/images/${allMusic[indexNumb].img}.jpg`;
        audioMsc.src = `assets/audio/${allMusic[indexNumb].audio}.mp3`;
        }


        function playPause(){
                if(audioMsc.paused){
                       playMusic();
                }
                else{
                        pauseMusic();
                }
        }

        function playMusic(){
                audioMsc.play();
                btnPlayPause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>'; 
        }

        function pauseMusic(){
                audioMsc.pause();
                btnPlayPause.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
        }

        function skipBack(){

                if(musicIndex > 0){
                   musicIndex -= 1;
                }
                else{
                    musicIndex = allMusic.length - 1;    
                }
                loadMusic(musicIndex);
                playMusic();
        }
        
        function skipForward(){

                if(musicIndex < allMusic.length - 1){
                        musicIndex += 1;
                }  
                else{
                        musicIndex = 0;
                }
                loadMusic(musicIndex);
                playMusic();
         }

         function shuffle(){
                if (randomSg == false) {
                        randomSg = true;
                        btnShuffle.style.color = "#b91cf1";
                        
                      } else {
                        randomSg = false;
                        btnShuffle.style.color = "black";
                        
                      }
         }

        function repeatMusic(){
                if (audioMsc.loop == false) {
                        audioMsc.setAttribute("loop", true);
                        btnRepeat.style.color = "#b91cf1";
                      } else {
                        audioMsc.removeAttribute("loop");
                        btnRepeat.style.color = "black";
                        // skipForward();
                      }  
        }

         function progressBar(){
                let progress = timeBar.value;

                 audioMsc.currentTime = progress;
         }

         function setVolume() {
                
                audioMsc.volume = volumeControl.value / 100;
              }

//musics array
let allMusic = [
        {
            name: "Toxic",
            author: "BoyWithUke",
            img: "toxic",
            audio:"boywithuke-toxic",
            
    },
    {
            name: "Two Moons",
            author: "BoyWithUke",
            img: "twomoons",
            audio:"two-moons"
    },
    {
            name: "Enemy",
            author: "Imagine Dragons",
            img: "enemy",
            audio:"imagine-dragons-enemy"
    },
    {
            name: "West Coast",
            author: "Imagine Dragons",
            img: "origins-imagine-dragons",
            audio:"imagine-dragons-west-coast"
    },
    {
            name: "Guy",
            author: "Superfruit",
            img: "guy-exe",
            audio:"superfruit-guy-exe"
    },
    
    ];
