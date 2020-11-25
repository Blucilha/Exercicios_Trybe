
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const orderNumbers = (numbers) => numbers.sort((a,b) => {return a - b});
console.log(orderNumbers(oddsAndEvens));