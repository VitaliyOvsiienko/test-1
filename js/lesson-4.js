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
  container: document.querySelector(".container"),
};
console.log(refs);

function calculator(event) {
  event.preventDefault();
  const price = refs.priceInput.value;
  const quantity = refs.quantityInput.value;
  const total = price * quantity;
  refs.totalText.textContent = total;
  refs.amount.textContent = quantity;
}

window.addEventListener("DOMContentLoaded", calculator);
// refs.form.addEventListener("input", calculator)

// 2.2 ПЕРЕПИШІТЬ КОД , ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО КЛІЦІ НА КНОПКУ ,
//  ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН
//
refs.form.addEventListener("submit", calculator);

function amountEl() {
  const price = refs.priceInput.value;
  const quantity = refs.quantityInput.value;
  refs.amount.textContent = quantity;
}
refs.quantityInput.addEventListener("input", amountEl);

// 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА
// ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ

const randomRgbColor = () => {
  const r = Math.round(Math.random() * (255 - 1) + 1);
  const g = Math.round(Math.random() * (255 - 1) + 1);
  const b = Math.round(Math.random() * (255 - 1) + 1);
  return `rgb(${r},${g},${b})`;
};

const colorEl = randomRgbColor();
refs.container.style.backgroundColor = colorEl;
