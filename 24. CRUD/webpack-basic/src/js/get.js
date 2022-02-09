// - Read
// Метод GET
// Ответ

const URL = "http://localhost:6060/books";

function showBooks(books) {
    // Тут делаем нашу разметку
    console.log(books);
}

// function getBooks(URL) {
//     fetch(URL, {})
//         .then((res) => res.json())
//         .then((book) => console.log(book))
//         .catch((err) => console.log(err));
// }

// getBooks(URL);

function getBooks(URL) {
    return fetch(URL, {})
        .then((res) => res.json())
        .catch((err) => console.log(err));
}

getBooks(URL).then((books) => showBooks(books));

// ==================================================

// function getBookByID(URL, ID) {
//     const urlWithID = URL + "/" + ID;
//     return fetch(urlWithID, {})
//         .then((res) => res.json())
//         .catch((err) => console.log(err));
// }

// getBookByID(URL, 2).then((book) => showBooks(book));
