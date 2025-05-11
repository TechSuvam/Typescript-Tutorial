var add = function (x, y) {
    return x + y;
};
var sum = add(5, 10);
console.log(sum); // Output: 15
console.log(typeof (add)); // Output: function
var addRest = function () {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum;
};
var sumRest = addRest(1, 2, 3, 4, 5, 3, 4);
console.log(sumRest); // Output: 15
