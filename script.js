let gameContainer = document.getElementById('gameContainer');
let box = document.querySelectorAll('.box');
let turn ="X";
let gameOver = false;
let reset = document.getElementById('reset');
let darkMode = document.getElementById('dark');
let lightMode = document.getElementById('light');

darkMode.addEventListener('click',()=>{
            lightMode.style.opacity = '1';
            gameContainer.style.backgroundColor = 'black';
            darkMode.style.opacity = '0';
            gameContainer.style.color = 'white';
        });
lightMode.addEventListener('click',()=>{
            lightMode.style.opacity = '0';
            darkMode.style.opacity = '1';
            gameContainer.style.backgroundColor = "white"
            gameContainer.style.color = 'black';
})


// turn change function

const changeTurn = ()=>{
    return turn === "X"?"O":"X";
};

// winner check function

const checkWinner = ()=>{
  let boxTexts = document.getElementsByClassName('boxText');
    let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [1,4,6]
    ];
    wins.forEach(e =>{
    if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerHTML !== "")){
        document.querySelector('.info').innerHTML =  boxTexts[e[0]].innerHTML + " Won";
        gameOver = true;
    };
    })
};

// Game Logic

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click',()=>{
        if(boxText.innerHTML === ''){
            boxText.innerHTML = turn;
            turn = changeTurn();
            checkWinner();
            if(!gameOver){
            document.getElementsByClassName('info')[0].innerHTML = "turn for " + turn;
            }
            }
    });
});

// reset button eventlistener
reset.addEventListener('click', ()=>{
    let boxTexts = document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gameOver = false
    if(!gameOver){
        document.getElementsByClassName('info')[0].innerHTML = "turn for " + turn;
        }
});
