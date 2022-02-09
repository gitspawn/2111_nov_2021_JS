// const axios = require('axios');
import axios from "axios";

const URL = "http://localhost:6060/books";

axios
    .get(URL)
    .then((res) => res.data)
    .then((books) => console.log(books))
    // .then(({ data }) => console.log(data))
    .catch((err) => console.log(err));
