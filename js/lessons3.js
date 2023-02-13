// ЗАДАЧА 1
// Напишіть дві функції:
// letMeSeeYourName(callback) - запитує імя користувача , через prompt і викликає колбек функцію (callback)
// greet(name) - колбек, який приймає імя і логінує в консоль рядок  "Привіт" + імя

// function letMeSeeYourName(callback) {
//     const userName = prompt("enterName");
//     callback(userName);
// }
// // function greet(userName) {
// // console.log(`Привет,${userName}`)
// // }
// function greet(userName) {
//     alert(userName)
// }

// letMeSeeYourName(greet);

// ЗАДАЧА 2
// Напишіть дві функції:
// makeProduct(name, price, callback) -приймає імя та ціну товару, а також колбек.Функція створює обєкт товару,
//  добавляє йому унікальний ідентифікатор, в значення id і викликає колбек, передаючи йому створений обєкт.
// showProduct(product) - колбек приймає обєкт продукта і логінує його в консоль;
//
// debugger;

// const makeProduct = (name, price, callback) => {
//   const product = {
//     name,
//     price,
//     id: Date.now(),
//   };

//   callback(product);
// };

// const showProduct = (product) => {
//   console.log("Продукт успішно створений", product);
// };
// makeProduct("Холодильник", 10000, showProduct);

// ЗАДАЧА 3
// МАЄМО МАСИВ, ПОТРІБНО:
// 1)получити масив вчених які народились у 19ст;
// 2)порахувати загальну суму років скільки прожили вчені , і визначити середнє значення;
// 3) Відсортувати вчених по алфавіту;
// 4)відсортувати по кількості прожитих років;
// 5)відфільтрувати, хто народився в 15,16,17ст;
// 6)знайти рік народження Albert Einstein;
// 7)визначити, чи усі вчені працювали у 19ст;

// const scientists = [
//   {
//     name: "Albert",
//     surname: "Einstein",
//     born: 1879,
//     dead: 1955,
//     id: 1,
//   },
//   {
//     name: "Isaac",
//     surname: "Newton",
//     born: 1643,
//     dead: 1727,
//     id: 2,
//   },
//   {
//     name: "Galileo",
//     surname: "Galilei",
//     born: 1564,
//     dead: 1642,
//     id: 3,
//   },
//   {
//     name: "Marie",
//     surname: "Curie",
//     born: 1867,
//     dead: 1934,
//     id: 4,
//   },
//   {
//     name: "Johannes",
//     surname: "Kepler",
//     born: 1571,
//     dead: 1630,
//     id: 5,
//   },
//   {
//     name: "Nicolaus",
//     surname: "Copernicus",
//     born: 1473,
//     dead: 1543,
//     id: 6,
//   },
//   {
//     name: "Max",
//     surname: "Planck",
//     born: 1858,
//     dead: 1947,
//     id: 7,
//   },
//   {
//     name: "Katherine",
//     surname: "Blodgett",
//     born: 1898,
//     dead: 1979,
//     id: 8,
//   },
//   {
//     name: "Ada",
//     surname: "Lovelace",
//     born: 1815,
//     dead: 1852,
//     id: 9,
//   },

//   {
//     name: "Lise",
//     surname: "Meitner",
//     born: 1878,
//     dead: 1968,
//     id: 11,
//   },
//   {
//     name: "Sarah E.",
//     surname: "Goode",
//     born: 1855,
//     dead: 1905,
//     id: 10,
//   },
//   {
//     name: "Hanna",
//     surname: "Hammarström",
//     born: 1829,
//     dead: 1909,
//     id: 12,
//   },
// ];


// 1)получити масив вчених які народились у 19ст;
// const centure = scientists.filter((scientist) => scientist.born >= 1800 && scientist.born < 1900).map((scientist) => `${scientist.name} ${scientist.surname}`);
// console.log(centure)

// 2)порахувати загальну суму років скільки прожили вчені , і визначити середнє значення;

// const sumYear = scientists.reduce((acc, scientist) => acc + (scientist.dead - scientist.born), 0);
// const result = sumYear / scientists.length
// console.log(sumYear);
// console.log(result);

// 3) Відсортувати вчених по алфавіту;

// const scientistAlfabet = [...scientists].sort((a, b) => a.name[0] > b.name[0] ? 1 : -1);
// console.log(scientistAlfabet)

// 4)відсортувати по кількості прожитих років;
// const scientistAlfabet = [...scientists].sort((a, b) => (a.dead - a.born) - (b.dead - b.born));
// console.log(scientistAlfabet)

// 5)відфільтрувати, хто народився в 15,16,17ст;
// const oldCentury = scientists.filter((scientist) => scientist.born >= 1400 && scientist.born < 1700);
// console.log(oldCentury);


// 6)знайти рік народження Albert Einstein;
// const einstein = scientists.find(
//   (scientist) => scientist.name === "Albert" && scientist.surname === "Einstein"
// );

// console.log(einstein);

// 7)визначити, чи усі вчені працювали у 19ст;

// const everyScientists = scientists.every(
//   (scientist) =>
//     scientist.born >= 1800 && scientists.born <= 1900 && scientist.dead >= 1800
// );
// console.log(everyScientists);

// Домашнє завдання !!!!

// ЗАДАЧА 1
// 1) Напишіть ф - ю конструктор яка створює обєкт person з такимим ключами:
// const Person = {
//   firstName,
//   lastName,
//   age,
//   gender,
//   interest,
//   bio() {
//     // виводить рядок Привіт {імя} мені {вік} років. Мені подобається {інтерес}
//   },
//   greeting() {
//     // Привіт, я {імя}
//   },
// };
// const user = new Person(
//     "Den",
//    "Dounot",
//     40,
//     "male",
//    "React",
//   );

// ЗАДАЧА 2
// Напишіть клас User для створення користувача з наступними властивостями:
// username - імя, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.
// Добавте метод getInfo(), який повертає рядок:
// User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.

// ЗАДАЧА 3
// Напиши клас Storage який створює об'єкти керувати складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.
// Добавте методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар та додає його до поточних.
// removeItem(item) - отримає товар і, якщо він є, видаляє його з поточних.

// const items = new Storage(["Виноград", "Банани", "Кокоси", "Ківі"]);
// items.addItem("Манго");
// items.removeItem("Ківі")



// ЗАДАЧА 5
// Виконати сортування масиву назв моніторів в алфавітному та зворотному алфавітному порядку.
// const items = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ"];


// const items = ["SAMSUNG", "LG", "ASUS", "DELL", "BENQ"];

// const monitorAB = [...items].sort((a, b) => a.localeCompare(b));

// console.log(monitorAB);

// const monitorBA = [...items].sort((a, b) => b.localeCompare(a));

// console.log(monitorBA)


// ЗАДАЧА 2
// Напишіть клас User для створення користувача з наступними властивостями:
// username - імя, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.
// Добавте метод getInfo(), який повертає рядок:
// User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.


// class User {
//   userName = 'Vitalii';
//   age = 33;
//   numberOfPosts = 10;

//   getInfo() {
//     return `User ${this.userName} is ${this.age} years old and has ${this.numberOfPosts} posts`
//   };

// }

// console.log()









