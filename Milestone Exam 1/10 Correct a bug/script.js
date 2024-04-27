function doubleCartQuantities(cart){
    for(let i=0;i<cart.length;i++){
        cart[i]*=2;
    }
    return cart;
}
const customercart=[1,2,3,4];
const updatedcart = doubleCartQuantities(customercart);
console.log("updated cart: ",updatedcart);

