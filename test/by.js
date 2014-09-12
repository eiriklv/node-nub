'use strict';
var test = require('tape');
var nub = require('../');

test('nub.by', function(t) {
  var xs = [ 3, 3, 1, 1, 2, 1, 2, 1 ];
  var ys = { a : 1, b : 2 };
  var zs = { a : 1, b : 2 };

  t.deepEqual(nub.by(xs, function() { return false; }), xs, 'comparator finds all elements unique');
  t.deepEqual(nub.by(xs, function() { return true; }), [3], 'comparator finds all elements the same');

  t.deepEqual(
    nub.by([ 3, 4, ys, zs, 5, 6 ], function (x, y) {
      return JSON.stringify(x) === JSON.stringify(y);
    }),
    [ 3, 4, ys, 5, 6 ],
    'comparator composed of JSON.stringify'
  );
  t.deepEqual(
    nub.by([ 1, 6, 3, 4, 5, 2, 7, 8 ], function (x, y) {
        return x % 4 === y % 4;
    }),
    [ 1, 6, 3, 4 ],
    'comparator composed of mod'
  );
  t.end();
});

test('nub.by sugar', function(t) {
  var xs = [ 3, 3, 1, 1, 2, 1, 2, 1 ];
  t.deepEqual(nub(xs, function() { return true; }), [3], 'nub should forward to nub.by if function is included');
  t.deepEqual(nub.by(function() { return true; }, xs), [3], 'arguments can be reversed');
  t.end();
});
