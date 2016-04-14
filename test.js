'use strict';

test();

function test() {
  let foo = 'bar';
  if (true) {
    foo = 'foobar';
  }
  let bar = foo;
  console.log(bar);
}
