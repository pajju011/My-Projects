let box = document.querySelectorAll(".box");
let btn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [3, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
box.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "X";
      turnO = false;
    } else {
      box.innerText = "O";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const resetGame = () => {
  turnO = true;
  enable();
  msgcontainer.classList.add("hide");
};

const disable = () => {
  for (let b of box) {
    b.disabled = true;
  }
};

const enable = () => {
  for (let b of box) {
    b.disabled = false;
    b.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disable();
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1 = box[pattern[0]].innerText;
    let pos2 = box[pattern[1]].innerText;
    let pos3 = box[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 === pos3) {
        showWinner(pos1);
      }
    }
  }
};

newbtn.addEventListener("click", resetGame);
btn.addEventListener("click", resetGame);
