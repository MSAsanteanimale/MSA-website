const MSA_CART_KEY = 'MSAcart';

export function initializeMSAcart() {
    if (!localStorage.getItem(MSA_CART_KEY)) {
        localStorage.setItem(MSA_CART_KEY, JSON.stringify([]));
    }
}

export function getMSAcart() {
    return JSON.parse(localStorage.getItem(MSA_CART_KEY)) || [];
}

export function setMSAcart(cart) {
    localStorage.setItem(MSA_CART_KEY, JSON.stringify(cart));
}

export function addToMSAcart(product) {
    const cart = getMSAcart();
    cart.push(product);
    setMSAcart(cart);
    return cart;
}

export function removeFromMSAcart(productId) {
    let cart = getMSAcart();
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        setMSAcart(cart);
    }
    return cart;
}

export function removeAllFromMSAcart(productId) {
    let cart = getMSAcart();
    cart = cart.filter(item => item.id !== productId);
    setMSAcart(cart);
    return cart;
}

