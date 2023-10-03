let Play=document.querySelector('.play');
let Next=document.querySelector('.next');
let prev=document.querySelector('.prev');
let music=document.querySelector('audio');
let image=document.querySelector('img');
let pause=document.querySelector('.pause');

//for playing
pause.style.display="none";
let isPlaying=false;

const playMusic=()=>{
       isPlaying=true;
       music.play();
       //Play.classList.replace("fa-pause","fa_play");
       image.classList.add('anime');

}
//for pause
const pauseMusic=()=>{
       isPlaying=false;
       music.pause();
       //Play.classList.replace("fa-pause","fa_play");
      image.classList.add('anime');
}
Play.addEventListener('click',()=>{
       // if(isPlaying){
       //         Play.style.display="none"; 
       //       pause.style.display="block";
       //        pauseMusic();  
       //         pause.style.display="none";    
       //        Play.style.display="block";   
             
       // }
       // else{
              
       // playMusic();         
              
       // }
       isPlaying ? pauseMusic():playMusic();
});



pause.addEventListener('click',()=>{
       music.pause();
})
Next.addEventListener('click',()=>{
       music.previousSibling();
});