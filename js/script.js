const container = document.querySelector(".container");
let imgMsc = container.querySelector("image__music #image");
let nameMsc = container.querySelector(".title__music .name__music");
let authorMsc = container.querySelector(".title__music .author__music");
let audioMsc = container.querySelector("#audio")
 
let musicIndex = 0

window.addEventListener("load", ()=>{
    loadMusic(musicIndex);
})

function loadMusic(indexNumb){
    
    nameMsc.innerHTML = allMusic[indexNumb].name;
    authorMsc.innerHTML = allMusic[indexNumb].author;
    imgMsc.setAttribute('src', allMusic[indexNumb].img);
    audioMsc.setAttribute('src', allMusic[indexNumb].audio);

}


let allMusic = [
    {
        name: "Toxic",
        author: "BoyWithUke",
        img: "./assets/images/toxic.jpg)",
        audio:"./assets/audio/boywithuke-toxic.mp3",
        
},
{
        name: "Guy",
        author: "Superfruit",
        img: "./assets/guy-exe.jpg",
        audio:"./assets/superfruit-guy-exe.mp3"
},
{
        name: "Enemy",
        author: "Imagine Dragons",
        img: "./assets/enemy.jpg",
        audio:"./assets/imagine-dragons-enemy.mp3"
},
{
        name: "I Wanna Be Your Slave",
        author: "Maneskin",
        img: "./assets/slave.jpg",
        audio:"./assets/maneskin-I-WANNA-BE-YOUR-SLAVE.mp3"
},
{
        name: "Counting Stars",
        author: "One Republic",
        img: "./assets/counting-stars.jpg",
        audio:"./assets/one-republic-counting-stars.mp3"
}

];
