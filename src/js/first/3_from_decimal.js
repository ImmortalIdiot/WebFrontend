// 240 2 '11110000'
// 5 2 '0101'
// 240, 8 '00000360'

function fromDecimal(number, base) {
    const stringNumber = number.toString(base)

    let power = 1

    while (base ** power < stringNumber.length) {
        power++
    }

    const length = base ** power
    return stringNumber.padStart(length, '0');
}

const number = 240
const base = 8

console.log(fromDecimal(number, base))
