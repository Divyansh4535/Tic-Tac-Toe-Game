console.log("first");
const music = new Audio("./tic_tac_toe/music.mp3");
const audioTurn = new Audio("./tic_tac_toe/ting.mp3");
const gameOver = new Audio("./tic_tac_toe/gameover.mp3");
let isGameOver = false;
let turn = "X";

//Function to Change the Turn
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

// Function to check win
const checkWin = () => {
  const boxText = document.querySelectorAll(".textbox");
  const win = [
    [0, 1, 2, 12, -6, 90],
    [3, 4, 5, 12 , 2, 90],
    [6, 7, 8, 12, 10, 90],
    [0, 3, 6, 4, 2, 0],
    [1, 4, 7, 12, 2, 0],
    [2, 5, 8, 20, 2, 0],
    [0, 4, 8, 13, 3, -45],
    [2, 4, 6, 13, 1, 45],
  ];

  win.forEach((e) => {
    if (
      boxText[e[0]].innerText === boxText[e[1]].innerText &&
      boxText[e[2]].innerText === boxText[e[1]].innerText &&
      boxText[e[0]].innerText !== ""
    ) {
      document.querySelector(".turn").innerText =
        boxText[e[0]].innerText + " is Won!";
      isGameOver = true;
      gameOver.play();
      document.querySelector(".imgBox").classList.remove("hidden");
      document.querySelector(".line").style.transform =
        `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".line").style.height ="85%"

    }
  });
};
//Game Logic
const boxes = document.querySelectorAll(".box");
boxes.forEach((elem) => {
  let boxText = elem.querySelector(".textbox");
  elem.addEventListener("click", (e) => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isGameOver) {
        document.querySelector(".turn").innerText = "Turn for " + turn;
      }
    }
  });
});

// reset button
document.querySelector(".btnRest").addEventListener("click", (e) => {
  let boxTexts = document.querySelectorAll(".textbox");
  Array.from(boxTexts).forEach((elem) => {
    elem.innerText = "";
  });
  turn = "X";
  isGameOver = false;
  document.querySelector(".line").style.height ="0"
  document.querySelector(".turn").innerText = "Turn for " + turn;
  document.querySelector(".imgBox").classList.add("hidden");
});
