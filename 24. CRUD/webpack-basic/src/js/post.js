// - Create
// Метод POST
// Тело
// Заголовки
// Ответ

// {
//     "id": 3,
//     "title": "Зов Ктулху",
//     "author": "Говард Лавкрафт",
//     "genres": [
//       "ужасы",
//       "мистика"
//     ],
//     "rating": 7.94
//   }

const URL = "http://localhost:6060/books";

function addBook(URL, newBook) {
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(newBook),
    };

    return fetch(URL, options)
        .then((res) => res.json())
        .catch((err) => console.log(err));
}

addBook(URL, {
    title: "C++ 2022",
    author: "Сам Склепал",
    genres: ["фантастика", "мистика"],
    rating: 2.98,
}).then((newBook) => console.log(newBook));

addBook(URL, {
    title: "Ruby 2022",
    author: "Сам Склепал",
    genres: ["фантастика", "мистика"],
    rating: 6.98,
}).then((newBook) => console.log(newBook));
// addBook(URL, bookToAdd);
