'use strict';

(function() {
  function scramble(input, opts) {
    var objectType = Object.prototype.toString.call(input);

    if (objectType == '[object Array]') {
      return main(input, opts);
    } else if (objectType == '[object String]') {
      input = input.split('');
      return main(input, opts).join('');
    }
  }

  function main(array, opts) {
    // For now assume all inputs are arrays
    var index = array.length - 1;

    while (index) {
      //Generate a random number
      var rand = Math.floor((index + 1) * Math.random());

      //Swap
      var temp = array[rand];
      array[rand] = array[index];
      array[index] = temp;

      //Decrement index
      index -= 1;
    }

    return array;
  }

  function attach() {
    Array.prototype.scramble = function(opts) {
      return scramble(this, opts);
    };

    String.prototype.scramble = function(opts) {
      var input = this.split('');
      return scramble(input, opts).join('');
    }
  }

  scramble.attach = attach;

  if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = scramble;
  } else if (typeof define === 'function' && define.amd) {
    define(function() {
      return scramble;
    });
  } else {
    this.scramble = scramble;
  }
}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());
