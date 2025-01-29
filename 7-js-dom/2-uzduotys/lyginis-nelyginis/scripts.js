let inputSkaicius = document.getElementById('inputSkaicius');

document.querySelector('button').addEventListener('click', () => {
    console.dir(inputSkaicius);
    console.log(inputSkaicius.value);
    console.log(inputSkaicius.valueAsNumber);
    inputSkaicius.valueAsNumber = 150
});