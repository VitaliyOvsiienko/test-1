//НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"//

// const name = 'Vitalii';
// const age = 33;
// const hobby = 'JavaScript';
// const message = `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${hobby}`;


// console.log(message);

// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const userName = prompt('Ваше імя');
// const mail = prompt('Ваша пошта');
// const telefon = prompt('Ваш телефон')
// const message = `КОРИСТУВАЧ ${userName} ВИКОРИСТОВУЄ ${mail} ПОЧТУ І ${telefon} ТЕЛЕФОН `;


// console.log(message);

// console.log(message);

// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ
// "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const userName = prompt('Ваше імя');
// const mail = prompt('Ваша пошта');
// const mob = prompt('Ваш телефон');
// const message = `КОРИСТУВАЧ ${userName} ВИКОРИСТОВУЄ ${mail} ПОЧТУ І ${mob} ТЕЛЕФОН`;

// console.log(message);


// ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ .
// ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ

// const mob = Number(prompt('Enter Price'));
// const TV = Number(prompt('Enter Price'));
// const playStation = +prompt('Enter Price');

// const totalPrice = mob + TV + playStation;

// console.log(totalPrice);


// ЗАДАЧА 4
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"


// const whatNumber = Number(prompt('СКІЛЬКИ МІСЯЦІВ МАЄ РІК'));

// if (whatNumber === 12) {
//     console.log('Вірно');
// } else {
//     console.log('НЕ ЗНАЄТЕ? 12');
    
// }


//ЗАДАЧА 5: НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ОПРИДІЛЯТИМЕ ЧИ ЦІЛЕ ЦЕ ЧИСЛО, ЧИ НЕ ЦІЛЕ

// const yourNumber = Number(prompt('Enter your number'));

// // if (yourNumber % 2 === 0) {
// // console.log('Ціле число')
// // } else {
// //     console.log('Не ціле число')
// // }
// const number = yourNumber % 2 === 0 ? 'Ціле число' : 'Не ціле число';
// console.log(number)


// ЗАДАЧА 6
// НАПИШІТЬ ПРОГРАМУ , ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ, І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ

// const month = Number(prompt('Місяць нарождення - числом'));
// if (month === 12 || month === 1 || month === 2) {
//     console.log('Зима')
// } else if(month >= 3 && month <= 5) {
//     console.log('Весна')
// } else if(month >= 6 && month <= 8) {
// console.log('Літо')
// } else if(month >= 9 && month <= 11) {
//     console.log('Осінь')
//  } else{
//     console.log('Error')
//  }


//ЗАДАЧА 7: НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІТ І ПАРОЛЬ, І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ, АБО ВИДАЄ ПОМИЛКУ , ЩО НЕ ВІРНИЙ ЛОГІН
// const email = 'y.lapach@gmail.com';
// const myPass = 'pass123!';

// const login = prompt('Enter your email');
// const password = prompt('Enter your password');

// if (login === email && password === myPass) {
//     console.log('Welcome')
// } else {
//     console.log('Enter correct credentials')
// }
// const loginCreds = login === email && password === myPass ? 'Welcome' : 'Enter correct credentials';
// console.log(loginCreds)


// const period = prompt('ПЕРІОД ПІДПИСКИ НА СЕРВІС');

// if (period === 'День') {
//     console.log('Ціна 1.99');
// } else if (period === 'НЕДІЛЯ') {
//     console.log ('Ціна 5.99')
// } else if (period === 'Місяць') {
//     console.log('Ціна 10.99')
// } else if (period === 'Рік') {
//     console.log ('Ціна 100.99')
// } else {
//     console.log ('Невірні дані')
// }


// switch (period) {
//     case 'День':
//         console.log('Ціна 1.99')
//         break;
    
//     case 'Неділя':
//         console.log('Ціна 5.99');
//         break;
    
//     case 'Місяць':
//         console.log('Ціна 10.99')
//         break;
    
//     case 'Рік':
//         console.log('Ціна 100.99');
//         break;
    
//     default:
//         console.log('Невірні дані')
//         break;
// }



// ЗАДАЧА 9 
// НАПИШІТЬ ЦИКЛ FOR ЯКА БУДЕ ВИВОДИТИ У КОНСОЛЬ ЧИСЛА ЗА ЗРОСТАННЯМ ВІД MIN ДО MAX, ПІСЛЯ ТОГО ЧИСЛА КРАТНІ 10 



// ЗАДАЧА 10 
// НАПИШІТЬ ПРОГРАМУ, ЯКА БУДЕ ВИЗНАЧАТИ ДОВЖИНУ ІМЕНІ , ЯКЩО ІМЯ БІЛЬШЕ 7 СИМВОЛІВ, КОНСОЛЬ ВИВОДИТЬ "Wow, you  have a REALLY long name!" , ЯКЩО МЕНШЕ 7 
// "Your name isn't very long"

