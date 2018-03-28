// in javascript functions are variables.
var log_ = function (message) {
  console.log(message);
};

// another type using arrow function
const _log = message => console.log(message);

// can be added to objects like variables
const obj = {
  log_(message) {
    console.log(message);
  }
};

// or after declaration
obj._log = (message) => console.log(message);

// functions in array
const messages = [
  'they can be inserted into arrays',
  message => console.log(message),
  'like variables',
  message => console.log(message)
];

messages[1](messages[0]);
messages[3](messages[2]);

// functions as arguments
const insideFn = logger => logger('they can be sent to other functions as arguments');
insideFn(message => console.log(message));

// functions as return value
var createScream = function (logger) {
  return function (message) {
    logger(`${message.toUpperCase()}!!! `);
  }
};

// or higher order function
const _createScream = logger => message => logger(`${message.toUpperCase()}!!!`);

const scream = _createScream(message => console.log(message));
scream('functions can be returned from other functions');
scream('createScream returns a function');
scream('scream invokes that returned function');

// imperative programming (명령형) how a task can be achieved? 
// requires lots of comments 
var string = 'This is the midday show with Cheryl Waters';
var urlFriendly = '';

for (let i = 0; i < string.length; i++) {
  if (string[i] === '') {
    urlFriendly += '-';
  } 
  else {
    urlFriendly += string[i];
  }
}

// declarative programming (선언형) describes what should happen
// the details of how things happen are abstracted away
var string_ = 'This is the midday show with Cheryl Waters';
var urlFriendly_ = string_.replace(/ /g, '-');

// immutability
let color_lawn = {
  title: 'lawn',
  color: '#00ff00',
  rating: 0
};

// harm the original data
function rateColor(color, rating) {
  color.rating = rating;
  return color;
}

console.log(rateColor(color_lawn, 5).rating);   // 5
console.log(color_lawn.rating);                 // 5

// without having to change the original
var _rateColor = function (color, rating) {
  return Object.assign({}, color, { rating: rating });
};
const rateColor_ = (color, rating) => ({ ...color, rating });

console.log(rateColor_(color_lawn, 4).rating);    // 4
console.log(color_lawn.rating);                   // 5

let list = [
  { title: 'Rad Red'},
  { title: 'Lawn'},
  { title: 'Party Pink'}  
];

// not immutable function
let addColor = function (title, colors) { 
  colors.push({ title: title });
  return colors;
};

console.log(addColor('Glam Green', list).length);   // 4
console.log(list.length);                           // 4

// immutable function, adds title to a copy of the original array
const _addColor = (title, array) => array.concat({ title });
const addColor_ = (title, list) => [...list, { title }];

console.log(_addColor('Glam Green', list).length);    // 5
console.log(list.length);                             // 4

// pure function takes at least one argument and always return a value or another function.
// do not cause side effects, set global variables or change anything about application state.
// treats their arguments as immutable data. 
const frederick = {
  name: 'Frederick Douglass',
  canRead: false,
  canWrite: false
};

const selfEducate = person => ({
  ...person,
  canRead: true,
  canWrite: true
});

console.log(selfEducate(frederick));  // true, true
console.log(frederick);               // false, false

const Header = (props) => <h1>{props.title}</h1>;
