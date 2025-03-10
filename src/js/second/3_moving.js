let array = [-2, 0, 1, 2, -2];

let sum = 0;
array.forEach(it => sum += it);

let steps

if (sum >= 0) {
    steps = sum % array.length;
} else {
    steps = (array.length + (sum % array.length)) % array.length;
}

for (let i = 0; i < steps; i++) {
    array.unshift(array.pop());
}

console.log(array);
