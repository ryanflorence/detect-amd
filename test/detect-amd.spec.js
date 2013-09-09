var fs = require('fs');
var detect = require('../index');

describe('detectAmd', function() {

  it('detects no amd', function() {
    detect.fromFile(__dirname+'/cases/no-amd.js').should.eql(false);
  });

  it('parses calls to define without deps', function() {
    detect.fromFile(__dirname+'/cases/no-deps.js').should.eql({
      id: null,
      deps: [],
      hasRelativeDeps: false
    });
  });

  it('parses calls to define without relative dependency paths', function() {
    detect.fromFile(__dirname+'/cases/no-relative-paths.js').should.eql({
      id: null,
      deps: ['foo'],
      hasRelativeDeps: false
    });
  });

  it('parses calls to define with relative dependency paths', function() {
    detect.fromFile(__dirname+'/cases/relative-paths.js').should.eql({
      id: null,
      deps: ['foo', './bar'],
      hasRelativeDeps: true
    });
  });

  it('parses ids', function() {
    detect.fromFile(__dirname+'/cases/id-no-deps.js').should.eql({
      deps: [],
      id: 'foo',
      hasRelativeDeps: false
    });
  });

  it('parses ids and dependencies', function() {
    detect.fromFile(__dirname+'/cases/id-deps.js').should.eql({
      deps: ['bar'],
      id: 'foo',
      hasRelativeDeps: false
    });
  });

  it('finds define calls with no dependencies', function() {
    detect.fromFile(__dirname+'/cases/no-deps.js').should.eql({
      id: null,
      deps: [],
      hasRelativeDeps: false
    });
  });

  it('recognizes local define function declarations', function() {
    detect.fromFile(__dirname+'/cases/define-declaration.js').should.equal(false);
  });

  it('recognizes local define function expressions', function() {
    detect.fromFile(__dirname+'/cases/define-expression.js').should.equal(false);
  });

});

