function stringToNumber(userAge){
    let stringNumber = Number(userAge)
    if(!isNaN(stringNumber)){
        return stringNumber
    }
    return userAge
}


function checkAgeForNumber(userAge){
    if(typeof userAge != 'number')
    throw new TypeError('userAge must be a number')
}

function checkAge(userAge, lowAge, highAge) {
    let parsedUserAge = stringToNumber(userAge)
    checkAgeForNumber(parsedUserAge)
    if (userAge >= lowAge && userAge < highAge) {
        console.log('Welcome!');
    }
    else if (userAge < lowAge) {
        console.log("You don't have acess cause your age is" + ' ' + userAge + ' ' + "It's less then" + ' ' + lowAge);
    }
    else if (userAge > highAge) {
        console.log('Keep calm and look Culture channel');
    }
    else {
        console.log('Technical work');
    }
}
let userAge = 21
const lowAge = 18;
const highAge = 60;
checkAge(userAge, lowAge, highAge)