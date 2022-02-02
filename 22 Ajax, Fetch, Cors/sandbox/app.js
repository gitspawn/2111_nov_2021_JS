// Ответы сервера
// https://httpstatuses.com/
// 100 - info
// 200 - success
// 300 - redirect
// 400 - request errors
// 500 - server errors

//================================
// REST API
// https://jsonplaceholder.typicode.com/users/5/q?name=sara
// https - протокол
// jsonplaceholder.typicode.com - доменное имя
// users/5 - endpoint

// ======================================================
// https://www.youtube.com/watch?v=N7ta17oBv2w&user=vova
// watch - endpoint
// ? - начало запроса
// v=N7ta17oBv2w - параметры запроса
// & - разделитель параметров зароса

// ======================================================
// https://www.youtube.com/watch?v=N7ta17oBv2w&user=vova

// URI - https://www.youtube.com/watch?v=N7ta17oBv2w&user=vova
// URL - https://www.youtube.com
// URN - /watch?v=N7ta17oBv2w&user=vova

// =========================================================

// fetch(URI, OPTIONS)

// let usersArr = [];
// console.log("FIRST");

// fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "GET",
//     headers: {
//         Authorization: "qwe",
//         "Content-type": "application/json;utf-8;",
//     },
// })
//     .then((response) => response.json())
//     .then((albums) => {
//         // usersArr = albums;
//         console.log(albums);
//     });

// console.log("LAST");
// // console.log("42", usersArr);

// =================================================

// http://hn.algolia.com/api/v1/search?query=...

// const URL =
//     "http://hn.algolia.com/api/v1/search?query=react&tags=comment&page=4";
// fetch(URL)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data.hits);
//     });

/* //     title: "Relicensing React, Jest, Flow, and Immutable.js"
// url: "https://code.facebook.com/posts/300798627056246"


story_title: "NSA director heckled on stage at Black Hat security conference"
story_url: "http://www.forbes.com/sites/andygreenberg/2013/07/31/nsa-director-heckled-at-conference-as-he-asks-for-security-communitys-understanding/"
title: "" */

// ==================================================
// News API
// https://newsapi.org/v2/everything?q=tesla&from=2022-01-02&sortBy=publishedAt&apiKey=API_KEY

// const API_KEY = "8bc2be7fce9f45c3be5446f60af3b87c";
// let URL = `https://newsapi.org/v2/everything?q=tesla&from=2022-01-02&sortBy=publishedAt&apiKey=${API_KEY}`;
// fetch(URL)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data.articles);
//     });

// ==============================================
// Headers;

// const API_KEY = "8bc2be7fce9f45c3be5446f60af3b87c";
// let URL = `https://newsapi.org/v2/everything?q=tesla&from=2022-01-02&sortBy=publishedAt`;
// fetch(URL, {
//     method: "GET",
//     headers: {
//         Authorization: API_KEY,
//         "Content-type": "application/json",
//     },
// })
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data.articles);
//     });

// const API_KEY = "8bc2be7fce9f45c3be5446f60af3b87c";
// let URL = `https://newsapi.org/v2/everything?q=tesla&from=2022-01-02&sortBy=publishedAt&language=ru`;
// fetch(URL, {
//     method: "GET",
//     headers: {
//         "X-Api-Key": API_KEY,
//     },
// })
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data.articles);
//     });

// ===========================================
// PIXABAY;
// let API_KEY = "16847035-2769300c76d48561bbb060e95";
// let API_KEY = "25528331-a5ba9af968fa1a7bd7a782d49";

let URL = `https://pixabay.com/api/?key=25528331-a5ba9af968fa1a7bd7a782d49&q=dogs&image_type=photo&pretty=true&per_page=8&page=1`;

// collections: 3598
// comments: 165
// downloads: 156942
// id: 887443
// imageHeight: 3005
// imageSize: 2611531
// imageWidth: 3867
// largeImageURL: "https://pixabay.com/get/g1a040e281c2c539d575bedfffec31bdb1d60809b0145e301170a078fe073646078ee7600825e2976a6713c97531c6a99dd253739315fc9fd831eca8d1d4359a6_1280.jpg"
// likes: 1024
// pageURL: "https://pixabay.com/photos/flower-life-yellow-flower-crack-887443/"
// previewHeight: 116
// previewURL: "https://cdn.pixabay.com/photo/2015/08/13/20/06/flower-887443_150.jpg"
// previewWidth: 150
// tags: "flower, life, yellow flower"
// type: "photo"
// user: "klimkin"
// userImageURL: "https://cdn.pixabay.com/user/2017/07/18/13-46-18-393_250x250.jpg"
// user_id: 1298145
// views: 263910
// webformatHeight: 497
// webformatURL: "https://pixabay.com/get/gc2f6ff174d1e75fdd2533abb719993f18c051bf56cce928523da44c60eda692f6fcd4f4ac768e0a1d3ba06083a67df02_640.jpg"
// webformatWidth: 640

fetch(URL)
    .then((res) => res.json())
    .then((data) => makeGallery(data.hits));

let root = document.querySelector("#root");

function makeImage({ webformatURL, webformatWidth, tags }) {
    return `<img src=${webformatURL} alt=${tags} width={webformatWidth}/>`;
}

function makeGallery(imagesArr) {
    let markup = imagesArr.map((img) => makeImage(img));

    root.insertAdjacentHTML("beforeend", markup);
}
