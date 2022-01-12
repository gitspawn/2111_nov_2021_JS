// Tabs

let tags = document.querySelector(".js-tags");
let activeTag = document.querySelector(".js-active-tag");

function onTagsClick(event) {
    // console.log(event.target);
    // console.log(event.currentTarget);

    if (event.target.nodeName !== "BUTTON") {
        return;
    }

    // tags__btn--active

    let prevTag = event.currentTarget.querySelector(".tags__btn--active");
    if (prevTag) {
        prevTag.classList.remove("tags__btn--active");
    }

    let nextTab = event.target;
    nextTab.classList.add("tags__btn--active");

    activeTag.textContent = nextTab.dataset.value;
}

tags.addEventListener("click", onTagsClick);
// tags.addEventListener('click', handleTagsClick)
