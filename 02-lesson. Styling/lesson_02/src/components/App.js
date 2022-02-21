import React from "react";

import Product from "./Product";
import Section from "./Section";
import BookList from "./BookList";

import "./global.css";

let bestBooks = [
    {
        id: "01",
        author: "Chinua Achebe",
        link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        title: "Things Fall Apart",
    },
    {
        id: "02",
        author: "Hans Christian Andersen",
        link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        title: "Fairy tales",
    },
    {
        id: "03",
        author: "Dante Alighieri",
        link: "https://en.wikipedia.org/wiki/Divine_Comedy\n",
        title: "The Divine Comedy",
    },
    {
        id: "04",
        author: "Unknown",
        link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        title: "The Epic Of Gilgamesh",
    },
];

let App = (props) => {
    return (
        <>
            {/* <BookList books={bestBooks} /> */}
            <Section title="Favotite products">
                <Product
                    title="Pizza"
                    imageUrl="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    price={12.35}
                    qty={20}
                />
                <Product title="Kebab Kazan" price={6.25} qty={2} />
            </Section>
        </>
    );
};

export default App;
