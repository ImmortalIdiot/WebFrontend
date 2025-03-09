function sayHello(gender, surname) {
    const genderLowerCase = gender.toLowerCase();
    const correctSurname = surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase();

    let prefix = "Mrs."
    if (genderLowerCase === 'male' || genderLowerCase === "man" || genderLowerCase === "m") {
        prefix = "Mr."
    }

    console.log(`Dear, ${prefix} ${correctSurname}`)
}

const gender = 'm'
const surname = 'sMiTh'

sayHello(gender, surname)
