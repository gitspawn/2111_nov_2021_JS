import newsTemplate from "../templates/news.handlebars";
import refs from "./refs";

function createMarkup(items) {
    let markup = newsTemplate(items);
    refs.root.insertAdjacentHTML("beforeend", markup);
}

export default createMarkup;
