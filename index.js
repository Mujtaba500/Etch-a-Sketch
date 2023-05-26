let container = document.getElementById('container')
// let buttonFor8 = document.querySelector('.btn1')

// buttonFor8.addEventListener('click', grid)
let color = 'black'

function grid(size) {
    let squares = container.querySelectorAll('div')
    squares.forEach(div => div.remove())

function makeRows(size) {
    for ( let i = 0; i < size; i++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridRow'
    }
}
makeRows(size)
  let rows = Array.from(document.querySelectorAll('.gridRow'))
console.log(rows.length)


function makeColumns(size) {
   for( let j = 0; j < rows.length; j++ ){
    for ( let i = 0; i < size; i++ ){
        let Col = document.createElement('div');
        Col.addEventListener('mouseover', colorSquare);
        rows[i].appendChild(Col).className = 'gridCol'
    }
}
}
makeColumns(size)
// let columns = Array.from(document.querySelectorAll('.gridCol'))
// console.log(columns)
// columns.forEach(div => {
//     div.addEventListener('mouseover', colorChange);
//     function colorChange() {
//     div.setAttribute('style', 'background-color:black;');
// }
// }
// )

 }

function colorSquare() {
   this.style.backgroundColor = color;
    
}
function colorChange(choice) {
    color = choice;
}

