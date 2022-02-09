// - Delete (ID)
//     Метод DELETE
//     Ответ

const URL = "http://localhost:6060/books";

function deleteBook(URL, ID) {
    const options = {
        method: "DELETE",
    };

    const udateURL = URL + "/" + ID;
    return fetch(udateURL, options)
        .then((res) => res.json())
        .catch((err) => console.log(err));
}

// addBook(URL, bookToAdd).then((newBook) => console.log(newBook));
deleteBook(URL, 5);
