const progLang = [
    'HTML',
    'CSS',
    'JS',
    'PYTHON',
    'C',
    'JAVA'
]

var lang1 = progLang[0];
var lang2 = progLang[1];
var lang3 = progLang[2];
var lang4 = progLang[3];
console.log("Language -> " + lang1);
const [first, second, third, fifth] = progLang;
console.log(first);
console.log(second);
console.log(third);
console.log(fifth);


// Spread Operator -> (...)
const fruits = ['apple', 'banana', 'cherry', 'mango'];
const veg = ['carrot', 'brocolli', 'spinach'];
const fruitsCopy = [...fruits];
console.log("FruitsCopy: " + fruitsCopy);
// Merge the array:
const allFoods = [...fruits, ...veg];
console.log("All Foods: " + allFoods);
// Add Elements
const allFoods1 = ['mango1', ...fruits, 'pineapple'];
console.log("Combined Fruits: ", allFoods1);

const person = {
    name: 'Pranjal',
    age: 20
};
const address = {
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India'
};
console.log(person.name);
console.log(person.age);
console.log(address.city);
console.log(address.state);
const personAddress = {...person, ...address};
console.log(personAddress);
