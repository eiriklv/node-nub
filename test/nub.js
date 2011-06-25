var nub = require('../');
var assert = require('assert');

exports.empty = function () {
    assert.deepEqual(nub([]), []);
};

exports.already = function () {
    assert.deepEqual(nub([ 1, 2, 3 ]), [ 1, 2, 3 ]);
};

exports.dups = function () {
    assert.deepEqual(nub([ 1, 1, 2, 1, 3, 2 ]), [ 1, 2, 3 ]);
};

exports.objects = function () {
    var xs = { a : 4, b : 5 };
    var ys = { c : 6 };
    assert.deepEqual(
        nub([ 1, 1, 2, 3, xs, xs, ys, xs, 2, 7, 7, 3, 1, 5 ]),
        [ 1, 2, 3, xs, ys, 7, 5 ]
    );
};
