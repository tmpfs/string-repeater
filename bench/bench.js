"use strict";

var Benchmark = require('benchmark').Benchmark
  , suite = new Benchmark.Suite()
  , fs = require('fs')
  , repeat = require('../index.js')
  , stringRepeat = require('string-repeat')
  , benchfile = process.argv[2] || 'README.md'
  , contents = fs.readFileSync(benchfile, 'utf8')
  , times = 1024;

suite.add('string-repeater', function() {
  repeat(contents, times);
})

.add('string-repeat', function() {
  stringRepeat(contents, times);
})

.add('string.prototype.repeat', function() {
  require('string.prototype.repeat')
  contents.repeat(times);
})

.on('cycle', function(event) {
  console.log(String(event.target));
})
.run();
