
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

});