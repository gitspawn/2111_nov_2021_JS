// Gallery

let galleryRef = document.querySelector(".js-gallery");
let largeRef = document.querySelector(".js-large-image");

// let onGalleryClick = (event) => {
//     event.preventDefault();
//     // console.log(event);

//     // let image = event.target.nodeName

//     if (event.target.nodeName !== "IMG") {
//         return;
//     }

//     let image = event.target;

//     // console.log(image.dataset);
//     console.log(image.dataset.source);
//     largeRef.src = image.dataset.source;
// };

let onGalleryClick = (event) => {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    console.log(event.target.dataset);
    setLarge(event.target.dataset.source);
};

function setLarge(srcFromDataset) {
    largeRef.src = srcFromDataset;
}

galleryRef.addEventListener("click", onGalleryClick);
