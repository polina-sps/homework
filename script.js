//1

// let attemptsCounter = 0;
// let userNumber = 0;
// let average = 0;

// for (;;) {
//     userNumber = prompt('enter a number');
//     if (userNumber === null) {
//         break;
//     }
//     attemptsCounter++;
//     average += +userNumber;
// }

// if (userNumber === null && attemptsCounter === 0) {
//     alert("ircorrect number");
// } else {
//     alert(`среднее арифместическое введенных чисел ${average / attemptsCounter}`);
// }

//2
// let n = +prompt('enter a number');

// if (n > 0) {
//     for (; n >= 0; n--) {
//         console.log(n);
//     }
// } else {
//     for (; n <= 0; n++) {
//         console.log(n);
//     }
// }

//3

// let count = 1;
// let number = 0;
// let lastNumber = 0;

// metka:
//     for (; count < 6;) {
//         number = +prompt('enter a number');
//         if (lastNumber < number) {
//             lastNumber = number;
//             count++;
//         } else {
//             alert("error");
//             break metka;
//         }
//     }

//4

const n = +prompt('enter a number');
let word = "заика";

for (let i = 2; i <= n; i++) {
    word = "за" + word;
}
alert(`${word}`)