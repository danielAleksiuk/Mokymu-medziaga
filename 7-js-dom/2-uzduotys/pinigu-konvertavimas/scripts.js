let currencies = [
    {
        id: 'usd',
        name: 'doleriai',
        shortName: 'USD',
        rates: [
            {
                currencyId: 'eur',
                rate: 0.97
            },
            {
                currencyId: 'rub',
                rate: 120
            }
        ]
    },
    {
        id: 'eur',
        name: 'eurai',
        shortName: 'EUR',
        rates: [
            {
                currencyId: 'usd',
                rate: 1.02
            },
            {
                currencyId: 'rub',
                rate: 150
            }
        ]
    },
    {
        id: 'rub',
        name: 'rubliai',
        shortName: 'RUB',
        rates: [
            {
                currencyId: 'usd',
                rate: 0.08
            },
            {
                currencyId: 'eur',
                rate: 0.06
            }
        ]
    }
];


function addDataIntoDropdownName(items) {
    document.querySelector('.currency-to').innerHTML += `
        <select name="from" id="select-currency-to">
            ${
                items.map(item => {
                    return `<option value='${item.id}'>${item.name}</option>`
                }).join('')
            }
        </select> 
    `;
};

function addDataIntoDropdownShortName(items) {
    document.querySelector('.currency-from').innerHTML += `
        <select name="from" id="select-currency-from">
            ${
                items.map(item => {
                    return `<option value='${item.id}'>${item.shortName}</option>`
                }).join('')
            }
        </select> 
    `;
};

addDataIntoDropdownShortName(currencies);
addDataIntoDropdownName(currencies);


document.querySelector('.calculate').addEventListener('click', () => {
    let currencyFromValue = document.getElementById('input-from-value').value;
    let fromSelectValue = document.getElementById('select-currency-from').value;
    let toSelectValue = document.getElementById('select-currency-to').value;
    console.log(fromSelectValue)
    console.log(toSelectValue);
    console.log(currencyFromValue)
});