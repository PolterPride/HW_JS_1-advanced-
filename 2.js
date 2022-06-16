// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

function checkAge(userAge, lowAge, highAge) {
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
const lowAge = 18;
const highAge = 60;
checkAge(17, lowAge, highAge);
checkAge(18, lowAge, highAge);
checkAge(61, lowAge, highAge);
