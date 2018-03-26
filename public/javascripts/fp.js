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



