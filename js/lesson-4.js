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

// const refs = {
//   priceInput: document.querySelector("#price"),
//   quantityInput: document.querySelector("#quantity"),
//   totalText: document.querySelector(".total"),
//   form: document.querySelector(".form"),
//   amount: document.querySelector(".amount"),
//   container: document.querySelector(".container"),
// };
// console.log(refs);

// function calculator(event) {
//   event.preventDefault();
//   const price = refs.priceInput.value;
//   const quantity = refs.quantityInput.value;
//   const total = price * quantity;
//   refs.totalText.textContent = total;
//   refs.amount.textContent = quantity;
// }

// window.addEventListener("DOMContentLoaded", calculator);
// refs.form.addEventListener("input", calculator)

// 2.2 ПЕРЕПИШІТЬ КОД , ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО КЛІЦІ НА КНОПКУ ,
//  ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН
//
// refs.form.addEventListener("submit", calculator);

// function amountEl() {
//   const price = refs.priceInput.value;
//   const quantity = refs.quantityInput.value;
//   refs.amount.textContent = quantity;
// }
// refs.quantityInput.addEventListener("input", amountEl);

// 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА
// ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ

// const randomRgbColor = () => {
//   const r = Math.round(Math.random() * (255 - 1) + 1);
//   const g = Math.round(Math.random() * (255 - 1) + 1);
//   const b = Math.round(Math.random() * (255 - 1) + 1);
//   return `rgb(${r},${g},${b})`;
// };

// const colorEl = randomRgbColor();
// refs.container.style.backgroundColor = colorEl;

// ЗАДАЧА 3
// 3.1 Є МАСИВ, ПОТРІБНО СТВОРИТИ РОЗМІТКУ ІЗ ТИХ КАРТОК через <ul class="js-list"></ul>
// const instruments = [{
//   id: 1,
//   img: "https://content.rozetka.com.ua/goods/images/big/13664457.jpg",
//   name: "Молоток",
//   price: 150
// },
// {
//   id: 2,
//   img: "https://machtz.com.ua/files/resized/products/dsc_2898_new.800x550.jpg",
//   name: "Перфоратор",
//   price: 3000
// },{
//   id: 3,
//   img: "https://content2.rozetka.com.ua/goods/images/big_tile/232653359.jpg",
//   name: "Рівень",
//   price: 2000
// }]
// const listEl = document.querySelector(".js-list");
// function newList(){
//  const card = instruments.map(({id,img,name,price}) => {
//   return `<li data-id = "${id}">
//   <img src = "${img}" alt = "${name}" width = "300"/>
//   <h2>${name}</h2>
//   <p>${price}</p>
//   <button class = "buy">Купити</button>
//   </li> `
//  }).join(" ");
//  listEl.insertAdjacentHTML("beforeend", card)
//  }
//  newList()

// //  3.2 ДОБАВТЕ КНОП КУ, ЧЕРЕЗ ЯКУ МИ КУПЛЯТИМЕМО ТОВАР
// function buyProduct(e){

// if (!e.target.classList.contains("buy")){
//   return
// }
// // console.log(e.target.closest("li"))
// const commonLi = e.target.closest("li")
// const id = commonLi.dataset.id
// const findEl = instruments.find(instrument => instrument.id === Number(id))
// console.log(findEl)
// }
// listEl.addEventListener("click", buyProduct)

ЗАДАЧА 4
ПОТРІБНО СТВОРИТИ Ф-ЦІЮ , ЯКА БУДЕ ШУКАТИ НАРЦИСА.ГОЛОВНА УМОВА НАРЦИСА ЗНАЮТЬ УСІ , НАРЦИС НЕ ЗНАЄ НІКОГО
// є елемент масиву , який незнає нікого
// якщо не одна така людина , то вертаємо not found
// якщо один , то перевірити , чи його знають усі люди, якщо так то вертаємо found
const people1 = [{
  name: 'Alex',
  know: ["Eva", "Jhon"],
},
{
  name: 'Ivan',
  know: ["Jhon", "Alex"],
},
{
  name: 'Eva',
  know: ["Alex", "Jhon"],
},
{
  name: 'Jhon',
  know: [],
}]

const people2 = [{
  name: 'Alex',
  know: ["Eva", "Jhon"],
},
{
  name: 'Jhon',
  know: ["Eva"],
},
{
  name: 'Eva',
  know: [],
},
{
  name: 'Ivan',
  know: ["Jhon", "Alex"],
}]

const people3 = [{
  name: 'Alex',
  know: ["Eva", "Jhon"],
},
{
  name: 'Jhon',
  know: [],
},
{
  name: 'Eva',
  know: ["Alex", "Jhon"],
},
{
  name: 'Ivan',
  know: ["Jhon", "Alex"],
}]
