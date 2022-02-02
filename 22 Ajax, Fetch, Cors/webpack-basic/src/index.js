import fetchNews from "./js/fetchNews";
import createMarkup from "./js/markup";

fetchNews("react", 1).then((articles) => {
    createMarkup(articles);
});
