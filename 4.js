// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
function stringToNumber(userAge){
    // if(typeof userAge != 'boolean' && typeof userAge != 'object' && typeof userAge != 'undefined' && userAge != ''){
    if(typeof userAge == 'string' || typeof userAge == 'number'){
        let stringNumber = Number(userAge)
        if(!isNaN(stringNumber)){
            return stringNumber
    }
    return userAge
}
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
let userAge = ''
const lowAge = 18;
const highAge = 60;
checkAge(userAge, lowAge, highAge)