"use strict";

var Benchmark = require('benchmark').Benchmark
  , bench = new Benchmark.Suite()
  , fs = require('fs')
  , repeat = require('../index.js')
  , stringRepeat = require('string-repeat')
  , times = parseInt(process.argv[2]) || 1024
  , benchfile = process.argv[3] || 'README.md'
  , contents = fs.readFileSync(benchfile, 'utf8')

  // has to be required here so that it is not deferred to
  // by this library
  require('string.prototype.repeat')

bench.add('string-repeater', function() {
  repeat(contents, times);
})
.add('string-repeat', function() {
  stringRepeat(contents, times);
})
.add('string.prototype.repeat', function() {
  contents.repeat(times);
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.run();
