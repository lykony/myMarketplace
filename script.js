let productsGrid = document.getElementById(id="products-grid")
let productsArray = []
let url = 'https://my-json-server.typicode.com/lykony/marketplace/products/'
let response = fetch(url)
    .then(response => response.json())
    .then(data => fillHtml(data))
    .catch(error => console.log(error))

function fillHtml(data) {
    productsGrid.innerHTML = null
    data.forEach(p => {
        productsArray.push(p);
        let pElem = document.createElement('div');
        pElem.classList.add('product');
        pElem.innerHTML = `
            <h2 class="product-name">${p.name}</h2>
            <img src="${p.photo_url}" alt="${p.name}" class="product-photo">
            <p class="product-price"><b>Price: </b>${p.price}$</p>
            <p class="product-description"><b>Description: </b>${p.description}</p>
            <a href="">Seller profile</a>
            <a href="seller.html?id=${p.author_id}">Seller profile</a>
            <button>Buy</button>
        `;
        productsGrid.append(pElem);
    })
}