// console.log(_);

const lodash = _;

// console.log(lodash);

// let result = lodash.isArray([1, 2, 3, 4]);
// result = lodash.isArray("Vova");
// result = lodash.isArray(500);

// console.log(result);

// let arr = ["vova", "sara", 0, "vova", 100, 20, 100, 200, 500, "sara"];

// console.log(arr.length);

// let uniq = lodash.uniq(arr);
// console.log(uniq);
// ==============================
// _.chunk(array, [size=1])

let arr = ["vova", "sara", 0, "vova", 100, 20, 100, 200, 500, "sara"];
let ch = lodash.chunk(arr, 2);
console.log(ch);
