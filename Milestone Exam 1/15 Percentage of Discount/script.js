const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    const roundedDiscountPercentage = Math.round(discountPercentage * 100) / 100;

    return roundedDiscountPercentage;
}
const originalPrice = 100.00;
const discountedPrice = 80.00;

const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(`You save ${discountPercentage}% on this product!`);
