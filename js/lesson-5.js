    
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

// УМОВА ЗАДАЧІ:
// Оптимізуйте роботу scroll та resize за допомогою бібліотеки lodash  підключивши скрипт 
// <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>

// function scroll(){
//     console.log('scroll');
// }

// function resize(){
//     console.log('resize');
// }

// // addEventListener('resize', resize);

// // const throttleScrole = _.throttle(scroll, 1000);

// // addEventListener('scroll', throttleScrole);

// addEventListener('scroll', _.throttle(scroll, 1000));

// addEventListener('resize', _.throttle(resize, 1000));

// УМОВА ЗАДАЧІ:
// Написати сайт на якому під час завантаження програється відео. 
// Як тільки відео пропадає з області видимості більш ніж на 50% - ставити його на паузу

// const player = document.querySelector("video");
// function stopVideo(){
// if(!player.paused) {
//     player.pause()
// } else {player.play()}
// }
// const playVideo = new IntersectionObserver(stopVideo, {threshold: 0.5
// });
// playVideo.observer(player);