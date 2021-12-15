// Задание 6
// Напиши скрипт со следующим функционалом:
// white_check_mark
// eyes
// raised_hands

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
//  Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.
// let input;
// const numbers = [];
// let total = 0;

// let input;
// let numbers = [];
// let total = 0;

// while (2 + 2 == 4) {
//     input = prompt("Введите число");
//     if (input === null) {
//         console.log("Отменено пользвателем");
//         break;
//     }

//     if (isNaN(input)) {
//         alert("Пользователь ввел не число");
//     }

//     input = Number(input);

//     numbers.push(input);
// }
// console.log(numbers);

// if (numbers.length) {
//     for (let number of numbers) {
//         total += number;
//     }

//     console.log(`Общая сумма чисел равна ${total}`);
// }
// =========================================

let input = prompt("Введите число");
let numbers = [];
numbers.push(Number(input));
let total = 0;

for (let i = 0; input !== null; i++) {
    input = prompt("Введите число");
    if (input === null) {
        console.log("Отменено пользвателем");
        break;
    }

    if (isNaN(input)) {
        alert("Пользователь ввел не число");
    }

    input = Number(input);

    numbers.push(input);
}
console.log(numbers);

if (numbers.length) {
    for (let number of numbers) {
        total += number;
    }
    console.log(`Общая сумма чисел равна ${total}`);
}
