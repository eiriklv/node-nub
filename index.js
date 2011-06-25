var uniq = module.exports = function (xs) {
    var keys = {};
    var objects = [];
    var res = [];
    
    for (var i = 0; i < xs.length; i++) {
        var x = xs[i];
        var tx = typeof x;
        
        if (tx === 'object' || tx === 'function' || x === '__proto__') {
            if (objects.indexOf(x) < 0) {
                objects.push(x);
                res.push(x);
            }
        }
        else if (!Object.hasOwnProperty.call(keys, x)) {
            keys[x] = true;
            res.push(x);
        }
    }
    
    return res;
};

uniq.by = function (xs, fn) {
};
