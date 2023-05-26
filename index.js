let container = document.getElementById('container')

function makeRows(rowNum) {
    for ( let i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridRow'
    }
}
makeRows(16)
let rows = Array.from(document.querySelectorAll('.gridRow'))

function makeColumns(colNum) {
   for( let j = 0; j < rows.length; j++ ){
    for ( let i = 0; i < colNum; i++ ){
        let Col = document.createElement('div');
        rows[i].appendChild(Col).className = 'gridCol'
    }
}
}
makeColumns(16)