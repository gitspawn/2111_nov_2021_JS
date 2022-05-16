import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
    state = {
        articles: [],
    };

    componentDidMount() {
        axios("https://hn.algolia.com/api/v1/search?query=react")
            .then((res) => {
                this.setState({ articles: res.data.hits });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    // async componentDidMount() {
    //     try {
    //         const res = await axios(
    //             "https://hn.algolia.com/api/v1/search?query=react"
    //         );

    //         await this.setState({ articles: res.data.hits });
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }

    render() {
        let { articles } = this.state;

        let articlesAll = articles.map((article) => (
            <li key={article.objectID}>
                <a href={article.url} target="_blank" rel="noreferrer noopener">
                    {article.title}
                </a>
            </li>
        ));

        return (
            <div>
                <h1>https://hn.algolia.com/api/v1/search?query=react</h1>
                {articlesAll}
            </div>
        );
    }
}
