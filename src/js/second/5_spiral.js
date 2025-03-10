function createSpiralMatrix(rows, columns) {
    const matrix = Array.from({length: rows}, () => Array(columns).fill(0));

    let counter = 1;
    let top = 0
    let bottom = rows - 1;
    let left = 0
    let right = columns - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = counter++;
        }
        top++;

        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = counter++;
        }
        right--;

        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = counter++;
        }
        bottom--;

        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = counter++;
        }
        left++;
    }

    return matrix
}

function printMatrix(matrix) {
    for (let row of matrix) {
        console.log(row.join("\t"));
    }
}

const rows = 2;
const cols = 3;
const spiralMatrix = createSpiralMatrix(rows, cols);
printMatrix(spiralMatrix);