let resultDisplayed = false
let playerCounter = 0
let computerCounter = 0

function getRandomChoice() {
 min = Math.ceil(0)
 max = Math.floor(2)
 return Math.floor(Math.random() * (max - min + 1)) + min
}

function showResults(text, color) {
 if (!resultDisplayed) {
  h2 = document.createElement('h2')
  h2.innerHTML = text
  document.querySelector('#results').append(h2)
  document.querySelector('h2').style.color = color
  resultDisplayed = true
 } else {
  document.querySelector('h2').innerHTML = text
  document.querySelector('h2').style.color = color
 }
}

function gameOver() {
  if (playerscore.innerHTML == 5 || computerscore.innerHTML == 5) {
    if (playerCounter > computerCounter) {
      showModal('win')
    } 
    if (computerCounter > playerCounter) {
      showModal('lose')
    }
    document.querySelector('#modal-restart').onclick = () => {
      document.querySelector('#reset').click()
      hideModal()
    }
  }
}

function showModal(result) {
  if (result == 'win') {
    document.querySelector('#modal-result').innerHTML = 'You won!'
    document.querySelector('#myModal').style.display = 'block'
    document.querySelector('#modal-content').style.border = '3px solid green'
  } else if (result == 'lose') {
    document.querySelector('#modal-result').innerHTML = 'You lose!'
    document.querySelector('#myModal').style.display = 'block'
    document.querySelector('#modal-content').style.border = '3px solid red'
  }
}

function hideModal() {
  document.querySelector('#myModal').style.display = 'none'
}

document.addEventListener('DOMContentLoaded', () => {
 // Declaring variables and constants
 const choices = ['rock', 'paper', 'scissors']
 const restart = document.querySelector('#reset')
 const rock = document.querySelector('#rock')
 const paper = document.querySelector('#paper')
 const scissors = document.querySelector('#scissors')
 const playerscore = document.querySelector('#playerscore')
 const computerscore = document.querySelector('#computerscore')
 const result = document.querySelector('#results')

 // Restart button
 restart.onclick = () => {
  playerCounter = 0
  computerCounter = 0
  playerscore.innerHTML = 0
  computerscore.innerHTML = 0
  document.querySelector('h2').innerHTML = ''
 }

 // Rock
 rock.onclick = () => {
  let myChoice = choices[0]
  let computerChoice = choices[getRandomChoice()]
  switch (computerChoice) {
   case 'rock':
    showResults("It's a tie!", 'black')
    break
   case 'paper':
    showResults('You lost! Paper beats rock.', 'red')
    computerCounter++
    computerscore.innerHTML = computerCounter
    break
   case 'scissors':
    showResults('You won! Rock beats scissors.', 'green')
    playerCounter++
    playerscore.innerHTML = playerCounter
    break
  }
  gameOver()
  // document.querySelector('#myModal').style.display = 'block'
  // showModal()
 }

 // Paper
 paper.onclick = () => {
  let myChoice = choices[1]
  let computerChoice = choices[getRandomChoice()]
  switch (computerChoice) {
   case 'rock':
    showResults('You won! Paper beats rock.', 'green')
    playerCounter++
    playerscore.innerHTML = playerCounter
    break
   case 'paper':
    showResults("It's a tie!", 'black')
    break
   case 'scissors':
    showResults('You lost! Scissors beat paper.', 'red')
    computerCounter++
    computerscore.innerHTML = computerCounter
    break
  }
  gameOver()
 }

 // Scissors
 scissors.onclick = () => {
  let myChoice = choices[2]
  let computerChoice = choices[getRandomChoice()]
  switch (computerChoice) {
   case 'rock':
    showResults('You lost! Rock beats scissors.', 'red')
    computerCounter++
    computerscore.innerHTML = computerCounter
    break
   case 'paper':
    showResults("You won! Scissors beat paper.", 'green')
    playerCounter++
    playerscore.innerHTML = playerCounter
    break
   case 'scissors':
    showResults("It's a tie!", 'black')
    break
  }
  gameOver()
 }

})