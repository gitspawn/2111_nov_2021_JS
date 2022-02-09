import axios from "axios";

const URL = "http://localhost:6060/books";

const body = {
    title: "DOLANG 2022",
    author: "Сам Склепал",
    genres: ["фантастика", "мистика"],
    rating: 1.98,
};

axios
    .post(URL, body)
    .then((res) => res.data)
    .then((book) => console.log(book))
    .catch((err) => console.log(err));
