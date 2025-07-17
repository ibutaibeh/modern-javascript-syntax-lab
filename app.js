// ----------------------------------------------------------------
//Exercise 2 
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstIngredient,secondIngredient]=pizzaToppings;
console.log(`The First ingredient = ${firstIngredient} - The Second ingredient ${secondIngredient}`);
// ----------------------------------------------------------------
//Exercise 3
const car = {
  make: 'Audi',
  model: 'Q5',
};
const {make, model}= car;
console.log(`Car make is ${make} and Car model is ${model}`)
// ----------------------------------------------------------------
//Exercise 4
const morePizzaToppings = ['Cheese', 'Sauce'];
const uncontroversialPizzaToppings= [...morePizzaToppings]
console.log(`Pizza Topping ${uncontroversialPizzaToppings}`);
// ----------------------------------------------------------------
//Exercise 5
const anotherCar = {
  make: 'Toyota',
  model: 'RAV4',
};

const myCar= {...anotherCar};
myCar.make= 'Tank';
myCar.model= '300';
console.log('First Car = ',anotherCar,'Second Car =', myCar);
// ----------------------------------------------------------------
//Exercise 6
const propertyName = 'age';
const userProfile = {
  [propertyName]: 5
}

console.log('User Profile info : ', userProfile);
// ----------------------------------------------------------------
//Exercise 7

// ----------------------------------------------------------------
//Exercise 8

// ----------------------------------------------------------------
//Exercise 9

// ----------------------------------------------------------------
//Exercise 10

// ----------------------------------------------------------------
//Exercise 11

