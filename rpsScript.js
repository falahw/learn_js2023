/**
 * Youtube (Clever Programmer): JavaScript Tutorial for Beginners - Full Course in 12 Hours (2022)
 * 
 * CHAPTER 11 -- Advanced Rock Paper Scissors
 */

/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

console.log('Advanced Rock-Paper-Scissor')

//GLOBAL OBJECT to be ACCESSIBLE by ANY function()
const totalScore = {playerScore: 0, computerScore: 0}

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const pilihanSuit = ['Batu', 'Gunting', 'Kertas']
  const nomorAcak = Math.floor(Math.random() * pilihanSuit.length)
  
  return pilihanSuit[nomorAcak]
}

console.log('Pilihan suit: ' + getComputerChoice())

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let skor = 1
  

  // All situations where human draws, set `score` to 0
  if (playerChoice == computerChoice) {
    skor = 0
  
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  } else if (playerChoice == 'Batu' && computerChoice == 'Gunting') {
    skor = 1
  } else if (playerChoice == 'Gunting' && computerChoice == 'Kertas') {
    skor = 1
  } else if (playerChoice == 'Kertas' && computerChoice == 'Batu') {
    skor = 1

    // Otherwise human loses (aka set score to -1)
  } else {
    skor = -1
  }
  // return score
  return skor
}

console.log('Nilai player = ' + getResult('Gunting', 'Batu'))

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')

  if (score == -1) {
    resultDiv.innerText = 'You Lose!'
  } else if (score == 0) {
    resultDiv.innerText = "It's a tie!"
  } else {
    resultDiv.innerText = 'You Won!'
  }

  handsDiv.innerText = `${playerChoice} VS ${computerChoice}`
  playerScoreDiv.innerText = `Your score: ${totalScore['playerScore']}`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log('suit pemain: ' + playerChoice) //TAKE INPUT from PLAYER CHOICE

  const computerChoice = getComputerChoice() //GENERATE CHOICE for COMPUTER PLAYER
  console.log('suit bot: ' + computerChoice)

  const nilaiPemain = getResult(playerChoice, computerChoice)
  totalScore['playerScore'] += nilaiPemain
  console.log({nilaiPemain}, totalScore) //THIS will PRINT '{nilaiPemain: x}'

  showResult(nilaiPemain, playerChoice, computerChoice) //SHOW the DOM updates
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const tombolSuit = document.querySelectorAll('.rpsButton')
  console.log('rpsButton class: ', tombolSuit)

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  //tombolSuit[0].onclick = () => console.log('tombol batu: ' + tombolSuit[0].value)
  
  // 1. loop through the buttons using a forEach loop
  tombolSuit.forEach(perTombolSuit => {
    // 2. Add a 'onclick' event listener to each button
    // 3. Call the onClickRPS function every time someone clicks
    // 4. Make sure to pass the currently selected rps button as an argument
    perTombolSuit.onclick = () => onClickRPS(perTombolSuit.value)
  }) 

  // Add a click listener to the end game button that runs the endGame() function on click
  const tombolPenutupPermainan = document.getElementById('endGameButton')
  tombolPenutupPermainan.onclick = () => endGame()
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0
  
  document.getElementById('player-score').innerText = ''
  document.getElementById('hands').innerText = ''
  document.getElementById('result').innerText = ''

  console.log('Permainan Suit di-reset')
}

playGame()