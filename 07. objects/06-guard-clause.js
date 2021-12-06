// const getCash = function (amount, balance) {
//     if (amount === 0) {
//         console.log("Введите сумму больше нуля");
//     } else if (amount > balance) {
//         console.log("Недостаточно средств на счету");
//     } else {
//         console.log("Средства сняты");
//     }
// };

// Паттерн guard clause - это способ использовать возможность досрочного возврата из функции
// с помощью оператора return, чтобы сделать вложенные условные выражения
// более одномерными.

const getCash = function (amount, balance) {
    if (amount === 0) {
        console.log("Введите сумму больше нуля");
        return;
    }

    if (amount > balance) {
        console.log("Недостаточно средств на счету");
        return;
    }

    console.log("Средства сняты");
};

getCash(0, 400); // Введите сумму больше нуля.
getCash(600, 400); // Недостаточно средств на счету.
getCash(100, 400); // Средства сняты

// https://medium.com/@timothydan/javascript-guard-clauses-64b999e3240
function userIsAdmin(user) {
    if (user.role == "admin") {
        if (user.manager == true) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function userIsAdmin(user) {
    if (user.role != "admin") {
        return false;
    }
    if (user.manager != true) {
        return false;
    }
    return true;
}
