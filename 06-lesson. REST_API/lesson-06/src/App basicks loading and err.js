import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
    state = {
        articles: [],
        loading: false,
        error: false,
    };

    componentDidMount() {
        this.setState({ loading: true });

        axios("https://hn.algolia.com/api/v1/search?query=react")
            .then((res) => {
                this.setState({ articles: res.data.hits });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ error: err.message });
            })
            .finally(() => {
                this.setState({ loading: false });
            });
    }

    render() {
        let { articles, error, loading } = this.state;

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

                {error && <p>We have some error</p>}
                {loading && <p>Loading...</p>}
                {articles.length > 0 && <ul>{articlesAll}</ul>}
            </div>
        );
    }
}
