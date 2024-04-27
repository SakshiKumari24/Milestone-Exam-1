
let customer = {
    name: "Shivam",
    balance: 1000
};


function deposit(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
        return "Invalid amount for deposit.";
    }
    
    customer.balance += amount;
    return `${amount} deposited successfully. New balance is ${customer.balance}.`;
}


function withdraw(amount) {
    if (typeof amount !== 'number' || amount <= 0) {
        return "Invalid amount for withdrawal.";
    }
    
    if (amount > customer.balance) {
        return "Insufficient funds.";
    }
    
    customer.balance -= amount;
    return `${amount} withdrawn successfully. New balance is ${customer.balance}.`;
}


console.log(customer); 
console.log(deposit(500)); 
console.log(withdraw(200)); 
console.log(withdraw(2000)); 
console.log(deposit(-100));
console.log(withdraw("abc"));
