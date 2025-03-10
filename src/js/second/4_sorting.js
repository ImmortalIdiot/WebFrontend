let matrix = [[9, 8, 7],
    [4, 5, 6],
    [3, 2, 1]]

for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
        matrix[i].sort((a, b) => b - a);
    } else {
        matrix[i].sort((a, b) => a - b);
    }
}

console.log(matrix)