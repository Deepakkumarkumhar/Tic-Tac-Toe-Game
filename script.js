// let container =document.querySelector('.box-container');
// // container.addEventListener(click,() =>{
// //     console.log("touch kiya");
// // });
// 

let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector(".reset-btn");

let winMsg = document.querySelector(".win-msg");
let win = document.querySelector(".win");
let typeNot = document.querySelector(".type-not");
let newGame = document.querySelector(".new-game");
let newGameBtn = document.querySelector(".new-game-btn");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// 

//       let isWinner = checkWinner();

//     if (count === 9 && !isWinner) {
//       gameDraw();
//     }

//     console.log("click kiya");

  
// })
// });

// const checkWinner =()=>{
// for(let pattern of winPatterns){
//    console.log(pattern);
// }
// }


// console.log(boxes)
boxes.forEach(function(box){
  box.addEventListener("click",() => {
      if(turnO){
        box.innerText ="O";
        turnO = false;
      } else{
          box.innerText ="X";
          turnO = true;
      }
      box.disabled = true;
      checkWinner();
  });
  
});


//print msg after getting winner
 const showWinnerMsg = (winner) => {
  winMsg.innerText = `Congratulations ${winner}.`
  winMsg.classList.remove("hide");
  newGame.classList.remove("hide");
  typeNot.classList.remove("hide");
  newGameBtn.classList.remove("hide");
  
};

const checkWinner=() => {
  for(let pattern of winPatterns){
   let position1 =boxes[pattern[0]].innerText;
   let position2 =boxes[pattern[1]].innerText;
   let position3 =boxes[pattern[2]].innerText;
  
   if(position1 != "" && position2 != "" && position3 != ""){
  if(position1 === position2 && position2 === position3){
    console.log("Winner", position1);
    showWinnerMsg(position1)
    
  } 
}
}
}

// newGame.style.display="remove";
// playAgainBtn.style.display="remove";
// typeNot.style.display="remove";
function button(){
  location.reload();
document.getElementByClass("reset-btn").innerHTML += "Clicked!<br>";
}

resetBtn.addEventListener("click",button)

newGameBtn.addEventListener("click",() =>{
 location.reload()
})

// const playNewGame( => {})


