let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true ;
 const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
 ];
 let count = 0;
 boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
           box.innerText = "O";
           turnO = false;
        }
        else{
            box.innerText = "X";
           turnO = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
        if(count === 9){
            msg.innerText = "Its a Draw Match";
    msgContainer.classList.remove("hide");
        }
    });
 });
 
 const showWinner = (winner) => {
    msg.innerText = `Congratulations , The Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    count = 0;
 }
 const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val!=""&& pos2val!=""&& pos3val!=""){
        if(pos1val===pos2val && pos2val === pos3val){
             showWinner(pos1val);

        }
    }
    }
 }
 const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
 }
 
 const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
 }
const resetGame = () => {
    enableBoxes()
    msgContainer.classList.add("hide");
    turnO = true ;
}
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);