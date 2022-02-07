/*
Thank you for registering with the open platform.
A new key has been created for you: 3534a47c-f615-488a-ac2b-1cbb3a5481ee
You can try this key by accessing https://content.guardianapis.com/search?api-key=3534a47c-f615-488a-ac2b-1cbb3a5481ee in your browser.
*/

// https://open-platform.theguardian.com/documentation/
// Example: https://content.guardianapis.com/search?page=2&q=debate&api-key=test

// const API_KEY = "3534a47c-f615-488a-ac2b-1cbb3a5481ee";

// fetch(
//     `https://content.guardianapis.com/search?page=1&q=debate&api-key=${API_KEY}`
// )
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//     });

/* 
apiUrl: "https://content.guardianapis.com/world/2022/jan/10/china-battles-omicron-outbreak-weeks-before-winter-olympics"
id: "world/2022/jan/10/china-battles-omicron-outbreak-weeks-before-winter-olympics"
isHosted: false
pillarId: "pillar/news"
pillarName: "News"
sectionId: "world"
sectionName: "World news"
type: "article"
webPublicationDate: "2022-01-10T10:18:03Z"
webTitle: "China battles Omicron outbreak weeks before Winter Olympics"
webUrl: "https://www.theguardian.com/world/2022/jan/10/china-battles-omicron-outbreak-we
*/

class News {
    constructor(URI, refs) {
        this.URI = URI;
        this.refs = refs;
        this.pageCounter = 1;
        this.inputValue = "";
    }

    fetchNews = () => {
        let searchQuery = `&q=${this.inputValue}`;
        let url = this.URI + this.pageCounter + searchQuery;

        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                if (data.response.status === "ok") {
                    // console.log(data);
                    this.renderNews(data.response.results);
                }

                return null;
            });
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

    onPrevBtnClick = () => {
        this.pageCounter -= 1;
        this.fetchNews();
    };

    onNextBtnClick = () => {
        this.pageCounter += 1;
        this.fetchNews();
    };

    onInputPageNumber = (event) => {
        // console.log(event.target.value);
        this.pageCounter = event.target.value;
        if (event.target.value > 0) {
            this.fetchNews();
        }
    };

    onSearchForm = (event) => {
        event.preventDefault();
        // console.log(this.refs.inputNewsSearch.value);
        // this.refs.inputNewsSearch.value

        this.inputValue = this.refs.inputNewsSearch.value;
        this.fetchNews();
    };

    loadListeners() {
        // window.addEventListener("load", this.fetchNews.bind(this));
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

console.log(refs);

let news_TOP = new News(URI, refs);
news_TOP.init();

// let news_Fashion = new News();
// let news_Sport = new News();
