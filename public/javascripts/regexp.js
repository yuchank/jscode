
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

  // optional 
  const optional = /t?est/;   // test or est
  // one or many times
  const one_more = /t+est/;   // test, ttest, tttest ...
  // repetition
  const repetition = /a{4}/;  // aaaa
  // range for repetition
  const repetition_range = /a{4,10}/; // aaaa ~ aaaaaaaaaa
  const repetition_range2 = /a{4,}/;  // aaaa ~ 

  // var $rows = $('#table tr');
  // $('#search').keyup(function() {
  //     var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
  //         reg = RegExp(val, 'i'),
  //         text;
  //     $rows.show().filter(function() {
  //         text = $(this).text().replace(/\s+/g, ' ');
  //         return !reg.test(text);
  //     }).hide();
  // });

});