// '11110000' 9
// '11110000' 240

function toDecimal(s) {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') { continue }

        result += Math.pow(2, 7 - i)
    }

    return result
}

const input = '11110000'
console.log(toDecimal(input))
