
const products = [
    { id: 1, name: 'apple', price: 7},
    { id: 2, name: 'phone', price: 6 },
    { id: 3, name: 'carboard', price: 5 },
];

let cart = [];
let logged = false;


function add(productId) {
    if (!logged) {
        console.log('gotta be logged in');
        return;
    }

    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        console.log(`${product.name} was added.`);
    } else {
        console.log('product not found.');
    }
}


function show() {
    console.log('available ');
    products.forEach(product => {
        console.log(`${product.id}. ${product.name}  $${product.price}`);
    });
}


function calc() {
    let total = cart.reduce((sum, product) => sum + product.price, 0);
    console.log(`total  $${total}`);
}


function simulate() {
    logged = true; 

    show();

    add(1);  
    add(3);  

    calc();  
}


simulate();





