"use strict"

/**
 *  Repeat a string.
 *
 *  @param input The string to repeat.
 *  @param times The number of times to repeat.
 *
 *  @return A new repeated string.
 */
function repeat(input, times) {
  return impl.call(input, times);
}

/**
 *  Prototype implementation called with the string as the scope.
 *
 *  Note that this implementation:
 *
 *  return new Array(Math.abs(times) + 1).join(this);
 *
 *  Is very, very slow.
 *
 *  This implementation:
 *
 *  var ret = '';
 *  for(var i = 0; i < times; i++) {
 *    ret += this;
 *  }
 *  return ret;
 *
 *  Is faster than `string-repeat` but slower than `string.prototype.repeat`.
 *
 *  @param times The number of times to repeat.
 *
 *  @return A new repeated string.
 */
function impl(times) {
  // optimized loop from string.prototype.repeat
  var n = times;
  var result = '';
  var string = '' + (this || '');
  while (n) {
    if (n % 2 === 1) {
      result += string;
    }
    if (n > 1) {
      string += string;
    }
    n >>= 1;
  }
  return result;
}

repeat.impl = impl;

module.exports = repeat;
