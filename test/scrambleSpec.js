var expect = require('chai').expect;
var scramble = require('../lib/scramble');

describe('scramble', function() {
  it('preserves a portion in the middle of an array', function() {
    var initial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var scrambled = scramble(initial, {
      preserve: [1, 4]
    });

    for (var i = 1; i < 5; i++) {
      expect(initial[i]).to.equal(scrambled[i]);
    }
    expect(initial.length).to.equal(scrambled.length);
  });

  it('preserves a portion at the end of an array', function() {
    var initial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var scrambled = scramble(initial, {
      preserve: [5, initial.length - 1]
    });

    for (var i = 5; i < initial.length; i++) {
      expect(initial[i]).to.equal(scrambled[i]);
    }
    expect(initial.length).to.equal(scrambled.length);
  });

  it('throws an error if the range is bigger than the array', function() {
    var initial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(function() {
      scramble(initial, {
        preserve: [2, 10]
      });
    }).to.throw('Provided range must be within bounds');
  });

  it('preserves portions of strings', function() {
    var initial = 'Testing scramble is fun!';

    var scrambled = scramble(initial, {
      preserve: [4, 5]
    });

    for (var i = 4; i < 6; i++) {
      expect(initial.charAt(i)).to.equal(scrambled.charAt(i));
    }
  });

  it('attaches scramble properly', function() {
    scramble.attach();

    var initial = 'Hello World!';
    var scrambled = initial.scramble();

    expect(scrambled).to.not.equal(initial);
  })
});
