// 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

function stringToNumber(userAge) {
    // if(typeof userAge != 'boolean' && typeof userAge != 'object' && typeof userAge != 'undefined' && userAge != ''){
    if (typeof userAge == 'string' || typeof userAge == 'number') {
        let stringNumber = Number(userAge)
        if (!isNaN(stringNumber)) {
            return stringNumber
        }
        return userAge
    }
}


function checkAgeForNumber(userAge) {
    if (typeof userAge != 'number'){
        throw new TypeError('userAge must be a number');
        }
}

function checkAge(userAge, lowAge, highAge) {
    let parsedUserAge = stringToNumber(userAge)
    checkAgeForNumber(parsedUserAge)
    if (userAge >= lowAge && userAge < highAge) {
        alert('Welcome!');
    }
    else if (userAge < lowAge) {
        alert("You don't have acess cause your age is" + ' ' + userAge + ' ' + "It's less then" + ' ' + lowAge);
    }
    else if (userAge > highAge) {
        alert('Keep calm and look Culture channel');
    }
    else {
        alert('Technical work');
    }
}
let userAge = prompt()
const lowAge = 18;
const highAge = 60;
checkAge(userAge, lowAge, highAge)