var expect = require('chai').expect
  , repeat = require('../../');

describe('parser:', function() {

  it('should repeat a string', function(done) {
    var res = repeat('a', 5);
    expect(res.length).to.eql(5);
    done();
  })

  it('should repeat a string with prototype', function(done) {
    String.prototype.repeat = repeat.impl;
    var res = 'a'.repeat(5);
    expect(res.length).to.eql(5);
    done();
  })

  it('should defer to existing prototype function', function(done) {
    var res = repeat('a', 5);
    expect(res.length).to.eql(5);
    done();
  })

  it('should repeat a string zero times (empty string)', function(done) {
    delete String.prototype.repeat;
    var res = repeat('a', 0);
    expect(res).to.eql('');
    done();
  })

  it('should repeat a string negative times', function(done) {
    var res = repeat('a', -5);
    expect(res.length).to.eql(5);
    done();
  })

})
