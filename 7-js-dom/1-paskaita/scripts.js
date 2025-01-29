console.log(document);
console.dir(document);

// let pElementHtml = document.getElementById('pirmas-paragrafas-bloke');
// console.log(pElementHtml);

// let pirmasBlokas = document.querySelector('.pirmas');
// console.log(pirmasBlokas);

// let visiBlokai = document.querySelectorAll('.pirmas');
// console.log(visiBlokai);

// let pirmasParagrafas = document.querySelector('.paragrafas');
// console.log(pirmasParagrafas);

// let pirmasParagrafasBloke = pirmasBlokas.querySelector('.paragrafas');
// console.log(pirmasParagrafasBloke);
// console.log('+++ judejimas per dom medi +++');
// let paragrafas = pirmasBlokas.querySelector('.paragrafas')

// console.log(
//     paragrafas.nextElementSibling.nextElementSibling
// );
// console.log(
//     pirmasBlokas.nextElementSibling
// );
// console.log(
//     pirmasBlokas.previousElementSibling
// );
// console.log(
//     pirmasBlokas.parentElement
// );
// console.log(
//     pirmasBlokas.parentNode
// )

// console.log('+++++++++++')


// let pirmasBlokas = document.querySelector('.pirmas');
// console.log(pirmasBlokas.innerHTML);

// setTimeout(() => {
//         // pirmasBlokas.innerHTML  
//         // pirmasBlokas.innerText = '<p>pvz</p>';
// }, 1000);
// console.log(pirmasBlokas);

// let span = document.createElement('span');
// span.textContent = 'mano pirmas spanas';

// console.log(span);

// pirmasBlokas.appendChild(span);

// let mygtukas = document.querySelector('.button');

// mygtukas.addEventListener('click', (event) => {
//     alert('mane paclickino')
// });

// mygtukas.addEventListener('mouseenter', (e) => {
//     console.log('ivyko mouse enter event')
// });

// document.addEventListener('keydown', (e) => {
//     console.log(e);
// })


// let visiBlokai = document.querySelectorAll('.paragrafas');

// console.log(visiBlokai);

// visiBlokai.forEach((elementas) => {
//     // elementas.style.color = 'red';
//     // elementas.style.backgroundColor = 'blue';
//     elementas.style.cssText = 'color: blue; font-size:20px'
//     elementas.addEventListener('mouseenter', (e) => {
//         elementas.style.color = 'red';
//     });
//     elementas.addEventListener('mouseleave', (e) => {
//         elementas.style.color = 'green';
//     });
// });
// console.log(window);


// window.addEventListener('load', () => {
//     console.log(document.readyState)
// })

// console.log(document.readyState)

// function timeFunction(e) {
//     console.log(e)
// }


let mygtukas = document.querySelector('.button');
// mygtukas.classList.replace('pvz', 'paragrafas')
// console.log(mygtukas.classList);

// mygtukas.classList.toggle('mygtukas');

// mygtukas.addEventListener('click', () => {
//     mygtukas.classList.add('button-clicked');
// })

if (mygtukas.classList.contains('pvz')) {
    console.log('pvz klase yra')
} else {
    console.log('tokios klases nera')
}