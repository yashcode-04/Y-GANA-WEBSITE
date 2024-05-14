console.log("hello yash");
// Initialize the Variable //
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myporgressbar =document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songitem'));


let songs =[
    {songName : "Meere Naam Tu" , filePath: "1.mp3" ,coverPath:"image1.jpg"},
    {songName : "Deera Deera -KGF" , filePath: "2.mp3" ,coverPath:"image2.jpg"},
    {songName : "Hukum - Jailer" , filePath: "3.mp3" ,coverPath:"image3.jpg"},
    {songName : "Theme Song - Jawan" , filePath: "4.mp3" ,coverPath:"image4.jpg"},
    {songName : "Anuvanuvu - Om Bheem Bhush" , filePath: "5.mp3" ,coverPath:"image5.jpg"},
    {songName : "Chamak Challo - Raone" , filePath: "6.mp3" ,coverPath:"image6.jpg"},
    {songName : "Oo Antava Mama - Pushpa" , filePath: "7.mp3" ,coverPath:"image7.jpg"},
    {songName : "Unstoppable - Sia" , filePath: "8.mp3" ,coverPath:"image8.jpg"},
    {songName : "I Lover Your Voice - O my Baby ooo" , filePath: "songs/9.mp3" ,coverPath:"image9.jpg"},
]

songitems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})

// handle pause / and play button//
masterplay.addEventListener('click',()=>{
   if(audioElement.paused || audioElement.currentTime <=0){
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
   }
   else{
    audioElement.pause();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
   gif.style.opacity = 0;
   }  
})

audioElement.addEventListener('timeupdate',()=>{
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100)
    myporgressbar.value= progress;
})

myporgressbar.addEventListener('change',()=>{
    audioElement.currentTime = myporgressbar.value* audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })

}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${songIndex}.mp3` ;
        mastersongname.innerText = songs[songIndex - 1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    }) 
    
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex}.mp3` ;
    mastersongname.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex}.mp3` ;
    mastersongname.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})