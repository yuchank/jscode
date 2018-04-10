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

// tagged template literals
var p = 5;
var q = 10;
function tag(strings, ...values) {
  console.log(strings[0]);
  console.log(strings[1]);
  console.log(strings[2]);
  console.log(values[0]);
  console.log(values[1]);
  return 'Bazinga!';
}
var bazinga = tag `Hello ${p + q} world ${p * q}`;
console.log(bazinga);

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

// object leteral enhancement
var name = 'Tallac';
var elevation = 9738;
var print = function () {
  console.log(`Mt. ${this.name} is ${this.elevation} feet tall`);
}

var funHike = { name, elevation, print };
funHike.print();

const skier = {
  sound: '',
  powderYell() {
    let yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell}!!!`);
  },
  speed(mph) {
    this.sound = mph;
    console.log('speed: ', mph);
  }
};

// The spread operator
// 1. combine the contents of arrays
var peaks = ['Tallac', 'Ralston', 'Rose'];
var canyons = ['Ward', 'Blackwood'];
var combine = [...peaks, ...canyons];
console.log(combine.join(', '));
var [last] = [...peaks].reverse();
console.log(last);
console.log(peaks.join(', '));

// 2. get some or the rest
var lakes = ['Donner', 'Marlette', 'Fallen Leaf', 'Cascase'];
var [first, ...rest] = lakes;
console.log(rest.join(', '));

// 3. collect function arguments
function directions(...args) {
  var [start, ...remaining] = args;
  var [finish, ...stops] = remaining.reverse();

  console.log(`drive through ${args.length} towns`);
  console.log(`start in ${start}`);
  console.log(`the destination is ${finish}`);
  console.log(`stopping ${stops.length} times in between`);
}

directions('Truckee', 'Tahoe City', 'Sunnyside', 'Homewood', 'Tahoma');

// 4. with objects
var morning = {
  breakfast: 'oatmeal',
  lunch: 'peanut butter and jelly'
};
var dinner = 'mac and cheese';

var backpackingMeals = {
  ...morning,
  dinner
};

console.log(backpackingMeals);

// promises
const getFakeMembers = count => new Promise((resolves, rejects) => {
  const api = `https://api.randomuser.me/?nat=US&results=${count}`;
  const request = new XMLHttpRequest();
  request.open('GET', api);
  request.onload = () => (request.status === 200) ? resolves(JSON.parse(request.response).results) : rejects(Error(request.statusText));
  request.onerror = (err) => rejects(err);
  request.send();
});

getFakeMembers(5).then(
  members =>console.log(members),
  err => console.error(new Error('cannot load members from randomuser.me'))
);

// class
class Vacation {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }
  print() {
    console.log(`${this.destination} will take ${this.length} days`);
  }
}

const trip = new Vacation('Santiago, Chile', 7);
trip.print();

class Expedition extends Vacation {
  constructor(destination, length, gear) {
    super(destination, length);
    this.gear = gear;
  }
  print() {
    super.print();
    console.log(`Bring your ${this.gear.join(' and your ')}`);
  }
}

const expedition = new Expedition('Mt. Whitney', 3, ['sunglasses', 'prayer flags', 'camera']);
expedition.print();

// modules
// not yet supported

// CommonJS
_print('printing a message');
_log('logging a message');