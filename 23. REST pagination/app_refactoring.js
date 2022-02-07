class News {
    constructor(URI, refs) {
        this.URI = URI;
        this.refs = refs;
        this.pageCounter = 1;
        this.inputValue = "";
        this.totalPages = null;
    }

    fetchNews = () => {
        let searchQuery = `&q=${this.inputValue}`;
        let url = this.URI + this.pageCounter + searchQuery;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (data.response.status === "ok") {
                    console.log(data);
                    this.renderNews(data.response.results);
                    this.totalPages = data.response.pages;
                    this.renderPagination(data.response);
                }

                return null;
            })
            .catch((err) => {
                this.renderError(err);
            });
    };

    renderError = (err) => {
        alert(err);
    };

    renderNews = (newsCollection) => {
        // console.log("newsCollection", newsCollection);
        this.refs.list.innerHTML = "";
        const newsItems = newsCollection.map(
            ({ webUrl, webTitle, webPublicationDate, sectionName }) => {
                let li = document.createElement("li");
                let a = document.createElement("a");
                let h6 = document.createElement("h6");
                let p = document.createElement("p");

                a.href = webUrl;
                a.target = "_blank";
                a.textContent = webTitle;

                h6.textContent = `category ${sectionName}`;

                p.textContent = `publicated at: ${webPublicationDate}`;

                p.append(h6);
                a.append(p);

                li.append(a);

                return li;
            }
        );

        this.refs.list.append(...newsItems);
    };

    renderPagination = (serverResponse) => {
        // console.log(this.refs.inputPageNumber);
        this.refs.inputPageNumber.value = serverResponse.currentPage;
        this.refs.span.textContent = `of ${serverResponse.pages}`;
    };

    onPrevBtnClick = () => {
        this.pageCounter -= 1;
        this.fetchNews();
    };

    onNextBtnClick = () => {
        this.pageCounter += 1;
        this.fetchNews();
    };

    onInputPageNumber = (event) => {
        // console.log(this.totalPages);
        this.pageCounter = event.target.value;
        if (event.target.value > 0 && event.target.value <= this.totalPages) {
            this.fetchNews();
        } else {
            alert("Не коректный номер страницы");
        }
    };

    onSearchForm = (event) => {
        event.preventDefault();

        this.inputValue = event.target.elements.text.value;
        this.fetchNews();
        event.target.elements.text.value = "";
    };

    loadListeners() {
        window.addEventListener("load", this.fetchNews);
        this.refs.prevBtn.addEventListener("click", this.onPrevBtnClick);
        this.refs.nextBtn.addEventListener("click", this.onNextBtnClick);
        this.refs.inputPageNumber.addEventListener(
            "input",
            this.onInputPageNumber
        );
        this.refs.searchForm.addEventListener("submit", this.onSearchForm);
    }

    init = () => {
        this.loadListeners();
    };
}

const API_KEY = "3534a47c-f615-488a-ac2b-1cbb3a5481ee";
const URI = `https://content.guardianapis.com/search?q=omicron&api-key=${API_KEY}&page-size=5&page=`;

let refs = {
    list: document.querySelector(".list"),
    prevBtn: document.querySelector("#prev"),
    nextBtn: document.querySelector("#next"),
    inputPageNumber: document.querySelector('input[type="number"]'),
    span: document.querySelector("span"),

    searchForm: document.querySelector("form"),
    inputNewsSearch: document.querySelector('input[type="text"]'),
};

let news_TOP = new News(URI, refs);
news_TOP.init();

// let news_Fashion = new News();
// let news_Sport = new News();
