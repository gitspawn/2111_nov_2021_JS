let formRef = document.querySelector(".js-feedback-form");
let textAreaREf = document.querySelector("textarea");

window.addEventListener("load", getMessageFeedback);
textAreaREf.addEventListener("input", onTextArea);
formRef.addEventListener("submit", onSubmit);

function onTextArea(event) {
    let message = event.target.value;
    localStorage.setItem("msg", message);
}

function onSubmit(event) {
    event.preventDefault();

    let message = localStorage.getItem("msg");
    if (message) {
        localStorage.removeItem("msg");
        textAreaREf.textContent = "";
        event.target.reset();
    }
}

function getMessageFeedback() {
    let message = localStorage.getItem("msg");
    if (message) {
        textAreaREf.textContent = message;
    }
}
