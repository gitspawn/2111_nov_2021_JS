import React, { Component } from "react";
import axios from "axios";

import ArticlesList from "./components/ArticlesList";
import Loader from "./components/Loader";
import Notification from "./components/Notification";

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
                this.setState({ error: err });
            })
            .finally(() => {
                this.setState({ loading: false });
            });
    }

    render() {
        let { articles, error, loading } = this.state;

        return (
            <div>
                <h1>https://hn.algolia.com/api/v1/search?query=react</h1>

                {error && (
                    <Notification
                        message={`We have an error: ${error.code}, mesage: ${error.message}`}
                    />
                )}
                {loading && <Loader />}
                {articles.length > 0 && <ArticlesList articles={articles} />}
            </div>
        );
    }
}
