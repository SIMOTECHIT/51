// script.js
let productList = [];

function addProduct() {
    const productName = document.getElementById('productName').value;
    const productQuantity = document.getElementById('productQuantity').value;

    if (!productName || !productQuantity || productQuantity <= 0) {
        alert('Per favore, inserisci un nome prodotto e una quantità valida.');
        return;
    }

    // Aggiungi tante voci quanti sono la quantità
    for (let i = 0; i < productQuantity; i++) {
        const product = {
            name: productName,
            quantity: 1  // Ogni voce rappresenta una singola unità
        };
        productList.push(product);
    }

    renderProductList();
    clearInputs();
}

function renderProductList() {
    const productListElement = document.getElementById('productList');
    productListElement.innerHTML = ''; // Pulisce la lista

    productList.forEach((product, index) => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - Quantità: ${product.quantity}`;

        // Pulsante per Modificare
        const modifyButton = document.createElement('button');
        modifyButton.textContent = 'Modifica';
        modifyButton.classList.add('modify');
        modifyButton.onclick = () => modifyProduct(index);

        // Pulsante per Rimuovere
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Rimuovi';
        removeButton.classList.add('remove');
        removeButton.onclick = () => removeProduct(index);

        // Aggiungi i pulsanti alla lista
        li.appendChild(modifyButton);
        li.appendChild(removeButton);
        productListElement.appendChild(li);
    });
}

function modifyProduct(index) {
    const newQuantity = prompt("Inserisci la nuova quantità:", productList[index].quantity);
    if (newQuantity !== null && !isNaN(newQuantity) && newQuantity > 0) {
        productList[index].quantity = parseInt(newQuantity);
        renderProductList();
    } else {
        alert('Quantità non valida!');
    }
}

function removeProduct(index) {
    productList.splice(index, 1);  // Rimuove il prodotto dalla lista
    renderProductList();
}

function clearInputs() {
    document.getElementById('productName').value = '';
    document.getElementById('productQuantity').value = '';
}
