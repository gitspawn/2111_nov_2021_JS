import got from "got";

// const URL = "http://localhost:6060/books";
// got.post(URL, {
//     json: {
//         hello: "world",
//     },
// }).then((data) => console.log(data));

(async () => {
    const { data } = await got
        .post('http://localhost:6060/books"', {
            json: {
                hello: "world",
            },
        })
        .json();
})();
