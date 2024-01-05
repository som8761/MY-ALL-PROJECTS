const boxes = document.querySelectorAll('.box')
let turn_text = document.querySelector('.turn_text');
let turn = 'x';
let music = new Audio('ting.mp3');
let gameOver = false;
// som
boxes.forEach((elm)=>{
    elm.addEventListener('click',()=>{
        const boxText = elm.querySelector('.boxText');
        if(boxText.innerHTML === ''){
            boxText.innerHTML = turn;
            changeTurn();
            winTheGame(); 
            music.play();
            if(!gameOver){ // if game over is not true or if game over is false ,mane bangla kothay game ta jadi over na hoy tahle code ta run koro.
                document.querySelector(".turn_text").innerHTML = `turn for ${turn}`;
            }
        }
        
    })
})

const changeTurn = () =>{
    if(turn === 'x'){
        turn = '0';
    }
    else{
        turn = 'x';
    }
}
let winTheMatchForX = 1;
let winTheMatchForY = 1;
const winTheGame = () =>{
    const boxText = document.querySelectorAll('.boxText');
    const wins = [
        [0, 1, 2, 11, 5, 0],
        [3, 4, 5, 11, 13.8, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, 2, 15, 90],
        [1, 4, 7, 11, 15, 90],
        [2, 5, 8, 20, 15, 90],
        [0, 4, 8, 11, 12, 45],
        [2, 4, 6, 12, 15, 135]
    ];
    

    wins.map((elm)=>{
        if (
            boxText[elm[0]].innerHTML === boxText[elm[1]].innerHTML &&
            boxText[elm[2]].innerHTML === boxText[elm[1]].innerHTML &&
            boxText[elm[0]].innerHTML !== ""
          ){
            turn_text.innerHTML = `${boxText[elm[0]].innerHTML} is the Winner `; // winner.

            if(boxText[elm[0]].innerHTML === 'x'){
                console.log('x is the winner.');
                document.getElementById('winForX').innerHTML = `${boxText[elm[0]].innerHTML} : win ${winTheMatchForX++} times.`
            }else{
                console.log('0 is the winner.');
                document.getElementById('winFor0').innerHTML = `${boxText[elm[0]].innerHTML} : win ${winTheMatchForY++} times..`
            }

            document.querySelector('.info_img').getElementsByTagName('img')[0].style.width = '200px';

            gameOver = true;
            
            document.querySelector('.line').style.transform = `translate(${elm[3]}vw, ${elm[4]}vw) rotate(${elm[5]}deg)`;  // j j box 3 te milche perticularly sei 3 te box er value gulo upore dewa ache..sei value gulo ei 3,4,r 5 number index a ashe bose jabe.
            document.querySelector('.line').style.width = '30vh'; // You can adjust the width as needed

        } 
    })
}

const resetButton = document.querySelector('.resetButton');

resetButton.addEventListener('click',()=>{
    const boxText = document.querySelectorAll('.boxText')
    boxText.forEach((box)=>{
        box.innerHTML = ''
    })
    let turn = 'x';
    turn_text.innerHTML = `Turn for : ${turn}`;
    document.querySelector('.info_img').getElementsByTagName('img')[0].style.width = '0px';
    document.querySelector('.line').style.width = '0vh'
    gameOver = false;
})

