let redDev = document.getElementById('red')
let yellowDev = document.getElementById('yellow')
let greenDev = document.getElementById('green')


redDev.onclick = () => console.log('red')
greenDev.onclick = () => console.log('green')
yellowDev.onclick = () => console.log('yelow')


const squares = document.querySelectorAll('.colorsSquars')

const  timeClicked = {
    'red' : 0 , 
    'yellow' : 0 ,
    'green' : 0
}
squares.forEach(square => {
  square.onclick = () => {
    timeClicked[square.value] += 1
    square.innerText = timeClicked[square.value]
  }
})

