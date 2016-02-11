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
  if(typeof(String.prototype.repeat) === 'function') {
    return input.repeat(times);
  }else{
    return impl.call(input, times);
  }
}

/**
 *  Prototype implementation called with the string as the scope.
 *
 *  @param times The number of times to repeat.
 *
 *  @return A new repeated string.
 */
function impl(times) {
  return new Array(Math.abs(times) + 1).join(this);
}

repeat.impl = impl;

module.exports = repeat;
