function calculateBill(dishes, numPeople) {
    const totalCost = dishes.reduce((acc, dish) => acc + dish.cost, 0);
    const billPerPerson = totalCost / numPeople;
    const billDetails = {
        totalBill: totalCost,
        billPerPerson: billPerPerson
    };
    
    return billDetails;
}
const dishes = [
    { name: 'Pasta', cost: 12.50 },
    { name: 'Salad', cost: 8.00 },
    { name: 'Drink', cost: 3.50 }
];

const numPeople = 4;

const result = calculateBill(dishes, numPeople);
console.log(result);
