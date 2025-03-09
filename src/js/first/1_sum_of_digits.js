// 245678 32
// 97.651 16
// -543 12

function sumOfDigits(number) {
    let s = number.toString()

    const intPart = s.split('.')[0]

    let sum = 0
    for (let i = 0; i < intPart.length; i++) {
        if (intPart[i] === '-') {
            continue
        }

        sum += parseInt(intPart.charAt(i))
    }

    return sum
}

const number = -543
console.log(sumOfDigits(number))
