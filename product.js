let products = [];
let id = 0;

function resetProducts() {
    products = [];
    id = 0;
}

function addProduct(name, price) {
    if (!name || !price) {
        throw new Error('One of the parameters is not defined');
    }

    if (products.some(product => product.name === name)) {
        throw new Error('This product exists');
    }

    const product = { id: id++, name, price };
    products.push(product);
    return product;
}

function removeProduct(productId) {
    const index = products.findIndex(product => product.id === productId);
    if (index === -1) {
        throw new Error('Product not found');
    }
    products.splice(index, 1);
}

function getProducts() {
    return products;
}

function getProduct(productId) {
    const product = products.find(product => product.id === productId);
    if (!product) {
        throw new Error('Product not found');
    }
    return product;
}

function updateProduct(productId, name, price) {
    const index = products.findIndex(product => product.id === productId);
    if (index === -1) {
        throw new Error('This product does not exist');
    }
    if (name !== undefined) {
        products[index].name = name;
    }
    if (price !== undefined) {
        products[index].price = price;
    }
    return products[index];
}

module.exports = {
    resetProducts,
    addProduct,
    removeProduct,
    getProducts,
    getProduct,
    updateProduct,
};
