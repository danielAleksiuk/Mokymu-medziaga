function addProductsIntoDiv(products) {
    let productsDiv = document.getElementById('products');
    let productCard = '';

    for (let product of products) {
        productCard += `
            <div class="card">
                <img src="${product.image}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <button class="btn btn-primary">perziureti</button>
                </div>
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