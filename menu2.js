let container = document.querySelector('.container');

let products = [
    {
        "id": 2001,
        "name": "Whey Protein",
        "price": 289.00,
        "image": "image/protein.jpeg"
    },
    {
        "id": 2002,
        "name": "Protein Bar",
        "price": 79,
        "image": "image/proteinBar.jpeg"
    },
    {
        "id": 2003,
        "name": "Fish Oil",
        "price": 99,
        "image": "image/fishoil.jpeg"
    }
    ,
    {
        "id": 2004,
        "name": "Vitamin D3",
        "price": 289,
        "image": "image/vitaminD.webp"
    },
    {
        "id": 2005,
        "name": "Collagen",
        "price": 159,
        "image": "image/collagen.avif"
    },
    {
        "id": 2006,
        "name": "Probiotics",
        "price": 269,
        "image": "image/probiotic.jpeg"
    },
    {
        "id": 2007,
        "name": "Magnesium",
        "price": 439,
        "image": "image/magnesium.jpeg"
    },
    {
        "id": 2008,
        "name": "Creatine",
        "price": 639,
        "image": "image/creatine4.jpeg"
    },
    {
        "id": 2009,
        "name": "Vitamin C",
        "price": 529,
        "image": "image/vitaminc.webp"
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

addDataToHTML();