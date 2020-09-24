function generateMatrix(numRows, numColumns) {
    let matrix = []
    let num = 1

    for (let r = 0; r < numRows; r++) {
        matrix.push([])
        for (let c = 0; c < numColumns; c++) {
            matrix[r].push(num++)
        }
    }
    return matrix
}

let matrix = generateMatrix(3, 4)
console.log(matrix[1][2]) //prints 7

/**spot checks */
/**01 print matrix*/
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j])
    }
}

/**02 get */
const get = function (matrix, rowNum, colNum) {
    return matrix[rowNum][colNum]
}

/**03 print */
function print(matrix) {

    for (let i = 0; i < matrix.length; i++) {
        let line = ""
        for (let j = 0; j < matrix[i].length; j++) {
            line += (matrix[i][j] + "\t")
        }
        console.log(line)
    }
}

function printColumn(matrix, colNum) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i][colNum])
    }
}

function printRow(matrix, rowNum) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[rowNum][i])
    }
}

function alter(rowNum, colNum, value) {
    this.matrix[rowNum][colNum] = value;
}




