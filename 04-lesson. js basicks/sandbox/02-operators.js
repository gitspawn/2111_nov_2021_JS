// String
// Math
// Logical

// 1. Если один из оперторов строка, то приводит к строке
// 2. Если нету строки, то работает математика (приведит к Number)
// 3. Если не может привести к стороке или к Number или встречается любой из логических оперторов, то приводит к Boolean

//===============================
// let num1 = 10;
// let num2 = 5;

// let result = num1 + num2;
// let result = num1 - num2;
// let result = num1 / num2;
// let result = num1 * num2;
// let result = num1 ** num2; // power
// let result = num1 % num2; // остаток от целочисленного деления деления
// num1 += num2;
// num1 -= num2;
// num1 /= num2;
// num1 *= num2;

// console.log(num1);

// Icrement  +1
// Decrement -1

// let i = 1;
// i = i + 1;
// i += 1;
// i++;
// ++i;

// let i = 1;
// i = i - 1;
// i--;
// i -= 1;
// --i;
// console.log(i);

// ================================
// String
// + concatenation (склейка)

// let greet = 'Hello';
// let msg = 'World';

// let res = greet + ' ' + msg;
// console.log(res);

// ===============================
// +=  append
// let user = 'Vova';
// user += ' ' + 'Sara';
// user += ' ' + 'Bob';
// console.log(user);

// let song = 'Don\'t worry be happy';
// let song = "Don\t\t\t't worry be happy";
// let song = "Don't worry\n be happy";
// let song = "Don't worry\r be happy";

// \b	Backspace
// \f	Form Feed
// \n	New Line
// \r	Carriage Return
// \t	Horizontal Tabulator
// \v	Vertical Tabulator

// console.log(song);

// ================================
// = - assigment

// Logical (Boolean)
// == - equal
// === - strict equel
// >
// <
// >=
// <=
// // ! - NOT
// != NOT equal
// !== NOT strict equal
// && AND
// || OR

// Type hinting (приведение типов)
// console.log(typeof 'vova' == 'sara'); // false
// console.log(typeof ('vova' == 'sara'));

// console.log('5' + 'px');
// console.log(typeof (5 + 'px'));
// console.log(50 + '50');

// console.log(50 + 50 + '50'); // string 10050
// console.log(50 + 50); // number 100
// console.log('50' / 2); // number 25
// console.log('150px' / 2); // NaN
// console.log('vova' * 2); // NaN
// console.log(typeof ('vova' * 2)); // NaN
// console.log(100 / 0); // Infinity
// console.log(-100 / 0); // -Infinity
// console.log(false + 'vova'); // falsevova
// console.log(false * 'vova'); // NaN

// console.log(!!'vova');
// console.log(!!'');
// console.log(!0);
// console.log(!undefined);
// console.log(!NaN);
// console.log(!false);

// 0
// '' - пустая строка
// undefined
// null
// NaN
// false

// && AND - затыкается на false
// console.log(10 && 20);
// console.log(10 && 0);
// console.log(0 && 10);
// console.log(20 && 0 && 10);

// || OR - затыкается на ture
// console.log(10 || 20);
// console.log(10 || 0);
// console.log(0 || 10);
// console.log(20 || 0 || 10);
// console.log(null || 0 || undefined);

// &
// |

// &&
// ||
