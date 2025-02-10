function countFinalPrice(price, quantity) {
    return price * quantity;
}

function countFinalOrderPrice(items) {
    let sum = 0;
    items.forEach(item => {
        sum += item.finalPrice;
    })

    return sum;
}

function generateProductsHTML(products) {
    let finalHtml = '';

    products.forEach(product => {
        finalHtml += `
            <div class="row ${product.id}">
                <div class="col-6"><p> ${product.name}</p></div>
                <div class="col-2"><p> ${product.price} eur</p></div>
                <div class="col-2">
                    <p class="quantity-section">
                        <button class="remove-item">-</button>
                        <span class="quantity">${product.quantity}</span>
                        <button class="add-item">+</button>
                    </p>
                </div>
                <div class="col-2">
                    <p class="final-price-section">
                        <span class="final-price"> ${product.finalPrice} eur</span>
                        <button class="delete-item"><i class="bi bi-trash"></i></button>
                    </p>
                </div>
            </div>
        `;
    });

    return finalHtml;
}

let products = [
    {
        id: 'sim-card',
        name: 'Sim kortele',
        price: 2.00,
        quantity: 1,
        imgUrl: 'img url'
    },
    {
        id: 'phone',
        name: 'Telefonas',
        price: 1200.00,
        quantity: 1,
        imgUrl: 'img url'
    },
    {
        id: 'sd-card',
        name: 'SD kortele',
        price: 35.00,
        quantity: 2,
        imgUrl: 'img url'
    }
];
let finalOrderPrice = document.querySelector('.basket-price .price');

products = products.map(product => {
    return {
        ...product,
        finalPrice: countFinalPrice(product.price, product.quantity)
    }
});

finalOrderPrice.innerHTML = countFinalOrderPrice(products).toFixed(2) + ' eur';

document.querySelector('.product-list').innerHTML = generateProductsHTML(products);