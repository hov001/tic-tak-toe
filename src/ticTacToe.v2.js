// Create table
const tableMatrix = []

for (let i = 0; i < 3; i++) {
  const tableRow = []
  for (let j = 0; j < 3; j++) {
    tableRow.push('*')
  }
  tableMatrix.push(tableRow)
}

let isX = true

function ticTacToe(x, y) {
  const player = isX ? 'x' : 'o'
  if(tableMatrix[x][y] === '*') {
    tableMatrix[x][y] = player

    
    isX = !isX
  } else {
    return `Player ${player === 'x' ? 1 : 2} lose :(`
  }

  return `${tableMatrix.join('\n')} - Player ${player === 'x' ? 1 : 2} \n`
}

// 
console.log(ticTacToe(0, 1))
console.log(ticTacToe(2, 1))
console.log(ticTacToe(1, 0))
console.log(ticTacToe(1, 1))
console.log(ticTacToe(1, 2))
console.log(ticTacToe(1, 2))