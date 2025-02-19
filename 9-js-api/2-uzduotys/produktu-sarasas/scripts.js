function addProductsIntoDiv(products) {
    console.log(products)
}



window.addEventListener('load', () => {
    fetch('https://fakestoreapi.com/products/')
        .then(reponse => reponse.json())
        .then(data => addProductsIntoDiv(data));
});