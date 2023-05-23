let playerOne= document.querySelector(".playerOne")
let playerTwo= document.querySelector(".playerTwo")
let player= document.querySelector(".player")
let playerOnebtn= document.querySelector(".playerOnebtn")
let playerTwobtn= document.querySelector(".playerTwobtn")
let error=document.querySelector(".error")
let chance=document.querySelector(".chance")
let count=3

playerOnebtn.addEventListener('click',function(){
    if(!playerOne.value){
        error.innerHTML="Kisu des na re baii!!"
    }
    else{
        if(!(playerOne.value-12)){
            error.innerHTML="Number De beta!!"
        }
        else{
            if(playerOne.value>0 && playerOne.value<10){
                playerOne.style.display="none"
                playerOnebtn.style.display="none"
                chance.style.display="inline-block"
                playerTwo.style.display="inline-block"
                playerTwobtn.style.display="inline-block"
                error.innerHTML = "Ebr Player 2 Khel"
                player.innerHTML = "Player 2"
                chance.innerHTML = `Chance: ${count}`
              }
              else{
                  error.innerHTML ="Please enter number between 1 to 9"
              }
            
        }
    }
})
playerTwobtn.addEventListener('click', function(){
    count--
    if(count>=1 || playerOne.value==playerTwo.value){
        chance.innerHTML = `Chance: ${count}`
        if(!playerTwo.value){
            error.innerHTML="Koy bar komu, kisu ekta de!!"
        }
        else{
            if(!(playerTwo.value-12)){
                error.innerHTML="Koitesi number de!"
            }
            else{
                if(playerTwo.value>0 && playerTwo.value<10){
                    if(playerTwo.value==playerOne.value){
                       player.innerHTML="player 2 Jitsos re baai!!"
                       error.innerHTML=""
                    }
                    else if(playerTwo.value<playerOne.value){
                        error.innerHTML="Kom disos re baai!!"
                    }
                    else{
                        error.innerHTML="Beshi disos re baai!!"
                    }
                  }
                  else{
                      error.innerHTML ="Please enter number between 1 to 9"
                  }
            }
        }
    }
    else if(count==0){
        player.innerHTML="player 2 Haira geli re gadhaa!!"
        error.innerHTML=""
        count=0
        chance.innerHTML = `Chance: ${count}`
    }
    else{
        console.log("game error")
    }

})