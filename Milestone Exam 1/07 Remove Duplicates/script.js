function removeDuplicates(cart) {

    let uniqueItems = {};
    let newCart = [];
    for (let item of cart) {
        if (!uniqueItems[item]) {
            uniqueItems[item] = true;
            newCart.push(item);
        }
    }
    
    return newCart;
}
let customerCart = ["apple", "banana", "apple", "orange", "banana", "grape"];
let newCart = removeDuplicates(customerCart);
console.log(newCart);
