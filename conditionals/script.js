// const age = 19;

// if (age < 18) {
//     console.log('Good day!' + age + 'year');
// } else {
//     console.log(`Hello ${age}`);
// }

// const age = prompt('How old are you?');
// if (age > 0 && age < 18) {
//     console.log('Hi!');
// } else if (age >= 18 && age < 130) {
//     console.log('Good day!');
// } else if (age === null) {
//     console.log('Вы отказались ввести данные');
// } else {
//     console.log('Nothing');
// }


// const userName = prompt('What is your name?');
// if (userName === "admin") {
//     console.log('GREETINGS');
// } else if (!isNaN(userName)) {
//     console.log('you shollud enter only characters');
// } else {
//     console.log(`Your name is ${userName}`);
// }



// const numberOne = +prompt('Number1');
// const numberTwo = +prompt('Number2');
// const numberThree = +prompt('Number3');

// if (numberOne > numberTwo && numberOne > numberThree) {
//     console.log(numberOne);
// } else if (numberTwo > numberOne && numberTwo > numberThree) {
//     console.log(numberTwo);
// } else {
//     console.log(numberThree);
// }



// const ageFedot = +prompt('ageFedot');
// const ageMitrofan = +prompt('ageMitrofan');

// if (isNaN(ageFedot) || isNaN(ageMitrofan)) {
//     console.log(`Not age`);
// } else if (ageFedot > ageMitrofan) {
//     console.log(`Фетод старше Митрофана на ${ageFedot - ageMitrofan} лет`);
// } else if (ageMitrofan > ageFedot) {
//     console.log(`Митрофан старше Федота на ${ageMitrofan - ageFedot} лет`);
// } else if (ageFedot === ageMitrofan) {
//     console.log(`Возраст одинаковый`);
// }


// let numberUmOne = +prompt('Введите первое число');
// let numberUmtwo = +prompt('Введите второе число');
// let numberUmnozh = +prompt('Введите результат умножения');

// const rightNum = numberUmOne * numberUmtwo;
// if (rightNum === numberUmnozh) {
//     console.log(`correct number ${rightNum}`);
// } else {
//     console.log(`correct number ${rightNum}`);
// }


// const numOne = +prompt('Введите первое число');
// const numTwo = +prompt('Введите второе число');
// const numThree = +prompt('Введите третье число');
// const numFour = +prompt('Введите четвертое число');

// let counter = 0;
// if (numOne % 2 === 0) {
//     counter++;
// }
// if (numTwo % 2 === 0) {
//     counter++;
// }
// if (numThree % 2 === 0) {
//     counter++;
// }
// if (numFour % 2 === 0) {
//     counter++;
// }
// console.log(`amount is ${counter}`)


//home
//1. 
const dayNumber = +prompt('enter the day number');
switch (dayNumber) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Incorrect day');
}

//2.
let firstPlayer = prompt('choice for first player');
let secondPlayer = prompt('choice for second player');
if (firstPlayer === 'rock' && secondPlayer === 'scissors' ||
    firstPlayer === 'scissors' && secondPlayer === 'paper' ||
    firstPlayer === 'paper' && secondPlayer === 'rock') {
    console.log('The first player is winner');
} else if (firstPlayer === secondPlayer && firstPlayer !== '' && firstPlayer !== null) {
    console.log('Ничья');
} else if (secondPlayer === 'rock' && firstPlayer === 'scissors' ||
    secondPlayer === 'scissors' && firstPlayer === 'paper' ||
    secondPlayer === 'paper' && firstPlayer === 'rock') {
    console.log('The second player is winner');
} else {
    console.log('Incorrect choice !');
}


//3.
const age = +prompt('enter your age');
console.log(age < 10 ?
    'hi!' :
    age < 20 ?
    'hello!' :
    age < 50 ?
    'good day' :
    'ALOHA!'
);