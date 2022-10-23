const game = ()=>{
    let pscore=0;
    let cscore=0;

    //start the game 
    const startgame=()=>{
        const playbutton=document.querySelector(".intro button");
        const introscreen=document.querySelector(".intro");
        const matchscreen=document.querySelector(".match");

        playbutton.addEventListener("click",()=>{
            introscreen.classList.add("fadeout");
            matchscreen.classList.remove("fadeout");
            const audio = new Audio("./assets/sounds/clicksound.wav");
            audio.play();

        });
    }
    //playing the game 
    const playmatch = ()=>{
        const options =document.querySelectorAll(".options button");
        const playerhand=document.querySelector(".player-hand ");
        const computerhand=document.querySelector(".computer-hand ");
        const hands =document.querySelectorAll(".hands img");
        
        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
              this.style.animation = "";
            });
          });
        
        //options for computer 
        const computeroptions=["rock","paper","scissors"];
       
       
        options.forEach(option => {
            option.addEventListener("click",function(){
                const audio = new Audio("./assets/sounds/clicksound.wav");
                audio.play();
                 playerhand.src = `./assets/images/rock.png`;
                computerhand.src = `./assets/images/rock.png`;
                
                
                //computers choice 
                const computernumber=Math.floor(Math.random()*3);
                const computerchoice=computeroptions[computernumber];
                
                setTimeout(() => {
                    comparison(this.textContent,computerchoice);
                   
                
                    //update images
                    playerhand.src=`./assets/images/${this.textContent}.png`;
                    computerhand.src=`./assets/images/${computerchoice}.png`;
    
                },2000 );

                //animation
                playerhand.style.animation="shakeplayerhands 2s ease";
                computerhand.style.animation="shakecomputerhands 2s ease";
               
                
                
            })            
        });

    }
    
    const updatescore=()=>{
        const playerscore =document.querySelector(".player-score h3");
        const computerscore =document.querySelector(".computer-score h3");
        playerscore.textContent=pscore;
        computerscore.textContent=cscore;
          
        
    }
    

    //update text 
    
    const comparison = (playerchoice,computerchoice)=>{
           const winner =document.querySelector(".winner");
           
           // checking for tie
           if(playerchoice===computerchoice){
            winner.textContent="It is a tie ";
            return;
           }
           //check for rock
           if(playerchoice==="rock"){
            if(computerchoice==="paper"){
                winner.textContent="Computer Wins ";
                cscore++;
                updatescore();
                return;
            }
            else{
                winner.textContent="Player Wins ";
                pscore++;
                updatescore();
                return;
            }
           }
           //check for paper
           if(playerchoice==="paper"){
            if(computerchoice==="scissors"){
                winner.textContent="Computer Wins ";
                cscore++;
                updatescore();
               
                return;
            }
            else{
                winner.textContent="Player Wins ";
                pscore++;
                updatescore();
                // console.log(pscore);
                return;
            }
           }
           //check for scissors
           if(playerchoice==="scissors"){
            if(computerchoice==="rock"){
                winner.textContent="Computer Wins ";
                cscore++;
                updatescore();
                return;
            }
            else{
                winner.textContent="Player Wins ";
                pscore++;
                updatescore();
                return;
            }
           }
   
           

   
       

    }

   
    startgame();
    playmatch();
    
    
    
    
    
   






    



}
game();











// const stopgame =()=>{
          
//     const playerscore =document.querySelector(".player-score h3");
//     const computerscore =document.querySelector(".computer-score h3");
        
//     playerscore.textContent=pscore;
//     computerscore.textContent=cscore;
//     if (pscore=="2" || cscore=="2") {
//         onsole.log("finished");
            
//     }else{
//         console.log("Checking");
            
        

// }
//         stopgame();