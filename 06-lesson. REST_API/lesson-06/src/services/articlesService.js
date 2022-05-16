import axios from "axios";

function fetchArticlesWithQuery(serchQuery = "covid", page = 0) {
    return axios(
        `https://hn.algolia.com/api/v1/search?query=${serchQuery}&page=${page}&hitsPerPage=5`
    ).then((response) => response.data.hits);
}

function fetchArticlesByUser(userName) {
    return axios(`https://hn.algolia.com/api/v1/users/${userName}`);
}

let reqFunctions = {
    fetchArticlesWithQuery,
    fetchArticlesByUser,
};

export default reqFunctions;
