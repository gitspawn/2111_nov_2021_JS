import lodash from "lodash";
import refs from "./refs";

console.log(lodash);

let formData = {};
const STORAGE_KEY = "feedback-from-form";

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", lodash.throttle(onTextAreaInput, 500));

refs.form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value;
});

saveUserData();

function onFormSubmit(event) {
    event.preventDefault();

    const userData = localStorage.getItem(STORAGE_KEY);
    const userDataParse = JSON.parse(userData);
    if (userDataParse) {
        localStorage.removeItem(STORAGE_KEY);
        event.target.reset();
    }
}

function onTextAreaInput() {
    const userData = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, userData);
}

function saveUserData() {
    const userData = localStorage.getItem(STORAGE_KEY);
    const { form } = refs;
    const setElemValue = form.elements;

    if (userData) {
        const userDataParse = JSON.parse(userData);
        setElemValue.email.value = userDataParse.email;
        setElemValue.message.value = userDataParse.message;
    }
}
