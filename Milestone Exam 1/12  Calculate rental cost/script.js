function calculateRentalCost(days, carType) {
    let costPerDay;

    switch(carType) {
        case 'Economy':
            costPerDay = 4000;
            break;
        case 'Midsize':
            costPerDay = 10000;
            break;
        case 'Luxury':
            costPerDay = 20000;
            break;
        default:
            console.log("Invalid car type");
            return null;
    }

    let totalCost = costPerDay * days;
    return totalCost;
}
let daysRented = 5;
let carType = 'Midsize';
let totalCost = calculateRentalCost(daysRented, carType);
console.log(`The total cost for renting a ${carType} car for ${daysRented} days is Rs. ${totalCost}/-`);
