let array = [-5, 11, 3, 0, -2]
console.log(array)

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) { array[i] -= i }
    if (array[i] < 0) { array[i] += i }
}

console.log(array)
