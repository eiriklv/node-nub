nub
===

Return all the unique elements of an array. You can specify your own uniqueness
comparison function with `nub.by` too.

These work like haskell's
[`nub`](http://hackage.haskell.org/packages/archive/base/latest/doc/html/Data-List.html#v:nub)
and
[`nubBy`](http://hackage.haskell.org/packages/archive/base/latest/doc/html/Data-List.html#v:nubBy)
functions in
[Data.List](http://hackage.haskell.org/packages/archive/base/latest/doc/html/Data-List.html).

methods
=======

nub(xs)
-------

Return a new array with all the uniqe elements in `xs`.

Uniqueness is calculated `===` style so the types matter.

nub.by(xs, cmp)
---------------

Use `cmp(x,y)` function to compare elements instead of the default.
`cmp` should return whether the two elements are equal as a boolean.
