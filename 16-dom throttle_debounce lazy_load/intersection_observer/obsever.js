/**
 * IntersectionObserver
 * Lazy loading
 * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 */

// let box = document.querySelector(".js-observe-box");

// let observerInstance = new IntersectionObserver((entries, observer) => {
//     // console.log(entries);
//     // console.log(observer);
//     entries.forEach((entry) => {
//         // console.log(entry);
//         entry.target.textContent = "Is intersecting";
//         // console.log(entry.target.textContent);
//         // console.log(entry.target.dataset.src);
//         entry.target.src = entry.target.dataset.src;
//         observer.disconnect();
//     });
// });

// // console.log(observerInstance);
// observerInstance.observe(box);

// ===============================================

// console.log("test");

let options = { rootMargin: "0px 0px -200px 0px" };

if (!!window.IntersectionObserver) {
    let observer = new IntersectionObserver(onObserve, options);
    document.querySelectorAll("img").forEach((img) => {
        observer.observe(img);
    });
} else {
    console.log("IntersectionObserver is not supported");
}

function onObserve(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
        }
    });
}
