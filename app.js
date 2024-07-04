let boxes=document.querySelectorAll(".box"); 
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#newgame-btn");
let msgContainer =document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;//playerX, playerO

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

const resetgame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}; 
let count=0;
 boxes.forEach((box)=> {
    box.addEventListener("click",() =>{
        if(turnO){
            //playerO
            box.innerText ="O";
            turnO =false ;
            count++;
        } else {
            //playerX
            box.innerText ="X";
            turnO =true;
            count++;
        }
        box.disabled =true;       
        checkWinner();
       
    });

 });

 const disableBoxes =() =>{
      for(let box of boxes) {
    box.disabled =true;
     }
 };

 const enableBoxes =() =>{
    for(let box of boxes) {
  box.disabled = false;
  box.innerText ="";
   }
};

const showWinner =(winner) =>{
    msg.innerText=`congratulations,winner is ${winner} `;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner =()=> {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos3Val !="" && pos2Val !=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val ){
                showWinner(pos1Val);
               count=0;
            }
         } 
         if(count===9){
            console.log(count);
            msg.innerText= "Draw";
            msgContainer.classList.remove("hide");
            count=0;
         }
        
        
    }
    
};



newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);