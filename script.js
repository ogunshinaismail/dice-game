const image_array = [
    {
        value:1,
        image: 'die-1.png',
    },
    {
        value:2,
        image: 'die-2.png',
    },
    {
        value:3,
        image: 'die-3.png',
    },
    {
        value:4,
        image: 'die-4.png',
    },
    {
        value:5,
        image: 'die-5.png',
    },
    {
        value:6,
        image: 'die-6.png',
    },
]

const rollDiceBtn = document.querySelector(".btn--roll")
const dice = document.querySelector('.dice')
const playerOneCurrentScore = document.querySelector("#current--0")
const playerTwoCurrentScore = document.querySelector("#current--1")
const playerOneScore = document.querySelector("#score--0")
const playerTwoScore = document.querySelector("#score--1")
const newGame = document.querySelector(".btn--new")
const holdBtn = document.querySelector(".btn--hold")
const playerOneSection = document.querySelector(".player--0")
const playerTwoSection = document.querySelector(".player--1")

let score__0 = 0
let score__1 = 0
let current_player = "player 1"


// ================== ROLL DICE BUTTON EVENT LISTENER =======================

rollDiceBtn.addEventListener("click", function() {
    const random_index = Math.floor(Math.random() * image_array.length);
     const selected_images = image_array[random_index]
     dice.src = `./img/${selected_images.image}`
 
     if(current_player === "player 1") {
        playerOneCurrentScore.innerText= selected_images.value
        if(selected_images.value == 1) {
            ChangeActivePlayer()
        } else {
            score__0 += selected_images.value
            playerOneScore.innerText = score__0
        }
     }else {
        playerTwoCurrentScore.innerText= selected_images.value
        if(selected_images.value == 1) {
            ChangeActivePlayer()
        } else {
            score__1 += selected_images.value
            playerTwoScore.innerText = score__1
        }
     }

     if(score__0 >= 100) {
        alert(`${current_player} wins`)
        window.location.reload()
     } else if (score__1 >= 100) {
        alert(`${current_player} wins`)
        window.location.reload()
     }
})


// ================== CHANGE ACTIVE PLAYER FUNCTION AND HOLD BUTTON EVENT LISTENER =======================

function ChangeActivePlayer() {
    if(current_player === "player 1") {
        current_player = "player 2"
        playerOneScore.innerText = score__0
        playerTwoSection.classList.add("player--active")
        playerOneSection.classList.remove("player--active")
    }else {
        current_player = "player 1"
        playerTwoScore.innerText = score__1
        playerOneSection.classList.add("player--active")
        playerTwoSection.classList.remove("player--active")
    }
}

holdBtn.addEventListener("click", function(){
    ChangeActivePlayer()
})


// ================== NEW GAME BUTTON EVENT LISTENER =======================

newGame.addEventListener("click", function(){
    window.location.reload()
})







