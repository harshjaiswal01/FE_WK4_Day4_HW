let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayProducts() {
    const productContainer = document.getElementById('product-container');
    products.forEach(product => {
        const divProduct = document.createElement('div');
        divProduct.classList.add('product');

        const productName = document.createElement('h2');
        productName.textContent = product.name;
        divProduct.appendChild(productName);

        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;
        divProduct.appendChild(productPrice);

        const productDes = document.createElement('p');
        productDes.textContent = product.description;
        divProduct.appendChild(productDes);

        productContainer.appendChild(divProduct);
    })
}

window.addEventListener('load', displayProducts);
