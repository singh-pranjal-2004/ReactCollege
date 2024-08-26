const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(num=>num%2==0);
console.log("Even Numbers", evenNumbers);

// map
const squareNumbers = evenNumbers.map(num => num**2);
console.log("Square Numbers", squareNumbers);

// find
const greaterNumber = squareNumbers.find(num=>num>50);
console.log("Number greater than 30", greaterNumber);

// concat
const addNumber = [121, 144, 169];
const combinedArray = squareNumbers.concat(addNumber);
console.log("Combined array", combinedArray);

// array.from
// copywithin
// array.of
// entries
console.log("Entries are: ");
for (const [index, value] of combinedArray.entries())
console.log(index, vaue);

