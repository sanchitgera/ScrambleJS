'use strict';

(function() {

  function between(x, min, max) {
    return x >= min && x <= max;
  }

  function scramble(input, opts) {
    var objectType = Object.prototype.toString.call(input);
    var rejoin = false;
    var output;

    if (objectType == '[object String]') {
      rejoin = true;
      input = input.split('');
    }

    if (opts && opts.preserve) {
      var start = opts.preserve[0];
      var end = opts.preserve[1];

      if (between(start, 0, input.length - 1) &&
        between(end, 0, input.length - 1) &&
        end > start) {

        var array1 = input.slice(start, end + 1);
        var array2 = input.slice(0, start)
          .concat(input.slice(end + 1, input.length));
        output = scramble(array2);
        // console.log(output);
        // var args = [start, array1.length].concat(array1);
        // console.log(args);
        output.splice.apply(output, [start, 0].concat(array1));
      } else {
        throw new Error('Provided range must be within bounds');
      }
    } else {
      output = main(input, opts);
    }

    if (rejoin) {
      output = output.join('');
    }

    return output;
  }

  function main(array) {
    if (!array || !array.length) {
      return [];
    }
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
      return scramble(this, opts);
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
