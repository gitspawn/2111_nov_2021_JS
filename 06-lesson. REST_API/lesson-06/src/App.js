import React, { Component } from "react";
import axios from "axios";

import ArticlesList from "./components/ArticlesList";
import Loader from "./components/Loader";
import Notification from "./components/Notification";
import Search from "../src/Search";

import reqFunctions from "../src/services/articlesService";

const { fetchArticlesWithQuery } = reqFunctions;

export default class App extends Component {
    state = {
        articles: [],
        loading: false,
        error: false,
        searchQuery: "",
        page: 0,
    };

    // componentDidMount() {
    // this.setState({ loading: true });

    // axios(`https://hn.algolia.com/api/v1/search?query=html&page=0`).then(
    //     (response) => {
    //         this.setState({ articles: response.data.hits });
    //     }
    // );

    // fetchArticlesWithQuery("react", 1)
    //     .then((articles) => {
    //         this.setState({ articles });
    //     })
    //     .catch((err) => {
    //         console.error(err);
    //         this.setState({ error: err });
    //     })
    //     .finally(() => {
    //         this.setState({ loading: false });
    //     });
    // }

    componentDidUpdate(prevProps, prevState) {
        let prevQuery = prevState.searchQuery;
        let currentQuerry = this.state.searchQuery;

        console.log("prevQuery", prevQuery);
        console.log("currentQuerry", currentQuerry);

        if (prevQuery !== currentQuerry) {
            console.log("делаем запрос");
            this.fetchArticles();
            this.setState({ articles: [], page: 0 });
        }
    }

    fetchArticles = () => {
        let { searchQuery, page, loading } = this.state;

        this.setState({ loading: true });

        fetchArticlesWithQuery(searchQuery, page)
            .then((articles) => {
                this.setState((prevState) => {
                    return {
                        articles: [...prevState.articles, ...articles],
                        page: prevState.page + 1,
                        // articles,
                    };
                });
            })
            .catch((err) => {
                console.error(err);
                this.setState({ error: err });
            })
            .finally(() => {
                this.setState({ loading: false });
            });
    };

    handleSubmit = (searchQuery) => {
        this.setState({
            searchQuery,
        });
    };

    render() {
        let { articles, error, loading, searchQuery, page } = this.state;
        let heading = `https://hn.algolia.com/api/v1/search?query=${searchQuery}&page=${page}`;

        return (
            <div>
                <h1>{heading}</h1>
                <Search onSubmit={this.handleSubmit} />

                {error && (
                    <Notification
                        message={`We have an error: ${error.code}, mesage: ${error.message}`}
                    />
                )}
                {loading && <Loader />}

                {articles.length > 0 && <ArticlesList articles={articles} />}

                {articles.length > 0 && !loading && (
                    <button onClick={this.fetchArticles}>Load More</button>
                )}
            </div>
        );
    }
}
