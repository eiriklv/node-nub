var nub = module.exports = function (xs) {
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

nub.by = function (xs, cmp) {
    if (typeof xs === 'function') {
        var cmp_ = cmp;
        cmp = xs;
        xs = cmp_;
    }
    
    var res = [];
    
    for (var i = 0; i < xs.length; i++) {
        var x = xs[i];
        
        var found = false;
        for (var j = 0; j < res.length; j++) {
            var y = res[j];
            if (cmp.call(res, x, y)) {
                found = true;
                break;
            }
        }
        
        if (!found) res.push(x);
    }
    
    return res;
};
