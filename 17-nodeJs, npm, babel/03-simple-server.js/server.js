let express = require("express");
const books = [
    {
        author: "Chinua Achebe",
        country: "Nigeria",
        imageLink: "images/things-fall-apart.jpg",
        language: "English",
        link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        pages: 209,
        title: "Things Fall Apart",
        year: 1958,
    },
    {
        author: "Hans Christian Andersen",
        country: "Denmark",
        imageLink: "images/fairy-tales.jpg",
        language: "Danish",
        link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        pages: 784,
        title: "Fairy tales",
        year: 1836,
    },
    {
        author: "Dante Alighieri",
        country: "Italy",
        imageLink: "images/the-divine-comedy.jpg",
        language: "Italian",
        link: "https://en.wikipedia.org/wiki/Divine_Comedy\n",
        pages: 928,
        title: "The Divine Comedy",
        year: 1315,
    },
    {
        author: "Unknown",
        country: "Sumer and Akkadian Empire",
        imageLink: "images/the-epic-of-gilgamesh.jpg",
        language: "Akkadian",
        link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        pages: 160,
        title: "The Epic Of Gilgamesh",
        year: -1700,
    },
];

let app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.status(200).send("Hello from Express");
});

app.get("/about", (req, res) => {
    // req.body
    // req.params
    console.log(req);

    res.send("<h1>About page</h1>");
});

app.get("/books", (req, res) => {
    res.status(200).json(books);
});

app.use((req, res) => {
    res.status(404).send("Sorry can't find that!");
});

let PORT = 5050;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
