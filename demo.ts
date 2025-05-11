let add = function (x: number, y: number): number {
    return x + y;
}

let sum = add(5, 10);
console.log(sum); // Output: 15
console.log(typeof(add)); // Output: function

let addRest = function (...rest: number[]): number {
    let sum = 0;
    for (let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}

let sumRest = addRest(1, 2, 3, 4, 5, 3 , 4);
console.log(sumRest); // Output: 15