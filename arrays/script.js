//1

//let arr = ['john', 'david', 'aristarkh', 'mitrofan', 'evlampij', 'petya', 'olga'];


// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "petya") {
//         arr[i] = "natasha"
//     }
// }
// console.log(arr);

//2
// for (let i = 0; i < arr.length; i++) {
//     console.log(`Mrs ` + arr[i]);
// }

//3
// let arr = [65, 34, 12, 46, 93, 28, 71, 36];
//  let last = arr[0];

//  for ( let i = 1; i < arr.length;i++) {
//  if (last < arr[i]) {
//  last = arr[i];
//  } 
//  }
//  console.log(last);

//4
// let sum = 0;
// let i;

// for (i = 0; i < arr.length; i++) {
// sum += arr[i];
// }
// console.log(`average ${sum / i}`);

//5
// let arr = [];

//  for (let i = 0; arr.length < 8; i++) {
//  if (i % 2 == 0 ) {
//  arr[i] = 1;
//  } else {
//  arr[i] = 0;
//  }
//  }
//  console.log(arr);

//6
// let arr = [];
//  let n = 0;

//  for (let i = 0; arr.length < 10; i++) {
//  if (i % 2 == 1 ) {
//  arr[n] = i;
//  n++;
//  }
//  }
//  console.log(arr);

//7
// let arr = [65, 34, 12, 46, 93, 28, 71, 36];
// let num  = 0; 

//  for (let i = 0; i < arr.length; i++) {
//  if (arr[i] % 2 == 0 ) {
//  num++;
//  }
//  }
//  console.log(num);

//8
// let arr = [];

// for (let i = 0; arr.length < 8; i++) {
//     arr[i] = i ** 2;
// }
// console.log(arr);


// 1. Найти в массиве Петю и поменять его на Наташу;
// 2. Добавить каждому элементы массива "Mrs.", вывести массив в консоль;
// 3.В массиве чисел найти наибольшее, вывести его в консоль;
// 4.Найти среднее арифметическое всех элементов массива;
// 5.Создать пустой массив, с помощью цикла наполнить этот массив единицами и нулями, начиная с 1. Длина массива должна быть равна 8.
// 6.Создать пустой массив, заполнить массив нечетными числами. Длина массива должна быть 10.
// 7.Вывести на экран количество четных чисел массива arrNum;
// 8.Создать пустой массив, заполнить его элементами, где значение каждого элемента равно квадрату его номера. Длина массива должна равняться 8.


///methods
//1.1.	Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.

// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// let name = prompt('Enter the name');

// for (let i = 0; i < people1.length;) {
//   if (name === people1[i]) {
//   people2.push(name);
//   break;
//   } else {
//      i++;
//   }
// }
// console.log(people2);

//1.2.	Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.

// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// let name = prompt('Enter the name');

// for (let i = 0; i < people2.length;) {
//   if (name === people2[i]) {
//   people2.splice(i,1);
//   break;
//   } else {
//      i++;
//   }
// }
// console.log(people2);

//1.3.	Создайте массив только из тех имен, которые совпадают в обоих массивах.
// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];
// let same = [];

// for (let i = 0; i < people2.length; i++) {
//   if (people2.includes(people1[i]) == true ) {
//      same.unshift(people1[i]);
//   } 
// }
// console.log(same);

//1.4	Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.

// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];
// let same = [];

// for (let i = 0; i < people2.length; i++) {
//   if (people2.includes(people1[i]) == false ) {
//      same.unshift(people1[i]);
//   } 
// }
// console.log(same);

/////new
// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];

// for (let i = people2.length - 1; i >= 0; i--) {
//     if (people2.includes(people1[i]) == true) {
//         people1.splice(i, 1);
//     }
// }
// console.log(people1.concat(people2));

//1.5 Отсортируйте получившийся массив по алфавиту

// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];
// let same = [];

// for (let i = 0; i < people2.length; i++) {
//   if (people2.includes(people1[i]) == false ) {
//      same.unshift(people1[i]);
//   } 
// }
// same.sort();
// console.log(same);



/////new
// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];

// for (let i = people2.length - 1; i >= 0; i--) {
//     if (people2.includes(people1[i]) == true) {
//         people1.splice(i, 1);
//     }
// }
// console.log((people1.concat(people2)).sort());

//2. 2.1. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
///Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив

// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let same = [];

// console.log(same = arr.slice(2,5));

//2.2. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
//Переставить "Janett", "Franz" в начало массива

// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let same =[];
// same = arr.splice(5,2);
// console.log(same.concat(arr));

//2.3. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
//Заменить "Eddie", "Janett" на "Oleg","Valerchik"

// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// arr.splice(4,2,"Oleg","Valerchik");
// console.log(arr);

//2.4. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
//"Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")
//arr.splice(0,4,"Mitrofan","Mitrofan","Mitrofan","Mitrofan"); 

// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// arr.reverse();
// arr.fill("Mitrofan", 0, 4);
// console.log(arr);

//2.5. Даны два массива 
// ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"]
// ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"]

// взять из второго массива все имена начина с "Aristarkh" (включительно)
// и добавить их в 1ый массив (не должно получится двумерного массива)
// let arr1 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let arr2 = ["Nikodim","Evlampij","Aristarkh","Drogolub","Vitalij"];
// console.log(arr1.concat(arr2.slice(2,6)));

//3 Создайте массив из 10 чисел. Найдите и выведите на экран наименьший четный элемент массива.
// let arr = [-1, 99, 5, -33, 78, 44, -10, 1, 66, 10];
// let num = null;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0 && num > arr[i]) {
//         num = arr[i];
//     }
// }
// console.log(num);


// 4.	Создать массив из 10 чисел. Среди элементов с нечетными номерами найдите наибольший элемент массива, который делится на 3
// let arr = [-1, 33, 5, 12, 78, 101, 12, 96, 15, -99];
// let num = null;
//  for (let i = 1; i < arr.length; i++) {
//  if ( i % 2 == 1 && arr[i] % 3 == 0 && num < arr[i]) {
//   num = arr[i]; 
//  }
//  }
//  console.log(num);

// 5. Создайте массив из 10 чисел. Найдите три последовательных элемента в массиве, сумма которых максимальна

// let arr1 = [-1, 99, 5, 33, 78, 44, 12, 1, 66, 10];
// let arr2 = [];
// let sum = null;
// let last = null;
// for (let i = 0; i < arr1.length -2; i++) {
//  sum = arr1[i] + arr1[i+1] + arr1[i+2];
//  if (sum > last) {
//  last = sum;
//  arr2 = [arr1[i],arr1[i+1], arr1[i+2]];
//   }
//  }
//  console.log(arr2);