import refs from "./js/refs";
import menuData from "./js/menuData";
import menuTemplate from "./templates/menu.handlebars";

import "./scss/main.scss";

let markup = menuTemplate(menuData);
refs.root.innerHTML = markup;
