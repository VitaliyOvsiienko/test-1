// ЗАДАЧА 1
// Напишіть дві функції:
// letMeSeeYourName(callback) - запитує імя користувача , через prompt і викликає колбек функцію (callback)
// greet(name) - колбек, який приймає імя і логінує в консоль рядок  "Привіт" + імя


function letMeSeeYourName(callback) {
    const userName = prompt("enterName");
    callback(userName);
}
// function greet(userName) { 
// console.log(`Привет,${userName}`) 
// }
function greet(userName) { 
    alert(userName)
}

letMeSeeYourName(greet);