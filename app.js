// ----------------------------------------------------------------
//Exercise 1- The map() iterator method of arrays
 const nums = [13, 87, 2, 89, 12, 4, 90, 63];

 const numsTimesTwo= nums.map((num)=>(num*2))

 console.log('The New Array = ', numsTimesTwo)
// ----------------------------------------------------------------
//Exercise 2 Array destructuring
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstIngredient,secondIngredient]=pizzaToppings;
console.log(`The First ingredient = ${firstIngredient} - The Second ingredient ${secondIngredient}`);
// ----------------------------------------------------------------
//Exercise 3 Object destructuring
const car = {
  make: 'Audi',
  model: 'Q5',
};
const {make, model}= car;
console.log(`Car make is ${make} and Car model is ${model}`)
// ----------------------------------------------------------------
//Exercise 4 Applying the spread operator on arrays
const morePizzaToppings = ['Cheese', 'Sauce'];
const uncontroversialPizzaToppings= [...morePizzaToppings]
console.log(`Pizza Topping ${uncontroversialPizzaToppings}`);
// ----------------------------------------------------------------
//Exercise 5 Applying the spread operator on objects
const anotherCar = {
  make: 'Toyota',
  model: 'RAV4',
};

const myCar= {...anotherCar};
myCar.make= 'Tank';
myCar.model= '300';
console.log('First Car = ',anotherCar,'Second Car =', myCar);
// ----------------------------------------------------------------
//Exercise 6 Dynamic keys in objects
const propertyName = 'age';
const userProfile = {
  [propertyName]: 5
}

console.log('User Profile info : ', userProfile);
// ----------------------------------------------------------------
//Exercise 7 Import and Export
// completed
// ----------------------------------------------------------------
//Exercise 8 Default parameters
function writeIt(noun='cat',adjectives='orange'){
  return console.log(`The ${noun} is ${adjectives}!`)
}
writeIt();
writeIt('dog','black');
// ----------------------------------------------------------------
//Exercise 9 Ternary operator
const pizza = 'tasty';
pizza==='tasty' ? console.log('Yum!') : console.log('Yuck!');

// ----------------------------------------------------------------
//Exercise 10 Boolean gates
const localLangConfig = null
const lang= localLangConfig || 'en';
console.log(lang);

const savedUserTheme = null
const theme= savedUserTheme || 'Light'
console.log(theme)
// ----------------------------------------------------------------
//Exercise 11 Optional chaining '?'
const adventurer = {
  name: 'Alice',
};

console.log(adventurer.cat?.age);


