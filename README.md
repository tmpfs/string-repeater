Table of Contents
=================

* [String Repeat](#string-repeat)
  * [Install](#install)
  * [Usage](#usage)
  * [Source](#source)
  * [Developer](#developer)
    * [Test](#test)
    * [Cover](#cover)
    * [Lint](#lint)
    * [Clean](#clean)
    * [Readme](#readme)

String Repeat
=============

[<img src="https://travis-ci.org/tmpfs/string-repeater.svg?v=1" alt="Build Status">](https://travis-ci.org/tmpfs/string-repeater)
[<img src="http://img.shields.io/npm/v/string-repeater.svg?v=1" alt="npm version">](https://npmjs.org/package/string-repeater)
[<img src="https://coveralls.io/repos/tmpfs/string-repeater/badge.svg?branch=master&service=github&v=2" alt="Coverage Status">](https://coveralls.io/github/tmpfs/string-repeater?branch=master).

Repeat a string.

## Install

```
npm i string-repeater --save
```

## Usage

```javascript
var repeat = require('string-repeater')
  , str = repeat('foo ', 7);
// 'foo foo foo foo foo '
```

Or if you prefer to polyfill `String.prototype`:

```javascript
var repeat = require('string-repeater')
String.prototype.repeat = String.prototype.repeat || repeat.impl;
```

## Source

```javascript
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
```

## Developer

### Test

To run the test suite:

```
npm test
```

### Cover

To generate code coverage run:

```
npm run cover
```

### Lint

Run the source tree through [jshint](http://jshint.com) and [jscs](http://jscs.info):

```
npm run lint
```

### Clean

Remove generated files:

```
npm run clean
```

### Readme

To build the readme file from the partial definitions:

```
npm run readme
```

Generated by [mdp(1)](https://github.com/tmpfs/mdp).

[jshint]: http://jshint.com
[jscs]: http://jscs.info
