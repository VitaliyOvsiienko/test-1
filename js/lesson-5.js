    
// 3) УМОВА
// Зробити фіксований скрол на сторінці для менюшки, тобто,
//     щоб наше меню фіксувалось зверху браузера при скролі, для
//      того потрібно порахувати висоту хедера, відстежуємо позицію скролу та 
//      додавати клас fixed - nav якщо скрол більше висоту хедера, в іншому випадку його видаляємо


// const header = document.querySelector('.header');

// console.log(header.clientHeight)
// console.log(header.clientWidth)

// const nav = document.querySelector('.nav');

// pageYOffset;
// const height = header.clientHeight;

// function fixedNav() {
//     if (pageYOffset > height) {
//         nav.classList.add('fixed-nav')
//     } 
//     nav.classList.remove('.fixed-nav')
// }
// window.addEventListener('scroll', fixedNav); 