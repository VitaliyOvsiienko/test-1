// ЗАДАЧА 1
// Створіть карточки товару з масиву використовуючи createElement];
  


// import cars from "./data/cars.js";

// const newCars = document.querySelector(".js-goods");

// const makeProductCards = ({
//     name,
//     img,
//     price,
//     description,
// }) => {
//     const carsEl = document.createElement('li');
//     const nameEl = document.createElement('h2');
//     nameEl.textContent = name;
//     const imgEl = document.createElement('img');
//     imgEl.src = img;
//     imgEl.width = 300;
//     imgEl.alt = "picture";
//     const priceEl = document.createElement('p');
//     priceEl.textContent = `Ціна; ${price} грн.`;
//     const descriptionEl = document.createElement('p');
//     descriptionEl.textContent = description;

//     carsEl.append(nameEl, imgEl, priceEl, descriptionEl);

//     return carsEl;
// }

// const elements = cars.map(makeProductCards);

// console.log(elements);

// newCars.append(...elements);

// ЗАДАЧА 2
// 2.1НАПИШІТЬ КАЛЬКУЛЯТОР, ЯКИЙ БУДЕ РАХУВАТИ ЦІНУ ШАШЛИКА, В ЗАЛЕЖНОСТІ
//  ВІД ЦІНИ ЗА КІЛОГРАМ І КІЛЬКОСТІ КУПЛЕНОГО ПРОДУКТА , І БУДЕ ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН,

const refs = {
    priceInput: document.querySelector("#price"),
    quantityInput: document.querySelector("#quantity"),
    totalText: document.querySelector(".total"),
    form: document.querySelector(".form"),
    amount: document.querySelector(".amount"),
}
console.log(refs)

function calculator() {
    const price = refs.priceInput.value;
    const quantity = refs.quantityInput.value;
    const total = price * quantity;
    refs.totalText.textContent = total;
    refs.amount.textContent = quantity;
}

window.addEventListener("DOMContentLoaded", calculator)
refs.form.addEventListener("input", calculator)