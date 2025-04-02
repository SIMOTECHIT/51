// script.js
let productList = [];

function addProduct() {
    const productName = document.getElementById('productName').value;
    const productQuantity = document.getElementById('productQuantity').value;

    if (!productName || !productQuantity) {
        alert('Per favore, inserisci un nome prodotto e una quantità.');
        return;
    }

    // Aggiungi il prodotto alla lista
    const product = {
        name: productName,
        quantity: parseInt(productQuantity)
    };

    productList.push(product);
    renderProductList();
    clearInputs();
}

function renderProductList() {
    const productListElement = document.getElementById('productList');
    productListElement.innerHTML = ''; // Pulisce la lista

    productList.forEach((product, index) => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - Quantità: ${product.quantity}`;
        productListElement.appendChild(li);
    });
}

function clearInputs() {
    document.getElementById('productName').value = '';
    document.getElementById('productQuantity').value = '';
}
