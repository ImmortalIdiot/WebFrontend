// 240 2 '11110000'
// 5 2 '0101'
// 240, 8 '00000360'

function log(num, base) {
    return Math.log(num) / Math.log(base);
}

function fromDecimal(number, base) {
    let minLength = Number.parseInt(Math.ceil(log(number, base)));
    let v = Math.ceil(log(minLength, base))

    const stringNumber = number.toString(base)

    return '0'.repeat(base ** v - stringNumber.length) + stringNumber;
}

const number = 150
const base = 16

// 15 -> 16

console.log(fromDecimal(number, base))
