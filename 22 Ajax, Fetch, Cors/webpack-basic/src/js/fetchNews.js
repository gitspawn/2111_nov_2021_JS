function fetchNews(query, pageNumber = 1) {
    const API_KEY = "8bc2be7fce9f45c3be5446f60af3b87c";
    let URL = `https://newsapi.org/v2/everything?q=${query}&from=2022-01-02&sortBy=publishedAt&page=${pageNumber}`;

    const options = {
        method: "GET",
        headers: {
            Authorization: API_KEY,
            "Content-type": "application/json",
        },
    };

    return fetch(URL, options)
        .then((res) => res.json())
        .then((data) => {
            if (data.status === "ok") {
                return data.articles;
            }

            return null;
        })
        .catch((err) => {
            console.log("Ошибка промиса", err);
        });
}

export default fetchNews;
