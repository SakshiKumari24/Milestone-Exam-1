// Self-invoking arrow function to generate a random number between 1 and 100
const randomNumber = (() => {
    return Math.floor(Math.random() * 100) + 1;
})();

// Display the generated random number
console.log(`Random number between 1 and 100: ${randomNumber}`);

