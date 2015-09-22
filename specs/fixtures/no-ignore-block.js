var foo = require('foo');
var abc = 'some foo';

foo.setKey('abc', abc);

if (foo) {
  require('bar').foo(foo);
}