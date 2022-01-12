// class Tabs {
//     constructor(tags, activeTag) {
//         this.tags = tags;
//         this.activeTag = activeTag;
//     }

//     onTagsClick(event) {
//         if (event.target.nodeName !== "BUTTON") {
//             return;
//         }

//         let prevTag = event.currentTarget.querySelector(".tags__btn--active");
//         if (prevTag) {
//             prevTag.classList.remove("tags__btn--active");
//         }

//         let nextTab = event.target;
//         nextTab.classList.add("tags__btn--active");

//         this.activeTag.textContent = nextTab.dataset.value;
//     }

//     addListeners() {
//         // console.log(this.activeTag);
//         // console.log(this);
//         this.tags.addEventListener("click", this.onTagsClick.bind(this));
//     }
// }

// =========================================
class Tabs {
    constructor(tags, activeTag) {
        this.tags = tags;
        this.activeTag = activeTag;
    }

    onTagsClick = (event) => {
        if (event.target.nodeName !== "BUTTON") {
            return;
        }

        let prevTag = event.currentTarget.querySelector(".tags__btn--active");
        if (prevTag) {
            prevTag.classList.remove("tags__btn--active");
        }

        let nextTab = event.target;
        nextTab.classList.add("tags__btn--active");

        this.activeTag.textContent = nextTab.dataset.value;
    };

    addListeners = () => {
        this.tags.addEventListener("click", this.onTagsClick);
    };

    init = () => {
        this.addListeners();
    };
}

let tagsRef = document.querySelector(".js-tags");
let activeTagRef = document.querySelector(".js-active-tag");

let tabs = new Tabs(tagsRef, activeTagRef);
tabs.init();
