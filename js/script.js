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
let timeBar = container.querySelector(".time__bar");
let volumeControl = container.querySelector("#volume");
 
//index from the musics array
let musicIndex = 0

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

        //  function volume(){
        //          volumeControl.innerHTML = volumeControl.value;
        //          audio.volumeControl = volumeControl.value / 100;
        //  }

         audioMsc.addEventListener("timeupdate", (e)=>{
                 const currentTime = e.target.currentTime;
                 const duration = e.target.duration;
                 let progressWidth = (currentTime / duration) * 100;
                 timeBar.getElementsByClassName.width = `${progressWidth}%`
         });

//musics array
let allMusic = [
        {
            name: "Toxic",
            author: "BoyWithUke",
            img: "toxic",
            audio:"boywithuke-toxic",
            
    },
    {
            name: "Guy",
            author: "Superfruit",
            img: "guy-exe",
            audio:"superfruit-guy-exe"
    },
    {
            name: "Enemy",
            author: "Imagine Dragons",
            img: "enemy",
            audio:"imagine-dragons-enemy"
    },
//     {
//             name: "I Wanna Be Your Slave",
//             author: "Maneskin",
//             img: "slave",
//             audio:"maneskin-I-WANNA-BE-YOUR-SLAVE"
//     },
//     {
//             name: "Counting Stars",
//             author: "One Republic",
//             img: "counting-stars",
//             audio:"one-republic-counting-stars"
//     }
    
    ];
