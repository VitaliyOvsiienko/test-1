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

const makeProduct = (name, price, callback) => {
  const product = {
    name,
    price,
    id: Date.now(),
  };

  callback(product);
};

const showProduct = (product) => {
  console.log("Продукт успішно створений", product);
};
makeProduct("Холодильник", 10000, showProduct);
