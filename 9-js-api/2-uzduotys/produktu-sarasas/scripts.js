function addProductsIntoDiv(products) {
    let productsDiv = document.getElementById('products');
    let productCard = '';

    for (let product of products) {
        productCard += `
            <div class="product-card">
                <img src="${product.image}">
                <h4>${product.title}</h4>
                <button class="button-card">perziureti</button>
            </div>
        `
    }
   
    productsDiv.innerHTML = productCard;
}


window.addEventListener('load', () => {
    fetch('https://fakestoreapi.com/products/')
        .then(reponse => reponse.json())
        .then(data => addProductsIntoDiv(data));
});