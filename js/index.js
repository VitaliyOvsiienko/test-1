//НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"//

// const name = 'Vitalii';
// const age = 33;
// const hobby = 'JavaScript';
// const message = `ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${hobby}`; 

// console.log(message); 

// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

const userName = prompt('Ваше імя');
const mail = prompt('Ваша пошта');
const telefon = prompt('Ваш телефон')
const message = `КОРИСТУВАЧ ${userName} ВИКОРИСТОВУЄ ${mail} ПОЧТУ І ${telefon} ТЕЛЕФОН `;

console.log(message);