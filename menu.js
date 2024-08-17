
let container = document.querySelector('.container');

let products = [
    {
        "id": 1001,
        "name": "Yoga Pad",
        "price": 100.00,
        "image": "image/yoga.jpeg"
    },
    {
        "id": 1002,
        "name": "Dumbbell Set",
        "price": 450.00,
        "image": "image/dumbell.jpeg"
    },
    {
        "id": 1003,
        "name": "Multi-Functional Head Ties",
        "price": 79.00,
        "image": "image/headties.png"
    },
    {
        "id": 1004,
        "name": "Wrist Band",
        "price": 59.00,
        "image": "image/wristband.jpeg"
    },
    {
        "id": 1005,
        "name": "Weight-lifting Glove",
        "price": 42.00,
        "image": "image/glove.jpeg"
    },
    {
        "id": 1006,
        "name": "Stainless Steel Sport Water Bottle",
        "price": 159.00,
        "image": "image/bottle.jpeg"
    },
    {
        "id": 1007,
        "name": "Leather Weight-lifting Belt",
        "price": 199.00,
        "image": "image/tie.jpeg"
    },
    {
        "id": 1008,
        "name": "Elastic Yoga Ball",
        "price": 99.00,
        "image": "image/ball.jpeg"
    },
    {
        "id": 1009,
        "name": "Fitness Band",
        "price": 39.00,
        "image": "image/fitnessband.jpeg"
    }
];

function addDataToHTML() {
    let listProductHTML = document.querySelector('.listProduct');
    listProductHTML.innerHTML = '';

    if (products != null) {
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML =
                `<a href="#">
                    <img src="${product.image}" alt="">
                </a>
                <h2>${product.name}</h2>
                <br>
                <div class="price">PRICE : RM ${product.price}.00</div>
                <button>In Stock</button>`;

            listProductHTML.appendChild(newProduct);
        });
    }
}

// Load products when the page loads
addDataToHTML();