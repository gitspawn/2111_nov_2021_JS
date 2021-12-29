/*
 * Открыть и закрыть по кнопке
 * Закрыть по клику в бекдроп
 * Закрыть по ESC
 */

let btnRef = document.querySelector("#myModalBtn");
let modalRef = document.querySelector("#myModal");
let closeModalBtnRef = document.querySelector(".close");

btnRef.addEventListener("click", () => {
    modalRef.style.display = "block";
    // window.addEventListener("keydown", onEscapeClose);
});

closeModalBtnRef.addEventListener("click", () => {
    modalRef.style.display = "none";
    window.removeEventListener("keydown", onEscapeClose);
    window.removeEventListener("click", onBackDropClose);
});

closeModalBtnRef.addEventListener("mouseover", (event) => {
    // event.target.style.cursor = "default";
    event.target.style.cursor = "pointer";
    window.removeEventListener("keydown", onEscapeClose);
    window.removeEventListener("click", onBackDropClose);
});

window.addEventListener("keydown", onEscapeClose);
window.addEventListener("click", onBackDropClose);

function onEscapeClose(event) {
    console.log(event.code);
    if (event.code === "Escape") {
        modalRef.style.display = "none";
    }
}

function onBackDropClose(event) {
    console.log("onBackDropClose");
    if (event.target === modalRef) {
        modalRef.style.display = "none";
        window.removeEventListener("keydown", onEscapeClose);
        window.removeEventListener("click", onBackDropClose);
    }
}

// window.removeEventListener("keydown", onEscapeClose);
// window.removeEventListener("click", onBackDropClose);
