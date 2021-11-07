const choices = ['rock', 'paper', 'scissors']



document.addEventListener('DOMContentLoaded', () => {
 // Declaring variables and constants
 const rock = document.querySelector('#rock')
 const paper = document.querySelector('#paper')
 const scissors = document.querySelector('#scissors')
 

 rock.onclick = () => {
  let myChoice = choices[0]
 }

 paper.onclick = () => {
  let myChoice = choices[1]
 }

 scissors.onclick = () => {
  let myChoice = choices[2]
 }



})