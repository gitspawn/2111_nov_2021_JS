let tools = ["hammer", "screwdriver", "knife", "saw", "axe"];

let template = document.querySelector(".template-demo").innerHTML;
let divRoot = document.querySelector("#root");

let templateScript = Handlebars.compile(template);
let markup = templateScript(tools);
divRoot.insertAdjacentHTML("beforeend", markup);
// console.log(Handlebars);
