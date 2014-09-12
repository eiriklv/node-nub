'use strict';
var test = require('tape');
var nub = require('../');

test('nub', function(t) {
  var f = function () {};
  var g = function () {};
  var re = /meow/;
  var xs = { a : 4, b : 5 };
  var ys = { c : 6 };
  var zs = [
    1, 2, '3', 3, 2, '2', f, f, g, re, false, false, true, false, re,
    undefined, null, undefined, 1, null, null, undefined
  ];

  t.deepEqual(nub([]), [], 'empty array should return an empty array');
  t.deepEqual(nub([ 1, 2, 3 ]), [ 1, 2, 3], 'unique array should return the same array');
  t.deepEqual(nub([ 1, 1, 2, 1, 3, 2 ]), [ 1, 2, 3 ], 'non-unique arrays should drop duplicate elements');

  t.deepEqual(
    nub([ 1, 1, 2, 3, xs, xs, ys, xs, 2, 7, 7, 3, 1, 5 ]),
    [ 1, 2, 3, xs, ys, 7, 5 ],
    'should support objects'
  );

  t.deepEqual(
    nub(zs),
    [ 1, 2, '3', 3, '2', f, g, re, false, true, undefined, null ],
    'should support arrays of mixed types'
  );
  t.deepEqual(
    nub(zs).map(function (r) { return typeof r; }),
    [
      'number', 'number', 'string', 'number', 'string', 'function',
      'function', typeof re, 'boolean', 'boolean', 'undefined', 'object'
    ],
    'arrays of mixed types should return an array of element of the correct type'
  );

  t.deepEqual(
    nub([0, 1, 2, 3, '__proto__']),
    [0, 1, 2, 3, '__proto__'],
    'this special case should work'
  );

  if (global.Symbol && (typeof new Symbol() === 'symbol')) {
    var xsym = new Symbol('x');
    var ysym = new Symbol('y');
    t.deepEqual(
      nub(xsym, ysym, xsym),
      [xsym, ysym],
      'should support Symbols'
    );
  }

  t.throws(nub.bind(null, undefined));

  t.end();
});
