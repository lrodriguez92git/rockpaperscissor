
let wins = 0;
let losses = 0;
let ties = 0;


const winDiv = document.querySelector ("#wins span")
const lossesDiv = document.querySelector ("#losses span")
const tiesDiv = document.querySelector ("#ties span")
const rpsButtons = document.querySelectorAll ("#rpsButtons button")

for(let i=0;i<rpsButtons.length;i++) {
  const button=rpsButtons[i]
  button.addEventListener("click",function(event){
    console.log(event.target.name)
    throwRPS(event.target.name)

  })
}


function throwRPS (RPS){
  let randNum = Math.floor(Math.random() * 3); 
    
 
  if ((RPS === 'r' && randNum === 0) ||(RPS === 'p' && randNum === 1) || (RPS === "s" && randNum === 2)) {
    ++ties;
      tiesDiv.innerText = ties;
      console.log('ties: ', ties);
      // alert("You've Tied")
  } else 
    if (((RPS === 'r') && (randNum === 2)) || ((RPS === 'p') && (randNum === 0)) || ((RPS === 's') && (randNum === 1))) {
      ++wins;
        console.log('wins: ', wins);
          winDiv.innerText = wins;
          // alert("You've Won!!")     
    } else 
    if ( ((RPS === 'r') && (randNum === 1)) || ((RPS === 's') && (randNum === 0)) || ((RPS === 'p') && (randNum === 2)) ) 
    {
       ++losses;
              console.log('loses: ', losses);
              lossesDiv.innerText = losses; 
              // alert("You've Loss.") 
    }
 }





// RPS Outcomes
// Me (rockPaperScissors)	      App (randNum)
// R 							R
// P 							P
// S 							S

// R 							P
// R 							S

// P 							R
// P 							S

// S 							R
// S 							P
