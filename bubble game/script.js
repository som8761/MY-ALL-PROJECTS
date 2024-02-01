let score = 0;
let timer = 6;
let randomHitVal;

function makeBubble() {
  const bottom = document.getElementById("bottom");
  bottom.innerHTML = ""; // Clear previous bubbles.
  // let clutter = "";
  for (let i = 0; i < 157; i++) {
    const randomNumForMakeBubble = Math.floor(Math.random() * 10);
    const createCircle = document.createElement("div");
    createCircle.classList.add("bubble");
    createCircle.innerHTML = randomNumForMakeBubble;
    // clutter += createCircle;
    bottom.appendChild(createCircle);
  }
}
makeBubble();

function getTime() {
  const timerInt = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.getElementById("timerValue").innerHTML = timer;
    } else {
      clearInterval(timerInt);
      document.getElementById("bottom").innerHTML = `<h1>Game over</h1>`;
    }
  }, 1000);
}
getTime();

function getHitValue() {
  randomHitVal = Math.floor(Math.random() * 10); // ami ekhankar j random number ta ache seta use korbo nichr if else a r seta parchilam na tai ami upore akta "randomHitVal" name a variable banalam,,abar seta baire ache tai seta ami use korte parb tai ami setake use korlam niche if else a...
  document.getElementById("hitValue").innerHTML = randomHitVal;
  
  // hitTheButton(randomHitVal);
}
getHitValue();

function increaseScore() {
  score += 10;
  document.getElementById('scoreValue').innerHTML = score;
}

// using event bubbling over here.
document.getElementById("bottom").addEventListener("click", (e) => {
  console.log(Number(e.target.textContent));
  const clickedNumber = Number(e.target.textContent);
  if (randomHitVal === clickedNumber) {
    increaseScore();
    makeBubble();
    getHitValue()
  }
});
