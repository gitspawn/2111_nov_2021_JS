// - Update (ID)
//     Методы PUT и PATCH
//     Тело
//     Заголовки
//     Ответ

const URL = "http://localhost:6060/books";

function updateBook(URL, bookToUpdate, ID) {
    const options = {
        method: "PATCH",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(bookToUpdate),
    };

    const udateURL = URL + "/" + ID;
    return fetch(udateURL, options)
        .then((res) => res.json())
        .catch((err) => console.log(err));
}

const bookToUpdate = {
    title: "Ruby on Rails",
    author: "Сам Склепал Python",
    // genres: ["фантастика", "мистика"],
    // rating: 9.98,
};

// addBook(URL, bookToAdd).then((newBook) => console.log(newBook));
updateBook(URL, bookToUpdate, 5);
