

function receivesAFunction (fn) {
    fn();
}


function returnsANamedFunction() {
    return function fn () {};
}


function returnsAnAnonymousFunction() {
    return function () {};
}
