let p1 = prompt("Enter the first player name");
let p2 = prompt("Enter the second player name");

document.querySelector(".turn").innerText = "Turn for X";

let cnt = 0;
let turn = "X";
let gameover = false;

let gamewin = new Audio("gamewin.wav");
let nowin = new Audio("nowin.wav");
let touch = new Audio("touch.mp3");
let background = new Audio("background.mp3");

let player1 = document.querySelector(".fp");
let player2 = document.querySelector(".sp");

player1.textContent = "First player is " + p1 + " : 'X'";
player2.textContent = "Second player is " + p2 + " : '0'";

const changeturn = () => {
  if (turn === "X") {
    turn = "0";
  } else {
    turn = "X";
  }
  return turn;
};

const ifwin = () => {
  let box = document.querySelectorAll(".box");
  let boxcontent = document.querySelectorAll(".boxcontent");
  let winarray = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
  ];
  winarray.forEach((element) => {
    if (
      boxcontent[element[0]].innerText === "X" &&
      boxcontent[element[0]].innerText === boxcontent[element[1]].innerText &&
      boxcontent[element[1]].innerText === boxcontent[element[2]].innerText
    ) {
      box[element[0]].style.background = "wheat";
      box[element[1]].style.background = "wheat";
      box[element[2]].style.background = "wheat";
      document.querySelector(".winner").innerText = "Winner is " + p1;
      gameover = true;
      document.querySelector(".turn").innerText = "";
      document
        .querySelector(".gif")
        .getElementsByTagName("img")[0].style.width = "150px";
      gamewin.play();
    } else if (
      boxcontent[element[0]].innerText === "0" &&
      boxcontent[element[0]].innerText === boxcontent[element[1]].innerText &&
      boxcontent[element[1]].innerText === boxcontent[element[2]].innerText
    ) {
      box[element[0]].style.background = "wheat";
      box[element[1]].style.background = "wheat";
      box[element[2]].style.background = "wheat";
      document.querySelector(".winner").innerText = "Winner is " + p2;
      gameover = true;
      document.querySelector(".turn").innerText = "";
      document
        .querySelector(".gif")
        .getElementsByTagName("img")[0].style.width = "150px";
      gamewin.play();
    }
  });
};

let boxes = document.querySelectorAll(".box");

Array.from(boxes).forEach((element) => {
  let boxcontent = element.querySelector(".boxcontent");
  element.addEventListener("click", () => {
    if (boxcontent.innerText === "") {
      boxcontent.innerText = turn;
      changeturn();
      touch.play();
      ifwin();
      cnt++;
      if(cnt === 9){
        nowin.play();
      }
      if (!gameover) {
        document.querySelector(".turn").textContent = "Turn for " + turn;
      }
    }
  });
});

const handleReset = () => {
  cnt=0;
    nowin.play();
  let boxcontent = document.querySelectorAll(".boxcontent");
  Array.from(boxcontent).forEach((element) => {
    element.innerText = "";
  });
  document.querySelector(".gif").getElementsByTagName("img")[0].style.width =
    "0";
    document.querySelector(".winner").innerText = '';
    let box = document.querySelectorAll(".box");
    box.forEach((element)=>{
           element.style.background = 'none';
    })
  turn = "X";
  document.querySelector(".turn").textContent = "Turn for " + turn;
};
