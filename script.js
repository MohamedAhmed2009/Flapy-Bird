let hole = document.getElementById("hole");
let obstacle = document.getElementById("obstacle");
let bird = document.getElementById("bird");

let score =0 ;

hole.addEventListener("animationiteration" , ()=>{
    let rand = Math.random() * (500-150);
    hole.style.top = rand + "px";

    score++ 
});

setInterval(function(){

    let birdtop = parseInt( getComputedStyle(bird).getPropertyValue("top"));

    if(!isJuming){
        bird.style.top = birdtop + 3 + "px" ;
    }

    let obstacletop =  parseInt( getComputedStyle(obstacle).getPropertyValue("left"));

 let  holetop=  parseInt( getComputedStyle(hole).getPropertyValue("top"));

    
     if(birdtop > 480 || (obstacletop < 20 && (birdtop > holetop + 150 || birdtop< holetop))){
        alert (`Game Over . your score : ${score}`);

        bird.style.top = 100 + "px";
        obstacle.style.left = "100%";
        hole.style.left = "100%";
        score = 0;
     }
     },10);

let isJuming = false ;

document.addEventListener("click", ()=>{
    isJuming = true;
    let jampingtimer = 0;

    let jumpInterval = setInterval(function(){
 
      jampingtimer++;

      let birdtop = parseInt( getComputedStyle(bird).getPropertyValue("top"));

      if(birdtop >0 && jampingtimer <15){
        bird.style.top  = birdtop  - 5 + "px";
      }

      if (jampingtimer > 20){
        clearInterval(jumpInterval);
        isJuming = false ;
        jampingtimer = 0 ;
      }

    } ,10)
})