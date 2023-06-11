let display = document.querySelector(".display");
let content = document.querySelector(".content");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let h1 = Array.from(document.getElementsByTagName("h1"));
let x = "X Turn";
let o = "O Turn";
h1.map((e) => {
  e.addEventListener("click", (ele) => {
    if (display.innerHTML == x && ele.target.innerHTML == "") {
      ele.target.innerHTML = "X";
      display.innerHTML = o;
    } else if (display.innerHTML == o && ele.target.innerHTML == "") {
      ele.target.innerHTML = "O";
      display.innerHTML = x;
    }
    if (
      (one.innerHTML == "X" &&
        two.innerHTML == "X" &&
        three.innerHTML == "X") ||
      (one.innerHTML == "O" && two.innerHTML == "O" && three.innerHTML == "O")
    ) {
      one.style.backgroundColor = "green";
      two.style.backgroundColor = "green";
      three.style.backgroundColor = "green";
      display.innerHTML = `${one.innerHTML} Won !!! ...`;
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
    if (
      (four.innerHTML == "X" &&
        five.innerHTML == "X" &&
        six.innerHTML == "X") ||
      (four.innerHTML == "O" && five.innerHTML == "O" && six.innerHTML == "O")
    ) {
      four.style.backgroundColor = "green";
      five.style.backgroundColor = "green";
      six.style.backgroundColor = "green";
      display.innerHTML = `${four.innerHTML} Won !!! ...`;
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
    if (
      (seven.innerHTML == "X" &&
        eight.innerHTML == "X" &&
        nine.innerHTML == "X") ||
      (seven.innerHTML == "O" &&
        eight.innerHTML == "O" &&
        nine.innerHTML == "O")
    ) {
      seven.style.backgroundColor = "green";
      eight.style.backgroundColor = "green";
      nine.style.backgroundColor = "green";
      display.innerHTML = `${seven.innerHTML} Won !!! ...`;
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
    if (
      (three.innerHTML == "X" &&
        five.innerHTML == "X" &&
        seven.innerHTML == "X") ||
      (three.innerHTML == "O" &&
        five.innerHTML == "O" &&
        seven.innerHTML == "O")
    ) {
      three.style.backgroundColor = "green";
      five.style.backgroundColor = "green";
      seven.style.backgroundColor = "green";
      display.innerHTML = `${three.innerHTML} Won !!! ...`;
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
    if (
      (one.innerHTML == "X" &&
        five.innerHTML == "X" &&
        nine.innerHTML == "X") ||
      (one.innerHTML == "O" && five.innerHTML == "O" && nine.innerHTML == "O")
    ) {
      one.style.backgroundColor = "green";
      five.style.backgroundColor = "green";
      nine.style.backgroundColor = "green";
      display.innerHTML = `${one.innerHTML} Won !!! ...`;
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }

    if (
      (one.innerHTML == "X" &&
        four.innerHTML == "X" &&
        seven.innerHTML == "X") ||
      (one.innerHTML == "O" && four.innerHTML == "O" && seven.innerHTML == "O")
    ) {
      one.style.backgroundColor = "green";
      four.style.backgroundColor = "green";
      seven.style.backgroundColor = "green";
      display.innerHTML = `${one.innerHTML} Won !!! ...`;
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
    if (
      (two.innerHTML == "X" &&
        five.innerHTML == "X" &&
        eight.innerHTML == "X") ||
      (two.innerHTML == "O" && five.innerHTML == "O" && eight.innerHTML == "O")
    ) {
      two.style.backgroundColor = "green";
      five.style.backgroundColor = "green";
      eight.style.backgroundColor = "green";
      display.innerHTML = `${two.innerHTML} Won !!! ...`;
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
    if (
      (three.innerHTML == "X" &&
        six.innerHTML == "X" &&
        nine.innerHTML == "X") ||
      (three.innerHTML == "O" && six.innerHTML == "O" && nine.innerHTML == "O")
    ) {
      three.style.backgroundColor = "green";
      six.style.backgroundColor = "green";
      nine.style.backgroundColor = "green";
      display.innerHTML = `${three.innerHTML} Won !!! ...`;
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else if (
      one.innerHTML != "" &&
      two.innerHTML != "" &&
      three.innerHTML != "" &&
      four.innerHTML != "" &&
      five.innerHTML != "" &&
      six.innerHTML != "" &&
      seven.innerHTML != "" &&
      eight.innerHTML != "" &&
      nine.innerHTML != ""
    ) {
      display.innerHTML = "Draw !! ...";
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  });
});
