
$(function () {
  'use strict';

  var zipCode = '18902-0283';

  function isThisAZipCode(candidate) {
    return /^\d{5}-\d{4}$/.test(candidate);
  }

  if (isThisAZipCode(zipCode)) {
    console.log('Yes');
  }
  else {
    console.log('No')
  }

  // literal syntax
  const pattern = /test/;
  // construct
  const pattern2 = new RegExp('test');

  // case insensitive
  const pattern_i = /test/i;
  // matches all instances of the pattern
  const pattern_g = /test/g;
  // matches across multiple lines
  const pattern_g = /test/m;
  // sticky matching
  const pattern_g = /test/y;
  // unicode point escape (\u{...})
  const pattern_g = /test/u;

  const pattern2_i = new RegExp('test', 'i');

  // set operator (character class operator)
  const set = /[abc]/;
  // anything but
  const set2 = /[^abc]/;
  // range
  const range = /[a-m]/;

  // escape []
  const escape = /\[\]/;

  // begins
  const begins = /^test/;
  // ends
  const ends = /test$/;
  // begins and ends
  const begins_ends = /^test$/;

});