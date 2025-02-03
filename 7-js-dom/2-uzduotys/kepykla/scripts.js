let calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', function() {
    let employeesCount = document.getElementById('employees-count').valueAsNumber;
    let emoloyeeMakesPerDay = parseInt(document.getElementById('employee-makes-per-day').value);
    let dayReservations = parseInt(document.getElementById('day-reservtions').value);

    let bakeryTotal = employeesCount * emoloyeeMakesPerDay;

    let isBakeryGonnaMakeIt = bakeryTotal >= dayReservations;
    let resultsDiv = document.getElementById('results');

    resultsDiv.innerHTML = `<p><strong>Kepykla per dieną spės pagaminti:</strong> ${bakeryTotal} kepalų.</p>`;
    resultsDiv.innerHTML += `<p><strong>Jai reikia spėti pagaminti:</strong> ${dayReservations} kepalų.</p>`
    resultsDiv.innerHTML += `<p><strong>Ar spės pagaminti?</strong> ${isBakeryGonnaMakeIt ? 'taip' : 'ne'}.</p>`
});


document.getElementById('employees-count').addEventListener('keyup', function(event) {
    let inputValue = event.target.valueAsNumber;

    if (inputValue < 0) {
        event.target.classList.add('error');
        event.target.nextElementSibling.classList.add('show');
    } else {
        event.target.classList.remove('error');
        event.target.nextElementSibling.classList.remove('show');
    }
});

document.getElementById('employee-makes-per-day').addEventListener('keyup', function(event) {
    let inputValue = event.target.valueAsNumber;

    if (inputValue < 0) {
        event.target.classList.add('error');
        event.target.nextElementSibling.classList.add('show');
    } else {
        event.target.classList.remove('error');
        event.target.nextElementSibling.classList.remove('show');
    }
});

document.getElementById('day-reservtions').addEventListener('keyup', function(event) {
    let inputValue = event.target.valueAsNumber;

    if (inputValue < 0) {
        event.target.classList.add('error');
        event.target.nextElementSibling.classList.add('show');
    } else {
        event.target.classList.remove('error');
        event.target.nextElementSibling.classList.remove('show');
    }
});


document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('employees-count').value = 0;
    document.getElementById('employee-makes-per-day').value = 0;
    document.getElementById('day-reservtions').value = 0;
    document.getElementById('results').innerHTML = '<p>Kol kas nieko nėra.</p>';
})