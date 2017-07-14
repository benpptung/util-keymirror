'use strict';

module.exports = function(arr, opt) {

  var keymirror = {};
  if (!Array.isArray(arr)) return keymirror;

  if (opt === true) {
    opt = {upperCase: true};
  }

  opt = opt === Object(opt) ? opt : {};
  var upperCase = opt.upperCase === true;

  arr.forEach(function(key) {
    if (key && typeof key === 'string') {
      if (upperCase) key = key.toUpperCase();
      keymirror[key] = key;
    }
  });

  return keymirror;
};