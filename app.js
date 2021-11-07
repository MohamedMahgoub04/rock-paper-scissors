const choices = ['rock', 'paper', 'scissors']

function getRandomChoice() {
 min = Math.ceil(0)
 max = Math.floor(2)
 return Math.floor(Math.random() * (max - min + 1)) + min
}


document.addEventListener('DOMContentLoaded', () => {
 // Declaring variables and constants
 const rock = document.querySelector('#rock')
 const paper = document.querySelector('#paper')
 const scissors = document.querySelector('#scissors')
 const playerscore = document.querySelector('#playerscore')
 const computerscore = document.querySelector('#computerscore')
 const h2 = document.createElement('h2')
 const result = document.querySelector('#results')
 let playerCounter = 0
 let computerCounter = 0

 rock.onclick = () => {
  let myChoice = choices[0]
  let computerChoice = choices[getRandomChoice()]
  alert(computerChoice)
  switch (computerChoice) {
   case 'rock':
    alert('its a tie!')
    break
   case 'paper':
    alert('You lost! Paper beats rock.')
    computerCounter++
    computerscore.innerHTML = computerCounter
    break
   case 'scissors':
    alert('You won! Rock beats scissors.')
    playerCounter++
    playerscore.innerHTML = playerCounter
    break
  }
 }
  paper.onclick = () => {
   let myChoice = choices[1]
   let computerChoice = choices[getRandomChoice()]
   alert(computerChoice)
   switch (computerChoice) {
    case 'rock':
     alert('You won! Paper beats rock.')
     playerCounter++
     playerscore.innerHTML = playerCounter
     break
    case 'paper':
     alert("It's a tie!")
     break
    case 'scissors':
     alert('You lost! Scissors beat paper.')
     computerCounter++
     computerscore.innerHTML = computerCounter
     break
   }
  }
  scissors.onclick = () => {
   let myChoice = choices[2]
   let computerChoice = choices[getRandomChoice()]
   alert(computerChoice)
   switch (computerChoice) {
    case 'rock':
     alert('You lost! Rock beats scissors.')
     computerCounter++
     computerscore.innerHTML = computerCounter
     break
    case 'paper':
     alert("You won! Scissors beat paper.")
     playerCounter++
     playerscore.innerHTML = playerCounter
     break
    case 'scissors':
     alert("It's a tie!")
     break
   }
  }

  // document.addEventListener('playerCounter == 3 || computerCounter == 3', () => {
  //  alert('game ova')
  // })



})