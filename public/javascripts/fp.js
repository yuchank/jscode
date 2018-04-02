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

// const Header = (props) => <h1>{props.title}</h1>;

// data transformations
const schools = [
  'Yorktown',
  'Washington & Lee',
  'Wakefield'
];

console.log(schools.join(', '));  // string
const wSchools = schools.filter(school => school[0] === 'W');     // for every item in the array.
console.log(wSchools);            // sub array 

const cutSchool = (cut, list) => list.filter(school => school != cut);
console.log(cutSchool('Washington & Lee', schools).join(' * '));  // string 'Yorktown & Wakefield'
console.log(schools.join('\n'));

const highSchools = schools.map(school => `${school} High School`);
console.log(highSchools.join('\n'));
console.log(schools.join('\n'));

const _highSchools = schools.map(school => ({ name: school }));
console.log(_highSchools);  // array of objects

// change one object in an array of objects
let _schools = [
  { name: 'Yorktown' },
  { name: 'Stratford' },
  { name: 'Washington & Lee' },
  { name: 'Wakefield' }
];
const editName = (oldName, name, arr) => arr.map(
  item => item.name === oldName ? ({ ...item, name }) : item
);
let updatedSchools = editName('Stratford', 'HB Woodlawn', _schools);
console.log(updatedSchools);    // array of objects

const schools_ = {
  'Yorktown': 10,
  'Washington & Lee': 2,
  'Wakefield': 5
};
console.log(Object.keys(schools_));   // array of keys from an object

// array of objects from an object
const schoolArray = Object.keys(schools_).map(key => ({
  name: key, 
  wins: schools_[key]
}));
console.log(schoolArray);

// reduce
const ages = [21, 18, 42, 40, 64, 63, 34];
const maxAge = ages.reduce((max, v) => (v > max) ? v : max, 0);  // initial max value = 0
console.log('maxAge', maxAge);
const _maxAge = ages.reduceRight((max, v) => (v > max) ? v : max, 0);
console.log('_maxAge', _maxAge);

// array into an object
const colors = [
  {
    id: `-xekare`,
    title: `rad red`,
    rating: 3
  },
  {
    id: `-jbwsof`,
    title: `big blue`,
    rating: 2
  },
  {
    id: `-prigbj`,
    title: `grizzly grey`,
    rating: 5
  },
  {
    id: `-ryhbhsl`,
    title: `banana`,
    rating: 1
  }
];

const hashColors = colors.reduce(
  (hash, { id, title, rating }) => { 
    hash[id] = { title, rating }; 
    return hash;    // accumulate
  }, {}             // empty object, initial value
);
console.log(hashColors);    // object

// arrays into completely different arrays 
const _colors = ['red', 'red', 'green', 'blue', 'green'];
const distinctColors = _colors.reduce((distinct, color) => distinct.indexOf(color) !== -1 ? distinct : [...distinct, color], []);
console.log(distinctColors);

// higher-order functions
const invokeIf = (condition, fnTrue, fnFalse) => condition ? fnTrue() : fnFalse();
const showWelcome = _ => console.log('Welcome!!');
const showUnauthorized = _ => console.log('Unauthorized!!');
invokeIf(true, showWelcome, showUnauthorized);
invokeIf(false, showWelcome, showUnauthorized);

// currying
const userLogs = userName => message => console.log(`${userName} -> ${message}`);
const log = userLogs('grandpa23');
log('attempted to load 20 fake members');

const getFakeMembers = count => new Promise((resolves, rejects) => {
  const api = `https://api.randomuser.me/?nat=US&results=${count}`;
  const request = new XMLHttpRequest();
  request.open('GET', api);
  request.onload = () => (request.status === 200) ? resolves(JSON.parse(request.response).results) : rejects(Error(request.statusText));
  request.onerror = (err) => rejects(err);
  request.send();
});

getFakeMembers(20).then(
  members => log(`successfully loaded ${members.length} members`),
  error => log('encountered an error loading members')
);

// recursion
const countdown = (value, fn, delay = 1000) => {
  fn(value);
  return value > 0 ? setTimeout(() => countdown(value - 1, fn), delay) : value;
};

countdown(10, value => console.log(value));

var dan = {
  type: 'person',
  data: {
    gender: 'male',
    info: {
      id: 22,
      fullname: {
        first: 'Dan',
        last: 'Deacon'
      }
    }
  }
};

const deepPick = (fields, object = {}) => {
  const [first, ...remaining] = fields.split('.');
  return remaining.length > 0 ? deepPick(remaining.join('.'), object[first]) : object[first];
};

console.log(deepPick('type', dan));
console.log(deepPick('data.info.fullname.first', dan));
console.log(dan['type'], dan['data']);

// composition
// chaining
const template = "hh:mm:ss tt";
const clockTime = template.replace("hh", "03").replace("mm", "33").replace("ss", "33").replace("tt", "PM");
console.log(clockTime);
console.log(template);

const compose = (...fns) => args => fns.reduce((composed, f) => f(composed), args);