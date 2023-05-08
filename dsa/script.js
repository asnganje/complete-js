'use strict';

const restaurant = {
  names: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizerrian', 'Vegetarian', 'Organic'],
  starterMenu: ['Focacia', 'Brucheta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thur: {
      open: 12,
      close: 22,
    },

    fri: {
      open: 11,
      close: 23,
    },

    sat: {
      open: 0,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]}
        and ${this.mainMenu[mainIndex]}
        will be delivered ${address}
        at ${time}
        `);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pastor with ${ing1}, ${ing1} and ${ing1}`
    );
  },

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient)
    console.log(otherIngredients)
  }
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

// const arr = [1,2,3]
// const [first,second] = arr;

// let [main, ,secondary] = restaurant.categories
// console.log(main, secondary)

// const temp = main
// main = secondary;
// secondary = temp;
// console.log(main, secondary)

//switching variables
// [main, secondary] = [secondary, main]
// console.log(main, secondary)
// const [starter, mainCourse]=restaurant.order(2, 0)
// console.log(starter, mainCourse)

// const nested = [2,4, [5,6]]
// const [i,,j] = nested
// console.log(i,j)

//nested destructuring
// const [i,,[j,k]] = nested
// console.log(i,j,k)

// default values
// const [p=1,q=1,r=1]=[8,9]
// console.log(p,q,r)

const { names, openingHours, categories } = restaurant;

console.log(names, openingHours, categories);
const {
  names: restaurantName,
  openingHours: Hours,
  categories: tags,
} = restaurant;

console.log('Updated details are:-', restaurantName, Hours, tags);

const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// mutating variables in an object
let a = 111;
let b = 999;

// const obj = {a:23, b:7, c:14}
// ({a,b} = obj)
// console.log(a,b)

// nested objects

const {
  fri: { open: fungua, close: funga },
} = openingHours;
console.log('time ni', fungua, 'na', funga);

const arr = [3, 4, 5];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = ['Nyoki', ...restaurant.mainMenu];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//join two arrays or more
const menus = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log('joined menu is', menus);

// Iterables: arrays, strings, maps, sets not objects
const str = 'jonas';
const letters = [...str, ' ', 'S.'];
console.log('joined string is', letters);
console.log(...str);
// real world example
// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'),
// prompt('Let\'s make pasta! Ingredient 2?'), prompt('Let\'s make pasta! Ingredient 3?')]
// console.log(ingredients)

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// objects
const newRestaurant = { ...restaurant, founder: 'Guissepe' };
console.log(newRestaurant);


const [p,q,...others] = [1,2,3,4,5]
console.log(p)
console.log(q)
console.log(others)

//array
const [pizza, ,risotto, ...others1] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, others1)
// objects
const {sat, ...weekdays} = restaurant.openingHours
console.log(weekdays)
// functions
const add = function(...numbers) {
  let sum = 0
  for(let i=0; i<numbers.length; i++) {
    sum+=numbers[i]
  }
  console.log(sum)
}

const x = [23,25, 7]

add(1,2,3)
add(5,3,2,7)
add(9,8,7,6,5,3)
restaurant.orderPizza('mushrooms', 'Onions', 'Olives', 'Spinach')
restaurant.orderPizza('mushrooms')

const rest1 = {
  name: 'Capri',
  numGuests: 20
}

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossy'
}

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10

// //OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10
// console.log(rest1)
// console.log(rest2)

const airline = 'Tap air Kenya'
console.log(airline.slice(4))