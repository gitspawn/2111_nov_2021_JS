// Arguments => array like object - Псевдомассив

// FD

function getMult(a, b, c) {
    // console.log(arguments);
    // console.log(arguments[2]);
    // console.log(arguments.length);
    // console.log(a * b * c);
    // Check is Array
    // console.log(Array.isArray(arguments));
    // console.log(typeof arguments);
    // Convert to Array
    // console.log(Array.from(arguments));
    // console.log([...arguments]);
}

getMult(2, 5, 3);
// getMult(3, 5, 3);

//================================================
// FE
// let getMult = function (a, b, c) {
//     // console.log(arguments);
//     // console.log(arguments[2]);
//     console.log("length", arguments.length);
//     console.log(a * b * c);
// };

// getMult(2, 5, 3);
// // getMult(3, 5, 3);

//===========================
// AF
// Нету arguments
// let getMult = (a, b, c) => {
//     console.log(arguments);
//     console.log(a * b * c);
// };

// getMult(2, 5, 3);
// getMult(3, 5, 3);

// ==============================
// IEEF
