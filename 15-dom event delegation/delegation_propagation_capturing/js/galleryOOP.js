// class Gallery {
//     constructor(galleryRef, largeRef) {
//         this.galleryRef = galleryRef;
//         this.largeRef = largeRef;
//     }

//     onGalleryClick(event) {
//         event.preventDefault();

//         if (event.target.nodeName !== "IMG") {
//             return;
//         }

//         this.setLarge(event.target.dataset.source);
//     }

//     setLarge(srcFromDataset) {
//         this.largeRef.src = srcFromDataset;
//     }

//     addListeners() {
//         this.galleryRef.addEventListener(
//             "click",
//             this.onGalleryClick.bind(this)
//         );
//     }

//     init() {
//         this.addListeners();
//     }
// }

// ===========================================
class Gallery {
    constructor(galleryRef, largeRef) {
        this.galleryRef = galleryRef;
        this.largeRef = largeRef;
    }

    onGalleryClick = (event) => {
        event.preventDefault();

        if (event.target.nodeName !== "IMG") {
            return;
        }

        this.setLarge(event.target.dataset.source);
    };

    setLarge = (srcFromDataset) => {
        this.largeRef.src = srcFromDataset;
    };

    addListeners = () => {
        this.galleryRef.addEventListener("click", this.onGalleryClick);
    };

    init = () => {
        this.addListeners();
    };
}

let galleryRefVariable = document.querySelector(".js-gallery");
let largeRefVariable = document.querySelector(".js-large-image");

let gallery = new Gallery(galleryRefVariable, largeRefVariable);

gallery.init();
