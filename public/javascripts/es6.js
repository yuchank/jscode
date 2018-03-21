// const
const pizza = true;

// let
{
  let topic = 'React';
}

var div,
    container = document.getElementById('container');

for (let i = 0; i < 5; i++) {     // var i is a global variable.
  div = document.createElement('div');
  div.onclick = function () {
    alert('This is box #' + i);
  }
  container.appendChild(div);
}

// template strings
var a = 'hello';
var b = 'world';

console.log(`${a} ${b}`);

// default parameters
function favoriteActivity(name = 'Shane McConkey', activity = 'skiing') {
  console.log(`${name} loves ${activity}`);
}

var defaultPerson = {
  name: {
    first: 'Shane',
    last: 'McConkey'
  },
  favActivity: 'skiing'
};

function logActivity(p = defaultPerson) {
  console.log(`${p.name.first} loves ${p.favActivity}`);
}

// arrow functions
var _lordify = firstName => `${firstName} of Canterbury`;
var __lordify = (firstName, land) => `${firstName} of ${land}`;
var ___lordify = (firstName, land) => {
  if (!firstName) {
    throw new Error('A firstName is required to lordify');
  }
  if (!land) {
    throw new Error('A lord must have a land');
  }
  return `${firstName} of ${land}`;
};

var tahoe = {
  resorts: ['Kirkwood', 'Squaw', 'Alpine', 'Heavenly', 'Northstar'],
  print: function (delay = 1000) {
    setTimeout(() => {
      console.log(this);
      console.log(this.resorts.join(', '));    // this is window or tahoe
    }, delay);
  }
};

tahoe.print();

// destructuring assignment
var sandwich = {
  bread: 'dutch crunch',
  meat: 'tuna',
  cheese: 'swiss',
  toppings: ['lettuce', 'tomato', 'mustard']
};

var {bread, meat} = sandwich;   // to be used locally
console.log(bread, meat);       // dutch crunch tuna
bread = 'garlic';
meat = 'turkey';
console.log(bread, meat);       // garlic turkey
console.log(sandwich.bread, sandwich.meat);   // dutch crunch tuna

var _lordify_ = ({firstName}) => {
  console.log(`${firstName} of Canterbury`);
};

var regularPerson = {
  firstName: 'Bill',
  lastName: 'Wilson'
};

_lordify_(regularPerson);

var [firstReort] = ['Kirkwood', 'Squaw', 'Alpine', 'Heavenly', 'Northstar'];
console.log(firstReort);
var [,,thirdReort] = ['Kirkwood', 'Squaw', 'Alpine', 'Heavenly', 'Northstar'];
console.log(thirdReort);