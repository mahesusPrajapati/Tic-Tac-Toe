console.log("tic tac toe");
let music = new Audio("./backsong.mp3");
let audioTurn = new Audio("./collect.mp3");
let gameoversong = new Audio("./collect.mp3");
let winner = new Audio("./click.mp3");
let gameover = false;

// let vol = document.getElementById("aud");

// vol.volume = 0.2;

// console.log(music);

let turn = "X";

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + "  Won!";
      gameover = true;
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "200px";
      winner.play();
    }
  });
};

// LOgic===================================
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!gameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for  " + turn;
      }
    }
  });
});
// Reset====================================================
let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxtext");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for  " + turn;
    document
      .querySelector(".imgbox")
      .getElementsByTagName("img")[0].style.width = "0";
    winner.pause();
  });
});
