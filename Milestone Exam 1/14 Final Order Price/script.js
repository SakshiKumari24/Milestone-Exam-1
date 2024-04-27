const calculateTotalCost = (cart) => {
    const totalCost = cart.reduce((acc, item) => {
        return acc + (item.unitPrice * item.quantity);
    }, 0);

    return totalCost;
}
const cart = [
    { unitPrice: 10.00, quantity: 2 },
    { unitPrice: 5.50, quantity: 3 },
    { unitPrice: 3.00, quantity: 1 }
];

const totalCost = calculateTotalCost(cart);
console.log(`Total cost of items in the cart: $${totalCost.toFixed(2)}`);
