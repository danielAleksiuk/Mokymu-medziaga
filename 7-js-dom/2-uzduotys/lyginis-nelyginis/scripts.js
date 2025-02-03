let inputSkaicius = document.getElementById('skaicius');
let mygtukas = document.querySelector('button');
let rezultatas = document.querySelector('.rezultatai');

mygtukas.addEventListener('click', () => {
    let skaicius = inputSkaicius.valueAsNumber;

    if (skaicius % 2 === 0) {
        rezultatas.textContent = `Skaičius ${skaicius} yra lyginis!`;
        rezultatas.classList.add('lyginis');
        rezultatas.classList.remove('nelyginis');
    } else {
        rezultatas.textContent = `Skaičius ${skaicius} yra nelyginis!`;
        rezultatas.classList.add('nelyginis');
        rezultatas.classList.remove('lyginis');
    }
});